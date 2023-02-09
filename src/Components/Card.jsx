
export default function Card(props) {
  return (
    <div className="Card">
      <img src={portrait} alt="" />
      <div className="Card-stats">
        <span> 180 cm</span>
        <span className="gray"> age 43</span>
        <span className="gray"> City Bergen</span>
      </div>
      <p> Life lessons</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
