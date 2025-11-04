import Button from "../elements/button";
import NavLink from "../elements/navlink";

export default function Header() {
  return (
    <header className="py-10 max-w-4/5 mx-auto flex justify-between items-center">
      <div className="font-extrabold tracking-wider text-3xl">Joe Dinsley<span className="text-sky-500">.</span></div>
      <div className="flex justify-between items-center gap-12">
        <nav className="flex justify-between items-center gap-10">
          <NavLink label="Home" href="/" />
          <NavLink label="Experience" href="/experience" />
          <NavLink label="Projects" href="/projects" />
        </nav>
        <Button label="Contact Me" href="/contact-me" isButton={true} />
      </div>
    </header>
  );
}
