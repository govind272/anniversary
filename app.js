// =====================================================
// ANNIVERSARY WEBSITE — MAIN APP
// =====================================================

const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const passwordError = document.getElementById("passwordError");
const togglePassword = document.getElementById("togglePassword");

const passwordScreen = document.getElementById("passwordScreen");
const missionScreen = document.getElementById("missionScreen");


// =====================================================
// PASSWORD VISIBILITY
// =====================================================

togglePassword.addEventListener("click", () => {

    const show = passwordInput.type === "password";

    passwordInput.type = show ? "text" : "password";

    togglePassword.textContent = show ? "🙈" : "👁";
});


// =====================================================
// PASSWORD LOGIN
// =====================================================

function unlockWebsite() {

    const password = passwordInput.value.trim();

    if (!password) {
        showError("Please enter the password.");
        return;
    }

    if (password !== CONFIG.password) {

        showError("Wrong password... Try again ❤️");

        passwordInput.classList.remove("shake");

        void passwordInput.offsetWidth;

        passwordInput.classList.add("shake");

        return;
    }

    passwordError.textContent = "";

    passwordScreen.classList.add("fade-out");

    setTimeout(() => {

        passwordScreen.classList.add("hidden");

        missionScreen.classList.remove("hidden");

        showMissionBrief();

    }, 700);
}


// =====================================================
// ERROR
// =====================================================

function showError(message) {
    passwordError.textContent = message;
}


// =====================================================
// PASSWORD EVENTS
// =====================================================

unlockBtn.addEventListener("click", unlockWebsite);

passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        unlockWebsite();
    }

});


// =====================================================
// SCREEN HELPER
// =====================================================

function renderScreen(content) {

    missionScreen.innerHTML = content;

    missionScreen.scrollTop = 0;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =====================================================
// MISSION BRIEF
// =====================================================

function showMissionBrief() {

    renderScreen(`

        <div class="mission-container">

            <div class="mission-status">
                ACCESS GRANTED
            </div>

            <div class="mission-icon">
                ✓
            </div>

            <p class="mission-label">
                CLASSIFIED MISSION
            </p>

            <h2>
                Mission<br>
                <span>Accepted.</span>
            </h2>

            <p class="mission-description">
                Welcome, ${CONFIG.girlfriendName}.
                <br><br>
                Penguin has prepared something
                special for you 😍🥰.
            </p>

            <div class="mission-objective">

                <span>OBJECTIVE</span>

                <p>
                    Complete every mission and
                    discover what is waiting
                    for you at the end.
                </p>

            </div>

            <button class="mission-btn" onclick="showMissionOne()">
                START MISSION
                <span>→</span>
            </button>

            <p class="mission-footer">
                YOUR JOURNEY BEGINS HERE
            </p>

        </div>
    `);
}


// =====================================================
// MISSION 01 — MEMORY
// =====================================================

function showMissionOne() {

    renderScreen(`

        <div class="mission-container">

            <div class="mission-number">
                MISSION 01 / 04
            </div>

            <div class="mission-icon">
                📸
            </div>

            <p class="mission-label">
                MEMORY CHALLENGE
            </p>

            <h2>
                Remember<br>
                <span>This?</span>
            </h2>

            <div class="memory-placeholder">

                <img
                    id="secretMemory"
                    src="assets/images/memory-secret.jpeg"
                    alt="Secret Memory"
                    style="
                        width:100%;
                        height:100%;
                        object-fit:cover;
                        filter:blur(12px);
                        transition:filter 0.8s ease;
                    "
                >

                <div class="memory-overlay">
                    MEMORY
                </div>

            </div>

            <p class="mission-description">
                A memory is waiting to be unlocked.
                Choose the correct answer.
            </p>

            <div class="options">

                <button onclick="memoryAnswer(false)">
                    Our First Date
                </button>

                <button onclick="memoryAnswer(true)">
                    The Special Place
                </button>

                <button onclick="memoryAnswer(false)">
                    A Random Day
                </button>

            </div>

            <p id="missionFeedback"
               class="mission-feedback">
            </p>

        </div>
    `);
}


function memoryAnswer(correct) {

    const feedback =
        document.getElementById("missionFeedback");

    if (correct) {

        const photo =
            document.getElementById("secretMemory");

        if (photo) {
            photo.style.filter = "blur(0)";
        }

        feedback.innerHTML =
            "✓ Correct! Memory unlocked ❤️";

        feedback.className =
            "mission-feedback success";

        setTimeout(() => {
            showMissionTwo();
        }, 1400);

    } else {

        feedback.innerHTML =
            "Not quite... Try again 👀";

        feedback.className =
            "mission-feedback error";
    }
}


// =====================================================
// MISSION 02 — SECRET ENVELOPE
// =====================================================

function showMissionTwo() {

    renderScreen(`

        <div class="mission-container">

            <div class="mission-number">
                MISSION 02 / 04
            </div>

            <div class="mission-icon">
                💌
            </div>

            <p class="mission-label">
                SECRET MESSAGE
            </p>

            <h2>
                Find the<br>
                <span>Right One.</span>
            </h2>

            <p class="mission-description">
                One of these envelopes contains
                a message meant only for you.
            </p>

            <div class="envelopes">

                <button onclick="openEnvelope(false)">
                    💌
                </button>

                <button onclick="openEnvelope(false)">
                    💌
                </button>

                <button onclick="openEnvelope(true)">
                    💌
                </button>

                <button onclick="openEnvelope(false)">
                    💌
                </button>

            </div>

            <p id="envelopeFeedback"
               class="mission-feedback">
            </p>

        </div>
    `);
}


function openEnvelope(correct) {

    const feedback =
        document.getElementById("envelopeFeedback");

    if (correct) {

        feedback.innerHTML =
            "💌 You found it!";

        feedback.className =
            "mission-feedback success";

        setTimeout(() => {
            showSecretMessage();
        }, 800);

    } else {

        feedback.innerHTML =
            "This one is empty 😏";

        feedback.className =
            "mission-feedback error";
    }
}


// =====================================================
// SECRET MESSAGE
// =====================================================

function showSecretMessage() {

    renderScreen(`

        <div class="mission-container">

            <div class="mission-number">
                SECRET MESSAGE
            </div>

            <div class="letter-card">

                <div class="letter-icon">
                   PICCOLO ❤️
                </div>

                <p>
                    One year with you, and somehow it still feels like yesterday when you became such a beautiful part of my life. We’ve laughed, fought, travelled, grown, and made so many little memories that I’ll always keep close to my heart.
                </p>

                <p>
                   You’re not just my girlfriend, you’re my favourite person, my comfort, and my home. 🫶🏻
                </p>

                <p>
                   Thank you for choosing me, understanding me, and staying beside me. I don’t know what the future holds, but I know I want to experience it with you.

                </p>

                <div class="letter-sign">
                    — Someone who cares ❤️
                </div>

            </div>

            <button class="mission-btn"
                    onclick="showMissionThree()">
                CONTINUE
                <span>→</span>
            </button>

        </div>
    `);
}


// =====================================================
// MISSION 03 — MUSIC
// =====================================================

function showMissionThree() {

    renderScreen(`

        <div class="mission-container">

            <div class="mission-number">
                MISSION 03 / 04
            </div>

            <div class="mission-icon">
                🎵
            </div>

            <p class="mission-label">
                SOUNDTRACK OF A STORY
            </p>

            <h2>
                Press<br>
                <span>Play.</span>
            </h2>

            <audio
                id="anniversaryAudio"
                src="assets/audio/anniversary-song.mpeg"
                preload="auto">
            </audio>

            <div class="music-card">

                <div class="music-disc">
                    ♪
                </div>

                <div class="music-info">
                    <strong>Our Song</strong>
                    <small>A little memory in music</small>
                </div>

                <button
                    class="play-button"
                    onclick="playMissionMusic(this)">
                    ▶
                </button>

            </div>

            <p id="musicStatus"
               class="mission-description">
                Press play to continue.
            </p>

            <button
                class="mission-btn hidden"
                id="musicContinue"
                onclick="showFinalLock()">
                CONTINUE
                <span>→</span>
            </button>

        </div>
    `);
}


// =====================================================
// PLAY ACTUAL SONG
// =====================================================

function playMissionMusic(button) {

    const audio =
        document.getElementById("anniversaryAudio");

    if (!audio) return;

    audio.play()
        .then(() => {

            button.innerHTML = "✓";

            button.classList.add("playing");

            document.getElementById("musicStatus").innerHTML =
                "This moment belongs to your story. ❤️";

            document
                .getElementById("musicContinue")
                .classList.remove("hidden");

        })
        .catch(() => {

            document.getElementById("musicStatus").innerHTML =
                "Song play nahi ho pa raha. Audio file check karo.";

        });
}


// =====================================================
// MISSION 04 — FINAL LOCK
// =====================================================

function showFinalLock() {

    renderScreen(`

        <div class="mission-container">

            <div class="mission-number">
                MISSION 04 / 04
            </div>

            <div class="mission-icon">
                🔐
            </div>

            <p class="mission-label">
                FINAL LOCK
            </p>

            <h2>
                One Last<br>
                <span>Key.</span>
            </h2>

            <p class="mission-description">
                Enter the special date to
                unlock the final question.
            </p>

            <input
                type="text"
                id="dateInput"
                class="mission-input"
                placeholder="DD/MM/YYYY"
                autocomplete="off"
            >

            <button
                class="mission-btn"
                onclick="unlockFinalQuestion()">
                UNLOCK
                <span>🔓</span>
            </button>

            <p id="dateFeedback"
               class="mission-feedback">
            </p>

        </div>
    `);
}


function unlockFinalQuestion() {

    const input =
        document.getElementById("dateInput");

    const feedback =
        document.getElementById("dateFeedback");

    if (input.value.trim() === CONFIG.anniversaryDate) {

        feedback.innerHTML =
            "✓ Final lock unlocked.";

        feedback.className =
            "mission-feedback success";

        setTimeout(() => {
            showFinalQuestion();
        }, 900);

    } else {

        feedback.innerHTML =
            "Wrong date... think carefully ❤️";

        feedback.className =
            "mission-feedback error";
    }
}


// =====================================================
// FINAL QUESTION — YES / NO
// =====================================================

function showFinalQuestion() {

    renderScreen(`

        <div class="final-question">

            <div class="final-heart">
                ❤️
            </div>

            <p class="mission-label">
                ONE LAST QUESTION
            </p>

            <h2>
                Are you ready for
                <span>many more memories?</span>
            </h2>

            <p>
                The mission is almost complete...
            </p>

            <div class="yes-no">

                <button
                    class="yes-btn"
                    onclick="finalYes()">
                    YES ❤️
                </button>

                <button
                    class="no-btn"
                    id="noButton"
                    onclick="finalNo()">
                    NO
                </button>

            </div>

            <small id="noMessage"></small>

        </div>
    `);
}


function finalNo() {

    const button =
        document.getElementById("noButton");

    const message =
        document.getElementById("noMessage");

    message.textContent =
        "Are you sure? 👀";

    button.style.transform =
        `translate(${Math.random() * 120 - 60}px,
                   ${Math.random() * 80 - 40}px)`;

    setTimeout(() => {

        message.textContent =
            "Nice try 😂";

    }, 700);
}


function finalYes() {

    showMissionComplete();
}


// =====================================================
// MISSION COMPLETE
// =====================================================

function showMissionComplete() {

    renderScreen(`

        <div class="complete-screen">

            <div class="complete-ring">
                ✓
            </div>

            <p class="complete-label">
                ALL MISSIONS COMPLETED
            </p>

            <h1>
                MISSION<br>
                <span>COMPLETE</span>
            </h1>

            <div class="anniversary-message">

                <h2>
                    Happy Anniversary ❤️
                </h2>

                <p>
                    And this isn't the end...
                </p>

                <p>
                    It's just another chapter
                    of your story together.
                </p>

            </div>

            <button
                class="mission-btn"
                onclick="showMemories()">
                ONE MORE THING
                <span>→</span>
            </button>

        </div>
    `);
}


// =====================================================
// MEMORIES — ACTUAL PHOTOS
// =====================================================

function showMemories() {

    renderScreen(`

        <div class="memories-screen">

            <p class="mission-label">
                A FEW MEMORIES
            </p>

            <h2>
                Moments worth<br>
                <span>remembering.</span>
            </h2>

            <div class="photo-grid">

                <div class="photo-placeholder">
                    <img
                        src="assets/images/memory-01.jpeg"
                        alt="Memory 01"
                        style="
                            width:100%;
                            height:100%;
                            object-fit:contain;
                            display:block;
                        "
                    >
                </div>

                <div class="photo-placeholder">
                    <img
                        src="assets/images/memory-02.jpeg"
                        alt="Memory 02"
                        style="
                            width:100%;
                            height:100%;
                            object-fit:contain;
                            display:block;
                        "
                    >
                </div>

                <div class="photo-placeholder">
                    <img
                        src="assets/images/memory-03.jpeg"
                        alt="Memory 03"
                        style="
                            width:100%;
                            height:100%;
                            object-fit:contain;
                            display:block;
                        "
                    >
                </div>

                <div class="photo-placeholder">
                    <img
                        src="assets/images/memory-04.jpeg"
                        alt="Memory 04"
                        style="
                            width:100%;
                            height:100%;
                            object-fit:contain;
                            display:block;
                        "
                    >
                </div>

            </div>

            <button
                class="mission-btn"
                onclick="showFinalLetter()">
                READ ONE LAST THING
                <span>→</span>
            </button>

        </div>
    `);
}


// =====================================================
// FINAL LETTER
// =====================================================

function showFinalLetter() {

    renderScreen(`

        <div class="final-letter">

            <div class="letter-top">
                FOR YOU ❤️
            </div>

            <h2>
                ${CONFIG.girlfriendName}
            </h2>

            <div class="letter-body">

                <p>
                    Some things are difficult
                    to say in words.
                </p>

                <p>
                    So instead of saying them,
                    I wanted to create something
                    you could experience.
                </p>

                <p>
                    Every memory, every smile
                    and every little moment
                    makes this story special.
                </p>

                <p>
                    Happy Anniversary ❤️
                </p>

            </div>

            <div class= "letter-end">
            THE END...<br>
            OR MAY BE JUST THE BEGINNING.
            </div>

     </div>
     `);
    }      
            
