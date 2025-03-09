'use client'
import { useEffect, useState } from "react";

interface Quote {
    albumId: number,
    title: string;
    id: number;
    url: string,
    brand: string,
    thumbnail: string,
    description: string,
    availabilityStatus: string,
    body: string,
    price: number,
    quote: string,
    author: string
  }
  
  interface QuoteType {
    quotes: Quote[];
  }
  
  let QuoteCard = () => {
      const [quotes, setQuotes] = useState([])

    useEffect(() => {
        const fetchQuotes = async() => {
  
            const response = await fetch('https://dummyjson.com/quotes')
        
            if (response.ok) {
              const data = await response.json()
              let reducedquotes = data.quotes.slice(1, 32)
              setQuotes(reducedquotes)
            }
          }
        fetchQuotes()
    }, [])
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 p-4 sm:grid-cols-1 space-x-2 space-y-3">
        {quotes.map((quote:any, index) => (
          <div className="aspect-auto hover:bg-blue-200 p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none" key={index}>
              {/* <img src={post.thumbnail} alt={post.brand} /> */}
              <a href="#" className="text-lg font-medium text-gray-700 dark:text-white">{quote.author}</a>
              <p className="tracking-near text-sm">{quote.quote}</p>
              {/* <p className="font-semibold">Status: {post.availabilityStatus}</p> */}
              {/* <p className="font-semibold">Price: {post.price}</p> */}

          </div>
        ))}
      </div>
    );
  }
  
  export default QuoteCard;
  