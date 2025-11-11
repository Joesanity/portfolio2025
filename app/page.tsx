import WorkExperienceItems from "@/components/sections/workexperienceitems";
import Cloud from "@/components/sections/cloud";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import Tag from "@/components/elements/tag";
import ProjectItems from "@/components/sections/projectitems";

export default function Home() {
  return (
    <main
      className="
    bg-gray-50"
    >
      <section className="bg-linear-to-br from-sky-50 via-white to-emerald-50">
        <div className="w-4/5 mx-auto flex gap-6 py-20 items-stretch">
          <div className="flex flex-col w-1/2 gap-3">
            <div className="border border-gray-200 shadow-lg rounded-t-xl p-6 bg-white">
              <p className="text-md mb-3 font-mono text-sm tracking-wide text-gray-600">
                Software Engineer
              </p>
              <h1 className="text-7xl mb-9 font-light">
                <span className="font-extrabold bg-linear-to-r from-emerald-600 to-sky-500 bg-clip-text text-transparent">
                  Hello,
                </span>{" "}
                I'm Joe Dinsley
              </h1>
              <p className="text-base/7 text-gray-700">
                Results-driven software engineer with experience across{" "}
                <span className="text-emerald-600 font-bold">Front-end </span>
                and{" "}
                <span className="text-emerald-600 font-bold">
                  Back-end Development
                </span>
                . Skilled in building high-performance websites and applications
                with a strong focus on{" "}
                <span className="text-emerald-600 font-bold">SEO</span>,
                <span className="text-emerald-600 font-bold">
                  {" "}
                  Accessibility
                </span>
                , and{" "}
                <span className="text-emerald-600 font-bold">Optimisation</span>
                .
              </p>
              <br />
              <p className="text-base/7 text-gray-700">
                Proven ability to lead projects from concept to delivery,
                collaborating with teams and clients to deliver efficient,
                scalable, and high-quality solutions.
              </p>
            </div>
            <div className="border border-gray-200 shadow-lg rounded-b-xl p-6 bg-white flex gap-9">
              <div className="p-3 bg-sky-100 rounded-full hover:bg-sky-300 hover:scale-110 transition duration-300 ease-out">
                <FaGithub size={36} />
              </div>
              <div className="p-3 bg-sky-100 rounded-full hover:bg-sky-300 hover:scale-110 transition duration-300 ease-out">
                <FaLinkedin size={36} />
              </div>
              <div className="p-3 bg-sky-100 rounded-full hover:bg-sky-300 hover:scale-110 transition duration-300 ease-out">
                <TbFileCv size={36} />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="rounded-t-xl bg-linear-to-br from-emerald-100 via-white to-sky-100 border border-gray-200 shadow-lg flex-4">
              <Cloud />
            </div>
            <div className="border border-gray-200 shadow-lg rounded-b-xl bg-white flex-1 flex items-center justify-center">
              <h2 className="text-center text-4xl font-mono">Technologies</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="w-4/5 mx-auto py-20">
        <h2 className="text-4xl font-bold font-sans mb-12 text-center">
          Experience
        </h2>
        <div className="border-l border-gray-200 pl-8 space-y-12">
          <WorkExperienceItems />
        </div>
      </section>

      <section className="bg-linear-to-br from-sky-50 via-white to-emerald-50 py-20">
        <div className="w-4/5 mx-auto">
          <h2 className="text-4xl font-bold font-sans mb-12 text-center">
            Projects
          </h2>
          <div>
            <ProjectItems />
          </div>
        </div>
      </section>
    </main>
  );
}
