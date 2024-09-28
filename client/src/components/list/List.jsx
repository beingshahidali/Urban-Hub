import "./list.scss";
import { listData } from "../../lib/dummyData";
import { lazy, Suspense } from "react";
const Card = lazy(() => import("../card/Card"));
function List() {
  return (
    <div className="list">
      <Suspense fallback={<p>Loading Cards...</p>}>
        {listData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Suspense>
    </div>
  );
}

export default List;
