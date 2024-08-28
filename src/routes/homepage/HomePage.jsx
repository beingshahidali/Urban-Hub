import "./homepage.scss";
import SearchBar from "../../components/searchBar/SearchBar";
function HomePage() {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p className="">
            Personalizing your messages makes it clear to the recipient that the
            message applies to them. Using the recipient’s name, location, or
            previously-specified areas of interests lets them know that this
            message is for them. This way, recipients don’t fall into a habit of
            ignoring your messages after reading too many that didn’t affect
            them.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Proprty Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" />
      </div>
    </div>
  );
}
export default HomePage;
