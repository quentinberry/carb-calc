import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateCarbs(formResponse: FormResponse) {
  const { age, weight, workoutIntensity, workoutDuration } = formResponse;

  const durrationInHours = workoutDuration.hours + workoutDuration.minutes / 60;

  /* Math calulation to determine carbohydrate needs 
  Carbohydrate intake (grams/hour) = 0.7 - 1.0 g per kg body weight per hour
  */
  const carbsPerKg = workoutIntensity * weight * durrationInHours; // Adjusted based on intensity
}