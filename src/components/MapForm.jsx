import { useScreenWidth } from "../hooks/main";
import { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const MapForm = ({ countries, handlePick, picks }) => {
  const [newRound, setNewRound] = useState(false);
  const width = useScreenWidth();

  const [geography, setGeography] = useState(null);

  useEffect(() => {
    const getEurope = async () => {
      const response = await fetch("/fakafka/europe.json");
      const europe = await response.json();
      setGeography(europe);
    };

    getEurope();
  }, []);

  if (width < 800) return null;

  return (
    <div className="map-container">
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-10.0, -48.0, 0],
          center: [0, 5],
          scale: 900,
        }}
      >
        <Geographies
          geography={geography}
          fill="#FEF7F7"
          stroke="#000000"
          strokeWidth={0.4}
        >
          {({ geographies }) =>
            geographies.map((geo) => {
              const country = geo.properties.geounit;

              if (!countries.includes(country)) {
                return null;
              }

              const selected = country === picks.from || country === picks.to;
              const selectedFill =
                country === picks.from ? "#e50712" : "#05ebed";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    const pick = { value: country };

                    if (!picks.from) handlePick.from(pick);
                    else if (!picks.to) handlePick.to(pick);
                    else if (newRound) {
                      setNewRound(false);
                      handlePick.to(pick);
                    } else if (picks.from && picks.to) {
                      setNewRound(true);
                      handlePick.from(pick);
                    }
                  }}
                  style={{
                    default: {
                      fill: selected ? selectedFill : "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      cursor:
                        selected || (picks.from && picks.to)
                          ? "default"
                          : "pointer",
                      fill:
                        selected || (picks.from && picks.to)
                          ? "default"
                          : "#735262",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#4E2F3E",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapForm;
