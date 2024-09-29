import "./listPage.scss";
import "../../components/filter/Filter";
import Filter from "../../components/filter/Filter";
import { listData } from "../../lib/dummyData";
// import Map from "../../components/map/Map";

import { Await, useLoaderData } from "react-router-dom";
import { lazy, Suspense } from "react";
import Myloader from "../../components/svg/MyLoader";
// import Card from "../../components/card/Card";
const Map = lazy(() => import("../../components/map/Map"));
const Card = lazy(() => import("../../components/card/Card"));
function ListPage() {
  // const data = listData;
  const posts = useLoaderData();
  // console.log(posts);
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<Myloader />}>
            <Await
              resolve={posts.postResponse}
              errorElement={<p>Error loading package location!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((item) => (
                  <Card key={item.id} item={item} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <Suspense fallback={<Myloader />}>
          <Map items={listData} />
        </Suspense>
      </div>
    </div>
  );
}

export default ListPage;
