
import { useState } from "react";
import Card from "../Component/Card";
import useProduct from "../hooks/useProduct";
import '../index.css'
import { useSelector } from "react-redux";

export default function Products(props) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

 const {products} = useProduct('limit=30&skip=0')
const [searchterm, setSearchTerm] = useState("")


const searchProduct = ()=>{
 const result = products?.filter((item)=>{
    return item.title.toLowerCase().includes(searchterm);
  })
  console.log('result',result); 
  return result || []; 
}

const searchResult = searchProduct()

return (
  <>
  

<div className={`flex flex-wrap  bg-center transition-colors duration-300 ${darkMode ? "bg-slate-900" : "" }`}>


<input type="search" name="price" id="price"

className="border my-5 w-full bdr py-4 pl-4 pr-12 text-base h-14 block"
onChange={(event)=>{
  // console.log(event.target.value)
  setSearchTerm(event.target.value)
  
}}
placeholder="Search Your Product"

/>
{products === null ? "Loding....." : null}
  <div className="flex flex-wrap  gap-[22px] bg-center">
    {searchResult?.map((item)=>(
      <Card key={item.id}
      id={item.id}
      Name={item.title} 
      image={item.thumbnail} 
      className1="hidden" 
      discountPercentage={item.discountPercentage}
    
price={item.price} 
 rating={item.rating}
 />
))}


</div>
</div>
    

      </>
      
    )
}
