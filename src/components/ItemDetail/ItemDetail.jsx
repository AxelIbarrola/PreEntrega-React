import "./ItemDetail.css";
import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";

export const ItemDetail = ({ item }) => {
  const { addItem } = useCart();

  return (
    <div className="detail-wrapper">
      <Item {...item} variant="detail">
        <button
          className="btn bg-primary primary"
          onClick={() => addItem(item)}
        >
          Agregar al carrito
        </button>
      </Item>
    </div>
  );
};
