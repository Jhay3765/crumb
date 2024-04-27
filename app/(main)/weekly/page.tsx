"use client";
import { Separator } from "@/components/ui/separator";
import { Edit, MinusCircle, X, Delete } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DialogClose,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slash } from "lucide-react";

import { Label } from "@/components/ui/label";
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Home() {
  return (
    <main className="p-4 sm:p-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/weekly">Weekly Schedule</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* <h1 className="text-3xl font-bold mt-5 playfair mb-8">Your Week</h1> */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-8 ">
        {daysOfWeek.map((day, index) => {
          return <Day key={index} day={day} />;
        })}
      </ul>
    </main>
  );
}

const Day = (props: { day: string }) => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([] as string[]);
  const { toast } = useToast();

  const [editMode, setEditMode] = useState(false);

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };
  useEffect(() => {
    setTasks(["Tasks", ...tasks]);
  }, []);
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
    setEditMode(false);

    toast({
      title: "Scheduled: Catch up ",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  };
  const today = "Tuesday";

  return (
    <div className="min-h-72 w-full  border p-4 rounded-md  shadow-sm ">
      <section className="flex justify-between items-center">
        <h2
          className={`${
            props.day == today ? "font-bold text-amber-500" : ""
          } text-2xl py-1 pb-3`}
        >
          {props.day}
        </h2>
        <Dialog>
          <DialogTrigger asChild>
            <Edit className="cursor-pointer" size={18} />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-center text-3xl">
                {props.day}
              </DialogTitle>
              <DialogDescription>
                Make changes to your day here. Click save when youre done.
              </DialogDescription>
            </DialogHeader>
            <Button onClick={() => setEditMode(!editMode)}>
              {" "}
              {editMode ? "Cancel" : "Add New"}{" "}
            </Button>
            <div className="grid gap-4 py-4">
              {tasks.map((task, index) => {
                return (
                  <div key={index} className="flex gap-2 items-center ">
                    <Label htmlFor="name" className="">
                      *
                    </Label>
                    <Input id="name" defaultValue={task} className="w-full" />
                    <Delete />
                  </div>
                );
              })}
              {editMode && (
                <div className="flex gap-2 items-center ">
                  <Label htmlFor="name" className="">
                    *
                  </Label>
                  <Input
                    onChange={handleTaskChange}
                    id="name"
                    placeholder="Enter Task Here"
                    className="w-full"
                  />
                  <Delete />
                </div>
              )}
            </div>
            <DialogFooter>
              <DialogClose>
                <Button onClick={addTask} type="submit">
                  Save changes
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
      <Separator />
      {tasks.map((task, index) => {
        return (
          <div key={index}>
            <p className="py-1"> {task} </p>
            <Separator />
          </div>
        );
      })}
    </div>
  );
};

const Oddy = (props: { day: string }) => {
  const [tasks, setTasks] = useState([] as string[]);
  useEffect(() => {
    setTasks(["Workout", ...tasks]);
  }, []);
  const [editMode, setEditMode] = useState(false);
  const today = "Tuesday";
  const handleEdit = () => {};
  return (
    <div className="h-64 w-full max-w-xs">
      <section className="flex justify-between items-center">
        <h2
          className={`${
            props.day == today ? "font-bold text-yellow-600" : ""
          } text-2xl py-1`}
        >
          {props.day}
        </h2>
        <div onClick={() => setEditMode(!editMode)}>
          {editMode ? <X size={18} /> : <Edit size={18} />}
        </div>
      </section>
      <Separator />
      {tasks.map((task, index) => {
        return (
          <>
            {!editMode ? (
              <div>
                <p className="py-1"> {task} </p>
                <Separator />
              </div>
            ) : (
              <div className="w-full">
                <section className="flex justify-between items-center">
                  <input placeholder={task} className="py-1 w-full" />

                  <MinusCircle size={18} />
                </section>
                <Separator />
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};
