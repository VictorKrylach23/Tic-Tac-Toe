import { useState } from "react";
import { WhichTurn } from "./components";
import "./App.css";

function App() {

        const [space, setSpace] = useState([
            { id: '01', value: null},
            { id: '02', value: null},
            { id: '03', value: null},
            { id: '04', value: null},
            { id: '05', value: null},
            { id: '06', value: null},
            { id: '07', value: null},
            { id: '08', value: null},
            { id: '09', value: null},
            ])

            const [count, setCount] = useState(0);
            const [fill, setFill] = useState('X')
 const [player, setPlayer] = useState('Крестик');

            const WhichTurn = (props) => {
            setPlayer((prevPlayer) => (prevPlayer === 'Крестик' ? 'Нолик' : 'Крестик'));
              };

            const changeFill = () => {
                setFill((prevFill) => (prevFill === 'X' ? 'O' : 'X'));
            }

            const fillSpace = (id) => {
              setSpace((prevSpace) =>
              prevSpace.map((item) =>
                  item.id === id && item.value === null ? { id: item.id, value: fill } : item
                ))
            }

            const checkWin = () => {
                const winningCombinations = [
                  [0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8],
                  [0, 3, 6],
                  [1, 4, 7],
                  [2, 5, 8],
                  [0, 4, 8],
                  [2, 4, 6],
                ];

                for (const combination of winningCombinations) {
                  const [a, b, c] = combination;
                  if (space[a].value && space[a].value === space[b].value && space[a].value === space[c].value) {
                    alert(`Победил ${player}`);
                    return;
                  }
                }

                if (count === 8) {
                  alert('Ничья');
                }
              };

            const text = false

            const runGame = (id) => {
              const spaceItem = space.find(item => item.id === id);
                if (spaceItem.value !== null) {
                    const text = `<div>Победил: ${player}</div>`;
                    return text
            }

              fillSpace(id);
              setCount((prevCount) => prevCount + 1);
              changeFill()
              WhichTurn()
              checkWin()
            };

            const emptyBoard = () => {
                setSpace((prevSpace) => prevSpace.map((item) => ({...item, value: null})))}
            const emptyCounter = () => setCount(0)

            const newGame = () => {
                emptyCounter()
                emptyBoard()
            }


            return (
              <>
                <div>Сейчас ходит: {player}</div>
                <ul className="list">
                  {space.map(({ id, value }) => (
                    <li key={id} className={value} onClick={() => runGame(id)}>
                      {value}
                    </li>
                  ))}
                </ul>
                <button onClick={() => newGame()}>Начать заново</button>
              </>
            );

}

export default App;
