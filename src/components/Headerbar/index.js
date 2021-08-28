import "./index.css";
import airbnbLogo from "../../images/airbnb-logo.svg";
function Headerbar() {
  return (
    <>
      <div className="header-bar">
        <div className="logo-container">
          <img src={airbnbLogo} alt="airbnb-logo" />
        </div>
        <div className="nav-container">
          <div>숙소</div>
          <div>체험</div>
          <div>온라인 체험</div>
        </div>
        <div className="user-info-container">
          <div className="become-host">
            <div>호스트되기</div>
          </div>
          <div className="earth-icon-container">
            <img
              className="earth-icon"
              src="./images/airbnb-earth.svg"
              alt="airbnb-earth"
            />
          </div>
          <div className="user-icon-container">
            <div className="user-button">
              <img
                className="hamburger"
                src="./images/airbnb-hamburger.svg"
                alt="airbnb-hamburger"
              />
              <img
                className="user-icon"
                src="./images/airbnb-usericon.svg"
                alt="airbnb-usericon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Headerbar;
