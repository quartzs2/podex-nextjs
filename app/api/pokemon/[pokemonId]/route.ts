import { getPokeData } from "@api/pokeAPI";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { pokemonId: string } }) {
  const { pokemonId } = await params;
  const data = await getPokeData(Number(pokemonId));

  if (data === null) {
    return NextResponse.json({ error: "Interanl Server Error" }, { status: 500 });
  }

  return NextResponse.json({ pokemonData: data });
}
