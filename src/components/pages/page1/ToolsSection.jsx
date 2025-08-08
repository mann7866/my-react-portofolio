import { useState } from "react";
import { listTools } from "../../../data";

const categories = [
  "All",
  "Language",
  "Framework",
  "Code Editor",
  "Runtime Environment",
  "Repository",
  "Database",
  "Design App",
  "Office Application",
];

export default function ToolsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredTools =
    activeTab === "All"
      ? listTools
      : listTools.filter((tool) => tool.ket === activeTab);

  return (
    <div id="tools" className="tools mt-32">
      <div className="text-start sm:text-center">
      <h1
        className="text-4xl/snug font-bold mb-4"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Tools yang dipakai
      </h1>
      <p
        className="w-full text-base opacity-50"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Berikut ini adalah beberapa tools yang saya gunakan dalam pembuatan
        website
      </p>
      </div>

      {/* Tabs */}
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mt-10">
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium border 
        ${
          activeTab === category
            ? "bg-zinc-800 text-white"
            : "bg-zinc-200 text-zinc-800"
        } 
        hover:bg-zinc-700 hover:text-white transition`}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay={index * 100} 
            data-aos-once="true"
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
              data-aos-once="true"
          >
            <img
              loading="lazy"
              src={tool.gambar}
              alt="tools-image"
              className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
            />
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50 experiences-text">{tool.ket}</p>
              <p className="opacity-50 experiences-text">{tool.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
