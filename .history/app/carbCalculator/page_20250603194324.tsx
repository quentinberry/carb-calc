import { Form } from "@/components/ui/form";

export default function CarbCalculatorPage() {
  return (
    <Form>
      <Form.Field>
        <Form.Label htmlFor="weight">Weight (kg)</Form.Label>
        <Form.Control>
          <Form.Input id="weight" type="number" placeholder="Enter your weight in kg" />
        </Form.Control>
        <Form.ErrorMessage name="weight" />
      </Form.Field>
      <Form.Field>
        <Form.Label htmlFor="workoutIntensity">Workout Intensity</Form.Label>
        <Form.Control>
          <Form.Select id="workoutIntensity">
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </Form.Select>
        </Form.Control>
        <Form.ErrorMessage name="workoutIntensity" />
    </Form>
  )
}