import "./listPage.scss";
import "../../components/filter/Filter";
import Filter from "../../components/filter/Filter";
import { listData } from "../../lib/dummyData";
import Card from "../../components/card/Card";
function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">Map</div>
    </div>
  );
}

export default ListPage;
