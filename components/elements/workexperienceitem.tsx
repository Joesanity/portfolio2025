export default function WorkExperienceItems() {
  type WorkExperienceItem = {
    date: string;
    title: string;
    descriptions?: string[];
    tags?: string[];
  };

  const workExperienceItemsData: WorkExperienceItem[] = [
    {
      date: "2021 - 2023",
      title: "Zeek Design - Web Designer",
      descriptions: [
        "Designed, maintained, and updated websites using WordPress (custom PHP themes, Divi, Elementor).",
        "Conducted keyword research and implemented SEO campaigns to improve client search visibility.",
        "Optimised accessibility and page speed, including image compression, deferred loading, and caching strategies.",
      ],
      tags: [
        "Wordpress",
        "PHP",
        "Divi",
        "Elementor",
        "Keyword Research",
        "SEO",
        "Speed Optimisation",
      ],
    },
    {
      date: "2023 - 2025",
      title: "Zeek Design - Head of SEO and Technical",
      descriptions: [
        "Led SEO, caching, and performance optimisation across all client websites.",
        "Collaborated with design leads to develop custom in-house plugins and functionality, reducing third-party dependencies.",
        "Managed two SEO team members, providing training and quality assurance.",
        "Liaised with the sales team to scope and deliver complex features (API integrations, booking systems, etc.).",
        "Provided ongoing technical support, including DNS management, email migrations, and client training.",
      ],
      tags: [
        "Custom Plugins",
        "Advanced Custom Fields",
        "API Integrations",
        "Technical Support",
        "DNS Management",
        "Email Migrations",
      ],
    },
    {
      date: "2025 - Present",
      title: "Codematik - Software Engineer",
      descriptions: [
        "Developing an internal Laravel-based system for a global engineering company.",
        "Rebuilding the company website, following SEO best practices and upgrading to a modern design.",
        "Implementing multilingual features, secure data submissions, and version-controlled data editing.",
        "Using Git for continuous integration and collaboration with the wider development team.",
      ],
      tags: [
        "Laravel",
        "Azure Dev Ops",
        "NextJs",
        "VueJs",
        "BitBucket",
        "C#",
        "Linux VPS Management",
      ],
    },
  ];

  const getTagColor = (tag: string) => {
    const lower = tag.toLowerCase();
    if (
      ["php", "c#", "laravel", "nextjs", "vuejs"].some((t) => lower.includes(t))
    )
      return "emerald";
    if (
      ["wordpress", "elementor", "divi", "bitbucket", "azure"].some((t) =>
        lower.includes(t)
      )
    )
      return "sky";
    if (["seo", "keyword", "optimisation"].some((t) => lower.includes(t)))
      return "amber";
    if (
      ["dns", "linux", "management", "support", "email", "custom fields"].some((t) => lower.includes(t))
    )
      return "rose";
    if (["plugin", "api", "acf"].some((t) => lower.includes(t)))
      return "violet";
    return "gray";
  };

  const workExperienceItemsHTML = workExperienceItemsData.map((item) => (
    <article key={item.title} className="mb-16 relative">
      <p className="text-sm text-gray-500 font-mono">{item.date}</p>
      <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
      {item.descriptions &&
        item.descriptions.map((description, index) => (
          <p key={index} className="text-gray-700 mt-3">
            - {description}
          </p>
        ))}
      <div className="flex flex-wrap gap-2 mt-6">
        {item.tags &&
          item.tags.map((tag, index) => (
            <span
              key={index}
              className={`bg-${getTagColor(tag)}-100 text-${getTagColor(tag)}-700 px-2 py-1 rounded text-sm font-mono`}
            >
              {tag}
            </span>
          ))}
      </div>
    </article>
  ));

  return (
    
    <div className="">
      {workExperienceItemsHTML}
      
      <span className="hidden bg-amber-100 text-amber-700 bg-violet-100 text-violet-700 text-rose-700 bg-rose-100"></span>

      {/* <div className="flex flex-wrap gap-2 mt-3">
        <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded text-sm font-mono">
          Next.js
        </span>
        <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm font-mono">
          WordPress
        </span>
      </div> */}
    </div>
  );
}
