import { Article } from './types';
import { CLINICAL_STUDIES } from './studies';

export const SPANISH_TO_ENGLISH_MAP: Record<string, { pillar: string; slug: string }> = {
  'sabila-para-la-cara-toda-la-noche': { pillar: 'skincare', slug: 'aloe-vera-overnight-face-mask' },
  'como-quitar-la-aloina-de-la-sabila': { pillar: 'health', slug: 'how-to-remove-aloin-from-aloe-leaf' },
  'hojas-de-sabila-blandas-y-arrugadas-pudricion': { pillar: 'cultivation', slug: 'fix-soft-mushy-aloe-leaves' },
  'sabila-para-el-cabello-y-caspa': { pillar: 'hair-care', slug: 'aloe-vera-for-hair-growth-science' },
  'como-saber-si-el-gel-de-sabila-es-puro': { pillar: 'audits', slug: 'how-to-spot-fake-aloe-vera-gel' },
};

export const ENGLISH_TO_SPANISH_MAP: Record<string, { pillar: string; slug: string }> = {
  'aloe-vera-overnight-face-mask': { pillar: 'skincare', slug: 'sabila-para-la-cara-toda-la-noche' },
  'how-to-remove-aloin-from-aloe-leaf': { pillar: 'health', slug: 'como-quitar-la-aloina-de-la-sabila' },
  'fix-soft-mushy-aloe-leaves': { pillar: 'cultivation', slug: 'hojas-de-sabila-blandas-y-arrugadas-pudricion' },
  'aloe-vera-for-hair-growth-science': { pillar: 'hair-care', slug: 'sabila-para-el-cabello-y-caspa' },
  'how-to-spot-fake-aloe-vera-gel': { pillar: 'audits', slug: 'como-saber-si-el-gel-de-sabila-es-puro' },
};

export const SPANISH_ARTICLES: Article[] = [
  {
    slug: 'sabila-para-la-cara-toda-la-noche',
    pillar: 'skincare',
    title: '¿Se Puede Dejar la Sábila en la Cara Toda la Noche? Protocolo Dermatológico y Seguridad',
    metaTitle: '¿Se Puede Dejar la Sábila en la Cara Toda la Noche? Guía Clínica',
    metaDescription: 'Descubre qué ocurre al dormir con gel de sábila en el rostro. Evidencia dermatológica sobre el acemanano, barrera cutánea y prevención de irritación por aloína.',
    publishedAt: '2025-02-15',
    updatedAt: '2025-02-22',
    readTimeMinutes: 7,
    authorId: 'botanical-research-desk',
    reviewedById: 'formulation-desk',
    badge: 'Protocolo Clínico',
    directAnswer: 'Sí, puedes dejar gel puro de sábila en el rostro durante toda la noche de forma segura, siempre que sea gel interior transparente descolorizado y 100% libre de aloína. Sus polisacáridos de acemanano reparan la barrera cutánea y retienen agua. Sin embargo, nunca uses pencas crudas sin drenar la aloína amarilla, ya que provoca dermatitis de contacto severa.',
    tableOfContents: [
      { id: 'fisiologia-nocturna', title: 'Fisiología Cutánea Durante el Sueño y la Sábila', level: 2 },
      { id: 'beneficios-acemanano', title: 'El Papel del Acemanano en la Regeneración Celular', level: 2 },
      { id: 'peligro-aloina-cruda', title: 'El Peligro Crítico del Látex Amarillo (Aloína)', level: 2 },
      { id: 'protocolo-paso-a-paso', title: 'Protocolo Nocturno Seguro en 4 Pasos', level: 2 },
      { id: 'preguntas-frecuentes', title: 'Preguntas Frecuentes', level: 2 },
    ],
    htmlContent: `
      <section id="fisiologia-nocturna">
        <h2>Fisiología Cutánea Durante el Sueño y la Sábila</h2>
        <p>Durante la fase circadiana nocturna, la piel humana entra en un estado hipermetabólico de mitosis y reparación. La microcirculación dérmica aumenta y la permeabilidad del estrato córneo se eleva, lo que facilita la absorción de principios activos pero incrementa la pérdida transepidérmica de agua (TEWL).</p>
        <p>Aplicar una capa fina de gel de sábila pura (<em>Aloe barbadensis Miller</em>) actúa como un escudo hidrofílico que suministra agua biológica y micronutrientes antioxidantes mientras duermes.</p>
      </section>

      <section id="beneficios-acemanano">
        <h2>El Papel del Acemanano en la Regeneración Celular</h2>
        <p>El principal bioactivo responsable de las propiedades de la sábila es el <strong>acemanano</strong>, un polisacárido de cadena larga que se une a los receptores de manosa en los fibroblastos dérmicos. Esto estimula la síntesis de colágeno y activa los factores de crecimiento epidérmico, acelerando la recuperación de pieles deshidratadas o enrojecidas.</p>
      </section>

      <section id="peligro-aloina-cruda">
        <h2>El Peligro Crítico del Látex Amarillo (Aloína)</h2>
        <p>El error más peligroso al usar pencas de sábila cosechadas en casa es no drenar el látex exudado entre la corteza verde y el cristal interior. Esta sustancia amarilla contiene <strong>aloína</strong> y derivados antraquinónicos altamente citotóxicos y fotosensibilizantes.</p>
        <p>Dejar sábila cruda con aloína en el rostro durante la noche causa ardor intenso, eritema generalizado y dermatitis de contacto alérgica. Consulta siempre nuestra guía sobre <a href="/es/health/como-quitar-la-aloina-de-la-sabila/">cómo quitar la aloína de la sábila</a> antes de cualquier aplicación facial.</p>
      </section>

      <section id="protocolo-paso-a-paso">
        <h2>Protocolo Nocturno Seguro en 4 Pasos</h2>
        <p>Para maximizar la hidratación sin obstruir los poros, sigue este orden dermatológico:</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['skin-hydration-dalbelo-2006'],
      CLINICAL_STUDIES['dermatology-review-surjushe-2008']
    ],
    howToSteps: [
      { name: 'Paso 1: Limpieza Suave', text: 'Lava tu rostro con un limpiador suave sin sulfatos y enjuaga con agua tibia.' },
      { name: 'Paso 2: Prueba de Parche', text: 'Si usas una penca fresca, aplica una gota en la parte interna del antebrazo durante 15 minutos.' },
      { name: 'Paso 3: Capa Fina de Cristal Puro', text: 'Distribuye una capa ligera de gel transparente sobre el rostro húmedo hasta su absorción.' },
      { name: 'Paso 4: Sellado Lipídico Opcional', text: 'Si tu piel es seca, aplica 2 gotas de escualano o crema con ceramidas para sellar la hidratación.' }
    ],
    faqs: [
      { question: '¿La sábila en la cara mancha la piel con el sol?', answer: 'El gel cristalino interior puro NO mancha la piel. Sin embargo, si dejas restos de aloína amarilla, esta sí es fotosensible y puede provocar manchas marrones por hiperpigmentación posinflamatoria.' },
      { question: '¿Con qué frecuencia puedo dormir con sábila en la cara?', answer: 'Puedes utilizarla de 3 a 4 noches por semana o todas las noches si tu piel tolera bien el producto y no experimentas tirantez.' },
      { question: '¿Ayuda la sábila contra el acné nocturno?', answer: 'Sí, sus enzimas antiinflamatorias y su bajo contenido de ácido salicílico natural calman la inflamación de granos y pápulas sin irritar los poros.' }
    ],
    relatedSlugs: ['como-quitar-la-aloina-de-la-sabila', 'sabila-para-el-cabello-y-caspa', 'como-saber-si-el-gel-de-sabila-es-puro']
  },
  {
    slug: 'como-quitar-la-aloina-de-la-sabila',
    pillar: 'health',
    title: 'Cómo Quitar la Aloína de la Sábila: El Protocolo de Lavado y Seguridad Tóxica',
    metaTitle: 'Cómo Quitar la Aloína de la Sábila Fácil: Lavado y Drenaje Seguro',
    metaDescription: 'Aprende a eliminar completamente la aloína amarilla y amarga de las hojas de sábila fresca antes de consumirla o aplicarla. Guía paso a paso en agua.',
    publishedAt: '2025-02-14',
    updatedAt: '2025-02-22',
    readTimeMinutes: 7,
    authorId: 'botanical-research-desk',
    reviewedById: 'formulation-desk',
    badge: 'Seguridad Toxicológica',
    directAnswer: 'Para quitar la aloína de la sábila fresca: corta la base de la penca y colócala en posición vertical en un vaso con agua durante 15 a 30 minutos para drenar la resina amarilla amarga. Luego corta los bordes espinosos, pela la corteza verde y enjuaga el cristal transparente bajo agua corriente fría hasta eliminar cualquier residuo amargo.',
    tableOfContents: [
      { id: 'que-es-la-aloina', title: '¿Qué es la Aloína y Por Qué es Peligrosa?', level: 2 },
      { id: 'riesgos-salud', title: 'Efectos Adversos del Consumo de Aloína', level: 2 },
      { id: 'el-protocolo-de-lavado', title: 'El Protocolo de Drenaje Vertical en 4 Pasos', level: 2 },
      { id: 'preguntas-frecuentes', title: 'Preguntas Frecuentes', level: 2 },
    ],
    htmlContent: `
      <section id="que-es-la-aloina">
        <h2>¿Qué es la Aloína y Por Qué es Peligrosa?</h2>
        <p>La sábila secreta dos sustancias totalmente distintas: el <strong>gel transparente del parénquima interior</strong> (rico en agua y polisacáridos beneficiosos) y el <strong>látex amargo de los túbulos pericíclicos</strong>, cargado de glucósidos antraquinónicos conocidos como aloína A y B.</p>
        <p>En la naturaleza, la planta produce este látex amargo y amarillo como defensa bioquímica para evitar que los herbívoros devoren sus hojas suculentas.</p>
      </section>

      <section id="riesgos-salud">
        <h2>Efectos Adversos del Consumo de Aloína</h2>
        <p>Consumir aloína provoca contracciones peristálticas violentas en el colon, diarrea acuosa, cólicos abdominales severos y pérdida aguda de potasio y electrolitos. Las monografías toxicológicas del National Toxicology Program (NTP) clasifican el extracto de hoja entera sin descolorizar como un potente irritante gastrointestinal.</p>
      </section>

      <section id="el-protocolo-de-lavado">
        <h2>El Protocolo de Drenaje Vertical en 4 Pasos</h2>
        <p>Sigue meticulosamente estos pasos cada vez que coseches una penca de tu jardín:</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['aloin-toxicology-boudreau-2017'],
      CLINICAL_STUDIES['ntp-toxicology-tr577-2013']
    ],
    howToSteps: [
      { name: 'Paso 1: Corte Basal Limpio', text: 'Corta una hoja exterior madura desde la base con un cuchillo desinfectado.' },
      { name: 'Paso 2: Drenaje Vertical en Agua', text: 'Coloca la hoja en posición vertical dentro de un frasco de agua durante 20 minutos; el líquido amarillo drenará hacia el fondo.' },
      { name: 'Paso 3: Retirar Espinas y Corteza', text: 'Rebana los laterales con espinas y retira cuidadosamente la cáscara verde con un cuchillo afilado.' },
      { name: 'Paso 4: Enjuague Final del Cristal', text: 'Lava el bloque gelatinoso bajo el grifo de agua fría hasta que pierda todo rastro de mucílago amargo.' }
    ],
    faqs: [
      { question: '¿Cómo sé si la sábila todavía tiene aloína?', answer: 'Prueba una pequeña punta del cristal con la lengua: si sabe intensamente amarga, aún contiene aloína y debes volver a enjuagarla.' },
      { question: '¿Se puede cocinar la sábila para quitar la aloína?', answer: 'Hervir el cristal ayuda a reducir trazas residuales, pero el drenaje vertical y el pelado previo son obligatorios para eliminar la concentración tóxica primaria.' },
      { question: '¿Las mujeres embarazadas pueden tomar jugo de sábila?', answer: 'No. El consumo oral de sábila o látex está estrictamente contraindicado en el embarazo debido al riesgo de contracciones uterinas.' }
    ],
    relatedSlugs: ['sabila-para-la-cara-toda-la-noche', 'hojas-de-sabila-blandas-y-arrugadas-pudricion', 'como-saber-si-el-gel-de-sabila-es-puro']
  },
  {
    slug: 'hojas-de-sabila-blandas-y-arrugadas-pudricion',
    pillar: 'cultivation',
    title: '¿Por Qué las Hojas de Sábila Están Blandas y Arrugadas? Diagnóstico y Rescate de Raíz',
    metaTitle: 'Hojas de Sábila Blandas y Arrugadas: Cómo Salvar tu Planta de Sábila',
    metaDescription: '¿Hojas de sábila blandas, cafés o gelatinosas? Aprende a diferenciar el exceso de riego de la falta de agua y aplica la cirugía de raíz con canela.',
    publishedAt: '2025-02-16',
    updatedAt: '2025-02-22',
    readTimeMinutes: 8,
    authorId: 'horticulture-desk',
    reviewedById: 'botanical-research-desk',
    badge: 'Diagnóstico Botánico',
    directAnswer: 'Las hojas de sábila se ponen blandas y gelatinosas por pudrición de raíz causada por exceso de agua y sustrato compacto. Cuando las raíces permanecen encharcadas, hongos anaeróbicos destruyen las raíces y las hojas colapsan. Para salvarla: desentierra la planta de inmediato, poda todas las raíces negras y blandas, espolvorea canela en polvo como fungicida natural, déjala secar 48 horas al aire y trasplanta en sustrato seco y mineral.',
    tableOfContents: [
      { id: 'el-dilema-del-riego', title: 'Exceso de Riego vs. Deshidratación: La Paradoja', level: 2 },
      { id: 'fisiologia-de-la-pudricion', title: 'Cómo los Hongos Destruyen el Sistema Radicular', level: 2 },
      { id: 'protocolo-canela', title: 'Protocolo de Emergencia: Cirugía con Canela en 4 Pasos', level: 2 },
      { id: 'receta-sustrato', title: 'La Mezcla Mineral 3:2:1 Ideal para Sábila', level: 2 },
      { id: 'preguntas-frecuentes', title: 'Preguntas Frecuentes', level: 2 },
    ],
    htmlContent: `
      <section id="el-dilema-del-riego">
        <h2>Exceso de Riego vs. Deshidratación: La Paradoja</h2>
        <p>El error más común entre dueños de plantas es asumir que hojas caídas y blandas significan sed. En una suculenta xerófita como la sábila, regar cuando las hojas ya están acuosas y gelatinosas acelera la muerte fulminante de la planta.</p>
        <p>Una planta con sed real tiene hojas <strong>delgadas, acanaladas y arrugadas como cuero seco</strong>, pero duras en la base. Si las hojas se sienten como globos de agua blandos y huelen a pantano, se trata de <strong>pudrición de raíz</strong>.</p>
      </section>

      <section id="fisiologia-de-la-pudricion">
        <h2>Cómo los Hongos Destruyen el Sistema Radicular</h2>
        <p>La saturación continua de agua en la tierra expulsa el oxígeno de los macroporos. En este ambiente anóxico proliferan hongos oportunistas como <em>Pythium</em> y <em>Phytophthora</em>, que disuelven los pelos absorbentes radiculares. Privada de raíces sanas, la sábila no puede absorber agua y colapsa.</p>
      </section>

      <section id="protocolo-canela">
        <h2>Protocolo de Emergencia: Cirugía con Canela en 4 Pasos</h2>
        <p>No esperes a que la tierra se seque dentro de la maceta. Ejecuta este procedimiento de rescate de inmediato:</p>
      </section>
    `,
    scientificCitations: [],
    howToSteps: [
      { name: 'Paso 1: Sacar de la Maceta de Inmediato', text: 'Extrae la sábila de su contenedor y sacude suavemente la tierra húmeda adherida a las raíces.' },
      { name: 'Paso 2: Podar Raíces Negras y Podridas', text: 'Con tijeras desinfectadas con alcohol, corta todas las raíces marrones, huecas o gelatinosas hasta llegar a tejido blanco y firme.' },
      { name: 'Paso 3: Espolvorear Canela en Polvo', text: 'Cubre todas las heridas de corte con canela molida pura (fungicida y cicatrizante botánico rico en cinamaldehído).' },
      { name: 'Paso 4: Reposo 48 Horas y Maceta de Barro', text: 'Deja la planta al aire libre en la sombra durante 48 horas para que cicatrice antes de plantar en maceta de barro con drenaje.' }
    ],
    faqs: [
      { question: '¿Las hojas que ya se pusieron blandas y cafés se pueden recuperar?', answer: 'No. Una vez que las paredes celulares internas se rompen, el tejido no regenera. Debes cortar esas hojas blandas desde la base para evitar que las bacterias avancen al tallo central.' },
      { question: '¿Cuándo debo regar después de trasplantar por pudrición?', answer: 'Espera entre 10 y 14 días completos antes de dar el primer riego ligero; regar antes volverá a pudrir el tallo recién cicatrizado.' },
      { question: '¿Qué tipo de maceta es mejor para la sábila?', answer: 'Las macetas de barro cocido o terracota sin esmaltar son las mejores porque sus paredes porosas permiten evaporar la humedad lateralmente.' }
    ],
    relatedSlugs: ['como-quitar-la-aloina-de-la-sabila', 'sabila-para-la-cara-toda-la-noche', 'sabila-para-el-cabello-y-caspa']
  },
  {
    slug: 'sabila-para-el-cabello-y-caspa',
    pillar: 'hair-care',
    title: 'Sábila para el Cabello: Estimulación del Folículo, Crecimiento y Control de Caspa',
    metaTitle: 'Sábila para el Cabello y Caspa: Beneficios y Tratamiento Clínico',
    metaDescription: 'Guía científica del uso de la sábila en el cabello y cuero cabelludo. Enzimas proteolíticas, combate contra el hongo Malassezia y nutrición capilar.',
    publishedAt: '2025-02-17',
    updatedAt: '2025-02-22',
    readTimeMinutes: 7,
    authorId: 'botanical-research-desk',
    reviewedById: 'formulation-desk',
    badge: 'Tricología Botánica',
    directAnswer: 'Sí, la sábila es sumamente eficaz para la salud capilar y del cuero cabelludo. Sus enzimas proteolíticas eliminan células muertas foliculares que bloquean el crecimiento, mientras que sus propiedades antifúngicas suprimen la levadura Malassezia restricta, causa primaria de la caspa y dermatitis seborreica. Además, su pH ácido natural de 4.5 sella la cutícula capilar aportando brillo y reduciendo el frizz.',
    tableOfContents: [
      { id: 'mecanismo-tricologico', title: 'Mecanismos Tricológicos de la Sábila en el Folículo', level: 2 },
      { id: 'control-de-caspa', title: 'Acción Antifúngica Contra el Hongo Malassezia', level: 2 },
      { id: 'protocolo-mascarilla', title: 'La Mascarilla Capilar Purificante en 3 Pasos', level: 2 },
      { id: 'preguntas-frecuentes', title: 'Preguntas Frecuentes', level: 2 },
    ],
    htmlContent: `
      <section id="mecanismo-tricologico">
        <h2>Mecanismos Tricológicos de la Sábila en el Folículo</h2>
        <p>El cuero cabelludo es una extensión del manto cutáneo con una densidad folicular y sebácea muy elevada. El gel de sábila contiene enzimas proteolíticas naturales que disuelven suavemente el sebo oxidado y las escamas queratinizadas que obstruyen el ostium folicular, facilitando una fase anágena de crecimiento saludable.</p>
      </section>

      <section id="control-de-caspa">
        <h2>Acción Antifúngica Contra el Hongo Malassezia</h2>
        <p>En ensayos clínicos dermatológicos, el extracto de sábila ha demostrado inhibir la proliferación de <em>Malassezia</em> (Vardy et al., 1999), reduciendo drásticamente la descamación y el prurito asociado a la caspa y dermatitis seborreica sin la resequedad provocada por champús sintéticos agresivos.</p>
      </section>

      <section id="protocolo-mascarilla">
        <h2>La Mascarilla Capilar Purificante en 3 Pasos</h2>
        <p>Aplica este tratamiento pre-lavado 1 o 2 veces por semana:</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['seborrheic-dermatitis-vardy-1999'],
      CLINICAL_STUDIES['dermatology-review-surjushe-2008']
    ],
    howToSteps: [
      { name: 'Paso 1: Extraer Gel Puro sin Aloína', text: 'Licúa el cristal descolorizado y cuela con una gasa fina para eliminar trozos de pulpa fibrosa.' },
      { name: 'Paso 2: Masajear en Cuero Cabelludo Seco', text: 'Separa el cabello en secciones y masajea el gel directamente en la raíz con movimientos circulares durante 5 minutos.' },
      { name: 'Paso 3: Reposo de 30 Minutos y Lavado', text: 'Deja actuar durante 30 minutos y lava con tu champú suave habitual; notarás un alivio inmediato del picor.' }
    ],
    faqs: [
      { question: '¿La sábila hace crecer el cabello más rápido?', answer: 'La sábila no altera la tasa genética máxima de crecimiento, pero al desobstruir los folículos y combatir la inflamación microbiana, evita la caída prematura y maximiza el grosor capilar.' },
      { question: '¿Puedo dejar la sábila en el cabello sin enjuagar?', answer: 'Sí, como gel fijador o humectante en las puntas, siempre que esté filtrado y no contenga fibras que dejen residuos blancos parecidos a la caspa.' },
      { question: '¿Es apta para cabello teñido?', answer: 'Sí, su pH ligeramente ácido (4.5) ayuda a cerrar la cutícula y retener el color por más tiempo.' }
    ],
    relatedSlugs: ['sabila-para-la-cara-toda-la-noche', 'como-quitar-la-aloina-de-la-sabila', 'como-saber-si-el-gel-de-sabila-es-puro']
  },
  {
    slug: 'como-saber-si-el-gel-de-sabila-es-puro',
    pillar: 'audits',
    title: 'Cómo Saber si el Gel de Sábila es Puro: La Prueba Casera del Yodo y Lista INCI',
    metaTitle: 'Cómo Saber si el Gel de Sábila es Puro o Falso: Prueba del Yodo',
    metaDescription: 'Aprende a identificar geles comerciales falsificados con la prueba de almidón y yodo. Detecta carbómeros sintéticos y verifica la certificación IASC.',
    publishedAt: '2025-02-18',
    updatedAt: '2025-02-22',
    readTimeMinutes: 7,
    authorId: 'formulation-desk',
    reviewedById: 'botanical-research-desk',
    badge: 'Auditoría de Pureza',
    directAnswer: 'Para saber si un gel de sábila comercial es puro: lee la lista INCI (el primer ingrediente debe ser "Aloe Barbadensis Leaf Juice", sin carbomer, trietanolamina ni colorantes artificiales) y realiza la prueba casera del yodo. Agrega 2 gotas de povidona yodada a una cucharada de gel: si se vuelve azul o morado oscuro, contiene espesantes de almidón sintético baratos; si se mantiene amarillento o aclara, es sábila pura bioactiva.',
    tableOfContents: [
      { id: 'el-escandalo-del-gel-falso', title: 'El Escándalo de los Geles "100% Puros" Falsos', level: 2 },
      { id: 'como-leer-la-etiqueta-inci', title: 'Ingredientes Tóxicos a Evitar en la Lista INCI', level: 2 },
      { id: 'la-prueba-del-yodo', title: 'La Prueba Científica del Yodo en Casa', level: 2 },
      { id: 'preguntas-frecuentes', title: 'Preguntas Frecuentes', level: 2 },
    ],
    htmlContent: `
      <section id="el-escandalo-del-gel-falso">
        <h2>El Escándalo de los Geles "100% Puros" Falsos</h2>
        <p>En el mercado de cosméticos, las marcas explotan vacíos regulatorios rotulando botellas como "100% Gel de Sábila", cuando en realidad contienen 98% de agua con polímeros plásticos (carbómeros), colorantes verdes (CI 19140 y CI 42090) y conservadores liberadores de formaldehído.</p>
        <p>El verdadero gel interior de sábila es <strong>completamente transparente</strong> (nunca verde brillante fluorescente) y tiene una consistencia fluida y acuosa que se absorbe al contacto con la piel.</p>
      </section>

      <section id="como-leer-la-etiqueta-inci">
        <h2>Ingredientes Tóxicos a Evitar en la Lista INCI</h2>
        <p>Revisa la parte posterior del envase. Si encuentras estos ingredientes, no estás comprando sábila pura:</p>
        <ul>
          <li><strong>Carbomer / Polyacrylate Crosspolymer:</strong> Espesantes sintéticos derivados del petróleo usados para dar textura viscosa artificial.</li>
          <li><strong>Triethanolamine (TEA):</strong> Ajustador de pH alcalino con potencial de formar nitrosaminas cancerígenas.</li>
          <li><strong>Fragrance / Parfum:</strong> Ftalatos sintéticos que causan irritación y alergias de contacto.</li>
        </ul>
      </section>

      <section id="la-prueba-del-yodo">
        <h2>La Prueba Científica del Yodo en Casa</h2>
        <p>Puedes verificar la pureza de tu gel en tu cocina con una botella de yodo o povidona yodada (antiséptico común):</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['iasc-standards-monograph-2020'],
      CLINICAL_STUDIES['acemannan-polysaccharides-femenia-1999']
    ],
    howToSteps: [
      { name: 'Paso 1: Colocar Gel en un Vaso Transparente', text: 'Pon una cucharada sopera del gel comercial en un vaso de vidrio transparente.' },
      { name: 'Paso 2: Agregar 2 Gotas de Yodo', text: 'Añade dos gotas de povidona yodada antiséptica directamente sobre el gel y revuelve con una cuchara limpia.' },
      { name: 'Paso 3: Interpretar la Reacción de Color', text: 'Si la mezcla vira a azul oscuro, morado o negro, el producto contiene almidón y espesantes falsificados; si permanece dorada o se aclara gradualmente, es sábila pura con poder reductor.' }
    ],
    faqs: [
      { question: '¿Por qué el gel de sábila comercial tiene conservadores?', answer: 'El gel 100% puro fresco se descompone en 24 horas por proliferación bacteriana. Un gel comercial de calidad debe contener conservadores alimentarios seguros como sorbato de potasio, benzoato de sodio y ácido cítrico.' },
      { question: '¿Qué certificación internacional garantiza la pureza?', answer: 'El sello del International Aloe Science Council (IASC) es el estándar de oro independiente que certifica que el producto contiene acemanano real sin adulteraciones.' },
      { question: '¿El color verde en un gel de sábila es natural?', answer: 'No. El cristal interno de la sábila es totalmente transparente e incoloro; cualquier gel comercial de color verde esmeralda contiene colorantes sintéticos añadidos.' }
    ],
    relatedSlugs: ['sabila-para-la-cara-toda-la-noche', 'como-quitar-la-aloina-de-la-sabila', 'sabila-para-el-cabello-y-caspa']
  }
];

export function getSpanishArticleBySlug(slug: string): Article | undefined {
  return SPANISH_ARTICLES.find(a => a.slug === slug);
}
