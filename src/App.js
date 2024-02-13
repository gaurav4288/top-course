import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import './App.css';
import {apiUrl,filterData} from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './Components/Spinner';

const App=()=> {

  const[courses,setcourses]=useState([]);
  const [loading,setloading]=useState(true);
  const[category,setcategory]=useState(filterData[0].title);

  async function fetchData(){
    setloading(true);
    try{
      let response=await fetch(apiUrl);
      let output=await response.json();

      setcourses(output.data);
    }
    catch(error){
      toast.error("Something Wrong")
    }
    setloading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])



  return (
    <div className='flex flex-col min-h-screen bg-bgDark2'>
      <div>
        <Navbar/>
      </div>
      <div className='bg-bgDark2'>
      <div>
        <Filter  filterData={filterData} setcategory={setcategory} category={category}/>
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
        {
          loading ? (<Spinner/>): (<Cards courses={courses} category={category}/>)
        }
      </div>
    </div>
      </div>
      
  );
};

export default App;
