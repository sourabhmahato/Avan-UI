import styles from "./Navbar.module.css";
import { AvanLogo } from "./AvanLogo";
import { useEffect } from "react";
import { GitHubLogo } from "./GitHubLogo";
import { TwitterLogo } from "./TwitterLogo";
import { LinkedInLogo } from "./LinkedInLogo";

export const NavBar = ({ setShowSideBar, showSideBar }) => {
  useEffect(() => {
    setShowSideBar(true);
    setTimeout(() => setShowSideBar(false), 1000);
  }, []);
  return (
    <div className={`${styles.container} bg-color-1`}>
      <div className="flex align-center">
        <div
          id="logo"
          className={styles.logo}
          onClick={() => setShowSideBar((prev) => !prev)}
        >
          <AvanLogo showSideBar={showSideBar} />
        </div>
        <header className="color-2 heading-2 m-h-2">Avan-UI</header>
      </div>
      <div className="flex m-h-2 space-around align-center p-2">
        <div
          className="p-h-2 flex align-center cur-point"
          onClick={() =>
            window.open("https://github.com/sourabhmahato", "_blank")
          }
        >
          <GitHubLogo />
        </div>
        <div
          className="p-h-2 flex align-center cur-point"
          onClick={() => window.open("https://twitter.com", "_blank")}
        >
          <TwitterLogo />
        </div>
        <div
          className="p-h-2 flex align-center cur-point"
          onClick={() => window.open("https://linkedin.com", "_blank")}
        >
          <LinkedInLogo />
        </div>
      </div>
    </div>
  );
};
