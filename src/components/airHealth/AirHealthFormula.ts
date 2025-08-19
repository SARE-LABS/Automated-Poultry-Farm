import { AirQualityDataProps, CalibrationRange, Parameter } from "./AirHealthType";



const calibrationTargets: Record<Parameter, CalibrationRange> = {
  CO2: { low: 400, high: 5000 },       // ppm
  NH3: { low: 0, high: 50 },           // ppm
  Temperature: { low: 15, high: 40 },  // °C
  Humidity: { low: 30, high: 90 },     // %RH
  TVOC: { low: 0, high: 5000 }         // ppb
};

// Normalize a single parameter value into a percentage
export function normalizeToPercentage(param: Parameter, value: number): number {
  const { low, high } = calibrationTargets[param];

  if (value <= low) return 0;
  if (value >= high) return 100;

  const percentage = ((value - low) / (high - low)) * 100;
  return parseFloat(percentage.toFixed(2));
}

// Get percentage of each parameter at a given time
export function parameterPercentages(data: AirQualityDataProps) {
  return {
    CO2: normalizeToPercentage("CO2", data.CO2),
    NH3: normalizeToPercentage("NH3", data.NH3),
    TVOC: normalizeToPercentage("TVOC", data.TVOC),
    Temperature: normalizeToPercentage("Temperature", data.temperature),
    Humidity: normalizeToPercentage("Humidity", data.humidity),
  };
}

// Real-time overall air health (current snapshot)
export const airHealthOverallIndexCurrent = (data: AirQualityDataProps): number => {
  const percents = parameterPercentages(data);
  const total = Object.values(percents).reduce((acc, val) => acc + val, 0);
  return parseFloat((total / 5).toFixed(2));
};

// Percentage increase between two snapshots
export const airHealthPercentageIncrease = (data: AirQualityDataProps[]): number => {
  if (data.length < 2) return 0;

  const oldIndex = airHealthOverallIndexCurrent(data[0]);
  const newIndex = airHealthOverallIndexCurrent(data[1]);

  return ((newIndex - oldIndex) / oldIndex) * 100;
};

// Daily mean air health from hourly logs
export const dailyMeanAirHealth = (hourlyData: AirQualityDataProps[]): number => {
  if (hourlyData.length === 0) return 0;

  const total = hourlyData.reduce((acc, hourData) => acc + airHealthOverallIndexCurrent(hourData), 0);
  return parseFloat((total / hourlyData.length).toFixed(2));
};

// Weekly air health from daily means
export const weeklyAirHealth = (dailyData: AirQualityDataProps[][]): number[] => {
  // dailyData is an array of 7 items, each containing an array of hourly logs for that day
  return dailyData.map(dayLogs => dailyMeanAirHealth(dayLogs));
};
