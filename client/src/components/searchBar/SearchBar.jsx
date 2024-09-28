import { Link } from "react-router-dom";
import "./searchBar.scss";
import { useState } from "react";
function SearchBar() {
  const types = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "rent",
    location: "",
    city: "",
    minPrice: 0,
    maxPrice: 10000,
  });
  const switchType = (type) => setQuery((prev) => ({ ...prev, type: type }));

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
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
        <input
          type="text"
          name="city"
          placeholder="City "
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          min={0}
          max={100000}
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          min={0}
          max={100000}
          onChange={handleChange}
        ></input>
        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <button>
            <img src="/search.png" alt="button image" />
            Search
          </button>
        </Link>
      </form>
    </div>
  );
}
export default SearchBar;
