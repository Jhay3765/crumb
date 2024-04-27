export type Events = {
  id: string;
  day: string;
  tag: string;
  title: string;
  recurring: boolean;
};

export type Task = {
  name: string;
  tasks: string[];
};

type Widget = {
  weather: boolean;
};
export type Settings = {
  widgets: Widget;
};
