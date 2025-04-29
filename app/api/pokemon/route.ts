import { fetchPokeDatas } from "@api/pokeAPI";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await fetchPokeDatas(151);

  if (data === null) {
    return NextResponse.json({ error: "Interanl Server Error" }, { status: 500 });
  }

  return NextResponse.json({ allPokemonData: data });
}
