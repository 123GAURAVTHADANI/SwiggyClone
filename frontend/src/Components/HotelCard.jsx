import React from "react";
import styled from "styled-components";

const Div = styled.div`
  font-family: sans-serif;
  overflow: hidden;
  border: 0;
  width: 18rem;
  border: 1px solid white;
  border-radius: 0px;
  div > span {
    margin-right: 12px;
  }
  &:hover {
    cursor: pointer;
    border: 1px solid #d3d5df;
    box-shadow: 0 4px 7px 0 rgba(218, 220, 230, 0.6);
  }
`;

const Tag = styled.p`
  color: #686b78;
  font-size: 13px;
  margin-top: 3px;
`;

const Badge = styled.span`
  fontsize: 14px;
  padding: 5px;
  border-radius: 0px;
  background-color: ${(props) => {
    console.log("Badge=>", props);
    if (props.rating < 4) {
      return "#db7c38";
    } else {
      return "none";
    }
  }};
`;

const QuickView = styled.div`
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const HotelCard = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <>
      <div className="col">
        <Div className="card mb-2">
          <img
            className="card-img-top align-self-center mt-3 "
            src={data.img_url}
            alt="Restaurant Img"
            style={{
              width: "90%",
              borderRadius: "0px",
            }}
          />
          <div className="card-body text-left">
            <h5 className="card-title">
              {data.name}
              <br />
              <Tag>{data.cuisines.join(", ")}</Tag>
            </h5>
            <div
              className="card-text font-weight-normal"
              style={{ fontSize: "12px" }}
            >
              <Badge rating={data.rating} className="badge badge-success">
                <i className="fas fa-star mr-1"></i>
                {data.rating}
              </Badge>
              <span>&bull;</span>
              <span>{data.average_time} MINS</span>
              <span>&bull;</span>
              <span style={{ marginRight: "0px" }}>
                ₹{data.average_cost} FOR TWO
              </span>
              <div className="dropdown-divider"></div>
              <p
                className="font-weight-normal"
                style={{ color: "#8a584b", marginTop: "15px" }}
              >
                <img
                  src="discountBadge.svg"
                  alt="discountBadge"
                  width="15px"
                  style={{
                    marginRight: "10px",
                    marginBottom: "5px",
                  }}
                />
                50% off | Use SWEGGYIT
              </p>
              <QuickView
                className="text-center font-weight-bold mb-0"
                style={{ color: "#5d8ed5" }}
              >
                <div className="dropdown-divider"></div>
                QUICK VIEW
              </QuickView>
            </div>
          </div>
        </Div>
      </div>
    </>
  );
};

export default HotelCard;
