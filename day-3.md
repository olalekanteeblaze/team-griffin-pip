Advanced JSX

- JSX is just a syntactic sugar for react.createElement
- It compiles to react.createElement under the hood
- React must be in scope to use JSX
- Dot notation can be used with JSX if a component exports many other sub-components
- User-defined component must be capitalized
- props can be JS expressions, string literals
- Props default to true
- Functions are valid JSX children
- JSX expressions are valid JSX children

Animations in React

### Using ReactTransitionGroup

- It is an add-on component for a simple implementation of basic CSS animations and transitions.
- React Transition Group changes the classes when component lifecycle changes. In turn, animated style should be described in CSS classes.
- ReactTransitionGroup has small size. It should be installed in package for React application and won’t significantly increase your bundle. But you can use CDN.
- ReactTransitionGroup has 3 components (Transition, CSSTransition and TransitionGroup). In order to get animation you need to wrap component in them.

### Using react-animations

- React-animations — the library is built on all animations with animate.css. It is easy to use and has a lot of animation collections. 
React-animation works with any inline style library that supports the use of objects to define keyframe animations, such as Radium, Aphrodite or styled-components.

### Using react-reveal

- React Reveal is an animation framework for React. It has basic animations such as fade, flip, zoom, rotate and a lot of more advanced animations. 
It allows you to control all animations with props, for example: the position, delay, distance, cascade and many others. You can also use the custom css effects. 
Also it has server side rendering and high order components.

React in non-DOM environment

- The first step involves transforming the *React element tree* into the appropriate internal instances for each component type. This involves saving the relationship between these (parent-child), parsing styles and processing props.
- Besides **Document**, all nodes will represent a block inside a document, with a height, width, paddings and margins (yet to be discovered). These instances also define how each element wraps in the page, how their dimensions are calculated, and finally, how they get rendered in the document.

### React Native

- React Native is an open source framework for building Android and iOS applications using React and the app platform’s native capabilities. 
With React Native, you use JavaScript to access your platform’s APIs as well as to describe the appearance and behavior of your UI using React components: 
bundles of reusable, nestable code.
- In Android and iOS development, a view is the basic building block of UI: a small rectangular element on the screen which can be used to display text, 
images, or respond to user input. Even the smallest visual elements of an app, like a line of text or a button, are kinds of views.
- React Native lets you build your own Native Components for Android and iOS to suit your app’s unique needs.
