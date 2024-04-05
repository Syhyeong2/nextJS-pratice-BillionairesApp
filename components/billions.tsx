"use client";

import { useRouter } from "next/navigation";

interface IBillion {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string;
}

export default function Billions({
  id,
  name,
  squareImage,
  netWorth,
  industries,
}: IBillion) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${id}`);
  };
  return (
    <div
      key={id}
      className="bg-gray-900 rounded-md hover:scale-105 transition duration-300"
      onClick={onClick}
    >
      <img src={squareImage} className="rounded-t-md" />
      <div className="mt-3 ml-3 mb-10">
        <h1 className="text-white font-semibold text-lg">{name}</h1>
        <span className="text-white text-sm">
          {Math.floor(netWorth / 1000)} Billion / {industries}
        </span>
      </div>
    </div>
  );
}
