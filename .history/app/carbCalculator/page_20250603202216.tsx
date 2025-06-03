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
  age: z.number().min(1, {
    message: "Age must not be empty",
  }),
  weight: z.number().min(1, {
    message: "Weight must not be empty",
  }),
  workoutIntensity: z.number().min(0.7).max(1, {
    message: "Workout intensity must be between 0.7 and 1",
  }),
  workoutDuration: z.object({
    hours: z.number().min(0, {
      message: "Hours must not be negative",
    }),
    minutes: z.number().min(0).max(59, {
      message: "Minutes must be between 0 and 59",
    }),
  }),
})

export default function CarbCalculatorPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 0,
      weight: 0,
      workoutIntensity: 0.7,
      workoutDuration: {
        hours: 0,
        minutes: 0, 
      }
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
                <Input type="number"
                placeholder="age"
                value={field.value || ""}
                onChange={(e) =>
                  field.onChange(Number(e.target.value))
                }/>
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
                  min={0.7}
                  max={1}
                  step={0.1}
                  onValueChange={(value) => field.onChange(value[0])}
                  />
                </FormControl>
                <FormDescription>
                Selected Intensity: {(() => {
                  const intensityMap = {
                    0.7: "easy",
                    0.8: "moderate",
                    0.9: "hard",
                    1: "very hard",
                  }
                  return intensityMap[field.value as unknown as keyof typeof intensityMap] || "easy"
                })()}
                </FormDescription>
            </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workoutDuration.hours"
            render={({ field }) => (
            <FormItem>
              <FormLabel>Workout Duration (Hours)</FormLabel>
              <FormControl>
              <Input
                type="number"
                placeholder="hours"
                value={field.value || ""}
                onChange={(e) =>
                  field.onChange(Number(e.target.value))
                }
              />
              </FormControl>
            </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workoutDuration.minutes"
            render={({ field }) => (
            <FormItem>
              <FormLabel>Workout Duration (Minutes)</FormLabel>
              <FormControl>
              <Input
                type="number"
                placeholder="minutes"
                value={field.value || ""}
                onChange={(e) =>
                  field.onChange(Number(e.target.value))
                }
              />
              </FormControl>
            </FormItem>
            )}
          />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
    
}