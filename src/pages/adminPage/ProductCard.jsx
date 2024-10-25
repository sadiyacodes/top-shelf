import axios from "axios";
import React, {useState, useEffect} from "react";
import {Link} from  "react-router-dom";


const ProductCard = ({
    name, 
    price,
    quantity,
    description,
    _id,
    slug,
    handleDelete,
}) =>{

    const [img, setImg]= useState('');

    const getImage = async () =>{
        const config = { responseType : 'blob'}; // to specify to axios that response will contain binary data as images or files

        const { data} = await axios.get( `${import.meta.env.VITE_BACKEND_API}/api/v1/product/product-image/${_id}`,
            config);
            setImg(data);
    }
    useEffect(() => {
        getImage();
      }, []);

      return(
        <div  className="flex w-full flex-col space-y-4 px-4 py-4 rounded-md shadow-md bg-slate-100 font-ebgm">
            <div className=" flex space-x-4 w-full">
                <div className="w-24 h-24 overflow-hidden">
                    <img
                     src={`${
                        import.meta.env.VITE_BACKEND_API
                        }/api/v1/product/product-image/${_id}`}
                    alt={name}
                    className="w-full "
                    />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-center w-full pl-8 pr-2">
                 <div className="text-sm md:text-lg font-semibold h-16">{name}</div>
                 <p className="text-xs md:text-md ">
                    {description?.substring(0, 100)} ...
                    </p>
                 <div className="flex justify-between items-center w-full">
                        <span className="text-xs md:text-sm">Price :₹{price}</span>
                    <span className="text-xs md:text-sm">Quantity :{quantity}</span>
                  </div>    
                </div>
        </div>
        <div className="flex justify-between px-4 w-full">
            <Link
          className="text-xs md:text-md px-2 md:px-5 py-2 md:py-3 bg-teal-300 rounded-md text-gray-700 font-semibold font-ebgm hover:scale-105 transition-all duration-150"
          to={`/dashboard/admin/product/${slug}`}>
             Edit
          </Link>
          <button
          className="text-xs md:text-md px-2 md:px-5 py-2 md:py-3 bg-red-300 rounded-md text-gray-700 font-semibold font-josefin hover:scale-105 transition-all duration-150"
          onClick={() => {
            handleDelete(_id);
          }}
        >
          Delete
        </button>
      </div>
        </div>
      )
}
export default ProductCard;