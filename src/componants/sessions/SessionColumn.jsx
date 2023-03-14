import { SessionCard } from "./sessionCard.jsx";

export const SessionColumn = (props) => {
    let title = ""

    return (
        <section className="tasks_section dflex dflex_c">
            <h2 className="column_title dflex dflex_space_betw">
                {
                    (() => {
                        switch (parseInt(props.col)) {
                            case 0:
                                return <><i className='fa-regular fa-square-caret-right'></i> <span>Coming Soon</span><span>{props.sessionList.length}</span></>

                            case 1:
                                return <><i className='fa-solid fa-spinner'></i><span>Pending</span><span>{props.sessionList.length}</span></>
                                break;
                            case 2:
                                return <><i className='fa-regular fa-circle-check'></i><span>Completed</span><span>{props.sessionList.length}+</span></>
                            default:
                                return <>...</>
                        }
                    })()
                }
            </h2>
            {
                (() => {
                    if (props.isLoading === true) {
                        return <div className="tasks_list">
                            <div className="task_card dflex dflex_c dflex_space_betw">
                                <h3 className="dflex dflex_space_betw">
                                    <span></span>
                                    <span className="projectLevel dflex dflex_center_h dflex_center_v">
                                        
                                    </span>
                                </h3>
                                <em></em>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="task_card dflex dflex_c dflex_space_betw">
                                <h3 className="dflex dflex_space_betw">
                                    <span></span>
                                    <span className="projectLevel dflex dflex_center_h dflex_center_v">
                                        
                                    </span>
                                </h3>
                                <em></em>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    }

                    if (props.error !== null) {
                        return <div>Error</div>
                    }

                    return (<div className="tasks_list">
                        {(props.sessionList)?.map((session, index) => {
                            return <SessionCard key={index} session={session} />
                        })}
                    </div>)
                })()
            }

        </section>
    )

}