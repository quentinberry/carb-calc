import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { FormResponse } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateCarbs(formResponse: FormResponse): number {
  const { weight, workoutIntensity, workoutDuration } = formResponse;
  const durationInHours = workoutDuration.hours + workoutDuration.minutes / 60;
  const carbsTotal = workoutIntensity * weight * durationInHours
  return Math.round(carbsTotal * 10) / 10;
}

export function formatHourAndMinuteToHourDecimal(hours: number, minutes: number): number {
  const durationInHours = hours + minutes / 60;
}