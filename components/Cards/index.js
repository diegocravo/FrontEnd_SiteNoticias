import React from "react";

const Cards = () => {
  return (
    <div className="card-deck p-4">
      <div className="card">
        <img
          className="card-img-top"
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Atualizado 10 min atrás </small>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Atualizado 37 min atrás</small>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Atualizado 3 min atrás</small>
        </div>
      </div>
    </div>
  );
};

export default Cards;
