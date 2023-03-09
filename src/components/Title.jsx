import { useEffect, useRef } from 'react';
import "@fontsource/rubik-mono-one"

export function Title() {


	const letters = "AM.OIZE.S.MROIZEN.AMR.IZ.N";
	const title = "SAMROIZEN.COM";

	let interval = null;

	const titleRef = useRef(null); //h1 element ref - needed for event

	const scramble = (event) => {
		let iteration = 0;
		
		clearInterval(interval);

		event.target.removeEventListener('mouseover', scramble)
		
		interval = setInterval(() => {
			event.target.innerText = event.target.innerText
			.split("")
			.map((letter, index) => {
				if(index < iteration) {
				return event.target.dataset.value[index];
				}
			
				return letters[Math.floor(Math.random() * 26)]
			})
			.join("");
			
			if(iteration >= event.target.dataset.value.length){ 
				clearInterval(interval);
			}
			
			iteration += 1 / 5;
		}, 30);
		
	}


	useEffect(() => {
		const myEvent = new Event('mouseover');
		titleRef.current.addEventListener('mouseover', scramble); // add event listener to h1 element
		titleRef.current.dispatchEvent(myEvent); // trigger event listener
		return () => {
			titleRef.current.removeEventListener('mouseover', scramble); // remove event listener on cleanup
		};
	}, []);

	return (
		<h1 
			id="title"
			ref={titleRef}
			data-value={title}
			style={{
				fontSize: '3rem',
				fontWeight: 'bold',
				fontFamily: 'Rubik Mono One',
				textAlign: 'center',
			}}
			className="titlejiggle"
		> {title} </h1>
	)}