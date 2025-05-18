import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import SidebarSection from "./SidebarSection";

const Sidebar = () => {
  const [sections] = useState([
    {
      title: "WORKSHOPS",
      items: ["Workshop List", "Workshop Submissions"],
    },
    {
      title: "PAYMENTS",
      items: ["Order Request", "Refund Request"],
    },
    {
      title: "OTHER FEATURES",
      items: ["Forum List", "Creative Corner"],
    },
  ]);

  return (
    <div className="bg-[#FFDEB5] rounded-lg shadow-lg">
      {/* Header */}
      <div className="bg-[#FF570C] rounded-t-lg py-6 px-4">
        <div className="text-center">
          <div className="text-[#FCEDDA] text-xl font-bold">TIKET KARYA</div>
          <div className="text-[#FCEDDA] text-5xl font-normal opacity-25 leading-tight">
            TK
          </div>
        </div>
      </div>

      {/* Admin Profile */}
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#FF5126] rounded-full flex items-center justify-center border-2 border-[#FFDEB5]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/97a09fd7d997b9e2073117bbe38f75ff22be3412"
              alt="Admin"
              className="w-8 h-8"
            />
          </div>
          <span className="text-lg font-medium">Admin XYZ</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        {/* Analytics */}
        <SidebarItem active>Analytics</SidebarItem>

        {/* Sections */}
        {sections.map((section, index) => (
          <SidebarSection key={index} title={section.title} defaultOpen={true}>
            {section.items.map((item, itemIndex) => (
              <SidebarItem key={itemIndex}>{item}</SidebarItem>
            ))}
          </SidebarSection>
        ))}

        {/* Logout Button */}
        <div className="mt-6">
          <button
            onClick={() => (window.location.href = "/login-admin")}
            className="w-full text-center py-2 text-[#FF5126] hover:text-[#FF570C] transition-colors font-medium"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
