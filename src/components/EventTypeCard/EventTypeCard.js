import React from "react";
import "./EventTypeCard.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { displayRazorPay } from "../../payment";

const EventTypeCard = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);

  const setTypeTechnical = () => {
    dispatch({ type: "TECHNICAL" });
  };

  const openModal = () => {
    dispatch({ type: "INPUT" });
    dispatch({
      type: "SEND",
      rules: "",
      orgname: "",
      orgno: "",
      image: "",
      name: `Technical Event/${props.code}`,
      rounds: "",
      venue: "",
      regfee: "",
      fee: "",
      key: props.rpkey,
    });
  };

  const openModalPaper = () => {
    {
      dispatch({ type: "SHOW" });
      dispatch({
        type: "SEND",
        rules: [],
        orgname: "",
        orgno: "",
        image: props.image,
        name: `Technical Event/${props.code}`,
        rounds: "",
        venue: "",
        regfee: "",
        fee: 100,
        key: props.rpkey,
      });
    }
  };

  const setTypeNonTechnical = () => {
    dispatch({ type: "NON-TECHNICAL" });
  };

  const token = useSelector((state) => state.auth.token);
  return (
    <div className="col-md-6 g-5">
      <div className="card  event-type-card">
        <img
          className="card-img-top"
          src={require(`../../img/${props.image}`)}
          alt="Card image cap"
        />
        <div className="card-body event-type-details">
          {props.name === "IT" && (
            <div>
              <h5 className="card-title event-type-title">{props.name}</h5>
              <button className="event-button" onClick={openModalPaper}>
                Register Now
              </button>
            </div>
          )}

          {props.name === "NON IT" && (
            <div>
              <h5 className="card-title event-type-title">{props.name}</h5>
              <button className="event-button" onClick={openModalPaper}>
                Register Now
              </button>
            </div>
          )}
          {props.name == "Technical" && (
            <div>
              <h5 className="card-title event-type-title">{props.name}</h5>
              <p className="event-num">{props.nevents} Events | INR 100</p>
              <div>
                {token && (
                  <button className="event-button" onClick={openModal}>
                    Register Now
                  </button>
                )}
                <NavLink
                  className="event-type-button t-event"
                  to={`/events/${params.departmentName}/${props.name}`}
                  onClick={setTypeTechnical}
                >
                  Go to Events
                </NavLink>
              </div>
            </div>
          )}

          {props.name === "Non Technical" && (
            <div>
              <h5 className="card-title event-type-title no-title">
                {props.name}
              </h5>
              <NavLink
                className="event-type-button no-event"
                to={`/events/${params.departmentName}/${props.name}`}
                onClick={setTypeNonTechnical}
              >
                Go to Events
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventTypeCard;
