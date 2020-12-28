import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
	display: block;
	max-width: 1300px;
	min-height: 100vh;
	margin: auto;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		margin: 60px auto;
	}

	h3 {
		text-align: center;
		margin-bottom: 60px;
	}
`;

function App() {
	const initialHeight = window.innerHeight;
	const [currentPosition, setCurrentPosition] = useState(initialHeight);
	// var currentHeight = window.pageYOffset;
	// const [lastPosition, setLastPosition] = useState(currentHeight);

	const handleScroll = () => {
		const Page = document.getElementById("page");
		const para = document.createElement("div");
		para.innerHTML = `<h3>Hello World</h3>`;
		const currentHeight = window.pageYOffset;
		const totalHeight = currentHeight + initialHeight;

		// if (lastPosition >= currentHeight) {
		// 	const array = Page.childNodes.length;
		// 	var number = Math.floor(array);
		// 	if (number >= 1) {
		// 		var chil = Page.children;
		// 		chil[number - 1].style.display = "none";
		// 		number = number - 1;
		// 	}
		// }

		if (totalHeight >= currentPosition) {
			const y = totalHeight + 1000;
			setCurrentPosition(y);
			Page.appendChild(para);
			// setLastPosition(currentHeight);
		}
	};

	window.onscroll = handleScroll;
	return (
		<Wrapper id="page">
			<div>
				<h3>Hello World</h3>
			</div>
		</Wrapper>
	);
}

export default App;
