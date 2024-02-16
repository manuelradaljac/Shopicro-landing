import Link from "next/link";
import { Button } from "./button";

const Header = () => {
  return (
    <div className="flex flex-col items-center text-center h-dvh justify-center gap-y-5">
      <div className="flex flex-row items-center justify-center leading-loose">
        <h1 className="leading-snug lg:leading-snug font-extrabold text-transparent text-3xl sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-800">
          Jednostavnije.
        </h1>
        <h1 className="leading-snug lg:leading-snug font-extrabold text-transparent text-3xl sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-800">
          Shopicro
        </h1>
      </div>
      <div className="">
        <h1 className="text-transparent text-md sm:text-md md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text">
          Stvaranje i upravljanje modernih webshopova nikad nije bilo jednostavnije.
        </h1>
      </div>
      <div className="">
        <Button variant="outline" asChild>
            <Link href="/o-projektu">Saznaj više</Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
