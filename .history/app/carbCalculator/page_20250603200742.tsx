"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  age: z.string().min(1, {
    message: "Username must not be empty",
  }),
  weight: z.string().min(1, {
    message: "Weight must not be empty",
  }),
  workoutIntensity: z.string().min(0.7, {
    message: "Workout intensity must not be empty",
  }),
  workoutDuration: z.string().min(1, {
    message: "Workout duration must not be empty",
  }),

})

export default function CarbCalculatorPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "",
      weight: "",
      workoutIntensity: "",
      workoutDuration: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" placeholder="e.g. 21" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight</FormLabel>
              <FormControl>
                <Input type="number" placeholder="e.g. 70" {...field}/>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workoutIntensity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Workout Intensity</FormLabel>
                <FormControl>
                <Slider
                  defaultValue={[0.7]}
                  value={[field.value || 0.7]}
                  max={1}
                  step={0.05}
                  onValueChange={(value) => field.onChange(value[0])}
                />
                </FormControl>
                <FormDescription>
                Selected Intensity: {field.value || 0.7}
                </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workoutDuration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Workout Duration</FormLabel>
              <FormControl>
                <Input type="number" placeholder="e.g. 60" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
    
}