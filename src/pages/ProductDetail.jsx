import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/layout/Layout";
import { useCart } from "../contexts/Cart";
import Loading from "./Loading";

const ProductDetail = () => {
    const params = useParams();
    const[product, setProduct] = useState({});
    const [isFullDescription, setIsFullDescription] = useState(false);
    const [cart, setCart] = useCart();
    const [cartOrder, setCartOrder] = useState([]);
    const [count, setCount] = useState(4);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const interval = setInterval(() => {
            setCount((prev) => prev - 1);
            console.log(img);
          }, 1000);
          count === 0 && setIsLoading(false);

    return clearInterval(interval);
    },
     []);
  return (
    <div></div>
  )
}

export default ProductDetail