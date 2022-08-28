import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import Spinner from "../components/Spinner";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {}, [users]);
  return (
    <>
      <h5>users</h5>
      {loading ? <Spinner></Spinner> : <UserList users={users}></UserList>}
    </>
  );
};

export default Users;
