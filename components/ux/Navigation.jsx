'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";

import { faChartLine, faShip, faClipboard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Separator } from "@/components/ui/separator"
import { ChevronsLeft, MenuIcon } from "lucide-react"

const navLinks = [
    {
        name: 'Centros de costos',
        href: '/centros-de-costo',
        icon: <FontAwesomeIcon icon={faShip} style={{ width: "20px" }} />
    },
    {
        name: 'Operaciones',
        href: '/operaciones',
        icon: <FontAwesomeIcon icon={faClipboard} style={{ width: "20px" }} />
    },
    {
        name: 'Dashboard',
        href: '/dashboard',
        icon: <FontAwesomeIcon icon={faChartLine} style={{ width: "20px" }} />
    }
]


const Navigation = () => {

    const pathname = usePathname();

    const sidebarRef = useRef(null);
    const navbarRef = useRef(null);

    const [isReseting, setIsReseting] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);


    const resetWidth = () => {
        if (sidebarRef.current && navbarRef.current) {
            setIsCollapsed(false);
            setIsReseting(true);

            sidebarRef.current.style.width = "240px";
            navbarRef.current.style.setProperty("width", "calc(100% - 240px)");
            navbarRef.current.style.setProperty("left", "240px");

            setTimeout(() => { setIsReseting(false) }, 300);
        }
    }

    const collapse = () => {
        if (sidebarRef.current && navbarRef.current) {
            setIsCollapsed(true);
            setIsReseting(true);

            sidebarRef.current.style.width = "0";
            navbarRef.current.style.setProperty("width", "100%");
            navbarRef.current.style.setProperty("left", "0");

            setTimeout(() => { setIsReseting(false) }, 300);
        }
    }

    return (
        <>
            <aside
                ref={sidebarRef}
                className={cn(
                    "group/sidebar rounded-tr-[50px] h-full bg-black overflow-y-auto relative flex w-60 flex-col z-[99999]",
                    isReseting && "transition-all duration-300 ease-in-out",
                )}
            >
                <div
                    onClick={collapse}
                    role="button"
                    className={cn(
                        "h-6 w-6 text-muted-foreground rounded-sm hover:bg-gray-600 absolute top-9 right-3 opacity-0 group-hover/sidebar:opacity-100 transition cursor-pointer",
                    )}
                >
                    <ChevronsLeft
                        className="h-6 w-6"
                    />
                </div>
                <Link href="/">
                    <Image
                        className="mt-3 ml-2 mb-6 w-[180px] h-[100px] "
                        src="/logo.webp"
                        width={180}
                        height={130}
                        alt="Logo Serport"
                        priority={true}
                    />
                </Link>
                <div className="flex flex-col h-3/5">
                    {
                        navLinks.map(({ name, href, icon }) => (
                            <Link
                                key={href}
                                href={href}
                                icon={icon}
                                className={`${pathname === href || (pathname !== '/' && pathname.includes(href)) ? 'navigation_active' : ''} px-2 mb-5`}
                            >
                                <div className='flex items-center'>
                                    <span className='mr-2 text-white'>{icon}</span>
                                    <p className="text-white">{name}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <Separator className=" w-4/5 h-[1px] self-center" />
            </aside>

            <div
                ref={navbarRef}
                className={cn(
                    "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
                    isReseting && "transition-all duration-300 ease-in-out",
                )}
            >
                <nav className="bg-transparent px-3 py-2 w-full">
                    {isCollapsed && <MenuIcon onClick={resetWidth} role="button" className="h-6 w-6 text-black" />}
                </nav>
            </div>
        </>
    )
}

export default Navigation