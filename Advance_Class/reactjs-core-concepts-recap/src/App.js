import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <District></District>
      <District></District>
    </div>
  );
}

const DistrictStyle = {
  backgroundColor: "purple",
  margin: "20px",
  padding: "5px",
  borderRadius: "20px"
}

function District(){
  return (
    <div style={DistrictStyle}>
      <h2>Name: </h2>
      <p>Specialty: </p>
    </div>
  )
}

export default App;
