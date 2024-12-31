import { StateCreator } from 'zustand';

export interface DateSlice {
  date: Date;
  setEventDate: (date: string) => void;
  setEventTime: (hour: string) => void;
  getDate: () => string;
  getTime: () => string;
}

export const useDateSlice: StateCreator<DateSlice> = (set, get) => ({
  date: new Date(),
  setEventDate: (date) =>
    set((state) => {
      const eventDate = new Date(date + 'T00:00:00Z');
      const year = eventDate.getUTCFullYear();
      const month = eventDate.getUTCMonth();
      const day = eventDate.getUTCDate();

      const newDate = new Date(state.date);
      newDate.setUTCFullYear(year, month, day);
      return { date: newDate };
    }),
  setEventTime: (hour) =>
    set((state) => {
      const [hours, minutes] = hour.split(':');

      const timeDate = new Date(state.date);

      timeDate.setUTCHours(Number(hours), Number(minutes));
      return { date: timeDate };
    }),

  getDate: () => {
    return get().date.toISOString().split('T').at(0)!;
  },
  getTime: () => {
    const date = get().date.getUTCHours().toString().padStart(2, '0');
    const minutes = get().date.getUTCMinutes().toString().padStart(2, '0');
    return `${date}:${minutes}`;
  }
});
