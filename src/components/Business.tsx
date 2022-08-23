import React from "react";

import { features } from "../constants";
import Button from "./Button";

import styles, { layout } from "../style";

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You have the brand, <br className="sm:block hidden" /> we have the
          operation.
          <p className={`${styles.paragraph} max-w-[470px]`}>
            Together our team will create with you a unique delivery, food
            experience available to your customer
          </p>
        </h2>
      </div>
    </section>
  );
};

export default Business;
