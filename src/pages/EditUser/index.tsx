import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { User } from "../../database/users";
import api from "../../services/api";
import ProfileTab from "./ProfileTab";
import UserTab from "./UserTab";

const EditUser: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [user, setUser] = useState<User>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const loadData = async () => {
      const data = await api.showUser(params.id);
      setUser(data);
    };

    loadData();
  }, [params.id]);

  return (
    <div className="p-3">
      {user && (
        <>
          <CNav variant="tabs">
            <CNavItem>
              <CNavLink
                href="#"
                onClick={() => setActiveTab(0)}
                active={activeTab === 0}
              >
                User Registry
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                href="#"
                onClick={() => setActiveTab(1)}
                active={activeTab === 1}
              >
                Profile
              </CNavLink>
            </CNavItem>
          </CNav>

          <CTabContent>
            <CTabPane
              role="tabpanel"
              aria-labelledby="user-tab"
              visible={activeTab === 0}
            >
              <UserTab user={user} />
            </CTabPane>

            <CTabPane
              role="tabpanel"
              aria-labelledby="user-tab"
              visible={activeTab === 1}
            >
              <ProfileTab user={user} />
            </CTabPane>
          </CTabContent>
        </>
      )}
    </div>
  );
};

export default EditUser;
