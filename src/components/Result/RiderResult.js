import React, { useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const RiderResult = ({ data }) => {
  const [block, setBlock] = useState(false);

  const handleBlock = (block, id) => {
    let modifired = [];
    data.forEach((user) => {
      if (user._id === id) {
        user.block = block;
      }
      modifired.push(user);
    });

    setBlock(modifired);

    axios.patch(`/rider-user-block/${id}`, { block }).then((res) => {
      if (block) {
        alert("User block successfully!");
      } else {
        alert("User unblock successfully!");
      }
    });
  };

  return (
    <>
      <div className="mt-4">
        <h3>Riders</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">Block User</th>
              <th>Number</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Vehicle</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, ind) => {
              const { fullName, email, age, car, bike, _id, block } = user;
              return (
                <tr key={user._id}>
                  <td className="text-center">
                    <input
                      onChange={(e) => handleBlock(e.target.checked, _id)}
                      defaultChecked={block}
                      type="checkbox"
                    ></input>
                  </td>
                  <td>{ind}</td>
                  <td>{fullName}</td>
                  <td>{email}</td>
                  <td>{age}</td>
                  <td>
                    {car ? "Car" : ""}
                    {bike ? "Bike" : ""}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default RiderResult;
