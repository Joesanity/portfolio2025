import Link from "next/link"

export default function Button({label, href, isInternal = true, isButton, classes = ""} : {
    label: string,
    href: string,
    isInternal?: boolean,
    isButton?: boolean,
    classes?: string
}) {

    if (isButton) {
        classes += "px-8 py-4 bg-sky-500 rounded hover:bg-white hover:text-sky-500 duration-200"
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