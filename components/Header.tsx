import Link from "next/link";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between gap-6 p-6">
      <Link href={"/"}>
        <div className="mr-auto font-[NeoDunggeunmo] text-xl font-bold">포켓몬 도감</div>
      </Link>
    </header>
  );
};
export default Header;
