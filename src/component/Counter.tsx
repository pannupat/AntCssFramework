import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/slice/counterSlice";

function Counter() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex ml-[400px] mt-[-70px]">
      <button
        className="w-32 p-[5px] bg-green-800 text-white cursor-pointer border-2 rounded-lg"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span className="pl-5 pr-5 text-white pt-1 font-extrabold text-2xl">
        {count}
      </span>
      <button
        className=" w-32 p-[8px] bg-red-800 text-white cursor-pointer border-2 rounded-lg"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
