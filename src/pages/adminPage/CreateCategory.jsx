import React, {useState , useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import AdminMenu from './AdminMenu'
import Layout from '../../components/layout/Layout'
import AllCategoryContainer from './AllCategoryContainer';
import NewCategoryForm from './NewCategoryForm';
import { Modal } from 'antd';
import Loading from '../Loading';

const CreateCategory = () => {
    const [categories , setCategories] =useState([{}]);
    
    const [categorySelected, setCategorySelected]= useState(null);
    const[name, setName] = useState('');
    const[updatedName, setUpdatedName]= useState('');
    
    const[isLoading, setIsLoading] = useState(true);
    const[isModalVisible, setIsModalVisible]= useState(false);
     
     
    useEffect(()=>{
        getAllCategories();
    },[]);

    //fecthing all categories from db
    const getAllCategories = async () => {
        try{
            console.log(`${import.meta.env.VITE_BACKEND_API}`);
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/category/categories`
      );
      if(data?.success){
        setCategories(()=>[...data.allCategory]);
        setIsLoading(false);
      }
        }
        catch (error) {
            console.error(error);
          }
    };

    //handling edit functionality - opens modal for further admin interactn
    const editCategory = (flag) =>{
        setIsModalVisible(flag);
    }

    //handling category creation
    const handleSubmit = async(event)=>{
        try{
            event.preventDefault();
            const {data} = await axios.post( `${import.meta.env.VITE_BACKEND_API}/api/v1/category/create-category`,
                { name });

                if(data?.success)
                {
                    toast.success(`Category '${data?.category?.name}' created successfully`);
                    getAllCategories();
                    setName('');
                }
                else{
                    toast.error(`Somethin went wrong, Please try again later`);
                }
        }
        catch (error) {
            console.error(error);
            toast.error(`Somethin went wrong`);
          }
    } 

    //handling delete functionality
    const handleDelete = async(id)=>{
        try{
            const { data } =await axios.delete(`${
          import.meta.env.VITE_BACKEND_API
        }/api/v1/category/delete-category/${id}`)

        if(data.success)
        {
            toast.success('Category Deleted Successfully');
            setCategorySelected(null);
            getAllCategories();
        }
        else {
            toast.error('Something went wrong, please try again later');
          }
        }
        catch (error) {
            console.error(error);
            toast.error(`Something went wrong`);
          }
    }

    //updating
    const handleUpdated = async(event)=>{
        event.preventDefault();
        try{
            const {data} = await axios.put(
                `${import.meta.env.VITE_BACKEND_API}/api/v1/category/update-category/${
                  categorySelected._id
                }`,
                { name: updatedName }
              );

              setUpdatedName('');
              setIsModalVisible(false);
              setCategorySelected(null);
              getAllCategories();
        }
        catch (error) {
            console.error(error);
            toast.error(`Something went wrong`);
          }

    }
  return (
    <Layout title="Create Category | Top Shelf">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-4 py-8 px-4 md:px-12 lg:px-36 p-10 transition-all duration-150">
         <AdminMenu width="full" />
         <div className='w-full flex flex-col'>
            <h2 className='text-md py-3 md:text-xl font-medium font-ebgm md:pl-6 md:py-2 '>
            {' '}
            Manage Category
            </h2>
            <div className='w-full flex flex-col space-y-4 px-4 py-8 md:p-8 bg-mid rounded-md shadow-lg'>
               
                <NewCategoryForm
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
                isCreate={isModalVisible}>
                </NewCategoryForm>
              
               <div className='flex space-x-4 w-full items-center justify-between px-10 pt-6'>
                  <p className='text-sm md:text-md font-ebgm font-semibold'>
                  {' '}
                  Name
                  </p>
                  <p className="text-sm md:text-md font-ebgm font-semibold">
                  {' '}
                  Actions
                  </p>
                </div>
               
               <div
               className='flex flex-col space-y-4 h-64 overflow-y-scroll'
               id="scroll">
                {isLoading ?( <Loading/>) :(
                  categories.map((category, index)=>{
                    return(
                      <AllCategoryContainer
                      key={index}
                      category={category}
                       editCategory={editCategory}
                       setUpdatedName={setUpdatedName}
                       setCategorySelected={setCategorySelected}
                       handleDelete={handleDelete}/>
                    );
                  })
                )}
               </div>
            </div>
           <Modal onCancel={()=>setIsModalVisible(false)}
            footer={null}
            open={isModalVisible}
            style={{paddingTop : '15px'}}>
             <NewCategoryForm
             name={updatedName}
             setUpdatedName={updatedName}
             handleSubmit={handleUpdated}
             isCreate={isModalVisible}/>
           </Modal>
         </div>
         </div>
        </Layout>
  )
}

export default CreateCategory
