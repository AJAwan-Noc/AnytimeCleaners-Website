const CLIENTS = [
  { name: 'IHG', image: '/images/Clients/IHG.png' },
  { name: 'McDonald\'s', image: '/images/Clients/McDonalds.png' },
  { name: 'Airbnb', image: '/images/Clients/Airbnb.png' },
  { name: 'ALDI', image: '/images/Clients/ALDI.png' },
  { name: 'Burger Road', image: '/images/Clients/Burgerroad.webp' },
  { name: 'Anytime Fitness', image: '/images/Clients/AnytimeFitness.png' },
  { name: 'Holiday Inn Express', image: '/images/Clients/HolidayInnExpress.png' },
  { name: 'Goodlife Fitness', image: '/images/Clients/GoodlifeFitness.png' },
  { name: 'Metricon', image: '/images/Clients/Metricon.png' },
  { name: 'Nandos', image: '/images/Clients/Nandos.png' },
  { name: 'Next Hotel', image: '/images/Clients/NextHotel.png' },
  { name: 'Sushi Sushi', image: '/images/Clients/SushiSushi_Stacked.webp' },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center font-heading font-bold text-2xl text-brand-text/40 uppercase tracking-widest">
          We Have Proudly Served
        </h2>
      </div>

      <div className="relative flex w-full overflow-hidden group">
        {/* Left and Right Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 max-w-[200px] bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 max-w-[200px] bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee Container (paused on hover) */}
        <div className="flex w-[200%] md:w-max animate-marquee hover:[animation-play-state:paused] ease-linear py-12">
          {[...Array(2)].map((_, listIndex) => (
            <div key={listIndex} className="flex flex-shrink-0 gap-16 md:gap-40 px-12 md:px-20 items-center justify-around w-1/2 md:w-auto">
              {CLIENTS.map((client, idx) => (
                <div 
                  key={`${listIndex}-${idx}`}
                  className="flex flex-shrink-0 items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                >
                  <img 
                    src={client.image} 
                    alt={`${client.name} logo`}
                    className="h-10 md:h-12 w-auto max-w-[150px] md:max-w-none object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
