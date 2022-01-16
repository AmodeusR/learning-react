const ColorInput = ({ color, setColor}) => {
  return (
    <>
      <label htmlFor="colorField" className="input-label">Write a color name or hex code</label>
      
      <input
        className="color-input"
        type="text"
        id="colorField"
        placeholder="Add a css color name or hex code"
        value={color}
        onChange={e => setColor(e.target.value)}
      />
    </>
  );
}

export default ColorInput;