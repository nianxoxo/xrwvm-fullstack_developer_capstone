import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./Dealers.css";

const dealers = {
  5: { full_name: "Regrant Car Dealership", city: "Baltimore", address: "93 Golf Course Pass", zip: "21203", state: "Maryland" },
  12: { full_name: "Tin Car Dealership", city: "Silver Spring", address: "168 Pawling Lane", zip: "20918", state: "Maryland" },
  14: { full_name: "It Car Dealership", city: "San Francisco", address: "2109 Scott Parkway", zip: "94147", state: "California" }
};

function Dealer() {
  const { id } = useParams();
  const dealer = dealers[id] || dealers[5];
  const saved = JSON.parse(localStorage.getItem(`reviews-${id}`) || "[]");

  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <h1>{dealer.full_name} <Link to={`/postreview/${id}`}>Post Review</Link></h1>
        <h3>{dealer.city},{dealer.address}, Zip - {dealer.zip}, {dealer.state}</h3>

        {saved.length === 0 ? (
          <p>No reviews yet!</p>
        ) : (
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {saved.map((review, index) => (
              <div key={index} style={{ width: "240px", minHeight: "220px", border: "1px solid #999", borderRadius: "6px", padding: "12px", boxShadow: "0 2px 8px #999" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#49a942", color: "white", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontWeight: "bold" }}>+</div>
                <p>{review.review}</p>
                <p style={{ marginTop: "60px", fontStyle: "italic", color: "#666" }}>{review.name} {review.car} {review.year}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Dealer;
