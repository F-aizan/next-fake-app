import Image from "next/image";

export default function Home() {
  const content = ["Posts", "Products", "Quotes", "Recipes"]

    return (
        <>
        <h1 className="font-bold text-xl text-center tracking-wider mt-10">Browse Content Here</h1>
        <div className="grid md:grid-cols-2 mt-10 lg:grid-cols-2 xl:grid-cols-2 p-4 sm:grid-cols-1 space-x-2 space-y-3">
            {content.map((value, index) => (
            <div className="aspect-auto bg-purple-300 p-8 hover:bg-blue-200 border align-center border-gray-100 rounded-3xl bg-white  dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none" key={index}>
              {/* <img className="" src={value.} alt={value.brand} /> */}
              {/* <a href="#" className="font-bold">{value.title}</a> */}
              {/* <p className="tracking-near text-sm">{value.description}</p> */}
              {/* <p className="font-semibold">Status: {value.availabilityStatus}</p> */}
              <p className="font-semibold">{value}</p>

          </div>
        ))}
        </div>
        </>
    )
}
