import { PokemonCard } from "@components/PokemonCard";
import { PokeData } from "@custom-types/types";

interface PokemonCardContainerProps {
  pokemonData: PokeData[];
}

const PokemonCardContainer = ({ pokemonData }: PokemonCardContainerProps) => {
  return (
    <section className="mx-auto grid w-fit grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
      {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </section>
  );
};
export default PokemonCardContainer;
