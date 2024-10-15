import Expo from "@/components/svg/Expo.svg";
import NextJS from "@/components/svg/NextJS.svg";
import NodeJS from "@/components/svg/NodeJS.svg";
import React from "@/components/svg/React.svg";
import Redux from "@/components/svg/Redux.svg";
import Swift from "@/components/svg/Swift.svg";
import Tailwind from "@/components/svg/Tailwind.svg";
import Typescript from "@/components/svg/Typescript.svg";
import Vue from "@/components/svg/Vue.svg";
import styles from "./Carousel.module.css"; // CSS module for styling

const icons = [Expo, NodeJS, React, Redux, Swift, Tailwind, Typescript, Vue]; // Array of SVG components

const Carousel: React.FC = () => (
  <div className={styles.carousel}>
    <Expo />
    <div className={styles.track}>
      {icons.map((Icon, index) => (
        <div key={`icon-${index}`} className={styles.iconWrapper}>
          <Icon />
        </div>
      ))}
      <div className={styles.iconWrapper}>
        <NextJS width={220} />
      </div>
      {icons.map((Icon, index) => (
        <div key={`icon-duplicate-${index}`} className={styles.iconWrapper}>
          <Icon />
        </div>
      ))}
    </div>
  </div>
);

export default Carousel;
