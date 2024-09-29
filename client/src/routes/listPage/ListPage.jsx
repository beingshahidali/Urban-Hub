import "./listPage.scss";
import "../../components/filter/Filter";
import Filter from "../../components/filter/Filter";
import { listData } from "../../lib/dummyData";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
function ListPage() {
  // const data = listData;
  const posts = useLoaderData();
  // console.log(posts);
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
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
        <Map items={listData} />
      </div>
    </div>
  );
}

export default ListPage;
