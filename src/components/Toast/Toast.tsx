import { useEffect, useState } from "react";
import s from "./Toast.module.scss";
import { useBookContext } from "../../hooks/useBookContext";
import { ToastStatus } from "../../types/Toast.type";
import cn from "classnames";

export const Toast = () => {
  const { toast, setToast } = useBookContext();
  const [isToast, setIsToast] = useState(false);

  useEffect(() => {
    if (toast.status !== ToastStatus.Default) {
      setIsToast(true);

      const timeout = setTimeout(() => {
        setIsToast(false);
        setToast({ status: ToastStatus.Default, message: "" });
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [toast, setToast]);

  return (
    <>
      {isToast && (
        <div
          className={cn(s.toast_message, {
            [s.success]: toast.status === ToastStatus.Success,
            [s.error]: toast.status === ToastStatus.Error,
          })}>
          {toast.message}
        </div>
      )}
    </>
  );
};
