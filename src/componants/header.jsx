import { useFetchMe } from "../services/api";

export const Header = function () {

    const [data, isLoading, error] = useFetchMe(localStorage.getItem("token"));

    let nameArr = data?.displayName?.split(" ");
    let name = nameArr ? nameArr[0][0]?.toUpperCase() + nameArr[nameArr.length - 1][0].toUpperCase() : ""




    return (
        <header class="dflex dflex_center_v dflex_space_betw">
            {(() => {
                if (isLoading === true) {
                    return (<div className="left_nav dflex dflex_center_v dflex_space_betw">
                        <img src="" alt="user avatar" />
                        <span className="user_name"></span>
                        <span> Mentor&nbsp;</span>
                        <span>•&nbsp;</span>
                        <span> Evaluateur </span>
                    </div>)
                }

                if (error !== null) {
                    return <div>Error</div>
                }

                return <div className="left_nav dflex dflex_center_v dflex_space_betw">
                    <img src={data.profilePicture} alt="user avatar" />
                    <span className="user_name">{name}&nbsp;</span>
                    <span> Mentor&nbsp;</span>
                    <span>•&nbsp;</span>
                    <span> Evaluateur </span>
                </div>
            })()}


            <div>
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
    )
}
