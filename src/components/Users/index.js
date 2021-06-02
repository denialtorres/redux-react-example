import React, { useEffect, useState } from "react";
import "./user.css";

export default function Users() {
  const [userDetails, setUserDetails] = useState([]);

  const handleButtonClick = () => {
    // make a call to Action Creator
  };

  return (
    <div className="container">
      <button className="btn" value="click me" onClick={handleButtonClick}>
        FETCH DATA
      </button>

      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
          {userDetails &&
            userDetails.map((item, key) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.website}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
