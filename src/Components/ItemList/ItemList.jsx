import Item from "../Item/Item";

const ItemList = ({ products }) => {

  return (
      <div>
          {products.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
      </div>
  );
};

export default ItemList;