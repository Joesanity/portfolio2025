import WorkExperienceItems from "@/components/sections/workexperienceitems";
import Cloud from "@/components/sections/cloud";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import Tag from "@/components/elements/tag";
import ProjectItems from "@/components/sections/projectitems";
import MainTitle from "@/components/elements/maintitle";
import AboveTitle from "@/components/elements/abovetitle";
import Paragraph from "@/components/elements/paragraph";
import Highlight from "@/components/elements/highlight";
import Title from "@/components/elements/title";

export default function Home() {
  return (
    <main
      className="
    bg-gray-50"
    >
      <section className="bg-linear-to-br from-sky-50 via-white to-emerald-50">
        <div className="w-4/5 mx-auto flex gap-6 py-20 items-stretch">
          <div className="flex flex-col w-1/2 gap-3">
            <div className="border border-gray-200 shadow-lg p-6 bg-white rounded-t-xl">
              <AboveTitle text="Software Engineer" />
              <MainTitle gradientText="Hello," text="I'm Joe Dinsley" />
              <Paragraph>
                Results-driven software engineer with experience across{" "}
                <Highlight>Front-end </Highlight>
                and <Highlight>Back-end Development</Highlight>. Skilled in
                building high-performance websites and applications with a
                strong focus on <Highlight>SEO</Highlight>,
                <Highlight> Accessibility</Highlight>, and{" "}
                <Highlight>Optimisation</Highlight>.
              </Paragraph>
              <br />
              <Paragraph>
                Proven ability to lead projects from concept to delivery,
                collaborating with teams and clients to deliver efficient,
                scalable, and high-quality solutions.
              </Paragraph>
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
          <div className="flex flex-col w-1/2 shadow-lg rounded-xl">
            <div className=" flex-4 bg-linear-to-br from-emerald-100 via-white to-sky-100 border border-gray-200 ">
              <Cloud />
            </div>
            <div className="shadow-lg rounded-b-xl flex-1 flex items-center justify-center border border-gray-200 bg-white">
              <h2 className="text-center text-4xl font-bold">Technologies</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="w-4/5 mx-auto py-20">
        <Title text="Experience" />
        <div className="border-l border-gray-200 pl-8 space-y-12">
          <WorkExperienceItems />
        </div>
      </section>

      <section className="bg-linear-to-br from-sky-50 via-white to-emerald-50 py-20">
        <div className="w-4/5 mx-auto">
          <Title text="Projects" />
          <div>
            <ProjectItems />
          </div>
        </div>
      </section>
    </main>
  );
}
