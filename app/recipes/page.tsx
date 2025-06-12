"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import RecipesCalculator from "./recipeCalculator/page";

export default function RecipesPage() {
  const [gramValue, setGramValue] = useState<number>(100);
  const [sentGramToRecipe, setSentGramToRecipe] = useState<number>(100);

  const handleCalculate = useCallback(() => {
    if (gramValue <= 0) {
      console.error("Bitte eine gültige Menge eingeben.");
      return;
    }
    console.log(`Berechne für ${gramValue}g Pulver`);
    setSentGramToRecipe(gramValue);
  }, [gramValue]);

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
          Willkommen bei Rezepte
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Hier findest du eine Sammlung von Rezepten, die dir helfen, deinen Kohlenhydrat-Bedarf zu decken.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Rezept &quot;Standard&quot;
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Für ~100g (eine Einheit) Pulver brauchst du:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>55g Maltodextrin</li>
          <li>45g Fruktose</li>
          <li>1g Zitronensäure</li>
          <li>1-3g Salz (wir nutzen 2g)</li>
          <li>Optional: Geschmackspulver nach Wahl</li>
        </ul>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Gebe die Zutaten in einen Mixer und mische sie gut durch. Fülle das fertige Pulver in einen luftdichten Behälter und lagere es an einem kühlen, trockenen Ort.
        </p>
        <div className="mt-6 leading-7 text-lg">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Berechne die Menge für dein Rezept
          </h2>
          <span className="flex items-center justify-start space-x-2 mt-4">
            <Input
              type="number"
              placeholder="Gewünschte Menge in Gramm"
              className="w-full max-w-xs"
              aria-label="Gewünschte Menge in Gramm"
              onChange={(e) => setGramValue(Number(e.target.value))}
            />
            <Button onClick={handleCalculate} aria-label="Berechnen">
              Berechnen
            </Button>
          </span>
        </div>
        <RecipesCalculator wantedGram={sentGramToRecipe} />
      </main>
    </div>
  );
}