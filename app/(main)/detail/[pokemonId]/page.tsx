"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import useFetch from "@hooks/useFetch";
import clsx from "clsx";
import { PokeData } from "@custom-types/types";

export default function Page() {
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => {
    setFlipped(true);
  };
  const handleMouseLeave = () => {
    setFlipped(false);
  };

  const { pokemonId } = useParams();
  const { data, isLoading, error } = useFetch<{ pokemonData: PokeData }>(
    `/api/pokemon/${pokemonId}`
  );

  if (isLoading) return <div>로딩 중입니다.</div>;
  if (error) return <div>문제가 발생했습니다.</div>;
  if (data === null) return <div>데이터가 없습니다.</div>;

  const { pokemonData } = data;

  return (
    <div className="mx-auto flex w-fit flex-col items-center justify-center gap-4 rounded-2xl border-2 border-gray-200 p-4 transform-3d">
      <div className="flex w-full items-center justify-between font-[NeoDunggeunmo] text-2xl">
        {pokemonData.name}
      </div>
      <div className="w-full text-left whitespace-pre-wrap">
        <div>{pokemonData.description}</div>
      </div>
      <div
        className="relative h-[200px] w-[200px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          className={clsx(
            "absolute top-0 left-0 aspect-square w-[200px] duration-300 backface-hidden pointer-events-none",
            { "rotate-y-180": flipped }
          )}
          src={pokemonData.front}
          alt={pokemonData.name}
          width={200}
          height={200}
        />
        <Image
          className={clsx(
            "absolute top-0 left-0 aspect-square w-[200px] duration-300 backface-hidden pointer-events-none", // pointer-events-none 추가
            { "rotate-y-180": !flipped }
          )}
          src={pokemonData.back}
          alt={pokemonData.name}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
