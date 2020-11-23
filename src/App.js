import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

//AnimatePresence method is used to animate pages while routing

const nameVariants = {
  hidden: {
    x: -500,
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
  tap: {
    scale: 0,
    color: "#ffffff",
  },
  hover: {
    scale: 1.5,
    color: "#ffffff",
  },
};

const buttonVariants = {
  hidden: {
    x: 500,
  },
  visible: {
    x: 0,
  },
  tap: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    color: "rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    // transition: {
    //   yoyo: 10, //for back and forth transition 10 times, also infinity keyword is present
    // },
  },
};

const loaderVariants = {
  animateOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 }, //means transition applies only for x
      y: { yoyo: Infinity, duration: 0.25, ease: "easeOut" },
    },
  },
};

function App() {
  return (
    <div className="App">
      <motion.div
        className="logo"
        initial={{ rotate: -180 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 1.5 }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <motion.svg
          className="logo-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          whileHover={{
            scale: 1.2,
          }}
        >
          <motion.path
            fill="none"
            d="M 50 68.8 L 24.4 68.8 L 0 0 L 23.6 0 L 37.4 46 L 37.8 46 L 51.7 0 L 74.3 0 L 50 68.8 Z"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>
      <header className="App-header">
        <motion.h2
          // initial={{ x: -500 }}
          // animate={{ x: 0 }}
          // whileHover={{ scale: 1.5, color: "#ffffff" }}
          // whileTap={{ scale: 0, color: "#ffffff" }}
          // transition={{
          //   type: "spring",
          //   stiffness: 120,
          // }}
          //
          // Below the variants are used to make to code look clean
          variants={nameVariants}
          initial="hidden"
          animate="visible"
          whileTap="tap"
          whileHover="hover"
        >
          Vamshi Nagulapally
        </motion.h2>
        <motion.button
          // initial={{ x: 500 }}
          // animate={{ x: 0 }}
          // whileHover={{
          //   scale: 1.5,
          //   color: "rgb(255,255,255)",
          //   boxShadow: "0px 0px 8px rgb(255,255,255)",
          // }}
          // whileTap={{ scale: 1 }}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileTap="tap"
          whileHover="hover"
          // we no need to mention initial, animate again if we mention in parent div. but
          // Rule: object keys should be same
          // x:0 can also be different coordinates like x:[0,10,-80,20], same case for y, scale

          // transition={{ delay: 1, duration: 2, type:'spring' , stiffness:500 , mass: 0.5, damping: 0.4
          // , when: 'beforeChildren', ease: 'easeInOut'}}
          // delay: 1 means after 1 second delay animation will start
          // duration:2 is the time diff from initial to animate
          // type:'spring' slight bouncyness of element, also 'tween' have no bounce
          // stiffness:500 stiffness of spring
          // mass: 0.5 less mass less momemt
          // damping: 0.4 oscillation, 0 will make infinite oscillations
          // when: 'beforeChildren' trasition inside div (child) will be made after the main div transition
          // ease: 'easeInOut' in out transition generally used during routing

          // exit = {
          //   x; -100
          // }
          // exit property is used during routing when component is getting deleted, only used with <AnimatePresence>
        >
          Button
        </motion.button>
        <motion.div
          className="loader"
          variants={loaderVariants}
          animate="animateOne"
        ></motion.div>
      </header>
    </div>
  );
}

export default App;
