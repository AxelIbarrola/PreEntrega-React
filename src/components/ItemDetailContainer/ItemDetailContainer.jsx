import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItemDetail(null);
    setLoading(true);
    setError(null);

    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener los detalles del producto");
        }
        return res.json();
      })
      .then((data) => {
        const item = data.find((product) => String(product.id) === id);

        if (item) {
          setItemDetail(item);
          return;
        }

        throw new Error("Producto no encontrado");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!itemDetail) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <section>
      <h1>{itemDetail.name}</h1>
      <div className="products-container">
        <ItemDetail item={itemDetail} />
      </div>
    </section>
  );
};
