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
  age: string
  location: string
  photo: string
  profile: string[]
  keySkills: SkillGroup[]
  experience: Experience[]
  education: Education[]
  objective: string
  objectiveSalary: string
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
  age: '37 años.',
  location: 'Mercadela No. 77, Col. Lomas de San Miguel, Atizapán de Zaragoza, Estado de México, CP 52928',
  photo: '/cv/2026/photo.jpg',
  profile: [
    'Profesional versátil con más de 10 años de experiencia en desarrollo de software y diseño gráfico, integrando ambas disciplinas para crear soluciones tecnológicas robustas, visualmente atractivas y fáciles de usar.',
    'Experto en conceptualización, bocetaje, diseño de diagramas de flujo y bases de datos UML, así como en la planificación y seguimiento de proyectos con herramientas como Microsoft Project, Jira y GitHub Projects. Amplia experiencia en documentación técnica.',
    'Cuento con amplia experiencia en audio, video, edición de imagen, así como también en animación 2D y 3D.',
  ],
  keySkills: [
    {
      title: 'Desarrollo de software',
      skills: [
        'Lenguajes: HTML, CSS, JavaScript, C#, Python, SQL, Visual Basic.',
        'Bases de datos: PostgreSQL, SQL Server, Polyhedra ABB, MySQL.',
        'Desarrollo de sitios web, aplicaciones y sistemas HMI/SCADA (ABB, AVEVA).',
        'Plataformas cloud y DevOps: GitHub, Docker, Google Cloud.',
        'Sistemas operativos: Linux (Ubuntu, Debian, Kali), Windows Server y Pro, macOS, Android.',
      ],
    },
    {
      title: 'Diseño gráfico y 3D',
      skills: [
        'Edición vectorial y de imágenes, suite Adobe avanzada, diseño de interfaces (UI/UX).',
        'Modelado y renderizado 3D: Blender, AutoCAD, 3D Max, Inventor, Revit, SketchUp.',
        'Animación digital: Blender, After Effects, Inkscape, Gimp.',
        'Producción audiovisual: Adobe Premiere, After Effects, Ableton Live, Blender, Resolume (video mapping).',
        'Diseño arquitectónico: creación de planos arquitectónicos, eléctricos y técnicos en 2D y 3D.',
      ],
    },
    {
      title: 'Proyectos y protocolos',
      skills: [
        'Metodologías ágiles: Scrum, Kanban, Lean.',
        'Herramientas: Jira, Trello, Microsoft Project, GitHub Projects, n8n.',
        'Documentación técnica, diagramas de flujo y UML.',
        'Proyección mapping con Resolume Arena.',
        'Protocolos de audio/video: MIDI, Modbus, DMX, Ethernet.',
        'DAWs: Ableton Live, FL Studio, Presonus Studio, Bitwig.',
      ],
    },
  ],
  experience: [
    {
      company: 'Integraciones y Automatización HOH',
      role: 'Cadista / Desarrollador HMI/SCADA',
      period: 'nov. 2019 – jul. 2025',
      highlights: [
        'Desarrollé e implementé funciones clave en sistemas TMS-SCADA y el software HOH VOL para control volumétrico, mejorando la monitorización y gestión operativa del cliente y asegurando el cumplimiento normativo (CRE, anexos 30 y 31).',
        'Colaboré en la creación de gráficos y simbología oficial para software HMI/SCADA, integrando el diseño visual con la funcionalidad del sistema para optimizar la experiencia de usuario.',
        'Implementé control de versiones con GitHub, mejorando la gestión de código y la colaboración entre equipos mediante herramientas integradas de gestión de proyectos.',
        'Elaboré documentación técnica especializada (manuales de operación, guías de seguimiento), optimizando la eficiencia y la comunicación interna.',
        'Participé en la implementación de sistemas de supresión de gas y fuego, generando documentación (planos, diagramas) conforme a los estándares de Sempra, CFE y Pemex.',
      ],
    },
    {
      company: 'Grupo Addist (Levi\'s)',
      role: 'Auditor interno',
      period: 'may. 2018 – sept. 2018',
      highlights: [
        'Optimicé un sector de la base de datos, con scripts vbs y consultas SQL, logrando mayor precisión y eficiencia en el manejo de la información de inventario.',
        'Realicé a diario y dominé conteos cíclicos del inventario, demostrando habilidades prácticas en logística y gestión de datos.',
      ],
    },
    {
      company: 'Uber',
      role: 'Conductor',
      period: 'ene. 2015 – jul. 2017',
      highlights: [
        'Conduje por todo ese tiempo sin ningún percance. Manteniendo una buena calificación dentro de la aplicación.',
      ],
    },
    {
      company: 'Avantec Crisaludom',
      role: 'Proyectista de espacios',
      period: 'mar. 2013 – nov. 2014',
      highlights: [
        'Laboré como proyectista de cancelería, estructuras de acero inoxidable, cristal templado y aluminio. Además de la atención al cliente, gestión de personal y gestión de materiales en obra. También ayudé a elaborar catálogos de la empresa para publicación en la web.',
      ],
    },
    {
      company: 'D4 Reality',
      role: 'Gerente de sucursal / Instructor de cursos',
      period: 'abr. 2010 – may. 2012',
      highlights: [
        'Comencé como instructor de AutoCAD, 3D Max y Excel. Además de asistir con el mantenimiento a hardware y software, y apoyar con las actividades de marketing de la empresa.',
        'Impartí cursos: Photoshop I y II, Ilustrator I y II, Flash, Premiere, Dreamweaver, Corel Draw, Excel Básico y Avanzado, PowerPoint, AutoCAD I y II, 3D Max Studio I y II, Maya y 4 Diplomados en Diseño Gráfico.',
      ],
    },
    {
      company: 'Hercovi',
      role: 'Proyectista de espacios',
      period: 'sep. 2009 – abr. 2010',
      highlights: [
        'Diseñador gráfico, creación de diseños visuales, elaboración de presupuestos y supervisión de obras.',
        'Utilicé SketchUp y AutoCAD para diseño arquitectónico y cálculo de materiales, optimizando recursos y demostrando planificación de proyectos.',
        'Realicé visitas a sitios de construcción para levantamientos de avances, gestionando resurtido de materiales y coordinando personal.',
      ],
    },
    {
      company: 'Gateway Telecom',
      role: 'Ingeniero de servicio técnico',
      period: 'abr. 2008 – dic. 2008',
      highlights: [
        'Soporte técnico a flotillas de instalación en campo durante proyecto de migración de red cableada y equipos de hardware de Voz y Datos IMSS.',
        'Generé memorias técnicas con la ingeniería de cada sitio, especificaciones de equipos, cálculos otorgados por el área de ingeniería, planos estructurales y eléctricos de cada instalación asignada.',
      ],
    },
    {
      company: 'Gieicom',
      role: 'Auxiliar de ingeniería',
      period: 'jun. 2007 – mar. 2008',
      highlights: [
        'Revisión y almacenamiento de memorias técnicas, generación de manuales para las ingenierías de cada proyecto.',
        'Visita a instalaciones para levantamiento de datos y su captura digital. Manejo de AutoCAD y Excel para dibujo y organización de datos.',
      ],
    },
  ],
  education: [
    { title: 'Certificación en AutoCAD Electrical', institution: 'Univercad', year: '2025' },
    { title: 'Ingeniería en Desarrollo de Software', institution: 'UnADM', year: '2015–2017' },
    { title: 'Técnico en Diseño Gráfico', institution: 'CBT Tlalnepantla', year: '2003–2006' },
    { title: 'Diplomado en Diseño Gráfico', institution: 'D4 Reality', year: '2010–2012' },
    { title: 'Diplomado en Animación y Arte Digital', institution: 'D4 Reality', year: '2010–2012' },
  ],
  objective: 'Busco una posición remota que me permita aportar mi experiencia en desarrollo de software y diseño, colaborando con equipos multidisciplinarios y contribuyendo al crecimiento de la empresa mediante soluciones tecnológicas innovadoras y eficientes.',
  objectiveSalary: '$28,000 MXN brutos',
  social: {
    telegram: 'https://t.me/drqbeat',
    linkedin: 'https://linkedin.com/in/drqbeat',
    github: 'https://github.com/Hesvin-Molina',
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
      images: [],
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
      images: [],
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
      images: [],
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
      images: [],
    },
  ],
}

export default cv
