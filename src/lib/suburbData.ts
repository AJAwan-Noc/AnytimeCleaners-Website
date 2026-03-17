export interface Suburb {
  name: string;
  slug: string;
  intro: string;
  nearby: string[];
}

export const SUBURBS: Suburb[] = [
  {
    name: 'Melbourne CBD',
    slug: 'melbourne-cbd',
    intro: `Melbourne CBD is the beating heart of Victoria's commercial landscape, home to thousands of corporate offices, retail outlets, hospitality venues, and government institutions. Anytime Cleaners has been servicing Melbourne's Central Business District for over 25 years, providing reliable, professional cleaning solutions tailored to the fast-paced demands of inner-city businesses. From early-morning office cleans before staff arrive to late-night retail sanitisation, our teams work around your schedule to keep your Melbourne CBD premises spotless and compliant.`,
    nearby: ['Southbank', 'Docklands', 'South Melbourne', 'Carlton', 'East Melbourne'],
  },
  {
    name: 'Southbank',
    slug: 'southbank',
    intro: `Southbank is one of Melbourne's most prestigious commercial and cultural precincts, featuring world-class restaurants, luxury hotels, arts venues, and high-rise corporate towers. Our specialist cleaning teams understand the elevated standards expected in Southbank properties and deliver meticulous, detail-oriented service every time. Whether it's a five-star hotel suite, a riverside restaurant, or a modern corporate office, Anytime Cleaners brings certified, eco-friendly cleaning expertise directly to your Southbank facility.`,
    nearby: ['Melbourne CBD', 'South Melbourne', 'Port Melbourne', 'Docklands', 'St Kilda Road'],
  },
  {
    name: 'Docklands',
    slug: 'docklands',
    intro: `Docklands is Melbourne's premier waterfront business district, housing major corporate headquarters, media outlets, sporting venues, and modern residential towers. Anytime Cleaners has extensive experience servicing this dynamic precinct, understanding the unique cleaning requirements of both large commercial floor plates and specialised facilities like stadiums and broadcast studios. Our Docklands cleaning teams are background-checked, fully insured, and equipped with commercial-grade eco-friendly products to maintain your facility to the highest standard.`,
    nearby: ['Melbourne CBD', 'Southbank', 'West Melbourne', 'North Melbourne', 'Footscray'],
  },
  {
    name: 'South Melbourne',
    slug: 'south-melbourne',
    intro: `South Melbourne is a thriving commercial and light-industrial suburb situated just minutes from the CBD, home to creative agencies, tech startups, medical centres, and established retail businesses. Our South Melbourne cleaning teams deliver flexible, scalable commercial cleaning solutions designed to keep pace with this vibrant suburb's diverse business community. From bi-weekly office maintenance to comprehensive post-construction cleans, Anytime Cleaners is your trusted commercial cleaning partner in South Melbourne.`,
    nearby: ['Melbourne CBD', 'Southbank', 'Port Melbourne', 'Albert Park', 'St Kilda'],
  },
  {
    name: 'Richmond',
    slug: 'richmond',
    intro: `Richmond is Melbourne's most dynamic inner-east suburb, seamlessly blending creative industries, boutique retail, professional services, and healthcare facilities along its iconic Church Street and Swan Street corridors. Anytime Cleaners has a deep familiarity with Richmond's diverse commercial landscape, providing tailored cleaning programs for everything from busy café kitchens to multi-storey corporate offices. Our Richmond-based teams operate with the efficiency and discretion your thriving business demands.`,
    nearby: ['Melbourne CBD', 'South Yarra', 'Hawthorn', 'Collingwood', 'Fitzroy'],
  },
  {
    name: 'South Yarra',
    slug: 'south-yarra',
    intro: `South Yarra is synonymous with luxury, sophistication, and high-end commercial activity, from Chapel Street's upscale fashion retail to Toorak Road's prestigious professional services firms and five-star hotels. Anytime Cleaners provides premium commercial cleaning solutions tailored to South Yarra's discerning business community, ensuring your premises always reflect the premium standards your clients and customers expect. Our uniformed, fully-vetted cleaning professionals bring impeccable attention to detail to every South Yarra engagement.`,
    nearby: ['Richmond', 'St Kilda', 'Prahran', 'Toorak', 'Melbourne CBD'],
  },
  {
    name: 'St Kilda',
    slug: 'st-kilda',
    intro: `St Kilda is one of Melbourne's most vibrant and eclectic commercial precincts, home to award-winning restaurants, beachside hospitality venues, creative studios, and a thriving small business community. The high foot-traffic and demanding hygiene standards of St Kilda's hospitality and retail sectors require a cleaning partner that's reliable, thorough, and available around the clock. Anytime Cleaners has the experience, equipment, and certified personnel to keep your St Kilda business looking its absolute best every single day.`,
    nearby: ['South Melbourne', 'South Yarra', 'Prahran', 'Elwood', 'Port Melbourne'],
  },
  {
    name: 'Carlton',
    slug: 'carlton',
    intro: `Carlton is a culturally rich suburb renowned for its cosmopolitan restaurant strips, leading university campuses, medical research facilities, and boutique professional offices. Anytime Cleaners provides specialised commercial cleaning services across all of Carlton's diverse facilities — from thorough kitchen and restaurant cleans along Lygon Street to compliant, chemical-safe cleaning solutions for medical and research laboratory environments. Our Carlton cleaning teams are available after hours to minimise disruption to your business operations.`,
    nearby: ['Melbourne CBD', 'Fitzroy', 'Brunswick', 'North Melbourne', 'Parkville'],
  },
  {
    name: 'Fitzroy',
    slug: 'fitzroy',
    intro: `Fitzroy is Melbourne's creative and co-working heartland, brimming with graphic design studios, advertising agencies, artisan food producers, craft beverage businesses, and independent retail shops. Our commercial cleaning services are perfectly attuned to Fitzroy's unique character — flexible, eco-conscious, and discreet. Whether you need a daily clean for a bustling co-working space or a comprehensive monthly service for your creative studio, Anytime Cleaners delivers consistent, high-quality results across all Fitzroy business types.`,
    nearby: ['Carlton', 'Collingwood', 'Richmond', 'Brunswick', 'Northcote'],
  },
  {
    name: 'Brunswick',
    slug: 'brunswick',
    intro: `Brunswick is a rapidly evolving northern suburb with a diverse commercial scene encompassing manufacturing businesses, technology companies, cafes, restaurants, and a thriving arts community. Anytime Cleaners brings industrial-grade cleaning expertise alongside eco-friendly residential-style detailing to meet the full spectrum of Brunswick's cleaning needs. Our teams are well-versed in the specific requirements of Brunswick's light industrial facilities, creative workspaces, and high-volume hospitality environments.`,
    nearby: ['Carlton', 'Fitzroy', 'Coburg', 'Northcote', 'Moreland'],
  },
  {
    name: 'Hawthorn',
    slug: 'hawthorn',
    intro: `Hawthorn is an affluent inner-eastern suburb home to prestigious private schools, specialist medical practices, boutique professional services firms, and upmarket retail along Glenferrie Road. Anytime Cleaners has built a strong reputation in Hawthorn for delivering meticulous, reliable cleaning services that match the high expectations of this discerning business community. From school classrooms and medical suites to corporate offices and retail boutiques, our Hawthorn cleaning programs are customised to your exact specifications.`,
    nearby: ['Richmond', 'Camberwell', 'Kew', 'South Yarra', 'Malvern'],
  },
  {
    name: 'Camberwell',
    slug: 'camberwell',
    intro: `Camberwell is a thriving commercial hub in Melbourne's eastern suburbs, featuring a busy retail precinct at Burke Road, a major medical and allied health professional community, banking institutions, and significant office space. Anytime Cleaners provides comprehensive commercial cleaning programs in Camberwell designed to maintain exemplary hygiene standards across all facility types. Our locally assigned teams understand the suburb's commercial rhythms and deliver consistent results that protect your business's professional reputation.`,
    nearby: ['Hawthorn', 'Kew', 'Box Hill', 'Glen Iris', 'Balwyn'],
  },
  {
    name: 'Kew',
    slug: 'kew',
    intro: `Kew is a prestigious eastern suburb known for its grand period commercial properties, specialist healthcare facilities, top-tier educational institutions, and established professional services community. Our Anytime Cleaners Kew team provides expert commercial cleaning services that are sensitive to the character and requirements of Kew's distinguished facilities. From heritage-listed commercial buildings to modern medical consulting suites, we bring the same rigorous quality standards to every engagement in this beautiful suburb.`,
    nearby: ['Camberwell', 'Hawthorn', 'Doncaster', 'Balwyn', 'Melbourne CBD'],
  },
  {
    name: 'Box Hill',
    slug: 'box-hill',
    intro: `Box Hill is one of Melbourne's most significant commercial and transport hubs in the eastern suburbs, featuring a major retail and dining precinct, the Box Hill Hospital complex, a thriving professional services sector, and excellent transport connectivity. Anytime Cleaners provides comprehensive, industry-compliant commercial cleaning solutions across all of Box Hill's facility types — from the demanding hygiene requirements of the healthcare sector to high-traffic retail and dining cleaning. Our Box Hill teams operate with maximum efficiency and minimum disruption to your business.`,
    nearby: ['Doncaster', 'Camberwell', 'Kew', 'Glen Waverley', 'Nunawading'],
  },
  {
    name: 'Doncaster',
    slug: 'doncaster',
    intro: `Doncaster is a major commercial centre in Melbourne's northeast, anchored by Westfield Doncaster and surrounded by a thriving business park community, medical facilities, childcare centres, and professional services offices. Anytime Cleaners delivers reliable, scalable commercial cleaning services tailored to Doncaster's diverse and growing business community. Whether your Doncaster facility is a busy retail outlet, a medical practice, or a modern office tower, our professionally trained cleaning teams will exceed your expectations every visit.`,
    nearby: ['Box Hill', 'Kew', 'Reservoir', 'Templestowe', 'Balwyn North'],
  },
  {
    name: 'Glen Waverley',
    slug: 'glen-waverley',
    intro: `Glen Waverley is a thriving commercial and retail hub in Melbourne's southeast, home to major shopping centres, corporate parks, the Glen Waverley Activity Centre, technology companies, and a rapidly growing professional services sector. Anytime Cleaners has extensive experience servicing Glen Waverley's modern commercial buildings, ensuring spotlessly clean, compliant, and welcoming environments for your staff and visitors. Our Glen Waverley cleaning programs are flexible enough to accommodate the suburb's diverse business mix and 24/7 operational demands.`,
    nearby: ['Clayton', 'Box Hill', 'Dandenong', 'Springvale', 'Wheelers Hill'],
  },
  {
    name: 'Clayton',
    slug: 'clayton',
    intro: `Clayton is a major education, research, and industrial hub in Melbourne's southeast — home to Monash University's main campus, a world-class medical research precinct, significant light industrial activity, and a busy retail and dining strip along Clayton Road. Anytime Cleaners provides specialised commercial cleaning services that meet the stringent hygiene and safety requirements of Clayton's research, healthcare, and institutional facilities, alongside comprehensive routine cleaning programs for the suburb's commercial and industrial properties.`,
    nearby: ['Glen Waverley', 'Springvale', 'Dandenong', 'Oakleigh', 'Notting Hill'],
  },
  {
    name: 'Dandenong',
    slug: 'dandenong',
    intro: `Dandenong is one of Melbourne's most significant industrial and commercial outer-suburban hubs, featuring a vast employment zone, a major regional retail centre, diverse light and heavy manufacturing, and key logistics and distribution operations. Anytime Cleaners brings heavy-duty, industrial-grade cleaning expertise to Dandenong's demanding commercial and manufacturing environment. Our fully equipped Dandenong cleaning teams handle everything from factory floor deep-cleans and warehouse sanitisation to office common area maintenance and retail cleaning.`,
    nearby: ['Springvale', 'Clayton', 'Cranbourne', 'Hallam', 'Noble Park'],
  },
  {
    name: 'Springvale',
    slug: 'springvale',
    intro: `Springvale is a vibrant and bustling southeastern suburb renowned for its diverse multicultural community, thriving street-level retail and restaurant scene, and active light-industrial sector. High customer footfall and the demanding cleanliness standards of Springvale's food businesses and retail stores make professional commercial cleaning essential. Anytime Cleaners provides thorough, efficient cleaning solutions across all Springvale facility types, ensuring your business maintains the hygienic, welcoming environment your customers deserve.`,
    nearby: ['Dandenong', 'Clayton', 'Keysborough', 'Noble Park', 'Oakleigh'],
  },
  {
    name: 'Footscray',
    slug: 'footscray',
    intro: `Footscray is one of Melbourne's most vibrant and rapidly developing western suburbs, undergoing significant urban renewal with new commercial precincts, healthcare and education facilities, creative workspaces, and a beloved multicultural restaurant and retail culture along Hopkins Street. Anytime Cleaners provides flexible, professional commercial cleaning services that match Footscray's evolving business landscape — from new-build commercial offices and construction-phase post-build cleans to established retail and hospitality venues.`,
    nearby: ['Docklands', 'Sunshine', 'Seddon', 'West Footscray', 'Melbourne CBD'],
  },
  {
    name: 'Sunshine',
    slug: 'sunshine',
    intro: `Sunshine is a key transport and employment hub in Melbourne's west, home to significant light and medium industrial operations, a busy retail and commercial centre, healthcare facilities, and improving infrastructure as part of broader western suburban development. Anytime Cleaners provides robust, industrial-capable commercial cleaning services across Sunshine's diverse business community, ensuring your premises meet all safety, health, and aesthetic standards. Our Sunshine teams are experienced in high-volume, demanding environments and work efficiently to minimise downtime.`,
    nearby: ['Footscray', 'Werribee', 'Tarneit', 'Truganina', 'St Albans'],
  },
  {
    name: 'Werribee',
    slug: 'werribee',
    intro: `Werribee is a rapidly growing southern-western regional hub with a major retail and commercial strip, significant agricultural and horticultural industries, world-class tourist attractions, and expanding residential and business communities. Anytime Cleaners proudly extends its premium commercial cleaning services to Werribee, supporting the suburb's growing business sector with reliable, eco-friendly, and fully insured cleaning programs. Our team services everything from Werribee's busy retail outlets and professional office spaces to industrial and hospitality facilities.`,
    nearby: ['Point Cook', 'Tarneit', 'Truganina', 'Hoppers Crossing', 'Laverton'],
  },
  {
    name: 'Point Cook',
    slug: 'point-cook',
    intro: `Point Cook is one of Melbourne's fastest-growing outer-western suburbs, with a rapidly expanding commercial sector comprising retail strips, childcare facilities, medical centres, professional service businesses, and community facilities serving its large and growing population. Anytime Cleaners provides targeted commercial cleaning solutions for Point Cook's modern business infrastructure, ensuring your premises are always clean, hygienic, and professionally presented. Our locally aware teams deliver consistent quality on every visit to your Point Cook facility.`,
    nearby: ['Werribee', 'Tarneit', 'Hoppers Crossing', 'Altona', 'Laverton'],
  },
  {
    name: 'Tarneit',
    slug: 'tarneit',
    intro: `Tarneit is among Melbourne's most energetically developing outer-western growth corridors, with rapidly emerging retail precincts, business parks, healthcare facilities, schools, and community centres to support its booming population. Anytime Cleaners is well-positioned to support Tarneit's growing commercial community with professional, scalable cleaning services tailored to the suburb's modern facilities. From new-build retail centres and professional offices to emerging industrial operations, our Tarneit teams deliver dependable results every time.`,
    nearby: ['Truganina', 'Werribee', 'Point Cook', 'Hoppers Crossing', 'Wyndham Vale'],
  },
  {
    name: 'Truganina',
    slug: 'truganina',
    intro: `Truganina is a significant and fast-growing industrial and logistics hub in Melbourne's western growth corridor, home to large-scale distribution centres, manufacturing facilities, and business parks serving major national and international companies. Anytime Cleaners specialises in the demanding industrial and commercial cleaning requirements of Truganina's warehousing, logistics, and manufacturing sector — providing large-area floor care, high-bay cleaning, amenities maintenance, and office cleaning services. Our Truganina teams are fully equipped and certified to operate safely in complex industrial environments.`,
    nearby: ['Tarneit', 'Sunshine', 'Hoppers Crossing', 'Laverton North', 'Werribee'],
  },
  {
    name: 'Reservoir',
    slug: 'reservoir',
    intro: `Reservoir is a large, diverse northern suburb with a strong commercial identity encompassing light industrial businesses, retail and service trades along High Street, medical and allied health practices, and a growing professional services community. Anytime Cleaners provides comprehensive commercial cleaning programs across Reservoir's full business spectrum — from small independent retail stores and medical suites to larger light industrial operations and community facilities. Our Reservoir teams are reliable, punctual, and committed to delivering exceptional results on every clean.`,
    nearby: ['Preston', 'Coburg', 'Northcote', 'Thornbury', 'Bundoora'],
  },
  {
    name: 'Preston',
    slug: 'preston',
    intro: `Preston is a bustling northern suburb featuring a vibrant retail and commercial strip along High Street, significant light industry, healthcare facilities, community services, and a rapidly growing inner-north business community. Anytime Cleaners has extensive experience delivering high-quality commercial cleaning services across Preston's diverse facility types, maintaining the clean, hygienic, and professional standards your business and customers rely on. Our Preston cleaning professionals work efficiently and discreetly to ensure your operations run without interruption.`,
    nearby: ['Reservoir', 'Northcote', 'Coburg', 'Thornbury', 'Doncaster'],
  },
  {
    name: 'Coburg',
    slug: 'coburg',
    intro: `Coburg is a well-established northern suburb with a thriving Sydney Road commercial strip, light manufacturing businesses, medical centres, and a growing creative and hospitality sector. Our Anytime Cleaners Coburg team delivers consistent, professional commercial cleaning services tailored to the suburb's diverse commercial landscape. Whether your Coburg business is a busy café, a medical practice, a light manufacturing facility, or a modern office, we have the expertise, equipment, and eco-friendly products to maintain your premises to the highest standard.`,
    nearby: ['Brunswick', 'Preston', 'Reservoir', 'Northcote', 'Fawkner'],
  },
  {
    name: 'Northcote',
    slug: 'northcote',
    intro: `Northcote is a vibrant and characterful inner-northern suburb renowned for its buzzing High Street cafe culture, creative industries, independent retail, health and wellness businesses, and growing professional services community. High customer expectations and the competitive nature of Northcote's hospitality and retail landscape make impeccable cleanliness a business necessity. Anytime Cleaners provides flexible, eco-conscious commercial cleaning services that respect Northcote's progressive values while delivering spotless results every single time.`,
    nearby: ['Fitzroy', 'Carlton', 'Brunswick', 'Thornbury', 'Reservoir'],
  },
  {
    name: 'Essendon',
    slug: 'essendon',
    intro: `Essendon is a prestigious and well-established northwestern suburb with a strong commercial identity anchored by Moonee Ponds and Essendon's own high-street retail, a significant medical and allied health services sector, professional services offices, and excellent transport connections that make it a sought-after business location. Anytime Cleaners provides premium commercial cleaning solutions in Essendon tailored to the suburb's mix of classic commercial buildings, modern medical suites, and high-end retail environments, ensuring your facility always presents with the professionalism your clientele expects.`,
    nearby: ['Brunswick', 'Coburg', 'Footscray', 'Moonee Ponds', 'Keilor'],
  },
];

export function getSuburbBySlug(slug: string): Suburb | undefined {
  return SUBURBS.find(s => s.slug === slug);
}
