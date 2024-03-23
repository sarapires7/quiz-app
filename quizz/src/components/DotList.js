import React from "react";

const DotList = ({ list, result }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <b>{item.question} </b>
          <p>- {result[item.id]}</p>
        </li>
      ))}
    </ul>
  );
};

export default DotList;
