import type { IToastMessage } from "@stores/toast";
import type { PropsWithChildren } from "react";
import { css } from "../../../styled-system/css";
import { useProgress } from "@hooks";

export const Toast = ({
  id,
  message,
  type,
  position,
  children,
}: PropsWithChildren<IToastMessage>) => {
  const { progress } = useProgress();

  return (
    <div
      className={css({
        width: "300px",
        height: "30px",
        position: "relative",
        padding: "1rem",
        marginBottom: "1rem",
        fontSize: "0.875rem",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        })}
      >
        <span>{message}</span>
        {children}
      </div>
      <div
        className={css({
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "0.25rem",
          backgroundColor: "gray",
        })}
      >
        <div
          className={css({
            height: "100%",
            backgroundColor: "green",
            transition: "width 0.1s linear",
          })}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
