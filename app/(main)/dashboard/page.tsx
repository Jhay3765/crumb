import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
const tasks = ["Spongebob squarepants concert", "Code", "Test"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

export default function Home() {
  return (
    <main className="p-4 sm:p-8">
      <h1 className="text-4xl tracking-tighter playfair font-medium ">
        Dashboard
      </h1>
      <ul className="flex flex-wrap mt-8 gap-8  ">
        <Info name={"Total Tasks"} count={18} />
        <Info name={"Upcoming Events"} count={18} />
      </ul>
      <section className="mt-16 max-w-xl">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-4xl  font-bold tracking-tighter mb-4">Today</h2>

          <Plus size={20} />
        </div>
        <Separator />
        <div className="py-2">Marine Biology 100</div>
        <Separator />
        <div className="py-2">Dentist Appointment</div>
      </section>
      <div className="mt-16  ">
        <h2 className=" font-bold text-3xl playfair  ">Your next 5 days</h2>
        <ul className="mt-4 w-full flex-wrap gap-8   flex  ">
          {days.map((day, index) => {
            return <NextDay key={index} day={day} />;
          })}
        </ul>
      </div>
    </main>
  );
}

const NextDay = (props: { day: string }) => {
  const date = "Sunday";
  return (
    <div className="w-full   ">
      <section className="flex items-center  w-full justify-between sm:px-4  py-2  ">
        <h3
          className={`${
            date == props.day ? "text-amber-600" : ""
          }  text-2xl  font-bold`}
        >
          {props.day}
        </h3>
        <p className="text-sm text-secondary">{"04/23"}</p>
      </section>

      <Separator />

      {tasks.map((task, index) => {
        return (
          <div className="py-2 px-4   " key={index}>
            {task}
          </div>
        );
      })}
    </div>
  );
};

const Info = (props: { name: string; count: number }) => {
  return (
    <div className="border rounded-md p-4 sm:max-w-sm w-full dark:bg-stone-950 shadow-sm ">
      <section className="flex justify-between">
        <h1 className="font-bold ">{props.name}</h1>
        <Plus size={18} />
      </section>
      <p className="text-4xl mt-2"> {props.count} </p>
      <p className="text-xs mt-2">Number of the {props.name} you have </p>
    </div>
  );
};

const NextDayOther = (props: { day: string }) => {
  const date = "Sunday";
  return (
    <>
      <div className=" w-full border-r last:border-0">
        <h3
          className={`${
            date == props.day ? "text-amber-600" : ""
          }  px-4 py-2  text-lg font-medium`}
        >
          {props.day}
        </h3>
        <Separator />
        {tasks.map((task, index) => {
          return (
            <>
              <div className="py-2 px-4   " key={index}>
                {" "}
                {task}
              </div>
              <Separator />
            </>
          );
        })}
      </div>
    </>
  );
};
