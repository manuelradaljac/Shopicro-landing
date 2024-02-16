import Link from "next/link";

const Features = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-center items-center text-4xl font-semibold">
        <h2>Projekt je podijeljen na 3 dijela:</h2>
      </div>
      <div className="flex flex-row justify-evenly items-center text-2xl h-56 font-semibold">
        <div className="">
          <Link href="/" className="hover:underline hover:cursor-pointer">
            Landing
          </Link>
        </div>
        <div className="">
          <a
            href="https://admin.manuelradaljac.live"
            className="hover:underline hover:cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Admin
          </a>
        </div>
        <div className="">
          <a
            href="https://store.manuelradaljac.live"
            className="hover:underline hover:cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webshop
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
