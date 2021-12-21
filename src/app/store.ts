import { createGlobalState } from "react-hooks-global-state";
import { elements } from "../data/filter.json";

const filterItemsForState = elements.map(elem => ({ id: elem.id, value: elem.value }))

const { setGlobalState, useGlobalState } = createGlobalState({
  filters: filterItemsForState
});

export { setGlobalState, useGlobalState };