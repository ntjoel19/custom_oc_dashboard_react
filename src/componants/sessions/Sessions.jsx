import { useState, useEffect } from "react";
import { SessionColumn } from "./SessionColumn";
import { useFetchComingSoon, useFetchPending, useFetchCompleted, MENTOR_PENDING_CR, MENTOR_DONE, MENTOR_COMING_SOON } from "../../services/api";

export const Sessions = function () {



    const pending = useFetchPending(localStorage.getItem("token"), localStorage.getItem("uid"));

    const comingSoon = useFetchComingSoon(localStorage.getItem("token"), localStorage.getItem("uid"))

    const completed = useFetchCompleted(localStorage.getItem("token"), localStorage.getItem("uid"), 2)
    console.log(comingSoon[0], pending[0], completed[0])
    return ( 
        <div className="tasks dflex dflex_space_betw">
            <SessionColumn col="0" sessionList={comingSoon[0]} isLoading={comingSoon[1]} error={comingSoon[2]} />
            <SessionColumn col="1" sessionList={pending[0]} isLoading={pending[1]} error={pending[2]}/>
            <SessionColumn col="2" sessionList={completed[0]} isLoading={completed[1]} error={completed[2]}/>
        </div>
    )
}