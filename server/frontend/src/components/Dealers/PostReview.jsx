import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./Dealers.css";

const dealers = {
  5: "Regrant Car Dealership",
  12: "Tin Car Dealership",
  14: "It Car Dealership"
};

function PostReview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState("Excellent dealership. Highly recommended.");
  const [date, setDate] = useState("2023-01-12");
  const [car, setCar] = useState("NISSAN XTRAIL");
  const [year, setYear] = useState("2023");

  function submitReview() {
    const saved = JSON.parse(localStorage.getItem(`reviews-${id}`) || "[]");
    saved.push({ review, date, car, year, name: "admin", sentiment: "positive" });
    localStorage.setItem(`reviews-${id}`, JSON.stringify(saved));
    navigate(`/dealer/${id}`);
  }

  return (
    <>
      <Header />
      <div style={{ padding: "80px 0 0 96px" }}>
        <h1>{dealers[id] || dealers[5]}</h1>
        <textarea rows="7" cols="45" value={review} onChange={(e) => setReview(e.target.value)} />
        <p>Purchase Date <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></p>
        <p>Car Make</p>
        <select value={car} onChange={(e) => setCar(e.target.value)}>
          <option>NISSAN XTRAIL</option>
          <option>BMW X5</option>
          <option>AUDI A4</option>
        </select>
        <p>Car Year <input value={year} onChange={(e) => setYear(e.target.value)} /></p>
        <button onClick={submitReview} style={{ padding: "12px", marginTop: "20px" }}>Post Review</button>
      </div>
    </>
  );
}

export default PostReview;
