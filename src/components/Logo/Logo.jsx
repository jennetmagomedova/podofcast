import "./Logo.scss";

const Logo = () => {
  return (
    <a href="/" className="logo" title="Home" aria-label="Home">
      <img
        src="/logo.svg"
        alt=""
        className="logo__image"
        width={74}
        height={74}
      />
    </a>
  );
};

export default Logo;
