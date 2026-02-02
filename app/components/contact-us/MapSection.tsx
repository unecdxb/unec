'use client';
import { motion } from 'framer-motion';
import { moveUp } from '../motionVarients';

const MapSection = () => {
    return (
        <div className="h-[650px] xl:order-1 overflow-hidden relative">
            <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
                <iframe className='absolute top-[-80px] left-0 h-full min-h-[350px] xl:min-h-[500px]'
                    src="https://www.google.com/maps/d/embed?mid=1sJaPSk6dkzxLcOaPnPYyI0jNUJQ-TS4"
                    width="100%"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy">
                </iframe>

            </motion.div>
        </div>
    );
};

export default MapSection;