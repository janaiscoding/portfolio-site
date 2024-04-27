import { linksData } from "../navLinksData";

const NavigationSm = ({ onClickHome }: { onClickHome: () => void }) => {
  return (
    <ol className="md:hidden absolute top-[3.4rem] right-0 bg-white dark:bg-darkBg dark:text-white flex flex-col w-full">
      <button
        onClick={() => onClickHome()}
        className=" p-6 text-right text-lg uppercase font-medium border-b border-blue/10 dark:border-white/10"
      >
        Home
      </button>
      {linksData.map((link) => (
        <li
          key={link.id}
          className=" p-6 text-right text-lg uppercase font-medium border-b border-blue/10 dark:border-white/10"
        >
          <a href={`/${link.href}`}>{link.title}</a>
        </li>
      ))}
    </ol>
  );
};

export default NavigationSm;
