import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const soupsData = [
	{
		name: 'Tomato soup',
		ingredients: 'tomato, bouillon, onion, garlic, basil',
		price: 4.9,
		photoName:
			'img/soups/soup with sliced of vegetables on blue ceramic bowl small.jpg',
		soldOut: false,
	},

	{
		name: 'Pumpkin cream',
		ingredients: 'potatoes, pumpkin, vegetable broth, butter, onion, garlic',
		price: 5.9,
		photoName: 'img/soups/pumpkin cream small.jpg',
		soldOut: false,
	},

	{
		name: 'Pasta with duck meat',
		ingredients: 'duck meat, leek, soy sauce, tomatoes, ginger',
		price: 5.9,
		photoName: 'img/soups/Pasta with duck meat small.jpg',
		soldOut: false,
	},

	{
		name: 'Chicken soup',
		ingredients: 'chicken meat, mushrooms, onion, garlic, oil, butter',
		price: 3.9,
		photoName: 'img/soups/Chicken soup small.jpg',
		soldOut: false,
	},
];

const mainCoursesData = [
	{
		name: 'Tagliatelle with tomato sauce and beef',
		ingredients: 'tagliatelle, tomato sauce, beef, red wine, basil',
		price: 14.9,
		photoName: 'img/dinner/pasta with tomato sauce.jpg',
		soldOut: false,
	},
	{
		name: 'Roast beef with mashed potatoes and parmesan',
		ingredients: 'roast beef, potatoes, parmesan, olive oil',
		price: 17.9,
		photoName: 'img/dinner/beef and potatoes small.jpg',
		soldOut: false,
	},
	{
		name: 'Grilled ribs with baked potatoes',
		ingredients: 'grilled ribs, baked potatoes, fresh tomato sauce',
		price: 15.9,
		photoName: 'img/dinner/grilled ribs with baked potatoes small.jpg',
		soldOut: false,
	},
	{
		name: 'Lasagna',
		ingredients: 'pork, parmesan, bolognese sauce, bechamel sauce olive oil',
		price: 13.9,
		photoName: 'img/dinner/Lasagna small.jpg',
		soldOut: false,
	},
	{
		name: 'Salmon with spinach dusted with parmesan',
		ingredients: 'atlantic salmon, shredded spinach, parmesan',
		price: 18.9,
		photoName: 'img/dinner/Salmon with spinach dusted with parmesan small.jpg',
		soldOut: false,
	},
	{
		name: 'Shrimps with vegetables',
		ingredients: 'shrimps, rucola, mushrooms, avocado, tomatoes',
		price: 14.9,
		photoName: 'img/dinner/shrimp with vegetables small.jpg',
		soldOut: true,
	},
	{
		name: 'Baked chicken thigh with cucumber strips small',
		ingredients: 'chicken thigh, cucmber, parsley',
		price: 14.9,
		photoName: 'img/dinner/chicken thigh with cucumber strips small.jpg',
		soldOut: false,
	},
	{
		name: 'Mussels in a creamy sauce small',
		ingredients: 'mussels, cream, spices',
		price: 22.9,
		photoName: 'img/dinner/mussels in a creamy sauce small.jpg',
		soldOut: false,
	},
];

const drinksData = [
	{
		name: 'Glass of water',
		price: 1.9,
		photoName: 'img/drinks/Glass of water.jpg',
		soldOut: false,
	},
	{
		name: 'Espresso',
		price: 2.9,
		photoName: 'img/drinks/espresso small.jpg',
		soldOut: false,
	},
	{
		name: 'Americano',
		price: 3.9,
		photoName: 'img/drinks/coffee small.jpg',
		soldOut: false,
	},
	{
		name: 'Iced Coffee',
		price: 4.9,
		photoName: 'img/drinks/iced coffee.jpg',
		soldOut: false,
	},
	{
		name: 'Tea',
		price: 2.9,
		photoName: 'img/drinks/tea.jpg',
		soldOut: false,
	},
	{
		name: 'Freshly squeezed fruit juice',
		price: 3.9,
		photoName: 'img/drinks/orange juice small.jpg',
		soldOut: false,
	},
	{
		name: 'Cherry cocktail',
		price: 9.9,
		photoName:
			'img/drinks/clear drinking glass with red liquid and sliced lemon small.jpg',
		soldOut: false,
	},
	{
		name: 'Gin & tonic',
		price: 8.9,
		photoName: 'img/drinks/Gin & tonic small.jpg',
		soldOut: false,
	},
];

function App() {
	return (
		<div className='container'>
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	const style = {};

	return (
		<header className='header'>
			<h1 style={style}>Anti-Restaurant</h1>
		</header>
	);
}

function Menu() {
	const soups = soupsData;
	const numSoups = soups.length;

	const mainCourses = mainCoursesData;
	const numMain = mainCourses.length;

	const drinks = drinksData;
	const numDrinks = drinks.length;

	return (
		<main className='menu'>
			<h2>menu</h2>

			<p>
				We invite you to our restaurant, where you can enjoy the taste of our
				dishes without rushing!
			</p>

			<h3 className='products'>Soups</h3>

			{numSoups > 0 ? (
				<ul className='products'>
					{soups.map((soup) => (
						<Soup soupsObject={soup} key={soup.name} />
					))}
				</ul>
			) : (
				<p>We're still working on our menu. Please come back later :)</p>
			)}

			<h3 className='products'>main courses</h3>

			{numMain > 0 ? (
				<ul className='products'>
					{mainCourses.map((mainCourse) => (
						<MainCourse mainCoursObject={mainCourse} key={mainCourse.name} />
					))}
				</ul>
			) : (
				<p>We're still working on our menu. Please come back later :)</p>
			)}

			<h3 className='products'>drinks</h3>

			{numDrinks > 0 ? (
				<ul className='products'>
					{drinks.map((drink) => (
						<Drink drinksObject={drink} key={drink.name} />
					))}
				</ul>
			) : (
				<p>We're still working on our menu. Please come back later :)</p>
			)}
		</main>
	);
}

function Soup({ soupsObject }) {
	return (
		<li className={`product ${soupsObject.soldOut ? 'sold-out' : ''}`}>
			<img src={soupsObject.photoName} alt={soupsObject.name} />
			<div>
				<h3>{soupsObject.name}</h3>
				<p>{soupsObject.ingredients}</p>
				<span>
					{soupsObject.soldOut ? 'SOLD OUT' : soupsObject.price + '€'}
				</span>
			</div>
		</li>
	);
}

function MainCourse({ mainCoursObject }) {
	return (
		<li className={`product ${mainCoursObject.soldOut ? 'sold-out' : ''}`}>
			<img src={mainCoursObject.photoName} alt={mainCoursObject.name} />
			<div>
				<h3>{mainCoursObject.name}</h3>
				<p>{mainCoursObject.ingredients}</p>
				<span>
					{mainCoursObject.soldOut ? 'SOLD OUT' : mainCoursObject.price + '€'}
				</span>
			</div>
		</li>
	);
}

function Drink({ drinksObject }) {
	return (
		<li className={`product ${drinksObject.soldOut ? 'sold-out' : ''}`}>
			<img src={drinksObject.photoName} alt={drinksObject.name} />
			<div>
				<h3>{drinksObject.name}</h3>
				<span>
					{drinksObject.soldOut ? 'SOLD OUT' : drinksObject.price + '€'}
				</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 8;
	const closeHour = 21;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);

	return (
		<footer className='footer'>
			{isOpen ? (
				<Order hourClose={closeHour} openHour={openHour} />
			) : (
				<p className='order quote'>
					We're happy to welcome you between {openHour}:00 and {closeHour}:00.
				</p>
			)}
		</footer>
	);
}

function Order({ hourClose, openHour }) {
	return (
		<div className='order quote'>
			<p>
				We're open from {openHour}:00 until {hourClose}:00 Come visit us or
				order online.
			</p>
			<button className='btn'>Order</button>
		</div>
	);
}

//React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
