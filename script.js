// ==========================================
// 1. COURSE DATA WITH VIDEOS
// ==========================================
const courseData = {
    python: {
        name: "Python Programming",
        icon: "fab fa-python",
        duration: "40 hours",
        level: "Beginner to Pro",
        lessons: [
            { 
                id: "p1", 
                title: "Introduction to Python", 
                video: "https://www.youtube.com/embed/_uQrJ0TkZlc",
                content: `
                    <h3>Welcome to Python!</h3>
                    <p>Python is a high-level, interpreted programming language known for its simplicity and readability.</p>
                    <h4>Why Python?</h4>
                    <ul>
                        <li>Easy to learn and use</li>
                        <li>Used in web development, data science, AI, and more</li>
                        <li>Huge community and library support</li>
                    </ul>
                    <h4>Your First Python Program</h4>
                    <pre><code>print("Hello, World!")</code></pre>
                    <p>This simple program prints "Hello, World!" to the console.</p>
                `
            },
            { 
                id: "p2", 
                title: "Variables and Data Types", 
                video: "https://www.youtube.com/embed/Z1Yd7upQsXY",
                content: `
                    <h3>Variables and Data Types</h3>
                    <p>Variables store data that can be used and manipulated in your program.</p>
                    <h4>Common Data Types:</h4>
                    <ul>
                        <li><strong>int:</strong> Whole numbers (e.g., 5, 10, -3)</li>
                        <li><strong>float:</strong> Decimal numbers (e.g., 3.14, 2.5)</li>
                        <li><strong>str:</strong> Text strings (e.g., "Hello")</li>
                        <li><strong>bool:</strong> True or False</li>
                    </ul>
                    <pre><code>name = "Alice"      # string
age = 25            # integer
height = 5.8        # float
is_student = True   # boolean</code></pre>
                `
            },
            { 
                id: "p3", 
                title: "Conditional Statements", 
                video: "https://www.youtube.com/embed/7S9QFbrB-6Y",
                content: `
                    <h3>Conditional Statements</h3>
                    <p>Conditional statements allow your program to make decisions.</p>
                    <h4>The "if" Statement</h4>
                    <pre><code>age = 18
if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")</code></pre>
                    <h4>Elif for Multiple Conditions</h4>
                    <pre><code>score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"</code></pre>
                `
            },
            { 
                id: "p4", 
                title: "Loops in Python", 
                video: "https://www.youtube.com/embed/6iF8Xb7Z3wM",
                content: `
                    <h3>Loops in Python</h3>
                    <p>Loops let you repeat code multiple times.</p>
                    <h4>For Loop</h4>
                    <pre><code>for i in range(5):
    print(i)  # Prints 0, 1, 2, 3, 4</code></pre>
                    <h4>While Loop</h4>
                    <pre><code>count = 0
while count < 5:
    print(count)
    count += 1</code></pre>
                `
            },
            { 
                id: "p5", 
                title: "Functions in Python", 
                video: "https://www.youtube.com/embed/9Os0o3wzS_I",
                content: `
                    <h3>Functions</h3>
                    <p>Functions are reusable blocks of code.</p>
                    <h4>Defining a Function</h4>
                    <pre><code>def greet(name):
    return f"Hello, {name}!"

# Call the function
message = greet("Alice")
print(message)  # Hello, Alice!</code></pre>
                `
            }
        ]
    },
    javascript: {
        name: "JavaScript Mastery",
        icon: "fab fa-js-square",
        duration: "35 hours",
        level: "Intermediate",
        lessons: [
            { 
                id: "j1", 
                title: "JavaScript Basics", 
                video: "https://www.youtube.com/embed/W6NZfCO5SIk",
                content: `
                    <h3>Welcome to JavaScript!</h3>
                    <p>JavaScript is the language of the web.</p>
                    <pre><code>console.log("Hello, World!");</code></pre>
                    <h4>Where to Run JavaScript</h4>
                    <ul>
                        <li>Browser Console</li>
                        <li>Node.js</li>
                        <li>HTML script tags</li>
                    </ul>
                `
            },
            { 
                id: "j2", 
                title: "Variables in JavaScript", 
                video: "https://www.youtube.com/embed/edlFjlzxkSI",
                content: `
                    <h3>Variables in JavaScript</h3>
                    <pre><code>let name = "Alice";
const age = 25;
var city = "New York";</code></pre>
                    <h4>Variable Types</h4>
                    <ul>
                        <li><strong>let:</strong> Can be reassigned</li>
                        <li><strong>const:</strong> Cannot be reassigned</li>
                        <li><strong>var:</strong> Older way (avoid using)</li>
                    </ul>
                `
            }
        ]
    },
    htmlcss: {
        name: "HTML & CSS",
        icon: "fab fa-html5",
        duration: "25 hours",
        level: "Beginner",
        lessons: [
            { 
                id: "h1", 
                title: "HTML Structure & CSS Basics", 
                video: "https://www.youtube.com/embed/UB1O30fR-EE",
                content: `
                    <h3>HTML Basics</h3>
                    <pre><code><!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
    <style>
        body { font-family: Arial; }
        h1 { color: blue; }
    </style>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
</body>
</html></code></pre>
                    <h4>CSS Styling</h4>
                    <ul>
                        <li>Colors</li>
                        <li>Fonts</li>
                        <li>Layouts</li>
                    </ul>
                `
            }
        ]
    },
    react: {
        name: "React.js Development",
        icon: "fab fa-react",
        duration: "45 hours",
        level: "Intermediate",
        lessons: [
            { 
                id: "r1", 
                title: "Introduction to React", 
                video: "https://www.youtube.com/embed/w7ejDZ8SWv8",
                content: `
                    <h3>Welcome to React!</h3>
                    <p>React is a JavaScript library for building user interfaces.</p>
                    <pre><code>function App() {
    return <h1>Hello, React!</h1>;
}</code></pre>
                    <h4>Why React?</h4>
                    <ul>
                        <li>Component-based</li>
                        <li>Virtual DOM</li>
                        <li>Huge ecosystem</li>
                    </ul>
                `
            }
        ]
    },
    datascience: {
        name: "Data Science & AI",
        icon: "fas fa-database",
        duration: "50 hours",
        level: "Advanced",
        lessons: [
            { 
                id: "d1", 
                title: "Introduction to Data Science", 
                video: "https://www.youtube.com/embed/ua-CiDNNj30",
                content: `
                    <h3>Welcome to Data Science!</h3>
                    <p>Data Science combines statistics, programming, and domain knowledge.</p>
                    <h4>Key Concepts</h4>
                    <ul>
                        <li>Data Analysis</li>
                        <li>Machine Learning</li>
                        <li>Data Visualization</li>
                    </ul>
                    <h4>Python Libraries</h4>
                    <ul>
                        <li>Pandas</li>
                        <li>NumPy</li>
                        <li>Matplotlib</li>
                        <li>Scikit-learn</li>
                    </ul>
                `
            }
        ]
    },
    cybersecurity: {
        name: "Cybersecurity Basics",
        icon: "fas fa-shield-alt",
        duration: "30 hours",
        level: "Beginner",
        lessons: [
            { 
                id: "c1", 
                title: "Cybersecurity Introduction", 
                video: "https://www.youtube.com/embed/inWWhr5tnEA",
                content: `
                    <h3>Welcome to Cybersecurity!</h3>
                    <p>Cybersecurity protects systems, networks, and data from attacks.</p>
                    <h4>The CIA Triad</h4>
                    <ul>
                        <li><strong>Confidentiality:</strong> Keeping data private</li>
                        <li><strong>Integrity:</strong> Keeping data accurate</li>
                        <li><strong>Availability:</strong> Keeping data accessible</li>
                    </ul>
                    <h4>Common Threats</h4>
                    <ul>
                        <li>Phishing</li>
                        <li>Malware</li>
                        <li>Ransomware</li>
                        <li>Social Engineering</li>
                    </ul>
                `
            }
        ]
    }
};

// ==========================================
// 2. EMAILJS CONFIGURATION
// ==========================================
const EMAILJS_CONFIG = {
    publicKey: "OqpC_vGRZEHfyS0Cc",
    serviceID: "service_gmw2wwn",
    templateID: "template_4aoxl5p"
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

// ==========================================
// 3. DOM ELEMENTS
// ==========================================
const landingPage = document.getElementById("landingPage");
const shopSection = document.getElementById("shopSection");
const dashboardSection = document.getElementById("dashboardSection");
const coursePage = document.getElementById("coursePage");
const openRegisterBtn = document.getElementById("openRegisterBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const registerModal = document.getElementById("registerModal");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const sendCodeBtn = document.getElementById("sendCodeBtn");
const verifyBtn = document.getElementById("verifyBtn");
const resendCodeBtn = document.getElementById("resendCodeBtn");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const verificationCode = document.getElementById("verificationCode");
const statusMessage = document.getElementById("statusMessage");

const dashboardUserName = document.getElementById("dashboardUserName");
const dashboardUserEmail = document.getElementById("dashboardUserEmail");
const dashboardJoinDate = document.getElementById("dashboardJoinDate");
const totalCourses = document.getElementById("totalCourses");
const completedCourses = document.getElementById("completedCourses");
const progressPercent = document.getElementById("progressPercent");
const certificatesCount = document.getElementById("certificatesCount");

const classModal = document.getElementById("classModal");
const closeClassModalBtn = document.getElementById("closeClassModalBtn");
const classModalTitle = document.getElementById("classModalTitle");
const classModalDesc = document.getElementById("classModalDesc");
const classModalDuration = document.getElementById("classModalDuration");
const classModalLevel = document.getElementById("classModalLevel");
const classModalLessons = document.getElementById("classModalLessons");
const confirmEnrollBtn = document.getElementById("confirmEnrollBtn");
const cancelEnrollBtn = document.getElementById("cancelEnrollBtn");

const quizModal = document.getElementById("quizModal");
const closeQuizBtn = document.getElementById("closeQuizBtn");
const quizTitle = document.getElementById("quizTitle");
const quizBody = document.getElementById("quizBody");

let generatedCode = "";
let userData = {};
let enrolledCourses = [];
let currentCourse = null;
let currentLessonIndex = 0;
let completedLessons = {};
let selectedClass = "";
let currentVideoPlayer = null;

// ==========================================
// 4. MODAL CONTROLS
// ==========================================
openRegisterBtn.addEventListener("click", function() {
    registerModal.style.display = "flex";
    step1.style.display = "block";
    step2.style.display = "none";
    statusMessage.className = "status-message";
    statusMessage.textContent = "";
    statusMessage.style.display = "none";
    fullName.value = "";
    email.value = "";
    password.value = "";
    verificationCode.value = "";
});

closeModalBtn.addEventListener("click", function() {
    registerModal.style.display = "none";
});

window.addEventListener("click", function(e) {
    if (e.target === registerModal) {
        registerModal.style.display = "none";
    }
});

// ==========================================
// 5. GENERATE CODE
// ==========================================
function generateCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

// ==========================================
// 6. SEND CODE VIA EMAILJS
// ==========================================
sendCodeBtn.addEventListener("click", async function() {
    const name = fullName.value.trim();
    const mail = email.value.trim();
    const pass = password.value.trim();

    if (!name || !mail || !pass) {
        showStatus("Please fill in all fields.", "error");
        return;
    }
    if (pass.length < 6) {
        showStatus("Password must be at least 6 characters.", "error");
        return;
    }
    if (!mail.includes("@") || !mail.includes(".")) {
        showStatus("Please enter a valid email address.", "error");
        return;
    }

    try {
        sendCodeBtn.disabled = true;
        sendCodeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        showStatus("⏳ Sending verification code to your email...", "info");

        generatedCode = generateCode();
        userData = { name, mail, pass };

        const templateParams = {
            to_email: mail,
            user_name: name,
            verification_code: generatedCode,
            current_year: new Date().getFullYear(),
            platform_name: "Katony Technologies"
        };

        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceID,
            EMAILJS_CONFIG.templateID,
            templateParams
        );

        console.log("✅ Email sent successfully!", response);
        showStatus("✅ Verification code sent to your email! Please check your inbox.", "success");
        step1.style.display = "none";
        step2.style.display = "block";

    } catch (error) {
        console.error("❌ Email sending failed:", error);
        showStatus("❌ Failed to send verification code. Please try again.", "error");
        console.log("🔐 YOUR VERIFICATION CODE (Fallback):", generatedCode);
        console.log("📧 Email:", userData.mail);
        console.log("🔑 Code:", generatedCode);
    } finally {
        sendCodeBtn.disabled = false;
        sendCodeBtn.innerHTML = '<i class="fas fa-envelope"></i> Send Code';
    }
});

// ==========================================
// 7. RESEND CODE VIA EMAILJS
// ==========================================
resendCodeBtn.addEventListener("click", async function() {
    if (!userData.mail) {
        showStatus("Please go back and enter your details first.", "error");
        return;
    }

    try {
        resendCodeBtn.disabled = true;
        resendCodeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Resending...';
        showStatus("⏳ Resending verification code...", "info");

        generatedCode = generateCode();

        const templateParams = {
            to_email: userData.mail,
            user_name: userData.name,
            verification_code: generatedCode,
            current_year: new Date().getFullYear(),
            platform_name: "Katony Technologies"
        };

        await emailjs.send(
            EMAILJS_CONFIG.serviceID,
            EMAILJS_CONFIG.templateID,
            templateParams
        );

        showStatus("✅ New verification code sent to your email!", "success");

    } catch (error) {
        console.error("❌ Resend failed:", error);
        showStatus("❌ Failed to resend code. Please try again.", "error");
        console.log("🔄 NEW CODE (Fallback):", generatedCode);
        console.log("📧 Email:", userData.mail);
        console.log("🔑 Code:", generatedCode);
    } finally {
        resendCodeBtn.disabled = false;
        resendCodeBtn.innerHTML = '<i class="fas fa-sync"></i> Resend Code';
    }
});

// ==========================================
// 8. VERIFY CODE
// ==========================================
verifyBtn.addEventListener("click", function() {
    const entered = verificationCode.value.trim();

    if (!entered) {
        showStatus("Please enter the 4-digit code.", "error");
        return;
    }
    if (entered.length !== 4) {
        showStatus("Code must be exactly 4 digits.", "error");
        return;
    }
    if (entered === generatedCode) {
        showStatus("🎉 Registration successful! Welcome to Katony Technologies!", "success");

        setTimeout(function() {
            registerModal.style.display = "none";
            landingPage.style.display = "none";
            shopSection.style.display = "flex";
            dashboardSection.style.display = "none";
            step1.style.display = "block";
            step2.style.display = "none";
            statusMessage.style.display = "none";
            initializeDashboard(userData);
        }, 1500);
    } else {
        showStatus("❌ Invalid code. Please try again.", "error");
    }
});

// ==========================================
// 9. DASHBOARD FUNCTIONS
// ==========================================
function initializeDashboard(user) {
    dashboardUserName.textContent = user.name;
    dashboardUserEmail.textContent = user.mail;
    const now = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    dashboardJoinDate.textContent = now.toLocaleDateString("en-US", options);
    updateDashboardStats();
    renderClasses();
}

function updateDashboardStats() {
    totalCourses.textContent = enrolledCourses.length;
    let completed = 0;
    let totalLessons = 0;
    let completedLessonsCount = 0;
    
    enrolledCourses.forEach(courseKey => {
        const course = courseData[courseKey];
        if (course) {
            totalLessons += course.lessons.length;
            if (completedLessons[courseKey]) {
                completedLessonsCount += Object.values(completedLessons[courseKey]).filter(v => v).length;
                const allCompleted = course.lessons.every(lesson => completedLessons[courseKey] && completedLessons[courseKey][lesson.id]);
                if (allCompleted) {
                    completed++;
                }
            }
        }
    });
    
    completedCourses.textContent = completed;
    const progress = totalLessons > 0 ? Math.round((completedLessonsCount / totalLessons) * 100) : 0;
    progressPercent.textContent = progress + "%";
    certificatesCount.textContent = completed;
}

function renderClasses() {
    const grid = document.getElementById("classesGrid");
    grid.innerHTML = "";
    
    Object.keys(courseData).forEach(key => {
        const course = courseData[key];
        const isEnrolled = enrolledCourses.includes(key);
        const hasVideo = course.lessons.some(l => l.video);
        
        const card = document.createElement("div");
        card.className = "class-card";
        card.innerHTML = `
            <div class="class-icon ${key}">
                <i class="${course.icon} fa-3x"></i>
            </div>
            <h3>${course.name}</h3>
            <p>${course.lessons.length} lessons • ${course.duration}</p>
            <div class="class-meta">
                <span><i class="fas fa-signal"></i> ${course.level}</span>
                ${hasVideo ? `<span><i class="fas fa-video"></i> Videos</span>` : ""}
            </div>
            ${hasVideo ? `<span class="video-badge"><i class="fas fa-play"></i> Video Lessons</span>` : ""}
            <button class="enroll-btn ${isEnrolled ? "enrolled" : ""}" data-class="${key}" ${isEnrolled ? "disabled" : ""}>
                ${isEnrolled ? '<i class="fas fa-check"></i> Enrolled' : '<i class="fas fa-play"></i> Enroll Now'}
            </button>
            ${isEnrolled ? `<button class="continue-btn" data-class="${key}"><i class="fas fa-book-open"></i> Continue Learning</button>` : ""}
        `;
        grid.appendChild(card);
    });

    document.querySelectorAll(".enroll-btn:not(.enrolled)").forEach(btn => {
        btn.addEventListener("click", function() {
            openEnrollmentModal(this.dataset.class);
        });
    });

    document.querySelectorAll(".continue-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            openCourse(this.dataset.class);
        });
    });
}

// ==========================================
// 10. ENROLLMENT
// ==========================================
function openEnrollmentModal(courseKey) {
    const course = courseData[courseKey];
    selectedClass = courseKey;
    classModalTitle.textContent = "Enroll in " + course.name;
    classModalDesc.textContent = "You are about to enroll in " + course.name + ". This course has " + course.lessons.length + " lessons with video content.";
    classModalDuration.textContent = course.duration;
    classModalLevel.textContent = course.level;
    classModalLessons.textContent = course.lessons.length;
    classModal.style.display = "flex";
}

confirmEnrollBtn.addEventListener("click", function() {
    if (selectedClass && !enrolledCourses.includes(selectedClass)) {
        enrolledCourses.push(selectedClass);
        completedLessons[selectedClass] = {};
        updateDashboardStats();
        renderClasses();
        showStatusMessage("✅ Successfully enrolled in " + courseData[selectedClass].name + "!", "success");
        classModal.style.display = "none";
        openCourse(selectedClass);
    }
});

closeClassModalBtn.addEventListener("click", function() {
    classModal.style.display = "none";
});

cancelEnrollBtn.addEventListener("click", function() {
    classModal.style.display = "none";
});

window.addEventListener("click", function(e) {
    if (e.target === classModal) {
        classModal.style.display = "none";
    }
});

// ==========================================
// 11. VIDEO PLAYER
// ==========================================
function createVideoPlayer(videoUrl, lessonId) {
    if (!videoUrl) return "";
    
    const isYouTube = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");
    
    let embedUrl = videoUrl;
    if (isYouTube) {
        let videoId = "";
        if (videoUrl.includes("watch?v=")) {
            videoId = videoUrl.split("watch?v=")[1].split("&")[0];
        } else if (videoUrl.includes("youtu.be/")) {
            videoId = videoUrl.split("youtu.be/")[1].split("?")[0];
        } else if (videoUrl.includes("embed/")) {
            videoId = videoUrl.split("embed/")[1].split("?")[0];
        }
        if (videoId) {
            embedUrl = "https://www.youtube.com/embed/" + videoId + "?enablejsapi=1&rel=0";
        }
    }
    
    return `
        <div class="video-container" id="video-container-${lessonId}">
            <iframe 
                src="${embedUrl}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                id="video-iframe-${lessonId}"
            ></iframe>
        </div>
    `;
}

// ==========================================
// 12. COURSE PAGE
// ==========================================
function openCourse(courseKey) {
    currentCourse = courseKey;
    const course = courseData[courseKey];
    if (!course) return;
    
    dashboardSection.style.display = "none";
    coursePage.style.display = "block";
    
    document.getElementById("courseTitle").textContent = course.name;
    
    const lessonList = document.getElementById("lessonList");
    lessonList.innerHTML = "";
    
    course.lessons.forEach((lesson, index) => {
        const li = document.createElement("li");
        const isCompleted = completedLessons[courseKey] && completedLessons[courseKey][lesson.id];
        const isActive = index === currentLessonIndex;
        const hasVideo = !!lesson.video;
        
        li.className = isActive ? "active" : "";
        if (isCompleted) li.classList.add("completed");
        
        li.innerHTML = `
            <span>
                ${hasVideo ? '<i class="fas fa-play" style="color: #ff5555; margin-right: 8px;"></i>' : ""}
                ${lesson.title}
            </span>
            <span class="lesson-status">
                ${isCompleted ? '<i class="fas fa-check-circle"></i>' : '<i class="far fa-circle"></i>'}
            </span>
        `;
        
        li.addEventListener("click", function() {
            currentLessonIndex = index;
            renderLesson(courseKey, index);
        });
        
        lessonList.appendChild(li);
    });
    
    currentLessonIndex = 0;
    renderLesson(courseKey, 0);
    updateCourseProgress(courseKey);
}

function renderLesson(courseKey, index) {
    const course = courseData[courseKey];
    const lesson = course.lessons[index];
    
    let videoHtml = "";
    if (lesson.video) {
        videoHtml = createVideoPlayer(lesson.video, lesson.id);
    }
    
    document.getElementById("lessonTitle").textContent = lesson.title;
    document.getElementById("lessonBody").innerHTML = videoHtml + lesson.content;
    
    const items = document.querySelectorAll(".lesson-list li");
    items.forEach((item, i) => {
        item.classList.toggle("active", i === index);
    });
    
    const isCompleted = completedLessons[courseKey] && completedLessons[courseKey][lesson.id];
    const markBtn = document.getElementById("markCompleteBtn");
    const nextBtn = document.getElementById("nextLessonBtn");
    
    if (isCompleted) {
        markBtn.style.display = "none";
    } else {
        markBtn.style.display = "inline-block";
        markBtn.innerHTML = '<i class="fas fa-check"></i> Mark as Complete';
        markBtn.dataset.lessonId = lesson.id;
    }
    
    if (index < course.lessons.length - 1) {
        nextBtn.style.display = "inline-block";
        nextBtn.dataset.nextIndex = index + 1;
    } else {
        nextBtn.style.display = "none";
    }
    
    updateCourseProgress(courseKey);
}

document.getElementById("markCompleteBtn").addEventListener("click", function() {
    if (!currentCourse) return;
    const course = courseData[currentCourse];
    const lesson = course.lessons[currentLessonIndex];
    
    if (!completedLessons[currentCourse]) {
        completedLessons[currentCourse] = {};
    }
    
    if (!completedLessons[currentCourse][lesson.id]) {
        completedLessons[currentCourse][lesson.id] = true;
        updateDashboardStats();
        
        this.innerHTML = "✅ Completed";
        this.style.display = "none";
        
        const items = document.querySelectorAll(".lesson-list li");
        items.forEach((item, i) => {
            if (i === currentLessonIndex) {
                item.classList.add("completed");
                item.querySelector(".lesson-status").innerHTML = '<i class="fas fa-check-circle"></i>';
            }
        });
        
        showStatusMessage("✅ Lesson completed!", "success");
        updateCourseProgress(currentCourse);
        
        const allCompleted = course.lessons.every(l => completedLessons[currentCourse][l.id]);
        if (allCompleted) {
            showStatusMessage("🎉 Congratulations! You completed the course! 🎓", "success");
            updateDashboardStats();
            renderClasses();
        }
    }
});

document.getElementById("nextLessonBtn").addEventListener("click", function() {
    const nextIndex = parseInt(this.dataset.nextIndex);
    if (currentCourse && nextIndex < courseData[currentCourse].lessons.length) {
        currentLessonIndex = nextIndex;
        renderLesson(currentCourse, nextIndex);
    }
});

function updateCourseProgress(courseKey) {
    const course = courseData[courseKey];
    if (!course) return;
    
    let completed = 0;
    course.lessons.forEach(lesson => {
        if (completedLessons[courseKey] && completedLessons[courseKey][lesson.id]) {
            completed++;
        }
    });
    
    const progress = Math.round((completed / course.lessons.length) * 100);
    document.getElementById("courseProgressBar").style.width = progress + "%";
    document.getElementById("courseProgressText").textContent = progress + "% Complete";
}

document.getElementById("backToDashboardBtn").addEventListener("click", function() {
    coursePage.style.display = "none";
    dashboardSection.style.display = "block";
    renderClasses();
});

// ==========================================
// 13. NAVIGATION
// ==========================================
document.getElementById("goToDashboardBtn").addEventListener("click", function() {
    shopSection.style.display = "none";
    dashboardSection.style.display = "block";
});

document.getElementById("backToShopBtn").addEventListener("click", function() {
    dashboardSection.style.display = "none";
    shopSection.style.display = "flex";
});

document.getElementById("logoutBtn").addEventListener("click", function() {
    if (confirm("Are you sure you want to logout?")) {
        landingPage.style.display = "flex";
        shopSection.style.display = "none";
        dashboardSection.style.display = "none";
        coursePage.style.display = "none";
        userData = {};
        enrolledCourses = [];
        completedLessons = {};
        updateDashboardStats();
    }
});

// ==========================================
// 14. HELPERS
// ==========================================
function showStatus(msg, type) {
    statusMessage.textContent = msg;
    statusMessage.className = "status-message " + type;
    statusMessage.style.display = "block";
}

function showStatusMessage(msg, type) {
    const statusDiv = document.createElement("div");
    statusDiv.className = "status-message " + type;
    statusDiv.style.display = "block";
    statusDiv.textContent = msg;
    statusDiv.style.position = "fixed";
    statusDiv.style.bottom = "20px";
    statusDiv.style.left = "50%";
    statusDiv.style.transform = "translateX(-50%)";
    statusDiv.style.zIndex = "9999";
    statusDiv.style.padding = "15px 30px";
    statusDiv.style.borderRadius = "12px";
    statusDiv.style.background = type === "success" ? "#00cc88" : "#ff5555";
    statusDiv.style.color = "#fff";
    statusDiv.style.fontWeight = "600";
    statusDiv.style.boxShadow = "0 8px 30px rgba(0,0,0,0.3)";
    document.body.appendChild(statusDiv);
    setTimeout(function() {
        statusDiv.remove();
    }, 3000);
}

// ==========================================
// 15. QUIZ MODAL
// ==========================================
closeQuizBtn.addEventListener("click", function() {
    quizModal.style.display = "none";
});

window.addEventListener("click", function(e) {
    if (e.target === quizModal) {
        quizModal.style.display = "none";
    }
});

console.log("🎬 Video-Enhanced Learning Platform Loaded!");
console.log("📧 EmailJS integration enabled for verification codes!");
console.log("🔥 Ready to rock! GitHub servers are safe... for now! 😎");
