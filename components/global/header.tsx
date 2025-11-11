import Button from "../elements/button";
import NavLink from "../elements/navlink";

export default function Header() {
  return (
    <header className="py-6 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="flex justify-between items-center w-4/5 mx-auto">
      <div className="font-extrabold tracking-tight text-3xl">Joe Dinsley<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-sky-500">.</span></div>
      <div className="flex justify-between items-center gap-8">
        <nav className="flex justify-between items-center gap-8">
          <NavLink label="Home" href="/" />
          <NavLink label="Experience" href="/experience" />
          <NavLink label="Projects" href="/projects" />
        </nav>
        <Button label="Contact Me" href="/contact-me" isButton={true} />
      </div>
      </div>
    </header>
  );
}
