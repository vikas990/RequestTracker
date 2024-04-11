import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import TrackerSheet from "./components/tackerSheet/TrackerSheet";
import AddRequest from "./components/actions/AddRequest";
import EditRequest from "./components/actions/EditRequest";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<TrackerSheet />} />
        <Route exact path="/add" element={<AddRequest />} />
        <Route exact path="/edit/:id" element={<EditRequest />} />
      </Routes>
    </div>
  );
}

export default App;
