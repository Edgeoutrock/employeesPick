import React from "react";
import "./style.css";

function FilterCard(props) {
    return (
      <div className="card">
        
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Occupation:</strong> {props.occupation}
            </li>
            <li>
              <strong>Location:</strong> {props.location}
            </li>
          </ul>
        </div>
        
      </div>
    );
  }
  
  export default FilterCard;