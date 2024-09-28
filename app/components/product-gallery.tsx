import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images }: { images: string[]}) {
    const [currentImage, setCurrentImage] = useState(images[0]);

    return (
        <div className="flex flex-col">
            <Image src={currentImage} alt="Product Image" width={1024} height={1024} className="rounded-xl border border-black" />
            <div className="grid grid-cols-4 gap-4 mt-4">
                {images.map((image, index) => (
                    <div key={index} onClick={() => setCurrentImage(image)} className="cursor-pointer">
                        <Image src={image} alt="Product Image" width={128} height={128} style={{ opacity: image === currentImage ? 0.3 : 1 }} className="rounded-md" />
                    </div>
                ))}
            </div>
        </div>
    )
};
