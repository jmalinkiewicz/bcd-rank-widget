import { useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [displayedGamemode, setDisplayedGamemode] = useState<number>(0);

  // Gamemodes:
  // 0: Ranked Battle Royale
  // 1: Ranked Zero Build
  // 2: Ranked Reload
  // 3: Ranked Reload Zero Build

  const tranistion = {
    ease: "easeInOut",
    duration: 1,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedGamemode(displayedGamemode < 1 ? displayedGamemode + 1 : 0);
    }, 10000);

    return () => clearInterval(interval);
  });

  function calculateYPosition() {
    return -150 * displayedGamemode;
  }

  return (
    <>
      <div className="animation-container">
        <motion.div
          animate={{ y: displayedGamemode === 0 ? 0 : calculateYPosition() }}
          transition={tranistion}
          className="widget-container"
        >
          <iframe
            width={468}
            src="https://fortnitejp.news/widget.html?account_id=640f135544834b249f2805a8d14d1a0b&ranking_type=ranked-br&language=en&gradient_start=%23202377&gradient_end=%23723FBF&color=%23FFFFFF"
          ></iframe>
        </motion.div>
        <motion.div
          animate={{
            y: displayedGamemode === 1 ? -150 : calculateYPosition(),
          }}
          transition={tranistion}
          className="widget-container"
        >
          <iframe
            width={468}
            src="https://fortnitejp.news/widget.html?account_id=640f135544834b249f2805a8d14d1a0b&ranking_type=ranked-zb&language=en&gradient_start=%23202377&gradient_end=%23723FBF&color=%23FFFFFF"
          ></iframe>
        </motion.div>
        {/* <motion.div
          animate={{
            y: displayedGamemode === 2 ? -300 : calculateYPosition(),
          }}
          transition={tranistion}
          className="widget-container"
        >
          <iframe
            width={468}
            src="https://fortnitejp.news/widget.html?account_id=640f135544834b249f2805a8d14d1a0b&ranking_type=ranked_blastberry_build&language=en&gradient_start=%23202377&gradient_end=%23723FBF&color=%23FFFFFF"
          ></iframe>
        </motion.div>
        <motion.div
          animate={{
            y: displayedGamemode === 3 ? -450 : calculateYPosition(),
          }}
          transition={tranistion}
          className="widget-container"
        >
          <iframe
            width={468}
            src="https://fortnitejp.news/widget.html?account_id=640f135544834b249f2805a8d14d1a0b&ranking_type=ranked_blastberry_nobuild&language=en&gradient_start=%23202377&gradient_end=%23723FBF&color=%23FFFFFF"
          ></iframe>
        </motion.div> */}
      </div>
    </>
  );
}

export default App;
