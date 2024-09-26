import Image from "next/image";

export default function Testimonial({ image, name, content }: { image: string, name: string, content: string }) {
    return (
        <div className="border border-black rounded-xl p-4 bg-white hover:shadow-brutal transition-all duration-300">
            <Image src={image} className="mb-4 mx-auto rounded-full" alt={`Testimonial ${name}`} width={300} height={300} />
            <h3 className="font-outfit font-semibold text-lg mb-2">{name}</h3>
            <p className="italic font-light border-l-2 pl-2 border-black">&quot;{content}&quot;</p>
        </div>
    );
}