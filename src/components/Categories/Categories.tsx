import React from "react";

import styles from "./Categories.module.scss";

export const Categories = () => {
  const categories = ["Item name", "Quantity", "Store"];

  return (
    <div className={styles.Categories}>
      {categories.map((category) => {
        return (
          <div className={styles.Category} key={category}>
            {category}{" "}
          </div>
        );
      })}
    </div>
  );
};
