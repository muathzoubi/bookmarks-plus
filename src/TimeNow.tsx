import { useEffect, useState } from "react";
const TimeNow = () => {
    const [value, setValue] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, [])
    return (
        <div className="outer">
            <div className="dot">
                <span className=''>{value.getMilliseconds() === 0 ? '00' : value.getSeconds() < 10 ? `0${value.getSeconds()}` : value.getSeconds()}</span>

            </div>
            <div className="card">
                <div className="ray"></div>
                <div className="text">                <span className='circle'>{value.getUTCHours() === 0 ? '00' : value.getUTCHours() < 10 ? `0${value.getUTCHours()}` : value.getUTCHours()}</span>
                </div>
                <div>                <span className='circle'>{value.getUTCMinutes() === 0 ? '00' : value.getUTCMinutes() < 10 ? `0${value.getUTCMinutes()}` : value.getUTCMinutes()}</span>

                </div>
                <div className="line topl"></div>
                <div className="line leftl"></div>
                <div className="line bottoml"></div>
                <div className="line rightl"></div>
            </div>
        </div>
    )

}
export default TimeNow