const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: ['HTML','CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML','CSS','JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML','CSS','JavaScript'],
        completed: false
    }
];

function displayCourses(list) {
    const cards = document.getElementById("courseCards");
    cards.innerHTML = "";
    const totalCredits = list.reduce((sum, course) => sum + course.credits, 0);

    document.getElementById("totalCredits").textContent = totalCredits;

    list.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");
        card.classList.add(course.subject === 'WDD' ? 'wdd-course' : 'cse-course');
        card.classList.add(course.completed ? "completed" : "incomplete");

        const title = document.createElement("h3");
        title.textContent = `${course.subject} ${course.number} - ${course.title}`;
        title.style.cursor = "pointer";

        const details = document.createElement("div");
        details.style.display = "none";
        details.style.width = "100%";
        details.innerHTML = `
        <span class="status-label">${course.completed ? "Completed" : "Incomplete"}</span>
        <p><strong>Description:</strong> ${course.description}</p>
        <P><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Technologies:</strong> ${course.technology.join(',')}</p>
        `;

        title.addEventListener("click", () => {
            const isExpanded = details.style.display ===  "block";
            details.style.display = isExpanded ? "none" : "block";
            
            card.classList.toggle("show-details");

            if (!isExpanded) {
                card.classList.remove("wdd-course", "cse-course");
            }
            else {
                card.classList.add(course.subject === 'WDD' ? 'wdd-course' : 'cse-course');
            }
            if (!card.classList.contains("show-details")) {
                card.classList.add(course.subject === 'WDD' ? 'wdd-course' : 'cse-course');
            }
        });
        card.appendChild(title);
        card.appendChild(details);
        cards.appendChild(card);
    });
}

function showAll() {
    displayCourses(courses);
}

function showWDD() {
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);
}

function showCSE() {
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses);
}
document.addEventListener("DOMContentLoaded", () => {
    showWDD();
});