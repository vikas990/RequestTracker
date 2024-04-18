import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import AddRequest from "./components/actions/AddRequest";
import EditRequest from "./components/actions/EditRequest";
import TrackerSheetContainer from "./container/TrackerSheetContainer/TrackerSheetContainer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<TrackerSheetContainer />} />
        <Route exact path="/add" element={<AddRequest />} />
        <Route exact path="/edit/:id" element={<EditRequest />} />
      </Routes>
    </div>
  );
}

export default App;
