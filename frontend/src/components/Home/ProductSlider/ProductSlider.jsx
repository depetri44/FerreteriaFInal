
import React from "react";
import LazyLoadingImage from "../../LazyLoadingImage";
import * as Carousel from "../../Carousel"; 
import { Link } from 'react-router-dom';   
import { useSelector } from 'react-redux';
 
const ProductSlider = () => {
  

  const {  products } = useSelector((state) => state.products);

    return (

      
        <div id="products" className="flex flex-col gap-y-8 !relative">
     
          <div className="lg:mb-8 mb-6">
            <h2 className=" text-3xl md:text-4xl font-semibold">
              <span className="justify-center">Productos Destacados</span> 
            </h2>
          </div>
          <div>
            <Carousel.Component
              options={{
                type: "carousel", // carousel or slide
                perView: 4,
                gap: 30,
                breakpoints: {
                  576: {
                    perView: 1,
                  },
                  768: {
                    perView: 2,
                  },
                  820: {
                    perView: 2,
                  },
                  1024: {
                    perView: 4,
                  },
                },
              }}
            >
              {products.map((products) => ( 
                  <Carousel.Slide key={products.id}>  <div
                  className="relative flex flex-col bg-transparent"
                  data-nc-id="ProductCard"
                >
                  <Link
                    className="absolute inset-0"
                    to={`/product/${products.id
                      ?.toLowerCase()
                      .replace(/\s/g, "-")}/${products. id}`}
                  ></Link>
                  <div className="relative flex-shrink-0 bg-slate-50 rounded-3xl overflow-hidden z-1 group">
                    <Link
                      className="block"
                      to={`/product/${products.id
                        ?.toLowerCase()
                        .replace(/\s/g, "-")}/${products.id}`}
                    >
                      <div
                        className="nc-NcImage flex aspect-w-11 aspect-h-12 w-full h-0"
                        data-nc-id="NcImage"
                      >
                        <LazyLoadingImage
                          height={"161"}
                          width={"150"}
                          src={products.images[0].url}
                          alt={products.images.public_id}
                          className="max-w-full object-contains w-full h-full drop-shadow-xl"
                        />
                      </div>
                    </Link>
                     
                  </div>
                  <div className="space-y-4 px-2.5 pt-5 pb-2.5">
                    <div>
                      <h2
                        className="text-base font-semibold text-black line-clamp-1"
                        title={products.name}
                      >
                        <title>{products.name}</title>
                        {products.name}
                      </h2>
                      <p className="text-sm font-normal text-slate-500 mt-1 line-clamp-2">
                        {products.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="">
                        <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                          <span className="text-green-500 !leading-none">
                            $<strong>{products.price}</strong>
                          </span>
                        </div>
                      </div> 
                    </div>
                  </div>
                </div>
                  </Carousel.Slide>
                )
              )}
              <Carousel.Slide>
                <div className="relative rounded-2xl overflow-hidden h-[410px]">
                  <div className="h-[410px] bg-black/5"></div>
                  <div className="absolute inset-y-6 inset-x-10  flex flex-col items-center justify-center">
                    <Link
                      to="/products/all"
                      className="flex items-center justify-center relative"
                    >
                      <span className="text-xl font-semibold text-black">
                       Más Productos
                      </span>
                      <svg
                        className="absolute left-full w-5 h-5 ml-2 rotate-45 group-hover:scale-110 transition-transform text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.0701 9.57L12.0001 3.5L5.93005 9.57"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          stroke-miterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 20.4999V3.66992"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          stroke-miterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </Link>
                    <span className="text-sm mt-1 text-black">
                   Ver todo...
                    </span>
                  </div>
                </div>
              </Carousel.Slide>
              
            </Carousel.Component>
          </div>
        </div>
        
        
        
        /* 
        <section className="bg-white w-full shadow overflow-hidden">
     
            <div className="flex px-6 py-4 justify-between items-center">
                <div className="title flex flex-col gap-0.5">
                    <h1 className="text-xl font-medium">{title}</h1>
                    <p className="text-sm text-gray-400">{tagline}</p>
                </div>
                <Link to="/products" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg uppercase">view all</Link>
            </div>
            <hr />
            {loading ? null :
                <Slider {...settings} className="flex items-center justify-between p-1">
                    {products && getRandomProducts(products, 12).map((product) => (
                        <Product {...product} key={product._id} />
                    ))}
                </Slider>
            }

        </section> */
    );
};

export default ProductSlider;
