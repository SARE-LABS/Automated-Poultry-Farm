export interface AirQualityDataProps {
    CO2: number;
    NH3: number;
    TVOC: number;
    temperature: number;
    humidity: number;
}

export type Parameter = "CO2" | "NH3" | "Temperature" | "Humidity" | "TVOC";

export interface CalibrationRange {
  low: number;
  high: number;
}