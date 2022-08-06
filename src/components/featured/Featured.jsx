import "./featured.css";
import { FeaturedData } from "./FeaturedData";

const Featured = () => {
  return (
    <div className="featured">
      {FeaturedData.map((featured, index) => {
        return (
          <div className="featuredItem" key={index}>
            <img
              src={featured.image}
              alt={featured.propertyName}
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>{featured.propertyName}</h1>
              <p>{featured.numberOfProperties} properties</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Featured;
