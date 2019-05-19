import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions/loadingActions';
import Loader from './components/Loader';

function App({
	isLoading,
	message,
	list,
	active,
	getBeerList,
	getRandomBeer,
	setActiveBeer
}) {
	const renderBeerList = () => (
		<ul className='beerList'>
			{list.map((beer, i) => (
				<li key={i} onClick={() => setActiveBeer(beer)}>
					{beer.name}
				</li>
			))}
		</ul>
	);

	const getBeerButton = () => (
		<div className='button' onClick={getBeerList}>
			GET BEERZZZ!!!
		</div>
	);

	const getRandomBeerButton = () => (
		<div className='button' onClick={getRandomBeer}>YA PUSSY? LET ME CHOOSE FOR YOU</div>
	);

	const renderActiveBeer = () => (
		<>
			<div className='description'>
				<h1>{active.name}</h1>
				<span>{active.tagline}</span>
				<p>{active.description}</p>
			</div>
			<img
				className='image'
				src={active.image_url}
				alt='das ist ein bier obrazek'
			/>
		</>
	);

	return (
		<>
			<div className='container'>
				<div className='left'>
					{list ? renderBeerList() : getBeerButton()}
				</div>
				<div className='right'>
					<div className='getRandom'>{getRandomBeerButton()}</div>
					<div className='details'>
						{active ? renderActiveBeer() : null}
					</div>
				</div>
			</div>
			{!isLoading ? null : <Loader />}
		</>
	);
}

export default connect(
	({ loader, beers }) => ({ ...loader, ...beers }),
	actions
)(App);
