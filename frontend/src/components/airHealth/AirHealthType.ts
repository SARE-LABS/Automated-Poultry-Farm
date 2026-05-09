
// AirHealthType.ts
// -------------------------------------------------------------
// This file defines TypeScript types and interfaces for air quality data
// in the SARE Automated Poultry Farm system. These types are used throughout
// the air health monitoring and analytics modules to ensure type safety and clarity.
// -------------------------------------------------------------

/**
 * AirQualityDataProps
 * Represents a snapshot of air quality sensor readings in the poultry farm.
 * Each property corresponds to a monitored parameter.
 * - CO2: Carbon dioxide concentration (ppm)
 * - NH3: Ammonia concentration (ppm)
 * - TVOC: Total Volatile Organic Compounds (ppb)
 * - temperature: Ambient temperature (°C)
 * - humidity: Relative humidity (%RH)
 */
export interface AirQualityDataProps {
  CO2: number;
  NH3: number;
  TVOC: number;
  temperature: number;
  humidity: number;
}


/**
 * Parameter
 * Union type for all supported air quality parameters.
 * Used for type-safe parameter selection in formulas and UI.
 */
export type Parameter = "CO2" | "NH3" | "Temperature" | "Humidity" | "TVOC";


/**
 * CalibrationRange
 * Defines the expected min (low) and max (high) values for a parameter.
 * Used for normalizing sensor readings to percentages.
 */
export interface CalibrationRange {
  low: number;
  high: number;
}


/**
 * ParameterCardProp
 * Props for the ParameterCard component, representing a single air quality parameter
 * and its current reading for display in the UI.
 */
export interface ParameterCardProp {
  name: string;
  currentReading: number;
}