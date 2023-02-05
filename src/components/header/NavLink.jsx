export default ({ text, href }) => {
  return (
    <a href={href} className="group hover:text-orange-200">
      <span>{text}</span>
      <span className=" block h-[2px] w-full scale-x-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-orange-300"></span>
    </a>
  );
};
