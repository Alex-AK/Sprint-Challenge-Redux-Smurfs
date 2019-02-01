1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map(), .reduce,() and .filter() do not alter the original array
Object.assign() or the spread operator

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store holds a master copy of state. It is immutable. Any time data is updated, the specific state is copied, then altered, then returned to the with the relevant updates.
Reducer is a large holder for if else statements. It holds a list of cases, checks for a match in the action type dispatched to it, and runs the logic that matches the incoming state. It holds the logic which copies and changes the relevant state based on the action type that comes in.
Actions are an object dispatched by an action creator. The action creator is a function that can be called on an event. When invoked, the action creator dispatches an action object which holds an action type and a payload. The action type is used to run through the reducers cases and execute the correct logic. The payload can be set to nothing, or hold relevant data that needs to be received from the app to perform logic on.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is held in the store and can be passed down to any component without drilling through every component along the way. It can skip as many components to get directly to the component the state is needed in. Redux provides the store, which is considered global.
Component state can be held in class components in react. This is appropriate when the state for a component is only needed in that component and is not relevant to the rest of the components.

4.  What is middleware?

Middleware extends the functionality of redux functions. Redux is synchronous in nature. With middleware, we can make asynchronous calls to an API in our action creators and dispatch actions when the call gets a response. Middleware can also add other functionality such as authentication support and debugging tools.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a middleware that extends the functionality of redux to allow for asynchronous calls. A good use for thunk is to make api calls in the action creators and only dispatch the action when the call receives a response.

6.  Which `react-redux` method links up our `components` with our `redux store`?

connect()();
