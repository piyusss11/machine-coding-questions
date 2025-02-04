import { useEffect, useState } from "react";
interface Product {
  id: number;
  title: string;
  thumbnail: string;
}
function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  
  const TOTALPRODUCTS = products.length;
  const PAGE_SIZE = 10;
  const TOTAL_PAGES = Math.ceil(TOTALPRODUCTS / PAGE_SIZE);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=0");
    const data = await response.json();
    setProducts(data.products);
    setCurrentProducts(data.products.slice(0, PAGE_SIZE));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center text-3xl">Pagination Using React</h1>
        <div className="text-center text-2xl flex gap-2">
          <div className="flex mx-auto my-4 justify-center items-center">
            {[...Array(TOTAL_PAGES).keys()].map((page) => (
              <span
                onClick={() => {
                  setCurrentProducts(
                    products.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
                  );
                  setCurrentPage(page + 1);
                }}
                key={page}
                className={`cursor-pointer border-1 p-2 mx-1 text-center ${page+1 === currentPage ? "bg-blue-500 text-white" : ""}`}
              >
                
                {page + 1}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {currentProducts.map((product) => (
            <div
              className="border-1 w-60 h-60 flex-col flex justify-center items-center p-4"
              key={product.id}
            >
              <img className="w-50 h-50" src={product.thumbnail}></img>
              <p className="text-center">{product.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
