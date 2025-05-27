import Header from './components/Header';
import Services from './components/Services';
import WhatCanIDo from './components/WhatCanIdo';
import Work from './components/Work'

export default async function HomePage() {


  return (
    <>
      <Header />
      <Services />
      <WhatCanIDo />
      <Work />
    </>
  );
}
