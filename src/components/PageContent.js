import React from "react";
import Gif from './Gif';

function PageContent (props) {
    return (
        <div className="container">
            <div className="row text-center">
                {props.gifs.map((gif, i) => {
                    return <Gif url={gif} key={gif + i} />
                })}
            </div>
        </div>
    )
}

export default PageContent;