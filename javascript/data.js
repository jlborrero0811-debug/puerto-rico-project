// Central data store for the application.
// This file does not control behavior directly. Instead, it stores the
// content that the other scripts read when they need quiz questions, page
// titles, section headings, and translated body text.

// Quiz questions used by the quiz system.
// Structure:
// - top level language key (`english` or `spanish`)
// - `questions` array for that language
// - each question has an id, prompt text, answer options, the correct answer
//   index, and an explanation shown after the user answers
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
                options: ["Francisco Oller", "José Campeche", "Myrna Báez", "Arnaldo Roche Rabell"],
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
                options: ["José Campeche", "Francisco Oller", "Myrna Báez", "Arnaldo Roche Rabell"],
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
                options: ["Julia de Burgos", "Myrna Báez", "José Campeche", "Francisco Oller"],
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
                options: ["Francisco Oller", "José Campeche", "Myrna Báez", "Arnaldo Roche Rabell"],
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
                options: ["José Campeche", "Francisco Oller", "Myrna Báez", "Arnaldo Roche Rabell"],
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
                options: ["Julia de Burgos", "Myrna Báez", "José Campeche", "Francisco Oller"],
                correctAnswer: 1,
                explanation: "Myrna Báez creó la abstracta 'Serie Caribe' y es una figura destacada del arte contemporáneo puertorriqueño."
            }
        ]
    }
};

// Page content data
// Localized page headings, subtitles, and body sections for history, music, art, and hurricane pages.
// Main page text content used by `routing.js` when a user opens a normal
// content page.
// Structure:
// - top level page id (`history`, `music`, `art`, `hurricane`)
// - language object for each page
// - each language object contains a title, subtitle, and an array of
//   content sections with headings and paragraph text
const pageContent = {
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
