function Objectives({ objectives }) {
  return (
    <ul>
      {objectives.map((objective, index) => (
        <li key={index}>
          {objective}
        </li>
      ))}
    </ul>
  );
}

export default Objectives;