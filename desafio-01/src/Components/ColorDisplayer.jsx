const ColorDisplayer = ({ color }) => {

  return (
      <div style={{background: color.toLowerCase()}} className="color-displayer">
        <p>{color || "Empty value"}</p>
      </div>
  )
}

export default ColorDisplayer;