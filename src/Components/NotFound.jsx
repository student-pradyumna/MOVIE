import notfound from '/404.gif'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black relative'>
      {/* Cross Icon */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 right-10 text-white text-3xl hover:text-[#6556CD]"
        aria-label="Close"
      >
        <i className="ri-close-fill "></i>
      </button>
      <img className='h-[50%] object-cover' src={notfound} alt="" />
    </div>
  )
}

export default NotFound