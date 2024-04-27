const HeaderLogo = ({ onClickHome }: { onClickHome: () => void }) => {
  return (
    <h1
      className="header__logo font-overpass600 self-center text-3xl md:text-3xl tracking-wider align-baseline"
      onClick={onClickHome}
    >
      {"{ J }"}
    </h1>
  );
};

export default HeaderLogo;
