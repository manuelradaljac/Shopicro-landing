import Link from "next/link";
import { Button } from "./button";

const Header = () => {
  return (
    <div className="flex flex-col items-center text-center h-[87vh] justify-center gap-y-5">
      <div className="flex flex-row items-center justify-center">
        <h1 className="font-extrabold text-transparent text-3xl sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-800 leading-normal">
          Jednostavnije.
        </h1>
        <h1 className="font-extrabold text-transparent text-3xl sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-800 leading-normal">
          Shopicro
        </h1>
      </div>
      <div className="">
        <h1 className="text-md sm:text-md md:text-md lg:text-xl xl:text-xl">
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
