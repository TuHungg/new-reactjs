import { ArrowUpIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [onTopScreen, setOnTopScreen] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setOnTopScreen(false);
    } else if (scrolled <= 300) {
      setOnTopScreen(true);
    }
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
    window.addEventListener("scroll", toggleVisible);
    return () => {
      document.removeEventListener("scroll", toggleVisible);
    };
  }, [pathname]);

  return (
    <Button
      aria-label="Scroll to top"
      variant="transparent"
      position="fixed"
      bottom={onTopScreen ? -20 : 5}
      right={5}
      w={14}
      h={14}
      bg="black"
      borderRadius="full"
      borderWidth="2px"
      borderColor="main"
      color="main"
      _hover={{ bg: "gray.600" }}
      zIndex={10}
      transition="all"
      transitionDuration="300ms"
      onClick={() => scrollTop()}
    >
      <ArrowUpIcon w={6} h={6} />
    </Button>
  );
}
