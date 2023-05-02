import { createStore } from "./store";

export const AppStore = createStore({
  isAuthenticated: false,
  user: {},
  requestToken: "",
  sessionId: "",
  keyword: "",
  notification: {
    isShow: false,
    type: "info",
    message: "",
  },
});

export const useAppStore = AppStore.useStore;
