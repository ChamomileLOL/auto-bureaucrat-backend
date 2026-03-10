import { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client'; // NEW: Import the client cable
import './App.css';

// NEW: Hardwire the connection to the backend port
const socket = io('https://auto-bureaucrat-backend.onrender.com');

function App() {
  const [hosts, setHosts] = useState([]);
  const [systemStatus, setSystemStatus] = useState("CONNECTING TO UNIVERSAL DOM...");

  useEffect(() => {
    // 1. Pull the initial historical ledger when the app loads
    const fetchHistoricalLedger = async () => {
      try {
        const response = await axios.get('https://auto-bureaucrat-backend.onrender.com/api/pi/hosts');
        setHosts(response.data.data);
        setSystemStatus("SURVEILLANCE ACTIVE: BIOLOGICAL MUTATION TERMINATED.");
      } catch (error) {
        setSystemStatus("ERROR: SURVEILLANCE FEED DISRUPTED.");
      }
    };
    fetchHistoricalLedger();

    // 2. NEW: Listen for the live broadcast from the backend
    socket.on('newAssimilatedHost', (newHost) => {
      // Instantly add the new victim to the bottom of the table without refreshing!
      setHosts((prevHosts) => [...prevHosts, newHost]);
      
      // Flash a real-time alert on the screen
      setSystemStatus(`CRITICAL ALERT: HOST ${newHost.hostIdentifier} NEWLY ASSIMILATED.`);
      
      // Return to normal status after 4 seconds
      setTimeout(() => {
        setSystemStatus("SURVEILLANCE ACTIVE: BIOLOGICAL MUTATION TERMINATED.");
      }, 4000);
    });

    // Cleanup the connection if the terminal is closed
    return () => {
      socket.off('newAssimilatedHost');
    };
  }, []); // Notice we deleted the setInterval! No more polling.

  return (
    <div className="terminal-container">
      <header className="terminal-header">
        <h1>AUTO-BUREAUCRAT MONOLITH</h1>
        <h2 className={systemStatus.includes("ERROR") ? "error-text" : "success-text"}>
          {systemStatus}
        </h2>
        <div className="stats">
          Total Assimilated: {hosts.length}
        </div>
      </header>

      <div className="ledger">
        <h3>GLOBAL INFECTION LEDGER</h3>
        <table>
          <thead>
            <tr>
              <th>Host ID</th>
              <th>Variant Lock</th>
              <th>Stagnation Level</th>
              <th>Biological Response</th>
              <th>Time of Infection</th>
            </tr>
          </thead>
          <tbody>
            {hosts.map((host) => (
              <tr key={host._id}>
                <td className="host-id">{host.hostIdentifier}</td>
                <td className="variant">{host.variantType}</td>
                <td className="level">{host.systemicStagnationLevel}%</td>
                <td className="biological">{host.isBiological ? "Active" : "Nullified"}</td>
                <td className="time">{new Date(host.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
