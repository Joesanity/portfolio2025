import { FaGithub } from "react-icons/fa";
import Paragraph from "./paragraph";
import Link from "next/link";

export default function GithubLink({link} : {link: string}) {
  return (
    <Link href={link} className="flex justify-center items-center gap-6 p-6 rounded-xl text-white bg-slate-800 mt-12 hover:bg-white hover:text-slate-800 border border-white hover:border-slate-800 duration-200">
      <FaGithub size={36} />
      <p>Check out the Repo on GitHub</p>
    </Link>
  );
}
