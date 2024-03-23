import React from "react";

const DotList = ({ id, title, result }) => {
  return (
    <li key={id}>
      <b>{title} </b>
      {result && <p>- {result[id]}</p>}
    </li>
  );
};

export default DotList;
