import axios from 'axios';
import { useEffect, useState } from 'react'

export default function useProduct(query) {
    // const  api_Product = `https://dummyjson.com/products?${query}`


    const  api_Product = `http://localhost:3000/product`
const [products, setProducts] = useState(null)

const getProductData = async ()=>{
const response = await axios(api_Product)
const data = await response.json()
setProducts(response?.data?.products)

};
console.log(products);
useEffect(()=>{
getProductData();
},[])
  return (
    {
      products
    }
  )
}
