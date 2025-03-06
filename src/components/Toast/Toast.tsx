import { useEffect, useState } from "react";
import { useBookContext } from "../../hooks/useBookContext";
import { ToastStatus } from "../../types/Toast.type";
import style from "./Toast.module.scss";
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
          className={cn(style.toast_message, {
            [style.success]: toast.status === ToastStatus.Success,
            [style.error]: toast.status === ToastStatus.Error,
          })}>
          {toast.message}
        </div>
      )}
    </>
  );
};
