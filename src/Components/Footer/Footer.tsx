const Footer = () => {
  const date = new Date();
  return (
    <div style={{ textAlign: "center", padding: 32, fontSize: 18 }}>
      {date.getFullYear()}
      <a
        style={{ marginLeft: 10 }}
        href="https://github.com/JohnKucharsky/gymtssass">
        Github
      </a>
    </div>
  );
};

export default Footer;
