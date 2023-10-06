import { useState } from "react";

export const WhichTurn = (props) => {
    const [player, setPlayer] = useState('Крестик');
    setPlayer((prevPlayer) => (prevPlayer === 'Крестик' ? 'Нолик' : 'Крестик'));
  };
