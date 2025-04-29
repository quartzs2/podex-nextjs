"use client";
import PokemonCardContainer from "@components/PokemonCardContainer";
import { PokeData } from "@custom-types/types";
import useFetch from "@hooks/useFetch";

export default function Home() {
  const { data, isLoading, error } = useFetch<{ allPokemonData: PokeData[] }>("api/pokemon");

  if (isLoading) return <div>로딩 중입니다.</div>;
  if (error) return <div>문제가 발생했습니다.</div>;
  if (data === null) return <div>데이터가 없습니다.</div>;

  const { allPokemonData } = data;

  return (
    <div>
      <PokemonCardContainer pokemonData={allPokemonData} />
    </div>
  );
}
