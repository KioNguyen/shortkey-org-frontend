import { HomeSide } from "@/constant/home-side.enum";
import { create } from "zustand";

interface HomeSideState {
  side: HomeSide;
  open: boolean;
  setOpen: (open: boolean) => void;
  switchSide: (side: HomeSide) => void;
}

export const useHomeSideStore = create<HomeSideState>((set) => ({
  side: HomeSide.setting,
  open: false,
  switchSide: (side) => set(() => ({ side: side })),
  setOpen: () => set((state) => ({ open: !state.open })),
}));
