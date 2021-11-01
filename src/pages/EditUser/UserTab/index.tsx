import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { User } from "../../../database/users";

interface UserTabProps {
  user: User;
}

const statusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

const UserTab: React.FC<UserTabProps> = ({ user }) => {
  const [validated, setValidated] = useState(false);
  const [disableExpireDate, setDisableExpireDate] = useState(false);

  useEffect(() => {
    setDisableExpireDate(user.expire === 0);
  }, [user]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    const form = event.currentTarget;
    form.noValidate = true;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <CCard>
      <CCardBody>
        <CForm
          className="needs-validation"
          onSubmit={handleSubmit}
          validated={validated}
        >
          <CRow className="align-items-center mb-1">
            <CCol xs={3} className="text-end">
              <CFormLabel>Username*</CFormLabel>
            </CCol>
            <CCol>
              <CFormInput required defaultValue={user.username} />
              <CFormFeedback invalid>Field Required</CFormFeedback>
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
                defaultValue={user.first_name}
                required
              />
            </CCol>
            <CCol>
              <CFormInput
                placeholder="Last Name"
                defaultValue={user.last_name}
                required
              />
            </CCol>
          </CRow>

          <CRow className="align-items-center mb-1">
            <CCol xs={3} className="text-end">
              E-mail Address*
            </CCol>
            <CCol>
              <CFormInput type="email" defaultValue={user.email} required />
            </CCol>
          </CRow>

          <CRow className="align-items-center mb-1">
            <CCol xs={3} className="text-end">
              Phone Number
            </CCol>
            <CCol>
              <CFormInput type="tel" placeholder="(00) 0000-0000" defaultValue={user.phone} />
            </CCol>
            <CCol xs={3} className="text-end">
              Mobile Number*
            </CCol>
            <CCol>
              <CFormInput type="tel" placeholder="(00) 00000-0000" defaultValue={user.mobile} required />
            </CCol>
          </CRow>

          <CRow className="align-items-center mb-1">
            <CCol xs={3} className="text-end">
              Password*
            </CCol>
            <CCol>
              <CFormInput type="password" required />
            </CCol>
            <CCol />
          </CRow>

          <CRow className="align-items-center mb-1">
            <CCol xs={3} className="text-end">
              Confirm Password*
            </CCol>
            <CCol>
              <CFormInput type="password" required />
            </CCol>
            <CCol />
          </CRow>

          <CRow className="align-items-center mb-1">
            <CCol xs={3} className="text-end">
              Expire
            </CCol>
            <CCol>
              <CFormCheck
                type="radio"
                inline
                name="expire"
                value={1}
                label="Yes"
                defaultChecked={user && user.expire === 1}
                onChange={(event) => {
                  setDisableExpireDate(false);
                }}
              />
              <CFormCheck
                type="radio"
                inline
                name="expire"
                value={0}
                label="Never"
                defaultChecked={user && user.expire === 0}
                onChange={(event) => {
                  setDisableExpireDate(true);
                }}
              />
            </CCol>
            <CCol xs={3} className="text-end">
              Expire Date
            </CCol>
            <CCol>
              <CFormInput type="date" defaultValue={user.expire_date} disabled={disableExpireDate} />
            </CCol>
          </CRow>

          <CRow className="align-items-center mb-1">
            <CCol xs={3} className="text-end">
              Status
            </CCol>
            <CCol>
              <CFormSelect defaultValue={user.status}>
                {statusOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </CFormSelect>
            </CCol>
            <CCol />
            <CCol />
          </CRow>

          <div className="text-end mt-5">
            <CButton type="button" color="secondary">
              Cancel
            </CButton>
            <CButton type="submit" color="primary" className="ms-2">
              Save
            </CButton>
          </div>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default UserTab;
