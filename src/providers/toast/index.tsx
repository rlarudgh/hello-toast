"use client";
import { Toast } from "@components/toast";
import { useToastState } from "@stores/toast";
import { createPortal } from "react-dom";

const ToastProvider = () => {
  const { data } = useToastState();

  console.log(data);

  return createPortal(
    <div className="toast">
      {data.map((item) => (
        <Toast key={item.id} {...item} />
      ))}
    </div>,
    document.body
  );
};

export default ToastProvider;
