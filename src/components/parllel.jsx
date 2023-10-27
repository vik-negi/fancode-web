import React, { useEffect, useState } from "react";
import "./CoinToss.css";
import MatchCard from "./matchcard";
import MatchCard2 from "./matchcard2";
import MatchCard3 from "./matchcard3";
import MatchCard4 from "./matchcard4";
import MatchCard5 from "./matchcard5";
import MatchCard6 from "./matchcard6";
import MatchCard7 from "./matchcard7";
import axios from "axios";
function Parllel() {
  const [matchData, setMatchData] = useState([]);

  const [loadingMatches, setLoadingMatches] = useState(true);

  const fetchMatchData = async () => {
    const data = await axios.get(
      "https://cricket-api-lilac.vercel.app/api/cricket/matchs"
    );
    console.log(data.data.data);
    if (data) {
      setMatchData(data.data.data);
      setLoadingMatches(false);
    }
    setLoadingMatches(false);
  };

  useEffect(() => {
    fetchMatchData();
  }, []);

  return (
    <div
      style={{
        marginLeft: "15px",
      }}
    >
      <div className="common-styles-comp__RowFlex-sc-1j0qvf0-1 masthead-segmentstyled__Header-sc-191lpjq-0 eWrwwS iyUXlt">
        <div className="masthead-segmentstyled__LabelContainer-sc-191lpjq-1 kaHGxc">
          <label
            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
            aria-multiline="true"
            aria-rowcount={1}
            style={{
              fontSize: "1.5em",
              fontFamily: "Saira",
              fontWeight: 700,
              textAlign: "left",
              lineHeight: "32px",
              color: "#121212",
              letterSpacing: "0.1px",
            }}
          >
            <h2>Live Matches</h2>
          </label>
        </div>
        <div className="masthead-segmentstyled__SeeAllContainer-sc-191lpjq-2 gWZdMj">
          {/* <a href=""> */}
          {/* "/cricket/schedule/today"> */}
          <label
            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
            aria-multiline="true"
            aria-rowcount={1}
            style={{
              fontSize: "0.75em",
              fontFamily: "Saira",
              fontWeight: 600,
              textAlign: "left",
              lineHeight: "16px",
              color: "#ff5000",
              letterSpacing: "0.1px",
            }}
          >
            SEE ALL
          </label>
          {/* </a> */}
        </div>
      </div>
      <div
        style={{
          // overflow: "scroll",
          width: "100%",
        }}
        className=" euYtvU"
        id="slider-container"
      >
        {loadingMatches ? (
          <h1>Loading...</h1>
        ) : matchData.length == 0 ? (
          <h1 style={{ marginLeft: "15px" }}>No Live Matches</h1>
        ) : (
          matchData.map((match) => (
            //   <div className="div-1">
            <MatchCard match={match} />
            //   </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Parllel;
