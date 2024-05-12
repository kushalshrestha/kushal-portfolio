import "./TopSection.scss";
import KushalImage from "./../../assets/kushal.jpeg"
// import KushalImage from "./../../assets/kushal1.jpeg"
// import KushalBGImage from "./../../assets/kushalbg.jpeg"

function TopSection() {
  return(
    <>
      <div className="top-section">
        <div className="intro">
          <h1>
            Hi, I am 
            <br/>
            Kushal
            <br />
            Shrestha
          </h1>
          <p>Software Developer</p>
        </div>
        <div className="profile-image">
            <img src={KushalImage} alt="ProfileImage" style={{ maxWidth: "50%" }} />
        </div>
      </div>
    </>
  );
}
export default TopSection;
