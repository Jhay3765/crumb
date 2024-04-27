"use client";
import React, { useEffect, useRef, useState } from "react";
import { MinusCircle, Plus, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
const dat = [
  {
    id: "1",
    title: "Grocery Shopping",
    toDo: ["Broccoli", "Apple", "Tomato"],
  },
  { id: "2", title: "Grocery Shopping", toDo: ["Broccoli", "Apple", "Tomato"] },
];

type Data = {
  id: string;
  title: string;
  toDo: string[];
};

export default function Content() {
  const [open, setOpen] = React.useState(false);
  const [newToDo, setNewToDo] = useState("");
  const [data, setData] = useState<Data[]>(dat);
  const [newHeading, setNewHeading] = useState<string>("");

  const handleAddList = () => {
    if (newHeading.trim() !== "") {
      setData([
        ...data,
        {
          id: "1",
          title: newHeading,
          toDo: ["Add some new items top right ! "],
        },
      ]);
      setNewHeading("");
    }
  };

  const handleToDoClick = () => {
    if (newHeading.trim() !== "") {
      setData([
        ...data,
        {
          id: "1",
          title: newHeading,
          toDo: ["Add some new items top right ! "],
        },
      ]);
      setNewHeading("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "heading") {
      setNewHeading(e.target.value);
    }
  };

  return (
    <div className="flex flex-col p-4 sm:p-8 ">
      <section className="flex justify-between items-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/tasks">Tasks</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Dialog open={open} onOpenChange={setOpen}>
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer flex items-center gap-2">
              Add New <Plus size={18} />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DialogTrigger asChild>
                <Button className="w-full" variant="outline">
                  Task
                </Button>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add a new task</DialogTitle>
              <DialogDescription>Omitted </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Title
                </Label>
                <Input
                  type="text"
                  name="heading"
                  value={newHeading}
                  onChange={handleInputChange}
                  id="name"
                  placeholder="Heading"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogClose>
              <button onClick={handleAddList}>Add List</button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </section>
      <div className="grid grid-col md:grid-cols-3 gap-8 mt-8">
        {data.map((item, index) => {
          return (
            <List
              key={index}
              list={item.toDo}
              heading={item.title}
              handleClick={handleToDoClick}
              newToDo={newToDo}
              setNewToDo={setNewToDo}
            />
          );
        })}
      </div>
    </div>
  );
}

const List = (props: {
  list: string[];
  heading: string;
  handleClick: () => void;
  newToDo: string;
  setNewToDo: any;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "newToDo") {
      props.setNewToDo(e.target.value);
    }
  };

  const handleEdit = () => {
    setEditMode(!editMode);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.list.push(props.newToDo);
    props.setNewToDo("");
    setOpen(true);
  };
  const handleAddNew = () => {
    setOpen(true);
    if (inputRef.current) {
      inputRef.current.focus(); // Focus on the input field when plus icon is clicked
    }
  };
  const handleCancel = () => {
    setOpen(false);
    props.setNewToDo("");
  };
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        if (props.newToDo.trim() === "") {
          setOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props.newToDo]);

  const [open, setOpen] = useState(false);
  return (
    <section className=" shadow-lg  border min-h-[400px]  rounded-lg bg-stone-100 dark:bg-zinc-950 w-full">
      <div className="flex justify-between items-center p-4  ">
        <h1 className="text-xl font-medium ">{props.heading}</h1>

        <aside className="space-x-2">
          {editMode && (
            <Button variant={"outline"} onClick={handleEdit}>
              {" "}
              Save{" "}
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button onClick={handleEdit} variant={"outline"}>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Delete</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </aside>
      </div>
      <Separator />
      <section className="p-4">
        <ul className="flex flex-col gap-4  ">
          {props.list.map((item: string, index: number) => {
            return (
              <>
                {!editMode && (
                  <div key={index} className="flex gap-4  items-center ">
                    <Checkbox />
                    <p>{item}</p>
                  </div>
                )}
                {editMode && (
                  <div
                    key={index}
                    className="flex  justify-between  items-center "
                  >
                    <section className="flex gap-4 items-center">
                      <Checkbox />
                      <p>{item}</p>
                    </section>

                    <MinusCircle size={15} />
                  </div>
                )}
              </>
            );
          })}
        </ul>
        <form onSubmit={handleSubmit}>
          <div
            className={`${
              !open ? "scale-0 " : "scale-100 mt-2"
            } flex gap-4 text-sm items-center `}
          >
            <Checkbox />
            <Input
              ref={inputRef}
              onChange={handleInputChange}
              value={props.newToDo}
              name="newToDo"
              type="text"
              placeholder="New"
            />
            <section className="flex gap-4">
              <button type="submit">Add</button>
              <div className="cursor-pointer" onClick={handleCancel}>
                Cancel
              </div>
            </section>
          </div>
        </form>
        {editMode ? (
          <Button
            variant={"ghost"}
            className="w-full mt-2"
            onClick={handleAddNew}
          >
            <Plus />
          </Button>
        ) : (
          ""
        )}
      </section>
    </section>
  );
};
