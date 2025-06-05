// components/SideNav.tsx
import { Home, Settings, Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SideNav()
{
    return (
        <div className="flex">
            {/* Mobile Sidebar Toggle */}
            <div className="lg:hidden p-2 mt-17 w-screen">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-screen top-18 py-15">
                        <SidebarLinks />
                    </SheetContent>
                </Sheet>
            </div>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex fixed top-18 left-0 h-screen w-auto flex-col border-r px-0 py-15 z-40 overflow-hidden bg-white dark:bg-black">
                <SidebarLinks />
            </aside>

            {/* Main Content Wrapper (if needed) */}
            <div className="flex-1 lg:ml-64">
                {/* Your main content goes here */}
            </div>
        </div>

    );
}

function SidebarLinks()
{
    interface MenuItem
    {
        title: string;
        id: string;
    }

    const handleScrollToContact = (item: MenuItem) =>
    {
        const contactSection = document.getElementById(item.id);
        if (contactSection)
        {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const menuItems: MenuItem[] = [
        {
            title: 'About',
            id: 'about',
        },
        {
            title: 'Projects',
            id: 'projects',
        },
        {
            title: 'Exp.',
            id: 'experience',
        },
        {
            title: 'Contact',
            id: 'contact',
        }]

    return (
        <nav className="flex flex-col gap-10 lg:gap-20 items-center justify-between">
            {
                menuItems.map((item: MenuItem) => (
                    <Link
                        href={`#${item.id}`}
                        onClick={(e) =>
                        {
                            e.preventDefault(); // prevent default anchor behavior
                            handleScrollToContact(item); // custom scroll
                            history.pushState(null, '', `#${item.id}`); // optional: update URL hash manually
                        }}
                        key={item.id}
                        className="flex lg:rotate-90 items-center text-sm text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-200"
                    >
                        {item.title}
                    </Link>
                ))
            }
        </nav>
    );
}
