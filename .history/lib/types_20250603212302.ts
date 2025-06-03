export type FormResponse = {
  weight: number;
  workoutIntensity: number;
  workoutDuration: {
    hours: number;
    minutes: number;
  }
}

export Type DoageResponse = {
  "20m": number;
  "30m": number;
  "60m": number;
}