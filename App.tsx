import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';
import TestimonialCard from './components/TestimonialCard';
import PricingCard from './components/PricingCard';
import { HeistIcon, CustomizeIcon, VersusIcon } from './components/icons';
import ImageSlider from './components/ImageSlider';

const App: React.FC = () => {
  const gtaOnlineImages = [
    'https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/148ok/abd501a07bbe1bd43426a89e84309fc924b87dc3.jpg'
  ];

  return (
    <div className="bg-dark-bg text-gray-200 min-h-screen font-sans antialiased">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images6.alphacoders.com/137/thumb-1920-1371030.png')` }}></div>
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="relative z-10 p-8">
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight uppercase" style={{ textShadow: '0 0 8px rgba(0, 255, 255, 0.5), 0 0 5px rgba(255, 20, 147, 0.5)' }}>
              Grand Theft Auto <span className="text-red-600">Online</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
             Discover GTA Online, a dynamic and ever-evolving online universe for up to 30 players, including all existing gameplay upgrades and content released since launch, ready to enjoy solo or with friends.
            </p>
            <a
              href="https://locked2.com/cl/i/rnd1xl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-lg shadow-purple-500/50 hover:scale-105 hover:shadow-glow-purple"
            >
              Download Now
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="explore" className="py-24 bg-dark-bg">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-2 text-brand-cyan">Explore Los Santos & Blaine County</h2>
            <p className="text-gray-400 mb-12">An ever-evolving world of choices and ways to play.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<HeistIcon />}
                title="Co-operative Heists"
                description="Team up to pull off daring multi-part robberies for big payouts."
              />
              <FeatureCard
                icon={<CustomizeIcon />}
                title="Endless Customization"
                description="Customize your character, vehicles, and properties to build your criminal empire."
              />
              <FeatureCard
                icon={<VersusIcon />}
                title="Competitive Modes"
                description="Compete in a huge range of Rockstar-created races, deathmatches, and adversary modes."
              />
            </div>
          </div>
        </section>

        {/* GTA Online Section */}
        <section id="gta-online" className="py-24 bg-dark-card overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg shadow-glow-pink">
                <ImageSlider images={gtaOnlineImages} />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4 text-brand-pink">Grand Theft Auto Online</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Discover GTA Online, a dynamic and ever-evolving online universe for up to 30 players, including all existing gameplay upgrades and content released since launch, ready to enjoy solo or with friends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="player-reviews" className="py-24 bg-dark-bg">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-2 text-brand-pink">What Players Are Saying</h2>
            <p className="text-gray-400 mb-12">Join millions of players in the sprawling metropolis of Los Santos.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="The chaos is the best part. You never know what's going to happen when you log in. 10/10."
                name="xX_LS_Santos_Xx"
                title="Level 250 Grinder"
                avatarUrl="https://i.pravatar.cc/100?u=player1"
              />
              <TestimonialCard
                quote="After a long day, there's nothing better than cruising through the city with friends, causing a little mayhem."
                name="GrooveSt_4_Lyfe"
                title="Racing Enthusiast"
                avatarUrl="https://i.pravatar.cc/100?u=player2"
              />
              <TestimonialCard
                quote="From high-speed chases to elaborate heists, this game has it all. The updates just keep making it better."
                name="CEO_of_Crime"
                title="Bunker Baron"
                avatarUrl="https://i.pravatar.cc/100?u=player3"
              />
            </div>
          </div>
        </section>
        
        {/* History Section */}
        <section id="history" className="py-24 bg-dark-bg">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-cyan">A Decade of Evolution</h2>
              <p className="text-gray-400">Tracing the major updates that shaped Los Santos.</p>
            </div>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-3 md:left-1/2 top-0 h-full w-0.5 bg-gray-700"></div>
              
              {/* Timeline Item 1 */}
              <div className="relative mb-8 pl-12 md:pl-0">
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-dark-card p-6 rounded-lg shadow-lg border border-gray-700 hover:border-brand-purple hover:shadow-glow-purple/50 transition-all duration-300">
                      <p className="text-brand-purple font-bold mb-1">2013</p>
                      <h3 className="text-xl font-bold">The Beginning</h3>
                      <p className="text-gray-400 mt-2">GTA Online launches, introducing players to a persistent, shared world of crime and opportunity.</p>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-brand-cyan border-4 border-dark-bg shadow-md"></div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative mb-8 pl-12 md:pl-0">
                <div className="md:flex md:items-center md:flex-row-reverse">
                  <div className="md:w-1/2 md:pl-8 md:text-left">
                    <div className="bg-dark-card p-6 rounded-lg shadow-lg border border-gray-700 hover:border-brand-pink hover:shadow-glow-pink/50 transition-all duration-300">
                      <p className="text-brand-pink font-bold mb-1">2015</p>
                      <h3 className="text-xl font-bold">Heists Update</h3>
                      <p className="text-gray-400 mt-2">The highly-anticipated update allows players to team up for complex, multi-stage robbery missions.</p>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-brand-pink border-4 border-dark-bg shadow-md"></div>
                  <div className="md:w-1/2 md:pr-8"></div>
                </div>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="relative mb-8 pl-12 md:pl-0">
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                     <div className="bg-dark-card p-6 rounded-lg shadow-lg border border-gray-700 hover:border-brand-purple hover:shadow-glow-purple/50 transition-all duration-300">
                      <p className="text-brand-purple font-bold mb-1">2017</p>
                      <h3 className="text-xl font-bold">Gunrunning</h3>
                      <p className="text-gray-400 mt-2">Players become arms dealers, operating from underground bunkers to research and sell illegal weaponry.</p>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-brand-cyan border-4 border-dark-bg shadow-md"></div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative mb-8 pl-12 md:pl-0">
                <div className="md:flex md:items-center md:flex-row-reverse">
                  <div className="md:w-1/2 md:pl-8 md:text-left">
                     <div className="bg-dark-card p-6 rounded-lg shadow-lg border border-gray-700 hover:border-brand-pink hover:shadow-glow-pink/50 transition-all duration-300">
                      <p className="text-brand-pink font-bold mb-1">2020</p>
                      <h3 className="text-xl font-bold">The Cayo Perico Heist</h3>
                      <p className="text-gray-400 mt-2">A new island location offers a massive heist that can be completed solo, changing the game's economy.</p>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-brand-pink border-4 border-dark-bg shadow-md"></div>
                  <div className="md:w-1/2 md:pr-8"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="shark-cards" className="py-24 bg-dark-card">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-2 text-brand-cyan">Fuel Your Hustle</h2>
            <p className="text-gray-400 mb-12">Get a head start in Los Santos with Shark Cash Cards.</p>
            <div className="flex flex-wrap justify-center items-stretch gap-8">
              <PricingCard
                plan="Tiger Shark Card"
                price="$9.99"
                features={['$500,000 in-game currency']}
              />
              <PricingCard
                plan="Whale Shark Card"
                price="$49.99"
                features={['$4,250,000 in-game currency', 'Most Popular Choice']}
                isFeatured={true}
              />
              <PricingCard
                plan="Megalodon Shark Card"
                price="$99.99"
                features={['$10,000,000 in-game currency', 'Best Value']}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-dark-bg">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Your Criminal Empire Awaits</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Jump into Grand Theft Auto Online to start your journey to the top of the criminal underworld of Los Santos and Blaine County.
            </p>
            <a
              href="https://locked2.com/cl/i/rnd1xl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand-cyan to-brand-pink text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-lg shadow-pink-500/50 hover:scale-105 hover:shadow-glow-pink"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;