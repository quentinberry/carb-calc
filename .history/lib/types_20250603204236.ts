type FormResponse = {
  age: number;
  weight: number;
  workoutIntensity: number;
  workoutDuration: {
    hours: number;
    minutes: number;
  }
}