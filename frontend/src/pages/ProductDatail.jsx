import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars';
import useSWR from 'swr'
import Button from '../Component/Button';
import { AiOutlineHeart } from "react-icons/ai";
import Card from '../Component/Card'
import DeliveryIcon from '../assets/images/icon-delivery.png'
import IconReturn from '../assets/images/Icon-return.png'
import useProduct from "../hooks/useProduct";
export default function ProductDatail() {
  const {products} = useProduct("limit=30&skip=100")
  const params = useParams()
  const { data, error, isLoading } = useSWR(`https://dummyjson.com/products/${params.id}`, axios)

   
    
    const product = data?.data;
const [selectImg , setSeleImg] = useState(null)
const [quantity , setQuantity] = useState(0)


useEffect(()=>{
  setQuantity(product?.minimumOrderQuantity)
},[data])

if(isLoading) return "Lodling..."
if(error) return <div className='h-screen w-full bg-center'>{JSON.stringify( error?.response.data?.message)}</div>
  return (
   <main className='margin flex flex-col gap-7'>

<nav className='text-[14px] flex  gap-5'> 
  <span className=' opacity-50'>Account</span>
 /
 <span className=' opacity-50'>Gaming</span>
/
<span>Havic HV G-92 Gamepad</span>
</nav>

<div className="product flex min-h-[600px] w-full flex-col md:flex-row">

<div className="images md:w-[55%] flex justify-center items-center gap-4">
 {product?.images?.length > 1 ? <div className='w-[150px] h-full  flex flex-col gap-10 '>
    {product?.images.map((images,i)=>(
      <img src={images} key={i} alt="" className='bg-[#F5F5F5]' onMouseOver={()=>setSeleImg(images)
      }/>
    ))}
  </div>:null}
  <div className='bg-[#F5F5F5] h-full bg-center'>
    <img className='w-[500px]' src={selectImg || product?.images[0]} alt="" />
  </div>
</div>



<div className="productData md:w-[45%] gap-6 flex flex-col">
  <div className='border-b-[3px] mx-10 flex gap-3 flex-col '>
<h1 className='font-semibold text-2xl tracking-wider'>{product?.title}</h1>
<div className='flex items-center gap-3'>
<ReactStars
  count={5}
  // onChange={ratingChanged}
  size={24}
  edit={false}
  color2={'#FFAD33'} />

<span className=' opacity-50'>({product?.rating})</span>
<span className=' opacity-50 '>|</span>
<span className='text-[#00FF66]  opacity-60'>In Stock {product?.stock}</span>
</div>
<h1 className='font-normal text-2xl'>${Math.round(product?.price * quantity)}</h1>
<p className='w-[373px] text-sm mb-6'>{product?.description}</p>
</div>
<div className="mx-10 flex flex-col gap-5">
  <h4 className='text-xl'>Colours :</h4>
  <div className='flex gap-5 items-center'>
    <span className='text-xl'>Size :</span>
    <div className='border-[3px] h-8 w-8 text-center border-opacity-50 rounded'>XS</div>
    <div className='border-[3px] h-8 w-8 text-center border-opacity-50 rounded'>S</div>
    <div className='border-[3px] h-8 w-8 text-center border-opacity-50 rounded bg-primary text-white'>M</div>
    <div className='border-[3px] h-8 w-8 text-center border-opacity-50 rounded'>L</div>
    <div className='border-[3px] h-full w-8 text-center border-opacity-50 rounded'>X</div>
  </div>
</div>

<div className='mx-10 flex gap-5'>
<div className='rounded border-2 h-10 w-36 flex justify-between'>
 
 <button 
  onClick={()=> {
  if (quantity < 2) return
    setQuantity(quantity -1)}
  } 
  className=' border-r-[2px]  w-10 text-2xl bg-center'>-</button>


  <span className='  w-20 text-2xl bg-center'>{quantity}</span>
  <button onClick={()=> setQuantity(quantity +1)} className=' border-l-[2px] w-10 h-full text-2xl bg-center bg-primary text-white'>+</button>
</div>

<Button text="Buy Now"  className="h-10 rounded w-44 text-sm  bg-center"/>
<div className='rounded border-2 h-10 w-10 bg-center text-2xl'>
<AiOutlineHeart/>
</div>
</div>

<div className='border-[2px] rounded min-h-48 relative mx-10 flex-col gap-4 flex justify-center items-center '>

  <div className='flex gap-4 min-h-12 w-[332px]  '>
  <img src={DeliveryIcon} className='h-10 w-10'  alt="" />
<div className='text-[12px]  flex flex-col gap-2'>
<h3 className='font-medium '>Free Delivery</h3>
<p className='underline'>Enter your postal code for Delivery Availability</p>
</div>
  </div>

<div className='w-full border-[1px]'></div>

  <div className='flex gap-4 min-h-12  w-[332px]'>
  <img src={IconReturn} className='h-10 w-10'  alt="" />
<div className='text-[12px]  flex flex-col gap-2'>
<h3 className='font-medium'>Free Delivery</h3>
<p>Free 30 Days Delivery Returns. Details</p>

</div>

  </div>
</div>


</div>

  </div>
<div className="flex gap-7 mt-10 ">
    {products?.slice(0,4).map((item)=>(

      <Card
     id={item.id}
     key={item.id}
      Name={item.title} 
      image={item.thumbnail} 
      className1="hidden" 
      discountPercentage={item.discountPercentage}
      price={item.price} 
      rating={item.rating}
      
      />
    ))}
    </div>


   </main>
  )
}
