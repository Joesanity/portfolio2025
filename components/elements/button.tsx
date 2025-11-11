import Link from "next/link"

export default function Button({label, href, isInternal = true, isButton, classes = ""} : {
    label: string,
    href: string,
    isInternal?: boolean,
    isButton?: boolean,
    classes?: string
}) {

    if (isButton) {
        classes = "border border-gray-200 shadow-lg px-8 py-4 bg-emerald-500 text-white rounded hover:bg-emerald-600 duration-200 hover:scale-105 " + classes
    }

    if (isInternal) {
        return (
            <Link className={classes} href={href}>{label}</Link>
        )
    } else if (!isInternal) {
        return (
            <a className={classes} href={href}>{label}</a>
        )
    }
}