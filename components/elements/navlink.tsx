"use client"

import Button from "./button";
import { usePathname } from "next/navigation";

export default function NavLink({ label, href, classes = "" } : {
    label: string,
    href: string,
    classes?: string
}) {

    const pathname = usePathname();
    const isActive = pathname === href;

    if (isActive) {
        classes += " border-b-2 border-emerald-500 "
    }

    classes += " hover:text-emerald-500 duration-200"

    
    return (
        <Button label={label} href={href} classes={classes} />
    )
}