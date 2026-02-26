export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorRole: string;
  content: string; // HTML string
}

export const posts: Post[] = [
  {
    slug: "tren-maya-catalizador-desarrollo-sur",
    title: "El Tren Maya como catalizador del desarrollo en el sur",
    excerpt:
      "Un análisis sobre cómo la infraestructura de conectividad puede transformar las oportunidades económicas de la región sur de Quintana Roo.",
    category: "Infraestructura",
    date: "15 Feb 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&q=85",
    author: "Equipo DDS",
    authorRole: "Diálogo por el Desarrollo del Sur",
    content: `
      <p>El Tren Maya representa la inversión en infraestructura más significativa que ha visto el sureste mexicano en décadas. Para la región sur de Quintana Roo — conformada por los municipios de Felipe Carrillo Puerto, Bacalar y Othón P. Blanco — esta megaobra no es simplemente un proyecto de transporte: es una palanca de desarrollo con potencial transformador.</p>

      <h2>Conectividad como base del crecimiento</h2>
      <p>Durante años, el sur de Quintana Roo ha vivido relativamente aislado del dinamismo económico del norte del estado. La distancia y los tiempos de traslado han sido barreras reales para la inversión, el turismo y el comercio. Con el Tren Maya operando, los tiempos de viaje entre Cancún y Chetumal se reducen drásticamente, abriendo posibilidades que antes eran impensables.</p>
      <p>Los empresarios locales ya reportan un incremento en la prospección de terrenos y proyectos inmobiliarios en las cercanías de las estaciones. La estación de Felipe Carrillo Puerto, en particular, tiene el potencial de convertirse en un nodo de desarrollo que detone la economía local.</p>

      <h2>Oportunidades para el turismo sustentable</h2>
      <p>Bacalar es uno de los destinos más codiciados del Caribe mexicano, pero su infraestructura de acceso ha limitado históricamente el flujo de visitantes. El tren cambia esa ecuación. Sin embargo, la pregunta clave es: ¿cómo garantizamos que ese turismo sea sustentable y beneficie a las comunidades locales?</p>
      <p>Desde DDS, proponemos que el modelo de desarrollo turístico en Bacalar priorice:</p>
      <ul>
        <li>Capacidad de carga controlada para proteger la Laguna de los Siete Colores</li>
        <li>Participación activa de comunidades mayas en la cadena de valor turística</li>
        <li>Inversión en infraestructura de saneamiento para proteger los mantos freáticos</li>
        <li>Certificaciones de turismo sustentable para los operadores locales</li>
      </ul>

      <h2>Riesgos que debemos anticipar</h2>
      <p>No todo es positivo. El tren también trae consigo riesgos de desplazamiento de comunidades, especulación inmobiliaria descontrolada y presión sobre ecosistemas frágiles. La experiencia de otras regiones con infraestructura masiva nos enseña que sin planeación territorial sólida, el desarrollo puede generar más inequidad que bienestar.</p>
      <p>Por eso, desde esta iniciativa insistimos en la necesidad de planes de ordenamiento territorial actualizados, participación ciudadana genuina en las decisiones de uso de suelo, y mecanismos de distribución equitativa de los beneficios económicos.</p>

      <h2>La oportunidad histórica</h2>
      <p>El Tren Maya llega en un momento en que el sur de Quintana Roo está redefiniendo su identidad y su vocación económica. Esta es nuestra oportunidad para escribir un modelo de desarrollo diferente: uno que honre la riqueza natural y cultural de la región, que genere empleos de calidad y que construya prosperidad para todos, no solo para unos pocos.</p>
      <p>El tren es el catalizador. El desarrollo sustentable es la meta. Y eso depende de las decisiones que tomemos hoy, como comunidad.</p>
    `,
  },
  {
    slug: "bacalar-turismo-sustentable-modelo-crecimiento",
    title: "Bacalar: turismo sustentable como modelo de crecimiento",
    excerpt:
      "La Laguna de los Siete Colores es un tesoro natural. Exploramos cómo el turismo responsable puede generar empleo sin destruir el ecosistema.",
    category: "Turismo",
    date: "10 Feb 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&q=85",
    author: "Equipo DDS",
    authorRole: "Diálogo por el Desarrollo del Sur",
    content: `
      <p>Bacalar no es un destino más. La Laguna de los Siete Colores es uno de los ecosistemas acuáticos más únicos del planeta, con estromatolitos milenarios — organismos que son, literalmente, de los primeros seres vivos que existieron en la Tierra — y una transparencia y coloración del agua que no tienen paralelo en el mundo.</p>

      <h2>El boom turístico y sus consecuencias</h2>
      <p>En la última década, Bacalar pasó de ser un secreto bien guardado a un destino viral en redes sociales. Las visitas se multiplicaron exponencialmente, y con ellas llegaron también los problemas: contaminación por aguas residuales, construcción sin regulación en las orillas de la laguna, y una presión sobre los servicios locales que la infraestructura existente no podía absorber.</p>
      <p>El riesgo es real: si no actuamos con inteligencia, podemos matar la gallina de los huevos de oro. La laguna es el recurso, y si la deterioramos, perdemos todo.</p>

      <h2>Un modelo diferente es posible</h2>
      <p>Existen ejemplos alrededor del mundo de destinos que han logrado balancear el turismo con la conservación. Palau, en el Pacífico, cobra un impuesto ambiental a los visitantes que financia la conservación. Costa Rica construyó toda su marca turística sobre la sustentabilidad. Galápagos tiene cuotas estrictas de visitantes.</p>
      <p>Para Bacalar, proponemos un modelo que incluya:</p>
      <ul>
        <li><strong>Capacidad de carga científicamente determinada</strong> para la laguna y sus accesos</li>
        <li><strong>Certificación obligatoria</strong> para operadores turísticos con estándares ambientales</li>
        <li><strong>Inversión en planta de tratamiento</strong> de aguas residuales de escala municipal</li>
        <li><strong>Zonificación clara</strong> que delimite áreas de uso turístico y áreas de conservación estricta</li>
        <li><strong>Fondos de reinversión local</strong> donde parte de los ingresos turísticos regrese a la comunidad</li>
      </ul>

      <h2>El papel de las comunidades locales</h2>
      <p>El turismo sustentable no puede ser solo un modelo de negocio para empresas externas con conciencia ecológica. Tiene que ser, fundamentalmente, un vehículo de desarrollo para las comunidades que han vivido junto a la laguna por generaciones.</p>
      <p>Eso significa capacitación, acceso a financiamiento, participación en la toma de decisiones sobre el destino, y mecanismos que eviten la gentrificación y el desplazamiento de los pobladores originales.</p>

      <h2>El tiempo es ahora</h2>
      <p>Bacalar está en un punto de inflexión. Las decisiones que se tomen en los próximos dos o tres años determinarán si se convierte en un modelo de turismo sustentable para México y el mundo, o si sigue el camino de destinos que se destruyeron a sí mismos por falta de planeación.</p>
      <p>Desde DDS, hacemos un llamado urgente a las autoridades municipales, al gobierno estatal, al sector empresarial y a la sociedad civil para construir juntos ese plan. La laguna no puede esperar.</p>
    `,
  },
  {
    slug: "educacion-empleo-brecha-historica",
    title: "Educación y empleo: claves para cerrar la brecha histórica",
    excerpt:
      "El sur de Quintana Roo necesita inversión en capital humano. Analizamos las propuestas más prometedoras para universidades y formación técnica.",
    category: "Educación",
    date: "5 Feb 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=85",
    author: "Equipo DDS",
    authorRole: "Diálogo por el Desarrollo del Sur",
    content: `
      <p>Si hay una brecha que define la inequidad entre el norte y el sur de Quintana Roo, es la educativa. Mientras Cancún y la Riviera Maya concentran universidades, tecnológicos y centros de formación, el sur históricamente ha carecido de opciones de educación superior accesibles para su población.</p>

      <h2>El diagnóstico</h2>
      <p>Según datos del INEGI, los municipios del sur de Quintana Roo presentan tasas de escolaridad promedio significativamente menores que el norte del estado. El porcentaje de población con educación superior es hasta tres veces menor en Othón P. Blanco que en Benito Juárez (Cancún).</p>
      <p>Las consecuencias son directas: menos capital humano calificado, empleos de menor valor agregado, migración de jóvenes hacia el norte del estado o hacia otros estados, y una economía local menos competitiva y diversificada.</p>

      <h2>Las propuestas más prometedoras</h2>
      <p>En los últimos años han surgido iniciativas importantes que merecen apoyo y seguimiento:</p>
      <ul>
        <li><strong>Universidad del Bienestar en Chetumal:</strong> Ampliar su oferta académica con carreras orientadas a las vocaciones productivas de la región: turismo sustentable, agroecología, tecnologías de la información.</li>
        <li><strong>CECATI y CONALEP fortalecidos:</strong> La formación técnica es, en muchos casos, más eficiente y con mayor retorno de inversión que la universitaria. Fortalecer estas instituciones con equipamiento moderno y vínculos con el sector productivo es prioritario.</li>
        <li><strong>Programas de becas regionales:</strong> Crear fondos específicos para que jóvenes del sur puedan estudiar sin necesidad de migrar.</li>
        <li><strong>Educación dual empresa-escuela:</strong> Modelos como el alemán, donde los jóvenes alternan entre el aula y el trabajo real, han demostrado ser muy efectivos para inserción laboral inmediata.</li>
      </ul>

      <h2>El vínculo con el sector productivo</h2>
      <p>La educación no puede planificarse en un vacío. Necesita responder a las necesidades reales del mercado laboral local. Eso requiere una conversación constante entre las instituciones educativas y los empleadores de la región.</p>
      <p>Desde DDS, proponemos la creación de una mesa técnica permanente de educación y empleo en el sur, donde participen universidades, cámaras empresariales, gobierno municipal y organizaciones de la sociedad civil.</p>

      <h2>Invertir en las personas es invertir en el futuro</h2>
      <p>Toda la infraestructura del mundo, todo el turismo y toda la inversión inmobiliaria tienen un límite si no hay capital humano local para aprovecharlas. La educación y la formación para el trabajo son la inversión con mayor retorno a largo plazo para el sur de Quintana Roo.</p>
    `,
  },
  {
    slug: "energia-solar-selva-oportunidad-verde",
    title: "Energía solar en la selva: la oportunidad verde del sureste",
    excerpt:
      "Con 300 días de sol al año, la región tiene potencial para convertirse en un hub de energías limpias que beneficie a comunidades locales.",
    category: "Energía",
    date: "1 Feb 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=85",
    author: "Equipo DDS",
    authorRole: "Diálogo por el Desarrollo del Sur",
    content: `
      <p>El sur de Quintana Roo recibe, en promedio, más de 5.5 kWh por metro cuadrado de radiación solar diaria. Con aproximadamente 300 días de sol al año, la región tiene uno de los recursos solares más abundantes de México, comparable con los mejores del mundo.</p>

      <h2>Una paradoja energética</h2>
      <p>A pesar de este enorme recurso, muchas comunidades del sur tienen acceso limitado a electricidad confiable y a precios razonables. Poblados mayas en zonas rurales de Felipe Carrillo Puerto y Othón P. Blanco enfrentan cortes frecuentes, tarifas elevadas y dependencia total de la red nacional.</p>
      <p>Esta paradoja — abundancia solar con precariedad energética — es en realidad una oportunidad enorme. La tecnología solar distribuida permite generar electricidad localmente, reducir costos y aumentar la resiliencia energética de las comunidades.</p>

      <h2>Modelos que funcionan</h2>
      <p>En otras regiones de México y América Latina hay ejemplos exitosos de comunidades que han adoptado energía solar con impacto real:</p>
      <ul>
        <li>Cooperativas de energía solar comunitaria en Oaxaca que reducen hasta un 70% la tarifa eléctrica</li>
        <li>Techos solares en edificios públicos que generan excedentes vendidos a la red</li>
        <li>Granjas solares municipales que financian servicios públicos con la venta de energía</li>
      </ul>

      <h2>El potencial industrial</h2>
      <p>Más allá de las comunidades, el sur de Quintana Roo podría albergar parques solares de escala industrial que abastezcan no solo al estado sino que exporten energía a la red nacional. La llegada del Tren Maya con infraestructura eléctrica asociada crea una ventana de oportunidad para conectar nueva capacidad generadora.</p>

      <h2>Condiciones para el éxito</h2>
      <p>Para que la transición energética beneficie al sur, se necesita voluntad política, marcos regulatorios que protejan a los pequeños generadores, financiamiento accesible para comunidades y municipios, y capacitación técnica local para el mantenimiento de los sistemas.</p>
      <p>La energía verde no es solo una opción ecológica. Es una oportunidad económica concreta para el sur de Quintana Roo.</p>
    `,
  },
  {
    slug: "cultura-maya-patrimonio-motor-economico",
    title: "Cultura maya: patrimonio vivo como motor económico",
    excerpt:
      "La riqueza cultural maya no es solo patrimonio: es una oportunidad para el turismo cultural, la gastronomía y las industrias creativas del sur.",
    category: "Cultura",
    date: "28 Ene 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1200&q=85",
    author: "Equipo DDS",
    authorRole: "Diálogo por el Desarrollo del Sur",
    content: `
      <p>Felipe Carrillo Puerto no es solo la capital política del municipio del mismo nombre. Es el corazón histórico de la resistencia maya en el sureste mexicano, la sede de Chan Santa Cruz, epicentro de la Guerra de Castas que redefinió la identidad regional en el siglo XIX. Esta historia no es un dato de libro de texto: es una narrativa viva que define quiénes somos y qué tenemos para ofrecer al mundo.</p>

      <h2>Más que museos: cultura como economía</h2>
      <p>Cuando hablamos de cultura maya como motor económico, no estamos hablando de folclorizar o museificar una cultura. Hablamos de reconocer que la gastronomía maya, la medicina tradicional, las artesanías, la arquitectura vernácula, la música y la lengua yucateca-maya son activos económicos reales con demanda creciente a nivel global.</p>
      <p>El turismo cultural de alto valor está creciendo en todo el mundo. Los viajeros buscan experiencias auténticas, conexión con historias reales, aprendizaje genuino. El sur de Quintana Roo tiene todo eso en abundancia.</p>

      <h2>Las industrias creativas mayas</h2>
      <p>Existe un universo de posibilidades en las industrias creativas con raíces mayas:</p>
      <ul>
        <li><strong>Gastronomía:</strong> La cocina maya es sofisticada, saludable y con ingredientes únicos. Chetumal y la región tienen cocineras tradicionales con conocimientos invaluables que pueden posicionarse en mercados gourmet nacionales e internacionales.</li>
        <li><strong>Textiles y artesanías:</strong> El bordado maya, los huipiles y las artesanías de madera y barro tienen mercado tanto en el turismo como en plataformas de comercio justo globales.</li>
        <li><strong>Arquitectura y diseño:</strong> Los principios de la arquitectura maya — relación con el entorno, ventilación natural, materiales locales — son perfectamente aplicables a la arquitectura contemporánea sustentable.</li>
        <li><strong>Medicina tradicional:</strong> El conocimiento herbolario maya tiene valor creciente en mercados de medicina alternativa y bienestar.</li>
      </ul>

      <h2>El reto de la propiedad intelectual</h2>
      <p>Un riesgo real es que los beneficios económicos de la cultura maya no lleguen a las comunidades que la generan y preservan. Es fundamental establecer mecanismos de protección de la propiedad intelectual colectiva, denominaciones de origen, y modelos de negocio que garanticen que los creadores originales reciban una retribución justa.</p>

      <h2>Una identidad que nos distingue</h2>
      <p>En un mundo de destinos genéricos e intercambiables, la identidad maya del sur de Quintana Roo es nuestra mayor ventaja competitiva. Es lo que nos hace únicos, lo que no puede replicarse en ningún otro lugar del planeta.</p>
      <p>Protegerla, celebrarla y construir sobre ella no es nostalgia. Es estrategia de desarrollo.</p>
    `,
  },
  {
    slug: "agroindustria-sustentable-campo-futuro-sur",
    title: "Agroindustria sustentable: el campo como futuro del sur",
    excerpt:
      "Felipe Carrillo Puerto y sus alrededores tienen un potencial agrícola enorme. Descubre cómo la tecnificación puede transformar la producción regional.",
    category: "Agricultura",
    date: "20 Ene 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=85",
    author: "Equipo DDS",
    authorRole: "Diálogo por el Desarrollo del Sur",
    content: `
      <p>El sur de Quintana Roo tiene suelos fértiles, lluvias abundantes y una tradición agrícola milenaria. La milpa maya — el sistema de cultivo policultural de maíz, frijol y calabaza — es uno de los sistemas agrícolas más eficientes y sustentables que existen. Y sin embargo, la agricultura del sur sigue siendo en gran medida de subsistencia, con poca tecnificación y escaso acceso a mercados.</p>

      <h2>El potencial sin explotar</h2>
      <p>Estudios agronómicos muestran que la región sur tiene condiciones para producir, de manera competitiva y sustentable:</p>
      <ul>
        <li>Frutas tropicales: rambután, mamey, cacao, naranja agria</li>
        <li>Miel de abeja melipona, considerada entre las más valiosas del mundo</li>
        <li>Maderas certificadas de plantaciones forestales</li>
        <li>Hortalizas en sistemas de agricultura protegida</li>
        <li>Productos orgánicos certificados para mercados premium</li>
      </ul>

      <h2>La barrera de la tecnificación</h2>
      <p>El principal obstáculo no es el potencial productivo sino el acceso a tecnología, financiamiento y mercados. Un pequeño productor de Felipe Carrillo Puerto con 5 hectáreas difícilmente puede acceder por su cuenta a semillas mejoradas, sistemas de riego eficiente, certificaciones orgánicas o canales de distribución hacia mercados nacionales e internacionales.</p>
      <p>Aquí es donde la acción pública y la organización colectiva son decisivas.</p>

      <h2>Modelos de agroindustria que funcionan</h2>
      <p>Las cooperativas agrícolas con respaldo técnico y financiero han demostrado ser el modelo más efectivo para transformar la agricultura de subsistencia en agroindustria competitiva. En Oaxaca, las cooperativas de café y miel han logrado exportar directamente a mercados especializados de Europa y Estados Unidos, con precios 3 o 4 veces superiores al mercado convencional.</p>
      <p>El sur de Quintana Roo puede replicar ese modelo con productos autóctonos de alto valor, especialmente la miel de melipona y el cacao fino de aroma.</p>

      <h2>La agenda que proponemos</h2>
      <p>Desde DDS, proponemos una agenda agroindustrial para el sur que incluya: programas de asistencia técnica especializada, fondos de inversión para infraestructura de acopio y procesamiento, apoyo a la obtención de certificaciones, y conexión con plataformas de comercio electrónico y exportación.</p>
      <p>El campo del sur no es el pasado. Con la tecnología y el apoyo adecuados, puede ser el futuro.</p>
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
