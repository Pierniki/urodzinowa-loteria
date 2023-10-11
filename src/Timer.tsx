import { useEffect, useState } from "react";
import differenceInMilliseconds from "date-fns/differenceInMilliseconds";

export const Timer = ({
  targetDate,
  setIsTime,
}: {
  targetDate: Date;
  setIsTime: (isTime: boolean) => void;
}) => {
  const [timeLeft, setTimeLeft] = useState(
    differenceInMilliseconds(targetDate, new Date())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = differenceInMilliseconds(targetDate, new Date());
      if (timeLeft < 0) return setIsTime(true);
      setTimeLeft(timeLeft);
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-2xl font-mono">{`${(timeLeft / 1000).toFixed(2)}s`}</p>
  );
};
