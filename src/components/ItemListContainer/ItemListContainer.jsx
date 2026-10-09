import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los productos");
        }

        return response.json();
      })
      .then((data) => {
        if (category) {
          const filteredProducts = data.filter(
            (product) => product.category === category,
          );
          setProducts(filteredProducts);
        } else {
          setProducts(data);
        }
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (errors) {
    return <p>Error al cargar los productos: {errors}</p>;
  }

  return (
    <section>
      <h1>Mang-ax</h1>
      <ItemList products={products} />
    </section>
  );
};
