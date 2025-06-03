
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
      </main>
    </div>
  );
}
