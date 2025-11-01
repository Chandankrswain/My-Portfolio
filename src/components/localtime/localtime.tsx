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
    <div className="flex text-xl">
      <h1 className="text-[#ababab]">&gt; LOCAL</h1> <span>/</span>
      <p className="font-thin">{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default Time;
