"use client";

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../../components/home";
import fadeIn from "../../lib/framer/animations/fadeIn";
import staggerContainer from "../../lib/framer/staggerContainer";
import styles from "../../styles";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Blockchains on the Space" textStyles="text-center" />
      <TitleText
        title={<>The blockchain space is as vast as an infinite galaxies.</>}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
