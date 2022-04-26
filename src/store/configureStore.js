// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "./middleware/api";
// import functions from "./middleware/functions";
// import { functions } from "lodash";
import logger from "./middleware/logger";
import toast from "./middleware/toast";

// import reducer from "./bugs";
import reducer from "./reducer";

export default function () {
  // const store = createStore(reducer, devToolsEnhancer({ trace: true }));
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: "console" }),
      toast,
      api(),
    ],
  });
  // return store;
}
