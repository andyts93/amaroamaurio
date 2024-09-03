export default function Circle({ x, color }: { x: number, color: string }) {
    const times = Array.from({ length: x }, (_, i) => i);
    const empty = Array.from({ length: 5 - x }, (_, i) => i);

    return (
        <>
            {times.map((_, i) => (
                <span key={i} className={`w-3 h-3 bg-black rounded-full bg-${color}`}></span>
            ))}
            {empty.map((_, i) => (
                <span key={i} className="w-3 h-3 rounded-full bg-transparent border border-black"></span>
            ))}
        </>
    );
}