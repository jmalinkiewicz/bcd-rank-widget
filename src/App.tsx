import { useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [displayedGamemodes, setDisplayedGamemodes] = useState("regular");

  const tranistion = {
    ease: "easeInOut",
    duration: 1,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedGamemodes(
        displayedGamemodes === "regular" ? "limited" : "regular"
      );
    }, 10000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="animation-container">
        <motion.div
          animate={{ y: displayedGamemodes === "regular" ? 0 : -150 }}
          transition={tranistion}
          className="widget-container regular-gamemodes"
        >
          <iframe
            width={468}
            src="https://fortnitejp.news/widget.html?account_id=640f135544834b249f2805a8d14d1a0b&ranking_type=ranked-br&language=en&gradient_start=%23202377&gradient_end=%23723FBF&color=%23FFFFFF"
          ></iframe>
          <iframe
            width={468}
            src="https://fortnitejp.news/widget.html?account_id=640f135544834b249f2805a8d14d1a0b&ranking_type=ranked-zb&language=en&gradient_start=%23202377&gradient_end=%23723FBF&color=%23FFFFFF"
          ></iframe>
        </motion.div>
        <motion.div
          animate={{ y: displayedGamemodes === "limited" ? -150 : 0 }}
          transition={tranistion}
          className="widget-container limited-gamemodes"
        >
          <iframe
            width={468}
            src="https://fortnitejp.news/widget.html?account_id=640f135544834b249f2805a8d14d1a0b&ranking_type=ranked_blastberry_build&language=en&gradient_start=%23202377&gradient_end=%23723FBF&color=%23FFFFFF"
          ></iframe>
          <iframe
            width={468}
            src="https://fortnitejp.news/widget.html?account_id=640f135544834b249f2805a8d14d1a0b&ranking_type=ranked_blastberry_nobuild&language=en&gradient_start=%23202377&gradient_end=%23723FBF&color=%23FFFFFF"
          ></iframe>
        </motion.div>
      </div>
    </>
  );
}

export default App;
