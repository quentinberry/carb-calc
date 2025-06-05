import CarbCalculatorPage from "./carbCalculator/page";

export default function Home() {
  return (
    <div className="container mx-auto px-4 max-w-4xl mt-18">
      <main className="space-y-8">
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
      <CarbCalculatorPage />
      </main>
    </div>
  );
}
