import { Link } from "react-router-dom";

export const SessionCard = function (props) {
    
    return (
        <Link>
            <div className="task_card dflex dflex_c dflex_space_betw">
                <h3 className="dflex dflex_space_betw">
                    <span>{props.session.type}</span>
                    <span className="projectLevel dflex dflex_center_h dflex_center_v">
                        {props.session.projectLevel}
                    </span>
                </h3>
                <em>{props.session.recipient.displayableName}</em>
                <span>{props.session.projectTitle}</span>
                <span>
                    {props.session.sessionDate.split("T")[0]} • 
                    {props.session.sessionDate.split("T")[1].split("+")[0]}
                </span>
            </div>
        </Link>
    )
}