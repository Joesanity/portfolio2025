import Button from "../elements/button";
import Tag from "../elements/tag";

export default function ProjectItems() {
  const projects = [
    {
      title: "Codematik Company Website",
      description:
        "Created company website for Codematik - tags, url, and image to be added.",
      image: "https://placehold.co/600x400",
      url: "https://oakstoneconstruction.co.uk",
      tags: ["WordPress", "PHP", "Elementor", "SEO", "Performance"],
    },
    {
      title: "RSVP Wedding Form",
      description:
        "Created a simple wedding form that allows people to RSVP to the wedding and stores the data - needs image, url, and tags",
      image: "https://placehold.co/600x400",
      url: "https://zeekdesign.co.uk",
      tags: ["Next.js", "React", "Tailwind CSS", "Vercel", "Accessibility"],
    },
    {
      title: "Zombie God Website",
      description:
        "Built a website for the Zombie God Steam Game - Needs Image, Url, Tags",
      image: "https://placehold.co/600x400",
      url: "#",
      tags: ["Laravel", "Vue.js", "MySQL", "Auth", "Azure DevOps"],
    },
    {
      title: "Zeek Blog System",
      description:
        "AI Blog Post Manager with Reviews and WordPress integration - Needs Image, Url, Tags",
      image: "https://placehold.co/600x400",
      url: "#",
      tags: ["Laravel", "Vue.js", "MySQL", "Auth", "Azure DevOps"],
    },
    {
      title: "Team Flux",
      description:
        "Created a simple web design company template - Needs Image, Url, Tags",
      image: "https://placehold.co/600x400",
      url: "#",
      tags: ["Laravel", "Vue.js", "MySQL", "Auth", "Azure DevOps"],
    },
    {
      title: "Pro Fitting Driveways",
      description:
        "Driveways website created by myself entirely - Needs Image, Url, Tags",
      image: "https://placehold.co/600x400",
      url: "#",
      tags: ["Laravel", "Vue.js", "MySQL", "Auth", "Azure DevOps"],
    },
        {
      title: "Sales Scoreboard - t3 folder btw for when you lose it.",
      description:
        "Sales scoreboard that allows you to track the sales someone makes, as well as adding and removing sales people - Needs Image, Url, Tags",
      image: "https://placehold.co/600x400",
      url: "#",
      tags: ["Laravel", "Vue.js", "MySQL", "Auth", "Azure DevOps"],
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 pt-3 mb-6">
              {project.tags.map((tag, index) => (
                <Tag tag={tag} key={index} />
              ))}
            </div>
            <Button
              label="Visit Site"
              href={project.url}
              isInternal={false}
              isButton={true}
              classes=" !py-2"
            ></Button>
          </div>
        </div>
      ))}
    </div>
  );
}
