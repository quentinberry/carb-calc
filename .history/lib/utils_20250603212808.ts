import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { DosageResponse, FormResponse } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateCarbs(formResponse: FormResponse): number {
  const { weight, workoutIntensity, workoutDuration } = formResponse;
  const durationInHours = formatHourAndMinuteToHourDecimal(workoutDuration.hours, workoutDuration.minutes)
  const carbsTotal = workoutIntensity * weight * durationInHours
  return Math.round(carbsTotal * 10) / 10;
}

export function formatHourAndMinuteToHourDecimal(hours: number, minutes: number): number {
  return hours + minutes / 60;
}

export function carbDosageToTime(formResponse: FormResponse): DosageResponse {
  const {workoutDuration } = formResponse;
  const totalCarbs = calculateCarbs(formResponse);

  const durationInMinutes = workoutDuration.hours * 60 + workoutDuration.minutes

  const dosage: DosageResponse = {
    "20m": Math.round(totalCarbs /(durationInMinutes / 20)),
    "30m": Math.round(totalCarbs /(durationInMinutes / 30)),
    "60m": Math.round(totalCarbs /(durationInMinutes / 60)),
  };

  console.log("Dosage Response:", dosage);

  return dosage;
 
}