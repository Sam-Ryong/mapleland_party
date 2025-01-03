import "./App.css";
import TopBar from "./components/Topbar";
import Sidebar from "./components/sidebar";
import Content from "./components/Content";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "1024px", // Fixed width
        height: "768px", // Fixed height
        border: "2px solid #333",
        borderRadius: "10px",
        margin: "0 auto", // Center the layout
        marginTop: "10px",
      }}
    >
      <TopBar></TopBar>
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar></Sidebar>
        <main
          style={{
            flex: 1,
            padding: "20px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden", // Prevent overflow issues
          }}
        >
          <Content></Content>
        </main>
      </div>
    </div>
  );
}

export default App;
