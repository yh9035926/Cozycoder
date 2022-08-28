import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const UserList = ({ users }) => {
  const Box = styled.div`
    border: 1px solid;
    width: 200px;
  `;

  return (
    <div>
      {users.map((u) => (
        <Box key={u.id}>
          <Link to={`/Users/${u.id}`}>{u.name}</Link>
        </Box>
      ))}
    </div>
  );
};

export default UserList;
