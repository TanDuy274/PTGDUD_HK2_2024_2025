import { useState } from "react";

export default function InvestmentMoney() {
  const [input, setInput] = useState("");
  const [rate, setRate] = useState(0);
  const [goal, setGoal] = useState(0);
  const [showTable, setShowTable] = useState(false);
  const [results, setResults] = useState([]);

  function handleClick() {
    setShowTable(true);

    let currentValue = parseFloat(input);
    let rateValue = parseFloat(rate) / 100; // Chuyển % thành số thập phân
    let goalValue = parseFloat(goal);

    let tempResults = [];
    let yearCount = 2025;

    while (currentValue < goalValue) {
      let currentValueBefore = currentValue;
      currentValue += currentValue * rateValue;
      tempResults.push({
        year: yearCount,
        before: currentValueBefore.toFixed(2),
        value: currentValue.toFixed(2),
        rate: rateValue,
      });
      yearCount++;
    }

    setResults(tempResults);
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <p style={{ margin: 0 }}>Input your invest money</p>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <br />
      <div style={{ display: "flex", alignItems: "center", gap: "112px" }}>
        <p style={{ margin: 0 }}>Input rate</p>
        <input
          type="text"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <br />

      <div style={{ display: "flex", alignItems: "center", gap: "73px" }}>
        <p style={{ margin: 0 }}>Input your goal</p>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <br />
      <button onClick={handleClick}>Click</button>

      {showTable && (
        <div style={{ marginTop: "20px" }}>
          <table
            border="1"
            style={{
              width: "100%",
              textAlign: "left",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th style={{ padding: "10px" }}>Year</th>
                <th style={{ padding: "10px" }}>Money</th>
                <th style={{ padding: "10px" }}>Rate</th>
                <th style={{ padding: "10px" }}>Result</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td style={{ padding: "10px" }}>{result.year}</td>
                  <td style={{ padding: "10px" }}>{result.before}</td>
                  <td style={{ padding: "10px" }}>{result.rate}</td>
                  <td style={{ padding: "10px" }}>{result.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
