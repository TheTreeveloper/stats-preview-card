import { useState, useEffect } from "react";
import { TextContent } from "./textContent";
import { MobileHeroImage } from "./heroImage";
import { Attribution } from "./attribution";
import { DesktopHeroImage } from "./heroImage";

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <>
      <div className="App">
        <div className="container">
          {isDesktop && <DesktopHeroImage />}
          {!isDesktop && <MobileHeroImage />}
          <TextContent />
        </div>
        <Attribution />
      </div>
    </>
  );
}

export default App;
