
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-start sm:items-start">
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
          The amount of carbohydrates you need depends on several factors, including your body weight, the intensity and duration of your workout, and your overall diet.
          A general guideline is to consume 30-60 grams of carbohydrates per hour of exercise for moderate to high-intensity workouts lasting longer than an hour.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          For example, if you weigh 70 kg and plan to exercise for 2 hours at a moderate intensity, you would need approximately 60-120 grams of carbohydrates during that time.
          This can be achieved through sports drinks, energy gels, or carbohydrate-rich foods like bananas or energy bars.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The most common way to consume carbohydrates during exercise is throug energy gels, which are easy to carry and provide a quick source of energy.
          However, they will drain your wallet quickly, so it is recommended to mix your own energy gels at home.
        </p>
        
      </main>
    </div>
  );
}
