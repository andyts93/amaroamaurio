import { ReactNode } from "react";
import Circle from "./circle";
import Image from "next/image";

export default function Ingredient({ children, name, intensity, image }: { children: ReactNode, name: string, intensity: number, image: string }) {

    return (
        <div className="border border-black rounded-xl p-4 bg-white hover:shadow-brutal transition-all duration-300">
            <Image src={image} width={128} height={128} alt="Basilico" className="w-24 mx-auto mb-2" />
            <h4 className="font-outfit font-semibold text-lg mb-2">{name}</h4>
            <div className="flex mb-2 gap-2"><Circle x={intensity} color="black" /></div>
            {children}
        </div>
    );
}