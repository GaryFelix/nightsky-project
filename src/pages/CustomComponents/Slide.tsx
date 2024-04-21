import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type props = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export default function Slide({ children, delay, className }: props){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(()=>{
        if(isInView) {
            controls.start("visible");
        }
    }, [isInView]);

}