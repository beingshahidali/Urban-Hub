import "./searchBar.scss";
import { useState } from "react";
function SearchBar() {
  const types = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const switchType = (type) => setQuery((prev) => ({ ...prev, type: type }));
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="loation" placeholder="City location"></input>
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          min={0}
          max={100000}
        ></input>
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          min={0}
          max={100000}
        ></input>
        <button>
          <img src="/search.png" alt="button image" />
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
