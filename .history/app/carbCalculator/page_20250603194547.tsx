import { Form, Field, Label } from "@/components/ui/form";

export default function CarbCalculatorPage() {
  return (
  <>
  <Form>
  <FormField
    control={...}
    name="..."
    render={() => (
      <FormItem>
        <FormLabel />
        <FormControl>
          { /* Your form field */}
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
</Form>

{/* 
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
            <option value="0.7">Low</option>
            <option value="0.8">Moderate</option>
            <option value="0.9">High</option>
            <option value="1.0">Very High</option>
          </Form.Select>
        </Form.Control>
        <Form.ErrorMessage name="workoutIntensity" />
    </Form>
    </> */}
  )
}