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
    slug: "voz-del-sur-desarrollo-quintana-roo",
    title: "La voz más importante para determinar el desarrollo del sur debe ser la del propio sur",
    excerpt:
      "En los últimos días hemos sido testigos de eventos relacionados al desarrollo turístico del sur de Quintana Roo. La pregunta central es: ¿quién tiene legitimidad territorial para definir el futuro de nuestra región?",
    category: "Desarrollo",
    date: "28 Abr 2026",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
    author: "Equipo Brillo al Sur",
    authorRole: "Regresémosle el Brillo al Sur",
    content: `
      <p>En los últimos 10 días hemos sido testigos de eventos interesantes relacionados al desarrollo turístico y económico de nuestra región: el sur del Estado de Quintana Roo. Por una parte, vimos manifestaciones, activismo social y popular de una comunidad argentina que exigía cambiarle de nombre al municipio de Bacalar. Proponen "Nueva Argentina". Por otra parte, fuimos testigos de activistas que piden a las autoridades la instalación infraestructura, específicamente plantas de tratamiento en la alcaldía de Mahahual, para que entonces se "permita" la inversión. No consideran, que es precisamente la inversión lo que supone que exista infraestructura como la que ellos exigen, y más aún, que precisamente la inversión a la que se oponen ya contempla lo que exigen.</p>

      <p>No se puede opinar con autoridad sobre una realidad que no se vive a diario. No asumimos que las personas que legítimamente llevan a cabo estas exigencias no vivan aquí, pero sí suponemos, con conocimiento de causa, que no viven la realidad socioeconómica de la mayoría de los habitantes del sur, y también, definitivamente, que no viven la realidad histórica de nuestra región.</p>

      <h2>¿Por qué así?</h2>
      <p>Hay que conocer un poco la historia de Quintana Roo, de su población y de la relación que ha tenido esta población con el desarrollo turístico y económico de nuestro Estado. En este sentido, en grandes rubros hay tres orígenes históricos a la población de nuestro estado.</p>

      <h2>1. El Quintana Roo Maya</h2>
      <p>El Quintana Roo maya representa una continuidad histórica de resistencia. Se trata de los pueblos originarios de la región, con raíces milenarias, presentes mucho antes de la existencia de México, Yucatán o Quintana Roo como entidades políticas. Durante el siglo XIX, en el contexto de la Guerra de Castas, estos pueblos consolidaron un orden político propio con centro en Chan Santa Cruz —hoy Felipe Carrillo Puerto—, desde donde operaron como una entidad autónoma en rebeldía frente al Estado mexicano.</p>
      <p>Su incorporación al Estado nacional fue un proceso complejo, que combinó la acción militar con dinámicas de negociación e integración progresiva.</p>

      <h2>2. El Quintana Roo Capitalino</h2>
      <p>El Quintana Roo capitalino es el de Chetumal —antiguo Payo Obispo, asentado en la región histórica de Chactemal— y del municipio de Othón P. Blanco.</p>
      <p>Es el Quintana Roo fundacional del Estado mexicano: poblado por militares, funcionarios y familias que, por instrucción federal, se asentaron en la frontera sur tras la Guerra de Castas y la creación del Territorio de Quintana Roo en 1902, con el objetivo de afirmar la soberanía nacional en una región estratégica. Durante ya más de un siglo, estas comunidades han sido el anclaje institucional del país en el Caribe mexicano, formando generaciones que han vivido, trabajado y sostenido la presencia del Estado en el trópico, mucho antes de que surgiera el desarrollo turístico del norte y de que el primer hotel se levantara en Cancún.</p>

      <h2>3. El Nuevo Quintana Roo o el Quintana Roo "FONATUR"</h2>
      <p>Es irónico que la mayoría de las personas que conocen o identifican a Quintana Roo, identifican un lugar o un proceso que es relativamente nuevo. El Quintana Roo turístico —el Quintana Roo de FONATUR— surge a partir de una decisión estratégica del Estado mexicano a inicios de la década de 1970, cuando se impulsa el desarrollo de Cancún como un polo turístico internacional.</p>
      <p>Esta inversión detonó, en pocas décadas, una de las economías más dinámicas de México y de América Latina, transformando un territorio con baja densidad poblacional en un motor económico nacional. A partir de este proceso, Quintana Roo experimentó uno de los fenómenos migratorios más intensos del país: en menos de 40 años, la población creció hasta alcanzar cerca de 1.5 millones de habitantes, impulsada por la llegada de personas de todos los estados de México y, posteriormente, de distintas partes del mundo.</p>

      <figure style="margin: 2rem 0;">
        <img src="/Info-Brillo.5.png" alt="Historia e identidad del sur de Quintana Roo" style="width:100%; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.12);" />
      </figure>

      <p>El Quintana Roo de FONATUR es, en esencia, un Quintana Roo de dos generaciones. La gran mayoría de quienes hoy superan los 45 años no nacieron en el estado, sino que llegaron a construirlo. Son familias migrantes que apostaron por el Caribe mexicano y que, con su trabajo, hicieron posible su consolidación como potencia turística global.</p>
      <p>Este Quintana Roo representa la movilidad social, la cultura del esfuerzo y la capacidad de México para crear, en pocas décadas, un espacio de prosperidad abierta al mundo. Es el que hoy concentra el 87% de la infraestructura del estado, pero es también el que lleva menos tiempo en esta tierra.</p>

      <p>Aquí, sin embargo, ocurre algo relevante que debe ser observado con claridad.</p>
      <p>Una parte significativa de la conversación crítica sobre el desarrollo del sur del estado no proviene, en su mayoría, de los sectores históricamente asentados en la región. Es decir, no surge del Quintana Roo con mayor arraigo territorial —el Quintana Roo maya ni del Quintana Roo capitalino—, sino principalmente de sectores vinculados al Quintana Roo turístico, particularmente del norte del estado.</p>
      <p>Se trata, en muchos casos, de personas que llegaron a Quintana Roo atraídas por el propio desarrollo turístico, y que hoy participan directa o indirectamente en esa economía: profesionistas, prestadores de servicios, emprendedores y trabajadores que han encontrado en el turismo su principal fuente de ingreso.</p>
      <p>Esto no invalida, de ninguna manera, su derecho a opinar. Al contrario: su voz es parte fundamental de la pluralidad del estado. Sin embargo, es importante reconocer un hecho que con frecuencia pasa desapercibido en la conversación pública: las opiniones sobre el desarrollo del sur no siempre provienen de quienes han vivido históricamente en esa región, ni de quienes enfrentan directamente sus condiciones estructurales.</p>
      <p>En contraste, distintos ejercicios de opinión y evidencia levantada en los cuatro municipios del sur del estado muestran un patrón claro: amplios sectores de la población local —incluyendo comunidades históricas, ejidos, trabajadores, organizaciones productivas y empresariales— no se oponen al desarrollo en sí mismo. Por el contrario, expresan de manera consistente su interés en acceder a mayores oportunidades económicas, siempre que estas se den bajo condiciones de legalidad, sostenibilidad y beneficio local.</p>
      <p>Este punto es fundamental: el debate no es entre desarrollo y no desarrollo. Es entre modelos de desarrollo que incluyen al sur y modelos que lo excluyen.</p>
      <p>Por ello, más que descalificar voces, lo que se propone es ordenar la conversación desde un principio básico de legitimidad territorial: cuando se trata del desarrollo del sur de Quintana Roo, la voz de quienes habitan, trabajan y han sostenido históricamente esa región debe tener un peso central en la toma de decisiones.</p>
      <p>No para excluir a nadie, sino para asegurar que el desarrollo responda a la realidad del territorio.</p>

      <h2>La Agenda del sur</h2>
      <p>En este sentido, desde el sur se pueden identificar con claridad algunas coincidencias fundamentales:</p>

      <h2>1. Participación en la promoción turística estatal</h2>
      <p>El sector productivo del sur —incluyendo cámaras empresariales, ejidos, cooperativas, sindicatos, transportistas, constructores y organizaciones locales— busca participar activamente en la definición de la política de promoción turística del estado. En particular, existe una demanda clara de contar con voz y voto en las decisiones sobre el destino de los recursos públicos destinados a la promoción turística, especialmente aquellos vinculados a fideicomisos estatales.</p>

      <h2>2. Integración económica local en los proyectos de desarrollo</h2>
      <p>Los proyectos, tanto públicos como privados, deben incorporar de manera efectiva al sur en sus cadenas de valor:</p>
      <ul>
        <li>Contratación de mano de obra local</li>
        <li>Proveeduría regional</li>
        <li>Servicios profesionales y técnicos</li>
        <li>Producción de contenido y promoción territorial</li>
      </ul>
      <p>El desarrollo no debe sólo llegar al territorio: debe construirse desde él.</p>

      <h2>3. Desarrollo con condiciones claras</h2>
      <p>Existe disposición mayoritaria a la inversión, incluyendo proyectos de gran escala, siempre que:</p>
      <ul>
        <li>Cumplan con la ley</li>
        <li>Respeten criterios de sostenibilidad</li>
        <li>Generen empleo local</li>
        <li>Impulsen cadenas productivas regionales</li>
      </ul>
      <p>La condición no es detener el desarrollo, sino asegurar que éste genere valor en la región.</p>

      <figure style="margin: 2rem 0;">
        <img src="/GRAF1.png" alt="Gráfica 1: Opinión sobre el desarrollo en el sur de Quintana Roo" style="width:100%; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.12);" />
      </figure>
      <figure style="margin: 2rem 0;">
        <img src="/GRAF2.png" alt="Gráfica 2: Opinión sobre el desarrollo en el sur de Quintana Roo" style="width:100%; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.12);" />
      </figure>

      <h2>4. Reconocimiento de la diversidad territorial del estado</h2>
      <p>Quintana Roo no es un estado uniforme. Existen diferencias profundas entre el norte y el sur en términos históricos, sociales y económicos.</p>
      <p>En los municipios del sur —donde el arraigo histórico es mayor y donde la economía turística no ha tenido el mismo impacto—, las decisiones sobre desarrollo deben considerar de manera prioritaria la voz de sus habitantes. No como un acto de exclusión, sino como un reconocimiento de legitimidad territorial.</p>
      <p>En un estado construido tanto por sus raíces como por su dinamismo migrante, el reto no es decidir quién tiene voz, sino cómo se ordenan esas voces para construir decisiones justas.</p>
      <p>En el caso del sur de Quintana Roo, esa organización pasa necesariamente por reconocer que quienes han habitado y sostenido ese territorio a lo largo del tiempo deben ocupar un lugar central en la conversación sobre su futuro.</p>
      <p><strong>#RegresémosleElBrilloAlSur</strong></p>
    `,
  },
  {
    slug: "prosperidad-compartida-deuda-territorial-sur",
    title: "Hacia una prosperidad compartida: Es momento de saldar la deuda territorial con el sur de Quintana Roo",
    excerpt:
      "El crecimiento de Quintana Roo solo será verdaderamente pleno cuando sea compartido. El sector productivo del sur presenta datos, análisis y una propuesta concreta para cerrar la brecha histórica que ha dejado al sur al margen del desarrollo estatal.",
    category: "Desarrollo",
    date: "16 Abr 2026",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=85",
    author: "Equipo Brillo al Sur",
    authorRole: "Regresémosle el Brillo al Sur",
    content: `
      <p>El estado de Quintana Roo es, sin lugar a duda, un gigante del turismo mundial y un motor económico fundamental para México. Sin embargo, nuestro estado es también un territorio de contrastes extremos. Durante décadas, las administraciones pasadas impulsaron un modelo de desarrollo que concentró casi la totalidad de la inversión, la infraestructura y las oportunidades en un corredor costero de apenas unos kilómetros en el norte.</p>
      <p>Esta inercia histórica dejó al sur del estado sistemáticamente al margen del dinamismo económico, generando una exclusión que hoy no es una simple percepción subjetiva, sino un fenómeno estructural, medible y persistente. Ejemplo claro de este contraste es que, mientras el norte del estado cuenta con una alta conectividad aérea, promoción internacional constante y diversificación de mercados turísticos, en el sur infraestructura estratégica como el Aeropuerto Internacional de Chetumal permanece subutilizada, con una conectividad limitada prácticamente a vuelos hacia la Ciudad de México, sin una estrategia sólida de posicionamiento internacional que le permita competir en igualdad de condiciones. A esta situación se suma un entorno económico adverso en la capital del estado, donde recientemente se ha documentado un incremento sostenido en la inflación local, impactando directamente en el costo de vida, el transporte de mercancías y la viabilidad de los negocios.</p>
      <p>Como sector productivo del sur, reconocemos y celebramos el éxito del norte, pero estamos convencidos de que el crecimiento de Quintana Roo solo será verdaderamente pleno cuando sea compartido. Para diseñar soluciones efectivas junto con el Gobierno del Estado, primero debemos visibilizar la magnitud de nuestros rezagos estructurales con base en datos oficiales:</p>

      <figure style="margin: 2rem 0;">
        <img src="/infografia3.png" alt="Infografía: Prosperidad Compartida para el Sur de Quintana Roo" style="width:100%; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.12);" />
      </figure>

      <ul>
        <li><strong>Concentración extrema de la infraestructura:</strong> De acuerdo con reportes de SEDETUR Quintana Roo a marzo de 2024, el corredor norte del estado concentra aproximadamente el 87% de las habitaciones hoteleras. En un contraste abrumador, todo el sur de Quintana Roo, incluyendo a la capital Chetumal, apenas alcanza el 3.5% de la oferta estatal. Esta disparidad no solo se refleja en infraestructura turística, sino también en la falta de estrategias integrales de promoción, así como en la ausencia de inversión pública coordinada que permita detonar destinos con alto potencial como Mahahual o Bacalar en igualdad de condiciones frente al norte.</li>
        <li><strong>Inversión excluyente:</strong> Según registros de la Secretaría de Economía, entre 1999 y 2024 el estado acumuló 11,740 millones de dólares en Inversión Extranjera Directa (IED). Prácticamente la totalidad de este capital se materializó en el norte, dejando al sur sin la masa crítica de infraestructura necesaria para competir. Esta tendencia se replica incluso en la gestión de nuevas inversiones, donde proyectos estratégicos en el sur enfrentan mayores niveles de incertidumbre, cuestionamiento y retrasos administrativos.</li>
        <li><strong>Desigualdad y pobreza:</strong> La brecha social es profunda y está documentada en la Medición de Pobreza Municipal de CONEVAL (2021). Mientras municipios del norte como Cozumel registran un 30.8% de pobreza, en el sur, municipios como Felipe Carrillo Puerto alcanzan un doloroso 78.6%. La pobreza extrema es entre 6 y 8 veces mayor en los municipios del sur que en el norte.</li>
        <li><strong>Fuga de talento y despoblación:</strong> El Censo de Población y Vivienda 2020 revela que apenas dos municipios del norte (Benito Juárez y Playa del Carmen) agrupan el 67% de los habitantes del estado, mientras que los cuatro municipios del sur apenas representan el 25%. Mientras destinos del norte como Playa del Carmen y Tulum crecieron a tasas del 7.9% y 5.3%, Othón P. Blanco registró una tasa negativa de -0.5%. Miles de familias se ven obligadas a dejar su territorio en busca del empleo formal que el sur no puede ofrecerles. A esto se suma la falta de una política clara de integración regional con mercados naturales como Belice.</li>
        <li><strong>Economía de subsistencia:</strong> Ante la falta de una base empresarial sólida, el sur depende críticamente de las transferencias federales. Estudios de la UAQROO y la UADY evidencian que, en comunidades de la Zona Maya, hasta el 37% del ingreso de los hogares proviene de apoyos públicos, profundizando así los retos de productividad en la región.</li>
      </ul>

      <h2>Una oportunidad histórica para la justicia territorial</h2>
      <p>Estos datos demuestran que la desigualdad territorial no fue un accidente, sino la consecuencia directa de un modelo de desarrollo pasado que ignoró al sur. Hoy, la demanda de desarrollo de nuestras comunidades es una exigencia legítima de justicia territorial.</p>
      <p>Sabemos que la inversión privada y el desarrollo regulado en nuestra región no compiten con el medio ambiente; compiten contra el olvido, la pobreza y la falta de oportunidades. Casos como el proyecto de inversión en Mahahual, con capital internacional y potencial de generación de miles de empleos directos e indirectos, evidencian que el sur sí cuenta con oportunidades reales de detonación económica, siempre y cuando exista certidumbre, coordinación institucional y acompañamiento efectivo por parte de las autoridades.</p>
      <p>Vemos con esperanza que en marzo de 2026, el gobierno federal, en boca de la propia Presidenta Claudia Sheinbaum, reconoció explícitamente esta brecha histórica al anunciar una inversión de casi 6,000 millones de pesos para infraestructura carretera prioritariamente en el sur. Este es el momento exacto para que el Gobierno del Estado se sume a este impulso histórico.</p>
      <p>Desde el sector productivo y económico, extendemos una mano al gobierno estatal para articular una agenda conjunta. Necesitamos que se dote al sur de herramientas, presupuesto equitativo, proyectos de alto impacto e inclusión en los fideicomisos de promoción. Asimismo, resulta fundamental garantizar la participación efectiva de los sectores productivos y de las comunidades locales en la toma de decisiones, evitando esquemas centralizados que excluyan a quienes viven y conocen directamente las necesidades del territorio.</p>
      <p>Estamos listos para hacer equipo, romper las inercias del pasado y construir un modelo de desarrollo incluyente.</p>
      <p><strong>#RegresémosleElBrilloAlSur</strong></p>

      <h2>Referencias</h2>
      <ul>
        <li>Consejo Nacional de Evaluación de la Política de Desarrollo Social (CONEVAL). (2021). <em>Medición de Pobreza a Nivel de Municipio 2010-2020.</em></li>
        <li>Instituto Nacional de Estadística y Geografía (INEGI). (2021). <em>Censo de Población y Vivienda 2020. Quintana Roo.</em></li>
        <li>Reyes Maya, O. y Barrera Rojas, M. (2014). Estudio sobre dependencia de transferencias en la Zona Maya. <em>Revista de Economía, UADY.</em></li>
        <li>Secretaría de Economía. (2024). <em>Data México.</em> Gobierno de México.</li>
        <li>Secretaría de Turismo de Quintana Roo (SEDETUR). (2024). <em>Infraestructura Hotelera, marzo 2024.</em></li>
      </ul>
    `,
  },
  {
    slug: "sector-productivo-fideicomiso-turismo",
    title: "Rigor Técnico o Desinformación: El Futuro del Sur Exige Verdad",
    excerpt:
      "Para entender lo que hoy está en juego en el sur de Quintana Roo, es necesario reconocer tanto nuestro pasado como los cambios profundos que han transformado el presente y exigir que toda afirmación pública se base en evidencia verificable.",
    category: "Turismo",
    date: "15 Abr 2026",
    readTime: "8 min",
    image: "/portadaarticulo.jpg",
    author: "Equipo Brillo al Sur",
    authorRole: "Regresémosle el Brillo al Sur",
    content: `
      <p>Para entender lo que hoy está en juego en el sur de Quintana Roo, es necesario reconocer tanto nuestro pasado como los cambios profundos que han transformado el presente. Durante décadas, el estado creció bajo un modelo de "dos velocidades": un <strong>norte dinámico</strong>, impulsado por una planeación turística intensiva desde los años 70, y un <strong>sur que quedó rezagado</strong>, con menos inversión, menor desarrollo productivo y limitadas oportunidades económicas. Este <strong>desequilibrio estructural</strong> sigue reflejándose hoy en indicadores de pobreza en municipios como Felipe Carrillo Puerto y José María Morelos.</p>

      <figure style="margin: 2rem 0;">
        <img src="/info2.png" alt="Rigor Técnico o Desinformación: El Futuro del Sur Exige Verdad" style="width:100%; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.12);" />
      </figure>

      <p>Sin embargo, también es cierto que el modelo de desarrollo en Quintana Roo —y en México en su conjunto— ha cambiado de manera significativa en los últimos 20 años. Hoy existen reglas que antes no existían: protección estricta de manglares, prohibición de construcción en dunas costeras, ordenamientos ecológicos territoriales vinculantes y evaluaciones técnicas obligatorias mediante Manifestaciones de Impacto Ambiental (MIA).</p>
      <p>Este avance no ocurrió por casualidad; es resultado de décadas de exigencia ciudadana y del fortalecimiento del ambientalismo organizado. Gracias a ello, hoy el escrutinio ambiental tiene un peso real. Pero precisamente por esa relevancia, hoy también se exige algo más: <strong>rigor técnico y verificación basada en evidencia.</strong></p>

      <h2>Desarrollo, sostenibilidad y permanencia social</h2>
      <p>En las regiones económicamente más vulnerables del país, el <strong>desarrollo no puede entenderse como un antagonista del medio ambiente</strong>, sino como una oportunidad que debe ocurrir bajo reglas mucho más estrictas que en el pasado. El desarrollo no solo genera inversión; genera empleo formal, cadenas de producción y fortalecimiento del tejido económico local.</p>
      <p>Aún más importante: genera condiciones para que nuestras familias puedan quedarse. Sin oportunidades, el destino del sur ha sido históricamente la migración hacia el norte del país, la Ciudad de México o los Estados Unidos. En el peor de los casos, la falta de alternativas deja a nuestras comunidades expuestas a economías ilegales. Por ello, el <strong>desarrollo legal, regulado y sostenible es una herramienta de estabilidad social</strong>, una política de arraigo y una forma de protección comunitaria.</p>

      <h2>El caso Mahahual bajo el microscopio técnico</h2>
      <p>Bajo este nuevo paradigma de responsabilidad, el debate en torno al proyecto Perfect Day en Mahahual se ha vuelto especialmente relevante. En las últimas semanas, distintas afirmaciones han sido puestas bajo escrutinio público, no como un intento de desacreditar la exigencia ambiental —que es legítima—, sino para verificar si dichas afirmaciones se sostienen frente a la evidencia documental disponible.</p>

      <h2>"Ecocidio de 90 hectáreas"</h2>
      <p>La evidencia documental pública, incluyendo la MIA presentada ante la autoridad, establece que la gran mayoría del proyecto se desarrolla en zonas previamente impactadas. Aproximadamente 16 hectáreas corresponden a vegetación secundaria, mientras que más de 45 hectáreas de manglar se mantienen como área de conservación. El cuestionamiento técnicamente válido radica en determinar si esas 16 hectáreas contienen manglar conforme a la ley, no en sostener una afirmación general de destrucción total que no corresponde a los planos oficiales.</p>

      <h2>Representación incorrecta de áreas de conservación</h2>
      <p>Se ha documentado que, en diversas presentaciones públicas, se señaló como zona de "impermeabilización y construcción" un polígono que, al contrastarlo con el Plan Maestro del proyecto —documento público y vinculante—, está clasificado como Área Natural de Conservación y Reforestación. Presentar una interpretación que invierte el uso real asignado en el documento técnico no es una diferencia de criterio, sino una afirmación que no corresponde con la clasificación oficial.</p>

      <h2>Afirmaciones sobre omisiones en la MIA</h2>
      <p>Se ha señalado la supuesta ausencia de infraestructura hídrica y evaluación de impactos. Sin embargo, la revisión directa del expediente permite identificar con precisión lo siguiente:</p>
      <ul>
        <li><strong>Capítulo II (pág. 31 y 150):</strong> Se establece el suministro mediante una Planta de Ósmosis Inversa (POI) y una Planta de Tratamiento de Aguas Residuales (PTAR), detallando toda la infraestructura hidráulica.</li>
        <li><strong>Capítulo V:</strong> Desarrolla un apartado completo dedicado a la identificación y evaluación de impactos acumulativos, sinérgicos y residuales.</li>
        <li><strong>Capítulo II (pág. 172):</strong> Establece el manejo integral de residuos sólidos conforme a la normativa.</li>
      </ul>
      <p>Es decir, las medidas que se señalaron como "omitidas" sí están expresamente contenidas en el expediente técnico.</p>

      <h2>Un llamado responsable: Verdad, evidencia y futuro</h2>
      <p>El objetivo de este posicionamiento no es descalificar al ambientalismo, cuya función ha sido fundamental para elevar los estándares actuales. Precisamente por el respeto que merece esa lucha, hoy resulta indispensable elevar el estándar de la conversación pública.</p>
      <p>Desde el sur de Quintana Roo, la convocatoria es clara: no detener el escrutinio ambiental ni debilitar la exigencia ciudadana, pero sí exigir que toda afirmación se base en evidencia verificable. Debemos proteger la certidumbre de los proyectos que cumplen con la ley y que representan nuestra oportunidad de romper con el rezago.</p>
      <p>En el sur, el desarrollo es una necesidad histórica. Y hoy, más que nunca, debe construirse sobre dos pilares fundamentales: sostenibilidad real y verdad verificable.</p>
      <p><strong>#RegresémosleElBrilloAlSur</strong></p>
    `,
  },
  {
    slug: "coalicion-sur-exige-lugar-fideicomiso-turismo",
    title: "Sector Productivo Exige Lugar en el Fideicomiso de Turismo para Terminar con su Exclusión",
    excerpt:
      "Una coalición de más de 18 organizaciones de Chetumal, Mahahual y Bacalar demanda integración real y equitativa en el Consejo de Promoción Turística de Quintana Roo, denunciando la brecha histórica que mantiene al sur en el rezago.",
    category: "Turismo",
    date: "10 Abr 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    author: "Equipo Brillo al Sur",
    authorRole: "Regresémosle el Brillo al Sur",
    content: `
      <p>Organizaciones del sector productivo, ejidos, cooperativas y empresarios del sur de la entidad han alzado la voz para denunciar una brecha histórica que mantiene a la región con rezagos estructurales frente a la bonanza turística que hoy beneficia principalmente al norte de Quintana Roo. Bajo la premisa de que "el crecimiento del estado sólo será pleno cuando sea compartido", el bloque exige una integración real y equitativa en la política de desarrollo estatal.</p>

      <figure style="margin: 2rem 0;">
        <img src="/infografia.png" alt="Infografía: Sector Productivo Demanda Lugar en el Fideicomiso de Turismo" style="width:100%; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.12);" />
      </figure>

      <h2>La brecha histórica norte vs. sur</h2>
      <p>Históricamente, el sur de Quintana Roo ha permanecido a la sombra del éxito turístico del norte. Mientras el corredor Cancún-Riviera Maya concentra la inversión y los reflectores internacionales, los municipios del sur de Quintana Roo solo han sido testigos de un desarrollo que parece detenerse antes de llegar a sus fronteras.</p>
      <p>Esta exclusión no es solo una percepción: mientras municipios del norte como Cozumel y Cancún registran un 30.8% y 37.7% de pobreza respectivamente, municipios del sur como Felipe Carrillo Puerto y Bacalar alcanzan el 78.6% y 78.2%, con niveles de pobreza extrema entre 6 y 8 veces mayores, según CONEVAL. "No pedimos concesiones, pedimos justicia", señala el sector productivo, enfatizando que el sur tiene el mismo derecho constitucional y económico a ser protagonista de la economía turística.</p>

      <h2>Una solicitud sin respuesta institucional</h2>
      <p>El sector señala que existe una solicitud en proceso sin definición institucional desde hace meses. Tras la entrega de una propuesta formal de Convenio de Colaboración Institucional en junio de 2025 y diversas gestiones posteriores, la coalición sigue esperando una respuesta definitiva que permita transitar hacia una agenda de trabajo conjunta y resolutiva.</p>
      <p>La incertidumbre crece ante un ejercicio presupuestal 2026 ya en marcha, mientras eventos emblemáticos del sur —como el Torneo de Pesca San Judas Tadeo, el 21K Chetumal y el Festival Jats'a Já— quedaron fuera de la estrategia de respaldo institucional durante el año pasado, desaprovechando oportunidades clave de derrama económica.</p>

      <h2>Las demandas del sector</h2>
      <p>Esta coalición y los diversos sectores empresariales y comunitarios demandan una ruta de trabajo resolutiva en la capital del estado que incluya:</p>
      <ol>
        <li><strong>Integración y participación formal en el Fideicomiso de Turismo del Estado</strong>, para incidir directamente en la planeación y seguimiento de la promoción.</li>
        <li><strong>Criterios claros y equitativos en la asignación territorial de los recursos públicos</strong> del Consejo de Promoción Turística de Quintana Roo.</li>
        <li><strong>Instalación de una mesa de trabajo permanente en Chetumal</strong> con acuerdos verificables.</li>
      </ol>

      <h2>Un reclamo con fundamento legal y unidad de frente</h2>
      <p>El sector productivo del sur subraya que este reclamo tiene un fundamento legal sólido en la Ley de Turismo del Estado y representa un frente unido de actores que llevan décadas sosteniendo la economía local. El mensaje es claro: la identidad turística de Quintana Roo no está completa sin la riqueza del sur.</p>
      <p>Consideran que es momento de actuar para que la prosperidad llegue a todas las familias de la entidad, reconociendo el valor de su tierra y su gente. Dicen compartir el mismo objetivo de la gobernadora: "Regresémosle el brillo al sur".</p>
    `,
  },
  {
    slug: "tren-maya-catalizador-desarrollo-sur",
    title: "El Tren Maya como catalizador del desarrollo en el sur",
    excerpt:
      "Un análisis sobre cómo la infraestructura de conectividad puede transformar las oportunidades económicas de la región sur de Quintana Roo.",
    category: "Infraestructura",
    date: "15 Feb 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&q=85",
    author: "Equipo Brillo al Sur",
    authorRole: "Regresémosle el Brillo al Sur",
    content: `
      <p>El Tren Maya representa la inversión en infraestructura más significativa que ha visto el sureste mexicano en décadas. Para la región sur de Quintana Roo — conformada por los municipios de Felipe Carrillo Puerto, Bacalar y Othón P. Blanco — esta megaobra no es simplemente un proyecto de transporte: es una palanca de desarrollo con potencial transformador.</p>

      <h2>Conectividad como base del crecimiento</h2>
      <p>Durante años, el sur de Quintana Roo ha vivido relativamente aislado del dinamismo económico del norte del estado. La distancia y los tiempos de traslado han sido barreras reales para la inversión, el turismo y el comercio. Con el Tren Maya operando, los tiempos de viaje entre Cancún y Chetumal se reducen drásticamente, abriendo posibilidades que antes eran impensables.</p>
      <p>Los empresarios locales ya reportan un incremento en la prospección de terrenos y proyectos inmobiliarios en las cercanías de las estaciones. La estación de Felipe Carrillo Puerto, en particular, tiene el potencial de convertirse en un nodo de desarrollo que detone la economía local.</p>

      <h2>Oportunidades para el turismo sustentable</h2>
      <p>Bacalar es uno de los destinos más codiciados del Caribe mexicano, pero su infraestructura de acceso ha limitado históricamente el flujo de visitantes. El tren cambia esa ecuación. Sin embargo, la pregunta clave es: ¿cómo garantizamos que ese turismo sea sustentable y beneficie a las comunidades locales?</p>
      <p>Desde Brillo al Sur, proponemos que el modelo de desarrollo turístico en Bacalar priorice:</p>
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
    author: "Equipo Brillo al Sur",
    authorRole: "Regresémosle el Brillo al Sur",
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
      <p>Desde Brillo al Sur, hacemos un llamado urgente a las autoridades municipales, al gobierno estatal, al sector empresarial y a la sociedad civil para construir juntos ese plan. La laguna no puede esperar.</p>
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
    author: "Equipo Brillo al Sur",
    authorRole: "Regresémosle el Brillo al Sur",
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
      <p>Desde Brillo al Sur, proponemos la creación de una mesa técnica permanente de educación y empleo en el sur, donde participen universidades, cámaras empresariales, gobierno municipal y organizaciones de la sociedad civil.</p>

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
    author: "Equipo Brillo al Sur",
    authorRole: "Regresémosle el Brillo al Sur",
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
    author: "Equipo Brillo al Sur",
    authorRole: "Regresémosle el Brillo al Sur",
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
    author: "Equipo Brillo al Sur",
    authorRole: "Regresémosle el Brillo al Sur",
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
      <p>Desde Brillo al Sur, proponemos una agenda agroindustrial para el sur que incluya: programas de asistencia técnica especializada, fondos de inversión para infraestructura de acopio y procesamiento, apoyo a la obtención de certificaciones, y conexión con plataformas de comercio electrónico y exportación.</p>
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
