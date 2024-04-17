import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypewriterComponent = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Supporting Addiction Recovery.",
        "Empowering Lives to Overcome Addiction.",
        "Bringing Hope to Those Struggling with Addiction.",
        "Guiding Individuals Towards Sobriety."
      ],
      autoStart: true,
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 100,
      delay: 2000,
      cursor: "|"
    });
    // typewriterTimeout.current = setTimeout(() => {
    //   typewriter.stop();
    // }, 10000); // Change the timeout value as needed
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div style={{color:"rgb(167, 105, 225)"}}>
      <h4 ref={el}></h4>
    </div>
  );
};

export default TypewriterComponent;
