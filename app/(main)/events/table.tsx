"use client";
import { useState } from "react";
import * as React from "react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, SortAsc } from "lucide-react";
import { Events } from "../../events";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type Title = {
  id: string;
  date: string;
  tag: string;
  title: string;
  // recurring: boolean;
};

const data: Title[] = [
  {
    id: "m5gr84i9",
    tag: "Homework",
    title: "Biology Module 4",
    date: "2024-04-15",
  },
  {
    id: "3u1reuv4",
    tag: "Event",
    title: "Drake Concert",
    date: "2024-04-20",
  },
  {
    id: "derv1ws0",
    tag: "Concert",
    title: "Marys Birthday",
    date: "2024-04-25",
  },
  {
    id: "5kma53ae",
    tag: "title",
    title: "Credit Card Due",
    date: "2024-05-05",
  },
  {
    id: "bhqecj4p",
    tag: "Homework",
    title: "Celeste Coming over",
    date: "2024-04-30",
  },
  {
    id: "bhqecj4p",
    tag: "Homework",
    title: "Celeste Coming over",
    date: "2024-04-30",
  },
  {
    id: "bhqecj4p",
    tag: "Homework",
    title: "Celeste Coming over",
    date: "2024-04-30",
  },
  {
    id: "bhqecj4p",
    tag: "Homework",
    title: "Celeste Coming over",
    date: "2024-04-30",
  },
  {
    id: "bhqecj4p",
    tag: "Homework",
    title: "Celeste Coming over",
    date: "2024-04-30",
  },

  {
    id: "bhqecj4p",
    tag: "Homework",
    title: "Celeste Coming over",
    date: "2024-04-30",
  },
  {
    id: "bhqecj4p",
    tag: "Homework",
    title: "Celeste Coming over",
    date: "2024-04-30",
  },
  {
    id: "bhqecj4p",
    tag: "Homework",
    title: "Celeste Coming over",
    date: "2024-04-30",
  },
  {
    id: "bhqecj4p",
    tag: "Homework",
    title: "Celeste Coming over",
    date: "2024-04-30",
  },
  {
    id: "bhqecj4p",
    tag: "Homework",
    title: "Celeste Coming over",
    date: "2024-04-30",
  },
];

export default function Table() {
  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 10;
  const startIndex = currentPage * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const eventsOnPage = data.slice(startIndex, endIndex);
  const pageAmount = Math.ceil(data.length / eventsPerPage) - 1;
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(pageAmount, prevPage + 1));
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full my-8">Add New</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <section className="flex justify-between mb-4">
        <Button variant="outline">Delete</Button>
        <Button variant="outline">Edit</Button>
      </section>
      <main className="rounded-lg border shadow-lg ">
        <Header />
        {eventsOnPage.map((row, index) => (
          <Row key={index} {...row} />
        ))}
      </main>
      <aside className="flex justify-between items-center">
        <p className="text-secondary text-sm">Showing Page 1 out of 5</p>
        <div className="flex justify-end gap-4 px-8 py-4">
          <Button
            variant="outline"
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={handleNextPage}
            disabled={currentPage === pageAmount}
          >
            Next
          </Button>
        </div>
      </aside>
    </div>
  );
}

const Row = ({ id, date, tag, title }: Title) => {
  return (
    <>
      <div className="flex justify-between items-center font-medium px-8 text-sm">
        <section className="gap-6 flex items-center w-64 2xl:w-[600px]    py-4">
          <Checkbox />
          <h2 className=" ">{title}</h2>
        </section>

        <h2 className="   w-24 ">{date}</h2>
        <div className={`w-36  hidden sm:flex  justify-between items-center`}>
          <p> {tag}</p>
          <Dialog>
            <DialogTrigger asChild>
              <Edit className="cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when youre done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    defaultValue="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Separator />
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="w-64 2xl:w-[600px] ">Name</h1>
        <div className="w-24 flex gap-2 items-center  ">
          <h1>Date</h1>
          <SortAsc size={20} />
        </div>
        <h1 className="w-36  hidden sm:flex  ">Tag</h1>
      </div>
      <Separator />
    </>
  );
};
