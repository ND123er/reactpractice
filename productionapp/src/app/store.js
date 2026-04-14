
import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import cartReducer from "../features/cart/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = { key: "cart", storage };

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: persistReducer(persistConfig, cartReducer)
  },
  middleware: (gDM) => gDM().concat(api.middleware)
});

export const persistor = persistStore(store);
export { store };
