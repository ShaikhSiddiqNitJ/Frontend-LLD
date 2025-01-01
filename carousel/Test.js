import React, { useEffect, useState } from 'react'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
export const Test = () => {
  const [fetchimage,setFetchimage]=useState([])
  const [index,setindex]=useState(0)

  const fetcdetail=async ()=>
  {
   const data=await fetch('https://www.reddit.com/r/aww/top/.json?t=all')
   const res=await data.json();
   const response=res.data.children
   console.log("11",response)
   const imageslist = response
  .filter(item => item.data.url_overridden_by_dest.includes('.jpg')).map(item => item.data.url_overridden_by_dest);
  console.log("22",imageslist)
   setFetchimage(imageslist)
  }
  useEffect(()=>{
    fetcdetail()
  },[])

  const handleforwrdBack =(dir)=>{
    if(dir==='left')
    {
       if(index===fetchimage.length-1)
       {
          return;
       }
       else
       {
         setindex(index+1);
       }
    }
    if(dir==='right')
      {
        if(index===0)
       {
          return ;
       }
       else
       {
        setindex(index-1);

       }
      }

  }
  return (
    <>
    <h1> carousel testing </h1>
    <div style={{display:'flex',alignContent:'center',alignItems:'center'}}>
      <div style={{position:'absolute',left:'20px'}}>
      <button onClick={()=>{handleforwrdBack('right')}} disabled={index===0}     style={{
      cursor: index === 0 ? 'not-allowed' : 'pointer', 
      opacity: index === 0 ? 0.5 : 1 
    }}
>
    <IoIosArrowBack  style={{height:'80px',width:'80px'}}/>

      </button>


      
      </div>
       <img src={fetchimage[index]} alt='' style={{width:'100%',height:'100%'}}/>
      
    <div style={{position:'absolute',right:'10px'}}>
    <button onClick={()=>{handleforwrdBack('left')}}
      disabled={index===fetchimage.length-1}     style={{
        cursor: index === fetchimage.length-1 ? 'not-allowed' : 'pointer', 
        opacity: index === fetchimage.length-1 ? 0.5 : 1 }}
      >
      <IoIosArrowForward  style={{height:'80px',width:'80px'}}/>

      </button>
      </div>
    </div>
    </>
  )
}
