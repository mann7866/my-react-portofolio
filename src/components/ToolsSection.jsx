import { useState } from "react";
import { listTools } from "../data";

const categories = ["All", "Language", "Framework", "Code Editor", "Javascript Runtime", "Repository", "Database", "Design App"];

export default function ToolsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredTools = activeTab === "All"
    ? listTools
    : listTools.filter((tool) => tool.ket === activeTab);

  return (
    <div className="tools mt-32">
      <h1
        className="text-4xl/snug font-bold mb-4"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Tools yang dipakai
      </h1>
      <p
        className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base opacity-50"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        Berikut ini adalah beberapa tools yang saya gunakan dalam pembuatan website
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mt-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium border 
              ${activeTab === category ? "bg-zinc-800 text-white" : "bg-zinc-200 text-zinc-800"} 
              hover:bg-zinc-700 hover:text-white transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="tools-book mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {filteredTools.map((tool) => (
          <div
            className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
            key={tool.id}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay={tool.dad}
          >
            <img
              loading="lazy"
              src={tool.gambar}
              alt="tools-image"
              className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
            />
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
