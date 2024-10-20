import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartProvider, useCart } from "../contexts/Cart";
import FilterCategory from "./users/FilterCategory";
import UserProductCard from "./users/UserProductCard";
import Loading from "./Loading";
import Layout from '../components/layout/Layout'
import Carousel from '../components/Carousel'

const Home = () => {

  let allChecked;
  const [products, setProducts] = useState([{}]);
  const [categories, setCategories] = useState([{}]);
  const [checked, setChecked] = useState([]); //for category checkbox
  const [maxValue, setMaxValue] = useState(40000); //for range filter
  const [searchField, setSearchField] = useState("");
  const [cart, setCart] = useCart();
  const [cartOrder, setCartOrder] = useState([]); //for cart , kept to compare
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(()=>{
    const cartProduct = cart?.map((product)=>product._id);
    setCartOrder(cartProduct); 
  },[cart.length]);  // whenever the cart changes, just copy the changes in cartOrder

  useEffect(()=>{
    getAllCategories();
    getAllProducts();
  },[]); //renders all products and categories first when home.jsx is rendered

  //getting all products 
  const getAllProducts= async()=>{
    try{
      const {data}= await axios.get(   
           `${import.meta.env.VITE_BACKEND_API}/api/v1/product/products`)
           if(data?.success)
           {
            setIsLoading(false);
            setProducts(()=>{
              return [...data.products];
            });
           }
         }
    catch(error)
    {
      console.error(error);
    }
  }

  //fetching all categories from db
  const getAllCategories = async()=>{
    try{
      const {data}= await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v1/category/categories`);

      if(data?.success)
      {
        setIsLoading(false);
        setCategories(()=>[...data.allCategory])
      }
      else {
      }

    }
    catch(error)
    {
      console.error(error);
    }
  }

  //handle filter Category
  const handleFilterCategory = async(isChecked, _id)=>{
    try{
        allChecked =[...checked];
        if(isChecked)
        {
          allChecked.push(id)
        }
        else{
          allChecked =allChecked.filter(
            (categorySelected)=>categorySelected != id
          );
        }
        setChecked(allChecked);

    }
    catch(error)
    {
      console.error(error);
    }
  }

  //searching functionality
  const searchFilteredProduct = products.filter((product)=>{
    return product?.name
    ?.LowerCase().
    includes(searchField.toLocaleLowerCase());
  })

  return (
   <Layout title="Top Shelf:Skincare essentials, Just for You">
     <Carousel/>

            {/* Section section  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full rounded-md shadow-md px-2 sm:px-4 place-items-center justify-start items-start py-6 bg-slate-100">
        {/*/ Desktop filter  */}
        <div className="hidden w-full md:block md:w-1/2 lg:w-full flex-grow rounded-sm overflow-hidden md:pt-2 col-start-1 ">
          <div className="flex flex-col space-y-8 items-start lg:pl-12 pt-6">
            <div>
              <h1 className="text-md font-zilla font-semibold">
                {" "}
                Filter by Category
              </h1>
              <div className="w-full flex-col space-y-3 mt-6">
                {categories.map((category, index) => (
                  <FilterCategory
                    key={index}
                    {...category}
                    handleFilterCategory={handleFilterCategory}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <h1 className="text-md font-zilla font-semibold">
                {" "}
                Filter by Price
              </h1>
              <div className="flex justify-between font-zilla font-semibold">
                <p className="">₹ 0</p>-<p className="">₹ {maxValue}</p>
              </div>
              <div className="w-full">
                <input
                  type="range"
                  className="accent-brand w-full cursor-pointer"
                  min="0"
                  max="40000"
                  step="10000"
                  onChange={(event) => {
                    const value = event.target.value;
                    setMaxValue(Number(value));
                  }}
                  value={maxValue}
                />
              </div>

              <button
                className="text-sm bg-brand text-mid font-zilla font-semibold px-4 py-2 rounded-md shadow-md hover:scale-95 transition-all duration-300"
                onClick={() => window.location.reload()}
              >
                {" "}
                Clear Filters
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col max-w-[1000px] sm:col-start-1 sm:col-span-2 md:col-start-2 md:row-start-1 md:col-span-3 lg:col-start-2 lg:row-start-1 lg:col-span-4 rounded-sm  overflow-clip pt-6 md:pt-2 transition-all duration-200">
          <div className="flex items-center justify-between px-2 sm:px-6 md:px-4 py-4">
            <h1 className="pl-6 text:md md:text-2xl font-zilla font-semibold mb-0">
              {" "}
              All Products
            </h1>
            <div className="w-40 md:w-52">
              <input
                type="text"
                className="h-8 px-6 md:px-4 py-2 w-full font-zilla text-md text-gray-400 rounded-sm shadow-md"
                placeholder="Search for skincare "
                value={searchField}
                onChange={(event) => {
                  const value = event.target.value;
                  setSearchField(value);
                }}
              />
            </div>
          </div>

          {/* Mobile Filter  */}
          <div className=" w-full md:hidden md:w-1/2 lg:w-full flex-grow rounded-sm overflow-hidden md:pt-2 col-start-1 transition-all duration-100">
            <div className="flex flex-col space-y-8 items-start lg:pl-12 pt-6">
              <div className="w-full flex bg-slate-200 p-4">
                <h1 className="text-xs font-zilla font-semibold">
                  {" "}
                  Filter by Category:
                </h1>
                <div className="w-full flex flex-wrap gap-3">
                  {categories.map((category, index) => (
                    <FilterCategory
                      key={index}
                      {...category}
                      handleFilterCategory={handleFilterCategory}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="grid px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-200 overflow-x-hidden overflow-y-scroll mt-10 md:mt-0"
              id="scroll"
            >
              {isLoading ? (
                <Loading />
              ) : maxValue >= 2000 ? (
                searchFilteredProduct
                  ?.filter((product) => {
                    return checked?.length > 0
                      ? checked?.includes(product.category?._id)
                      : product;
                  })
                  .filter((product) => {
                    return product?.price < maxValue;
                  })
                  .map((product, index) => (
                    <UserProductCard
                      key={index}
                      product={product}
                      cart={cart}
                      setCart={setCart}
                      cartOrder={cartOrder}
                    />
                  ))
              ) : (
                <h1 className="text-sm md:text-lg font-josefin py-6 w-full col-start-1 col-span-3">
                  No product to display.. Sorry!🥲 The filter you selected has
                  no product.
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Home