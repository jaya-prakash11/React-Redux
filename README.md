# React Redux Application

A modern React application built with Redux for state management and Semantic UI for styling.

## Table of Contents
- [Overview](#overview)
- [React Redux Workflow](#react-redux-workflow)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)

## Overview

This application demonstrates a complete React-Redux architecture for managing application state in a predictable and scalable way.

## React Redux Workflow

### Architecture Flow

```
User Interaction → Action → Dispatcher → Reducer → Store → Component Re-render
```

### Detailed Workflow Explanation

#### 1. **Store**
The single source of truth for your application state.

```javascript
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
```

- Holds the entire application state
- Only one store per application
- State is read-only and can only be changed by dispatching actions

#### 2. **Actions**
Plain JavaScript objects that describe what happened.

```javascript
// Action Type
const ADD_TO_CART = 'ADD_TO_CART';

// Action Creator
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});
```

- Must have a `type` property
- Can have a `payload` with additional data
- Actions are dispatched to trigger state changes

#### 3. **Reducers**
Pure functions that specify how the state changes in response to actions.

```javascript
const initialState = {
  products: [],
  cart: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    default:
      return state;
  }
};
```

- Takes current state and action as arguments
- Returns new state (never mutates existing state)
- Must be pure functions (no side effects)

#### 4. **Dispatch**
The method used to send actions to the store.

```javascript
import { useDispatch } from 'react-redux';

function Component() {
  const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
}
```

#### 5. **Selectors (Connect to Components)**
Connect React components to Redux store.

```javascript
import { useSelector } from 'react-redux';

function CartComponent() {
  const cart = useSelector(state => state.cart);
  const totalItems = useSelector(state => state.cart.length);
  
  return (
    <div>
      <h2>Cart Items: {totalItems}</h2>
    </div>
  );
}
```

### Complete Flow Example

```javascript
// 1. User clicks "Add to Cart" button
<button onClick={() => handleAddToCart(product)}>
  Add to Cart
</button>

// 2. Action is dispatched
const handleAddToCart = (product) => {
  dispatch(addToCart(product));
};

// 3. Action Creator creates action object
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product
});

// 4. Reducer processes the action
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    default:
      return state;
  }
};

// 5. Store is updated with new state

// 6. Components subscribed to that state automatically re-render
const cart = useSelector(state => state.cart);
```

### Redux Principles

1. **Single Source of Truth**
   - The entire application state is stored in a single store

2. **State is Read-Only**
   - The only way to change state is to dispatch an action

3. **Changes are Made with Pure Functions**
   - Reducers are pure functions that take previous state and action, return new state

### Middleware (Optional)

Middleware sits between dispatching an action and the reducer, commonly used for:

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // For async actions

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

// Async Action Example
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
    
    try {
      const response = await fetch('api/products');
      const data = await response.json();
      dispatch({ 
        type: 'FETCH_PRODUCTS_SUCCESS', 
        payload: data 
      });
    } catch (error) {
      dispatch({ 
        type: 'FETCH_PRODUCTS_FAILURE', 
        payload: error.message 
      });
    }
  };
};
```

## Project Structure

```
src/
├── components/         # React components
├── redux/
│   ├── actions/       # Action creators
│   ├── reducers/      # Reducer functions
│   ├── store.js       # Redux store configuration
│   └── types.js       # Action type constants
├── pages/             # Page components
├── App.js             # Main app component
└── index.js           # Entry point with Provider
```

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd react-redux-app

# Install dependencies
npm install

# Start development server
npm start
```

## Available Scripts

```bash
npm start       # Runs the app in development mode
npm test        # Launches the test runner
npm run build   # Builds the app for production
npm run eject   # Ejects from Create React App
```

## Technologies Used

- **React** - UI library
- **Redux** - State management
- **React-Redux** - Official React bindings for Redux
- **Redux Thunk** - Middleware for async actions
- **Semantic UI** - CSS framework
- **React Router** - Navigation

## Benefits of Using Redux

1. **Predictable State Management** - State changes are predictable and traceable
2. **Centralized State** - Easy to debug and maintain
3. **Time-Travel Debugging** - Can track every state change
4. **Easy Testing** - Pure functions are easy to test
5. **Great DevTools** - Redux DevTools for debugging
6. **Scalable** - Works well for large applications

## When to Use Redux

✅ **Use Redux when:**
- Multiple components need the same state
- State changes frequently
- State update logic is complex
- Large codebase with many developers

❌ **Don't use Redux when:**
- Small application with simple state
- State is only used in one component
- Learning React basics (master React first)

## Learn More

- [Redux Official Documentation](https://redux.js.org/)
- [React-Redux Documentation](https://react-redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/) (Modern Redux)

## License

MIT License
