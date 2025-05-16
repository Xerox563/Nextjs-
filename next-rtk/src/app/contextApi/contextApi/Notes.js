/*
-> Powerfel festure for managing the global states or shared data in a react app without having to prop drill(passing props manually through every level of component tree)
When to use Context API
 -> when we need to share the state between the components.
 -> when we want to avoid the prop drilling through deeply nested componenets.
:: Three Main Parts 
1. createContext()
   -> Creates the context Object(place to hold shared information)
2. <Context.Provider value="password">
     <Component>
   </Context.Provider>   

   // value refers to the data you want to share 
   // Everything inside this <Component/> can access the value (data)
3. useContext(context) -> In order to access the data in the context.   
*/