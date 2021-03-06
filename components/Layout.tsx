import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}

export default Layout;
