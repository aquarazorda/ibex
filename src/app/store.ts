import { createGlobalState } from "react-hooks-global-state";
import { elements } from "../data/filter.json";

// TODO move these types into general types file
interface FilterItem {
  [key: string]: any[];
}

const filterItemsForState: FilterItem =
  elements.reduce((acc, elem) => ({ ...acc, [elem.id]: elem.value }), {});

const { setGlobalState, useGlobalState } = createGlobalState({
  filters: filterItemsForState
});

export { setGlobalState, useGlobalState };