import React from "react";
import { useParams } from "react-router-dom";
import keys from "../../Details/key/key";
import CulDetails from "../../Details/culturaldetails";
import archidetails from "../../Details/archidetails";
import sportSenior from "../../Details/sportsSeniorDetails";

import EventCard from "../EventCard/EventCard";

const Extras = () => {
  const sports = [...sportSenior];
  let events = [];
  const eventsArray = [];

  const params = useParams();

  const { extra } = params;
  console.log(extra);

  if (extra === "CUL") {
    for (let i = 0; i < CulDetails.length; i++) {
      CulDetails[i].key = keys.envision;
      events[i] = CulDetails[i];
    }
  } else if (extra === "SPORTS") {
    for (let i = 0; i < sports.length; i++) {
      sports[i].key = keys.envision;
      events[i] = sports[i];
    }
  } else if (extra === "SSA") {
    for (let i = 0; i < archidetails.length; i++) {
      archidetails[i].key = keys.envision;
      events[i] = archidetails[i];
    }
  }

  function splitArray(array, part) {
    for (var i = 0; i < array.length; i += part) {
      eventsArray.push(array.slice(i, i + part));
    }
  }

  splitArray(events, 3);

  console.log(eventsArray);

  return (
    <React.Fragment>
      <div class="container px-5 event-card-container">
        {eventsArray.map((row) => {
          return (
            <div className="row">
              {row.map((item) => (
                <EventCard
                  name={item.name}
                  venue={item.venue}
                  rules={item.rules}
                  orgname={item.orgname}
                  orgno={item.orgno}
                  image={item.image}
                  rounds={item.rounds ? item.rounds : false}
                  regfee={item.regfee}
                  fee={item.fee}
                  details={item.details}
                  time={item.time}
                  date={item.date}
                  rpkey={item.key}
                ></EventCard>
              ))}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Extras;
