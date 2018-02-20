import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Stories from './Stories';
import Footer from './Footer';
import './App.css';

const literature = [
  {
    img: '../public/graham-escape.png',
    title: 'The Sleeper Awakes',
    desc: 'For 203 years he slept, only to find his dreams manifested in all its horrors and malformities upon his awakening',
    authImg: '../public/hg-wells.png',
    authName: 'H. G. Wells',
    yearReleased: '1910'
  },
  {
    img: '../public/animal-farm.png',
    title: 'Animal Farm',
    desc: '"All animals are equal but some are more equal than others." Revolution amidst farm  set in the Stalinist era of Soviet union where a cult of personality reigns the mass with terror',
    authImg: '../public/george-orwell.png',
    authName: 'George Orwell',
    yearReleased: '1945'
  },
  {
    img: '../public/electric-sheep.png',
    title: 'Do Androids Dream of Electric Sheep?',
    desc: 'Mass emigrations to off-world colonies are taking place to preserve humans genetics, as robots are made identical to their makers. A bounty hunter hired to kill escaped Androids must face what it is to be human',
    authImg: '../public/philip-k-dick.png',
    authName: 'Philip K. Dick',
    yearReleased: '1968'
  },
  {
    img: '../public/dispossessed.png',
    title: 'The Dispossessed',
    desc: 'Exploring an ambiguous Anarchist Utopian world through wars, peace, politics and Taoist philosophy. How humans come to govern and effect each other and to find the strength in weakness',
    authName: 'Ursula K. LeGuin',
    authImg: '../public/ursula-k-le-guin.png',
    yearReleased: '1974'
  }
]

const cinema = [
	{
    img: '../public/logans-run.png',
    title: 'Logan\'s Run',
    desc: 'Human civilization flourishes under a computer-regulated geodesic dome designed for pleasures. Freedom awaits at a dangerous world outside, would you run or stay?',
    authName: 'Michael Anderson',
    authImg: '../public/m-anderson.png',
    yearReleased: '1976'
  },
   {
    img: '../public/akira.png',
    title: 'Akira',
    desc: 'Neo-Tokyo is annihilated post WWIII, crumbling beneath rebellions and biker gangs. A boy discovers he suddenly gains terrifying telekinetic power as the miltary top-secret is unearthed, threatening every existence',
    authName: 'Katsuhiro Otomo',
    authImg: '../public/katsuhiro-otomo.png',
    yearReleased: '1988'
  },
   {
    img: '../public/total-recall.png',
    title: 'Total Recall',
    desc: 'A construction worker has recurring dreams of Mars and a mysterious woman, but remember- every secret desire can become reality once you visit Rekall, a company that provides memory implants of vacations',
    authName: 'Paul Verhoeven',
    authImg: '../public/paul-verhoeven.png',
    yearReleased: '1990'
  },
   {
    img: '../public/fury-road.png',
    title: 'Mad Max: Fury Road',
    desc: 'As civilization collapsed, water and gasoline became rare commodities. A tyrant and his crazed army took control of a desert wasteland forcing women to breed and men to become blood bags, but not everyone obeyed',
    authName: 'George Miller',
    authImg: '../public/george-miller.png',
    yearReleased: '2015'
  }
]

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Stories  storiesTitle="In Literature"
                stories={literature} />
      <Stories 	storiesTitle="In Cinema"
      					stories={cinema} />
      <Footer />
    </div>
  );
}

export default App;
