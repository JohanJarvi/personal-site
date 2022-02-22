import React from "react";

interface IProps {
  title: string;
}

const PageTitle: React.FC<IProps> = (props: IProps) => {
  return <h1>{props.title}</h1>;
};
export default PageTitle;
