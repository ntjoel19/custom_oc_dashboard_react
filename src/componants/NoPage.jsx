import { Link } from "react-router-dom";

export const NoPage = function() {
    return (
        <>
            <p>404 not found</p>
            <Link to="/"></Link>
        </>
    )
}