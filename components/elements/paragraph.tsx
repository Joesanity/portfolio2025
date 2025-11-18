export default function Paragraph({ children } : { children: React.ReactNode}) {
    return (
        <p className="text-base/7 text-gray-700">
            {children}
        </p>
    )
}