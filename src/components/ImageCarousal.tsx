import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button'; // Shadcn button
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ImageCarousel = ({ images }: { images: StaticImageData[] }) =>
{
    const [current, setCurrent] = useState(0);

    const prev = () =>
    {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const next = () =>
    {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-96">
            {/* Image */}
            <div className="relative w-full h-full">
                <Image
                    src={images[current]}
                    alt={`Slide ${current}`}
                    fill
                    className="object-cover rounded-xl transition-all duration-500"
                    placeholder="blur"
                />
            </div>

            {/* Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={prev}
                    className="bg-white/70 dark:bg-black/50 hover:bg-white dark:hover:bg-black rounded-full"
                >
                    <ChevronLeft />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={next}
                    className="bg-white/70 dark:bg-black/50 hover:bg-white dark:hover:bg-black rounded-full"
                >
                    <ChevronRight />
                </Button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-2 w-full flex justify-center gap-1">
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        className={`h-2 w-2 rounded-full ${idx === current ? 'bg-primary' : 'bg-muted'}`}
                    />
                ))}
            </div>
        </div>
    );
};