import React, { useState } from 'react';
import { Sidebar, SidebarItem } from '@renderer/components/ui/sidebar';

const MySidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      <Sidebar isOpen={isOpen}>
        <SidebarItem label="Home" />
        <SidebarItem label="About" />
        <SidebarItem label="Services" />
        <SidebarItem label="Contact" />
      </Sidebar>
    </div>
  );
};

export default MySidebar;
