import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions/loadingActions';

const Loader = () => (<h1>MUAHGAHAHA</h1>)

function App({ isLoading, message, list, active }) {

  const renderBeerList = () => (
    <ul>
      {list.map((beer, i) => (
        <li key={i} onClick={() => actions.setActiveBeer(beer)}>
          {beer.name}
        </li>
      ))}
    </ul>
  );

  const getBeerButton = () => (<div onClick={actions.getBeerList}>GET BEERZZZ!!!</div>);

  const getRandomBeerButton = () => (<div onClick={actions.getRandomBeer}>YA PUSSY? LET ME CHOOSE FOR YOU</div>);

  const renderActiveBeer = () => (<div>
    <h1>{active.name}</h1>
    <span>{active.tagline}</span>
    <p>{active.description}</p>
    <img src={active.image_url} alt='das ist ein bier obrazek'/>
  </div>)
  return (
    <>
      <div>
        <div className='left'>
          {list ? renderBeerList() : getBeerButton()}
        </div>
        <div className='right'>
          <div className="getRandom">{getRandomBeerButton()}</div>
          <div className="details">
            {active ? renderActiveBeer() : null}
          </div>
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
}

export default connect(
  ({ loader, beers}) => ({ ...loader, ...beers }),
  actions
)(App);
