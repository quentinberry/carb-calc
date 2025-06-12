type RecipesCalculatorProps = {
  wantedGram: number;
};

export default function RecipesCalculator({ wantedGram }: RecipesCalculatorProps) {
  const baseRecipe = {
    maltoDextrin: 55,
    fructose: 45,
    citricAcid: 1,
    salt: 2,
  }
  return (<>
    <div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Für {wantedGram}g Pulver brauchst du:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li>{(baseRecipe.maltoDextrin * wantedGram / 100).toFixed(1)}g Maltodextrin</li>
        <li>{(baseRecipe.fructose * wantedGram / 100).toFixed(1)}g Fruktose</li>
        <li>{(baseRecipe.citricAcid * wantedGram / 100).toFixed(1)}g Zitronensäure</li>
        <li>{(baseRecipe.salt * wantedGram / 100).toFixed(1)}g Salz</li>
      </ul>
    </div>
  </>
  )
}