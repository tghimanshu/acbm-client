import React from "react";
import Dashboard from "../../Components/admin/dashboard";
import Login from "../../Components/admin/Login";
import { useAuth } from "../../context/authContext";

export default function AdminPage() {
  const { currentUser } = useAuth();
  return (
    <>
      {!currentUser && <Login />}
      {currentUser && <Dashboard />}
    </>
  );
}
