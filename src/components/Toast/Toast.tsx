import { useEffect } from "react";
import s from "./Toast.module.scss";
import { useBookContext } from "../../hooks/useBookContext";
import { ToastStatus } from "../../types/Toast.type";
import cn from "classnames";

export const Toast = () => {
  const { toast, setToast } = useBookContext();

  useEffect(() => {
    // const timeout = setTimeout(() => {
    //   setIsToast(true);
    // }, 3000);
    //   return () => {
    //     clearTimeout(timeout);
    //     setToast({ status: ToastStatus.Default, message: "" });
    //     setIsToast(false);
    //   };
  }, [toast, setToast]);

  return (
    <>
      {toast.status !== ToastStatus.Default && (
        <div
          className={cn(s.toast_message, {
            [s.success]: toast.status === ToastStatus.Success,
            [s.error]: toast.status === ToastStatus.Error,
          })}>
          <p>{toast.message}</p>
        </div>
      )}
    </>
  );
};
