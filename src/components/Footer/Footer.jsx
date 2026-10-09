import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Mang-ax</p>

      <nav aria-label="Redes sociales">
        <ul className="nav-list">
          <li>WhatsApp</li>
          <li>Instagram</li>
        </ul>
      </nav>
    </footer>
  );
};
