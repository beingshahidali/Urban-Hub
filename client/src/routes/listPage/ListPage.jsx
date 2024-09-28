import "./listPage.scss";
import "../../components/filter/Filter";
import Filter from "../../components/filter/Filter";
import { listData } from "../../lib/dummyData";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";
function ListPage() {
  const data = listData;
  const posts = useLoaderData();
  // console.log(posts);
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {posts.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={listData} />
      </div>
    </div>
  );
}

export default ListPage;
