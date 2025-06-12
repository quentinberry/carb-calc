import Link from "next/link";
import CarbCalculatorPage from "./carbCalculator/page";

export default function Home() {
  return (
    <div className="container mx-auto px-4 max-w-4xl mt-18 mb-18">
      <span className="flex justify-center mb-8">
        <Link href="/" className="text-blue-500 hover:underline">
          Carb Calculator
        </Link>
        <Link href="/recipes" className="ml-4 text-blue-500 hover:underline">
          Rezepte
        </Link>
      </span>
      <main className="space-y-8">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Willkommen bei Carb-calc
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Diese Seite hilft dir, die richtige Menge an Kohlenhydraten zu finden, die du essen solltest, um während deines Trainings Energie zu behalten.
      </p>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Wie viele Kohlenhydrate brauche ich eigentlich?
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Dein Bedarf an Kohlenhydraten hängt von deinem Gewicht, der Intensität und der Dauer deines Trainings ab. Im Allgemeinen solltest du 30-60g Kohlenhydrate pro Stunde für Workouts über eine Stunde zu dir nehmen.
        <br /><br />
        Energiegels sind praktisch, aber oft teuer – überlege dir, ob du deine eigenen herstellen möchtest, um Geld zu sparen.
      </p>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Lass uns deine Kohlenhydrat-Bedarf berechnen!
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
        Let's calculate your carbohydrate needs!
      </h2>
*/
