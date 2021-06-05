import React from "react";
import styles from "./Header.module.scss";

interface IProps {
  title: string;
}

const Header: React.FC<IProps> = (props: IProps) => {
  return <h1 className={styles.title}>{props.title}</h1>;
};
export default Header;
