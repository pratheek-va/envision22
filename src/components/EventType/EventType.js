import React from "react";
import { useParams } from "react-router-dom";
import keys from "../../Details/key/key";
import EventTypeCard from "../EventTypeCard/EventTypeCard";

const EventType = () => {
  const params = useParams();

  return (
    <React.Fragment>
      <div class="container py-4 event-card-container">
        <div className="row gx-5">
          <EventTypeCard
            name={params.departmentName === "PP" ? "IT" : "Technical"}
            code={params.departmentName}
            image={params.departmentName === "PP" ? "itpp.png" : "tech.jpg"}
            rpkey={keys.envision}
            nevents={
              params.departmentName === "AU" && params.departmentName === "IS"
                ? 4
                : 3
            }
          ></EventTypeCard>
          <EventTypeCard
            code=""
            name={params.departmentName === "PP" ? "NON IT" : "Non Technical"}
            image={
              params.departmentName === "PP" ? "nonitpp.png" : "nontech.jpg"
            }
            rpkey={keys.envision}
          ></EventTypeCard>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventType;
