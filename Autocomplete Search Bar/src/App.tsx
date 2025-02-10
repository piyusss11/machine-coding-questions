import { useEffect, useState } from "react";
interface Recipe {
  id: number;
  name: string;
}
function App() {
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSiggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<Recipe[]>([]);
  const [cache,setCache] = useState<Record<string, Recipe[]>>({})
  const fetchData = async () => {
    if (input === "") {
      return;
    }
    if(cache[input]){
      // console.log("cache hit",cache[input]);
      setSuggestions(cache[input]);
      return
    }
    // console.log("api call",input);
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${input}`
    );
    const data = await response.json();
    setSuggestions(data?.recipes);
    setCache((prev)=>({...prev,[input]: data?.recipes}))
  };
  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);
  return (
    <>
      <h1 className="heading">Autocomplete Search Bar</h1>
      <div className="container">
        <input
          onChange={(e) => setInput(e.target.value)}
          onBlur={() => setShowSiggestions(false)}
          onFocus={() => setShowSiggestions(true)}
          className="input"
          type="text"
          name=""
          id=""
        />
        {showSuggestions && (
          <div className="suggestions-container">
            {suggestions.map((r: Recipe) => (
              <div className="suggestion" key={r?.id}>
                {r.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
