import React from 'react';

function Table({ data }) {
  const dataKeys = Object.keys(data[0] || []);
  
  return (
    <div className="table-container">
      <table className="table">
          <thead>
          <tr>
            {
              dataKeys.map((key, i) => {
                return <th key={i}>{key.toUpperCase()}</th>
              })
            }
          </tr>
          </thead>
          <tbody>
              {
                data.map((item, index) => (
                  <tr key={index}>
                    {Object.values(item).map((value, index2) => (
                      <td key={index2}>{typeof value !== "string" ? JSON.stringify(value) : value}</td>
                    ))}
                  </tr>
                ))
              }
          </tbody>
      </table>
    </div>
  )
}

export default Table;