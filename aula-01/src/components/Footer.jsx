const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <p>Copyright &copy; {date.toLocaleDateString("pt-br", {month: "long", year: "numeric"})}</p>
    </footer>
  )
}

export default Footer;