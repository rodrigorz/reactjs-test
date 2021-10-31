import { cilPeople } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CNavItem, CSidebar, CSidebarNav } from '@coreui/react';
import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import AppContext from '../../contexts/AppContext';

const Sidebar: React.FC = () => {
  const { sidebarShow } = useContext(AppContext);
  const location = useLocation();

  return (
    <CSidebar position="sticky" visible={sidebarShow} className="bg-primary">
      <CSidebarNav>
        <CNavItem href="/" active={location.pathname === '/'}>
          <CIcon icon={cilPeople} customClassName="nav-icon" />
          Users
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
}

export default Sidebar;
