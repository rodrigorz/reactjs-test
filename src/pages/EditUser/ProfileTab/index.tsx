import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CFormInput,
  CFormSelect,
  CRow,
} from "@coreui/react";
import React from "react";
import { User } from "../../../database/users";

interface UserTabProps {
  user: User;
}

const profileOptions = [
  { value: "Owner", label: "Owner" },
  { value: "Driver", label: "Driver" },
  { value: "Office Support", label: "Office Support" },
  { value: "Business Contact", label: "Business Contact" },
];

const companyOptions = [
  { value: "Company 1", label: "Company 1" },
  { value: "Company 2", label: "Company 2" },
  { value: "Company 3", label: "Company 3" },
  { value: "Company 4", label: "Company 4" },
];

const ProfileTab: React.FC<UserTabProps> = ({ user }) => {
  return (
    <CCard>
      <CCardBody>
        <CRow className="align-items-center mb-1">
          <CCol xs={3} className="text-end">
            Username*
          </CCol>
          <CCol>
            <CFormInput disabled defaultValue={user.username} />
          </CCol>
          <CCol />
        </CRow>

        <CRow className="align-items-center mb-1">
          <CCol xs={3} className="text-end">
            Full name*
          </CCol>
          <CCol>
            <CFormInput
              placeholder="First Name"
              disabled
              defaultValue={user.first_name}
            />
          </CCol>
          <CCol>
            <CFormInput
              placeholder="Last Name"
              disabled
              defaultValue={user.last_name}
            />
          </CCol>
        </CRow>

        <CRow className="align-items-center mb-1">
          <CCol xs={3} className="text-end">
            Profile
          </CCol>
          <CCol>
            <CFormSelect defaultValue={user.profile}>
              {profileOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </CFormSelect>
          </CCol>
          <CCol xs={3} className="text-end">
            Company
          </CCol>
          <CCol>
            <CFormSelect defaultValue={user.company}>
              {companyOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </CFormSelect>
          </CCol>
        </CRow>

        <div className="text-end mt-5">
          <CButton color="secondary">Cancel</CButton>
          <CButton color="primary" className="ms-2">
            Save
          </CButton>
        </div>
      </CCardBody>
    </CCard>
  );
};

export default ProfileTab;
