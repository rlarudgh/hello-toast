"use client";

import { useToast } from "@hooks";
import { Suspense } from "react";
import { css } from "../../styled-system/css";

export default function IndexPage() {
  const { showToast } = useToast();

  const handleOnClick = () => {
    showToast("hello");
  };

  return (
    <Suspense>
      <button className={_Button} onClick={handleOnClick}>
        누르면 Toast가 보여요
      </button>
    </Suspense>
  );
}

const _Button = css({
  color: "red",
});
