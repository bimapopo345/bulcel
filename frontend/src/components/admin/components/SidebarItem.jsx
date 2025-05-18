import React from "react";
import PropTypes from "prop-types";

const SidebarItem = ({ children, active = false }) => {
  return (
    <div
      className={`
        px-4 py-2 rounded-md cursor-pointer
        text-lg font-medium text-center
        transition-colors duration-200
        ${active ? "bg-[#FCEDDA]" : "hover:bg-[#FCEDDA]/50"}
      `}
    >
      {children}
    </div>
  );
};

SidebarItem.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
};

export default SidebarItem;
