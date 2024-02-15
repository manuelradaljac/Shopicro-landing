import Link from "next/link";
import { Button } from "./button";
import { MainNavMenu } from "./main-nav-menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around pt-5">
      <Link href="/">
        <Image src="/logo.png" alt="Shopicro" width={150} height={150} />
      </Link>
      <MainNavMenu />
      <Button>
        <Link href="https://admin.manuelradaljac.live">Upravljačka ploča</Link>
      </Button>
    </div>
  );
};

export default Navbar;
