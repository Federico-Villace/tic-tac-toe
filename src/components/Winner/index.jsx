import { Square } from "../Square";

const Winner = ({ winner, reset }) => {
  if (winner === null) return null;
  const winnerText = winner === false ? "TIE!" : "WIN!";
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={reset}>Start Again</button>
        </footer>
      </div>
    </section>
  );
};

export default Winner;
