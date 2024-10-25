import React , { useEffect, useState }  from 'react'
import AdminMenu from './AdminMenu'
import Layout from '../../components/layout/Layout'
import { Select } from 'antd'
import axios from axios
import { toast } from 'react-toastify'

const {Option}= Select;

const CreateProduct = () => {
    const [categories, setCategories] = useState([{}]);
    const[category, setCategory]= useState('');
    const[name, setName]=useState('');
    const[description, setDescription]= useState('');
    const [price, setPrice]=useState('');
    const[quantity, setQuantity]=useState('');
    const [image, setImage]=useState('');

    useEffect(()=>{
       getAllCategories();
      },[]);

      //getting all categories
      const getAllCategories = async()=>{
        try{
            console.log(`${import.meta.env.VITE_BACKEND_API}`);
            const { data }=await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v1/category/categories`);

            if(data?.success)
            {
                setCategories(()=>[...data?.allCategory]);
            }
        }
        catch(error)
        {
            console.error(error);            
        }
      }

      const clearState = () =>{
        setName('');
        setDescription('');
        setCategory('');
        setImage('');
        setQuantity('');
      }

      //handling create product
      const handleCreateProduct = async (event) =>{
        event.preventDefault();
        try{
            // creating a form data to get the images
            const productDetail = new FormData();

            productDetail.append('name', name);
            productDetail.append('quantity', quantity);
            productDetail.append('price', price);
            productDetail.append('description', description);
            productDetail.append('image', image);
            productDetail.append('category', category);

            console.log(productDetail);
            const { data }=await axios.post(`${import.meta.env.VITE_BACKEND_API}/api/v1/product/create-product`,
        productDetail);
                 if (data?.success) {
                  toast.success(`${data?.product?.name} addded successfully`);
                     clearState();
                     } 
                     else {
                 toast.error(`${data?.product?.name} can't be added `);
                }
        }
        catch (error) {
            console.error(error);
            toast.error(`Something went wrong when creating product`);
          }
      }
  return (
    <Layout title="Admin Create Product- Top Shelf">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-4 px-10 md:px-36 py-10 ">
           <AdminMenu width="full" />
           <div>
             <h1 className='text-md py-3 md:text-xl font-medium font-ebgm md:pl-6 md:py-2'>
                Create Product
             </h1>
             <form className="bg-mid p-6 rounded-md shadow-lg">
             <div className="flex flex-col space-y-6">
             <Select
                variant={'outlined'}
                placeholder="Select a Category"
                style={{ width: '100%' }}
                showSearch
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                </div>
                </form>
           </div>
         </div>

    </Layout>
  )
}

export default CreateProduct