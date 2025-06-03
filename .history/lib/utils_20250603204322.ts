import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateCarbs(formResponse: FormResponse) {
  formResponse.workoutDuration.hours = Math.floor(formResponse.workoutDuration.minutes / 60);

}