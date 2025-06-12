export type FormResponse = {
  weight: number;
  workoutIntensity: number;
  workoutDuration: {
    hours: number;
    minutes: number;
  }
}

export type DosageResponse = {
  "20m": number;
  "30m": number;
  "60m": number;
}

export type RecipesCalculatorProps = {
  wantedGram: number;
}