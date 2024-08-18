import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./provider/dataProvider.jsx";
import {
  Home,
  About,
  Services,
  Experiance,
  Projects,
  Contact,
} from "./sections";
import { NavBar } from "./components/navBar/navBar";
import { SECTION_ID } from "./constants/sectionID";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((curr) => !curr);
  };

  const sections = [
    <Home />,
    <About />,
    <Services />,
    <Experiance />,
    <Projects />,
    <Contact />,
  ];
  return (
    <DataProvider>
      <div className={`${darkMode && "dark"}`}>
        <main className="m-0 p-0  bg-background-secondary dark:bg-background-secondary-dark font-roboto">
          <Router>
            <NavBar
              sectionId={SECTION_ID}
              onDarkMode={{ toggleDarkMode, darkMode }}
            />
            <Routes>
              <Route path="/" element={sections} />
            </Routes>
          </Router>
        </main>
      </div>
    </DataProvider>
  );
}

export default App;
