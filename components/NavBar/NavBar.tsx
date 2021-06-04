import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";

interface IProps {
  links: string[];
}

const NavBar: React.FC<IProps> = (props: IProps) => {
  return (
    <ul className={styles.navigation}>
      {props.links.map((link) => (
        <li key={link} className={styles.navigationItem}>
          {link.includes("johan") ? (
            <Link href={"/"}>
              <a>{link}</a>
            </Link>
          ) : (
            <Link href={"/" + link.toLowerCase().replace(/[^a-z]/gi, "")}>
              <a>{link}</a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
export default NavBar;
