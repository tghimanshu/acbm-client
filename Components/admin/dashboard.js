import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { db } from "../../firebase";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collection(db, "pre-registrations"));
      // data.forEach((doc) => {
      //   console.log(doc.data());
      // });
      setUsers(data.docs.map((doc) => doc.data()));
    };
    getUsers();
  }, []);

  const columns = [
    {
      name: "Name",
      sortable: true,
      selector: (row) => row.name,
    },
    {
      name: "Email",
      sortable: true,
      selector: (row) => row.email,
    },
    {
      name: "College",
      sortable: true,
      selector: (row) => row.college,
    },
    {
      name: "Course",
      sortable: true,
      selector: (row) => row.course,
    },
  ];

  const data =
    users.length &&
    users.map((user, i) => ({
      // id: i,
      name: user.name,
      email: user.email,
      college: user.college,
      course: user.course,
    }));

  return (
    <>
      <div className="breadcrumbs" data-aos="fade-in">
        <div className="container">
          <h2>Admin Dashboard</h2>
          <p></p>
        </div>
      </div>
      <section id="contact" className="contact container mt-5">
        {data && <DataTable columns={columns} data={data} pagination={true} />}
      </section>
    </>
  );
}
