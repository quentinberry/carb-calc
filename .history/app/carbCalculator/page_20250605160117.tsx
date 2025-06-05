"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DosageResponse } from "@/lib/types";
import { calculateCarbs, carbDosageToTime } from "@/lib/utils";
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
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Weight & Intensity */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weight (Kg)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="70"
                        className="w-full"
                        value={field.value ?? ""}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value === "" ? null : Number(e.target.value)
                          )
                        }
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
  
            <div className="w-full">
              <FormField
                control={form.control}
                name="workoutIntensity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workout Intensity</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) =>
                          field.onChange(value === "" ? null : Number(value))
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select an intensity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Intensity Levels</SelectLabel>
                            <SelectItem value="0.7">Easy</SelectItem>
                            <SelectItem value="0.8">Moderate</SelectItem>
                            <SelectItem value="0.9">Hard</SelectItem>
                            <SelectItem value="1.0">Really Hard</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
  
          {/* Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="workoutDuration.hours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration (Hours)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="0"
                      value={field.value ?? ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === "" ? null : Number(e.target.value)
                        )
                      }
                      min={0}
                      className="w-full"
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
                  <FormLabel>Duration (Minutes)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="0"
                      value={field.value ?? ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === "" ? null : Number(e.target.value)
                        )
                      }
                      min={0}
                      max={59}
                      className="w-full"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
  
          <Button type="submit" className="w-full md:w-auto">
            Calculate
          </Button>
        </form>
      </Form>
  
      {/* Results */}
      <h2 className="mt-12 text-3xl font-semibold border-b pb-2">Results</h2>
  
      {carbs !== null ? (
        <div className="mt-6 leading-7 text-lg">
          <p>
            You should consume <strong>~{carbs}g</strong> of total carbohydrates for your workout.
          </p>
          <br />
          <p>This means you should consume in:</p>
          <ul className="list-disc pl-6 mt-2">
            {decimalTime && (
              <>
                <li>~{decimalTime["20m"]}g every 20 minutes</li>
                <li>~{decimalTime["30m"]}g every 30 minutes</li>
                <li>~{decimalTime["60m"]}g every 60 minutes</li>
              </>
            )}
          </ul>
        </div>
      ) : (
        <p className="mt-6 leading-7 text-lg">
          Enter your info and press the button to calculate the amount of carbohydrates you need.
        </p>
      )}
    </div>
  );
  
}
