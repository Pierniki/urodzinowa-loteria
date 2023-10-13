import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";
import Confetti from "react-confetti";

export const TimedConfetti = () => {
  const windowSize = useWindowSize();
  const [pieces, setPieces] = useState(200);

  useEffect(() => {
    const interval = setInterval(() => {
      setPieces((pieces) => {
        if (pieces === 10) {
          clearInterval(interval);
          return 10;
        }
        return pieces - 10;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      numberOfPieces={pieces}
      style={{ position: "fixed" }}
    />
  );
};
