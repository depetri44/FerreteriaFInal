 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; 

import { Link } from 'react-router-dom';
export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  )
}

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  )
}

const Banner = () => {
 


  return (
    <> <section
    className="relative bg-[url(https://www.wallpaperup.com/uploads/wallpapers/2018/01/31/1198704/2c3fb9204179968ebd1e96b1e5026336-1000.jpg)] bg-cover bg-center bg-no-repeat"
  >
    <div
      className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>
  
    <div
      className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
      
  
          <strong className="block font-extrabold text-rose-700">
          Ferreteria Pitty
          </strong>
        </h1>
  
        <p className="mt-4 text-center max-w-lg sm:text-xl/relaxed text-white">
        ¡AHORA TAMBIÉN ONLINE!
        </p>
  
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a
            href="#products"
            className="block w-full rounded bg-yellow-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-700 focus:outline-none focus:ring active:bg-black sm:w-auto"
          >
            Ver Productos
          </a>
  
          <Link to="/login" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:text-black focus:outline-none focus:ring active:text-yellow-500 sm:w-auto">
            
          
            Ingresar
            </Link>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};

export default Banner;
