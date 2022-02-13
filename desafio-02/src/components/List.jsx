import React from "react";

function List({ fetchedData }) {
  return (
    <ul className="list">
      {fetchedData.map((item => <li key={item.id}>{JSON.stringify(item)}</li>))}
    </ul>
  )
}

export default List;