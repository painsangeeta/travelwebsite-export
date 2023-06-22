import Mountain1 from "../assets/mt1.jpg";
import Mountain2 from "../assets/mt2.jpg";
import Mountain3 from "../assets/mt3.jpg";
import Mountain4 from "../assets/mt4.jpg";
import DestinationData from "./DestinationData";

import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to explore the world.</p>

      <DestinationData
        className="first-dest"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano is recognized as the smallest active volcano in the world. The volcano can be found in the interior part of Taal Lake, and 70 kilometers south of Metro Manila. It is distinctive because of the fact that the volcano itself forms a landmass that has a lake inside its crater, and known as the “Crater Lake”. The Crater Lake’s water has a diluted form of sulfuric acid with extreme absorption of aluminum, boron, magnesium and sodium in salt structure. The volcano can be best viewed in Tagaytay City because of its high altitude. The lakeshore towns of San Nicholas, Agoncillo and Talisay are places in Batangas you can have a closer view, and actually take you to the top of the crater."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-dest-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Mount Daguldol/Mt. Daguldol/Daguldul is a stunning mountain with a lot to offer. Firstly, the word Daguldol has a meaning similar to grandness. This mountain although not as popular as its counterparts (Batulao, etc) is a one of a kind mountain where you will be able to experience a variety of terrains.

        Daguldol provides great views overlooking the nearby beach, lush woodlands, rolling slopes, and nearby mountains. The view at the summit is the best as you can experience both the sea and the mountains."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
