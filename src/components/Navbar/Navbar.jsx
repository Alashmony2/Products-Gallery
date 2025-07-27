import { useState, useEffect, useContext } from "react";
import { NavLink, Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { AuthContext } from "../../contexts/AuthContext.jsx";

export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default function NavbarComponent() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const menuItems = [
    { name: "Cart", path: "/cart" },
    { name: "Categories", path: "/categories" },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      disableAnimation
      isBordered
      className="bg-white dark:bg-gray-800 text-black dark:text-gray-200"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand as={RouterLink} to="/" className="flex items-center gap-2 cursor-pointer">
          <AcmeLogo />
          <p className="font-bold text-inherit">Product Gallery</p>
          <button
            onClick={toggleDarkMode}
            className="p-2 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <MoonIcon />
            ) : (
              <SunIcon />
            )}
          </button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand as={RouterLink} to="/" className="flex items-center gap-2 cursor-pointer">
          <AcmeLogo />
          <p className="font-bold text-inherit">Product Gallery</p>
          <button
            onClick={toggleDarkMode}
            className="p-2 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <MoonIcon /> : <SunIcon />}
          </button>
        </NavbarBrand>

        <NavbarItem>
          <NavLink to="/">Home</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/cart">Cart</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/categories">Categories</NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {isLoggedIn ? (
          <NavbarItem>
            <Button onPress={handleLogout} color="danger" variant="flat">
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button as={RouterLink} to="/login" color="warning" variant="flat">
              Login
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu className="bg-white dark:bg-gray-800">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              as={RouterLink}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="w-full"
              color="foreground"
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        {isLoggedIn && (
          <NavbarMenuItem>
            <Button onPress={handleLogout} color="danger" variant="flat" fullWidth>
              Logout
            </Button>
          </NavbarMenuItem>
        )}
      </NavbarMenu>
    </Navbar>
  );
}

function MoonIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  );
}
