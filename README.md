# react-style-guide
## Sections

- [Project Structure](#project-structure)
- [File Structure](#file-structure)
- [Spacing](#spacing)
- [Comments](#comments)
- [Variable Declarations](#variable-declarations)
- [JSX Guidelines](#jsx-guidelines)
- [Styles](#styles)
- [Project Setup](#project-setup)

## Project Structure

```
  App.js
  AppContext.jsx
  index.js
  ./Helpers
    --/HelperName
      --HelperName.jsx
      --HelperName.style.jsx
      --HelperName.less
    --bootstrap.js
    --helperName.js
  ./Screens
    --/ScreenName
      --ScreenName.jsx
      --ScreenName.style.jsx
      --ScreenName.less
      --serviceName.service.js
  ./Shared
    --/SharedName
      --SharedName.jsx
      --SharedName.style.jsx
      --SharedName.less
  ./Navigation
    --/NavName
      --NavName.jsx
      --NavName.style.jsx
      --NavName.less
    --MainNavigation.js
```

We are using a basic project structure that allows us to scale up when the project needs to.

It's made from 5 main categories:

* <b>App.js</b> Contains the app wrapper, routing setup and calls the bootstrap method.

* <b>./Helpers/bootstrap.js</b> Should be a function that handles the app bootstrap... resources load, initial requests, async storage data, etc.

* <b>./Helpers</b> These are functions or components that help us solve system level issues.

* <b>./Screens</b> These are the app screens, they can be grouped if they lay under the same concept. (e.g. /Account)

* <b>./Shared</b> These are shared components, a smaller part of more than one screen screen. (e.g. a button that is present in two screens)


Also, note that:

* `.js` files use lower <a href="https://en.wikipedia.org/wiki/Camel_case" target="_blank">camelCase</a> with the exception of `App.js`
* `.jsx` files use upper <a href="https://en.wikipedia.org/wiki/Camel_case" target="_blank">camelCase</a>
* If a component contains more than one file, it should be inside a folder with the same name.
* Style files have the same name as the component: `Name.style.jsx` for react native and `Name.less` for react web
* Services don't need to have the same name as the component, their name has to be based on their function.

## File Structure

You may or may not use all of these, but this is the order:

```
  // External modules
  // Internal modules
  // Components
  // Assets
  -- Function export starts
    // Global state
    // Initial local state
    // Local state
    // Constants
    // Effects
    // Methods
    // Render
```

### <b>`// External modules`</b>

These are 3rd party libraries, including React.

We import React alone, and call it's methods using this way: `React.useEffect` || `React.useState`... and so on.

This is how we import React: `import React from "react"`

### <b>`// Internal modules`</b>

These are modules defined by ourselves, they can be styles or helpers.

### <b>`// Components`</b>

These are our own custom made components.

### <b>`// Assets`</b>

If you need to import an image or a external asset, this is the place.

### <b>`// Global state`</b>

After the component function declaration, we initialize the global component when needed:

`const { state }  = React.useContext(AppContext);`

We can take the dispatch to write the global state as well:

`const { state, dispatch }  = React.useContext(AppContext);`

### <b>`// Initial local state`</b>

Whenever we need a complex initial state we should define the content as constants.

```
  const initialState = {
    prop1: value1,
    prop2: value2,
    propN: valueN
  }
```

### <b>`// Local state`</b>

```
  const [state1,setState1] = React.useState(initialState);
  const [state2,setState2] = React.useState([]);
  const [state3,setState3] = React.useState(false);
```

### <b>`// Constants`</b>

They may be hardcoded values or they may contain values form another module.

`const constant1 = 'someValue';`
### <b>`// Effects:`</b>

One time effect:

```
  // Bootstrap effect
  React.useEffect(() => {

    // This will be fired only once

  },[]);
```

Watcher effect:

```
  // State depending effect
  React.useEffect(() => {

    // This will be fired every time state changes

  },[state]);
```
Effect with cleanup:

```
  // Effect with cleanup
  React.useEffect(() => {

    // This function will be excecuted once the component unmounts
    return () => {
      setState(null);
    }

  },[]);
```

### <b>`// Methods`</b>

```
  const doCallme = () => {
    // Get this fired on an effect or on a JSX event
  }
```

### <b>`// Render`</b>

```
  return (
    <Text>Always return one parent element</Text>
  )
```

## Spacing

Spacing is very important. We use empty break lines between concepts to make the code more readable.

Some examples:

```
// Declare variables without spacing
const var1 = 'some vale';
const var2 = 'another value';
let var3   = 'still no spacing';

// See the line break above?
if (var1 === 'some value') {
  // conditionals with one line do not need a line break
} else {

  // But if your conditional takes more than one line, leave a break line above
  var3 = 'new value';
} // No need to have a line break on closing braces 
```
JSX example:

```
  <div>

    {/* Each tag needs a line break*/}
    <div>

      {/* If the content is not a tag line break it's not needed */}
      <h1>
        This is not a tag, no need for a break line
      </h1>

      {/* Another example. Note that closing tags at the end don't have break lines */}
      <button>
        Click me
      </button>
    </div>
  </div>
```

If a tag contains more than one attribute, it needs to have multiple lines

```
  <div>

    {/* This tag has only one attribute */}
    <button onClick={handler}>
      Click me
    </button>

    {/* This tag has multiple attributes */}
    <button
      id="some-id"
      className="some-class"
      onClick={handler}
    >
      Click me too
    </button>
  </div>
```
## Comments

As developers, we all know there is a thin line between over commenting and under commenting.

On react, we have two types of code: logical code (the component itself) and render code (everything inside the render method).

For the logical part we want to comment based on the concept of what we are doing. (e.g. if we are setting everything up for a request, we can comment "Setup request" and put all the variables declaration, conditionals and service call regarding the request)

```
  // Setup request
  const body = {
    param1: 'value1',
    param2: 'value2'
  }

  const response = await service(body);

  if (response.success) {}
```

Another logical piece of code:

```
  // Find matching item IDs
  const ids = items.map(item => {
    return item.id
  }

  list.map(li => {

    if (ids.includes(li.id)) {
      li.match = true;
    }
  });
```

For `JSX`, a comment line is requiered before the start of each tag.

```
  <div>

    {/* Section title */}
    <h1>
      Submit your form
    </h1>

    {/* Submit button */}
    <button onClick={handler}>
      Submit
    </button>
```

## Variable Declarations

Try to set variable names to represent their content. We prefer long variable names against short -no representative- names.

Also, while declaring multiple variables, use spacing to match the indentation of the `=` sign.

```
✓ Good:

const loading     = true;
const itemLoading = true; 
const name        = 'Juan';
const validForm   = true;

// Try to keep abbreviations at minimum
const completePtc = '15';

✗ Bad:

// Don't go too far on long variable names
const reallyLongVariableName = false;

// Make the names represent their content/function
const x  = false;
const a  = false;
const ar = false;

```

## JSX Guidelines

Braces inside JSX rules:

```
// If it's one line, there is no spacing
<h1>
  {item.name}
</h1>


// Multiple lines take a line break between the brace and the JS
{
  items.map(item => (
    <p>
      Hardcoded text
    </p>
  ))
}
```

For concatenation we use backticks:

```
  <div>

    {/* Full name */}
    <h1>
      {`$item.firstName item.lastName - Developer`}
    </h1>

  </div>
```

<b>React web class logic</b>

```
  <h1 className=`hardcoded ${item.name ? 'has-name' : ''}`>
    Name
  </h1>
```

<b>React native style logic</b>

```
  <Text
    style={{
      ...Style.default,
      ...item.name ?
          Style.hasName
        : null
    }}
  >
    Name
  </Text>
```

For logic, we use ternary operators:

```
  <div>

    {/* One line */}
    {
      item.name ? item.name : 'John Doe'
    }

    {/* Multi line */}
    {
      item.phone ?
        item.phone
      :
        '+34-555-CALL-${item-id}'
    }

    {/* Mixed */}
    {
      item.phone ? item.phone
      : '+34-555-CALL-${item-id}'
    }

    {/* Mixed 2 */}
    {
      item.phone ?
        item.phone
      : null
    }
  </div>
```

Always avoid to add JSX outside the render method

```
✓ Good:

render(
  <div>
    {
      {/* Map items */}
      items.map(item => (
        <h1>
          {item.name}
        </h1>
      ))
    }
  </div>
);
```
```
✗ Bad:

const itemsRender = () => {

  items.map(item => (
    <h1>
      {item.name}
    </h1>
  ))
}

render(
  <div>
    {itemsRender}
  </div>
);
```

## Styles

We use slightly different order of rules for web and native.

<b>IMPORTANT:</b> Line breaks mean we group roules by concept, DON'T add those on your styling, rules don't have spacing

<b>React web styles order</b>

```
* {
  position
  top
  left
  right
  bottom

  width
  max-width
  height
  max-height

  margin
  padding

  background
  background-repeat
  background-position
  background-size
  color

  font-family
  font-size
  font-weight
  text-align
  text-style
  text-transform
  text-shadow
  line-height

  display
  align-items
  justify-content
  flex-direction

  overflow

  z-index

  transform

  box-shadow

  transition
  animation

  border
}
```

<b>React native style logic</b>

```
all: {
  flexDirection
  display
  alignItems
  justifyContent

  position
  top
  left
  right
  bottom

  width
  maxWidth
  height
  maxHeight

  margin
  padding

  backgroundColor
  color

  fontFamily
  fontSize
  fontWeight
  textAlign
  textStyle
  textTransform

  overflow

  zIndex

  borderWidth
  borderColor
  borderStyle
}
```

## Project setup

#### <b>For react web:</b>

Use this command to install the initial dev dependencies

`npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader core-js snazzy standardx webpack webpack-cli webpack-dev-server browser-sync browser-sync-webpack-plugin css-loader less less-loader mini-css-extract-plugin path style-loader file-loader url-loader image-webpack-loader`

Use this command to install the initial dependencies

`npm install history react react-dom react-router-dom regenerator-runtime normalize.css`

Add these files to the directory root:

- [.babelrc](react-example/.babelrc)
- [.eslintrc](react-example/.eslintrc)
- [webpack.config.js](react-example/webpack.config.js)
- [.webpack/browsersync.js](react-example/.webpack/browsersync.js)
- [dist/index.html](react-example/dist/index.html)

Copy this file and rename it to `config.json`:

- [src/config-sample.json](react-example/src/config-sample.json)

Add these on the `scripts` object on `package.json`:

```
  "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production",
    "format": "standardx --verbose | snazzy"
  },
```

And that's it! Run `npm start` for development mode and `npm run build` for production mode.

Run `npm format` to make sure

You can find a fully working example on [/react-example](/react-example) directory.