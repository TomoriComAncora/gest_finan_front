"use client";
import {useFormStatus} from "react-dom"

interface Props {
  name: string;
}

export function Button({ name }: Props) {
  return (
    <button type="submit" className="h-10 text-lg bg-button rounded-lg font-semibold text-white flex items-center justify-center transition-all duration-500 hover:scale-105">
      {name}
    </button>
  );
}
