"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Home, Store } from "lucide-react";
import { Button } from "./button";

export function MainNavMenu() {
  
  const videoLink = "https://www.youtube.com/embed/m8OBCH2zea0?si=8fJ4-URu_v4T92iv&autoplay=1&mute=1"
  
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>O projektu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 bg-indigo-600 p-6 no-underline outline-none focus:shadow-md"
                    href="/o-projektu"
                  >
                    <Store className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Shopicro
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Nikad jednostavnije izrađivanje i održavanje webshopova.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/autor" title="Autor">
                Malo više o meni
              </ListItem>
              <ListItem href="/ideja" title="Ideja">
                Kako je nastala ideja za ovaj projekt
              </ListItem>
              <ListItem href="/tehnologije" title="Tehnologije">
                Tehnologije korištene u izradi ovog projekta
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Video prezentacija</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex flex-col justify-center items-center p-10 gap-y-5">
              <div className="ratio ratio-16x9">
              <iframe
                width="560"
                height="315"
                src={videoLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
              </div>
              <Button asChild>
                
                <a href={videoLink} target="_blank" rel="noreferrer">Youtube</a>
              </Button>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Dokumentacija
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
