function ResultsGrid({ results }) {
  return (
    <div className="results-grid">
      {results.map((result, index) => (
        <div className="result-card" key={index}>
          {result}
        </div>
      ))}
    </div>
  );
}

export default ResultsGrid;