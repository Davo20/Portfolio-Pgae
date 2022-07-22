import React, {useState, useEffect} from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
import "./circular.scss";

export default function Circular(){
    // useEffect(()=>{
    //     Aos.init()
    // }, [])
    const [radius, setRadius] = useState([{count:95},{count:92},{count:92},{count:65},{count:60}])
    return(
    <div className="headRadius">
        {radius.map((elem)=>{
            return(
                <div data-aos="fade-left" data-aos-offset="200" dat-aos-duration="500" className="radius" key={Math.random()}>
                    <div className="htmlSize">{`${elem.count}${"%"}`}</div>
                    <div className="boo">
                        <div className="rotate">
                            <div className="left"></div>
                        </div>
                        <div className="rotater">
                            <div className="right"></div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
    )
}