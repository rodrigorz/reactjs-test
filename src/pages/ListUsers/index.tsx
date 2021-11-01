import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CFormInput,
  CFormSelect,
  CPagination,
  CPaginationItem,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPlus, cilFilter, cilPencil, cilMinus } from "@coreui/icons";
import { User } from "../../database/users";
import api from "../../services/api";
import { Link } from "react-router-dom";

const ListUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const selectStatusRef = useRef<HTMLSelectElement>(null);

  const loadData = useCallback(async (status?: string) => {
    const data = await api.getUsers(status);

    setUsers(data);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleStatusFilter = async () => {
    loadData(selectStatusRef.current?.value);
  };

  const deleteUser = async (userId: number) => {
    const deleted = await api.deleteUser(userId);

    if (deleted) {
      loadData();
    }
  };

  const restoreUser = async (userId: number) => {
    const restored = await api.restoreUser(userId);

    if (restored) {
      loadData();
    }
  };

  return (
    <div className="p-3">
      <CRow className="mb-2">
        <CCol>
          <div className="d-flex align-items-center justify-content-between">
            <CButton color="success">
              <CIcon icon={cilPlus} /> Add
            </CButton>

            <div className="d-flex gap-4 w-75 align-items-center justify-content-end">
              <div className="d-flex align-items-center gap-1">
                <span>Status:</span>
                <CFormSelect ref={selectStatusRef}>
                  <option value="">All</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </CFormSelect>
                <CButton color="warning" variant="ghost" onClick={handleStatusFilter}>
                  <CIcon icon={cilFilter} size="sm" />
                </CButton>
              </div>

              <div>
                <CFormInput placeholder="search" />
              </div>
            </div>
          </div>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              <CTable align="middle" striped>
                <CTableHead>
                  <CTableRow color="dark">
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Profile</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {users.map(user => (
                    <CTableRow key={user.id}>
                      <CTableDataCell>{user.first_name} {user.last_name}</CTableDataCell>
                      <CTableDataCell>{user.username}</CTableDataCell>
                      <CTableDataCell>{user.profile}</CTableDataCell>
                      <CTableDataCell>{user.status}</CTableDataCell>
                      <CTableDataCell>
                        <Link to={`/${user.id}`}>
                          <CButton size="sm" variant="ghost">
                            <CIcon icon={cilPencil} size="sm" />
                          </CButton>
                        </Link>
                        {user.status === 'active' ? (
                          <CButton size="sm" color="danger" variant="ghost" className="ms-1" onClick={() => deleteUser(user.id)}>
                            <CIcon icon={cilMinus} size="sm" />
                          </CButton>
                        ) : (
                          <CButton size="sm" color="success" variant="ghost" className="ms-1" onClick={() => restoreUser(user.id)}>
                            <CIcon icon={cilPlus} size="sm" />
                          </CButton>
                        )}
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>

              <CPagination align="end">
                <CPaginationItem>Previous</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>Next</CPaginationItem>
              </CPagination>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default ListUsers;
