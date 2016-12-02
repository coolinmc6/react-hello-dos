# README

For my first react app, see: [react-hello-world](https://github.com/coolinmc6/react-hello-world)

## Notes

### First Component

- My first component, ColinsComp, was able to show up on the screen with very little.  I didn't have a
constructor, I didn't have a function, and I didn't change state.
- Here are some of the very basics that I think I need for a component:
  1. import React
  2. Define your new component by inheriting React.Component
  3. Have a render() function (though I don't know that this is absolutely required)
  4. Place in the 'export default' line
- Here is a component shell for now:
```javascript
import React from 'react';

class [component_name] extends React.Component {
	
	render() {
		return (
			<div>Hello from inside the [component_name]</div>
		);
	}
}

export default [component_name];
```
  - Remember to import your component into index.jsx

### Second Component

- My second component, ParentComp, imported ColinsComp.  It is just like importing the other components into index.jsx. 
The question is: do I need to import every component into index.jsx or can I import it into a parent component
and it's the parent's responsibility to import the components I need to import?
- I learned how to iterate through.  So it looks like the best way to return multiple instances of a component
(or anything, really) is to create an array, push an instance of the component into the array (with a unique key), 
and then return the array:
```javascript
var rows = [];
for (var i = 0; i < 10; i++) {
	rows.push(<ColinsComp key={i}/>);
}
return (
	<div>{rows}</div>
);	
```
- Now I need to play with state.  Maybe a "product" component where each item has a name and price.

### Third Component

- Building a static state component is easy but how do I take in input?  