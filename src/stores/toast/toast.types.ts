export type ToastPosition =
  | "top-right"
  | "top-center"
  | "top-left"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";

export type ToastType = "success" | "normal" | "warning" | "danger" | "default";

export interface IToastMessage {
  id: number;
  message: string;
  type: ToastType;
  position?: ToastPosition;
}

export interface IToast {
  data: IToastMessage[];
  setToastMessage: (
    message: string,
    type: ToastType,
    position: ToastPosition
  ) => void;
  removeToast: () => void;
}
