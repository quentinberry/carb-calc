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
import { DosageResponse } from "@/lib/types";
import { calculateCarbs, carbDosageToTime, formatHourAndMinuteToHourDecimal } from "@/lib/utils";
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
  const [decimalTime, setDecimalTime] = useState<DosageResponse | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workoutIntensity: 0.7,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const calculatedCarbs = calculateCarbs(values);
    setCarbs(calculatedCarbs);

    setDecimalTime(carbDosageToTime(values));
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex space-x-4 items-center">
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
              <FormItem>
                <FormLabel>Weight</FormLabel>
                <FormControl>
                <div className="flex items-center space-x-2">
                  <Input
                  width={"50px"}
                  type="number"
                  placeholder="e.g. 70"
                  value={field.value ?? ""}
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(value === "" ? null : Number(value));
                  }}
                  />
                  <span>Kg</span>
                </div>
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
                    max={0.9}
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
                      value={
                        field.value !== undefined && field.value !== null
                          ? field.value
                          : ""
                      }
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
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Results
      </h2>
      {carbs !== null ? (
        <>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          You should consume {carbs !== null ? `~${carbs}g` : "..."} of total carbohydrates for your workout.
          <br /><br />
          This means you should take in: <br />
          <ul className="list-disc pl-6">
            {decimalTime && (
              <>
                <li>
                ~{decimalTime["20m"]}g of carbohydrates every 20 minutes
                </li>
                <li>
                ~{decimalTime["30m"]}g of carbohydrates every 30 minutes
                </li>
                <li>
                ~{decimalTime["60m"]}g of carbohydrates every 60 minutes
                </li>
              </>
            )}
          </ul>
        </p>
        </>
      ) : ((
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Enter your info and press the button to calculate the amount of carbohydrates you need.
        </p>

      ))}
    </>
  );
}
