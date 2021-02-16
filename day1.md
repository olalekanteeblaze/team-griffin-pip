React classes vs functional components

- The biggest difference between class and functional components is that functional components capture the props at render time.
- One of the advantages of using hooks is that it helps avoid unnecessary nesting of the component hierarchy
- With hooks, it's easier to reuse logic across components. For example managing side effects, we need to update the state appropriately based on the lifecycle hooks but with hooks, it can simply be done with the useEffect hook.
- With functional components, developers don't have to worry about the this context and having to bind it
- Optimisation is easier for the compiler with functional components more than class component

Other considerations

- There are no hooks equivalent of getSnapshotUpdate() and componentDidCatch lifecycle hooks
- Some third-party libraries might not be compatible with functional components
- In functional components, all function declarations are recreated upon re-render  but are stored in the class prototype

How React hooks works

### The Dispatcher

- The dispatcher is the shared object that contain the hook functions. It will be dynamically allocated or cleaned up based on the rendering phase of ReactDOM, and it will ensure that the user doesn’t access hooks outside a React component.
- The hooks are enabled/disabled by a flag called enableHooks right before we render the root component by simply switching to the right dispatcher; this means that technically we can enable/disable hooks at runtime.
- When we’re done performing the rendering work, we nullify the dispatcher and thus preventing hooks from being accidentally used outside ReactDOM’s rendering cycle.
- The dispatcher is resolved in each and every hook call using a function called resolveDispatcher(). Like I said earlier, outside the rendering cycle of React this should be meaningless, and React should print the warning message: “Hooks can only be called inside the body of a function component”

### The hook queue

- Behind the scene, hooks are represented as node which are linked together in their calling order. A hook has several properties which are:
    1. It's initial state is created by the initial render
    2. It's state can be updated on the fly
    3. React would remember the the hook's state in future order
    4. React would know which fiber the does the hook belong to

We think of the state as a plain object but with hooks, the state is more of a queue where each node represents a single model of the state

```jsx
{
  memoizedState: 'foo',
  next: {
    memoizedState: 'bar',
    next: {
      memoizedState: 'bar',
      next: null
    }
  }
}
```

This is the Hook type from the react codebase 

```jsx
export type Hook = {
  memoizedState: any,

  baseState: any,
  baseUpdate: Update<any> | null,
  queue: UpdateQueue<any> | null,

  next: Hook | null,
};
```

Before each and every function Component invocation, a function named prepareHooks() is gonna be called, where the current fiber and its first hook node in the hooks queue are gonna be stored in global variables. This way, any time we call a hook function (useXXX()) it would know in which context to run.

Once an update has finished, a function named finishHooks() will be called, where a reference for the first node in the hooks queue will be stored on the rendered fiber in the memoizedState property. This means that the hooks queue and their state can be addressed externally

### State Hooks

The useState hooks uses the useReducer hooks behind the scene. It provides it with a pre-defined reducer handler. This means that the return value of the useState hook Is the reducer state and the dispatcher function.

### Effect Hooks

Effect hooks are created during render time but they run after painting. They're usually destroyed right before the next painting and called in order of their definition.

Accordingly, there should be another an additional queue that should hold these effects and should be addressed after painting. Generally speaking, a fiber holds a queue which contains effect nodes. Each effect is of a different type and should be addressed at its appropriate phase:

When it comes to the hook effects, they should be stored on the fiber in a property called updateQueue, and each effect node should have the following schema:

- tag- A binary number which will dictate the behaviour of the effect
- create- the callback that should be ran after painting
- destroy- the callback returned from create that should be ran before initial render
- inputs- A set of value that will determine whether the effect should be created or destroyed
- next-  a reference to the next effect which was determined in the function component

React Context and how it works
- React Context API is built to solve the problem of prop-drilling
- Context provides a way to pass data through the component tree without having to pass props down manually at every level
- context is designed to share data that can be considered global like the current authenticated user or current user theme
- It should be used sparingly because It makes component reuse more difficult
- When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
- The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.

### Context.Provider

- Every Context Object comes with a Provider component that allows consuming components to subscribe to context changes
- The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
- All consuming components will be rendered when the value prop of the Provider changes

### Context.Consumer

- A React component that subscribes to context changes. This lets you subscribe to a context within a function component.
- Requires a function as a child. The function receives the current context value and returns a React node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree. If there is no Provider for this context above, the value argument will be equal to the defaultValue that was passed to createContext().
