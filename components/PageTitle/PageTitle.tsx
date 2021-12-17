import React from "react";
import styles from "./PageTitle.module.scss";

interface IProps {
  title: string;
}

const PageTitle: React.FC<IProps> = (props: IProps) => {
  return <h1 className={styles.title}>{props.title}</h1>;
};
export default PageTitle;
