import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

export default function Home() {
  return (
    <main>
      <section className="w-4/5 mx-auto flex gap-4">
        <div className="flex flex-col w-1/2 gap-6">
          <div className="border-black border rounded p-6">
            <p className="text-md">Software Engineer</p>
            <h1 className="text-5xl font-extrabold mb-6">Joe Dinsley</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quas fugiat asperiores nostrum fuga architecto omnis magnam esse consequuntur quis, quam laboriosam qui! Asperiores similique corporis vel, aliquam tempora excepturi.</p>
          </div>
          <div className="border-black border rounded p-6 flex gap-6"><FaGithub size={36} /><FaLinkedin size={36} /><TbFileCv size={36} /></div>
        </div>
        <div>
          Image/Illustration
        </div>
      </section>
    </main>
  );
}
