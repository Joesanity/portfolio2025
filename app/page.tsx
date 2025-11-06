import Cloud from "@/components/sections/cloud";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

export default function Home() {
  return (
    <main>
      <section className="w-4/5 mx-auto flex gap-4 my-12 items-stretch">
        <div className="flex flex-col w-1/2 gap-6">
          <div className="border-black border rounded p-6">
            <p className="text-md mb-3">Software Engineer</p>
            <h1 className="text-6xl font-extrabold mb-9">
              Hello I'm Joe Dinsley
            </h1>
            <p>
              Results-driven software engineer with experience across front-end
              and back-end development. Skilled in building high-performance
              websites and applications with a strong focus on SEO,
              accessibility, and optimisation.
            </p>
            <br />
            <p>
              Proven ability to lead projects from concept to delivery,
              collaborating with teams and clients to deliver efficient,
              scalable, and high-quality solutions.
            </p>
          </div>
          <div className="border-black border rounded p-6 flex gap-6">
            <FaGithub size={36} />
            <FaLinkedin size={36} />
            <TbFileCv size={36} />
          </div>
        </div>
        <div className="border-black border rounded p-6 w-1/2">
          <Cloud />
        </div>
      </section>
    </main>
  );
}
