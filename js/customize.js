const birds = [
	{name:'Pigeon',age:2},
	{name:'Eagle',age:8},
	{name:'Owl',age:3}
]; 

//DOM

const text = document.querySelector('.text');

function change() {
	text.style.fontSize = "20px";
	text.style.color = "blue";
}

//Regular
console.log('Hello World');

//Interpoleted
console.log('Hello I am a frontend %s dev.','junior');

//Styled
console.log('%c Javascript great a language.','font-size:18px; background:green;color:#fff');

//Warning!
console.warn('Warning Message!');

//Error
console.error('Error Message');

//Info
console.info('This is a information Message')

//Testing
console.assert(text.classList.contains('new'),'That is wrong!');

//Clearing
function clear() {
	console.clear();
}

//Viewing DOM Elements
console.log(text);
console.dir(text);

//Grouping together
birds.forEach(bird =>{
	console.group(`${bird.name}`);
		console.log(`This is ${bird.name}`);
		console.log(`${bird.name} is ${bird.age} years old`);
	console.groupEnd(`${bird.name}`);
});

//Counting
console.count('Hi');
console.count('Hi');

//Table
console.table(birds);

//Timing
console.time('fetching Data');
const img = document.querySelector('img');

function pullProfileImage() {
	
	fetch('https://api.github.com/users/enderimen')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('fetching Data');
		console.log(data);
		img.src = data.avatar_url;
		img.style.boxShadow = "5px 3px 3px gray";
	});
}