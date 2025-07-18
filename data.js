// data.js
const coursesData = [
    // CICLO 1
    // Semestre 1
    { id: 1, name: "Fundamentos de la medicina", semester: 1, prerequisites: [], area: "Básica", approved: false, grade: null, description: "Introduce los principios fundamentales y el contexto de la medicina." },
    { id: 2, name: "Biología molecular y genética", semester: 1, prerequisites: [], area: "Básica", approved: false, grade: null, description: "Estudio de las bases moleculares y genéticas de la vida y la herencia." },
    { id: 3, name: "Fundamentos de la química", semester: 1, prerequisites: [], area: "Básica", approved: false, grade: null, description: "Principios básicos de la química relevante para las ciencias de la salud." },
    { id: 4, name: "Anatomía humana I", semester: 1, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Estudio de la estructura macroscópica del cuerpo humano, primera parte." },
    { id: 5, name: "Psicología para la atención en salud", semester: 1, prerequisites: [], area: "Básica", approved: false, grade: null, description: "Conceptos psicológicos aplicados al cuidado y la relación con el paciente." },
    { id: 6, name: "Asignatura transversal", semester: 1, prerequisites: [], area: "Básica", approved: false, grade: null, description: "Curso común a varias carreras para desarrollar habilidades generales." },

    // Semestre 2
    { id: 7, name: "Fisiología médica I", semester: 2, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Primera parte del estudio de las funciones y mecanismos del cuerpo humano." },
    { id: 8, name: "Histoembriología I", semester: 2, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Estudio microscópico de tejidos (histología) y desarrollo embrionario, primera parte." },
    { id: 9, name: "Anatomía humana II", semester: 2, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Continuación del estudio de la estructura macroscópica del cuerpo humano." },
    { id: 10, name: "Psicología en el curso de la vida", semester: 2, prerequisites: [], area: "Básica", approved: false, grade: null, description: "Desarrollo psicológico a lo largo de las diferentes etapas de la vida." },
    { id: 11, name: "Salud y sociedad", semester: 2, prerequisites: [], area: "Básica", approved: false, grade: null, description: "Análisis de la salud en su contexto social, cultural y económico." },

    // Semestre 3
    { id: 12, name: "Fisiología médica II", semester: 3, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Segunda parte del estudio de las funciones y mecanismos del cuerpo humano." },
    { id: 13, name: "Integrado de patología morfofuncional I", semester: 3, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Estudio integrado de las alteraciones de forma y función en las enfermedades, primera parte." },
    { id: 14, name: "Inmunología e Inmunización", semester: 3, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Principios de la inmunología y la importancia de la vacunación." },
    { id: 15, name: "Neurociencias", semester: 3, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Estudio del sistema nervioso y sus funciones." },
    { id: 16, name: "Métodos de Investigación en salud y bioestadística aplicada", semester: 3, prerequisites: [], area: "Básica", approved: false, grade: null, description: "Herramientas para el diseño de investigación y análisis estadístico en salud." },
    { id: 17, name: "Electivo 1", semester: 3, prerequisites: [], area: "Electiva", approved: false, grade: null, description: "Curso a elección del estudiante." },

    // Semestre 4
    { id: 18, name: "Integrado de patología morfofuncional II", semester: 4, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Segunda parte del estudio integrado de las alteraciones de forma y función en las enfermedades." },
    { id: 19, name: "Agentes infecciosos I", semester: 4, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Estudio de microorganismos patógenos y enfermedades infecciosas, primera parte." },
    { id: 20, name: "Farmacología I", semester: 4, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Principios de la acción de los fármacos, primera parte." },
    { id: 21, name: "Salud pública y epidemiología", semester: 4, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Conceptos de salud pública y estudio de la distribución de enfermedades en poblaciones." },
    { id: 22, name: "Electivo 2", semester: 4, prerequisites: [], area: "Electiva", approved: false, grade: null, description: "Curso a elección del estudiante." },

    // Semestre 5
    { id: 23, name: "Semiología I", semester: 5, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Introducción a los métodos de exploración clínica y la interpretación de síntomas y signos, primera parte." },
    { id: 24, name: "Agentes infecciosos II", semester: 5, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Continuación del estudio de microorganismos patógenos y enfermedades infecciosas." },
    { id: 25, name: "Farmacología II", semester: 5, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Segunda parte de los principios de la acción de los fármacos y su uso clínico." },
    { id: 26, name: "Nutrición clínica", semester: 5, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Principios de la nutrición aplicada al manejo de enfermedades y la salud." },
    { id: 27, name: "Electivo 3", semester: 5, prerequisites: [], area: "Electiva", approved: false, grade: null, description: "Curso a elección del estudiante." },

    // Semestre 6
    { id: 28, name: "Semiología II", semester: 6, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Continuación del desarrollo de habilidades de semiología, con casos clínicos más complejos." },
    { id: 29, name: "Métodos de diagnóstico clínico", semester: 6, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Estudio de las diferentes pruebas y procedimientos diagnósticos en la práctica médica." },
    { id: 30, name: "Salud basada en la evidencia", semester: 6, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Aplicación de la mejor evidencia científica disponible en la toma de decisiones clínicas." },
    { id: 31, name: "Gestión en sistemas de salud", semester: 6, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Principios de gestión y administración aplicados a los sistemas de atención de salud." },
    { id: 32, name: "Electivo 4", semester: 6, prerequisites: [], area: "Electiva", approved: false, grade: null, description: "Curso a elección del estudiante." },

    // Semestre 7
    { id: 33, name: "Atención Primaria y alta prevalencia", semester: 7, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Enfoque en la atención de salud en el primer nivel y enfermedades comunes en la población." },
    { id: 34, name: "Medicina interna I", semester: 7, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Estudio de las enfermedades internas en adultos, primera parte." },
    { id: 35, name: "Cirugía", semester: 7, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Principios de las intervenciones quirúrgicas." },
    { id: 36, name: "Neurología", semester: 7, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Estudio de las enfermedades del sistema nervioso." },
    { id: 37, name: "Ginecología y obstetricia", semester: 7, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Salud de la mujer, reproducción, embarazo y parto." },
    { id: 38, name: "Electivo 5", semester: 7, prerequisites: [], area: "Electiva", approved: false, grade: null, description: "Curso a elección del estudiante." },

    // Semestre 8
    { id: 39, name: "Medicina interna II", semester: 8, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Continuación del estudio de las enfermedades internas en adultos." },
    { id: 40, name: "Pediatría, traumatología y cirugía infantil", semester: 8, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Atención médica en niños y aspectos de traumatología y cirugía pediátrica." },
    { id: 41, name: "Psiquiatría Infanto-juvenil y del adulto I", semester: 8, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Estudio de los trastornos mentales en niños, adolescentes y adultos, primera parte." },
    { id: 42, name: "Medicina legal", semester: 8, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Aplicación de conocimientos médicos a cuestiones legales." },
    { id: 43, name: "Bioética", semester: 8, prerequisites: [], area: "Básica", approved: false, grade: null, description: "Análisis de los dilemas éticos en la práctica médica." },
    { id: 44, name: "Inteligencia artificial aplicada a la salud", semester: 8, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Exploración de cómo la IA puede mejorar el diagnóstico, tratamiento y gestión en medicina." },

    // Semestre 9 (LICENCIADO(A) EN MEDICINA)
    { id: 45, name: "Medicina aplicada I", semester: 9, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Aplicación práctica de conocimientos médicos en situaciones clínicas." },
    { id: 46, name: "Especialidades médicas I", semester: 9, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Introducción a diversas especialidades de la medicina, primera parte." },
    { id: 47, name: "Oncología y cuidados paliativos", semester: 9, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Manejo del cáncer y atención para mejorar la calidad de vida de pacientes con enfermedades graves." },
    { id: 48, name: "Psiquiatría Infanto-juvenil y del adulto II", semester: 9, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Continuación del estudio de los trastornos mentales." },
    { id: 49, name: "Internado electivo I", semester: 9, prerequisites: [], area: "Electiva", approved: false, grade: null, description: "Internado en un área de elección del estudiante." }, // Asumiendo que pueden ser electivos aquí.

    // Semestre 10
    { id: 50, name: "Medicina aplicada II", semester: 10, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Continuación de la aplicación práctica de conocimientos médicos en situaciones clínicas." },
    { id: 51, name: "Especialidades médicas II", semester: 10, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Continuación de la introducción a diversas especialidades médicas." },
    { id: 52, name: "Internado electivo II", semester: 10, prerequisites: [], area: "Electiva", approved: false, grade: null, description: "Internado en un área de elección del estudiante." },

    // Semestre 11
    { id: 53, name: "Especialidades médicas III", semester: 11, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Continuación de la introducción a diversas especialidades médicas." },
    { id: 54, name: "Internado de medicina interna", semester: 11, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Práctica clínica intensiva en medicina interna." },
    { id: 55, name: "Internado de pediatría", semester: 11, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Práctica clínica intensiva en pediatría." },
    { id: 56, name: "Internado de cirugía", semester: 11, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Práctica clínica intensiva en cirugía." },
    { id: 57, name: "Internado de psiquiatría", semester: 11, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Práctica clínica intensiva en psiquiatría." },

    // Semestre 12
    { id: 58, name: "Internado de atención primaria", semester: 12, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Práctica clínica intensiva en atención primaria de salud." },
    { id: 59, name: "Internado de urgencia", semester: 12, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Práctica clínica intensiva en servicios de urgencia." },
    { id: 60, name: "Internado de salud en persona mayor", semester: 12, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Práctica clínica intensiva en geriatría y salud del adulto mayor." },
    { id: 61, name: "Internado de obstetricia y ginecología", semester: 12, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Práctica clínica intensiva en ginecología y obstetricia." },
    { id: 62, name: "Internado electivo III", semester: 12, prerequisites: [], area: "Electiva", approved: false, grade: null, description: "Internado en un área de elección del estudiante." },

    [cite_start]// Semestre 13 - Los internados son rotativos anuales, según el PDF[cite: 92].
    // Los internados a partir del semestre 11 se consideran anuales.
    // Para propósitos de la malla, si se muestra en un semestre, se asume que se cursa en ese periodo.
    [cite_start]// El PDF no detalla semestres 13 y 14 con ramos específicos, solo "Integración para la práctica profesional"[cite: 98].
    // Mantendremos 12 semestres para los ramos explícitos.
    // Si se necesita modelar los semestres 13 y 14, se pueden añadir como contenedores vacíos o con "Integración..."

    [cite_start]// Asignatura "Integración para la práctica profesional" [cite: 98] no tiene semestre específico en el PDF,
    // pero se asume es al final, previo al título.
    { id: 63, name: "Integración para la práctica profesional", semester: 12, prerequisites: [], area: "Disciplinar", approved: false, grade: null, description: "Preparación final para la práctica profesional, integrando todos los conocimientos." }

    // Consideré 12 semestres como máximo basándome en los ramos listados explícitamente.
    [cite_start]// El PDF menciona "Semestre 13" y "Semestre 14" pero sin ramos específicos en el diagrama, solo "Integración para la práctica profesional"[cite: 98].
    // Si se necesitan más semestres, se pueden añadir manualmente o considerar que los "Internados" rotativos anuales cubren esos periodos.
];
