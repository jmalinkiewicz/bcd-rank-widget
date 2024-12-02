import { motion } from "framer-motion";
import { Gamemode } from "../definitions";

const tranistion = {
  ease: "easeInOut",
  duration: 1,
};

const sources = {
  br: "https://fortnitejp.news/widget.html?account_id=640f135544834b249f2805a8d14d1a0b&ranking_type=ranked-br&language=en&gradient_start=%23202377&gradient_end=%23723FBF&color=%23FFFFFF",
  zb: "https://fortnitejp.news/widget.html?account_id=640f135544834b249f2805a8d14d1a0b&ranking_type=ranked-zb&language=en&gradient_start=%23202377&gradient_end=%23723FBF&color=%23FFFFFF",
  rbr: "https://fortnitejp.news/widget.html?account_id=640f135544834b249f2805a8d14d1a0b&ranking_type=ranked_blastberry_build&language=en&gradient_start=%23202377&gradient_end=%23723FBF&color=%23FFFFFF",
  rzb: "https://fortnitejp.news/widget.html?account_id=640f135544834b249f2805a8d14d1a0b&ranking_type=ranked_blastberry_nobuild&language=en&gradient_start=%23202377&gradient_end=%23723FBF&color=%23FFFFFF",
  rr: "https://fortnitejp.news/widget.html?account_id=640f135544834b249f2805a8d14d1a0b&ranking_type=delmar-competitive&language=en&gradient_start=%23202377&gradient_end=%23723FBF&color=%23FFFFFF",
};

interface TileProps {
  gamemode: Gamemode;
  YPosition: number;
}

export const GamemodeTile = ({ gamemode, YPosition }: TileProps) => {
  return (
    <motion.div
      animate={{ y: YPosition }}
      transition={tranistion}
      className="widget-container"
    >
      <iframe width={468} src={sources[gamemode]}></iframe>
    </motion.div>
  );
};
