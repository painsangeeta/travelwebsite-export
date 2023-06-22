import "./TripStyles.css";
import TripData from "./TripData";

import Trip1 from "../assets/card1.avif";
import Trip2 from "../assets/card2.avif";
import Trip3 from "../assets/card3.avif";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Paris"
          text="Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré."
        />

        <TripData
          image={Trip2}
          heading="Trip in Agra"
          text="Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 230 kilometres south-east of the national capital New Delhi and 330 km west of the state capital Lucknow."
        />

        <TripData
          image={Trip3}
          heading="Trip in St Ives, UK"
          text="St Ives is a town in Cornwall, England, known for its surf beaches, like Porthmeor, and its art scene. The seafront Tate St Ives gallery has rotating modern art exhibitions, focusing on British artists. Nearby, the Barbara Hepworth Museum and Sculpture Garden, in the modernist artist’s former studio, displays her bronzes and other works. Boat trips go to Seal Island, just west of town, to see the seal colony. "
        />
      </div>
    </div>
  );
}

export default Trip;
