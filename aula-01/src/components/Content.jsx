import Item from "./Item";

const Content = ({ items, onCheck, onDelete }) => {
  const emptyListStyle = {
    fontSize: "2rem",
    fontWeight: "bold"
  };

  return (
    <>
        {items.length ? null : <p style={emptyListStyle}>There is nothing here 👀</p>}
      <ul className="list">
        {items.map(({id, checked, description}) => {
          return <Item
            key={id}  
            id={id}
            checked={checked}
            description={description}
            onCheck={onCheck}
            onDelete={onDelete}
          />
        })}
      </ul>
    </>
  )
}

export default Content;
