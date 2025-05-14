"use client";
import { Provider } from "react-redux";
import { store } from "./store";

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

/* 
* Redux follows a unidirectional data flow:
-> View dispatches an action
-> Reducer receives the action and updates the state
-> View re-renders based on the new state
*/

/*
* This file is like a main power switch for Redux in your app.
Imagine Redux is your app's memory — it stores all the shared data.
But for your app to actually use that memory, you need to plug it in.
This file wraps your entire app with a special tag (<Provider>) that gives every page and component the ability to:
-> Access the shared data (using useSelector)
-> Update the shared data (using useDispatch)

Extra :: 
You need to wrap your app in something that gives every component access to the Redux store (memory).
What it does:
-> Think of this like "plugging in" Redux so your components can use it.
-> It takes child components
-> children refers to any nested components or elements that are passed into this component.
-> Wraps them in the Redux <Provider> to give them access to the store
*/
