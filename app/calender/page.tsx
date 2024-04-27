"use client";

import React, { useState, useCallback } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Sidebar from "../components/sidebar";
import NavBar from "../components/nav-bar";
import { Button } from "@/components/ui/button";
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
import { Label } from "@/components/ui/label";
const localizer = momentLocalizer(moment);

const demoEvents: any[] = [
  {
    title: "Demo Event",
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
  },
];

export default function MyCalendar() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [openDialog, setOpenDialog] = useState(false);

  const onNavigate = useCallback((newDate: Date) => {
    setCurrentDate(newDate); // Update current date when navigating
  }, []);

  const customToolbar = () => {
    return (
      <div className="rbc-toolbar">
        <span className="rbc-btn-group">
          {/* Button to go back one month */}
          <button
            onClick={() =>
              onNavigate(moment(currentDate).subtract(1, "month").toDate())
            }
          >
            Back
          </button>
          {/* Button to go to today's date */}
          <button onClick={() => onNavigate(new Date())}>Today</button>
          {/* Button to go forward one month */}
          <button
            onClick={() =>
              onNavigate(moment(currentDate).add(1, "month").toDate())
            }
          >
            Next
          </button>
        </span>
        <span className="rbc-toolbar-label">
          {/* Display the current month */}
          {moment(currentDate).format("MMMM YYYY")}
        </span>
      </div>
    );
  };

  const handleClick = useCallback((event: any) => {
    console.log(event.name);
    setOpenDialog(true);
  }, []);

  return (
    <div className="w-full">
      <NavBar />
      <div style={{ height: 600 }} className="p-4">
        <Calendar
          date={currentDate}
          events={demoEvents}
          localizer={localizer}
          onNavigate={onNavigate}
          defaultView={Views.MONTH} // Display only the month view
          components={{
            toolbar: customToolbar,
          }}
          selectable
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleClick} // Triggered when a slot is selected
        />
      </div>
      <Dialog>
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
  );
}
