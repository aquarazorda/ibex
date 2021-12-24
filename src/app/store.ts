import { createGlobalState } from "react-hooks-global-state";
// import { data } from "../data/filter.json";

// TODO move these types into general types file
interface FilterItem {
  [key: string]: any[];
}

// const filterItemsForState: FilterItem =
//   data.reduce((acc, elem) => ({ ...acc, [elem.id]: elem.value }), {});

const { setGlobalState, useGlobalState } = createGlobalState({});

export { setGlobalState, useGlobalState };