import { cilMenu } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CContainer, CHeader, CHeaderNav, CHeaderToggler, CNavItem, CNavLink } from "@coreui/react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../../contexts/AppContext";

const Header: React.FC = () => {
  const { sidebarShow, setSidebarShow } = useContext(AppContext);

  return (
    <CHeader className="bg-primary border-bottom-0">
      <CContainer fluid>
        <CHeaderToggler
          className="text-light ps-1"
          onClick={() => setSidebarShow(!sidebarShow)}
        >
          Navigation <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>

        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/" component={NavLink} className="text-light">
              Users
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default Header;
