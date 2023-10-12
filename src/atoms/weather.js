import { atom } from "recoil";

export const cityState = atom({
  key: "cityState",
  default: "",
});

export const weatherState = atom({
  key: "weatherState",
  default: {},
});
