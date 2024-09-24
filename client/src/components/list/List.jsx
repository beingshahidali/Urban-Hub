import "./list.scss";
import { listData } from "../../lib/dummyData";
import Card from "../card/Card";
function List() {
  return (
    <div className="list">
      {listData.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}

export default List;
