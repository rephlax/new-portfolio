import React, { FC, useRef } from "react";
import { motion } from "motion/react";
import styles from "./DraggableTest.module.css";

interface DraggableTestProps {}

const DraggableTest: FC<DraggableTestProps> = (boundaryRef) => {
	// const desktopRef = useRef(null); PUT ON THE CONTAINER AND PASS DOWN AS PROP.
	//// Inside your Desktop component
	// const [constraintsRef, setConstraintsRef] = useState(null);
	// so the constraint is checked to be loaded prior to the usage or it'll give undefined.
	// return (
	//   <div ref={setConstraintsRef} className="desktop-playground">
	//     {/* Only show window if constraintsRef is ready */}
	//     {constraintsRef && (
	//       <MacWindow dragConstraints={constraintsRef} />
	//     )}
	//   </div>
	// );

	// 	import { motion, useDragControls } from "framer-motion";

	// const MacOSWindow = ({ title, children, boundaryRef }) => {
	//   const controls = useDragControls();

	//   return (
	//     <motion.div
	//       drag
	//       dragControls={controls} // The window is draggable...
	//       dragListener={false}    // ...but NOT by clicking the content area
	//       dragConstraints={boundaryRef}
	//       className={styles.windowShell}
	//     >
	//       {/* THIS IS THE HANDLE */}
	//       <div
	//         className={styles.titleBar}
	//         onPointerDown={(e) => controls.start(e)} // Start dragging only here
	//       >
	//         <div className={styles.controls}> {/* traffic lights */} </div>
	//         <span>{title}</span>
	//       </div>

	//       <div className={styles.content}>
	//         {children}
	//       </div>
	//     </motion.div>
	//   );
	// }; EXAMPLE TO LEARN HOW THE DRAGGING WILL WORK AS I DONT WANT THE WHOLE WINDOW TO BE CLICK AND DRAG, ONLY THE TOP BAR TO MOVE THE WINDOW.

	return (
		<motion.div
			drag
			whileDrag={{ scale: 1.1 }}
			dragMomentum={false}
			dragConstraints={boundaryRef}
			className={styles.DraggableTest}
		>
			DraggableTest Component
		</motion.div>
	);
};

export default DraggableTest;
