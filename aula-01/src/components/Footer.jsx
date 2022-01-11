const Footer = ({ totalItems }) => {
  const style = {
    fontSize: "2rem",
    fontWeight: "bold"
  }

  return (
    <footer className="footer">
      <p style={style}>{totalItems} {totalItems === 1 ? "Item" : "Items"}</p>
    </footer>
  )
}

export default Footer;