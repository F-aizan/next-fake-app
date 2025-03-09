'use client'
import { useEffect, useState } from "react";

interface Product {
    albumId: number,
    title: string;
    id: number;
    url: string,
    brand: string,
    thumbnail: string,
    description: string,
    availabilityStatus: string,
    price: number
  }
  
  interface productType {
    products: Product[];
  }
  
  let Products = () => {
      const [products, setProducts] = useState([])
      const [loading, setLoading] = useState(false)

      useEffect(() => {
        const fetchProducts = async() => {
            setLoading(true)
      
          const response = await fetch('https://dummyjson.com/products')
      
          if (response.ok) {
            const data = await response.json()
            let reducedproducts = data.products.slice(1, 32)
            console.log(reducedproducts)
            setProducts(reducedproducts)
            setLoading(false)
          }
        }
        fetchProducts()
    }, [])

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 p-4 sm:grid-cols-1 space-x-2 space-y-3">
        {products.map((product:any, index) => (
          <div className="aspect-auto p-8 hover:bg-blue-200 border align-center border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none" key={index}>
              <img className="" src={product.thumbnail} alt={product.brand} />
              <a href="#" className="font-bold">{product.title}</a>
              <p className="tracking-near text-sm">{product.description}</p>
              <p className="font-semibold">Status: {product.availabilityStatus}</p>
              <p className="font-semibold">Price: {product.price}</p>

          </div>
        ))}
      </div>
    );
  }
  
  export default Products;
  