import { useEffect } from 'react'; 
 import Banner from './Banner/Banner'; 
import Categories from '../Layouts/Categories';
import ProductSlider from './ProductSlider/ProductSlider';
import CardCategory from './CardCategory';
import Home3 from './Home3';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSliderProducts } from '../../actions/productAction';
import { useSnackbar } from 'notistack';
import MetaData from '../Layouts/MetaData'; 
const Home = () => {

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    dispatch(getSliderProducts());
  }, [dispatch, error, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Ferreteria Pitty | Venta Online" />
      <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
        <Banner />
        <Categories/>  
        
        <ProductSlider  />      

        <Home3/>   
        <CardCategory/>   
        
      </main>
    </>
  );
};

export default Home;
