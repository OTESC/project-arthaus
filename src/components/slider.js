/* eslint-disable jsx-a11y/heading-has-content */
import React, {useRef} from "react";
import { Carousel } from "3d-react-carousal";
import ReactPlayer from "react-player";

const Slider = function () {
    const playerRef = useRef(null);

    let slides = [
        <img src="https://picsum.photos/800/300/?random" alt="1" />,
        <img src="https://picsum.photos/800/301/?random" alt="2" />,
        <ReactPlayer ref={playerRef} url={"https://www.youtube.com/watch?v=NHqUcXxAHt4"} controls={true}/>,
        <img src="https://picsum.photos/800/303/?random" alt="4" />,
        <img src="https://picsum.photos/800/304/?random" alt="5" />,
        <ReactPlayer ref={playerRef} url={"https://www.youtube.com/watch?v=a4YfzAdpsHg"} controls={true}/>
    ];

    const callback = function (index) {
        console.log("callback", index);
    }
    return (
        <div className="text-light bg-dark p-4">
            <h1 className="p-4">Featured</h1>
            <Carousel slides={slides} interval={3000} autoplay={true} onSlideChange={callback} />
        </div>
    )
}

export default Slider;