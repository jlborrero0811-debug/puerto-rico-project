// Central data store for the app.
// This file does not control behavior directly.
// Instead, it stores the text and quiz information that the other scripts use
// when building the site content in English and Spanish.

// City information used by the Puerto Rico map.
// The keys match the city ids in javascript/map.js.
const mapCityInfo = {
    'pr-ad': {
        english: 'Adjuntas is a mountain municipality in central Puerto Rico, known for cooler weather, coffee country, and forested scenery.',
        spanish: 'Adjuntas es un municipio montañoso en el centro de Puerto Rico, conocido por su clima más fresco, región cafetalera y paisajes boscosos.'
    },
    'pr-ag': {
        english: 'Aguada is a western coastal municipality with beaches, historic churches, and strong ties to early Spanish settlement stories.',
        spanish: 'Aguada es un municipio costero occidental con playas, iglesias históricas y fuertes vínculos con historias de asentamientos españoles tempranos.'
    },
    'pr-aa': {
        english: 'Aguadilla is a west coast city known for beaches, surfing, the old Ramey Air Force Base area, and its airport.',
        spanish: 'Aguadilla es una ciudad de la costa oeste conocida por sus playas, surf, el área de la antigua Base Aérea Ramey y su aeropuerto.'
    },
    'pr-ab': {
        english: 'Aguas Buenas is a central mountain municipality known for limestone caves, rural landscapes, and views near the San Juan metro area.',
        spanish: 'Aguas Buenas es un municipio montañoso central conocido por sus cuevas de piedra caliza, paisajes rurales y vistas cerca del área metropolitana de San Juan.'
    },
    'pr-ai': {
        english: 'Aibonito is a highland town famous for cool temperatures, mountain views, and its annual flower festival.',
        spanish: 'Aibonito es un pueblo de las alturas famoso por temperaturas frescas, vistas montañosas y su festival de flores anual.'
    },
    'pr-an': {
        english: 'Anasco is a western municipality near the Anasco River, with beaches, agriculture, and access to the Mayaguez region.',
        spanish: 'Añasco es un municipio occidental cerca del Río Añasco, con playas, agricultura y acceso a la región de Mayagüez.'
    },
    'pr-al': {
        english: 'Arecibo is a northern municipality known for its large river, coastal areas, historic downtown, and the former Arecibo Observatory.',
        spanish: 'Arecibo es un municipio norteño conocido por su río grande, áreas costeras, centro histórico y el antiguo Observatorio de Arecibo.'
    },
    'pr-ar': {
        english: 'Arroyo is a small southern coastal municipality known for its seafront, historic railroad heritage, and Caribbean Sea views.',
        spanish: 'Arroyo es un pequeño municipio costero del sur conocido por su frente marítimo, herencia ferroviaria histórica y vistas del Mar Caribeño.'
    },
    'pr-bc': {
        english: 'Barceloneta is a northern municipality known for outlet shopping, pharmaceutical manufacturing, and its position near the Atlantic coast.',
        spanish: 'Barceloneta es un municipio norteño conocido por compras outlet, manufactura farmacéutica y su posición cerca de la costa del Atlántico.'
    },
    'pr-bq': {
        english: 'Barranquitas is a central mountain town known for scenic roads, deep valleys, and connections to Puerto Rican political history.',
        spanish: 'Barranquitas es un pueblo montañoso central conocido por caminos escénicos, valles profundos y conexiones con la historia política puertorriqueña.'
    },
    'pr-bm': {
        english: 'Bayamon is a major metropolitan city west of San Juan, known for sports, shopping, transit, and urban neighborhoods.',
        spanish: 'Bayamón es una ciudad metropolitana importante al oeste de San Juan, conocida por deportes, compras, tránsito y vecindarios urbanos.'
    },
    'pr-cr': {
        english: 'Cabo Rojo is a southwestern municipality famous for beaches, salt flats, cliffs, and the Los Morrillos lighthouse.',
        spanish: 'Cabo Rojo es un municipio del suroeste famoso por playas, salinas, acantilados y el faro de Los Morrillos.'
    },
    'pr-cg': {
        english: 'Caguas is a large inland city in the east-central region, known for commerce, museums, and its Criollo identity.',
        spanish: 'Caguas es una ciudad interior grande en la región este-central, conocida por su comercio, museos e identidad criolla.'
    },
    'pr-cm': {
        english: 'Camuy is a northern municipality best known for the Rio Camuy cave system and its rural coastal landscape.',
        spanish: 'Camuy es un municipio norteño mejor conocido por el sistema de cuevas del Río Camuy y su paisaje costero rural.'
    },
    'pr-cv': {
        english: 'Canovanas is an eastern municipality known for access toward El Yunque, horse racing culture, and rural communities.',
        spanish: 'Canóvanas es un municipio oriental conocido por acceso hacia El Yunque, cultura de carreras de caballos y comunidades rurales.'
    },
    'pr-ca': {
        english: 'Carolina is a metropolitan municipality known for beaches, tourism, the airport area, and the Isla Verde hotel district.',
        spanish: 'Carolina es un municipio metropolitano conocido por playas, turismo, el área del aeropuerto y el distrito hotelero de Isla Verde.'
    },
    'pr-ct': {
        english: 'Catano is a small bayfront municipality across from Old San Juan, known for ferry access and views of San Juan Bay.',
        spanish: 'Cataño es un pequeño municipio frente a la bahía al otro lado del Viejo San Juan, conocido por acceso de transbordador y vistas de la Bahía de San Juan.'
    },
    'pr-cj': {
        english: 'Cayey is a mountain municipality known for cool weather, food stops, university life, and views along the central highway.',
        spanish: 'Cayey es un municipio montañoso conocido por clima fresco, paradas de comida, vida universitaria y vistas a lo largo de la carretera central.'
    },
    'pr-cb': {
        english: 'Ceiba is an eastern coastal municipality known for the former Roosevelt Roads naval base and ferry access nearby.',
        spanish: 'Ceiba es un municipio costero oriental conocido por la antigua base naval Roosevelt Roads y acceso de transbordador cercano.'
    },
    'pr-ci': {
        english: 'Ciales is a central municipality known for coffee, mountain landscapes, and the Manati River basin.',
        spanish: 'Ciales es un municipio central conocido por café, paisajes montañosos y la cuenca del Río Manatí.'
    },
    'pr-cd': {
        english: 'Cidra is a central municipality known for its lake, agriculture, and nickname connected to eternal spring.',
        spanish: 'Cidra es un municipio central conocido por su lago, agricultura y apodo conectado con la primavera eterna.'
    },
    'pr-co': {
        english: 'Coamo is one of Puerto Rico oldest towns, known for thermal springs, colonial history, and southern mountain foothills.',
        spanish: 'Coamo es uno de los pueblos más antiguos de Puerto Rico, conocido por aguas termales, historia colonial y contrafuertes montañosos del sur.'
    },
    'pr-cm2': {
        english: 'Comerio is a central mountain municipality known for tobacco history, steep hills, and views along the La Plata River.',
        spanish: 'Comerío es un municipio montañoso central conocido por historia del tabaco, colinas pronunciadas y vistas a lo largo del Río La Plata.'
    },
    'pr-cz': {
        english: 'Corozal is a central-northern municipality known for plantain agriculture, rural communities, and mountain roads.',
        spanish: 'Corozal es un municipio centro-norte conocido por agricultura de plátanos, comunidades rurales y caminos montañosos.'
    },
    'pr-cl': {
        english: 'Culebra is an island municipality east of Puerto Rico, famous for clear water, coral reefs, and Flamenco Beach.',
        spanish: 'Culebra es un municipio insular al este de Puerto Rico, famoso por agua clara, arrecifes de coral y Playa Flamenco.'
    },
    'pr-do': {
        english: 'Dorado is a northern coastal municipality known for resorts, beaches, golf, and upscale residential areas.',
        spanish: 'Dorado es un municipio costero norteño conocido por complejos turísticos, playas, golf y áreas residenciales de lujo.'
    },
    'pr-fj': {
        english: 'Fajardo is an eastern coastal city known for marinas, boating, beaches, and access to nearby islands.',
        spanish: 'Fajardo es una ciudad costera oriental conocida por marinas, navegación, playas y acceso a islas cercanas.'
    },
    'pr-fl': {
        english: 'Florida is one of Puerto Rico smallest municipalities, located in the north-central region with a rural town character.',
        spanish: 'Florida es uno de los municipios más pequeños de Puerto Rico, ubicado en la región norte-central con carácter de pueblo rural.'
    },
    'pr-gc': {
        english: 'Guanica is a southwestern coastal municipality known for dry forest, beaches, and its important bay.',
        spanish: 'Guánica es un municipio costero del suroeste conocido por bosque seco, playas y su bahía importante.'
    },
    'pr-ga': {
        english: 'Guayama is a southern city known for historic architecture, the Carite area nearby, and its nickname as the Brujo City.',
        spanish: 'Guayama es una ciudad del sur conocida por arquitectura histórica, el área de Carite cercana y su apodo como la Ciudad del Brujo.'
    },
    'pr-gy': {
        english: 'Guayanilla is a southern municipality with coastal plains, mountain areas, and a history tied to agriculture and industry.',
        spanish: 'Guayanilla es un municipio del sur con llanuras costeras, áreas montañosas e historia ligada a la agricultura e industria.'
    },
    'pr-gb': {
        english: 'Guaynabo is a metropolitan municipality known for business districts, suburban neighborhoods, and historic Caparra ruins.',
        spanish: 'Guaynabo es un municipio metropolitano conocido por distritos comerciales, vecindarios suburbanos y ruinas históricas de Caparra.'
    },
    'pr-gm': {
        english: 'Gurabo is an eastern inland municipality known for its stairway landmark, suburban growth, and location near Caguas.',
        spanish: 'Gurabo es un municipio interior oriental conocido por su punto de referencia de escaleras, crecimiento suburbano y ubicación cerca de Caguas.'
    },
    'pr-ha': {
        english: 'Hatillo is a northern municipality known for dairy farming, coastal areas, and its large Festival de Mascaras.',
        spanish: 'Hatillo es un municipio norteño conocido por ganadería lechera, áreas costeras y su gran Festival de Máscaras.'
    },
    'pr-ho': {
        english: 'Hormigueros is a small western municipality known for its basilica, religious tradition, and location near Mayaguez.',
        spanish: 'Hormigueros es un pequeño municipio occidental conocido por su basílica, tradición religiosa y ubicación cerca de Mayagüez.'
    },
    'pr-hm': {
        english: 'Humacao is an eastern municipality known for its nature reserve, university presence, and coastal communities.',
        spanish: 'Humacao es un municipio oriental conocido por su reserva natural, presencia universitaria y comunidades costeras.'
    },
    'pr-ise': {
        english: 'Isabel Segunda is the main town of Vieques, known for ferry activity, the Fortin Conde de Mirasol, and island services.',
        spanish: 'Isabel Segunda es el pueblo principal de Vieques, conocido por actividad de transbordadores, el Fortín Conde de Mirasol y servicios isleños.'
    },
    'pr-is': {
        english: 'Isabela is a northwestern municipality known for beaches, surfing, cliffs, and scenic coastal drives.',
        spanish: 'Isabela es un municipio noroeste conocido por playas, surf, acantilados y paseos costeros escénicos.'
    },
    'pr-id': {
        english: 'Isla Desecheo is a small, uninhabited island located in the Mona Passage.',
        spanish: 'Isla Desecheo es una pequeña isla deshabitada ubicada en el Paso de la Mona.'
    },
    'pr-jy': {
        english: 'Jayuya is a central mountain municipality known for Taino heritage, coffee country, and highland scenery.',
        spanish: 'Jayuya es un municipio montañoso central conocido por herencia taína, región cafetalera y paisajes de tierras altas.'
    },
    'pr-jd': {
        english: 'Juana Diaz is a southern municipality known for Three Kings traditions, agriculture, and access between Ponce and Coamo.',
        spanish: 'Juana Díaz es un municipio del sur conocido por tradiciones de Reyes, agricultura y acceso entre Ponce y Coamo.'
    },
    'pr-jc': {
        english: 'Juncos is an eastern inland municipality known for industry, sports culture, and its location between Caguas and Humacao.',
        spanish: 'Juncos es un municipio interior oriental conocido por industria, cultura deportiva y su ubicación entre Caguas y Humacao.'
    },
    'pr-lj': {
        english: 'Lajas is a southwestern municipality known for La Parguera, mangrove channels, and bioluminescent water.',
        spanish: 'Lajas es un municipio del suroeste conocido por La Parguera, canales de mangle y agua bioluminiscente.'
    },
    'pr-lm': {
        english: 'Lares is a western mountain municipality famous for the Grito de Lares and Puerto Rican independence history.',
        spanish: 'Lares es un municipio montañoso occidental famoso por el Grito de Lares e historia de independencia puertorriqueña.'
    },
    'pr-lr': {
        english: 'Las Marias is a western mountain municipality known for coffee, rural landscapes, and quiet highland communities.',
        spanish: 'Las Marías es un municipio montañoso occidental conocido por café, paisajes rurales y comunidades de tierras altas tranquilas.'
    },
    'pr-lp': {
        english: 'Las Piedras is an eastern municipality known for its inland location, local festivals, and connection to the Humacao region.',
        spanish: 'Las Piedras es un municipio oriental conocido por su ubicación interior, festivales locales y conexión con la región de Humacao.'
    },
    'pr-lz': {
        english: 'Loiza is a northeastern coastal municipality known for Afro-Puerto Rican culture, bomba, vejigante masks, and beaches.',
        spanish: 'Loíza es un municipio costero nororiental conocido por cultura afropuertorriqueña, bomba, máscaras vejigantes y playas.'
    },
    'pr-lq': {
        english: 'Luquillo is an eastern coastal municipality known for beach kiosks, Balneario La Monserrate, and views of El Yunque.',
        spanish: 'Luquillo es un municipio costero oriental conocido por quioscos de playa, Balneario La Monserrate y vistas de El Yunque.'
    },
    'pr-mc': {
        english: 'Manati is a northern municipality known for beaches, medical services, industry, and the Mar Chiquita coastline.',
        spanish: 'Manatí es un municipio norteño conocido por playas, servicios médicos, industria y la costa de Mar Chiquita.'
    },
    'pr-mr': {
        english: 'Maricao is a western mountain municipality known for coffee, forest reserves, and cool highland landscapes.',
        spanish: 'Maricao es un municipio montañoso occidental conocido por café, reservas forestales y paisajes de tierras altas frescas.'
    },
    'pr-mb': {
        english: 'Maunabo is a southeastern coastal municipality known for its lighthouse, beaches, and quiet rural character.',
        spanish: 'Maunabo es un municipio costero del sureste conocido por su faro, playas y carácter rural tranquilo.'
    },
    'pr-mg': {
        english: 'Mayaguez is a major western city known for its university, port, sports history, and regional importance.',
        spanish: 'Mayagüez es una ciudad occidental importante conocida por su universidad, puerto, historia deportiva e importancia regional.'
    },
    'pr-mo': {
        english: 'Mona Island is a remote island reserve west of Puerto Rico, known for wildlife, caves, cliffs, and protected ecosystems.',
        spanish: 'Isla Mona es una reserva insular remota al oeste de Puerto Rico, conocida por vida silvestre, cuevas, acantilados y ecosistemas protegidos.'
    },
    'pr-mc3': {
        english: 'Moca is a western inland municipality known for lace-making traditions, agriculture, and its town plaza.',
        spanish: 'Moca es un municipio interior occidental conocido por tradiciones de encaje, agricultura y su plaza del pueblo.'
    },
    'pr-mv': {
        english: 'Morovis is a central municipality known for mountain landscapes, rural communities, and its location near the island center.',
        spanish: 'Morovis es un municipio central conocido por paisajes montañosos, comunidades rurales y su ubicación cerca del centro de la isla.'
    },
    'pr-ng': {
        english: 'Naguabo is an eastern coastal municipality known for seafood, waterfront restaurants, and access to mountain and coastal areas.',
        spanish: 'Naguabo es un municipio costero oriental conocido por mariscos, restaurantes frente al mar y acceso a áreas montañosas y costeras.'
    },
    'pr-nt': {
        english: 'Naranjito is a central municipality known for orange-growing history, mountain roads, and volleyball tradition.',
        spanish: 'Naranjito es un municipio central conocido por historia de cultivo de naranjas, caminos montañosos y tradición de voleibol.'
    },
    'pr-or': {
        english: 'Orocovis is a central mountain municipality known for being near the island center, adventure tourism, and highland views.',
        spanish: 'Orocovis es un municipio montañoso central conocido por estar cerca del centro de la isla, turismo de aventura y vistas de tierras altas.'
    },
    'pr-pt': {
        english: 'Patillas is a southeastern municipality known for its reservoir, coastal areas, and mountain-to-sea landscape.',
        spanish: 'Patillas es un municipio del sureste conocido por su embalse, áreas costeras y paisaje de montaña al mar.'
    },
    'pr-pe': {
        english: 'Penuelas is a southern municipality known for valleys, mountains, and its location near Ponce and Guayanilla.',
        spanish: 'Peñuelas es un municipio del sur conocido por valles, montañas y su ubicación cerca de Ponce y Guayanilla.'
    },
    'pr-po': {
        english: 'Ponce is Puerto Rico second-largest city, known for historic architecture, museums, music, and southern culture.',
        spanish: 'Ponce es la segunda ciudad más grande de Puerto Rico, conocida por arquitectura histórica, museos, música y cultura del sur.'
    },
    'pr-qb': {
        english: 'Quebradillas is a northwestern municipality known for cliffs, beaches, and views over the Atlantic Ocean.',
        spanish: 'Quebradillas es un municipio noroeste conocido por acantilados, playas y vistas sobre el Océano Atlántico.'
    },
    'pr-rc': {
        english: 'Rincon is a western coastal municipality famous for surfing, sunsets, beaches, and a relaxed visitor scene.',
        spanish: 'Rincón es un municipio costero occidental famoso por surf, puestas de sol, playas y escena de visitantes relajada.'
    },
    'pr-rg': {
        english: 'Rio Grande is an eastern municipality known for El Yunque access, resorts, golf, and coastal tourism.',
        spanish: 'Río Grande es un municipio oriental conocido por acceso a El Yunque, complejos turísticos, golf y turismo costero.'
    },
    'pr-sb': {
        english: 'Sabana Grande is a southwestern inland municipality known for religious sites, farming areas, and mountain foothills.',
        spanish: 'Sabana Grande es un municipio interior del suroeste conocido por sitios religiosos, áreas agrícolas y contrafuertes montañosos.'
    },
    'pr-sl': {
        english: 'Salinas is a southern coastal municipality known for seafood, marinas, mangroves, and Caribbean Sea views.',
        spanish: 'Salinas es un municipio costero del sur conocido por mariscos, marinas, manglares y vistas del Mar Caribeño.'
    },
    'pr-sg': {
        english: 'San German is one of Puerto Rico oldest towns, known for colonial architecture, churches, and university history.',
        spanish: 'San Germán es uno de los pueblos más antiguos de Puerto Rico, conocido por arquitectura colonial, iglesias e historia universitaria.'
    },
    'pr-sj': {
        english: 'San Juan is Puerto Rico capital, known for Old San Juan, government, tourism, culture, ports, and historic forts.',
        spanish: 'San Juan es la capital de Puerto Rico, conocida por el Viejo San Juan, gobierno, turismo, cultura, puertos y fuertes históricos.'
    },
    'pr-sl2': {
        english: 'San Lorenzo is an eastern inland municipality known for rivers, rural neighborhoods, and its location near Caguas.',
        spanish: 'San Lorenzo es un municipio interior oriental conocido por ríos, vecindarios rurales y su ubicación cerca de Caguas.'
    },
    'pr-ss': {
        english: 'San Sebastian is a western mountain municipality known for agriculture, hammock traditions, and scenic countryside.',
        spanish: 'San Sebastián es un municipio montañoso occidental conocido por agricultura, tradiciones de hamacas y campos escénicos.'
    },
    'pr-si': {
        english: 'Santa Isabel is a southern coastal municipality known for agriculture, coastal plains, and Caribbean Sea access.',
        spanish: 'Santa Isabel es un municipio costero del sur conocido por agricultura, llanuras costeras y acceso al Mar Caribeño.'
    },
    'pr-ta': {
        english: 'Toa Alta is a northern municipality near the metro area, known for suburban growth and historic town roots.',
        spanish: 'Toa Alta es un municipio norteño cerca del área metropolitana, conocido por crecimiento suburbano y raíces históricas del pueblo.'
    },
    'pr-tb': {
        english: 'Toa Baja is a metropolitan coastal municipality known for Levittown, beaches, and communities near San Juan Bay.',
        spanish: 'Toa Baja es un municipio costero metropolitano conocido por Levittown, playas y comunidades cerca de la Bahía de San Juan.'
    },
    'pr-tr': {
        english: 'Trujillo Alto is a metropolitan municipality southeast of San Juan, known for suburban neighborhoods and rural edges.',
        spanish: 'Trujillo Alto es un municipio metropolitano al sureste de San Juan, conocido por vecindarios suburbanos y bordes rurales.'
    },
    'pr-ut': {
        english: 'Utuado is a large central mountain municipality known for lakes, rivers, coffee, and Taino archaeological heritage.',
        spanish: 'Utuado es un municipio montañoso central grande conocido por lagos, ríos, café y herencia arqueológica taína.'
    },
    'pr-va': {
        english: 'Vega Alta is a northern municipality known for beaches, coastal communities, and its location west of Dorado.',
        spanish: 'Vega Alta es un municipio norteño conocido por playas, comunidades costeras y su ubicación al oeste de Dorado.'
    },
    'pr-vb': {
        english: 'Vega Baja is a northern coastal municipality known for beaches, caves, and its historic town center.',
        spanish: 'Vega Baja es un municipio costero norteño conocido por playas, cuevas y su centro histórico del pueblo.'
    },
    'pr-vi': {
        english: 'Vieques is an island municipality known for beaches, wild horses, wildlife refuges, and a famous bioluminescent bay.',
        spanish: 'Vieques es un municipio insular conocido por playas, caballos salvajes, refugios de vida silvestre y una bahía bioluminiscente famosa.'
    },
    'pr-vl': {
        english: 'Villalba is a central-southern mountain municipality known for lakes, hills, and its nickname as the Avancino town.',
        spanish: 'Villalba es un municipio montañoso centro-sur conocido por lagos, colinas y su apodo como el pueblo Avancino.'
    },
    'pr-yb': {
        english: 'Yabucoa is a southeastern municipality where Hurricane Maria made landfall in 2017, also known for valleys and coast.',
        spanish: 'Yabucoa es un municipio del sureste donde el Huracán María tocó tierra en 2017, también conocido por valles y costa.'
    },
    'pr-yc': {
        english: 'Yauco is a southwestern municipality known for coffee, painted hillside houses, and its Corsican heritage.',
        spanish: 'Yauco es un municipio del suroeste conocido por café, casas con laderas pintadas y su herencia corsa.'
    }
};

// Quiz questions used by the quiz system.
// Structure:
// - top level language key (`english` or `spanish`)
// - `questions` array for that language
// - each question has:
//   - an id
//   - a question string
//   - an array of answer options
//   - the index of the correct answer
//   - an explanation shown after the user answers
const quizData = {
    english: {
        questions: [
            {
                id: 1,
                question: "What did the Taíno people call Puerto Rico?",
                options: ["Borikén", "San Juan", "Puerto Rico", "La Isla del Encanto"],
                correctAnswer: 0,
                explanation: "The Taíno people called the island Borikén, which means 'the land of the brave people.' This indigenous name reflects the island's original inhabitants who lived there before European colonization."
            },
            {
                id: 2,
                question: "When did Christopher Columbus first arrive in Puerto Rico?",
                options: ["1492", "1493", "1508", "1511"],
                correctAnswer: 1,
                explanation: "Christopher Columbus arrived in Puerto Rico on November 19, 1493, during his second voyage to the Americas. He named the island San Juan Bautista."
            },
            {
                id: 3,
                question: "Which musical genre originated in Puerto Rico in the early 1990s?",
                options: ["Salsa", "Merengue", "Reggaeton", "Bachata"],
                correctAnswer: 2,
                explanation: "Reggaeton originated in Puerto Rico in the early 1990s, blending Jamaican dancehall, hip-hop, and Latin rhythms. Artists like Daddy Yankee brought it to global prominence."
            },
            {
                id: 4,
                question: "What is Puerto Rico's national instrument?",
                options: ["Güiro", "Maracas", "Cuatro", "Bongos"],
                correctAnswer: 2,
                explanation: "The cuatro is Puerto Rico's national instrument, a small 10-string guitar used in many traditional folk music styles including bomba, plena, and seis."
            },
            {
                id: 5,
                question: "Who is considered Puerto Rico's first internationally recognized painter?",
                options: ["Carlos Rivera", "José Campeche", "Ana Morales", "Diego Valdez"],
                correctAnswer: 1,
                explanation: "José Campeche (1751-1809) was Puerto Rico's first internationally recognized painter, known for his religious works and portraits in the Baroque and Rococo styles."
            },
            {
                id: 6,
                question: "What year did Hurricane Maria devastate Puerto Rico?",
                options: ["2015", "2016", "2017", "2018"],
                correctAnswer: 2,
                explanation: "Hurricane Maria struck Puerto Rico on September 20, 2017, as a Category 4 hurricane, causing catastrophic damage and exposing infrastructure vulnerabilities."
            },
            {
                id: 7,
                question: "Which Puerto Rican poet is known for the poem 'Río Grande de Loiza'?",
                options: ["Luis Lloréns Torres", "Julia de Burgos", "Pedro Albizu Campos", "Luis Palés Matos"],
                correctAnswer: 1,
                explanation: "Julia de Burgos (1914-1953) is Puerto Rico's most famous poet, known for her passionate verses about identity, nature, and Puerto Rican culture."
            },
            {
                id: 8,
                question: "What was the main economic activity during Puerto Rico's sugar era?",
                options: ["Fishing", "Sugar plantations", "Gold mining", "Coffee farming"],
                correctAnswer: 1,
                explanation: "During the 18th and 19th centuries, Puerto Rico's economy was dominated by sugar plantations, which relied on enslaved African labor and created a plantation society."
            },
            {
                id: 9,
                question: "When did Puerto Rico become a U.S. territory?",
                options: ["1868", "1898", "1917", "1952"],
                correctAnswer: 1,
                explanation: "After the Spanish-American War in 1898, Puerto Rico became a U.S. territory under the Treaty of Paris. The Jones-Shafroth Act of 1917 granted U.S. citizenship to Puerto Ricans."
            },
            {
                id: 10,
                question: "Which traditional Puerto Rican music style originated in the sugar plantations?",
                options: ["Plena", "Bomba", "Salsa", "Trova"],
                correctAnswer: 1,
                explanation: "Bomba originated in the sugar plantations during the colonial period and features complex rhythms played on barrel drums called barriles, reflecting African musical traditions."
            },
            {
                id: 11,
                question: "What was the name of the failed independence uprising in 1868?",
                options: ["Grito de Lares", "Grito de Yara", "La Revolución", "El Levantamiento"],
                correctAnswer: 0,
                explanation: "The Grito de Lares was an unsuccessful independence uprising in 1868 that became an important moment in Puerto Rico's struggle for self-determination."
            },
            {
                id: 12,
                question: "Which law granted U.S. citizenship to Puerto Ricans in 1917?",
                options: ["Foraker Act", "Jones-Shafroth Act", "Treaty of Paris", "Puerto Rico Federal Act"],
                correctAnswer: 1,
                explanation: "The Jones-Shafroth Act of 1917 granted U.S. citizenship to Puerto Ricans and established a territorial government."
            },
            {
                id: 13,
                question: "Which instrument is played on barrel drums in bomba music?",
                options: ["Cuatro", "Barriles", "Güiro", "Maracas"],
                correctAnswer: 1,
                explanation: "Barriles are barrel drums used in bomba music to create the genre's complex, driving rhythms."
            },
            {
                id: 14,
                question: "Which music group helped popularize salsa worldwide?",
                options: ["The Beatles", "Fania All-Stars", "Buena Vista Social Club", "Los Lobos"],
                correctAnswer: 1,
                explanation: "The Fania All-Stars played a major role in popularizing salsa music around the world in the 1960s and 1970s."
            },
            {
                id: 15,
                question: "Which Puerto Rican painter is known for the masterpiece 'El Velorio'?",
                options: ["Lucía Mendoza", "Francisco Oller", "María Valdés", "Jorge Castillo"],
                correctAnswer: 1,
                explanation: "Francisco Oller painted 'El Velorio' and is considered Puerto Rico's most important 19th-century artist and first Impressionist painter."
            },
            {
                id: 16,
                question: "What music style is characterized by call-and-response vocals and social commentary?",
                options: ["Reggaeton", "Plena", "Salsa", "Trova"],
                correctAnswer: 1,
                explanation: "Plena uses call-and-response vocals and often includes social commentary, especially in its early urban form."
            },
            {
                id: 17,
                question: "Which hurricane destroyed Puerto Rico's electrical grid in 2017?",
                options: ["Hurricane Iris", "Hurricane María", "Hurricane Carmen", "Hurricane José"],
                correctAnswer: 1,
                explanation: "Hurricane Maria destroyed Puerto Rico's electrical grid in 2017, leaving the entire island without power for months."
            },
            {
                id: 18,
                question: "Which U.S. agency faced logistical challenges delivering aid after Maria?",
                options: ["NASA", "FEMA", "EPA", "CDC"],
                correctAnswer: 1,
                explanation: "FEMA faced logistical challenges delivering supplies and relief aid across Puerto Rico after Hurricane Maria."
            },
            {
                id: 19,
                question: "What type of community network helped Puerto Ricans recover after Maria?",
                options: ["Mutual aid", "Shipping unions", "Tourist groups", "Military contractors"],
                correctAnswer: 0,
                explanation: "Mutual aid networks helped communities share resources and support each other during recovery after Hurricane Maria."
            },
            {
                id: 20,
                question: "Which Puerto Rican artist created the abstract 'Serie Caribe'?",
                options: ["Alicia Rojas", "Myrna Báez", "Eduardo Castillo", "Sofía Herrera"],
                correctAnswer: 1,
                explanation: "Myrna Báez created the abstract 'Serie Caribe' and is a leading figure in contemporary Puerto Rican art."
            }
        ]
    },
    spanish: {
        questions: [
            {
                id: 1,
                question: "¿Cómo llamaban los taínos a Puerto Rico?",
                options: ["Borikén", "San Juan", "Puerto Rico", "La Isla del Encanto"],
                correctAnswer: 0,
                explanation: "Los taínos llamaban a la isla Borikén, que significa 'la tierra de la gente valiente'. Este nombre indígena refleja a los habitantes originales de la isla que vivieron allí antes de la colonización europea."
            },
            {
                id: 2,
                question: "¿Cuándo llegó Cristóbal Colón por primera vez a Puerto Rico?",
                options: ["1492", "1493", "1508", "1511"],
                correctAnswer: 1,
                explanation: "Cristóbal Colón llegó a Puerto Rico el 19 de noviembre de 1493, durante su segundo viaje a las Américas. Nombró a la isla San Juan Bautista."
            },
            {
                id: 3,
                question: "¿Qué género musical se originó en Puerto Rico a principios de la década de 1990?",
                options: ["Salsa", "Merengue", "Reggaeton", "Bachata"],
                correctAnswer: 2,
                explanation: "El reggaeton se originó en Puerto Rico a principios de la década de 1990, mezclando dancehall jamaicano, hip-hop y ritmos latinos. Artistas como Daddy Yankee lo llevaron a la prominencia global."
            },
            {
                id: 4,
                question: "¿Cuál es el instrumento nacional de Puerto Rico?",
                options: ["Güiro", "Maracas", "Cuatro", "Bongos"],
                correctAnswer: 2,
                explanation: "El cuatro es el instrumento nacional de Puerto Rico, una pequeña guitarra de 10 cuerdas usada en muchos estilos musicales folclóricos tradicionales incluyendo bomba, plena y seis."
            },
            {
                id: 5,
                question: "¿Quién se considera el primer pintor reconocido internacionalmente de Puerto Rico?",
                options: ["Carlos Rivera", "José Campeche", "Ana Morales", "Diego Valdez"],
                correctAnswer: 1,
                explanation: "José Campeche (1751-1809) fue el primer pintor reconocido internacionalmente de Puerto Rico, conocido por sus obras religiosas y retratos en estilos barroco y rococó."
            },
            {
                id: 6,
                question: "¿En qué año devastó el huracán María a Puerto Rico?",
                options: ["2015", "2016", "2017", "2018"],
                correctAnswer: 2,
                explanation: "El huracán María azotó Puerto Rico el 20 de septiembre de 2017, como un huracán de categoría 4, causando daños catastróficos y exponiendo vulnerabilidades de infraestructura."
            },
            {
                id: 7,
                question: "¿Qué poeta puertorriqueño es conocido por el poema 'Río Grande de Loiza'?",
                options: ["Luis Lloréns Torres", "Julia de Burgos", "Pedro Albizu Campos", "Luis Palés Matos"],
                correctAnswer: 1,
                explanation: "Julia de Burgos (1914-1953) es la poeta más famosa de Puerto Rico, conocida por sus versos apasionados sobre identidad, naturaleza y cultura puertorriqueña."
            },
            {
                id: 8,
                question: "¿Cuál fue la actividad económica principal durante la era azucarera de Puerto Rico?",
                options: ["Pesca", "Plantaciones de azúcar", "Minería de oro", "Cultivo de café"],
                correctAnswer: 1,
                explanation: "Durante los siglos XVIII y XIX, la economía de Puerto Rico fue dominada por plantaciones de azúcar, que dependían de mano de obra esclava africana y crearon una sociedad de plantaciones."
            },
            {
                id: 9,
                question: "¿Cuándo se convirtió Puerto Rico en territorio estadounidense?",
                options: ["1868", "1898", "1917", "1952"],
                correctAnswer: 1,
                explanation: "Después de la Guerra Hispanoamericana en 1898, Puerto Rico se convirtió en territorio estadounidense bajo el Tratado de París. La Ley Jones-Shafroth de 1917 otorgó ciudadanía estadounidense a los puertorriqueños."
            },
            {
                id: 10,
                question: "¿Qué estilo musical tradicional puertorriqueño se originó en las plantaciones de azúcar?",
                options: ["Plena", "Bomba", "Salsa", "Trova"],
                correctAnswer: 1,
                explanation: "La bomba se originó en las plantaciones de azúcar durante el período colonial y presenta ritmos complejos tocados en barriles de tambores llamados barriles, reflejando tradiciones musicales africanas."
            },
            {
                id: 11,
                question: "¿Cómo se llamó el levantamiento independentista fallido de 1868?",
                options: ["Grito de Lares", "Grito de Yara", "La Revolución", "El Levantamiento"],
                correctAnswer: 0,
                explanation: "El Grito de Lares fue un levantamiento independentista en 1868 que fracasó, pero se convirtió en un momento importante en la lucha por la autodeterminación de Puerto Rico."
            },
            {
                id: 12,
                question: "¿Qué ley otorgó la ciudadanía estadounidense a los puertorriqueños en 1917?",
                options: ["Ley Foraker", "Ley Jones-Shafroth", "Tratado de París", "Ley Federal de Puerto Rico"],
                correctAnswer: 1,
                explanation: "La Ley Jones-Shafroth de 1917 otorgó la ciudadanía estadounidense a los puertorriqueños y estableció un gobierno territorial."
            },
            {
                id: 13,
                question: "¿Qué instrumento se toca con tambores de barril en la música bomba?",
                options: ["Cuatro", "Barriles", "Güiro", "Maracas"],
                correctAnswer: 1,
                explanation: "Los barriles son tambores de barril utilizados en la música bomba para crear ritmos complejos y potentes."
            },
            {
                id: 14,
                question: "¿Qué grupo musical ayudó a popularizar la salsa en todo el mundo?",
                options: ["The Beatles", "Fania All-Stars", "Buena Vista Social Club", "Los Lobos"],
                correctAnswer: 1,
                explanation: "Los Fania All-Stars ayudaron a popularizar la salsa en todo el mundo durante las décadas de 1960 y 1970."
            },
            {
                id: 15,
                question: "¿Qué pintor puertorriqueño es conocido por la obra maestra 'El Velorio'?",
                options: ["Lucía Mendoza", "Francisco Oller", "María Valdés", "Jorge Castillo"],
                correctAnswer: 1,
                explanation: "Francisco Oller pintó 'El Velorio' y es considerado el artista puertorriqueño más importante del siglo XIX y el primer pintor impresionista de la isla."
            },
            {
                id: 16,
                question: "¿Qué estilo musical se caracteriza por vocales de llamada y respuesta y comentario social?",
                options: ["Reggaeton", "Plena", "Salsa", "Trova"],
                correctAnswer: 1,
                explanation: "La plena utiliza vocales de llamada y respuesta y a menudo incluye comentario social, especialmente en su forma urbana temprana."
            },
            {
                id: 17,
                question: "¿Qué huracán destruyó la red eléctrica de Puerto Rico en 2017?",
                options: ["Huracán Irma", "Huracán María", "Huracán Harvey", "Huracán José"],
                correctAnswer: 1,
                explanation: "El huracán María destruyó la red eléctrica de Puerto Rico en 2017, dejando a toda la isla sin energía durante meses."
            },
            {
                id: 18,
                question: "¿Qué agencia de EE.UU. enfrentó desafíos logísticos al entregar ayuda después de María?",
                options: ["NASA", "FEMA", "EPA", "CDC"],
                correctAnswer: 1,
                explanation: "FEMA enfrentó desafíos logísticos para entregar suministros y ayuda humanitaria en Puerto Rico después del huracán María."
            },
            {
                id: 19,
                question: "¿Qué tipo de redes comunitarias ayudaron a los puertorriqueños a recuperarse después de María?",
                options: ["Ayuda mutua", "Uniones de envío", "Grupos turísticos", "Contratistas militares"],
                correctAnswer: 0,
                explanation: "Las redes de ayuda mutua ayudaron a las comunidades a compartir recursos y apoyarse mutuamente durante la recuperación después del huracán María."
            },
            {
                id: 20,
                question: "¿Qué artista puertorriqueña creó la abstracta 'Serie Caribe'?",
                options: ["Alicia Rojas", "Myrna Báez", "Eduardo Castillo", "Sofía Herrera"],
                correctAnswer: 1,
                explanation: "Myrna Báez creó la abstracta 'Serie Caribe' y es una figura destacada del arte contemporáneo puertorriqueño."
            }
        ]
    }
};

// Main page content data.
// Stores localized titles, subtitles, and body sections for the
// history, music, art, and hurricane pages.
// `routing.js` uses this when a user opens a regular content page.
// Structure:
// - language object for each page
// - each language object contains a title, subtitle, and an array of
//   content sections with headings and paragraph text
const mapRegions = {
    north: {
        english: {
            name: "Northern Coast",
            description: "The north coast includes San Juan and the historic old city. It is known for beaches, forts, and vibrant city life.",
            details: [
                "Includes San Juan, the capital and historic district Old San Juan.",
                "Famous for Condado Beach, El Morro, and Paseo de la Princesa.",
                "Home to many festivals, Puerto Rican cuisine, and lively nightlife."
            ]
        },
        spanish: {
            name: "Costa Norte",
            description: "La costa norte incluye San Juan y la ciudad histórica. Es conocida por sus playas, fortalezas y vida urbana vibrante.",
            details: [
                "Incluye San Juan, la capital y el distrito histórico Viejo San Juan.",
                "Famosa por la playa de Condado, El Morro y el Paseo de la Princesa.",
                "Es hogar de muchos festivales, la cocina puertorriqueña y la vida nocturna." 
            ]
        }
    },
    northeast: {
        english: {
            name: "Northeast Forests",
            description: "The northeast includes El Yunque National Forest and the lush rainforest region with waterfalls and hiking trails.",
            details: [
                "Home to El Yunque, the only tropical rainforest in the U.S. National Forest System.",
                "Known for waterfalls, green mountains, and hiking paths.",
                "Popular for eco-tourism and birdwatching." 
            ]
        },
        spanish: {
            name: "Bosques del Noreste",
            description: "El noreste incluye el Bosque Nacional El Yunque y la región de selva tropical con cascadas y rutas de senderismo.",
            details: [
                "Es hogar de El Yunque, la única selva tropical en el Sistema Nacional de Bosques de EE.UU.",
                "Conocido por sus cascadas, montañas verdes y rutas de senderismo.",
                "Popular para el ecoturismo y la observación de aves." 
            ]
        }
    },
    east: {
        english: {
            name: "Eastern Shore",
            description: "The east is famous for Fajardo, lush forests, and water sports. It is a gateway to the islands of Culebra and Vieques.",
            details: [
                "Departures for the islands of Culebra and Vieques are often from Fajardo.",
                "Excellent area for snorkeling, kayaking, and bioluminescent bay tours.",
                "Also known for coastal views and historic lighthouse sites." 
            ]
        },
        spanish: {
            name: "Costa Este",
            description: "El este es famoso por Fajardo, sus bosques exuberantes y deportes acuáticos. Es la puerta de entrada a las islas Culebra y Vieques.",
            details: [
                "Las salidas hacia Culebra y Vieques suelen ser desde Fajardo.",
                "Excelente zona para esnórquel, kayak y tours de bahías bioluminiscentes.",
                "También es conocida por sus vistas costeras y faros históricos." 
            ]
        }
    },
    south: {
        english: {
            name: "Southern Coast",
            description: "The south includes Ponce and a warm tropical climate. It is known for cultural festivals, art, and historic plazas.",
            details: [
                "Ponce is called La Perla del Sur and has beautiful plazas and colonial architecture.",
                "The area is famous for carnival celebrations and artisan crafts.",
                "There are also coastal parks and beaches popular with locals." 
            ]
        },
        spanish: {
            name: "Costa Sur",
            description: "El sur incluye Ponce y un clima tropical cálido. Es conocido por festivales culturales, arte y plazas históricas.",
            details: [
                "Ponce se llama La Perla del Sur y tiene hermosas plazas y arquitectura colonial.",
                "La zona es famosa por sus celebraciones de carnaval y artesanías.",
                "También cuenta con parques costeros y playas populares entre los locales." 
            ]
        }
    },
    west: {
        english: {
            name: "Western Region",
            description: "The west includes Mayagüez and rural towns where agriculture, music, and coastal sunsets are important.",
            details: [
                "Mayagüez is a university city known for its agricultural history.",
                "The western coast offers surf beaches and fishing villages.",
                "Local music and food culture are strong in this region." 
            ]
        },
        spanish: {
            name: "Región Oeste",
            description: "El oeste incluye Mayagüez y pueblos rurales donde la agricultura, la música y las puestas de sol en la costa son importantes.",
            details: [
                "Mayagüez es una ciudad universitaria conocida por su historia agrícola.",
                "La costa oeste ofrece playas para surf y pueblos de pesca.",
                "La música local y la cultura gastronómica son fuertes en esta región." 
            ]
        }
    },
    interior: {
        english: {
            name: "Central Mountains",
            description: "The interior mountains are home to El Yunque and coffee farms. This area is cooler and full of rivers and forests.",
            details: [
                "The central mountain region is famous for coffee plantations and cooler weather.",
                "Rivers like Río Grande de Loíza run through the hills.",
                "It is a great place to learn about Puerto Rico's natural environment and agriculture." 
            ]
        },
        spanish: {
            name: "Montañas Centrales",
            description: "Las montañas centrales albergan El Yunque y fincas de café. Esta zona es más fresca y está llena de ríos y bosques.",
            details: [
                "La región montañosa central es famosa por las plantaciones de café y el clima más fresco.",
                "Ríos como el Río Grande de Loíza atraviesan las colinas.",
                "Es un gran lugar para aprender sobre el medio ambiente natural y la agricultura de Puerto Rico." 
            ]
        }
    }
};

const pageContent = {
    // History page
    history: {
        english: {
            title: "Puerto Rico's History",
            subtitle: "From Taíno civilization to modern times",
            sections: [
                {
                    heading: "Indigenous Peoples - The Taíno",
                    content: "Before European colonization, Puerto Rico was inhabited by the Taíno people, an indigenous group who called the island Borikén, meaning 'the land of the brave people.' The Taíno were skilled farmers, fishermen, and artisans who cultivated crops like cassava, sweet potatoes, corn, and tobacco. They lived in villages called 'yucayeques' led by caciques (chiefs) and created beautiful pottery, jewelry, and ceremonial objects. Their society was organized around a system of kinship and communal living."
                },
                {
                    heading: "European Arrival and Colonization",
                    content: "Christopher Columbus arrived in Puerto Rico on November 19, 1493, during his second voyage to the Americas. He named the island San Juan Bautista. The Spanish established settlements and began the process of colonization, bringing new crops, animals, and diseases that dramatically changed the island's population and culture. The Spanish built forts, churches, and administrative buildings, establishing San Juan as the capital in 1521. The colonial period brought significant changes to the island's demographics and economy."
                },
                {
                    heading: "The Sugar Era and Plantation Economy",
                    content: "During the 18th and 19th centuries, Puerto Rico became a major sugar-producing colony. Large plantations were established, and African slaves were brought to work the fields. This period saw the growth of a complex social hierarchy with Spanish landowners at the top, followed by freed blacks, and enslaved Africans at the bottom. The sugar economy brought wealth but also social inequality. Coffee became another important export crop, especially in the mountainous regions."
                },
                {
                    heading: "19th Century Reforms and Independence Movements",
                    content: "Throughout the 19th century, Puerto Rico experienced political reforms, economic changes, and growing desires for independence. The island was briefly occupied by the British in 1797 during the Anglo-Spanish War. Liberal reforms in Spain led to the creation of a provincial deputation in 1869, giving Puerto Ricans limited self-government. Independence movements gained strength, though they were suppressed by Spanish authorities. The Grito de Lares in 1868 was an unsuccessful uprising for independence."
                },
                {
                    heading: "The Spanish-American War and U.S. Territory Status",
                    content: "After the Spanish-American War in 1898, Puerto Rico became a territory of the United States. The Treaty of Paris ceded Puerto Rico, along with Cuba, Guam, and the Philippines, to the United States. The U.S. established a military government initially, then transitioned to civilian rule. The Jones-Shafroth Act of 1917 granted U.S. citizenship to Puerto Ricans and established a territorial government with an elected legislature. This period brought modernization, infrastructure development, and economic changes."
                },
                {
                    heading: "Modern Puerto Rico and Political Status",
                    content: "Today, Puerto Rico remains a U.S. territory with a unique political status. The island has its own constitution, governor, and legislature, but lacks voting representation in the U.S. Congress. Puerto Ricans have U.S. citizenship and can move freely between the island and mainland United States. The political status debate continues, with options including statehood, independence, or enhanced autonomy. Puerto Rico has made significant contributions to American culture, sports, and politics while maintaining its distinct identity."
                }
            ]
        },
        spanish: {
            title: "Historia de Puerto Rico",
            subtitle: "Desde la civilización taína hasta los tiempos modernos",
            sections: [
                {
                    heading: "Pueblos Indígenas - Los Taínos",
                    content: "Antes de la colonización europea, Puerto Rico estaba habitado por el pueblo taíno, un grupo indígena que llamaba a la isla Borikén, que significa 'la tierra de la gente valiente'. Los taínos eran hábiles agricultores, pescadores y artesanos que cultivaban cultivos como la yuca, batatas, maíz y tabaco. Vivían en aldeas llamadas 'yucayeques' lideradas por caciques (jefes) y creaban hermosas cerámicas, joyas y objetos ceremoniales. Su sociedad se organizaba alrededor de un sistema de parentesco y vida comunal."
                },
                {
                    heading: "Llegada Europea y Colonización",
                    content: "Cristóbal Colón llegó a Puerto Rico el 19 de noviembre de 1493, durante su segundo viaje a las Américas. Nombró a la isla San Juan Bautista. Los españoles establecieron asentamientos y comenzaron el proceso de colonización, trayendo nuevos cultivos, animales y enfermedades que cambiaron dramáticamente la población y cultura de la isla. Los españoles construyeron fortalezas, iglesias y edificios administrativos, estableciendo San Juan como capital en 1521. El período colonial trajo cambios significativos a la demografía y economía de la isla."
                },
                {
                    heading: "La Era del Azúcar y la Economía de Plantaciones",
                    content: "Durante los siglos XVIII y XIX, Puerto Rico se convirtió en una importante colonia productora de azúcar. Se establecieron grandes plantaciones y se trajeron esclavos africanos para trabajar en los campos. Este período vio el crecimiento de una compleja jerarquía social con terratenientes españoles en la cima, seguidos por negros libres y africanos esclavizados en la base. La economía azucarera trajo riqueza pero también desigualdad social. El café se convirtió en otro cultivo de exportación importante, especialmente en las regiones montañosas."
                },
                {
                    heading: "Reformas del Siglo XIX y Movimientos Independentistas",
                    content: "A lo largo del siglo XIX, Puerto Rico experimentó reformas políticas, cambios económicos y crecientes deseos de independencia. La isla fue brevemente ocupada por los británicos en 1797 durante la Guerra Anglo-Española. Las reformas liberales en España llevaron a la creación de una diputación provincial en 1869, dando a los puertorriqueños un gobierno limitado propio. Los movimientos independentistas ganaron fuerza, aunque fueron suprimidos por las autoridades españolas. El Grito de Lares en 1868 fue un levantamiento fallido por la independencia."
                },
                {
                    heading: "La Guerra Hispanoamericana y el Estatus Territorial de EE.UU.",
                    content: "Después de la Guerra Hispanoamericana en 1898, Puerto Rico se convirtió en territorio de los Estados Unidos. El Tratado de París cedió Puerto Rico, junto con Cuba, Guam y Filipinas, a los Estados Unidos. EE.UU. estableció inicialmente un gobierno militar, luego pasó a un gobierno civil. La Ley Jones-Shafroth de 1917 otorgó ciudadanía estadounidense a los puertorriqueños y estableció un gobierno territorial con una legislatura elegida. Este período trajo modernización, desarrollo de infraestructura y cambios económicos."
                },
                {
                    heading: "Puerto Rico Moderno y Estatus Político",
                    content: "Hoy, Puerto Rico sigue siendo un territorio estadounidense con un estatus político único. La isla tiene su propia constitución, gobernador y legislatura, pero carece de representación electoral en el Congreso de EE.UU. Los puertorriqueños tienen ciudadanía estadounidense y pueden moverse libremente entre la isla y los Estados Unidos continentales. El debate sobre el estatus político continúa, con opciones que incluyen el estado, la independencia o autonomía mejorada. Puerto Rico ha hecho contribuciones significativas a la cultura, deportes y política estadounidense mientras mantiene su identidad distintiva."
                }
            ]
        }
    },
    // Music page
    music: {
        english: {
            title: "Puerto Rico's Music",
            subtitle: "A rich musical heritage blending cultures",
            sections: [
                {
                    heading: "Traditional Folk Music - Bomba and Plena",
                    content: "Puerto Rico's musical traditions include bomba and plena, Afro-Caribbean folk music styles that developed during the colonial period. Bomba originated in the sugar plantations and features complex rhythms played on barrel drums called barriles. Plena emerged in the urban areas around Ponce and San Juan in the early 20th century, characterized by call-and-response vocals and social commentary. Both genres reflect the island's African heritage and continue to be performed at festivals and cultural events."
                },
                {
                    heading: "Salsa - The Sound of Latin Pride",
                    content: "Salsa music became a global phenomenon in the 1960s and 1970s, with Puerto Rico playing a central role. Artists like Héctor Lavoe, Willie Colón, and Celia Cruz brought Puerto Rican rhythms to international audiences. Salsa combines Cuban son montuno with jazz improvisation and features complex horn arrangements. The Fania All-Stars helped popularize salsa worldwide. Puerto Rican salsa is known for its energetic rhythms and emotional vocal delivery."
                },
                {
                    heading: "Reggaeton - Modern Puerto Rican Innovation",
                    content: "Reggaeton emerged in Puerto Rico in the early 1990s, blending Jamaican dancehall, hip-hop, and Latin rhythms. The genre developed in the San Juan area and quickly spread throughout Latin America and beyond. Artists like Daddy Yankee, Don Omar, and Wisin & Yandel brought reggaeton to global prominence. Modern reggaeton incorporates electronic elements, trap influences, and has evolved into a multi-billion dollar industry. Bad Bunny has taken reggaeton to new heights with his innovative approach."
                },
                {
                    heading: "Trova and Nueva Trova",
                    content: "Trova is a style of romantic music that originated in Puerto Rico, characterized by acoustic guitar and poetic lyrics. The genre developed in the late 19th century and was influenced by Spanish troubadour traditions. Notable trovadores include Luis Lloréns Torres and Rafael Hernández. Nueva trova emerged in the 1970s as a more contemporary form, addressing social and political themes. This tradition continues with modern singer-songwriters who blend traditional trova with contemporary styles."
                },
                {
                    heading: "Traditional Instruments",
                    content: "Puerto Rican music features several distinctive instruments. The cuatro, a small 10-string guitar, is the national instrument and is used in many folk genres. The güiro, a hollow gourd played with a scraper, provides rhythmic accompaniment. Maracas, made from dried gourds filled with seeds, add percussive texture. The bongos, a pair of small drums, are essential to many rhythms. These instruments reflect the island's indigenous, African, and European musical influences."
                },
                {
                    heading: "Contemporary Music Scene",
                    content: "Today, Puerto Rican artists continue to innovate across genres. From Bad Bunny's genre-defying reggaeton to artists exploring electronic music, indie rock, and hip-hop, Puerto Rico remains at the forefront of Latin music innovation. The island's music industry contributes significantly to the global Latin music market. Puerto Rican musicians have won numerous Grammy Awards and continue to influence music worldwide while maintaining connections to traditional roots."
                }
            ]
        },
        spanish: {
            title: "Música de Puerto Rico",
            subtitle: "Un rico patrimonio musical que fusiona culturas",
            sections: [
                {
                    heading: "Música Folclórica Tradicional - Bomba y Plena",
                    content: "Las tradiciones musicales de Puerto Rico incluyen bomba y plena, estilos musicales folclóricos afrocaribeños que se desarrollaron durante el período colonial. La bomba se originó en las plantaciones de azúcar y presenta ritmos complejos tocados en barriles de tambores llamados barriles. La plena surgió en las áreas urbanas alrededor de Ponce y San Juan a principios del siglo XX, caracterizada por vocales de llamada y respuesta y comentario social. Ambos géneros reflejan la herencia africana de la isla y continúan siendo interpretados en festivales y eventos culturales."
                },
                {
                    heading: "Salsa - El Sonido del Orgullo Latino",
                    content: "La música salsa se convirtió en un fenómeno global en las décadas de 1960 y 1970, con Puerto Rico jugando un papel central. Artistas como Héctor Lavoe, Willie Colón y Celia Cruz llevaron ritmos puertorriqueños a audiencias internacionales. La salsa combina el son montuno cubano con improvisación de jazz y presenta arreglos complejos de cuernos. Los Fania All-Stars ayudaron a popularizar la salsa en todo el mundo. La salsa puertorriqueña es conocida por sus ritmos energéticos y entrega vocal emocional."
                },
                {
                    heading: "Reggaeton - Innovación Puertorriqueña Moderna",
                    content: "El reggaeton surgió en Puerto Rico a principios de la década de 1990, mezclando dancehall jamaicano, hip-hop y ritmos latinos. El género se desarrolló en el área de San Juan y se extendió rápidamente por América Latina y más allá. Artistas como Daddy Yankee, Don Omar y Wisin & Yandel llevaron el reggaeton a la prominencia global. El reggaeton moderno incorpora elementos electrónicos, influencias de trap y ha evolucionado en una industria multimillonaria. Bad Bunny ha llevado el reggaeton a nuevas alturas con su enfoque innovador."
                },
                {
                    heading: "Trova y Nueva Trova",
                    content: "La trova es un estilo de música romántica que se originó en Puerto Rico, caracterizada por guitarra acústica y letras poéticas. El género se desarrolló a finales del siglo XIX y fue influenciado por tradiciones trovadorescas españolas. Los trovadores notables incluyen Luis Lloréns Torres y Rafael Hernández. La nueva trova surgió en la década de 1970 como una forma más contemporánea, abordando temas sociales y políticos. Esta tradición continúa con cantautores modernos que mezclan la trova tradicional con estilos contemporáneos."
                },
                {
                    heading: "Instrumentos Tradicionales",
                    content: "La música puertorriqueña presenta varios instrumentos distintivos. El cuatro, una pequeña guitarra de 10 cuerdas, es el instrumento nacional y se usa en muchos géneros folclóricos. El güiro, una calabaza hueca tocada con un raspador, proporciona acompañamiento rítmico. Las maracas, hechas de calabazas secas llenas de semillas, añaden textura percusiva. Los bongós, un par de tambores pequeños, son esenciales para muchos ritmos. Estos instrumentos reflejan las influencias musicales indígenas, africanas y europeas de la isla."
                },
                {
                    heading: "Escena Musical Contemporánea",
                    content: "Hoy, los artistas puertorriqueños continúan innovando en todos los géneros. Desde el reggaeton transgresor de géneros de Bad Bunny hasta artistas que exploran música electrónica, rock indie y hip-hop, Puerto Rico sigue a la vanguardia de la innovación musical latina. La industria musical de la isla contribuye significativamente al mercado musical latino global. Los músicos puertorriqueños han ganado numerosos premios Grammy y continúan influyendo en la música mundial mientras mantienen conexiones con raíces tradicionales."
                }
            ]
        }
    },
    // Art page
    art: {
        english: {
            title: "Puerto Rico's Artists",
            subtitle: "Visual and literary expressions of identity",
            sections: [
                {
                    heading: "Colonial Art and Religious Paintings",
                    content: "Puerto Rico's artistic tradition began during the colonial period with religious art. José Campeche (1751-1809) was the island's first internationally recognized painter, known for his portraits and religious works in the Baroque and Rococo styles. His paintings, such as 'La Virgen de la Soledad,' show Spanish artistic influences adapted to the Caribbean context. Other colonial artists created religious icons, portraits of local elites, and depictions of island life."
                },
                {
                    heading: "19th Century Masters - Francisco Oller",
                    content: "Francisco Oller (1833-1917) is considered Puerto Rico's most important 19th-century artist and the island's first Impressionist painter. Trained in Europe, Oller brought modern techniques to Puerto Rican art. His masterpiece 'El Velorio' (The Wake) depicts rural Puerto Rican life with vibrant colors and light effects. Oller also painted landscapes, still lifes, and portraits, capturing the beauty of the island's natural environment and people."
                },
                {
                    heading: "Early 20th Century and Modernism",
                    content: "The early 20th century saw the development of Puerto Rican modernism. Artists began exploring national identity and social themes. Julio Tomás Martínez created works inspired by Puerto Rican folklore. The Division of Community Education (DivEd) in the 1940s and 1950s promoted local art through workshops and exhibitions. This period saw the emergence of artists who depicted Puerto Rican culture, landscapes, and social issues."
                },
                {
                    heading: "Contemporary Art and Cultural Identity",
                    content: "Contemporary Puerto Rican artists work in diverse media and styles, from traditional painting to digital art, installation, and performance. Myrna Báez pioneered abstract expressionism with her vibrant 'Serie Caribe.' Arnaldo Roche Rabell creates works depicting Puerto Rican culture and landscapes. Many contemporary artists address themes of identity, colonialism, migration, and cultural hybridity. The art scene reflects Puerto Rico's complex relationship with the United States and its Caribbean identity."
                },
                {
                    heading: "Literature and Poetry",
                    content: "Puerto Rican literature has a rich tradition dating back to the colonial period. José de Diego and Luis Lloréns Torres were important poets who explored themes of national identity. Julia de Burgos (1914-1953) is Puerto Rico's most famous poet, known for her passionate verses about love, nature, and Puerto Rican identity. Her poem 'Río Grande de Loiza' is considered a masterpiece. Contemporary writers continue this tradition, addressing modern themes while maintaining connections to Puerto Rican culture."
                },
                {
                    heading: "Art Institutions and Cultural Preservation",
                    content: "Puerto Rico has several important art institutions that preserve and promote local culture. The Museo de Arte de Puerto Rico in San Juan houses an extensive collection of Puerto Rican art. The Instituto de Cultura Puertorriqueña supports artists and cultural programs. Universities like the University of Puerto Rico offer art programs. Despite economic challenges, Puerto Rico's art community remains vibrant, with galleries, museums, and festivals showcasing local talent."
                }
            ]
        },
        spanish: {
            title: "Artistas de Puerto Rico",
            subtitle: "Expresiones visuales y literarias de identidad",
            sections: [
                {
                    heading: "Arte Colonial y Pinturas Religiosas",
                    content: "La tradición artística de Puerto Rico comenzó durante el período colonial con arte religioso. José Campeche (1751-1809) fue el primer pintor reconocido internacionalmente de la isla, conocido por sus retratos y obras religiosas en estilos barroco y rococó. Sus pinturas, como 'La Virgen de la Soledad', muestran influencias artísticas españolas adaptadas al contexto caribeño. Otros artistas coloniales crearon íconos religiosos, retratos de élites locales y representaciones de la vida insular."
                },
                {
                    heading: "Maestros del Siglo XIX - Francisco Oller",
                    content: "Francisco Oller (1833-1917) es considerado el artista más importante del siglo XIX de Puerto Rico y el primer pintor impresionista de la isla. Entrenado en Europa, Oller trajo técnicas modernas al arte puertorriqueño. Su obra maestra 'El Velorio' (El Velorio) representa la vida rural puertorriqueña con colores vibrantes y efectos de luz. Oller también pintó paisajes, naturalezas muertas y retratos, capturando la belleza del entorno natural y la gente de la isla."
                },
                {
                    heading: "Principios del Siglo XX y Modernismo",
                    content: "El siglo XX temprano vio el desarrollo del modernismo puertorriqueño. Los artistas comenzaron a explorar la identidad nacional y temas sociales. Julio Tomás Martínez creó obras inspiradas en el folclore puertorriqueño. La División de Educación Comunitaria (DivEd) en las décadas de 1940 y 1950 promovió el arte local a través de talleres y exposiciones. Este período vio el surgimiento de artistas que representaban la cultura puertorriqueña, paisajes y problemas sociales."
                },
                {
                    heading: "Arte Contemporáneo e Identidad Cultural",
                    content: "Los artistas puertorriqueños contemporáneos trabajan en diversos medios y estilos, desde la pintura tradicional hasta el arte digital, instalación y performance. Myrna Báez pionera en el expresionismo abstracto con su vibrante 'Serie Caribe'. Arnaldo Roche Rabell crea obras que representan la cultura y paisajes puertorriqueños. Muchos artistas contemporáneos abordan temas de identidad, colonialismo, migración e hibridación cultural. La escena artística refleja la compleja relación de Puerto Rico con Estados Unidos y su identidad caribeña."
                },
                {
                    heading: "Literatura y Poesía",
                    content: "La literatura puertorriqueña tiene una rica tradición que se remonta al período colonial. José de Diego y Luis Lloréns Torres fueron poetas importantes que exploraron temas de identidad nacional. Julia de Burgos (1914-1953) es la poeta más famosa de Puerto Rico, conocida por sus versos apasionados sobre el amor, la naturaleza y la identidad puertorriqueña. Su poema 'Río Grande de Loiza' es considerado una obra maestra. Los escritores contemporáneos continúan esta tradición, abordando temas modernos mientras mantienen conexiones con la cultura puertorriqueña."
                },
                {
                    heading: "Instituciones Artísticas y Preservación Cultural",
                    content: "Puerto Rico tiene varias instituciones artísticas importantes que preservan y promueven la cultura local. El Museo de Arte de Puerto Rico en San Juan alberga una extensa colección de arte puertorriqueño. El Instituto de Cultura Puertorriqueña apoya a artistas y programas culturales. Universidades como la Universidad de Puerto Rico ofrecen programas de arte. A pesar de los desafíos económicos, la comunidad artística de Puerto Rico sigue siendo vibrante, con galerías, museos y festivales que muestran talento local."
                }
            ]
        }
    },
    // Hurricane Maria page
    hurricane: {
        english: {
            title: "Hurricane Maria",
            subtitle: "Resilience in the face of disaster",
            sections: [
                {
                    heading: "The Storm's Arrival",
                    content: "Hurricane Maria struck Puerto Rico on September 20, 2017, as a Category 4 hurricane with sustained winds of 155 mph and gusts up to 195 mph. It was one of the most powerful hurricanes to hit the island in modern history. The storm made landfall near Yabucoa on the southeast coast and moved northwest across the island, causing catastrophic damage. Maria was part of the devastating 2017 Atlantic hurricane season that also included Hurricanes Harvey, Irma, and José."
                },
                {
                    heading: "Immediate Devastation",
                    content: "The hurricane destroyed Puerto Rico's electrical grid, leaving the entire island without power. Communications were disrupted as cell towers and internet infrastructure failed. Roads became impassable due to fallen trees, debris, and landslides. The storm damaged or destroyed hundreds of thousands of homes, businesses, and public buildings. Historic sites, including the beloved Arecibo Observatory, were severely damaged. The immediate aftermath was chaotic, with limited access to emergency services."
                },
                {
                    heading: "Human Impact and Loss of Life",
                    content: "Hurricane Maria caused at least 64 deaths directly from the storm, but the full death toll is believed to be much higher due to indirect causes. Many deaths resulted from delayed medical care, lack of electricity for medical equipment, and related health issues. The storm displaced hundreds of thousands of people and caused widespread trauma. Vulnerable populations, including the elderly and those with medical conditions, were particularly affected. The disaster highlighted issues of infrastructure vulnerability and inadequate emergency response."
                },
                {
                    heading: "Government and Federal Response",
                    content: "The response to Hurricane Maria was widely criticized as inadequate and slow. President Donald Trump visited the island and initially praised the recovery efforts, but local officials and residents reported significant delays in aid distribution. The Federal Emergency Management Agency (FEMA) faced logistical challenges in delivering supplies to remote areas. The U.S. military played a crucial role in relief efforts, but bureaucratic hurdles slowed recovery. The disaster exposed the challenges of providing aid to a U.S. territory."
                },
                {
                    heading: "Long-term Recovery and Economic Impact",
                    content: "Maria's devastation had lasting effects on Puerto Rico's economy and infrastructure. The cost of recovery was estimated at $90 billion or more. Many residents left the island for the mainland United States, contributing to population decline. The hurricane accelerated Puerto Rico's economic crisis, which had begun years earlier. Infrastructure repairs took years, and some areas still lack full recovery. The disaster led to increased scrutiny of Puerto Rico's colonial status and relationship with the United States."
                },
                {
                    heading: "Resilience, Activism, and Cultural Response",
                    content: "Despite the devastation, Puerto Ricans showed remarkable resilience. Communities organized mutual aid networks, sharing resources and support. Artists and musicians created works about the experience, including Lin-Manuel Miranda's benefit concert. Activists pushed for better infrastructure and political change. The disaster sparked renewed discussions about Puerto Rico's political status. Five years later, the island continues to recover, with ongoing efforts to rebuild infrastructure and strengthen resilience against future disasters."
                }
            ]
        },
        spanish: {
            title: "Huracán María",
            subtitle: "Resiliencia ante el desastre",
            sections: [
                {
                    heading: "La Llegada de la Tormenta",
                    content: "El huracán María azotó Puerto Rico el 20 de septiembre de 2017, como un huracán de categoría 4 con vientos sostenidos de 155 mph y ráfagas de hasta 195 mph. Fue uno de los huracanes más poderosos que golpearon la isla en la historia moderna. La tormenta tocó tierra cerca de Yabucoa en la costa sureste y se movió hacia el noroeste a través de la isla, causando daños catastróficos. María fue parte de la devastadora temporada de huracanes del Atlántico de 2017 que también incluyó a los huracanes Harvey, Irma y José."
                },
                {
                    heading: "Devastación Inmediata",
                    content: "El huracán destruyó la red eléctrica de Puerto Rico, dejando a toda la isla sin energía. Las comunicaciones se interrumpieron cuando las torres de telefonía celular y la infraestructura de internet fallaron. Las carreteras se volvieron intransitables debido a árboles caídos, escombros y deslizamientos de tierra. La tormenta dañó o destruyó cientos de miles de hogares, negocios y edificios públicos. Sitios históricos, incluyendo el amado Observatorio de Arecibo, fueron severamente dañados. Las secuelas inmediatas fueron caóticas, con acceso limitado a servicios de emergencia."
                },
                {
                    heading: "Impacto Humano y Pérdida de Vidas",
                    content: "El huracán María causó al menos 64 muertes directamente por la tormenta, pero se cree que el número total de muertes es mucho mayor debido a causas indirectas. Muchas muertes resultaron de atención médica retrasada, falta de electricidad para equipos médicos y problemas de salud relacionados. La tormenta desplazó a cientos de miles de personas y causó trauma generalizado. Las poblaciones vulnerables, incluyendo ancianos y aquellos con condiciones médicas, fueron particularmente afectados. El desastre destacó problemas de vulnerabilidad de infraestructura y respuesta de emergencia inadecuada."
                },
                {
                    heading: "Respuesta Gubernamental y Federal",
                    content: "La respuesta al huracán María fue ampliamente criticada como inadecuada y lenta. El presidente Donald Trump visitó la isla y inicialmente elogió los esfuerzos de recuperación, pero funcionarios locales y residentes reportaron retrasos significativos en la distribución de ayuda. La Agencia Federal para el Manejo de Emergencias (FEMA) enfrentó desafíos logísticos para entregar suministros a áreas remotas. El ejército estadounidense jugó un papel crucial en los esfuerzos de socorro, pero obstáculos burocráticos ralentizaron la recuperación. El desastre expuso los desafíos de proporcionar ayuda a un territorio estadounidense."
                },
                {
                    heading: "Recuperación a Largo Plazo e Impacto Económico",
                    content: "La devastación de María tuvo efectos duraderos en la economía e infraestructura de Puerto Rico. El costo de la recuperación se estimó en $90 mil millones o más. Muchos residentes dejaron la isla hacia los Estados Unidos continentales, contribuyendo a la disminución de la población. El huracán aceleró la crisis económica de Puerto Rico, que había comenzado años antes. Las reparaciones de infraestructura tomaron años, y algunas áreas aún carecen de recuperación completa. El desastre llevó a un mayor escrutinio del estatus colonial de Puerto Rico y su relación con Estados Unidos."
                },
                {
                    heading: "Resiliencia, Activismo y Respuesta Cultural",
                    content: "A pesar de la devastación, los puertorriqueños mostraron una resiliencia notable. Las comunidades organizaron redes de ayuda mutua, compartiendo recursos y apoyo. Artistas y músicos crearon obras sobre la experiencia, incluyendo el concierto benéfico de Lin-Manuel Miranda. Los activistas impulsaron una mejor infraestructura y cambio político. El desastre provocó discusiones renovadas sobre el estatus político de Puerto Rico. Cinco años después, la isla continúa recuperándose, con esfuerzos continuos para reconstruir la infraestructura y fortalecer la resiliencia contra futuros desastres."
                }
            ]
        }
    }
};