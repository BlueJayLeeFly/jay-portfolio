import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

import React from 'react';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <h2>Build With React</h2>
      <Card />
    </>
  );
}
