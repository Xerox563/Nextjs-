/* 
-> State
Its an object that stores data your app needs to remember .

-> Action
Its just an plain object that tells redux what happened (and sometimes includes the data)
In simple words , tells redux what to do . also using payload gives extra info like how much to add
"I clicked the + button!" (command)
:: Redux Toolkit automatically creates an action like this:
{ type: 'counter/increment' }

-> Reducer
Its a function that says how the state would change based on the action .
increment: (state) => {
  state.value += 1
}
"Okay, increase the counter by 1" (logic)  
Mind Map ::

| What        | Where                                         | What it does                                   |
| ----------- | --------------------------------------------- | ---------------------------------------------- |
| **Action**  | Auto-created: `{ type: 'counter/increment' }` | Tells Redux what to do                         |
| **Reducer** | `(state) => { state.value += 1 }`             | Changes the state when that action is received |

Working ::

@@ dispatch(increment()) // 🔁 dispatches the action { type: 'counter/increment' }

👉 Redux looks for a matching reducer
🔍 It finds:
increment: (state) => { state.value += 1 }

✅ Then updates the state.


*/

