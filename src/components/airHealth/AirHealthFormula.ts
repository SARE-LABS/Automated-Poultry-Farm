
// AirHealthFormula.ts
// -------------------------------------------------------------
// This module provides utility functions for calculating air health metrics
// in the SARE Automated Poultry Farm system. It normalizes sensor readings
// (CO2, NH3, TVOC, temperature, humidity) into percentages, computes overall
// air health scores, and provides analytics for daily/weekly trends.
//
// Key functions:
// - normalizeToPercentage: Converts a raw sensor value to a normalized percentage
//   based on calibration ranges for each parameter.
// - parameterPercentages: Returns normalized percentages for all air quality parameters.
// - airHealthOverallIndexCurrent: Calculates the overall air health score (mean of all parameters).
// - airHealthPercentageIncrease: Computes percentage change between two air health snapshots.
// - dailyMeanAirHealth: Calculates daily mean air health from hourly logs.
// - weeklyAirHealth: Aggregates daily means into a weekly trend array.
//
// These formulas support real-time monitoring, alerting, and analytics in the UI.
// -------------------------------------------------------------
import { AirQualityDataProps, CalibrationRange, Parameter } from "./AirHealthType";




// Calibration ranges for each air quality parameter
// These define the expected min/max values for normalization
const calibrationTargets: Record<Parameter, CalibrationRange> = {
  CO2: { low: 400, high: 5000 },       // ppm (parts per million)
  NH3: { low: 0, high: 50 },           // ppm
  Temperature: { low: 15, high: 40 },  // °C (Celsius)
  Humidity: { low: 30, high: 90 },     // %RH (relative humidity)
  TVOC: { low: 0, high: 5000 }         // ppb (parts per billion)
};


/**
 * Converts a raw sensor value to a normalized percentage (0-100%)
 * based on the calibration range for the given parameter.
 * Used to standardize different sensor readings for comparison.
 */
export function normalizeToPercentage(param: Parameter, value: number): number {
  const { low, high } = calibrationTargets[param];
  if (value <= low) return 0;
  if (value >= high) return 100;
  const percentage = ((value - low) / (high - low)) * 100;
  return parseFloat(percentage.toFixed(2));
}


/**
 * Returns normalized percentages for all air quality parameters
 * in a given AirQualityDataProps object.
 */
export function parameterPercentages(data: AirQualityDataProps) {
  return {
    CO2: normalizeToPercentage("CO2", data.CO2),
    NH3: normalizeToPercentage("NH3", data.NH3),
    TVOC: normalizeToPercentage("TVOC", data.TVOC),
    Temperature: normalizeToPercentage("Temperature", data.temperature),
    Humidity: normalizeToPercentage("Humidity", data.humidity),
  };
}


/**
 * Calculates the overall air health score for a given snapshot.
 * The score is the mean of all normalized parameter percentages.
 * Used for real-time air health display in the UI.
 */
export const airHealthOverallIndexCurrent = (data: AirQualityDataProps): number => {
  const percents = parameterPercentages(data);
  const total = Object.values(percents).reduce((acc, val) => acc + val, 0);
  return parseFloat((total / 5).toFixed(2));
};


/**
 * Calculates the percentage increase in air health score between two snapshots.
 * Used to show trends (improvement or decline) in air quality.
 */
export const airHealthPercentageIncrease = (data: AirQualityDataProps[]): number => {
  if (data.length < 2) return 0;
  const oldIndex = airHealthOverallIndexCurrent(data[0]);
  const newIndex = airHealthOverallIndexCurrent(data[1]);
  return ((newIndex - oldIndex) / oldIndex) * 100;
};


/**
 * Calculates the daily mean air health score from hourly sensor logs.
 * Used for daily analytics and charting.
 */
export const dailyMeanAirHealth = (hourlyData: AirQualityDataProps[]): number => {
  if (hourlyData.length === 0) return 0;
  const total = hourlyData.reduce((acc, hourData) => acc + airHealthOverallIndexCurrent(hourData), 0);
  return parseFloat((total / hourlyData.length).toFixed(2));
};


/**
 * Aggregates daily mean air health scores into a weekly trend array.
 * Each item in dailyData is an array of hourly logs for one day.
 * Used for weekly analytics and charting in the UI.
 */
export const weeklyAirHealth = (dailyData: AirQualityDataProps[][]): number[] => {
  return dailyData.map(dayLogs => dailyMeanAirHealth(dayLogs));
};
