import styles from "./Blurb.module.scss";

interface IProps {
  content: string;
}

const Blurb: React.FC<IProps> = (props: IProps) => {
  const lines = props.content.split("\n");
  return (
    <div>
      {lines.map((line, index) => (
        <p key={index} className={styles.content}>
          {line}
        </p>
      ))}
    </div>
  );
};
export default Blurb;
