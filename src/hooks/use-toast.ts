import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

type Toast = Omit<ToasterToast, "id">;

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type ToastState = {
  toasts: ToasterToast[];
};

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: ToastState, action: ToastAction): ToastState => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      if (!toastId) {
        return {
          ...state,
          toasts: state.toasts.map((toast) => ({
            ...toast,
            open: false,
          })),
        };
      }

      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === toastId
            ? {
                ...toast,
                open: false,
              }
            : toast,
        ),
      };
    }

    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }

      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.toastId),
      };

    default:
      return state;
  }
};

type ToastAction =
  | {
      type: "ADD_TOAST";
      toast: ToasterToast;
    }
  | {
      type: "DISMISS_TOAST";
      toastId?: string;
    }
  | {
      type: "REMOVE_TOAST";
      toastId?: string;
    };

const listeners = new Set<(state: ToastState) => void>();

let memoryState: ToastState = { toasts: [] };

const dispatch = (action: ToastAction) => {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
};

type ToastHandlers = {
  id: string;
  dismiss: () => void;
  update: (props: Toast) => void;
};

export const toast = ({ ...props }: Toast): ToastHandlers => {
  const id = Math.random().toString(36).substring(2, 9);

  const update = (updatedProps: Toast) =>
    dispatch({
      type: "ADD_TOAST",
      toast: {
        ...memoryState.toasts.find((toastItem) => toastItem.id === id),
        ...updatedProps,
        id,
      } satisfies ToasterToast,
    });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) {
          addToRemoveQueue(id);
        }
      },
    },
  });

  return {
    id,
    dismiss: () => dismissToast(id),
    update,
  };
};

const dismissToast = (toastId?: string) => {
  dispatch({
    type: "DISMISS_TOAST",
    toastId,
  });
};

export const useToast = () => {
  const [state, setState] = React.useState<ToastState>(memoryState);

  React.useEffect(() => {
    listeners.add(setState);
    return () => listeners.delete(setState);
  }, []);

  return {
    ...state,
    toast,
    dismiss: dismissToast,
  };
};
