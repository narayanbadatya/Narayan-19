const graphicDesignTools = [
  { name: "Photoshop", icon: "/icons/photoshop.svg" },
  { name: "Illustrator", icon: "/icons/illustrator.svg" },
  { name: "Canva", icon: "/icons/canva.svg" },
  { name: "Lightroom", icon: "/icons/lightroom.svg" },
  { name: "Premiere Pro", icon: "/icons/premiere.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "DaVinci Resolve", icon: "/icons/davinci.svg" },
  { name: "CapCut", icon: "/icons/capcut.svg" },
  { name: "ChatGPT", icon: "/icons/chatgpt.svg" },
];

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
  {graphicDesignTools.map((tool, idx) => (
    <div key={idx} className="flex flex-col items-center">
      <img
        src={tool.icon}
        alt={tool.name}
        className="w-12 h-12 hover:scale-110 transition-transform"
      />
      <span className="mt-2 text-sm text-center">{tool.name}</span>
    </div>
  ))}
</div>
