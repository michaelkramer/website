import { configureStore, createSerializableStateInvariantMiddleware, isPlain } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { settingsReducer } from "./Settings/reducer";

function isIterable(obj: any) {
  // checks for null and undefined
  if (!obj) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
}
// Augment middleware to consider Immutable.JS iterables serializable
const isSerializable = (value: any) => isIterable(value) || isPlain(value);

const getEntries = (value: any) => (isIterable(value) ? value.entries() : Object.entries(value));

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
});

export const reducer = {
  settings: settingsReducer
};

export const store = configureStore({
  reducer,
  middleware: [thunkMiddleware, serializableMiddleware],
});

export const storeWInitialState = (preloadedState: any) => (configureStore({
  reducer,
  preloadedState,
  middleware: [thunkMiddleware, serializableMiddleware],
}));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
