// components/Topbar.tsx
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import MALight from '@/assets/images/MA.png'
import MADark from '@/assets/images/MADark.png'
import { toggleDarkMode } from "@/lib/features/context/contextSlice";
import { Lightbulb, LightbulbOff, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export default function Topbar()
{

    return (
        <div className="flex">

            {/* Desktop Sidebar */}
            <aside className="flex fixed top-0 h-auto border-b w-full flex-col px-4 py-4 bg-[#37373700] z-90 backdrop-blur-sm ">
                <TopbarLinks />
            </aside>

            {/* Main Content Wrapper (if needed) */}
            <div className="flex-1 lg:ml-64">
            </div>
        </div>
    );
}

function TopbarLinks()
{
    const dispatch = useDispatch()
    const { isDarkMode } = useSelector((state: any) => state.darkMode)

    const handleDownload = () =>
    {
        // Construct the URL for the PDF file
        let pdfUrl;
        if (isDarkMode)
        {
            pdfUrl = '/Muhammad Ammad (Resume) Black.pdf';
        } else
        {
            pdfUrl = '/Muhammad Ammad (Resume) White.pdf';
        }

        window.open(pdfUrl, '_blank');
    };

    return (
        <nav className="flex flex-row gap-2">
            <Link href="/" className="flex items-center w-auto">
                <Image src={isDarkMode ? MALight : MADark} alt="MA" width={50} height={50} />
            </Link>
            <div className="border-l-1"></div>
            <div className="flex w-full justify-between items-center">
                <Link href="https://www.linkedin.com/in/ammad-mughal/" target="_blank" >
                    <Button variant="outline">
                        <Linkedin />
                    </Button>
                </Link>
                <div className="flex items-center gap-2">
                    <Button onClick={() => dispatch(toggleDarkMode())} variant="outline">
                        {isDarkMode ? <Lightbulb /> : <LightbulbOff />}
                    </Button>
                    <Button onClick={handleDownload} variant="outline">
                        Resume
                    </Button>
                </div>
            </div>
        </nav>
    );
}
