import { useNavigate } from "react-router-dom";

const Headers: React.FC = () => {

  const go = useNavigate()

  return (
    <header className="sticky top-0 bg-gray-400 text-white">
      <div className="flex justify-between items-center h-[60px] px-2 box-border lg:max-w-[1024px] lg:mx-auto lg:px-0">
        <div className="font-bold text-2xl cursor-pointer" onClick={ () => go('/')}>XXXXXX 論壇</div>
      </div>
    </header>
  );
};

export default Headers;
