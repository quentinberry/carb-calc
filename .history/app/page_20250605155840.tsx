import CarbCalculatorPage from "./carbCalculator/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-start sm:items-start">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Willkommen bei Carb-calc!
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Hier findest du heraus, wie viele Kohlenhydrate du brauchst, um bei deinem Training voller Energie zu bleiben.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Wie viele Kohlenhydrate brauchst du?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Das hängt von deinem Gewicht, der Intensität und Dauer deines Trainings ab. Für Workouts, die länger als eine Stunde dauern, solltest du etwa 30-60g Kohlenhydrate pro Stunde zu dir nehmen.
          <br /><br />
          Energiegels sind zwar praktisch, aber oft teuer – warum nicht deine eigenen herstellen und dabei Geld sparen?
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Lass uns deinen Kohlenhydratbedarf berechnen!
        </h2>
        <CarbCalculatorPage />
      </main>
    </div>
  );
}

/*
 <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Welcome to Carb-calc
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This page helps you to find the correct amount of carbohydrates you need to eat to maintain energy during your workout.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          So, how many carbohydrates do I need?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Your carbohydrate needs depend on your weight, workout intensity, and duration. Generally, consume 30-60g of carbs per hour for workouts over an hour.
          <br /><br />
          Energy gels are convenient but costly; consider making your own for a budget-friendly option.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Let&apos;s calculate your carbohydrate needs!
        </h2>
        */
