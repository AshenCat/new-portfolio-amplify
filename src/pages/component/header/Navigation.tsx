import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants} className="ulhead">
    <motion.li variants={liVariants} className="liheader" style={{margin: '0 auto'}}>
      <h2>Navigate to:</h2>
    </motion.li>
    {itemIds.map((routeName, index) => (
      <MenuItem routeName={routeName} key={routeName + index} />
    ))}
  </motion.ul>
);

const itemIds = ['Home', 'Blog'];