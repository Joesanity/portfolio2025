export default function Tag({ tag }: { tag: string }) {
  const getTagColor = (tag: string) => {
    const lower = tag.toLowerCase();
    if (
      // Programming Languages, Frameworks, Databases
      ["php", "c#", "laravel", "next.js", "vue.js", "blade", "mysql", "react", "tailwind"].some((t) =>
        lower.includes(t)
      )
    )
      return "emerald";
    if (
      // Software, Tools, Version Control
      ["wordpress", "elementor", "divi", "bitbucket", "azure", "vercel"].some((t) =>
        lower.includes(t)
      )
    )
      return "sky";
    if (
      // Marketing, Optimisation, Speed
      ["seo", "keyword", "optimisation", "performance", "accessibility"].some((t) => lower.includes(t))
    )
      return "amber";
    if (
      // Domains, DevOps, Technical Systems, Support
      ["dns", "linux", "management", "support", "email", "custom fields", "front-end", "back-end"].some(
        (t) => lower.includes(t)
      )
    )
      return "rose";
    if (
      // Plugins, Components, Systems, Packages
      ["plugin", "api", "acf", "auth"].some((t) => lower.includes(t))
    )
      return "violet";
    return "gray";
  };

  return (
    <span
      className={`bg-${getTagColor(tag)}-100 text-${getTagColor(
        tag
      )}-700 px-2 py-1 rounded text-sm font-mono`}
    >
      {tag}
    </span>
  );
}
