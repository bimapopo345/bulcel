import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#FCEDDA]">
      {/* Top Spacing */}
      <div className="h-2.5" />

      {/* Main Container */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Sidebar */}
          <div className="w-full lg:w-[280px] lg:min-w-[280px]">
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
