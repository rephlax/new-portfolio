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
