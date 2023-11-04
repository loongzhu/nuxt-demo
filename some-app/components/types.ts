export interface bar {
  id: string;
  name: string;
  start: string;
  end: string;
}

export interface info {
  time: string;
  date: string;
  order: string;
  name: string;
}

export interface item {
  id: string;
  title: string;
  info: info;
  bars: bar[];
}

export declare const default_width = 81;
