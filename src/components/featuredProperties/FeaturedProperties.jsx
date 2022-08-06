import "./featuredProperties.css";
import { FeaturedPropertyData } from "./FeaturedPropertyData";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      {FeaturedPropertyData.map((fp, index) => {
        return (
          <div className="fpItem" key={index}>
            <img src={fp.image} alt={fp.name} className="fpImg" />
            <span className="fpName">{fp.name}</span>
            <span className="fpCity">{fp.city}</span>
            <span className="fpPrice">{fp.price}</span>
            <div className="fpRating">
              <button>{fp.rating}</button>
              <span>{fp.grade}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedProperties;
