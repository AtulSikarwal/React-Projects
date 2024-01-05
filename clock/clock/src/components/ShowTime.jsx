import { useEffect, useState } from "react";

const ShowTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    console.log("interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("Cancel the Interval");
    };
  }, []);
  return (
    <>
      <h1>
        Today is {time.toLocaleDateString()} and This is the Currrent Time:
        {time.toLocaleTimeString()}
      </h1>
    </>
  );
};
export default ShowTime;
