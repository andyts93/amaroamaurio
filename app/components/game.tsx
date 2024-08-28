import { useEffect, useState } from "react";

export default function Game() {
    const [clipHeight, setClipHeight] = useState(0);
    const [startTime, setStartTime] = useState<number | null>(null);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (startTime && clipHeight > -100) {
            timer = setInterval(() => {
                setElapsedTime(Date.now() - startTime);
            }, 100);
        } else if (clipHeight <= -100 && timer) {
            clearInterval(timer as number);
        }
        return () => clearInterval(timer as unknown as number);
    }, [startTime, clipHeight]);

    const handleClick = () => {
        if (!startTime) {
            setStartTime(Date.now());
        }
        setClipHeight(prev => prev - 5);
    };

    const resetGame = () => {
        setClipHeight(0);
        setStartTime(null);
        setElapsedTime(0);
    }

    return (
        <>
            <p className="text-lg">Clicca sul bicchiere per cominciare a riempirlo, batti il tuo record!</p>
            <h3 className="text-2xl font-bold font-outfit text-right">Time: {(elapsedTime / 1000).toFixed(2)}s</h3>
            <div className="flex justify-center">
                <svg
                    className="fill-amber-800"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="250"
                    onClick={handleClick}
                >
                    <defs>
                        <clipPath id="glass-clip">
                            <rect x="0" y={`${clipHeight}%`} width="100%" height="100%" />
                        </clipPath>
                    </defs>
                    <g>
                        <path d="M480 32H32C12.5 32-2.4 49.2.3 68.5l56 356.5c4.5 31.5 31.5 54.9 63.4 54.9h273c31.8 0 58.9-23.4 63.4-54.9l55.6-356.5C514.4 49.2 499.5 32 480 32zm-37.4 64l-30 192h-313L69.4 96h373.2z" />
                        <path
                            d="M480 32H32C12.5 32-2.4 49.2.3 68.5l56 356.5c4.5 31.5 31.5 54.9 63.4 54.9h273c31.8 0 58.9-23.4 63.4-54.9l55.6-356.5C514.4 49.2 499.5 32 480 32zm-37.4 64l-30 192h-313L69.4 96h373.2z"
                            className="fill-sky-200"
                            clipPath="url(#glass-clip)"
                        />
                    </g>
                </svg>
            </div>
            {clipHeight <= -100 && (<div className="flex justify-center">
                <button type="button" className="bg-violet-500 text-white px-4 py-2 rounded-full font-semibold shadow-brutal shadow-black border border-black hover:shadow-none transition-all duration-300" onClick={resetGame}>Ricomincia</button>
            </div>)}
        </>
  );
}
