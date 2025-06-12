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
    message: "Gewicht darf nicht leer sein",
  }),
  workoutIntensity: z.number().min(0.7).max(1, {
    message: "Trainingsintensität muss zwischen 0.7 und 1 liegen",
  }),
  workoutDuration: z.object({
    hours: z.number().min(0, {
      message: "Stunden dürfen nicht negativ sein",
    }),
    minutes: z.number().min(0).max(59, {
      message: "Minuten müssen zwischen 0 und 59 liegen",
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
          {/* Gewicht & Intensität */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gewicht (Kg)</FormLabel>
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
                    <FormLabel>Trainingsintensität</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) =>
                          field.onChange(value === "" ? null : Number(value))
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Wähle eine Intensität" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Intensitätsstufen</SelectLabel>
                            <SelectItem value="0.7">Leicht</SelectItem>
                            <SelectItem value="0.8">Mittel</SelectItem>
                            <SelectItem value="0.9">Schwer</SelectItem>
                            <SelectItem value="1.0">Sehr schwer</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
  
          {/* Dauer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="workoutDuration.hours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dauer (Stunden)</FormLabel>
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
                  <FormLabel>Dauer (Minuten)</FormLabel>
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
            Berechnen
          </Button>
        </form>
      </Form>
  
      {/* Ergebnisse */}
      <h2 className="mt-12 text-3xl font-semibold border-b pb-2">Ergebnisse</h2>

      {carbs !== null ? (
        <div className="mt-6 leading-7 text-lg">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Du solltest ungefähr <strong>~{carbs}g</strong> Kohlenhydrate für dein Training zu dir nehmen.
          </p>
          <br />
          <p className="leading-7 [&:not(:first-child)]:mt-6">Das bedeutet, du solltest folgendes konsumieren:</p>
          <ul className="list-disc pl-6 mt-2">
            {decimalTime && (
              <>
                <li>~{decimalTime["20m"]}g alle 20 Minuten</li>
                <li>~{decimalTime["30m"]}g alle 30 Minuten</li>
                <li>~{decimalTime["60m"]}g alle 60 Minuten</li>
              </>
            )}
          </ul>
        </div>
      ) : (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Gib deine Daten ein und drück den Button, um die Menge an Kohlenhydraten zu berechnen, die du brauchst.
        </p>
      )}
    </div>
  );
}
