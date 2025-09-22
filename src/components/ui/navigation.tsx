import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/about" },
    { name: "Abhidh Academy", href: "/academy" },
    { name: "Abhidh Creative", href: "/creative" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  useEffect(() => {
    const checkLoginStatus = () => {
      const user = localStorage.getItem("currentUser");
      setIsLoggedIn(!!user);
    };

    checkLoginStatus();

    window.addEventListener("storage", checkLoginStatus);
    window.addEventListener("login", checkLoginStatus);
    window.addEventListener("logout", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
      window.removeEventListener("login", checkLoginStatus);
      window.removeEventListener("logout", checkLoginStatus);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/60 dark:bg-background/80 backdrop-blur-xl shadow-lg supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-extrabold text-2xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg sm:inline-block tracking-widest">
              ABHIDH GROUP
            </span>
          </Link>
          <div className="flex items-center space-x-6 text-base font-semibold">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative transition-colors duration-200 px-2 py-1 hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <span>{item.name}</span>
                {isActive(item.href) && (
                  <span className="absolute left-0 right-0 -bottom-1 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full animate-pulse" />
                )}
              </Link>
            ))}
          </div>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 bg-white/90 dark:bg-background/90 backdrop-blur-xl shadow-2xl">
            <Link
              to="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-extrabold text-2xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                ABHIDH GROUP
              </span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative transition-colors duration-200 px-2 py-1 hover:text-primary ${
                      isActive(item.href)
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive(item.href) && (
                      <span className="absolute left-0 right-0 -bottom-1 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full animate-pulse" />
                    )}
                  </Link>
                ))}
                {isLoggedIn ? (
                  <Link
                    to="/dashboard"
                    className="block bg-primary text-white px-4 py-2 rounded-md text-center hover:bg-primary/90 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="block bg-primary text-white px-4 py-2 rounded-md text-center hover:bg-primary/90 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Login/Signup
                  </Link>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link to="/" className="md:hidden">
              <span className="font-extrabold text-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                ABHIDH GROUP
              </span>
            </Link>
          </div>
          <nav className="flex items-center">
            {isLoggedIn ? (
              <Button
                asChild
                variant="default"
                size="sm"
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 border-0 shadow-lg hover:scale-105 transition-transform duration-200"
              >
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <Button
                asChild
                variant="default"
                size="sm"
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 border-0 shadow-lg hover:scale-105 transition-transform duration-200"
              >
                <Link to="/login">Login/Signup</Link>
              </Button>
            )}
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;