// src/Player.js
import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    width: "18rem",
    margin: "1rem",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)"
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Équipe : {team} <br />
          Nationalité : {nationality} <br />
          Numéro : {jerseyNumber} <br />
          Âge : {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Valeurs par défaut
Player.defaultProps = {
  name: "Joueur inconnu",
  team: "Équipe inconnue",
  nationality: "Inconnue",
  jerseyNumber: 0,
  age: "N/A",
  imageUrl: "https://via.placeholder.com/150"
};

export default Player;
