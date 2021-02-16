React Higher order components

- A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
- A higher-order component is a component that takes in a component and returns another component
- A HOC is a pure function with no side effects
- It simply wraps serves as wrapper to compose the wrapped component
- A component's prototype shouldn't be mutated in a HOC
- HOC's shouldn't be used within the render method
- Instead, apply HOCs outside the component definition so that the resulting component is created only once. Then, its identity will be consistent across renders.
- Static methods should be copied over
- Refs aren't passed through HOC's

React Memo

### React.Memo

- React.Memo is a higher-order component
- It's is used to improve performance by memoizing result
- If a component renders the same result given the same
- React.memo only checks for prop changes, component will still be rerendered if state or context value changes
- An optional  second argument can be passed. This is a custom comparison function
- If there's a function as one of the props, it should be should be applied with the useCallback hooks to enable stable behaviour with memoization

### UseMemo

- Returns a memoized value
- It's used as a optimisation technique to avoid expensive calculations
- It accepts a create function and an array of dependencies. It only rerenders if one of the dependencies change

React Refs (DOM references)
### React.createRef

- Refs can be created using React.createRef and attaching a react element to it using the ref attribute
- We can “refer” to the node of the ref created in the render method with access to the current attribute of the ref.
- Callbacks can also be passed to the ref attribute. The callback is used to store a reference to the DOM node in an instance property.
- Refs are also suitable for form validation

### React.forwardRef

- Ref forwarding is the technique of passing a ref from a component to a child component by making use of the React.forwardRef() method.
