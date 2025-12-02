import { useState, useEffect } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex md:text-xl hidden md:block ">
      <h1 className="text-[#ababab] md:inline-block">&gt; LOCAL</h1>
      <span>/</span>
      <p className="font-thin md:inline-block">
        {currentTime.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default Time;
