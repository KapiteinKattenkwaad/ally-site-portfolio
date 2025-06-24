export const revalidate = 60;

import Header from './components/Header';
// import Services from './components/Services';
import WhatCanIDo from './components/WhatCanIdo';
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default async function HomePage() {


  return (
    <>
      <Header />
      {/* <Services /> */}
      <WhatCanIDo />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
