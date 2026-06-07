const glossaryData = [
    // --- BLOQUE 1: ARQUITECTURA DE SOFTWARE Y PATRONES ---
    {
        term: "Microservices",
        esp: "Microservicios",
        def: "An architectural style that structures an application as a collection of small, loosely coupled, and independently deployable services.",
        defEs: "Un estilo arquitectónico que estructura una aplicación como una colección de servicios pequeños, libremente acoplados y desplegables de forma independiente."
    },
    {
        term: "Design Patterns",
        esp: "Patrones de Diseño",
        def: "Reusable, formalized solutions to commonly occurring engineering problems within software design contexts.",
        defEs: "Soluciones formalizadas y reutilizables para problemas comunes que ocurren dentro del diseño de software."
    },
    {
        term: "Middleware",
        esp: "Sistemas intermedios / Conectores",
        def: "Software glue that provides common services and capabilities to applications outside of what the operating system offers.",
        defEs: "Software intermedio que actúa como puente para proporcionar servicios y capacidades comunes a las aplicaciones más allá del sistema operativo."
    },
    {
        term: "Load Balancing",
        esp: "Balanceo de Carga",
        def: "The methodical distribution of network or application traffic across multiple servers to optimize resource utilization.",
        defEs: "La distribución metódica del tráfico de red o de aplicaciones entre múltiples servidores para optimizar el uso de recursos."
    },
    {
        term: "Monolithic Architecture",
        esp: "Arquitectura Monolítica",
        def: "A traditional unified software development model where the entire application components are composed into a single program entity.",
        defEs: "Un modelo tradicional de desarrollo unificado donde todos los componentes de la aplicación se componen en una única entidad de programa."
    },
    {
        term: "Event-Driven",
        esp: "Orientado a Eventos",
        def: "A software architecture paradigm centered on the production, detection, and consumption of state mutations known as events.",
        defEs: "Un paradigma de arquitectura de software centrado en la producción, detección y consumo de mutaciones de estado conocidas como eventos."
    },
    {
        term: "Dependency Injection",
        esp: "Inyección de Dependencias",
        def: "A design pattern where an object receives its required sub-components from external sources rather than creating them internally.",
        defEs: "Un patrón de diseño donde un objeto recibe sus subcomponentes requeridos desde fuentes externas en lugar de crearlos internamente."
    },
    {
        term: "Concurrency",
        esp: "Concurrencia",
        def: "The ability of a system to execute multiple program logic flows or instruction sequences out-of-order without affecting the final outcome.",
        defEs: "La capacidad de un sistema para ejecutar múltiples flujos lógicos o secuencias de instrucciones de forma desordenada sin afectar el resultado."
    },
    {
        term: "State Management",
        esp: "Gestión de Estado",
        def: "The technical practice of tracking and synchronizing user interface data mutations across complex application views flow.",
        defEs: "La práctica técnica de rastrear y sincronizar las mutaciones de datos de la interfaz de usuario a través de flujos complejos de la aplicación."
    },
    {
        term: "Serverless",
        esp: "Sin servidor / Computación basada en funciones",
        def: "A cloud-native development model that allows developers to build and run applications without having to provision underlying servers.",
        defEs: "Un modelo de desarrollo nativo de la nube que permite construir y ejecutar aplicaciones sin tener que aprovisionar servidores físicos subyacentes."
    },

    // --- BLOQUE 2: GESTIÓN DE DATOS, SEGURIDAD Y RENDIMIENTO ---
    {
        term: "Data Sharding",
        esp: "Fragmentación de Datos",
        def: "A database architecture pattern that breaks up a single dataset across multiple database instances to boost transaction speeds.",
        defEs: "Un patrón de arquitectura que divide un único conjunto de datos entre múltiples instancias de bases de datos para aumentar la velocidad."
    },
    {
        term: "Encryption",
        esp: "Cifrado / Encriptación",
        def: "The technical process of converting plaintext data into unreadable ciphertext formats using mathematical keys for security.",
        defEs: "El proceso técnico de convertir datos de texto plano en formatos de texto cifrado ilegibles utilizando claves matemáticas por seguridad."
    },
    {
        term: "Caching",
        esp: "Almacenamiento en Caché",
        def: "The computing process of saving temporary copies of server responses in fast memory spaces to reduce database fetch actions.",
        defEs: "El proceso informático de guardar copias temporales de respuestas del servidor en memorias rápidas para reducir consultas a la base de datos."
    },
    {
        term: "Indexing",
        esp: "Indexación",
        def: "A database structure tuning mechanism that rapidly optimizes row retrieval operations by sorting reference indicators.",
        defEs: "Un mecanismo de ajuste de estructura de base de datos que optimiza rápidamente las operaciones de recuperación ordenando indicadores."
    },
    {
        term: "Rate Limiting",
        esp: "Limitación de Tasa / Control de tráfico",
        def: "A defensive network policy used to control the maximum volume of inbound API requests executed by a single user token.",
        defEs: "Política de red defensiva utilizada para controlar el volumen máximo de solicitudes entrantes ejecutadas por un único token de usuario."
    },
    {
        term: "Webhooks",
        esp: "Ganchos Web / Notificaciones automatizadas",
        def: "Automated real-time message packages sent from one application system to another when a trigger action occurs.",
        defEs: "Paquetes automáticos de mensajes en tiempo real enviados desde un sistema a otro cuando ocurre una acción de activación."
    },
    {
        term: "Authentication",
        esp: "Autenticación",
        def: "The critical engineering security mechanism utilized to verify the true identity profile parameters of an active software user.",
        defEs: "El mecanismo crítico de seguridad utilizado para verificar los parámetros de perfil de identidad verdaderos de un usuario de software."
    },
    {
        term: "Authorization",
        esp: "Autorización",
        def: "The validation rule process used to cross-check what specific access permissions an authenticated user possesses.",
        defEs: "El proceso de reglas de validación utilizado para verificar qué permisos de acceso específicos posee un usuario ya autenticado."
    },
    {
        term: "Data Serialization",
        esp: "Serialización de Datos",
        def: "The process of translating complex application memory object structures into flat stream formats like JSON or XML for network transit.",
        defEs: "El proceso de traducir estructuras complejas de objetos de memoria en formatos de flujo plano como JSON o XML para su tránsito por la red."
    },
    {
        term: "Idempotency",
        esp: "Idempotencia",
        def: "An API design property where making multiple identical system requests yields the exact same state outcome without duplication errors.",
        defEs: "Propiedad de diseño donde realizar múltiples solicitudes idénticas produce el mismo resultado de estado sin errores de duplicación."
    },

    // --- BLOQUE 3: METODOLOGÍAS Y DESARROLLO MODERNO ---
    {
        term: "Technical Debt",
        esp: "Deuda Técnica",
        def: "The long-term implied cost of choosing a quick, messy software code workaround instead of implementing a well-structured architectural fix.",
        defEs: "El costo implícito a largo plazo de elegir una solución de código rápida y desordenada en lugar de una solución bien estructurada."
    },
    {
        term: "Regression Testing",
        esp: "Pruebas de Regresión",
        def: "A quality validation process performed to verify that new code additions do not break pre-existing application modules.",
        defEs: "Un proceso de validación de calidad realizado para verificar que las nuevas adiciones de código no afecten módulos preexistentes."
    },
    {
        term: "Containerization",
        esp: "Contenedorización",
        def: "The process of packaging software logic along with its entire dependencies and configuration libraries into a single executable unit.",
        defEs: "El proceso de empaquetar la lógica de software junto con todas sus dependencias y librerías en una única unidad ejecutable."
    },
    {
        term: "Telemetry",
        esp: "Telemetría / Registro de métricas",
        def: "The automated recording and transmission of system execution metrics, errors, and health performance measurements from remote application instances.",
        defEs: "El registro automático y la transmisión de métricas de ejecución, errores y rendimiento desde instancias remotas de la aplicación."
    },
    {
        term: "Feature Flags",
        esp: "Interruptores de Características",
        def: "A deployment technique allowing engineering teams to toggle application features on or off remotely without redeploying code.",
        defEs: "Técnica de despliegue que permite activar o desactivar características de la aplicación de forma remota sin redesplegar código."
    },
    {
        term: "Code Review",
        esp: "Revisión de Código",
        def: "A collaborative practice where software engineers examine each other's code additions to catch logical errors and maintain code standards.",
        defEs: "Práctica colaborativa donde ingenieros examinan el código de otros para detectar errores y mantener estándares de calidad."
    },
    {
        term: "Polymorphism",
        esp: "Polimorfismo",
        def: "An object-oriented programming concept enabling distinct entity data structures to be handled through a single unified interface template.",
        defEs: "Concepto de programación orientada a objetos que permite manejar distintas estructuras de datos a través de una interfaz unificada."
    },
    {
        term: "Continuous Profiling",
        esp: "Perfilado Continuo",
        def: "The real-time operational logging of application memory footprints and processor cycles to systematically isolate hidden script bottlenecks.",
        defEs: "El registro operativo en tiempo real del uso de memoria y ciclos de procesamiento para aislar cuellos de botella ocultos."
    },
    {
        term: "Mock Objects",
        esp: "Objetos Simulados",
        def: "Simulated software components created to mimic the logical operations of real, complex database dependencies during verification environments.",
        defEs: "Componentes de software simulados creados para imitar las operaciones lógicas de dependencias reales durante entornos de pruebas."
    },
    {
        term: "Scrum Master",
        esp: "Facilitador de Metodología Scrum",
        def: "The specialized delivery role responsible for ensuring a project agile team removes roadblocks and adheres to agile project standards.",
        defEs: "El rol especializado encargado de garantizar que el equipo elimine obstáculos y se adhiera a las prácticas del proyecto ágil."
    }
];

const translations = {
    es: {
        "nav-home": "Inicio",
        "nav-events": "Conferencias",
        "nav-glossary": "Glosario",
        "nav-ethics": "Reflexión Ética",
        "hero-title": "Colombia 5.0",
        "hero-subtitle": "El Futuro de la Tecnología y el Desarrollo de Software",
        "hero-desc": "Una plataforma informativa y reflexiva dedicada a explorar los avances de la industria tecnológica, la automatización inteligente, los sistemas de diseño de interfaces de videojuegos y los pilares éticos de la ingeniería moderna.",
        "hero-btn-1": "Ver Conferencias",
        "hero-btn-2": "Explorar Glosario",
        "conf-section-title": "Conferencias y Talleres Asignados",
        "abstract-label": "Resumen y Reflexión Técnica:",
        "keywords-label": "Palabras Clave:",
        "gallery-label": "Galería de Evidencias:",
        "th-def": "Definición / Explicación",
        "glossary-title": "Glosario Técnico (Inglés - Español)",
        "glossary-desc": "Glosario de términos técnicos recopilados y analizados durante las ponencias de Colombia 5.0.",
        "ethics-title": "Conclusión y Reflexión Ética en la Tecnología Empresarial",
        "ethics-p1": "Los avances presentados en el evento Colombia 5.0 nos demuestran que como futuros Analistas y Desarrolladores de Software del SENA, nuestro trabajo va más allá de compilar código. Tenemos la responsabilidad de construir soluciones digitales que impacten de forma positiva y ética a la sociedad.",
        "conf1-title": "Conferencia 1: Inteligencia Artificial y Automatización en Procesos de Software",
        "conf1-abstract": "En esta ponencia analizamos cómo la Inteligencia Artificial está transformando la forma en que escribimos y probamos el código. Como aprendices de ADSO, vemos que la IA no reemplaza al desarrollador, sino que optimiza el ciclo de vida del software (SDLC). Aprendimos sobre herramientas que automatizan el despliegue y la generación de pruebas unitarias, lo que nos obliga a enfocarnos más en la lógica de negocio, el análisis de requerimientos y la arquitectura limpia, asegurando entregas más rápidas y con menos errores.",
        "conf1-keywords": "Automatización, Ciclo de Vida del Software, Inteligencia Artificial, Pruebas Unitarias, Optimización",
        "conf2-title": "Conferencia 2: Arquitectura de Interfaces y Experiencia de Usuario (UX/UI)",
        "conf2-abstract": "Esta sesión se enfocó en la importancia del diseño de interfaces funcionales antes de tirar la primera línea de código. Entendimos que el desarrollo frontend no es solo estética, sino accesibilidad y usabilidad. Evaluamos metodologías para crear mockups eficientes y sistemas de diseño escalables que facilitan la comunicación entre los diseñadores y el equipo de desarrollo. Un buen software debe resolver las necesidades del cliente final de la manera más intuitiva y fluida posible.",
        "conf2-keywords": "Experiencia de Usuario, Frontend, Interfaz Gráfica, Accesibilidad, Mockups",
        "eth-h1": "Seguridad y Privacidad de los Datos",
        "eth-d1": "Al diseñar bases de datos y sistemas de información, la protección de los datos de los usuarios debe ser una prioridad desde el diseño. Debemos evitar prácticas que vulneren la información confidencial de los clientes y garantizar que el manejo del backend cumpla con las normativas vigentes de seguridad y derechos digitales.",
        "eth-h2": "Transparencia Algorítmica",
        "eth-d2": "La automatización y el uso de scripts inteligentes deben ser claros y auditables. Como desarrolladores, no podemos permitir que los sistemas tomen decisiones sesgadas que excluyan o discriminen a los usuarios. El software debe operar de manera justa, clara y siempre bajo supervisión humana.",
        "eth-h3": "Impacto Social y Accesibilidad",
        "eth-d3": "Las aplicaciones que construimos alteran el comportamiento diario de las personas. Por ello, debemos rechazar los patrones oscuros (dark patterns) diseñados para engañar al usuario y, en su lugar, priorizar interfaces inclusivas que permitan el acceso a personas con diferentes tipos de discapacidades.",
        "eth-sh": "Responsabilidad Profesional del Desarrollador (SENA)",
        "eth-sd": "La ingeniería de software no es una disciplina meramente técnica; es un acto social estructurado. Cada línea de código, cada modelo de IA automatizado y cada arquitectura de base de datos implementada debe ser auditable, inclusiva y transparente, garantizando que el progreso técnico empresarial esté intrínsecamente subordinado al bienestar humano y al código de ética profesional."
    },
    en: {
        "nav-home": "Home",
        "nav-events": "Conferences",
        "nav-glossary": "Glossary",
        "nav-ethics": "Ethical Reflection",
        "hero-title": "Colombia 5.0",
        "hero-subtitle": "The Future of Technology and Software Development",
        "hero-desc": "An informative and analytical framework dedicated to exploring breakthrough industrial technology, smart automation, gaming user interface design, and the ethical cornerstones of modern engineering.",
        "hero-btn-1": "View Conferences",
        "hero-btn-2": "Explore Glossary",
        "conf-section-title": "Assigned Conferences and Workshops",
        "abstract-label": "Technical Abstract & Reflection:",
        "keywords-label": "Keywords:",
        "gallery-label": "Evidence Gallery:",
        "th-def": "Definition / Explanation",
        "glossary-title": "Technical Glossary (English - Spanish)",
        "glossary-desc": "Glossary of technical terms compiled and analyzed during the Colombia 5.0 conferences.",
        "ethics-title": "Conclusion and Ethical Reflection in Corporate Technology",
        "ethics-p1": "The technological breakthroughs showcased at the Colombia 5.0 event demonstrate that as future SENA Software Analysts and Developers, our professional scope goes far beyond compiling code. We hold the responsibility to build digital solutions that impact society in a constructive and ethical manner.",
        "conf1-title": "Conference 1: Artificial Intelligence and Automation in Software Processes",
        "conf1-abstract": "This keynote analyzed how Artificial Intelligence is transforming code writing and software quality assurance. As ADSO trainees, we understand that AI does not replace developers; instead, it optimizes the Software Development Life Cycle (SDLC). We discovered tools that automate system deployment and unit testing generation, which enables us to shift our focus towards business logic, requirements analysis, and clean architecture, resulting in faster delivery times and minimized bugs.",
        "conf1-keywords": "Automation, Software Life Cycle, Artificial Intelligence, Unit Testing, Optimization",
        "conf2-title": "Conference 2: Interface Architecture and User Experience (UX/UI)",
        "conf2-abstract": "This session focused on the critical role of crafting functional interface architectures before writing the first line of code. We recognized that frontend development is not merely about aesthetics, but heavily relies on web accessibility and usability standards. We evaluated methodologies to build efficient mockups and scalable design systems that bridge the gap between UI designers and engineering teams. High-quality software must fulfill end-user needs seamlessly and intuitively.",
        "conf2-keywords": "User Experience, Frontend, Graphical Interface, Accessibility, Mockups",
        "eth-h1": "Data Security and Privacy",
        "eth-d1": "When architecting databases and information systems, protecting user data must be a top priority right from the design phase. We must avoid development practices that compromise sensitive customer records and ensure that backend architectures strictly adhere to current cybersecurity standards and digital rights.",
        "eth-h2": "Algorithmic Transparency",
        "eth-d2": "Automation systems and intelligent scripts must remain transparent and completely auditable. As software professionals, we cannot allow systems to execute biased decisions that discriminate against users. Software should operate fairly, transparently, and always under human oversight.",
        "eth-h3": "Social Impact and Accessibility",
        "eth-d3": "The applications we develop shape human behavior and daily workflows. Consequently, we must reject dark patterns intended to deceive individuals and instead focus on inclusive user interfaces that guarantee accessibility for individuals with diverse disabilities.",
        "eth-sh": "Professional Responsibility of the Developer (SENA)",
        "eth-sd": "Software engineering is not merely a technical field; it is a highly structured social act. Every line of code, automated AI system, and database deployment must be fully auditable, inclusive, and transparent, ensuring that corporate technical advancement remains closely aligned with human welfare and professional ethical codes."
    }
};

let currentLang = "es";

document.addEventListener("DOMContentLoaded", () => {
    buildGlossary();
    updateLanguage();

    const langBtn = document.getElementById("lang-toggle");
    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "es" ? "en" : "es";
        updateLanguage();
    });
});

function buildGlossary() {
    const tbody = document.getElementById("glossary-body");
    tbody.innerHTML = "";
    
    glossaryData.forEach(item => {
        const row = document.createElement("tr");
        
        const tdTerm = document.createElement("td");
        tdTerm.textContent = item.term;
        
        const tdEsp = document.createElement("td");
        tdEsp.textContent = item.esp;
        
        const tdDef = document.createElement("td");
        tdDef.textContent = currentLang === "es" ? item.defEs : item.def;
        
        row.appendChild(tdTerm);
        row.appendChild(tdEsp);
        row.appendChild(tdDef);
        tbody.appendChild(row);
    });
}

function updateLanguage() {
    const elementsToTranslate = document.querySelectorAll("[data-key]");
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute("data-key");
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    const langText = document.getElementById("lang-text");
    langText.textContent = currentLang === "es" ? "English" : "Español";

    const rows = document.querySelectorAll("#glossary-body tr");
    if (rows.length > 0) {
        glossaryData.forEach((item, index) => {
            const defCell = rows[index].querySelectorAll("td")[2];
            if (defCell) {
                defCell.textContent = currentLang === "es" ? item.defEs : item.def;
            }
        });
    }
}