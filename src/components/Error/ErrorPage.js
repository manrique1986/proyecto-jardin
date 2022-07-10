import React from "react";
import styles from "./ErrorPage.module.css";
import errorImage from "../../assets/photoGarden/errorVector.svg";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <section className={styles.errorPage}>
        <div className={styles.wrapper}>
          <img
            src={errorImage}
            alt={"vector error page"}
            className={styles.errorImage}
          />
          <p className={styles.errorText}>Error 404</p>
          <h2 className={styles.errorTitle}>¡Oooooooooops!</h2>
          <p className={styles.errorP}>
            Lo sentimos no pudimos encontrar <br /> su página.
          </p>
          <Link to={"/"} className={styles.errorBtn}>
            Volver al inicio
          </Link>
        </div>
        <div className={styles.errorOndas}></div>
      </section>
    </>
  );
}
