const ciudades = [
  {
    nombre: "Tokio",
    imagen: "ciudades/tokio.jpg",
    datos: [
      "Población: 37 millones",
      "Idioma: Japonés",
      "Moneda: Yen"
    ],
    descripcion: "Tokio es la capital de Japón y una de las metrópolis más vibrantes y densamente pobladas del planeta. Esta ciudad es conocida por su increíble mezcla de tradición milenaria y tecnología de vanguardia. Desde templos históricos como el Senso-ji hasta rascacielos futuristas en Shibuya y Shinjuku, Tokio ofrece una experiencia urbana única. Además, es un epicentro global en gastronomía, con más estrellas Michelin que cualquier otra ciudad del mundo. También es reconocida por su puntualidad, limpieza, seguridad y eficiencia en el transporte público, especialmente su icónico sistema de trenes. A pesar del ritmo acelerado de vida, la ciudad conserva espacios de paz como los jardines del Palacio Imperial y el parque Ueno. Tokio representa un equilibrio fascinante entre lo antiguo y lo moderno."

  },
  {
    nombre: "París",
    imagen: "ciudades/paris.jpg",
    datos: [
      "Población: 11 millones",
      "Idioma: Francés",
      "Moneda: Euro"
    ],
    descripcion: "París, también conocida como la Ciudad de la Luz, es la capital de Francia y uno de los destinos turísticos más importantes del mundo. Es famosa por su arquitectura icónica, como la Torre Eiffel, la Catedral de Notre-Dame y el Arco del Triunfo. París ha sido un centro de arte, filosofía y moda durante siglos. Museos como el Louvre, el Museo de Orsay y el Centro Pompidou albergan algunas de las obras más célebres de la historia del arte. Además, es sinónimo de elegancia culinaria: sus cafés, panaderías y restaurantes de alta cocina hacen de cada comida una experiencia cultural. Las calles parisinas, con sus bulevares amplios, plazas, puentes y jardines como el de Luxemburgo, invitan a pasear sin prisa. Su historia, belleza y estilo de vida romántico la convierten en una ciudad inigualable."

  },
  {
    nombre: "Nueva York",
    imagen: "ciudades/nueva_york.jpg",
    datos: [
      "Población: 8,5 millones",
      "Idioma: Inglés",
      "Moneda: Dólar estadounidense"
    ],
    descripcion: "Nueva York, conocida como 'la ciudad que nunca duerme', es uno de los centros culturales, financieros y mediáticos más importantes del planeta. Es hogar de íconos globales como Times Square, la Estatua de la Libertad, Central Park y el Empire State Building. La ciudad está compuesta por cinco distritos: Manhattan, Brooklyn, Queens, El Bronx y Staten Island, cada uno con su identidad propia. Nueva York es un mosaico cultural con comunidades de todo el mundo, lo que se refleja en su gastronomía, eventos y vida cotidiana. La ciudad alberga la sede de las Naciones Unidas y Wall Street, epicentro de la economía global. Además, es cuna de movimientos artísticos, musicales y sociales. Su ritmo acelerado, su oferta infinita de actividades y su energía única la convierten en una ciudad que transforma a quienes la visitan."

  },
  {
    nombre: "Buenos Aires",
    imagen: "ciudades/buenos_aires.jpg",
    datos: [
      "Población: 3 millones (CABA)",
      "Idioma: Español",
      "Moneda: Peso argentino"
    ],
    descripcion: "Buenos Aires, capital de Argentina, es una ciudad cosmopolita que mezcla herencias europeas con una identidad latinoamericana fuerte y vibrante. Es reconocida por su arquitectura de inspiración francesa e italiana, sus amplias avenidas y barrios llenos de carácter como San Telmo, Recoleta, Palermo y La Boca. Culturalmente rica, Buenos Aires es uno de los grandes centros teatrales del mundo hispano, con la icónica Avenida Corrientes y el imponente Teatro Colón. Es también la cuna del tango, una de las expresiones artísticas más representativas del país. Su gastronomía destaca por las carnes asadas, empanadas y vinos de calidad. La ciudad ofrece una vida nocturna activa, múltiples museos, ferias callejeras y espacios verdes como los Bosques de Palermo. Es una ciudad que combina nostalgia, pasión y diversidad, y deja huella en quienes la recorren."

  },
  {
    nombre: "El Cairo",
    imagen: "ciudades/el_cairo.jpg",
    datos: [
      "Población: 20 millones",
      "Idioma: Árabe",
      "Moneda: Libra egipcia"
    ],
    descripcion: "El Cairo, capital de Egipto, es una de las ciudades más antiguas y fascinantes del mundo. Ubicada a orillas del río Nilo, combina el esplendor del antiguo Egipto con la energía caótica de una gran metrópolis moderna. Su historia se remonta a milenios, y es el punto de partida para explorar las mundialmente famosas pirámides de Giza, la Gran Esfinge y los templos del Antiguo Egipto. Dentro de la ciudad, el Museo Egipcio alberga tesoros milenarios, incluido el ajuar funerario de Tutankamón. El Cairo islámico presenta mezquitas impresionantes, bazares tradicionales como Khan el-Khalili y una arquitectura medieval única. Es una ciudad ruidosa, intensa y viva, con tráfico agitado, mercados bulliciosos y una población cálida y hospitalaria. Es un lugar donde el pasado y el presente conviven en cada rincón, cautivando a viajeros de todo el mundo."

  },
  {
    nombre: "Londres",
    imagen: "ciudades/londres.jpg",
    datos: [
      "Población: 9 millones",
      "Idioma: Inglés",
      "Moneda: Libra esterlina"
    ],
    descripcion: "Londres, capital del Reino Unido, es una ciudad con una historia milenaria que ha sido testigo de imperios, revoluciones y avances culturales. Es hogar del Big Ben, el Palacio de Buckingham y la Torre de Londres, lugares emblemáticos que conviven con rascacielos modernos y una escena cultural vibrante. La ciudad es conocida por sus museos gratuitos, sus parques reales y su diversidad étnica. En cada rincón se respira una mezcla de tradición y modernidad que la hace única."
  },
  {
    nombre: "Roma",
    imagen: "ciudades/roma.jpg",
    datos: [
      "Población: 2,8 millones",
      "Idioma: Italiano",
      "Moneda: Euro"
    ],
    descripcion: "Roma, la Ciudad Eterna, es un museo al aire libre que permite caminar entre ruinas romanas, iglesias barrocas y plazas renacentistas. Desde el Coliseo hasta el Vaticano, pasando por la Fontana di Trevi y el Panteón, es una ciudad que cuenta su historia en cada piedra. Roma es también famosa por su gastronomía, con platos como la pasta carbonara o la pizza romana. Es un lugar donde el arte, la religión y la vida cotidiana se funden en un espectáculo sin igual."
  },
  {
    nombre: "Sídney",
    imagen: "ciudades/sidney.jpg",
    datos: [
      "Población: 5 millones",
      "Idioma: Inglés",
      "Moneda: Dólar australiano"
    ],
    descripcion: "Sídney es la ciudad más grande de Australia y una de las más icónicas del hemisferio sur. Su bahía, con la famosa Ópera y el Puente de la Bahía, ofrece un paisaje urbano espectacular. Es una ciudad costera vibrante con playas de fama mundial como Bondi Beach y una cultura multicultural muy activa. El clima templado, la vida al aire libre y una calidad de vida elevada hacen de Sídney una ciudad moderna y acogedora."
  },
  {
    nombre: "Estambul",
    imagen: "ciudades/estambul.jpg",
    datos: [
      "Población: 15 millones",
      "Idioma: Turco",
      "Moneda: Lira turca"
    ],
    descripcion: "Estambul, la ciudad que une Europa y Asia, es un cruce de civilizaciones que ha sido capital de imperios como el romano, bizantino y otomano. La majestuosidad de Santa Sofía, la Mezquita Azul y el Palacio de Topkapi reflejan su pasado glorioso. Sus bazares, como el Gran Bazar o el Bazar de las Especias, son un festín para los sentidos. Estambul es una ciudad donde lo antiguo y lo moderno conviven en perfecta armonía."
  },
  {
    nombre: "Barcelona",
    imagen: "ciudades/barcelona.jpg",
    datos: [
      "Población: 1,6 millones",
      "Idioma: Catalán y Español",
      "Moneda: Euro"
    ],
    descripcion: "Barcelona es una de las joyas del Mediterráneo, conocida por su arquitectura modernista, especialmente las obras de Antoni Gaudí como la Sagrada Familia y el Parque Güell. Es una ciudad vibrante con playas, vida nocturna intensa y una fuerte identidad cultural catalana. Su estilo de vida relajado, sus mercados como La Boquería y su pasión por el fútbol hacen de Barcelona un destino muy atractivo y completo."
  },
  {
    nombre: "Moscú",
    imagen: "ciudades/moscu.jpg",
    datos: [
      "Población: 12 millones",
      "Idioma: Ruso",
      "Moneda: Rublo"
    ],
    descripcion: "Moscú, capital de Rusia, es una ciudad monumental que combina el legado de los zares y la influencia soviética con la modernidad contemporánea. El Kremlin y la Plaza Roja son símbolos de poder e historia, mientras que el Metro de Moscú es considerado uno de los más hermosos del mundo. Su arquitectura imponente, su clima extremo y su riqueza cultural la convierten en una ciudad imponente e intrigante."
  },
  {
    nombre: "Bangkok",
    imagen: "ciudades/bangkok.jpg",
    datos: [
      "Población: 10 millones",
      "Idioma: Tailandés",
      "Moneda: Baht tailandés"
    ],
    descripcion: "Bangkok, capital de Tailandia, es una ciudad caótica y encantadora a partes iguales. Sus templos dorados como Wat Pho y Wat Arun, su vibrante vida callejera y su gastronomía callejera hacen que cada esquina tenga algo para descubrir. Es una ciudad donde los rascacielos conviven con canales y mercados flotantes, y donde la espiritualidad budista forma parte de la vida diaria."
  },
  {
    nombre: "Berlín",
    imagen: "ciudades/berlin.jpg",
    datos: [
      "Población: 3,7 millones",
      "Idioma: Alemán",
      "Moneda: Euro"
    ],
    descripcion: "Berlín es la capital de Alemania y uno de los centros más dinámicos de Europa. Con una historia marcada por la Segunda Guerra Mundial y la Guerra Fría, Berlín ha resurgido como una ciudad creativa y abierta. Lugares como la Puerta de Brandeburgo, el Muro de Berlín y el Museo del Holocausto son paradas obligadas. Es conocida por su cultura alternativa, su arte callejero y su vida nocturna sin fin."
  },
  {
    nombre: "Ámsterdam",
    imagen: "ciudades/amsterdam.jpg",
    datos: [
      "Población: 850 mil",
      "Idioma: Neerlandés",
      "Moneda: Euro"
    ],
    descripcion: "Ámsterdam es una ciudad de canales, bicicletas y libertad. Su centro histórico con casas inclinadas y puentes románticos parece salido de un cuento. Alberga museos de renombre como el Rijksmuseum o el de Van Gogh. Es una ciudad progresista, tolerante y ecológica, con una vida cultural rica y un ambiente relajado que invita a disfrutar sin apuros."
  },
  {
    nombre: "Seúl",
    imagen: "ciudades/seul.jpg",
    datos: [
      "Población: 10 millones",
      "Idioma: Coreano",
      "Moneda: Won surcoreano"
    ],
    descripcion: "Seúl, capital de Corea del Sur, es un referente de innovación tecnológica y tradición cultural. Con su skyline moderno, sus mercados tradicionales como Namdaemun y sus palacios antiguos como Gyeongbokgung, la ciudad mezcla lo nuevo y lo viejo con fluidez. Es famosa por el K-pop, la moda y su intensa vida nocturna. La hospitalidad coreana y su deliciosa gastronomía hacen de Seúl una metrópolis inolvidable."
  },
  {
    nombre: "Dubái",
    imagen: "ciudades/dubai.jpg",
    datos: [
      "Población: 3,5 millones",
      "Idioma: Árabe",
      "Moneda: Dirham"
    ],
    descripcion: "Dubái es una ciudad futurista en medio del desierto. Con construcciones asombrosas como el Burj Khalifa, el edificio más alto del mundo, y las islas artificiales Palm Jumeirah, Dubái ha redefinido el concepto de lujo y modernidad. Es un centro comercial global, destino turístico de primer nivel y una mezcla de culturas. A pesar de su modernidad, conserva raíces árabes en su cultura y hospitalidad."
  },
  {
    nombre: "Ciudad del Cabo",
    imagen: "ciudades/ciudad_del_cabo.jpg",
    datos: [
      "Población: 4 millones",
      "Idioma: Inglés y afrikáans",
      "Moneda: Rand"
    ],
    descripcion: "Ciudad del Cabo es una joya natural ubicada en el extremo sur de África, entre el océano y la montaña. La Montaña de la Mesa domina el horizonte, mientras que playas, viñedos y reservas naturales rodean la ciudad. Es un crisol de culturas, con una historia marcada por el apartheid y una vibrante vida artística y gastronómica. Su belleza natural y diversidad la hacen uno de los destinos más atractivos de África."
  },
  {
    nombre: "Vancouver",
    imagen: "ciudades/vancouver.jpg",
    datos: [
      "Población: 2,5 millones (área metropolitana)",
      "Idioma: Inglés",
      "Moneda: Dólar canadiense"
    ],
    descripcion: "Vancouver es una ciudad costera en la provincia de Columbia Británica, Canadá, famosa por su entorno natural y calidad de vida. Está rodeada de montañas, bosques y el océano Pacífico, lo que la hace ideal para actividades al aire libre. Es también un centro tecnológico y multicultural, con una población diversa y tolerante. Su planificación urbana y respeto por la naturaleza la hacen una de las ciudades más sostenibles del mundo."
  },
  {
    nombre: "Río de Janeiro",
    imagen: "ciudades/rio.jpg",
    datos: [
      "Población: 6,7 millones",
      "Idioma: Portugués",
      "Moneda: Real brasileño"
    ],
    descripcion: "Río de Janeiro es una ciudad brasileña famosa por sus playas, su alegría contagiosa y su entorno natural impresionante. El Cristo Redentor, el Pan de Azúcar y las playas de Copacabana e Ipanema son símbolos de la ciudad. El carnaval de Río es uno de los más grandes del mundo, lleno de color, música y danza. A pesar de sus desafíos sociales, Río conserva una energía única que enamora a quien la visita."
  },
  {
    nombre: "Lisboa",
    imagen: "ciudades/lisboa.jpg",
    datos: [
      "Población: 500 mil",
      "Idioma: Portugués",
      "Moneda: Euro"
    ],
    descripcion: "Lisboa, capital de Portugal, es una ciudad luminosa y melancólica, famosa por sus colinas, tranvías amarillos y casas con azulejos. A orillas del río Tajo, mezcla historia con modernidad en barrios como Alfama, Belém y Bairro Alto. El fado, su música tradicional, expresa la nostalgia característica de esta ciudad llena de historia, cultura y vistas impresionantes."
  }

];

