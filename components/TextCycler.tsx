"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TextCycler = () => {
    const words = ["Developer", "Captain", "Leader", "Engineer"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedCharacters, setDisplayedCharacters] = useState<string[]>([]);
    const [isRemoving, setIsRemoving] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const word = words[currentWordIndex].split(""); // Split current word into characters

        if (!isRemoving) {
            // Add characters one by one (left-to-right)
            if (displayedCharacters.length < word.length) {
                timeout = setTimeout(() => {
                    setDisplayedCharacters((prev) => [...prev, word[prev.length]]);
                }, 100); // Delay per character
            } else {
                timeout = setTimeout(() => setIsRemoving(true), 1000); // Pause before removing
            }
        } else {
            // Remove characters one by one (right-to-left)
            if (displayedCharacters.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedCharacters((prev) => prev.slice(0, -1));
                }, 100);
            } else {
                setIsRemoving(false);
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Next word
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedCharacters, isRemoving, currentWordIndex]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p className="text-sm md:text-xl text-muted-foreground max-w-[1100px] tracking-wide text-justify">
                    <span className="text-2xl font-bold block text-center">
                        {displayedCharacters.map((char, index) => (
                            <span
                                key={index}
                                className="inline-block opacity-1 animate-fade-in tracking-widest"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </span>
                </p>
            </motion.div>
        </>
    )
}

export default TextCycler;