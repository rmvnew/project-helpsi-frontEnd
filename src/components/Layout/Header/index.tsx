import { useState, useEffect } from "react";
import { Header } from "./styled";

export const HeaderWrapper = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <Header
        style={{
          transform: showHeader ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <span>Perfil</span>
      </Header>
    </>
  );
};
