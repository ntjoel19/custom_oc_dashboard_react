import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./componants/header";
import { Sessions } from "./componants/sessions/Sessions";
import { Students } from "./componants/Students";
import { NoPage } from "./componants/NoPage";

import { Stats } from "./componants/Stats";
import { Bills } from "./componants/Bills";
import { MainNav } from "./componants/mainNav";

const App = function () {
  return (
    <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainNav />}>
              <Route path="sessions" element={<Sessions />} />
              <Route path="students" element={<Students />} />
              <Route path="bills" element={<Bills />} />
              <Route path="stats" element={<Stats />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </main>
    </Router>
  );
}

export default App;
