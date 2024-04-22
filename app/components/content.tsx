"use client";
import React, { useState } from "react";
import { CardWithForm } from "./card";
import { Checkbox } from "@/components/ui/checkbox";

const dat = {
  title: "Create",
  toDo: ["Take out garbage", "Wash Dishes"],
};
type Data = {
  title: string;
  toDo: string[];
};

export default function Content() {
  const [data, setData] = useState<Data[]>([]);

  const handleClick = () => {
    setData([...data, dat]);
  };
  return (
    <div className="flex flex-col p-8 ">
      {/* <section onClick={handleClick} className="flex justify-end">
        Add
      </section> */}
      <div className="grid grid-col gap-8">
        <h1 className="text-5xl playfair font-bold">Dashboard</h1>
        {data.map((item, index) => {
          return <List key={index} list={item.toDo} />;
        })}
      </div>
    </div>
  );
}

const Important = () => {
  return (
    <div className="p-4">
      <h4>Total Tasks</h4>
    </div>
  );
};

const List = (props: any) => {
  return (
    <section className="p-4 pr-8 border min-h-64  border-zinc-300  dark:border-zinc-800   rounded-lg max-w-xs w-full">
      <h1 className="text-2xl font-bold mb-4 ">Final Countdown</h1>
      {/* <p className="text-sm text-zinc-400">
          Deploy your new project in one-click.
        </p>
        <Input type="" placeholder="Name" /> */}
      <ul className="flex flex-col gap-4">
        {props.list.map((item: string, index: number) => {
          return (
            <div key={index} className="flex gap-4 text-sm items-center">
              <Checkbox />
              <p>{item}</p>
            </div>
          );
        })}
      </ul>
    </section>
  );
};
