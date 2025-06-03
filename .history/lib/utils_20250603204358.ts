import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateCarbs(formResponse: FormResponse) {
  const { age, weight, workoutIntensity, workoutDuration } = formResponse;

  /* Math calulation to determine carbohydrate needs 
  
  */
}