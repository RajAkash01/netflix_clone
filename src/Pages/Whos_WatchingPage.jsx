import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useNavigate, useNavigation } from 'react-router-dom';
import { Dispatch } from '../Redux/Store';
import { Imagesss } from '../Redux/ImageSlice';

function Whos_WatchingPage() {
  const navigate=useNavigate();
const HandleClick=({tt})=>{
  navigate('/Main',{replace:true});
  Dispatch(Imagesss(tt))
}
  return (
    <div className='bg-black text-white w-full h-screen flex justify-center items-center'>
      <div>
      <p className='text-6xl w-full flex justify-center mb-5'>Who's Watching?</p>
   

      <div className='grid mobile:grid-cols-2 laptop:grid-cols-5'>
        <Button variant='text' className='flex flex-col lowercase text-[#666666] text-3xl '
        onClick={()=>HandleClick({tt:"https://ia803404.us.archive.org/31/items/profiles_202104/chicken.png"})}>
          <img 
          className='rounded-md w-[160px]'
            src="https://ia803404.us.archive.org/31/items/profiles_202104/chicken.png" alt="netflix_logo" />
            <p style={{marginTop:5}}>Shane</p>
            </Button>
          <Button variant='text' className='flex flex-col lowercase text-[#666666] text-3xl '
          onClick={()=>HandleClick({tt:"https://ia803404.us.archive.org/31/items/profiles_202104/dog.png"})}>
          <img className='rounded-md w-[160px]'
           style={{width:'160px'}} src="https://ia803404.us.archive.org/31/items/profiles_202104/dog.png" alt="netflix_logo" />
           <p className='mt-[5px]'>Einstein</p>
          </Button>
         
          <Button variant='text' className='flex flex-col lowercase text-[#666666] text-3xl '
          onClick={()=>HandleClick({tt:"https://ia903404.us.archive.org/31/items/profiles_202104/hero.png"})}>
          <img className='rounded-md w-[160px]'
            src="https://ia903404.us.archive.org/31/items/profiles_202104/hero.png" alt="netflix_logo" />
            <p className='mt-[5px]'>Issac</p>
          </Button>
         
        <Button variant='text' className='flex flex-col lowercase text-[#666666] text-3xl '
        onClick={()=>HandleClick({tt:"https://ia803404.us.archive.org/31/items/profiles_202104/monster.png"})}>
          <img className='rounded-md w-[160px]' src="https://ia803404.us.archive.org/31/items/profiles_202104/monster.png" alt="netflix_logo" />
          <p className='mt-[5px]'>Akash</p>
        </Button>
        <Button variant='text' className='flex flex-col lowercase text-[#666666] text-3xl '>
          <ControlPointIcon  sx={{ fontSize: 120  }}/>
           <p className='mt-[43px]'>Add Profile</p>
        </Button>
        
      </div>

      
      <div className='w-full flex  justify-center  mt-4'>
          <Button variant='outlined'  className='text-[#666666] border-[#666666]  '>
               Manage Profiles
          </Button>
          </div>
      </div>
      </div>
  )
}

export default Whos_WatchingPage