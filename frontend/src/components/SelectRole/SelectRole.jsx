import React, { useEffect, useState } from "react";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeRole } from "../../store/slices/userSlice";
import "./SelectRole.css";
import Cookies from "js-cookie";

export default function SelectRole() {
  return (
    <Container className="fullscreen-center">
      <RoleDropdown />
    </Container>
  );
}

const RoleDropdown = () => {
  const role = useSelector((state) => state.user.role);
  const dispatch = useDispatch();
  const roles = ["Customer", "Waiter", "Chef", "Manager"];

  useEffect(() => {
    Cookies.set("role", role, { expires: 7 });
  }, [role]);

  return (
    <DropdownButton
      id="role-dropdown"
      title={role}
      variant="dark"
      className="shadow-lg rounded"
    >
      {roles.map((role, index) => (
        <Dropdown.Item
          key={index}
          onClick={() => {
            dispatch(changeRole(role));
          }}
          className="text-capitalize p-2"
        >
          {role}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};
