import ThemeIcon from "./ThemeIconSetter";
import { linksData } from "./navLinksData";

const Navigation = ({ onClickHome }: { onClickHome: () => void }) => {
  return (
    <nav className="hidden md:flex items-center justify-center gap-6">
      <ol className="hidden md:flex flex-col md:flex-row gap-6 font-overpass tracking-wider align-baseline text-md">
        <button
          onClick={() => onClickHome()}
          className="hidden md:block test header__link"
        >
          Home
        </button>
        {linksData.map((link) => (
          <li key={link.id} className="header__link">
            <a
              target={link.href.includes("#") ? "_self" : "_blank"}
              href={`/${link.href}`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ol>
      <div className="hidden md:block">
        <ThemeIcon />
      </div>
    </nav>
  );
};

export default Navigation;
