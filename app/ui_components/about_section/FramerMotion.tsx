const FramerMotion = () => {
  return (
    <div className="hover:cursor-default flex gap-4 justify-end items-end p-2 icon bg-[#cdcdcd] dark:bg-black hover:bg-blue text-black/80 hover:text-white dark:text-white/90 dark:hover:bg-blue">
      <svg
        xmlns="http:www.w3.org/2000/svg"
        viewBox="0 0 14 21"
        role="presentation"
        width={28}
        height={28}
      >
        <path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z" fill="currentColor"></path>
      </svg>
      <p className="font-overpass600 text-center">Framer Motion</p>
    </div>
  );
};

export default FramerMotion