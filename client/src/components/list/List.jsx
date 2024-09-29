import MyLoader from "../svg/MyLoader";
import "./list.scss";
// import { listData } from "../../lib/dummyData";
import { lazy, Suspense } from "react";
const Card = lazy(() => import("../card/Card"));
function List({ posts }) {
  return (
    <div className="list">
      <Suspense fallback={<MyLoader />}>
        {posts?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Suspense>
    </div>
  );
}

export default List;
