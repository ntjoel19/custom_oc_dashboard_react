import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../componants/header";
import { Sessions } from "../componants/Sessions";
import { Students } from "../componants/Students";
import { NoPage } from "../componants/NoPage";

import { Stats } from "../componants/Stats";
import { Bills } from "../componants/Bills";
import { MainNav } from "../componants/mainNav";

export const Router = function () {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <MainNav />
                    <Route path="/sessions" element={<Sessions />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/bills" element={<Bills />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}