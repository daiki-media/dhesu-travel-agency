import type { TourPackage } from "@/src/data/tourPages/types";

export interface IndonesiaLandingPage {
  key: string;
  label: string;
  kind: "region" | "theme";
  blurb: string;
  select: (packages: TourPackage[]) => TourPackage[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

// ─── Selectors ──────────────────────────────────────────────────────────────

const startsWith = (prefix: string) => (packages: TourPackage[]) =>
  packages.filter((p) => (p.slug ?? "").startsWith(prefix));

// ─── Regions ────────────────────────────────────────────────────────────────

export const INDONESIA_REGIONS: IndonesiaLandingPage[] = [
  {
    key: "bali",
    label: "Bali",
    kind: "region",
    blurb:
      "13 packages from RM398. Uluwatu sunset, Ubud rice terraces, Tanah Lot, Nusa Penida sea cliffs and Gates of Heaven — Bali delivers the island life, the Hindu temple culture and the beach. Private tours, island hopping, romantic escapes and ATV adventures.",
    select: startsWith("bali/"),
    metaTitle:
      "Bali Tour Packages from Malaysia | Private Tours | Dhesu Travel",
    metaDescription:
      "Bali tour packages from RM398 with Dhesu Travel, trusted since 1988. Uluwatu sunset, Ubud highlands, Tanah Lot, Nusa Penida, Gates of Heaven and romantic pool villas. 13 100% private packages — MATTA & IATA registered.",
    h1: "Bali Tour Packages from Malaysia",
    intro:
      "Bali is among the most visited islands on Earth, and for good reason: it is small enough to understand in a week but layered enough to keep returning to for a decade. The Hindu-Balinese culture that survived the Islamisation of Java in the 15th and 16th centuries by retreating here has produced a religious and artistic life unlike anything else in Southeast Asia. Every compound has its shrine. Every village has its annual temple festival. Every morning, offerings of flower petals and incense are placed on thresholds, motorbikes, kitchen counters, shop fronts and hotel reception desks — a practice that has continued uninterrupted for centuries and shows no sign of stopping.\n\nUluwatu Temple sits at the southwest tip of the Bukit Peninsula — a limestone promontory that juts south from the main body of Bali — on a cliff 70 metres above the Indian Ocean. The temple is one of Bali's six kayangan jagat, the sacred directional temples that spiritually protect the island, and has been a site of worship since the 11th century. The Kecak fire dance performed at the cliff-edge amphitheatre at sunset — 50 to 100 bare-chested men in black-and-white checked sarongs, their arms swaying and their voices creating the interlocking chant that replaces the gamelan orchestra — is the most theatrical thing you can see in Bali, and the view behind them is the Indian Ocean turning orange.\n\nTegalalang Rice Terraces, 15 minutes north of Ubud, are the most photographed landscape in Bali. The UNESCO-recognised subak irrigation system — a cooperative water management network controlled by the priests of Pura Ulun Danu temple — has shaped the terraced hillsides of Bali for over a thousand years. Tegalalang's terraces cascade down a steep valley, with the Tirta Manik Mas river at the bottom. The light is best in the morning (facing east before 10:00 AM) or in the late afternoon. The Bali Swing — a series of wooden swings and platforms constructed over the valley edge — has become the most Instagrammed experience in Bali, with the terraces as backdrop.\n\nUbud is Bali's cultural centre and the base for most highland programmes. The Ubud Royal Palace at the intersection of Jalan Raya Ubud and Monkey Forest Road was built in the 19th century for the local Sukawati dynasty and is still the family residence — but the compound's outer pavilions are open daily for visitors, and traditional dance performances are staged in the courtyard most evenings. The Ubud Art Market directly opposite has been selling Balinese textiles, carvings, silver jewellery and batik cloth since the 1970s. The Sacred Monkey Forest Sanctuary at the south end of Jalan Monkey Forest protects a 12.5-hectare patch of ancient banyan forest containing three Hindu temple compounds and approximately 700 Balinese long-tailed macaques.\n\nTanah Lot, 20 kilometres southwest of Ubud on the west coast of Bali, is the single most visited site on the island. A sea stack connected to the mainland at low tide by a causeway of volcanic rock, topped by a 16th-century Balinese sea temple, facing west into the sunset — the image has appeared on postcards, screensavers, and travel magazine covers so many times that seeing it in person still feels like a surprise. The temple itself is accessible at low tide; the outer terrace of the compound (accessible to non-Hindus with a sarong) affords views of the temple from the rock above the surf on all sides. The surrounding area has been developed into a tourist complex with restaurants, art markets and a Hard Rock Café, but none of it diminishes the temple itself at sunset.\n\nNusa Penida is an island 20 kilometres southeast of Bali, accessible by a 45-minute fast boat from Sanur beach. Until 2016 it was largely ignored by international tourism; since then it has become one of the most-visited destinations in Indonesia. The reason is Kelingking Beach — a T-shaped limestone peninsula shaped like a Tyrannosaurus Rex skull, with a 200-metre vertical cliff face and a strip of white sand accessible only by a steep 45-minute hike down the cliff path. Angel's Billabong, a few kilometres north, is a natural infinity pool in the rocks at the cliff edge where crystal-clear water pools above the ocean at low tide. Crystal Bay is the top snorkelling site — on the right day between July and October, manta rays cruise the cleaning station at Manta Point just offshore.\n\nEvery Bali package from Dhesu is 100% private — your own driver-guide, your own vehicle, your own schedule. You will not share transport or tours with strangers. The driver-guides in Bali are licensed, English-speaking, and typically have 10–20 years of experience. Halal meals can be arranged on request. All entrance fees, temple sarongs, and transfers are included in the stated price.",
    canonicalUrl: "/tours/indonesia/bali",
    ogTitle: "Bali Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "13 Bali packages from RM398. Uluwatu sunset kecak, Nusa Penida sea cliffs, Borobudur sunrise, Ubud highlands. 100% private tours with Dhesu, trusted since 1988.",
    ogImage: "/images/gallery/16473.png",
  },
  {
    key: "yogyakarta",
    label: "Yogyakarta",
    kind: "region",
    blurb:
      "5 packages from RM988. Borobudur at sunrise, Prambanan's 9th-century Hindu temples, Mount Merapi 4WD jeep lava tour, Taman Sari Water Castle, Timang Beach gondola and Jomblang Cave vertical rappel. Java's cultural capital.",
    select: startsWith("yogyakarta/"),
    metaTitle:
      "Yogyakarta Tour Packages from Malaysia | Borobudur & Prambanan | Dhesu Travel",
    metaDescription:
      "Yogyakarta tour packages from RM988 with Dhesu Travel, trusted since 1988. Borobudur sunrise, Prambanan temple complex, Mount Merapi lava jeep, Taman Sari Water Castle, Malioboro Street. 5 100% private packages — MATTA & IATA registered.",
    h1: "Yogyakarta Tour Packages from Malaysia",
    intro:
      "Yogyakarta — Jogja to Indonesians — is the cultural capital of Java and the gateway to two of the greatest heritage sites in the Buddhist and Hindu worlds. The city sits at the foot of Mount Merapi, one of the most active volcanoes on Earth, between the Java Sea to the south and the Indian Ocean beach of Parangtritis. The Sultan of Yogyakarta, Sri Sultan Hamengkubuwono X, still governs the Special Region as a hereditary monarch under an arrangement unique in the Indonesian Republic, and the Kraton — the walled palace city at the heart of Yogyakarta — is still a functioning court, not a museum.\n\nBorobudur is 40 kilometres northwest of Yogyakarta, a 45-minute drive through flat Javanese countryside past coffee plantations and durian stalls. The temple — inscribed as a UNESCO World Heritage Site in 1991 — was built between 770 and 825 CE during the Sailendra dynasty, abandoned in the 11th century as the seat of power shifted east, buried under volcanic ash and jungle, and only partially known to the outside world until Thomas Stamford Raffles — the British colonial lieutenant governor of Java — commissioned the first systematic survey in 1814. The Dutch began a full restoration in 1907 under Theodoor van Erp; UNESCO and the Indonesian government completed a second major restoration between 1975 and 1982.\n\nThe structure is a three-dimensional mandala: a square base representing the world of desire, five square terraces representing the world of form, and three circular terraces at the summit representing the formless world of enlightenment. Walking up through the levels is meant to symbolise the Buddhist path. The 2,672 relief panels on the gallery walls — 6 kilometres of carved stone narrative if laid end to end — depict the life of the Gautama Buddha, the Jataka tales of the Buddha's previous lives, and scenes of Javanese court life in the 9th century. The 72 hollow stupas on the circular terraces each contain a seated meditating Buddha, visible through the latticed stonework. A sunrise permit allows arrival at Borobudur before the general public at 06:00, when the light is golden and the temple is almost empty.\n\nPrambanan is 18 kilometres east of Yogyakarta, also inscribed as a UNESCO World Heritage Site in 1991. Where Borobudur represents Buddhist cosmology in stone, Prambanan represents the Trimurti — the Hindu trinity of Brahma the Creator, Vishnu the Preserver, and Shiva the Destroyer. The compound's three main towers, each 47 metres high, are dedicated to each deity. The towers are covered in carved reliefs depicting scenes from the Ramayana, which is also performed as a traditional Javanese Ramayana ballet in the open-air theatre adjacent to the temple compound on full moon nights between May and October. The compound was damaged by an earthquake in 2006 and fully restored, with ongoing conservation work continuing.\n\nMount Merapi — the Mountain of Fire — is the most active volcano in Indonesia and one of the most dangerous in the world. Its most recent major eruption in 2010 killed 353 people and displaced 350,000. The lava flow from 2010 solidified into a river of volcanic debris 10 kilometres long on the southern slopes — now the primary route for the jeep tour that has become one of Yogyakarta's most popular experiences. The 4WD jeep programme departs at dawn and drives up through the ash-and-boulder landscape to within 4 kilometres of the active summit crater, visiting the ruins of farmhouses buried under the 2010 pyroclastic flow, a mini museum in the surviving home of a farmer who refused to evacuate, and Bunker Kaliadem — the underground emergency shelter that was engulfed by the 2010 eruption, its interior walls still coated in volcanic ash.\n\nTaman Sari Water Castle, within walking distance of the Kraton palace, was built in 1758 as a pleasure garden and bathing complex for the Sultan and his court. The complex includes bathing pools, underground tunnels, a meditation tower, and a mosque — all in varying states of preservation and ongoing restoration. The bathing pools (Umbul Binangun) are the most visited section, with three tiered stone pools that once served the sultan's wives and concubines. The surrounding kampung (neighbourhood) of Taman is also one of the best places in Yogyakarta to buy traditional Javanese batik — the intricate wax-resist textile art form that UNESCO inscribed on its Intangible Cultural Heritage list in 2009.\n\nEvery Yogyakarta package from Dhesu is 100% private. All entrance fees, temple permits, jeep tour costs and Borobudur sunrise permits are included. The drive from Yogyakarta's Adisucipto International Airport to the city centre takes 20 minutes.",
    canonicalUrl: "/tours/indonesia/yogyakarta",
    ogTitle: "Yogyakarta Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "5 Yogyakarta packages from RM988. Borobudur sunrise, Prambanan Hindu temples, Mount Merapi lava jeep. 100% private tours with Dhesu, trusted since 1988.",
    ogImage: "/images/gallery/16197.jpg",
  },
  {
    key: "medan-lake-toba",
    label: "Medan / Lake Toba",
    kind: "region",
    blurb:
      "2 packages from RM788. Lake Toba — the world's largest volcanic lake, 100km long — with Samosir Island, Batak tribal villages, ancient royal tombs, Sipiso-Piso waterfall and Berastagi highland market. North Sumatra's extraordinary highland circuit.",
    select: startsWith("medan-lake-toba/"),
    metaTitle:
      "Medan & Lake Toba Tour Packages from Malaysia | Dhesu Travel",
    metaDescription:
      "Lake Toba tour packages from RM788 with Dhesu Travel, trusted since 1988. World's largest volcanic lake, Samosir Island, Batak villages, Sipiso-Piso waterfall, Berastagi highlands. 2 100% private packages — MATTA & IATA registered.",
    h1: "Medan & Lake Toba Tour Packages from Malaysia",
    intro:
      "Lake Toba sits in the highlands of North Sumatra, a 3-hour drive south from Medan. It is the largest volcanic lake in the world — 100 kilometres long, 30 kilometres wide, and 505 metres deep — and it sits in the caldera left by one of the largest volcanic eruptions in geological history. The Toba supervolcano eruption approximately 74,000 years ago was so vast that it ejected an estimated 2,800 cubic kilometres of material, plunging the Earth into a volcanic winter that may have lasted a decade and reduced the world's human population to as few as 10,000 individuals. Today the caldera holds a lake of extraordinary clarity and stillness, with Samosir Island — 630 square kilometres, larger than Singapore — floating in the centre.\n\nSamosir is the ancestral homeland of the Toba Batak people, one of the major ethnic groups of North Sumatra and among the most culturally distinctive peoples in Indonesia. The Batak were among the last groups in the Indonesian archipelago to be reached by Christian missionaries — the German Rhenish Mission Society arrived in 1861 — and the Toba Batak today are largely Protestant Christian, with a church culture, choral tradition and clan genealogical structure that coexists with pre-Christian ceremonial practices. Traditional Batak architecture — the rumah adat longhouse with a dramatically curved and layered roof in black, white and red, representing the three cosmic realms — survives in several villages on Samosir.\n\nTomok, on the eastern shore of Samosir accessible by a 30-minute ferry from Parapat on the mainland, is the primary tourist village and the site of the royal tombs of King Sidabutar, a pre-Christian Batak king who died in the 19th century. The sarcophagi are carved from single blocks of stone, with stone effigies of the kings seated on top, their faces intact after more than a century. The Batak cultural centre adjacent to the tombs has traditional dancing performances and handicraft demonstrations. Simanindo village at the northern tip of Samosir has the best-preserved traditional Batak longhouse complex and a cultural performance programme that includes the Sigale-gale puppet dance — a performance using a life-size wooden puppet controlled by strings, historically used in healing rituals for the grief of parents who had lost a child.\n\nSipiso-Piso Waterfall is 24 kilometres north of the town of Kabanjahe on the rim of the Lake Toba caldera. The waterfall drops 120 metres from a cave in the caldera wall directly into Lake Toba below — one of the tallest waterfalls in Indonesia. The viewpoint from the top of the falls, at approximately 1,300 metres altitude, looks south across the entire length of Lake Toba, with Samosir Island stretching across the middle of the frame. The path down to the base of the falls is steep and takes 30 to 45 minutes each way.\n\nBerastagi is a highland town at 1,400 metres altitude in the Karo Batak highland region, 70 kilometres south of Medan and easily combined with a Lake Toba circuit. The town is surrounded by active volcanoes — Gunung Sinabung (2,451 metres) erupted as recently as 2021 — and the surrounding farmland produces the best fruit and vegetables in Sumatra. The weekly market at Berastagi is one of the largest fruit markets in Indonesia, with passion fruit, markisa (a local citrus variety), and the durian season peak from June to August. The Karo Batak people have a distinct culture and architecture from their Toba cousins — the Karo adat house is built to house 8 families simultaneously, with specific sections allocated by clan position.\n\nMedan, capital of North Sumatra and the third-largest city in Indonesia, is the arrival hub for the Lake Toba circuit. The city has several worthwhile sights including the Maimoon Palace (built 1888 for the Sultan of Deli), the Great Mosque of Medan, and the Tjong A Fie Mansion — the restored home of a Hakka Chinese merchant-philanthropist who arrived in Medan in 1875 and became one of the most powerful men in Sumatra. The local Medan cuisine — particularly mie goreng Medan, soto Medan and Batak pork dishes — is considered among the best in Indonesia and is the primary reason many Indonesian food travellers fly to Medan even without visiting Lake Toba.",
    canonicalUrl: "/tours/indonesia/medan-lake-toba",
    ogTitle: "Lake Toba Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "2 Lake Toba packages from RM788. World's largest volcanic lake, Samosir Island, Batak tribal villages, Sipiso-Piso waterfall. 100% private tours with Dhesu, trusted since 1988.",
    ogImage: "/images/gallery/15102.jpg",
  },
  {
    key: "lombok",
    label: "Lombok",
    kind: "region",
    blurb:
      "2 packages from RM688. Mount Rinjani's crater lake, Pink Beach snorkelling, Gili Islands, Senggigi beach and traditional Sasak villages. Bali's quieter and wilder neighbour — with better reefs and a fraction of the crowds.",
    select: startsWith("lombok/"),
    metaTitle:
      "Lombok Tour Packages from Malaysia | Gili Islands & Rinjani | Dhesu Travel",
    metaDescription:
      "Lombok tour packages from RM688 with Dhesu Travel, trusted since 1988. Pink Beach snorkelling, Gili Trawangan, Sasak villages, Mount Rinjani views, Senggigi beach. 2 100% private packages — MATTA & IATA registered.",
    h1: "Lombok Tour Packages from Malaysia",
    intro:
      "Lombok is the island directly east of Bali, separated by the 35-kilometre Lombok Strait — a channel of deep water that marks the Wallace Line, the biogeographical boundary between Asian and Australasian fauna. West of the Wallace Line, the animal life is Asian: tigers, orangutans, elephants, Javanese rhinos. East of the line, it transitions toward Australian species: cockatoos, honeyeaters, marsupials. Lombok sits precisely on this boundary, which is part of why its ecology and culture feel different from Bali even at close range.\n\nThe island is dominated by Mount Rinjani, an active stratovolcano rising 3,726 metres — the second-highest volcano in Indonesia and the highest point in the country outside Papua. The summit crater contains a crescent-shaped caldera lake, Segara Anak (Child of the Sea), at 2,000 metres altitude, with a newer volcanic cone, Gunung Baru Jari, rising from the lake itself — still active and still growing. A three-day trek to the summit crater rim and down to the lake is one of the classic trekking experiences in Southeast Asia. The views from the crater rim at dawn — north across Lombok's agricultural plains to the sea, west across the Lombok Strait to the volcanoes of Bali, south to the Indian Ocean — are among the most expansive in Indonesia.\n\nThe Gili Islands — Gili Trawangan, Gili Meno and Gili Air — are three small coral islands off the northwest coast of Lombok, accessible by a 20-minute fast boat from Bangsal harbour. Gili Trawangan is the largest and the most developed: no motorised vehicles are allowed on the island (transport is by cidomo horse cart or bicycle), the snorkelling and dive sites are within swimming distance of the beach, and the turtle population is one of the highest in Indonesia. Hawksbill turtles can be seen on virtually every dive and often on snorkelling trips along the western beach. The Gili Islands have their own micro-culture distinct from Lombok mainland: a mix of Balinese Hindus who moved here for fishing in the 1960s, Sasak Muslims from Lombok, European dive instructors, and Australian backpackers.\n\nPink Beach (Pantai Merah) on the southeast coast of Lombok — accessible by a 90-minute drive from Mataram and a short boat ride — takes its name from the pink tint of the sand, caused by fragments of red coral mixed into the white volcanic sand. The coral reef immediately offshore is among the most intact on the island, with visibility regularly exceeding 20 metres. The beach itself is quiet and relatively undeveloped — no vendors, minimal infrastructure, accessible only by boat — making it one of the genuinely unspoiled beaches left in Nusa Tenggara.\n\nThe Sasak people are the indigenous inhabitants of Lombok and represent approximately 85% of the island's population. Unlike Bali's Hindu population or Java's Muslim majority, the Sasak practice a syncretic form of Islam called Wetu Telu (Three Times) — named for the three-times-daily prayer schedule — which incorporates pre-Islamic animist practices and has been under pressure from orthodox Islam since the 1970s but persists in several interior villages. Traditional Sasak weaving villages — particularly Sukarara and Pringgasela — produce hand-woven songket cloth and ikat textiles on back-strap looms, using techniques passed from mother to daughter and still commercially viable in the village economy.\n\nSenggigi is Lombok's main beach resort strip, on the west coast 12 kilometres north of Mataram. The beach faces Bali across the Lombok Strait, and on a clear day the volcanoes of Bali are visible on the horizon. The sunset from Senggigi beach, looking west across the strait at the outline of Bali's mountains silhouetted against the orange sky, is one of the most reliably beautiful views in Lombok. The area has several decent hotels, restaurants and dive operators without approaching Bali's development density.",
    canonicalUrl: "/tours/indonesia/lombok",
    ogTitle: "Lombok Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "2 Lombok packages from RM688. Pink Beach snorkelling, Gili Islands, Sasak villages, Mount Rinjani views. 100% private tours with Dhesu, trusted since 1988.",
    ogImage: "/images/gallery/13329.jpg",
  },
  {
    key: "padang",
    label: "Padang / Bukittinggi",
    kind: "region",
    blurb:
      "1 package from RM988. Harau Valley's 150-metre vertical granite cliffs, Bukittinggi's Dutch colonial fort and clock tower, Sianok Canyon gorge, and the extraordinary Minangkabau traditional architecture of West Sumatra's highland villages.",
    select: startsWith("padang/"),
    metaTitle:
      "Padang & Bukittinggi Tour Packages from Malaysia | West Sumatra | Dhesu Travel",
    metaDescription:
      "Padang and Bukittinggi tour packages from RM988 with Dhesu Travel, trusted since 1988. Harau Valley granite cliffs, Bukittinggi Fort de Kock, Sianok Canyon, Minangkabau villages, Ngarai viewpoint. 100% private — MATTA & IATA registered.",
    h1: "Padang & Bukittinggi Tour Packages from Malaysia",
    intro:
      "West Sumatra — Sumatera Barat — is the homeland of the Minangkabau people, one of the largest matrilineal societies on Earth. In Minangkabau adat (customary law), clan membership, land rights, and the family home all pass through the female line. Women inherit property; men are expected to merantau — to migrate out into the wider world to seek their fortune — and return with wealth, knowledge and status. The Minangkabau diaspora has produced some of Indonesia's most prominent politicians, writers, Islamic scholars and entrepreneurs, from former vice president Muhammad Hatta to the novelist Marah Rusli. The home territory they return to is a landscape of volcanic highlands, river gorges, traditional villages, and extraordinary cuisine.\n\nBukittinggi is the cultural capital of West Sumatra, a highland city at 930 metres altitude approximately 90 kilometres north of Padang by road. The city grew around a Dutch colonial fort — Fort de Kock, built in 1825 during the Padri War, the conflict between the Dutch colonial government and the Padri Islamic reformist movement that destabilised West Sumatra for 20 years — and the Jam Gadang, the clock tower commissioned by the Dutch in 1926 that has become the city's primary landmark. The clock tower's roof was redesigned after Indonesian independence to incorporate a Minangkabau rumah adat roof form — the dramatically curved, multi-tiered roof that sweeps upward at the corners like buffalo horns, the architectural signature of Minangkabau culture across West Sumatra, Negeri Sembilan in Malaysia, and throughout the diaspora.\n\nHarau Valley is 14 kilometres east of Payakumbuh, approximately 45 minutes from Bukittinggi. The valley is a narrow gorge flanked on both sides by vertical granite cliffs rising 150 metres from the valley floor. The cliffs are a premier rock climbing destination — with more than 100 established routes on the vertical and overhanging walls — but the landscape is also simply one of the most dramatic in Sumatra for non-climbers. Waterfalls descend directly from the cliff tops: Sarasah Bunta has four cascades; Sarasah Aie Luluih drops into a natural pool suitable for swimming. The valley floor is rice paddies, with water buffaloes, ducks and kampung houses in traditional style. The combination of scale — vertical granite, rice terraces, tropical jungle, waterfalls — within a compact valley is extraordinary.\n\nSianok Canyon is a 15-kilometre river canyon immediately below Bukittinggi city, visible from the city's Fort de Kock park via a 100-metre descent on a hanging walkway. The canyon floor is 100 metres below the city streets, with the Batang Sianok river running through it. A 3-kilometre walking trail along the canyon floor passes through terraced rice fields, jungle, and several Minangkabau villages accessible only on foot. The canyon was also the site of the Japanese underground tunnel system (Lubang Jepang) built by forced labour during the 1942–1945 occupation — the network of tunnels extends 1,400 metres under the city and has been partially open to visitors since 2003.\n\nPadang city is the capital of West Sumatra and the gateway for the highland circuit. It is also the source of Padang cuisine — the most internationally recognised of all Indonesian regional cuisines. Padang restaurants (rumah makan Padang) operate across Indonesia and throughout the Malay world: the waiter carries 10 to 20 bowls of cooked dishes to the table all at once, you eat what you want, and pay only for what you consumed. Rendang — slow-cooked beef in coconut milk and spices reduced to dryness over four to six hours — was voted the world's most delicious food in a 2011 CNN poll and has been recognised since 2021 as a UNESCO Intangible Cultural Heritage of Indonesia. The authentic version, made in West Sumatra by cooks who have been making it since childhood, is materially different from the versions served elsewhere.",
    canonicalUrl: "/tours/indonesia/padang",
    ogTitle: "Padang & Bukittinggi Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "West Sumatra packages from RM988. Harau Valley granite cliffs, Bukittinggi Fort de Kock, Sianok Canyon, Minangkabau villages. 100% private tours with Dhesu, trusted since 1988.",
    ogImage: "/images/gallery/14397.png",
  },
  {
    key: "surabaya-bromo",
    label: "Surabaya / Bromo",
    kind: "region",
    blurb:
      "2 packages from RM1,388. Mount Bromo 4WD sunrise across the volcanic Sea of Sand, Museum Angkut Asia's largest transport museum, Coban Rondo waterfall, Malang's colourful painted village and Surabaya's Indonesian history.",
    select: startsWith("surabaya-bromo/"),
    metaTitle:
      "Mount Bromo & Surabaya Tour Packages from Malaysia | Dhesu Travel",
    metaDescription:
      "Mount Bromo tour packages from RM1,388 with Dhesu Travel, trusted since 1988. Bromo 4WD sunrise, Sea of Sand, Malang city, Museum Angkut, Coban Rondo waterfall, Surabaya historic tour. 100% private — MATTA & IATA registered.",
    h1: "Mount Bromo & Surabaya Tour Packages from Malaysia",
    intro:
      "Mount Bromo is an active stratovolcano in the Bromo Tengger Semeru National Park in East Java, and the most visited natural attraction in Indonesia that doesn't require a multi-day trek. The experience that draws visitors — arriving at the Penanjakan viewpoint by 4WD jeep before dawn, waiting in the cold and dark at 2,770 metres altitude, watching the sun rise over the volcanic massif with Bromo's smoking crater and the hulk of Mount Semeru (3,676 metres, Java's highest peak) visible in the distance — is among the most dramatic sunrise experiences in Southeast Asia.\n\nThe Tengger people — the indigenous inhabitants of the Bromo caldera and surrounding highlands — are a Hindu enclave in an otherwise Muslim East Java. The Tengger have maintained their Hindu faith since the Majapahit kingdom's collapse in the 15th century, when the Majapahit court retreated to Bali and the Tengger retreated to the highlands. Their annual Yadnya Kasada festival falls on the full moon of the 12th month of the Tengger lunar calendar: the community gathers at Bromo's crater edge before dawn and throws offerings — rice, fruit, livestock, vegetables — into the active volcano as an offering to the god Brahma. The festival can be attended by outsiders and is one of the most extraordinary religious ceremonies in Java.\n\nThe Bromo caldera — the Sea of Sand (Lautan Pasir) — is a 5.3-square-kilometre flat expanse of volcanic sand and ash at 2,100 metres altitude, surrounded by a 200-metre caldera wall. The 4WD jeep descends from Penanjakan to the Sea of Sand floor, where vehicles drive across the ash plain to within 500 metres of Bromo's crater. A horse-riding service runs the final 500 metres (included in most packages), and 253 concrete steps climb to the crater rim — a view directly into an active Indonesian volcano with sulphurous steam rising from the vent below.\n\nMalang is East Java's second city, 80 kilometres south of Surabaya and the base for most Bromo tour programmes. The city was a Dutch colonial hill station — cooler and more pleasant than coastal Surabaya — and retains considerable colonial-era architecture. Jodipan, a kampung (urban village) along the Brantas River that was painted in kaleidoscopic colours by a student activist group in 2016 to prevent demolition by authorities who considered it a slum, has become one of Malang's most visited attractions — a vivid demonstration of how quickly a local grassroots intervention can become a significant tourist destination.\n\nMuseum Angkut (Transport Museum) in Batu, 15 kilometres northwest of Malang, is the largest transport museum in Asia — 26 themed zones spread across 4 hectares, housing more than 300 classic and vintage vehicles from the history of transport: horse-drawn carriages, early motorcycles, vintage European cars from the 1920s and 1930s, American muscle cars, traditional Javanese ox carts, Japanese colonial military vehicles, and a full recreation of a 1950s Bandung city street. The museum is primarily aimed at domestic Indonesian tourists and families — its scale and theatricality are genuinely impressive even for visitors who are not transport enthusiasts.\n\nSurabaya is Indonesia's second-largest city and the capital of East Java. The city has a long revolutionary history — it was in Surabaya on November 10, 1945 that Indonesian militias and youth fighters held off the British Indian Army in the Battle of Surabaya, the bloodiest battle of the Indonesian National Revolution and the event commemorated annually as Indonesia's Heroes Day. The House of Sampoerna (built 1858, now the headquarters of one of Indonesia's largest cigarette companies and also a heritage museum) and the Tunjungan Plaza shopping complex anchor the city's main attraction areas. Surabaya's Chinese quarter — Pecinan — along Kembang Jepun Street is one of the oldest continuous Chinese commercial districts in Indonesia.",
    canonicalUrl: "/tours/indonesia/surabaya-bromo",
    ogTitle: "Mount Bromo Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "2 Bromo packages from RM1,388. Mount Bromo 4WD sunrise, Sea of Volcanic Sand, Malang city, Museum Angkut. 100% private tours with Dhesu, trusted since 1988.",
    ogImage: "/images/gallery/13429.jpg",
  },
  {
    key: "jakarta-bandung",
    label: "Jakarta / Bandung",
    kind: "region",
    blurb:
      "2 packages from RM1,288. Kawah Putih White Crater's turquoise sulphuric lake, Bandung's highland factory outlets, WHOOSH bullet train experience, Jakarta's National Monument and Old Batavia colonial waterfront.",
    select: startsWith("jakarta-bandung/"),
    metaTitle:
      "Jakarta & Bandung Tour Packages from Malaysia | Dhesu Travel",
    metaDescription:
      "Jakarta and Bandung tour packages from RM1,288 with Dhesu Travel, trusted since 1988. Kawah Putih White Crater, WHOOSH bullet train, Bandung highlands, National Monument, Old Batavia. 100% private — MATTA & IATA registered.",
    h1: "Jakarta & Bandung Tour Packages from Malaysia",
    intro:
      "Jakarta is a city of contradictions and superlatives — the former capital of Indonesia (the government moved to the new city of Nusantara in Borneo in 2024), the largest city in Southeast Asia, a metropolitan area of 33 million people sprawling across the flat lowlands of northwest Java. It is simultaneously the financial centre of Indonesia, the political capital until recently, the hub of Indonesian media and culture, and a city in chronic conversation with itself about infrastructure, inequality, flooding and the future. For visitors, it offers the National Monument (Monas), Old Batavia (Kota Tua), the Thousand Islands marine park, and some of the most diverse and sophisticated dining in Indonesia.\n\nOld Batavia — Kota Tua — is the colonial heart of Jakarta, the 17th-century Dutch trading port from which the VOC (Dutch East India Company) administered its empire across the Indonesian archipelago. The Fatahillah Square, flanked by the Jakarta History Museum (the former town hall, built 1710), the Fine Arts and Ceramics Museum, and the Wayang Puppet Museum, has been restored as a pedestrian heritage zone. The surrounding streets retain original Dutch colonial architecture — warehouses, merchant houses, canal bridges — in various states of preservation and adaptive reuse. The National Archives building (1760) and the former VOC warehouse at Galangan are among the most historically significant structures.\n\nBandung is Indonesia's third-largest city and the cultural capital of West Java, 130 kilometres southeast of Jakarta in a highland basin at 768 metres altitude. The elevation makes Bandung noticeably cooler than the coastal lowlands — the Dutch colonial government used it as a hill station and administrative centre, building a colonial downtown (the Braga district, with its art deco-era shopfronts, is the most preserved) and planning what they called the Paris of Java. Bandung is now best known to Indonesian domestic tourists for its factory outlet shopping districts (particularly Jalan Riau and the Cihampelas area), its café culture, and its proximity to Kawah Putih.\n\nKawah Putih (White Crater) is a crater lake 50 kilometres south of Bandung at 2,430 metres altitude on the caldera of Gunung Patuha, a 2,434-metre dormant volcano. The lake's extraordinary turquoise-to-white colour changes with temperature, weather and sulphur content — sometimes a deep aquamarine, sometimes chalky white, sometimes apple green. The sulphur concentration in the water and air around the lake is high enough to corrode metal and irritate the throat, which is part of what makes the otherworldly landscape so striking: the white sulphur deposits on the crater walls, the dead trees bleached white by the acid air, and the turquoise lake centre with steam rising off the surface create a landscape that looks like another planet. The road from the car park to the crater edge descends through a mossy cloud forest of tall pines and tree ferns.\n\nThe WHOOSH (Whoosh is the Indonesian acronym for the high-speed rail project) is Indonesia's first high-speed railway, connecting Jakarta's Halim station with Padalarang (near Bandung) in 45 minutes — a journey that previously took 3 to 4 hours by conventional train or 2.5 hours by car in good traffic. The line opened in October 2023 and is operated by China Railway International Corporation using CRH400AF technology, with a top operating speed of 350 km/h. For most Malaysian travellers, a ride on WHOOSH is the experience of riding the fastest train in Southeast Asia for the first time — the journey feels short partly because it is genuinely very fast and partly because the ride is smooth enough that the speed does not register until you look out the window.\n\nTaman Mini Indonesia Indah (Beautiful Indonesia in Miniature Park) is a 150-hectare cultural theme park in East Jakarta, opened in 1975 under the patronage of Ibu Tien Suharto, wife of President Suharto. The park contains 34 pavilions representing the architectural styles and cultural artefacts of every Indonesian province, a cable car, multiple museums (including dedicated museums for stamps, insects, transport, telecommunications and komodo dragons), a bird park, and an IMAX theatre. It is unabashedly a product of the New Order era's nation-building ideology, but the scale and variety of Indonesian architectural forms — from Papua's honai to Toraja's tongkonan to the Minangkabau rumah adat — is genuinely impressive.",
    canonicalUrl: "/tours/indonesia/jakarta-bandung",
    ogTitle: "Jakarta & Bandung Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "2 Jakarta/Bandung packages from RM1,288. Kawah Putih crater, WHOOSH bullet train, Bandung highlands, Old Batavia. 100% private tours with Dhesu, trusted since 1988.",
    ogImage: "/images/gallery/14411.jpg",
  },
];

// ─── Combined list ────────────────────────────────────────────────────────────

export const INDONESIA_LANDING_PAGES: IndonesiaLandingPage[] = [
  ...INDONESIA_REGIONS,
];

const byKey: Record<string, IndonesiaLandingPage> = Object.fromEntries(
  INDONESIA_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up an Indonesia region by its URL segment. Undefined if not found. */
export function getIndonesiaLandingPage(
  key: string,
): IndonesiaLandingPage | undefined {
  return byKey[key];
}

// Display order for the Indonesia hub page region nav strip.
const NAV_ORDER = [
  "bali",
  "yogyakarta",
  "medan-lake-toba",
  "lombok",
  "padang",
  "surabaya-bromo",
  "jakarta-bandung",
];

export interface IndonesiaRegionCard {
  label: string;
  href: string;
  blurb: string;
  kind: "region" | "theme";
}

/** Cards for the Indonesia hub page region section, in display order. */
export function getIndonesiaRegionCards(): IndonesiaRegionCard[] {
  return NAV_ORDER.map((key) => byKey[key]).map((p) => ({
    label: p.label,
    href: p.canonicalUrl,
    blurb: p.blurb,
    kind: p.kind,
  }));
}
