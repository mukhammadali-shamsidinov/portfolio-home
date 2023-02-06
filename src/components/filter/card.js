import React from 'react'
import card from "../../image/card.png";
const CardItem = () => {
  return (
    <React.Fragment>
                  <div className="col">
            <div className="card">
              <div className="card-head">
                <img src={card} alt="" />
              </div>
              <div className="card-body">
                <h4>143.000 $</h4>
                <a className="btn btn-details">view Details</a>
              </div>
              <div className="card-footer">
              <div className="btn-group">
              <div  className="box">
                  {" "}
                  <i class="fa-solid fa-bath"></i>
                </div>
                <div className="box">
                  {" "}
                  <i class="fa-solid fa-bed"></i>
                </div>
                <div className="box">
                  {" "}
                  <b> 535 sq ft</b>
                </div>
              </div>
              </div>
            </div>
          </div>
    </React.Fragment>
  )
}

export default CardItem