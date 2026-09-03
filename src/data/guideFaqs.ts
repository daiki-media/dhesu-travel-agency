/**
 * Frequently asked questions for the Holiday Idea destination guides.
 *
 * These live here rather than inside each guide component so both sides can
 * read them: the guide (a client component) renders them in the accordion, and
 * the route (a server component) feeds the same list to `faqQuestions()` for
 * the page's FAQPage markup. A server component importing from a `"use client"`
 * module receives a client reference rather than an array, which is why the
 * data cannot simply be exported from the component.
 *
 * Every question and answer is taken verbatim from the approved .docx draft for
 * its page. Keyed by `<destination>/<key>`, matching the guide registry.
 */
export type GuideFaq = { question: string; answer: string };

export const guideFaqs: Record<string, GuideFaq[]> = {
  "indonesia/bali-holiday-travel-guide-2026": [
  {
    question: "How many days are required for your first stay in Bali?",
    answer:
      "Generally, four days are sufficient for first-timers, while five or six days would enable them to explore several places within the same duration.",
  },
  {
    question: "Are the packages provided by Bali private or group tours?",
    answer:
      "In Bali, most of the tour packages offered are private, meaning that tourists do not have to join big coach tours.",
  },
  {
    question: "What does a romantic Bali honeymoon package include?",
    answer:
      "Such packages comprise sightseeing, romantic cruise at sunset, candlelight dinner, and accommodations as per the choice of couples.",
  },
  {
    question: "Is Bali appropriate for a family vacation with young kids?",
    answer:
      "Bali is an ideal place for vacations, whether you are going alone or with your family.",
  },
  {
    question: "When is the best time to go to Bali?",
    answer:
      "Bali is always a destination to explore all year round; however, the dry season from about April to October is said to be the most appropriate period to visit.",
  },
  {
    question:
      "Is it possible to combine a tour to Bali with some kind of adventure, for example, ATV tour?",
    answer:
      "Yes, you can include ATV tours around Ubud to your Bali package and make it more adventurous.",
  },
  {
    question: "How far in advance should I make my reservation in case of Bali package?",
    answer: "Reserving in advance a few weeks up to a couple of months ahead is recommended.",
  },
  {
    question: "Is it possible to customize a Bali package?",
    answer:
      "Most packages are usually flexible with respect to pacing, other destinations such as Nusa Penida, hotels of different categories, and activities.",
  },
],
  "vietnam/vietnam-tour-travel-guide-2026": [
  {
    question: "Do Malaysians need a visa to visit Vietnam?",
    answer:
      "Malaysian passport holders generally benefit from visa-free entry for short tourist stays under ASEAN reciprocal arrangements. Confirm current requirements before travel.",
  },
  {
    question: "Which region of Vietnam should I visit first?",
    answer:
      "North Vietnam (Hanoi and Halong Bay) is the most classic first-time itinerary, though Central Vietnam's beach and culture combination is also popular.",
  },
  {
    question: "Can I combine multiple regions in one trip?",
    answer:
      "Yes, longer itineraries of 7 or more days often combine two regions, such as North and Central Vietnam, for a more comprehensive experience.",
  },
  {
    question: "What's the highlight of a Halong Bay itinerary?",
    answer:
      "An overnight cruise through the bay's limestone islands is typically the centrepiece, offering scenery and pacing very different from Vietnam's cities.",
  },
  {
    question: "Is the Da Nang to Hue train journey worth including?",
    answer:
      "Yes, the scenic coastal train route between Da Nang and Hue has become a popular highlight in its own right, not just a transport link.",
  },
  {
    question: "What's the best time of year to visit Vietnam?",
    answer:
      "This varies by region, since Vietnam's long geography spans different climate zones. A consultant can advise on the best timing for your specific itinerary.",
  },
  {
    question: "Are Vietnam packages suitable for families?",
    answer:
      "Yes, most regions offer a mix of cultural and relaxed activities suitable for families, and itineraries can be adjusted based on your group's preferences.",
  },
  {
    question: "How many days should I allow for a single-region Vietnam trip?",
    answer:
      "Most single-region itineraries run 4 to 5 days, allowing enough time to see key highlights without an overly rushed pace.",
  },
],
  "thailand/phuket-krabi-holiday-guide-2026": [
  {
    question: "How can I travel between Phuket and Krabi?",
    answer:
      "Traveling can be done through either road transfer (several hours) or sea transfer, based on the particular itinerary that you will choose.",
  },
  {
    question: "How long should my trip be for the combination of Phuket and Krabi?",
    answer:
      "The combination of Phuket and Krabi will take 6 to 7 days since both locations should get equal amounts of attention.",
  },
  {
    question: "What is the difference between Phuket and Krabi?",
    answer:
      "The difference is that Phuket is more developed and has a lot of night clubs and resorts, while Krabi has impressive nature with stunning views and peaceful atmosphere.",
  },
  {
    question: "Is James Bond Island included in most itineraries?",
    answer: "This is a popular option for optional day trip from Phuket or Krabi.",
  },
  {
    question: "What's the best time of year to visit Phuket and Krabi?",
    answer:
      "The dry season, roughly November through April, generally offers the most reliable weather for beach activities and boat-based island trips.",
  },
  {
    question: "Is Krabi suitable for travellers who don't want a busy nightlife scene?",
    answer:
      "Yes, Krabi is generally quieter and more nature-focused than Phuket, making it well suited to travellers prioritising relaxation and scenery.",
  },
  {
    question: "Can I visit just Phuket or just Krabi instead of combining both?",
    answer:
      "Yes, single-destination itineraries are available for both, though combining them is a popular way to experience more variety in one trip.",
  },
  {
    question: "Are Phuket-Krabi packages suitable for families?",
    answer:
      "Yes, both destinations offer family-friendly beaches and activities, and itineraries can be adjusted for pacing suited to travelling with children.",
  },
],
  "india/india-tour-travel-guide-2026": [
  {
    question: "Which is the most popular first-timer India tour package?",
    answer:
      "The Golden Triangle Tour, which includes Delhi, Agra, and Jaipur, is the most popular tour package for first-timers in India.",
  },
  {
    question: "Is it possible to take a relaxing break rather than do sightseeing in Kerala?",
    answer:
      "Yes, the backwaters in Kerala, where there are houseboat experiences and visits to tea plantations, provide an inherently relaxing pace when compared to other packages with monuments.",
  },
  {
    question: "In what way does Kashmir differ from the rest of the Indian destinations?",
    answer:
      "Kashmir provides its tourists with the scenic view of the Himalayas, houseboats on Dal Lake, and different climate and geography.",
  },
  {
    question: "Is it possible to combine pilgrimage with sightseeing?",
    answer:
      "Yes, most of the spiritual tours include visits to temples and pilgrimages along with sightseeing.",
  },
  {
    question: "How many days should I plan for one region in India?",
    answer: "It would be ideal to spend four to six days in any single region of India.",
  },
  {
    question: "Are India packages customizable for families or specific interests?",
    answer:
      "Yes, most itineraries can be adjusted for pacing, additional destinations, hotel category, and specific interests like pilgrimage arrangements.",
  },
  {
    question: "What's the best time of year to visit North India versus South India?",
    answer:
      "This varies significantly by region and season, given India's size and climate diversity. A consultant can advise on optimal timing for your chosen itinerary.",
  },
  {
    question: "Can multiple India regions be combined in one trip?",
    answer:
      "Yes, though given India's size, combining more than two regions typically requires a longer trip of 8 or more days to allow realistic travel time.",
  },
],
  "sri-lanka/sri-lanka-tour-travel-guide-2026": [
  {
    question: "How many days should I plan for a Sri Lanka trip?",
    answer:
      "A focused itinerary can work well in 4 days, while 6 to 8 days allows a more comprehensive combination of culture, hill country, wildlife, and beach time.",
  },
  {
    question: "Are Sri Lanka tours private or shared group tours?",
    answer:
      "Most Sri Lanka packages are run as 100% private tours with dedicated transport, rather than large shared coach groups.",
  },
  {
    question: "What's the highlight of a Nuwara Eliya visit?",
    answer:
      "Tea plantations and highland scenery are the main draw, alongside Horton Plains National Park, Gregory Lake, and Sita Temple.",
  },
  {
    question: "Does a safari experience form part of a regular Sri Lanka package tour?",
    answer:
      "Not necessarily, but a Yala National Park safari is definitely a sought after and common element in a more extensive itinerary.",
  },
  {
    question: "What are the top cultural sights that should be included in a Sri Lanka trip?",
    answer:
      "There are two cultural sites in Sri Lanka that are often regarded as the “must see” attractions – the Temple of the Tooth in Kandy and the Sigiriya Rock Fortress.",
  },
  {
    question: "Is it possible to include culture, nature and beach experience in one Sri Lanka tour?",
    answer:
      "Definitely yes, Sri Lanka's small land size allows you to combine several elements into one itinerary in a period of 6 days or more.",
  },
  {
    question: "Which season is the best for visiting Sri Lanka?",
    answer:
      "It largely depends on what regions you plan to cover with your itinerary – as some coasts may be influenced by monsoon periods at different times.",
  },
  {
    question: "Is Sri Lanka suitable for first-timer adjacent long-haul travel?",
    answer:
      "Yes, short flights from Malaysia together with a lot of variety make it a great destination for first-timers.",
  },
],
  "nepal/nepal-tour-travel-guide-2026": [
  {
    question: "Is trekking experience needed to visit Nepal?",
    answer:
      "No, regular Nepal tours of Kathmandu, Nagarkot, and Pokhara involve no walking, just sightseeing that can be done by anyone.",
  },
  {
    question: "Can I see views of Himalayan mountains without trekking?",
    answer:
      "Yes, there are such viewing places like Nagarkot or Sarangkot where you can have breathtaking Himalayan sunrises via short walk or short drive.",
  },
  {
    question: "How many days do I need to visit Nepal?",
    answer:
      "may spend 4 days on a proper Nepal tour; if you want to combine culture, views of mountains and wildlife, then 6 or 8 days will be enough.",
  },
  {
    question: "What is the Kumari in Kathmandu?",
    answer:
      "Kumari is a young girl, who is worshiped as a living goddess according to Nepalese tradition, so you should watch her if you visit Kathmandu.",
  },
  {
    question: "Is Chitwan National Park interesting to include in a Nepal tour?",
    answer:
      "Yes, if you are interested not only in culture and views of mountains but also in wildlife, Chitwan is a completely different experience for you.",
  },
  {
    question: "What's the best time of year to visit Nepal for mountain views?",
    answer:
      "Post-monsoon autumn and early spring generally offer clearer mountain visibility, though conditions vary year to year.",
  },
  {
    question: "Is Pokhara worth visiting alongside Kathmandu?",
    answer:
      "Yes, Pokhara's relaxed lakeside setting and proximity to Sarangkot's sunrise viewpoint offer a different, complementary experience to Kathmandu.",
  },
  {
    question: "Are Nepal packages suitable for families or older travellers?",
    answer:
      "Yes, standard cultural and viewpoint-focused itineraries are generally accessible to a wide range of ages and fitness levels.",
  },
],
  "cambodia/cambodia-tour-travel-guide-2026": [
  {
    question: "How many days do I need for Angkor Wat and Siem Reap?",
    answer: "It is recommended to spend at least 4 days in order to see the temple and Tonle Sap Lake.",
  },
  {
    question: "Are there any other temples to visit in Siem Reap aside from Angkor Wat?",
    answer: "Yes, there are some other notable temples located within the Angkor complex, such as Bayon, Ta Prohm, and Banteay Srei.",
  },
  {
    question: "Can I combine my trip to Cambodia with my trip to Vietnam?",
    answer: "Yes, because both countries are close by, tourists often travel to both countries.",
  },
  {
    question: "Is it worth seeing Phnom Penh along with Siem Reap?",
    answer: "Yes, for tourists who have extra days in their schedule.",
  },
  {
    question: "What's the best time of year to visit Cambodia?",
    answer: "The dry season, roughly November through April, generally offers the most comfortable conditions for exploring the temple complex.",
  },
  {
    question: "Is exploring Angkor Wat physically demanding?",
    answer: "It involves significant walking, particularly in Cambodia's heat, so realistic pacing and appropriate timing (cooler months, earlier starts) help manage the experience comfortably.",
  },
  {
    question: "What is Tonle Sap Lake known for?",
    answer: "It's Southeast Asia's largest freshwater lake, known for its floating villages where communities live entirely on the water.",
  },
  {
    question: "Are Cambodia packages suitable for families?",
    answer: "Yes, though the amount of walking and heat should be considered when planning pacing for families with young children or older travellers.",
  },
],
  "china/china-tour-travel-guide-2026": [
  {
    question: "Do Malaysians need a visa to visit China?",
    answer:
      "Malaysian passport holders generally benefit from visa exemption arrangements for short tourist visits, though it's important to confirm current requirements before travel.",
  },
  {
    question: "What's the best first-time China itinerary?",
    answer:
      "Beijing alone, focused on the Great Wall, Forbidden City, and Tiananmen Square, is the most common starting point for first-time visitors.",
  },
  {
    question: "How do you travel between major Chinese cities?",
    answer:
      "High-speed rail is commonly used between many major cities, offering a fast and comfortable alternative to domestic flights for many routes.",
  },
  {
    question: "Is Zhangjiajie worth adding to a China itinerary?",
    answer:
      "Yes, for travellers wanting dramatic natural scenery alongside historical and urban sightseeing, Zhangjiajie's landscapes are genuinely distinctive.",
  },
  {
    question: "Can I see pandas as part of a China trip?",
    answer:
      "Yes, Chengdu's panda conservation centres are a popular addition for travellers wanting to combine wildlife viewing with southwestern Chinese culture.",
  },
  {
    question: "What's the best time of year to visit China?",
    answer:
      "Spring and autumn generally offer the most comfortable travel conditions across most popular destinations, avoiding summer heat and winter cold.",
  },
  {
    question: "How many days should I plan for a multi-city China trip?",
    answer:
      "A well-rounded multi-city itinerary typically requires 9 or more days, given China's scale and the travel time between distant regions.",
  },
  {
    question: "Is the Great Wall included in most Beijing itineraries?",
    answer:
      "Yes, the Great Wall is considered an essential inclusion in virtually all Beijing-focused itineraries, given its iconic status and accessibility from the city.",
  },
],
  "hong-kong/hong-kong-tour-travel-guide-2026": [
  {
    question: "How many days should I plan for a Hong Kong trip?",
    answer:
      "A standard trip of 4 to 5 days is generally enough to cover Disneyland, key sightseeing, and shopping without feeling rushed.",
  },
  {
    question: "Is Hong Kong Disneyland suitable for young children?",
    answer:
      "Yes, its compact size compared to other Disney parks makes it particularly manageable for families with younger children in a single day visit.",
  },
  {
    question: "What are the best shopping areas in Hong Kong?",
    answer:
      "Causeway Bay and Tsim Sha Tsui offer major retail malls, while Mong Kok and Stanley Market provide more local, budget-friendly shopping experiences.",
  },
  {
    question: "What's the best time of year to visit Hong Kong?",
    answer:
      "Autumn, from October to December, generally offers the most comfortable weather, avoiding summer heat, humidity, and typhoon risk.",
  },
  {
    question: "Is Hong Kong a good destination for a short getaway?",
    answer:
      "Yes, its compact size and efficient transport make it well suited to shorter 4 to 5 day trips without feeling like too much was missed.",
  },
  {
    question: "What are must-see attractions beyond Disneyland?",
    answer:
      "Victoria Peak, the Star Ferry, Temple Street Night Market, and the Big Buddha on Lantau Island are commonly included highlights.",
  },
  {
    question: "Do I need a visa to visit Hong Kong as a Malaysian?",
    answer:
      "Malaysian passport holders generally benefit from visa-free entry for short tourist visits, though it's worth confirming current requirements before travel.",
  },
  {
    question: "Can a Hong Kong package be customized for more shopping time?",
    answer:
      "Yes, itineraries can typically be adjusted to allocate more time to shopping districts or reduce sightseeing days based on your preferences.",
  },
],
  "myanmar/myanmar-tour-travel-guide-2026": [
  {
    question: "What makes Bagan different from other temple destinations in Southeast Asia?",
    answer:
      "Bagan's temples are spread across a vast open plain rather than a concentrated complex, creating a uniquely atmospheric landscape, especially at sunrise and sunset.",
  },
  {
    question: "How many days should I plan for a Myanmar trip?",
    answer:
      "A focused Bagan-only trip can work in 3 to 4 days, while a fuller itinerary including Yangon and Inle Lake typically runs 7 to 8 days.",
  },
  {
    question: "Is Inle Lake worth adding to a Myanmar itinerary?",
    answer:
      "Yes, for travellers with more time, Inle Lake offers a distinctive cultural experience centred on stilt villages and traditional leg-rowing fishing.",
  },
  {
    question: "Are hot air balloon rides over Bagan available year-round?",
    answer:
      "No, balloon flights are seasonal and weather-dependent, generally most reliable during the dry season months.",
  },
  {
    question: "What's the best time of year to visit Myanmar?",
    answer:
      "The dry season, roughly November through February, generally offers the most comfortable conditions for temple exploration and sightseeing.",
  },
  {
    question: "Do I need to check travel advisories before booking a Myanmar trip?",
    answer:
      "Yes, it's particularly important to confirm current travel advisories, visa requirements, and regional accessibility with your consultant before finalising your trip.",
  },
  {
    question: "What is Shwedagon Pagoda?",
    answer:
      "It's a golden stupa in Yangon considered one of the most sacred Buddhist sites in Myanmar, and a key highlight of most itineraries.",
  },
  {
    question: "Is Myanmar suitable for first-time visitors to Southeast Asia?",
    answer:
      "It can be, though given its distinct travel considerations compared to more established destinations, discussing current conditions with a consultant beforehand is particularly worthwhile.",
  },
],
  "dubai/dubai-holiday-travel-guide-2026": [
  {
    question: "Is a desert safari included in all Dubai packages by default?",
    answer:
      "Not always. It's a commonly added excursion, so confirm with your consultant whether it's included or should be added to your specific package.",
  },
  {
    question: "What's the best time of year to visit Dubai?",
    answer:
      "November through March offers the coolest, most comfortable weather and is generally considered the peak season for tourism.",
  },
  {
    question: "Is Dubai suitable for family travel with young children?",
    answer:
      "Yes, Dubai offers a wide range of family-friendly attractions, including theme parks, aquariums, and beach resorts suited to various ages.",
  },
  {
    question: "Can Dubai be combined with Abu Dhabi in one trip?",
    answer:
      "Yes, this is a popular extension for trips of 5 or more days, given the short travel distance between the two cities.",
  },
  {
    question: "What makes a Dubai honeymoon package different from a family package?",
    answer:
      "Honeymoon packages typically prioritise fewer, higher-quality private experiences over a packed sightseeing schedule, with more relaxed pacing.",
  },
  {
    question: "Do Malaysians need a visa to visit Dubai?",
    answer:
      "Malaysian passport holders generally benefit from visa-free or visa-on-arrival access for short tourist visits; confirm current requirements with your consultant.",
  },
  {
    question: "How many days should I plan for a Dubai trip?",
    answer:
      "4 days covers a focused city and desert safari trip, while 5 to 7 days allows a more relaxed pace or a combination with Abu Dhabi.",
  },
  {
    question: "Is Dubai an expensive destination compared to other options?",
    answer:
      "Dubai can range from mid-range to ultra-luxury depending on hotel category and inclusions, offering flexibility across a range of budgets.",
  },
],
  "europe/europe-tour-travel-guide-2026": [
  {
    question: "Do Malaysians need a visa to visit Europe?",
    answer:
      "Yes, most European countries require Malaysian passport holders to obtain a Schengen visa before travel; requirements vary for non-Schengen countries.",
  },
  {
    question: "How far in advance should I apply for a Schengen visa?",
    answer:
      "It's generally recommended to apply several weeks ahead of your travel dates to allow adequate processing time.",
  },
  {
    question: "Can one Schengen visa cover multiple countries?",
    answer:
      "Yes, a single Schengen visa allows travel across all Schengen member countries without needing separate visas for each one.",
  },
  {
    question: "Is the UK included in the Schengen Area?",
    answer:
      "No, the UK and Ireland are not part of the Schengen Area and require separate visa consideration if included in your itinerary.",
  },
  {
    question: "What's the most popular first-time Europe route?",
    answer:
      "The Western Europe classic route covering France, Switzerland, and Italy remains the most requested itinerary for first-time visitors.",
  },
  {
    question: "How many days should I plan for a multi-country Europe trip?",
    answer:
      "A classic 2 to 3 country combination typically runs 10 to 12 days, allowing adequate time in each destination without excessive rushing.",
  },
  {
    question: "What's the best time of year to visit Europe?",
    answer:
      "Spring and autumn generally offer comfortable weather and fewer crowds, while summer is peak season with the warmest weather and highest prices.",
  },
  {
    question: "Is a group tour better than independent travel for Europe?",
    answer:
      "For first-time visitors or complex multi-country routes, group tours reduce planning burden and visa complexity significantly compared to independent travel.",
  },
],
  "australia/australia-holiday-travel-guide-2026": [
  {
    question: "Should I go to Sydney or Melbourne first?",
    answer:
      "It is usually advised to go to Sydney first as it has the most famous attractions whereas Melbourne is recommended for people who want to experience the city through food and culture.",
  },
  {
    question: "Why is the timing crucial when planning a family holiday in Australia?",
    answer:
      "The fact that Australia is a popular destination among the Malaysians on school break makes it more important to book flights and accommodation earlier.",
  },
  {
    question: "Is it possible to combine Sydney and Melbourne into a single vacation?",
    answer:
      "Yes, it is possible to have a tour including both cities within 8 to 10 days through domestic flights and day trips.",
  },
  {
    question: "Do I need a visa to travel to Australia?",
    answer: "Yes, you will need to apply for the ETA visa at least a week before travel.",
  },
  {
    question: "When is the best season to travel to Australia with my family?",
    answer: "From December to February as both countries are on school holiday at this time of year.",
  },
  {
    question: "Is the Blue Mountains day trip worth including in a Sydney itinerary?",
    answer:
      "Yes, it's a popular addition offering dramatic scenery and a change of pace from the city, typically arranged as a full-day excursion.",
  },
  {
    question: "How far in advance should I book an Australia trip during school holidays?",
    answer:
      "Booking several months ahead is advisable for peak school holiday periods, given rising airfares and limited availability closer to the dates.",
  },
  {
    question: "Is the Great Ocean Road accessible as a day trip from Melbourne?",
    answer:
      "Yes, it's commonly included as a full-day scenic drive excursion from Melbourne, featuring the iconic Twelve Apostles rock formations.",
  },
],
  "mauritius/mauritius-honeymoon-travel-guide-2026": [
  {
    question: "Why is Mauritius better than other island destinations for a honeymoon?",
    answer:
      "Mauritius has luxury resort facilities, stunning nature and a high level of privacy, which makes it especially suitable for honeymooners.",
  },
  {
    question: "Is there a certain coast of Mauritius that would be better for honeymooners?",
    answer:
      "This is up to individual preferences, but the East and the South coasts have a higher level of privacy, while the West and the North coasts have a more vibrant resort environment.",
  },
  {
    question: "How many days will we need for our honeymoon trip in Mauritius?",
    answer: "It takes seven days as a rule, but five days could also be enough.",
  },
  {
    question: "What's the best time of year to visit Mauritius?",
    answer:
      "The dry season, from May to December, generally offers the most favourable conditions, with cooler and less humid weather.",
  },
  {
    question: "Can I opt for an all-inclusive package in Mauritius?",
    answer:
      "Sure, you may go for all-inclusive or half board packages to save you time on making unnecessary decisions during your holiday there.",
  },
  {
    question: "Is Île aux Cerfs part of the must-have things to do in Mauritius?",
    answer:
      "Yes, it is a popular place that serves as a great day trip with stunning beaches and various water activities.",
  },
  {
    question: "Does one need a visa to travel to Mauritius from Malaysia?",
    answer: "Generally, people with Malaysian passports have a chance to enter Mauritius visa-free.",
  },
  {
    question: "Will it be good to combine Mauritius with another country for my honeymoon?",
    answer:
      "It may be done but usually Mauritius becomes a separate destination for its relaxing atmosphere.",
  },
],
  "indonesia/honeymoon-holiday-guide-2026": [
  {
    question: "Which destination would be ideal for a short honeymoon vacation?",
    answer:
      "The ideal short honeymoon destination would be Bali, since the destination has a short flight duration as well as an extensive romantic resort network.",
  },
  {
    question: "Which is the most affordable honeymoon destination?",
    answer:
      "Bali can be considered the most affordable honeymoon destination while providing an authentic romantic atmosphere.",
  },
  {
    question: "How far in advance should we book our honeymoon?",
    answer:
      "Booking several months ahead is advisable, particularly for peak wedding season periods, to secure preferred resorts, dates, and pricing.",
  },
],
  "europe/honeymoon-holiday-guide-2026": [
  {
    question: "How long would a honeymoon holiday in Europe be?",
    answer:
      "Most European honeymoon tours take up to 10 to 14 days due to the lengthy flights and the multiple destinations.",
  },
  {
    question: "Are the honeymoon tour packages customizable?",
    answer:
      "Yes, honeymoon tours are usually customizable to include other activities according to preference.",
  },
  {
    question:
      "Should we choose a beach destination or a European trip for our honeymoon?",
    answer:
      "This depends on your shared travel style. Beach destinations suit couples wanting relaxation, while Europe suits those who enjoy active sightseeing together.",
  },
],
  "mauritius/honeymoon-holiday-guide-2026": [
  {
    question:
      "Is the longer flight duration for Mauritius worth it compared to that of Bali?",
    answer:
      "Many couples find the extra time invested in flying worthwhile considering Mauritius's strong honeymoon resort culture.",
  },
  {
    question: "Is Mauritius or Bali better for total privacy?",
    answer:
      "Mauritius generally offers more dedicated seclusion, particularly through adults-only resort sections, though Bali also offers private villa options.",
  },
],
};

/** The FAQ list for a guide, or an empty array if it has none. */
export function getGuideFaqs(destination: string, key: string): GuideFaq[] {
  return guideFaqs[`${destination}/${key}`] ?? [];
}
