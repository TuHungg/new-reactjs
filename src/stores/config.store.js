import { createStore } from "./store";
export const ConfigsStore = createStore({
  activeTitle: "",
});

export const useConfigsStore = ConfigsStore.useStore;
