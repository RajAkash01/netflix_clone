import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { ImageReducer } from './ImageSlice';
import { PlanReducer } from './PlansSlice';
import { UserReducer } from './UserSlice';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    plan: PlanReducer,
    image:ImageReducer
  },

  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
      //This removes warning  | for serizable check
    }),
    // ...otherMiddlewares,
  ],
  // devTools:
  //   process.env.NODE_ENV !== 'production' ? { CONFIG_GOES_HERE } : false,
});
export const Dispatch = store.dispatch;
