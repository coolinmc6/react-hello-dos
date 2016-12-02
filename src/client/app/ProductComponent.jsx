import React from 'react';

class ProductComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {name : 'XBox 360'};
	}
	
	render() {
		return (
			<div>
				<div>Hello from inside the ProductComponent</div>
				<div>Product Name: {this.state.name} </div>
			</div>
		);
	}
}

export default ProductComponent;
