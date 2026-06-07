import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Dealers.css";

const dealers = [
  { id: 5, full_name: "Regrant Car Dealership", city: "Baltimore", address: "93 Golf Course Pass", zip: "21203", state: "Maryland" },
  { id: 12, full_name: "Tin Car Dealership", city: "Silver Spring", address: "168 Pawling Lane", zip: "20918", state: "Maryland" },
  { id: 14, full_name: "It Car Dealership", city: "San Francisco", address: "2109 Scott Parkway", zip: "94147", state: "California" },
  { id: 17, full_name: "Home Ing Car Dealership", city: "San Jose", address: "7670 American Ash Drive", zip: "95138", state: "California" },
  { id: 1, full_name: "Holdlamis Car Dealership", city: "El Paso", address: "3 Nova Court", zip: "88563", state: "Texas" }
];

function Dealers() {
  const [state, setState] = useState("All States");
  const states = ["All States", ...Array.from(new Set(dealers.map((d) => d.state)))];
  const shown = state === "All States" ? dealers : dealers.filter((d) => d.state === state);

  return (
    <>
      <Header />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Dealer Name</th>
            <th>City</th>
            <th>Address</th>
            <th>Zip</th>
            <th>
              <select value={state} onChange={(e) => setState(e.target.value)}>
                {states.map((s) => <option key={s}>{s}</option>)}
              </select>
            </th>
            <th>Review Dealer</th>
          </tr>
        </thead>
        <tbody>
          {shown.map((dealer) => (
            <tr key={dealer.id}>
              <td>{dealer.id}</td>
              <td><Link to={`/dealer/${dealer.id}`}>{dealer.full_name}</Link></td>
              <td>{dealer.city}</td>
              <td>{dealer.address}</td>
              <td>{dealer.zip}</td>
              <td>{dealer.state}</td>
              <td><Link to={`/postreview/${dealer.id}`}>Post Review</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Dealers;
