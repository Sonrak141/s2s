"use client";
import React, { useState } from "react";
import Image from "next/image";

import styles from "./LogoAnimation.module.css";

function LogoAnimation() {
  const [filled, setFilled] = useState(false);
  const handleOnLoad = () => {
    setFilled(!filled);
  };
  return (
    <div className={filled ? styles.filled : styles.image_container}>
      <img
        src="/shortLogo.png" // Replace with your image path
        alt="Filling Image"
        className={styles.filling_image}
        onClick={handleOnLoad}
      />
    </div>
  );
}

export default LogoAnimation;
