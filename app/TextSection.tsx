"use client";

import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
  const text = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#f2994a",
      "#f2994a",
      "#f2994a",
      "#f2994a",
    ]
  );

  return (
    <div ref={text}>
      <motion.p style={{ opacity, x, color: colorChange }}>{children}</motion.p>
    </div>
  );
};

function TextSection() {
  return (
    <TextSectionStyled>
      <TextWrapper>Tarnished, heed the call to the Lands Between</TextWrapper>
      <TextWrapper>
        , a realm where the echoes of ancient legends resonate through the mist.
      </TextWrapper>
      <TextWrapper>
        Thou art beckoned to unravel the mysteries of this forsaken land,
      </TextWrapper>
      <TextWrapper>
        to challenge the demigods and claim the power of the Elden Ring.
      </TextWrapper>
      <TextWrapper>
        Through trials unnumbered and adversaries unyielding,
      </TextWrapper>
      <TextWrapper>
        thy journey shall etch thy name in the annals of history.
      </TextWrapper>
      <TextWrapper>Embrace thy destiny!</TextWrapper>
    </TextSectionStyled>
  );
}

const TextSectionStyled = styled.section`
  p {
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
`;

export default TextSection;
