// script.js

document.addEventListener('DOMContentLoaded', () => {
    const LOCAL_STORAGE_KEY = 'mallaProgressMedicina'; // Clave para guardar en localStorage
    const THEME_STORAGE_KEY = 'mallaThemeMedicina'; // Clave para la preferencia de tema

    let allCourses; // Esta variable contendrá la data, ya sea cargada o la inicial

    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const semestersContainer = document.getElementById('semestersContainer');
    const recommendedCoursesDiv = document.getElementById('recommendedCourses');
    const refreshRecommendationsBtn = document.getElementById('refreshRecommendations');
    const averageGradeText = document.getElementById('averageGradeText');
    const themeToggle = document.querySelector('.theme-toggle');

    // Elementos del Modal
    const courseModal = document.getElementById('courseModal');
    const closeModalButtons = document.querySelectorAll('.modal-button.close, .close-button');
    const modalCourseName = document.getElementById('modalCourseName');
    const modalCourseSemester = document.getElementById('modalCourseSemester');
    const modalCourseArea = document.getElementById('modalCourseArea');
    const modalCourseDescription = document.getElementById('modalCourseDescription');
    // const modalCoursePrerequisites = document.getElementById('modalCoursePrerequisites'); // Eliminado
    const markAsApprovedBtn = document.getElementById('markAsApprovedBtn');

    // Objeto para almacenar los divs de cursos de cada semestre
    const semesterCoursesContainers = {};
    // Ajustar el número de semestres según la nueva malla (hasta 12)
    const maxSemesters = Math.max(...coursesData.map(c => c.semester));
    for (let i = 1; i <= maxSemesters; i++) {
        const semesterDiv = document.createElement('div');
        semesterDiv.classList.add('semester');
        semesterDiv.innerHTML = `<h3>Semestre ${i}</h3>`;
        semestersContainer.appendChild(semesterDiv);

        const coursesDiv = document.createElement('div');
        coursesDiv.classList.add('courses-container');
        semesterDiv.appendChild(coursesDiv);
        semesterCoursesContainers[i] = coursesDiv; // Mapear semestre a su contenedor de cursos
    }

    // --- Funciones de Guardado y Carga ---
    function saveProgress() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allCourses));
    }

    function loadProgress() {
        const savedProgress = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedProgress) {
            allCourses = JSON.parse(savedProgress);
            // Asegurarse de que los nuevos campos como 'description' se mantengan si se añadió data nueva
            // y no estaban en el guardado anterior.
            // Para simplificar, si la estructura de data.js cambia mucho, es mejor forzar un reseteo de la data si hay errores.
            // Por ahora, asumimos que los IDs y nombres principales son consistentes.
            // Un merge más robusto podría ser necesario para aplicaciones más complejas.
            allCourses = coursesData.map(course => {
                const savedCourse = allCourses.find(c => c.id === course.id);
                return savedCourse ? { ...course, approved: savedCourse.approved, grade: savedCourse.grade } : course;
            });
        } else {
            // Si no hay progreso guardado, usa la data inicial de data.js
            allCourses = coursesData.map(course => ({ ...course })); // Copia profunda para no modificar el original
        }
    }
    // --- Fin Funciones de Guardado y Carga ---

    // --- Funciones de Modo Oscuro/Claro ---
    function loadTheme() {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme) {
            document.body.classList.add(savedTheme);
            themeToggle.setAttribute('aria-checked', savedTheme === 'dark-mode');
        } else {
            // Por defecto, usa el modo claro si no hay preferencia guardada
            document.body.classList.add('light-mode');
            themeToggle.setAttribute('aria-checked', false);
        }
    }

    function toggleTheme() {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem(THEME_STORAGE_KEY, 'light-mode');
            themeToggle.setAttribute('aria-checked', false);
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem(THEME_STORAGE_KEY, 'dark-mode');
            themeToggle.setAttribute('aria-checked', true);
        }
    }

    themeToggle.addEventListener('click', toggleTheme);
    // --- Fin Funciones de Modo Oscuro/Claro ---

    // --- IMPORTANTE: isCourseBlocked siempre devuelve false ahora ---
    function isCourseBlocked(course) {
        // En esta versión, no hay prerrequisitos, por lo que ningún curso está bloqueado.
        return false;
    }

    function renderMalla() {
        // Limpiar todos los contenedores de ramos antes de volver a renderizar
        for (const sem in semesterCoursesContainers) {
            semesterCoursesContainers[sem].innerHTML = '';
        }

        allCourses.forEach(course => {
            const courseBox = document.createElement('div');
            courseBox.classList.add('course-box');
            courseBox.setAttribute('data-id', course.id);
            courseBox.setAttribute('data-tooltip', course.description || 'No hay descripción disponible.');

            if (course.approved && course.grade !== null) {
                courseBox.textContent = `${course.name} (${course.grade.toFixed(1)})`;
            } else {
                courseBox.textContent = course.name;
            }

            courseBox.classList.add(course.area);

            if (course.approved) {
                courseBox.classList.add('approved');
            } else if (isCourseBlocked(course)) {
                // Esta rama de código nunca se ejecutará con la nueva isCourseBlocked
                courseBox.classList.add('blocked');
                courseBox.textContent += ' 🔒';
            }

            courseBox.addEventListener('click', () => {
                courseBox.classList.add('clicked');
                setTimeout(() => {
                    courseBox.classList.remove('clicked');
                }, 300);

                const clickedCourse = allCourses.find(c => c.id === course.id);

                if (clickedCourse.approved) {
                    clickedCourse.approved = false;
                    clickedCourse.grade = null;
                    renderMalla();
                    updateProgressBar();
                    updateAverageGrade();
                    updateRecommendedCourses();
                    saveProgress();
                } else {
                    openCourseModal(clickedCourse);
                }
            });

            if (semesterCoursesContainers[course.semester]) {
                semesterCoursesContainers[course.semester].appendChild(courseBox);
            }
        });
    }

    // --- Funciones del Modal ---
    let currentCourseInModal = null;

    function openCourseModal(course) {
        currentCourseInModal = course;
        modalCourseName.textContent = course.name;
        modalCourseSemester.textContent = course.semester;
        modalCourseArea.textContent = course.area;
        modalCourseDescription.textContent = course.description || "No hay descripción disponible.";

        // Eliminamos la línea para mostrar prerrequisitos ya que no se usarán.
        // if (modalCoursePrerequisites) modalCoursePrerequisites.textContent = "N/A (No aplica en esta malla)";


        markAsApprovedBtn.onclick = () => {
            let gradeInput = prompt(`Ingresa la nota para "${currentCourseInModal.name}" (1.0 a 7.0):`);
            let grade = parseFloat(gradeInput);

            if (!isNaN(grade) && grade >= 1.0 && grade <= 7.0) {
                currentCourseInModal.approved = true;
                currentCourseInModal.grade = grade;
                closeCourseModal();
                renderMalla();
                updateProgressBar();
                updateAverageGrade();
                updateRecommendedCourses();
                saveProgress();
            } else if (gradeInput !== null) {
                alert("Nota inválida. Por favor, ingresa un número entre 1.0 y 7.0.");
            }
        };

        courseModal.style.display = 'flex';
    }

    function closeCourseModal() {
        courseModal.style.display = 'none';
        currentCourseInModal = null;
    }

    closeModalButtons.forEach(button => {
        button.addEventListener('click', closeCourseModal);
    });

    window.addEventListener('click', (event) => {
        if (event.target === courseModal) {
            closeCourseModal();
        }
    });
    // --- Fin Funciones del Modal ---


    function updateProgressBar() {
        const totalCourses = allCourses.length;
        const approvedCourses = allCourses.filter(course => course.approved).length;
        const percentage = (approvedCourses / totalCourses) * 100;

        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage.toFixed(0)}%`;

        if (percentage > 0) {
            progressBar.style.backgroundColor = 'var(--progress-fill-color)';
        } else {
            progressBar.style.backgroundColor = 'var(--progress-empty-color)';
        }
    }

    function updateAverageGrade() {
        const gradedApprovedCourses = allCourses.filter(course => course.approved && course.grade !== null);

        let totalGrade = 0;
        gradedApprovedCourses.forEach(course => {
            totalGrade += course.grade;
        });

        if (gradedApprovedCourses.length > 0) {
            const average = totalGrade / gradedApprovedCourses.length;
            averageGradeText.textContent = `Promedio de ramos aprobados: ${average.toFixed(2)}`;
        } else {
            averageGradeText.textContent = 'Promedio de ramos aprobados: N/A';
        }
    }

    function updateRecommendedCourses() {
        recommendedCoursesDiv.innerHTML = '';
        // Filtrar solo cursos no aprobados
        const availableCourses = allCourses.filter(course => !course.approved);

        // Ordenar para priorizar:
        // 1. Ramos de semestres más tempranos.
        const sortedRecommendations = availableCourses.sort((a, b) => a.semester - b.semester);

        const recommendationsToShow = sortedRecommendations.slice(0, 6); // Máximo 6

        if (recommendationsToShow.length === 0) {
            recommendedCoursesDiv.textContent = '¡Felicidades! Has aprobado todos los ramos. No hay más sugerencias.';
        } else {
            recommendationsToShow.forEach(course => {
                const courseBox = document.createElement('div');
                courseBox.classList.add('course-box');
                courseBox.textContent = course.name;
                courseBox.classList.add(course.area);
                courseBox.setAttribute('data-tooltip', course.description || 'No hay descripción disponible.');
                recommendedCoursesDiv.appendChild(courseBox);
            });
        }
    }

    refreshRecommendationsBtn.addEventListener('click', updateRecommendedCourses);


    // --- Lógica de Tooltips ---
    let tooltipTimeout;
    const tooltipElement = document.createElement('div');
    tooltipElement.classList.add('tooltip');
    document.body.appendChild(tooltipElement);

    document.addEventListener('mouseover', (event) => {
        const target = event.target;
        const tooltipText = target.getAttribute('data-tooltip');

        if (tooltipText) {
            clearTimeout(tooltipTimeout);
            tooltipElement.style.opacity = '0';

            tooltipTimeout = setTimeout(() => {
                tooltipElement.textContent = tooltipText;

                const rect = target.getBoundingClientRect();
                let topPosition = rect.top - tooltipElement.offsetHeight - 10;
                let leftPosition = rect.left + rect.width / 2;

                if (topPosition < 0) {
                    topPosition = rect.bottom + 10;
                }

                tooltipElement.style.left = `${leftPosition}px`;
                tooltipElement.style.top = `${topPosition}px`;
                tooltipElement.style.transform = 'translateX(-50%)';

                const tooltipRect = tooltipElement.getBoundingClientRect();
                if (tooltipRect.left < 5) {
                    tooltipElement.style.left = `calc(5px + ${tooltipRect.width / 2}px)`;
                }
                if (tooltipRect.right > window.innerWidth - 5) {
                    tooltipElement.style.left = `calc(${window.innerWidth - 5}px - ${tooltipRect.width / 2}px)`;
                }

                tooltipElement.style.opacity = '1';
            }, 500);
        }
    });

    document.addEventListener('mouseout', (event) => {
        const target = event.target;
        if (target.hasAttribute('data-tooltip')) {
            clearTimeout(tooltipTimeout);
            tooltipElement.style.opacity = '0';
        }
    });
    // --- Fin Lógica de Tooltips ---


    // --- Llamadas iniciales ---
    loadTheme();
    loadProgress();
    renderMalla();
    updateProgressBar();
    updateAverageGrade();
    updateRecommendedCourses();
});
