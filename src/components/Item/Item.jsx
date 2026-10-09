import "./Item.css";

export const Item = ({
  name,
  price,
  description,
  image,
  children,
  variant = "default",
}) => {
  return (
    <article className={`card ${variant === "detail" ? "card--detail" : ""}`}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>

      {}
      {children}
    </article>
  );
};
