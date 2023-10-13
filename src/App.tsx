import { useState } from "react";
import { keywords, rewards } from "./consts";
import { shuffle } from "./shuffle";
import cn from "classnames";
import { TimedConfetti } from "./TimedConfetti";
import { Timer } from "./Timer";

const seed = "420420420"; // You can use any seed value you like
const targetDate = new Date("October 14, 2023 21:37:00");

function App() {
  const shuffledArray = shuffle(keywords, seed);
  const [isTime, setIsTime] = useState(false);

  return (
    <div className=" text-white mx-auto flex justify-center items-center flex-col max-w-[360px] text-center px-2 gap-4">
      <h1 className="text-xl mt-8">
        Polityczna loteria urodzinowa im. Wiktorii Lisieckiej
      </h1>
      {!isTime && (
        <div>
          <p>Do ukazania wyników pozostało:</p>
          <Timer targetDate={targetDate} setIsTime={setIsTime} />
        </div>
      )}
      {isTime && <TimedConfetti />}
      <ul className="w-full">
        {rewards.map((reward, idx) => {
          return (
            <li
              key={`${reward}-${idx}`}
              className={cn(
                idx % 2 ? "bg-gray-800" : "bg-gray-700",
                "grid grid-cols-2 gap-2 w-full border-b border-gray-600 px-4 py-1 "
              )}
            >
              <div className="text-left">
                {isTime ? shuffledArray[idx] : "???"}
              </div>
              <div className="text-right text-sm">{reward}</div>
            </li>
          );
        })}
      </ul>
      <span className=" text-xs text-gray-800 py-4">
        Dokładne informacje o maksymalnym czasie odbioru/czasie waźności danej
        nagrody u mnie
      </span>
    </div>
  );
}

export default App;
