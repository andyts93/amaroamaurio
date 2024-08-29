import Image from "next/image";

export default function Testimonial({ gender, name }: { gender: string, name: string }) {
    return (
        <div className="border border-black rounded-xl p-4 bg-white hover:shadow-brutal transition-all duration-300">
            <Image src={`https://avatar.iran.liara.run/public/${gender}`} className="mb-4" alt="Testimonial" width={300} height={300} />
            <h3 className="font-outfit font-semibold text-lg mb-2">{name}</h3>
            <p className="italic font-light border-l-2 pl-2 border-black">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie enim vitae sem facilisis aliquam.&quot;</p>
        </div>
    );
}