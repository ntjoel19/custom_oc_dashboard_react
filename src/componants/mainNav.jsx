import { Outlet, Link } from "react-router-dom";

export const MainNav = function () {

    return (

        <>
            <ul className="nav dflex">
                <li id="sessions">
                    <Link to="/sessions">Sessions</Link>
                </li>

                <li id="students">
                    <Link to="/students">Students</Link>
                </li>

                <li id="bills">
                    <Link to="/bills">Bills</Link>
                </li>

                <li id="stats">
                    <Link to="/stats">Stats</Link>
                </li>
            </ul>
            <Outlet />
        </>

    )
}