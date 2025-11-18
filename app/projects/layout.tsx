export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-linear-to-br from-sky-50 via-white to-emerald-50">
    <div className="flex w-4/5 py-20 mx-auto gap-6 ">
      <main className="flex-6 border border-gray-200 shadow-lg p-6 rounded-xl">{children}</main>
      <aside className="flex-4 border border-gray-200 shadow-lg p-6 rounded-xl">
        <h2 className="font-bold text-2xl">Look at another project</h2>    
      </aside>
    </div>
    </div>
  )
}