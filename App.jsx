import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      {/* Dashboard content goes here */}
      <div className="p-4">
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
