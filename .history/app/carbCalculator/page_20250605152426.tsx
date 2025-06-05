<div className="flex flex-col md:flex-row gap-4 w-full">
  <FormField
    control={form.control}
    name="weight"
    render={({ field }) => (
      <FormItem className="flex-1">
        <FormLabel>Weight (Kg)</FormLabel>
        <FormControl>
          <Input
            type="number"
            placeholder="70"
            value={field.value ?? ""}
            onChange={(e) =>
              field.onChange(e.target.value === "" ? null : Number(e.target.value))
            }
            className="w-full"
          />
        </FormControl>
      </FormItem>
    )}
  />

  <FormField
    control={form.control}
    name="workoutIntensity"
    render={({ field }) => (
      <FormItem className="flex-1">
        <FormLabel>Workout Intensity</FormLabel>
        <FormControl>
          <div className="flex flex-col gap-2 w-full">
            <Slider
              value={[field.value]}
              min={0.7}
              max={0.9}
              step={0.1}
              onValueChange={(value) => field.onChange(value[0])}
              className="w-full"
            />
            <FormDescription>
              Selected Intensity:{" "}
              {{
                0.7: "Easy",
                0.8: "Moderate",
                0.9: "Hard",
              }[field.value as number] || "Easy"}
            </FormDescription>
          </div>
        </FormControl>
      </FormItem>
    )}
  />
</div>
