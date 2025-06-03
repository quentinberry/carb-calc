"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { calculateCarbs } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
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
});

export default function CarbCalculatorPage() {
  const [carbs, setCarbs] = useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workoutIntensity: 0.7,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const carbs = calculateCarbs(values);
    setCarbs(carbs);
    console.log(`You need ${carbs}g of carbohydrates for your workout.`);
    console.log(values);
  }

  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="flex space-x-4">
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="e.g. 70"
                  value={field.value ?? ""}
                  onChange={(e) => {
                    const value = e.target.value;
                      field.onChange(value === "" ? null : Number(value));
                    }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        </div>
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
                Selected Intensity:{" "}
                {(() => {
                  const intensityMap = {
                    0.7: "Easy",
                    0.8: "Moderate",
                    0.9: "Hard",
                    1: "Very hard",
                  };
                  return (
                    intensityMap[
                      field.value as unknown as keyof typeof intensityMap
                    ] || "easy"
                  );
                })()}
              </FormDescription>
            </FormItem>
          )}
        />
        <div className="flex space-x-4">
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
              value={field.value ?? ""}
              onChange={(e) => {
                const value = e.target.value;
                  field.onChange(value === "" ? null : Number(value));
                }}
              min={0}
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
              value={field.value !== undefined && field.value !== null ? field.value : ""}
              onChange={(e) => {
              const value = e.target.value;
                field.onChange(value === "" ? null : Number(value));
              }}
              min={0}
            />
            </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    <p>
     You need {carbs !== null ? `${carbs}g` : "..." } of carbohydrates for your workout.
    </p>
    </>
  );
}
