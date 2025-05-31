import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-primary flex items-center justify-center">
            <img
              src="/images/icon.png"
              alt="InvestVision Logo"
              className="h-6 w-6 object-contain"
            />
          </div>
          <span className="font-bold text-xl">InvestVision</span>
        </div>

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="#about"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="#product"
                >
                  Product
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem
                      href="#"
                      title="Documentation"
                      icon={<ChevronRight className="h-4 w-4" />}
                    >
                      Access detailed product documentation
                    </ListItem>
                    <ListItem
                      href="#"
                      title="Whitepaper"
                      icon={<ChevronRight className="h-4 w-4" />}
                    >
                      Read our technical whitepaper
                    </ListItem>
                    <ListItem
                      href="#"
                      title="Case Studies"
                      icon={<ChevronRight className="h-4 w-4" />}
                    >
                      Explore success stories
                    </ListItem>
                    <ListItem
                      href="#"
                      title="FAQ"
                      icon={<ChevronRight className="h-4 w-4" />}
                    >
                      Frequently asked questions
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">Investor Portal</Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <a
              href="#about"
              className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#product"
              className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </a>

            <div className="px-4 py-2">
              <p className="text-sm font-medium mb-2">Resources</p>
              <div className="pl-4 flex flex-col space-y-3">
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <ChevronRight className="h-3 w-3" /> Documentation
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <ChevronRight className="h-3 w-3" /> Whitepaper
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <ChevronRight className="h-3 w-3" /> Case Studies
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <ChevronRight className="h-3 w-3" /> FAQ
                </a>
              </div>
            </div>

            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" size="sm" className="w-full">
                Sign In
              </Button>
              <Button size="sm" className="w-full">
                Investor Portal
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon?: React.ReactNode;
    title: string;
  }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
