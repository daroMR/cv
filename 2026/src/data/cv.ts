export interface Experience {
  company: string
  role: string
  period: string
  highlights: string[]
}

export interface Education {
  title: string
  institution: string
  year: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  problem: string
  approach: string
  result: string
  tech: string[]
  images: string[]
}

export interface CVData {
  name: string
  title: string
  tagline: string
  phone: string
  email: string
  website: string
  location: string
  photo: string
  profile: string[]
  keySkills: SkillGroup[]
  experience: Experience[]
  education: Education[]
  objective: string
  social: {
    telegram: string
    linkedin: string
    github: string
  }
  projects: Project[]
}

const cv: CVData = {
  name: 'Hesvin Dario Molina Rios',
  title: 'Desarrollador de Software | Diseñador Gráfico',
  tagline: 'Creative Technologist — 10+ años integrando código, diseño y 3D',
  phone: '56 6158 1154',
  email: 'drqbeat@gmail.com',
  website: 'https://daromr.github.io/cv/',
  location: 'Atizapán de Zaragoza, Estado de México',
  photo: '/cv/2026/photo.jpg',
  profile: [
    'Creative Technologist y Desarrollador Fullstack con +10 años de experiencia uniendo código, diseño y 3D. Especializado en crear soluciones tecnológicas que son robustas en el backend y visualmente impactantes en el frontend.',
    'Experto en ciclo de vida del software (Agile, Jira, Git), bases de datos y desarrollo de interfaces complejas (HMI/SCADA, React, WebGL).',
    'Aporto un valor único al equipo combinando lógica de programación con una profunda sensibilidad estética (UX/UI, modelado 3D, animación).',
  ],
  keySkills: [
    {
      title: 'Frontend & Web',
      skills: [
        'React, Next.js, Vite, TypeScript, JavaScript (ES6+)',
        'TailwindCSS, CSS3, HTML5, Diseño UI/UX y Web Responsivo',
        'Experiencias interactivas: Three.js, WebGL, GSAP',
      ],
    },
    {
      title: 'Backend & Sistemas',
      skills: [
        'Bases de datos: PostgreSQL, SQL Server, Supabase',
        'Lenguajes: Python, C#, SQL',
        'Sistemas SCADA/HMI y protocolos industriales (Modbus)',
        'DevOps y SO: Git/GitHub, Docker, Linux, Windows Server',
      ],
    },
    {
      title: 'Diseño, 3D & Multimedia',
      skills: [
        'Modelado y Animación 3D: Blender, AutoCAD, Unity',
        'Diseño Gráfico y UI: Figma, Suite Adobe (Illustrator, Photoshop)',
        'Producción Audiovisual y Mapping: Premiere, After Effects, Resolume',
      ],
    },
    {
      title: 'Gestión y Metodologías',
      skills: [
        'Metodologías Ágiles (Scrum, Kanban)',
        'Documentación técnica, arquitectura de software y diagramas UML',
      ],
    },
  ],
  experience: [
    {
      company: 'Integraciones y Automatización HOH',
      role: 'Desarrollador HMI/SCADA y Frontend',
      period: 'nov. 2019 – jul. 2025',
      highlights: [
        'Desarrollé software clave para sistemas TMS-SCADA, asegurando cumplimiento normativo estricto (CRE, anexos 30 y 31) en la industria energética.',
        'Diseñé interfaces gráficas avanzadas (HMI) uniendo funcionalidad crítica y diseño de usuario (UI/UX) para optimizar el monitoreo operativo en tiempo real.',
        'Lideré la migración y gestión de código con Git/GitHub, impulsando mejores prácticas ágiles.',
        'Elaboré documentación técnica de alto nivel (diagramas, manuales) bajo estándares de entidades como Pemex y CFE.',
      ],
    },
    {
      company: 'Grupo Addist (Levi\'s)',
      role: 'Analista de Base de Datos y Auditor Interno',
      period: 'may. 2018 – sept. 2018',
      highlights: [
        'Desarrollé scripts VBS y consultas SQL complejas para optimizar la base de datos de inventario.',
        'Mejoré drásticamente la precisión logística y reduje tiempos de respuesta en el manejo de información a gran escala.',
      ],
    },
    {
      company: 'Avantec Crisaludom',
      role: 'Proyectista y Gestor Web',
      period: 'mar. 2013 – nov. 2014',
      highlights: [
        'Lideré proyectos de diseño estructural (AutoCAD) manejando el ciclo completo: desde diseño hasta la gestión de personal en obra.',
        'Digitalicé el catálogo de la empresa para plataformas web, mejorando la presencia de marca.',
      ],
    },
    {
      company: 'D4 Reality',
      role: 'Gerente de Sucursal e Instructor Técnico',
      period: 'abr. 2010 – may. 2012',
      highlights: [
        'Dirigí la operatividad técnica de la sucursal y coordiné estrategias de marketing.',
        'Impartí más de 15 cursos avanzados en tecnologías de diseño y desarrollo: HTML/Web, 3D Max, AutoCAD, Adobe Suite, formando a cientos de alumnos.',
      ],
    },
    {
      company: 'Hercovi / Gateway Telecom / Gieicom',
      role: 'Diseñador 3D, Soporte IT y Proyectista',
      period: '2007 – 2010',
      highlights: [
        'Diseño arquitectónico 3D e interfaces de presentación de proyectos comerciales.',
        'Soporte técnico y migración de infraestructura de Voz/Datos (ej. Proyecto IMSS).',
        'Elaboración de planos y memorias técnicas digitales con AutoCAD y herramientas afines.',
      ],
    },
  ],
  education: [
    { title: 'Certificación en AutoCAD Electrical', institution: 'Univercad', year: '2025' },
    { title: 'Ingeniería en Desarrollo de Software', institution: 'UnADM', year: '2015–2017' },
    { title: 'Diplomado en Diseño Gráfico', institution: 'D4 Reality', year: '2010–2012' },
    { title: 'Diplomado en Animación y Arte Digital', institution: 'D4 Reality', year: '2010–2012' },
    { title: 'Técnico en Diseño Gráfico', institution: 'CBT Tlalnepantla', year: '2003–2006' },
  ],
  objective: 'Desarrollador enfocado en construir experiencias digitales de alto impacto. Busco una posición remota como Frontend, Fullstack o Creative Developer, donde pueda capitalizar mi habilidad única de fusionar ingeniería de software robusta, bases de datos y visualización 3D interactiva para crear productos que destaquen en el mercado.',
  social: {
    telegram: 'https://t.me/drqbeat',
    linkedin: 'https://linkedin.com/in/drqbeat',
    github: 'https://github.com/daroMR',
  },
  projects: [
    {
      id: 'hmi-scada-hoh',
      title: 'Sistema HMI/SCADA HOH VOL',
      category: 'Desarrollo Industrial',
      description: 'Desarrollo de funciones clave para control volumétrico en sistemas TMS-SCADA.',
      problem: 'El cliente necesitaba mejorar la monitorización y gestión operativa cumpliendo normativa CRE (anexos 30 y 31).',
      approach: 'Implementé nuevas funciones en el software HOH VOL, creé simbología oficial y gráficos HMI/SCADA integrando diseño visual con funcionalidad del sistema.',
      result: 'Sistema conforme a estándares Sempra, CFE y Pemex. Documentación técnica completa entregada.',
      tech: ['SCADA', 'HMI', 'GitHub', 'SQL', 'ABB'],
      images: ['/cv/galeria/HMI_01 - Blender - Photoshop.png', '/cv/galeria/HMI_02 - Blender - photoshop.png', '/cv/galeria/HMI_Scada01 - Blender - Photoshop.gif'],
    },
    {
      id: 'fractal-tree-3d',
      title: 'Árbol Fractal 3D Interactivo',
      category: 'WebGL / Three.js',
      description: 'Showcase interactivo de árbol fractal 3D generado proceduralmente con Three.js.',
      problem: 'Crear una pieza visual interactiva que represente el proceso creativo como metáfora de ramificación.',
      approach: 'Generación procedural de geometría fractal con Three.js, controles de órbita y animación de crecimiento progresivo.',
      result: 'Demo interactiva en vivo con partículas atmosféricas y transiciones de color de tronco a hojas.',
      tech: ['Three.js', 'JavaScript', 'HTML', 'CSS'],
      images: ['/cv/galeria/Splash - Blender - Gimp.png', '/cv/galeria/Triptico - Blender - Photoshop.png'],
    },
    {
      id: 'unity-showreel',
      title: 'Unity Showreel Interactivo',
      category: 'Unity WebGL',
      description: 'Showreel 3D interactivo construido en Unity y exportado a WebGL.',
      problem: 'Necesitaba una forma inmersiva de mostrar habilidades de modelado 3D y desarrollo en Unity.',
      approach: 'Construí una escena 3D navegable en Unity con assets propios modelados en Blender.',
      result: 'Experiencia WebGL embedida en el portafolio, accesible desde cualquier navegador.',
      tech: ['Unity', 'WebGL', 'Blender', 'C#'],
      images: ['/cv/galeria/Patin_01 - Blender.gif', '/cv/galeria/wall - 3DMax.jpg'],
    },
    {
      id: 'arredotours',
      title: 'ArredoTours',
      category: 'Transporte & Turismo',
      description: 'Plataforma de transporte turístico de lujo con reservas en línea, gestión de flota y comunicación por WhatsApp.',
      problem: 'El cliente requería digitalizar su servicio de transportación turística VIP con un sistema ágil que permitiera cotizaciones y reservas instantáneas directamente enlazadas con los conductores.',
      approach: 'Diseñé y desarrollé una aplicación web (SPA) robusta utilizando Next.js y Supabase para almacenamiento y base de datos, integrando la API de WhatsApp para notificaciones en tiempo real.',
      result: 'Automatización del flujo de reservas, logrando un aumento del 35% en reservas exitosas y reduciendo los tiempos de respuesta al cliente a cero.',
      tech: ['Next.js', 'Supabase', 'WhatsApp API', 'TailwindCSS'],
      images: ['/cv/galeria/arredotours_mockup.png'],
    },
    {
      id: 'optisa',
      title: 'OPTISA',
      category: 'Software Corporativo',
      description: 'Sistema empresarial de gestión de proyectos corporativos, seguimiento de tareas, control documental y métricas de rendimiento.',
      problem: 'Falta de centralización y trazabilidad en el seguimiento de hitos de proyectos de ingeniería, lo cual dispersaba la documentación técnica y dificultaba calcular las métricas de rendimiento.',
      approach: 'Desarrollé un sistema a medida utilizando Next.js y PostgreSQL, diseñando una interfaz moderna (glassmorphism) y un módulo de autenticación seguro de roles para control de acceso.',
      result: 'Centralización total de la documentación, mejorando la colaboración entre departamentos y reduciendo los tiempos de reporte interno en un 40%.',
      tech: ['Next.js', 'PostgreSQL', 'Auth', 'TailwindCSS'],
      images: ['/cv/galeria/optisa_mockup.png'],
    },
    {
      id: 'velo-arq',
      title: 'VELO Arquitectura',
      category: 'Arquitectura & Diseño',
      description: 'Portal institucional interactivo premium para despacho de arquitectura contemporánea de alta gama.',
      problem: 'La marca necesitaba proyectar una imagen ultra premium, minimalista y sofisticada para atraer clientes corporativos y residenciales de alto perfil.',
      approach: 'Diseñé e implementé la interfaz utilizando Next.js, incorporando micro-animaciones fluidas controladas por scroll mediante GSAP y un diseño de rejilla CSS ultra responsivo.',
      result: 'Conversión de leads cualificados incrementada en un 25% y una experiencia digital inmersiva que destaca la fotografía arquitectónica del despacho.',
      tech: ['Next.js', 'GSAP', 'CSS Grid', 'TailwindCSS'],
      images: ['/cv/galeria/velo_mockup.png'],
    },
    {
      id: 'cv-portfolio-2026',
      title: 'CV/Portafolio v2026',
      category: 'React / Frontend',
      description: 'Rediseño del CV y portafolio como SPA moderna con React, Three.js y TailwindCSS.',
      problem: 'El sitio anterior era HTML estático. Necesitaba demostrar habilidades modernas de React/TypeScript.',
      approach: 'Arquitectura SPA con React 19, Vite, TypeScript, 3 temas de color, 3D sutil con R3F.',
      result: 'Sitio imprimible vía CSS print + PDF descargable, con 3 temas seleccionables y animaciones sutiles.',
      tech: ['React', 'TypeScript', 'Vite', 'Three.js', 'TailwindCSS'],
      images: ['/cv/galeria/Logo_01 - 3DMax - Gimp.png', '/cv/galeria/Publicidad_01 - Blender.png'],
    },
  ],
}

export default cv
