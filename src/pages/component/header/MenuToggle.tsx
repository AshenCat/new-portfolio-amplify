import { motion } from "framer-motion";

type pathProps = {
    d?: string,
    variants: {
        closed: { 
            d?: string,
            opacity?: number
        },
        open: { 
            d?: string,
            opacity?: number
        }
    }
    transition?: {
        duration: number
    }
}

const Path = (props: pathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#0171B5"
    strokeLinecap="round"
    {...props}
  />
);

type toggle = {
    toggle: () => void
}

export const MenuToggle = ({ toggle }: toggle) => (
  <button onClick={toggle} className="menubutton">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);