import { Link } from "react-router-dom";

const AppNavBar = () => {
  return (
    <div className='w-full bg-shamrock-400  py-2 shadow-sm'>
      <div className='container mx-auto px-4'>
        <div className='flex'>
          <Link to='/'>
            <h2 className='text-sunglow-50 text-lg uppercase text-white font-sans ml-4'>
              Chaeson Vintage - แจ้ซ้อนวินเทจ
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppNavBar;
