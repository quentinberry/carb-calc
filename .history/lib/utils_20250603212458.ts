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
  const { weight, workoutIntensity, workoutDuration } = formResponse;
  const durationInMinutes = workoutDuration.hours * 60 + workoutDuration.minutes
  const carbsTotal = workoutIntensity * weight * durationInHours
  const totalCarbs = Math.round(carbsTotal * 10) / 10;

  const dosage: DosageResponse = {
    "20m": Math.round((totalCarbs / 3) * 10) / 10,
    "30m": Math.round((totalCarbs / 2) * 10) / 10,
    "60m": totalCarbs
  };
 
}