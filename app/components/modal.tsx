"use client";

import React from "react";
import { AnimatePresence, motion } from 'framer-motion';

export default function Modal({ children, open, onClose }: Readonly<{ children: React.ReactNode, open: boolean, onClose: Function }>) {
    const backdropVariant = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.3,
            },
        },
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
            },
        },
    };
    const modalVariant = {
        hidden: {
            scale: 0,
            transition: {
                duration: 0.3,
            },
        },
        visible: {
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                staggerChildren: 0.5,
            },
        },
    };
    const modalContentVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
            },
        },
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur overflow-y-auto h-full w-full flex items-center justify-center z-50" variants={backdropVariant} initial="hidden" animate="visible" exit="hidden">
                    <motion.div className="mx-8 relative max-w-xl bg-white border border-black rounded-xl shadow-brutal p-6" variants={modalVariant} initial="hidden" animate="visible" exit="hidden">
                        <button className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-brutal-sm border border-black" onClick={() => onClose(false)} aria-label="Chiudi">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>                      
                        </button>
                        <motion.div variants={modalContentVariant} initial="hidden" animate="visible" exit="hidden">
                            {children}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}