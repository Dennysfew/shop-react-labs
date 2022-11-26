import React from "react";
import "./Loader.css";
import {FadeLoader} from "react-spinners";

function Loader() {
    return (
        <div className="loader">
            <FadeLoader color="black" />
        </div>
    )
}

export default Loader;