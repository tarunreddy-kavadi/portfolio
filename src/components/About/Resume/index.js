

import React from 'react';
import './index.scss'


const Resume = () => {
    
	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
       try{
		fetch('Tarun Reddy Kavadi.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'Tarun Reddy Kavadi.pdf';
				alink.click();
			})
		})} catch(error){console.log(error)}
	}
	return (
		<>
			<center>
				
				<button onClick={onButtonClick} className="flat-button">
					Download CV
				</button>
			</center>
		</>
	);
};



export default Resume;

//  const Resume =()=> {

// 		 fetch('Tarun Reddy Kavadi.pdf').then(response => {
// 		 	response.blob().then(blob => {
// 				//window.open('Tarun Reddy Kavadi.pdf')
// 		 		//window.URL.createObjectURL(blob);
// 		 		let  link = document.createElement('a');
// 		// 		//link.download = ('CV.pdf')
// 		// 		link.download=('Tarun Reddy Kavadi.pdf')
// 		//window.open('Tarun Reddy Kavadi.pdf')

// 		link.click();
// 		 	})
// 		})

//     return (
// 		<>
// 			<center>
// 				<button onClick= {Resume}
// 				className="flat-button">
// 					OPEN CV
// 				</button>
                
// 			</center>
// 		</>
// 	);
// 	}
//export default Resume;