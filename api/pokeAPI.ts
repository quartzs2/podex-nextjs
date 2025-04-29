import { PokeData } from "@custom-types/types";

interface Description {
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
  flavor_text: string;
}

interface Name {
  language: {
    name: string;
    url: string;
  };
  name: string;
}

export const getPokeData = async (pokemonId: number): Promise<PokeData | null> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
    const response = await fetch(url);
    const data = await response.json();

    const pokemonData = {
      description: data.flavor_text_entries.find(
        (element: Description) => element.language.name === "ko"
      ).flavor_text,
      back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
      front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
      name: data.names.find((element: Name) => element.language.name === "ko").name,
      id: pokemonId,
    };

    return pokemonData;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const fetchPokeDatas = async (maxPokemonId: number): Promise<PokeData[] | null> => {
  const numArray = new Array(maxPokemonId).fill(0).map((_, index) => index + 1);

  try {
    const result = await Promise.all(numArray.map((num) => getPokeData(num)));

    if (result.includes(null)) return null;

    return result.filter((data): data is PokeData => data !== null);
  } catch (error) {
    console.log(error);
    return null;
  }
};
