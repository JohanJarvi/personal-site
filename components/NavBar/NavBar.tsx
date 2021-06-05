import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import { useRouter } from "next/router";

interface IProps {
  links: string[];
}

const NavBar: React.FC<IProps> = (props: IProps) => {
  const router = useRouter();

  const getCurrentlyViewedClass = (link: string) => {
    if (link.includes("johan")) {
      return "/" === router.route ? " " + styles.viewing : "";
    }
    return formatNavLink(link) === router.route ? " " + styles.viewing : "";
  };

  const formatNavLink = (displayLink: string) => {
    return "/" + displayLink.toLowerCase().replace(/[^a-z]/gi, "");
  };

  return (
    <ul className={styles.navigation}>
      {props.links.map((link) => (
        <li
          key={link}
          className={styles.navigationItem + getCurrentlyViewedClass(link)}
        >
          {link.includes("johan") ? (
            <Link href={"/"}>
              <a>{link}</a>
            </Link>
          ) : (
            <Link href={formatNavLink(link)}>
              <a>{link}</a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
export default NavBar;
