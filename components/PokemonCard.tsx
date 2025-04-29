import Image from "next/image";
import { PokeData } from "@custom-types/types";
import { useRouter } from "next/navigation";

export const PokemonCard = ({ front, name, id }: PokeData) => {
  const router = useRouter();

  return (
    <div
      className="flex w-[160px] flex-col items-center justify-center rounded-lg border-2 border-gray-200 p-4 shadow-md duration-100 hover:scale-110 hover:border-r-red-600 hover:border-b-red-600"
      onClick={() => router.push(`/detail/${id}`)}
      role="button"
      tabIndex={0}
    >
      <div>
        <Image src={front} alt={name} width={96} height={96} />
      </div>
      <div className="font-[NeoDunggeunmo]">{name}</div>
    </div>
  );
};
