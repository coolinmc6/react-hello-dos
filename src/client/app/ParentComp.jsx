import React from 'react';
import ColinsComp from './ColinsComp.jsx';

class ParentComp extends React.Component {
	
	render() {
		// No Iteration

		// return (
		// 	<div>	
		// 		<ColinsComp />
		// 		<ColinsComp />
		// 		<ColinsComp />
		// 		<ColinsComp />
		// 	</div>
		// );

		// Iterate V1
		// var rows = [], i = 0, len = 10;
		//   while (++i <= len) rows.push(i);
		//   return (
		//     <div>
		//       {rows.map(function (i) {
		//         return <ColinsComp key={i} index={i} />;
		//       })}
		//     </div>
	 	// 	);


	 	// Iterate V2
	 	var rows = [];
	 	for (var i = 0; i < 10; i++) {
	 		rows.push(<ColinsComp key={i}/>);
	 	}
	 	return (
	 		<div>{rows}</div>
 		);		
		
	}
}

export default ParentComp;
