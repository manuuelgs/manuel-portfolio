"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky-header ${visible ? "show" : ""}`}>
      <span className="mono">00 / 08</span>

      <nav className="header-nav">
  <a href="#work">WORK</a>
  <a href="#about">ABOUT</a>
  <a href="#contact">CONTACT</a>
</nav>

      <span className="mono">EN / ES</span>
    </header>
  );
}