import React from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="flex w-full flex-col ">
        <header className="sticky z-[1] top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <span>Faculty appraisal</span>
            </Link>
            <Link
              to="/"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Vision
            </Link>
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Resources
            </Link>
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Community
            </Link>
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact us
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <span>WebsiteName</span>
                </Link>
                <Link to="/" className="hover:text-foreground">
                  Home
                </Link>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Vision
                </Link>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Resources
                </Link>
                <Link
                  to="/"
                  className=" text-muted-foreground hover:text-foreground"
                >
                  Community
                </Link>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <div className="ml-auto flex-1 sm:flex-initial">
              <div className="flex gap-3 relative">
                <Link to="">
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto gap-1.5 text-sm"
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link to="">
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto gap-1.5 text-sm"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
