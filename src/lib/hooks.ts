// "use client";
// import { UseSelector, useDispatch, useSelector, useStore } from "react-redux";
// import type { AppDispatch, AppStore, RootState } from "./store";
// export const UseAppDispatch = useDispatch.withTypes<AppDispatch>();
// export const UseAppSelector = useSelector.withTypes<RootState>();
// export const UseAppStore = useStore.withTypes<AppStore>();
import {
  useDispatch as useDispatchOriginal,
  useSelector as useSelectorOriginal,
  useStore as useStoreOriginal,
} from "react-redux";
import type { AppDispatch, AppStore, RootState } from "./store";

export const useAppDispatch = () => useDispatchOriginal<AppDispatch>();
export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected
) => useSelectorOriginal<RootState, TSelected>(selector);
export const UseAppStore = () => useStoreOriginal<AppStore>();
