import { useState } from "react";

export default function CarbCalculatorResult(carbs: number) {
  const [carbs, setCarbs] = useState<number | null>(null);
    const [decimalTime, setDecimalTime] = useState<DosageResponse | null>(null);
  return (<>
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
  )
}