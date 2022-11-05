import clsx from "clsx";
import { FC } from "react";
import { NoteType } from "../../domain/note";
import styles from "./Key.module.css";

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
};

export const Key: FC<KeyProps> = (props) => {
  const { type, label, ...rest } = props;

  return (
    <button className={clsx(styles.key, styles[type])} type="button" {...rest}>
      {label}
    </button>
  );
};
