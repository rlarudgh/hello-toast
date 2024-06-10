import {
  useToastState,
  type ToastType,
  type ToastPosition,
} from "@stores/toast";
import { TOAST_TIMEOUT } from "@constants";

export const useToast = () => {
  const { data: toastList, setToastMessage, removeToast } = useToastState();

  const showToast = (
    message: string,
    type: ToastType = "default",
    position: ToastPosition = "top-right"
  ) => {
    setToastMessage(message, type, position);

    // setTimeout(() => {
    //   removeToast();
    // }, TOAST_TIMEOUT);
  };

  return { toastList, showToast } as const;
};
