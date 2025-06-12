// components/SideNav.tsx
// components/SideNav.tsx
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function SideNav()
{
    const [open, setOpen] = useState(false);

    return (
        <div className="flex">
            {/* Mobile Sidebar Toggle */}
            <div className="fixed top-20 left-4 z-50 lg:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-screen top-18 py-15">
                        <SheetHeader>
                            <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
                        </SheetHeader>
                        <SidebarLinks closeSheet={() => setOpen(false)} />
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex fixed top-18 left-0 h-screen w-auto flex-col border-r px-0 py-15 z-40 overflow-hidden bg-white dark:bg-black">
                <SidebarLinks />
            </aside>

            {/* Main Content Wrapper */}
            <div className="flex-1 lg:ml-64">
                {/* Your main content goes here */}
            </div>
        </div>
    );
}

function SidebarLinks({ closeSheet }: { closeSheet?: () => void })
{
    const router = useRouter();
    const pathname = usePathname();
    const [scrollToId, setScrollToId] = useState<string | null>(null);

    useEffect(() =>
    {
        if (scrollToId && pathname === "/")
        {
            const section = document.getElementById(scrollToId);
            if (section)
            {
                const yOffset = -80;
                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
            setScrollToId(null);
        }
    }, [pathname, scrollToId]);

    interface MenuItem
    {
        title: string;
        id?: string;    // used for section scroll
        href?: string;  // used for external pages
    }

    const menuItems: MenuItem[] = [
        { title: 'About', id: 'about' },
        { title: 'Projects', id: 'projects' },
        { title: 'Exp.', id: 'experience' },
        { title: 'Contact', id: 'contact' },
        { title: 'Chatgpt', href: '/chatgpt' },
    ];

    const handleClick = (item: MenuItem) => (e: React.MouseEvent<HTMLAnchorElement>) =>
    {
        e.preventDefault();

        if (item.id)
        {
            if (pathname === "/")
            {
                const section = document.getElementById(item.id);
                if (section)
                {
                    const yOffset = -80;
                    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    history.pushState(null, '', `#${item.id}`);
                }
            } else
            {
                setScrollToId(item.id);
                router.push('/');
            }
        } else if (item.href)
        {
            router.push(item.href);
        }

        if (closeSheet) closeSheet();
    };

    return (
        <nav className="flex flex-col gap-10 lg:gap-20 items-center justify-between">
            {
                menuItems.map((item) => (
                    <Link
                        href={item.href || `#${item.id}`}
                        onClick={handleClick(item)}
                        key={item.id || item.title}
                        className="flex lg:rotate-90 items-center text-sm text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-200"
                    >
                        {item.title}
                    </Link>
                ))
            }
        </nav>
    );
}

