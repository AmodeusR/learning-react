import React from "react";

function List({ fetchedData }) {
  return (
    <ul className="list">
      {fetchedData.map((item => <li>{JSON.stringify(item)}</li>))}
    </ul>
  )
}

export default List;