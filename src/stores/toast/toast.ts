import type { IToast, ToastPosition, ToastType } from ".";
import { create } from "zustand";

export const useToastState = create<IToast>((set) => ({
  data: [],
  removeToast: () =>
    set(({ data }) => {
      data.shift();

      return {
        data,
      };
    }),
  setToastMessage: (
    message: string,
    type: ToastType,
    position: ToastPosition
  ) =>
    set(({ data }) => {
      const length = data.length > 0 ? data[data.length - 1].id : -1;
      return {
        data: [
          ...data,
          {
            id: length + 1,
            message,
            type,
            position,
          },
        ],
      };
    }),
}));
