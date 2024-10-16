import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from '../components/layout/Layout'
import Carousel from '../components/Carousel'
const Home = () => {
  return (
   <Layout title="Top Shelf - line of curated skincare essentials">
     <Carousel/>
    </Layout>
  )
}

export default Home