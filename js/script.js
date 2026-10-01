/* =====================================================
   💗 BIRTHDAY WEBSITE
   STEP 1 — PASSWORD TANGGAL LAHIR
===================================================== */


/* =====================================================
   🔐 TANGGAL LAHIR

   FORMAT:
   DDMMYYYY

   Contoh:

   15 September 2004
   = 15092004

   ✏️ GANTI BAGIAN INI
===================================================== */

const CORRECT_BIRTHDAY = "01102006";

// ==========================================
// SISTEM SESSION & PROGRESS
// ==========================================

function saveLoginSession() {
    sessionStorage.setItem("birthdayUnlocked", "true");
}

function isLoginSessionActive() {
    return sessionStorage.getItem("birthdayUnlocked") === "true";
}

function saveProgress(page) {
    localStorage.setItem("birthdayProgress", page);
}

function getProgress() {
    return localStorage.getItem("birthdayProgress") || "game";
}



/* =====================================================
   ELEMENT
===================================================== */

const passwordPage =
    document.getElementById("passwordPage");

const welcomePage =
    document.getElementById("welcomePage");

const birthdayInput =
    document.getElementById("birthdayInput");

const errorMessage =
    document.getElementById("errorMessage");

const passwordBox =
    document.getElementById("passwordBox");

const togglePassword =
    document.getElementById("togglePassword");


/* =====================================================
   INPUT TANGGAL
===================================================== */

birthdayInput.addEventListener(
    "input",
    function () {

        /*
         * Hanya angka
         */

        this.value =
            this.value.replace(/\D/g, "");


        /*
         * Maksimal 8 angka
         */

        if (this.value.length > 8) {

            this.value =
                this.value.slice(0, 8);

        }


        /*
         * Setelah 8 angka
         * langsung cek
         */

        if (this.value.length === 8) {

            checkBirthday();

        }

    }
);


/* =====================================================
   CEK PASSWORD
===================================================== */

function checkBirthday() {

    const enteredBirthday =
        birthdayInput.value;


    /*
     * TANGGAL BENAR
     */

    if (
        enteredBirthday ===
        CORRECT_BIRTHDAY
    ) {

        correctBirthday();

        return;

    }


    /*
     * TANGGAL SALAH
     */

    wrongBirthday();

}


/* =====================================================
   ❌ TANGGAL SALAH
===================================================== */

function wrongBirthday() {

    /*
     * Pesan
     */

    errorMessage.textContent =
        "Hmm... sepertinya belum tepat 🥺💗";


    /*
     * Hapus animasi sebelumnya
     */

    passwordBox.classList.remove(
        "shake"
    );


    /*
     * Restart animasi
     */

    void passwordBox.offsetWidth;


    /*
     * Jalankan getaran
     */

    passwordBox.classList.add(
        "shake"
    );


    /*
     * Setelah getar,
     * kosongkan input
     */

    setTimeout(
        function () {

            birthdayInput.value = "";

            birthdayInput.focus();

        },
        450
    );


    /*
     * Hilangkan pesan
     */

    setTimeout(
        function () {

            errorMessage.textContent =
                "";

        },
        2200
    );

}


/* =====================================================
   ✅ TANGGAL BENAR
===================================================== */

function correctBirthday() {
saveLoginSession();
saveProgress("game");
    /*
     * Hilangkan pesan
     */

    errorMessage.textContent =
        "";


    /*
     * Hilangkan keyboard
     */

    birthdayInput.blur();


    /*
     * Efek hati
     */

    createHeartExplosion();


    /*
     * Card sedikit membesar
     */

    passwordBox.style.transform =
        "scale(1.04)";


    passwordBox.style.borderColor =
        "#ee79ad";


    /*
     * Setelah efek,
     * pindah halaman
     */

    setTimeout(
        function () {

            passwordPage.style.opacity =
                "0";

            passwordPage.style.transform =
                "scale(.96)";


            setTimeout(
                function () {

                    passwordPage.classList.add(
                        "hidden"
                    );

                    startGames();

                    /*
                     * Scroll ke atas
                     */

                    window.scrollTo(
                        0,
                        0
                    );

                },
                600
            );

        },
        700
    );

}


/* =====================================================
   💗 EFEK HATI
===================================================== */

function createHeartExplosion() {

    const hearts = [

        "💗",
        "💕",
        "💖",
        "💓",
        "💞",
        "💘"

    ];


    /*
     * Buat 20 hati
     */

    for (
        let i = 0;
        i < 20;
        i++
    ) {


        const heart =
            document.createElement("div");


        /*
         * Random hati
         */

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random()
                    * hearts.length
                )
            ];


        /*
         * Posisi
         */

        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.zIndex =
            "9999";

        heart.style.pointerEvents =
            "none";

        heart.style.fontSize =
            `${18 + Math.random() * 18}px`;


        document.body.appendChild(
            heart
        );


        /*
         * Random arah
         */

        const angle =
            Math.random()
            * Math.PI
            * 2;


        const distance =
            100
            +
            Math.random()
            * 220;


        const x =
            Math.cos(angle)
            * distance;


        const y =
            Math.sin(angle)
            * distance;


        /*
         * Animasi
         */

        const animation =
            heart.animate(

                [

                    {
                        transform:
                            "translate(-50%, -50%) scale(0)",

                        opacity: 0

                    },

                    {

                        transform:
                            "translate(-50%, -50%) scale(1)",

                        opacity: 1,

                        offset: .2

                    },

                    {

                        transform:
                            `translate(
                                calc(-50% + ${x}px),
                                calc(-50% + ${y}px)
                            )
                            scale(.7)`,

                        opacity: 0

                    }

                ],

                {

                    duration:
                        900
                        +
                        Math.random()
                        * 500,

                    easing:
                        "cubic-bezier(.2,.8,.3,1)"

                }

            );


        /*
         * Hapus elemen
         */

        animation.onfinish =
            function () {

                heart.remove();

            };

    }

}


/* =====================================================
   👁️ LIHAT PASSWORD
===================================================== */

togglePassword.addEventListener(
    "click",
    function () {


        if (
            birthdayInput.type ===
            "password"
        ) {

            birthdayInput.type =
                "text";

            togglePassword.textContent =
                "🙈";

        }

        else {

            birthdayInput.type =
                "password";

            togglePassword.textContent =
                "👁️";

        }

    }
);


/* =====================================================
   🚀 SAAT WEBSITE DIBUKA
===================================================== */

window.addEventListener(
    "load",
    function () {

        birthdayInput.focus();

    }
);


/* =====================================================
   🎮 GAME SYSTEM
===================================================== */


/* =====================================================
   GAME 1 — XOX
===================================================== */

let xoxBoard = [];

let xoxPlayer = "X";

let xoxGameOver = false;


/*
   Setelah password benar,
   panggil fungsi ini.
*/

function startGames() {
    const gamePage = document.getElementById("gamePage");
    const memoryGame = document.getElementById("memoryGame");
    const catchGame = document.getElementById("catchGame");
    const wordsPage = document.getElementById("wordsPage");
    const memoriesPage = document.getElementById("memoriesPage");
    const galleryPage = document.getElementById("galleryPage");
    const finalPage = document.getElementById("finalPage");

    // Sembunyikan semua halaman terlebih dahulu
    if (gamePage) gamePage.classList.add("hidden");
    if (memoryGame) memoryGame.classList.add("hidden");
    if (catchGame) catchGame.classList.add("hidden");
    if (wordsPage) wordsPage.classList.add("hidden");
    if (memoriesPage) memoriesPage.classList.add("hidden");
    if (galleryPage) galleryPage.classList.add("hidden");
    if (finalPage) finalPage.classList.add("hidden");

    const progress = getProgress();

    console.log("Progress terakhir:", progress);

    // GAME 1
    if (progress === "game") {
        gamePage.classList.remove("hidden");
        startXOX();
        return;
    }

    // GAME 2
    if (progress === "memory") {
        memoryGame.classList.remove("hidden");
        startMemoryGame();
        return;
    }

    // GAME 3
    if (progress === "catch") {
        catchGame.classList.remove("hidden");
        resetCatchGame();
        return;
    }

    // KATA-KATA
    if (progress === "words") {
        wordsPage.classList.remove("hidden");
        return;
    }

    // 5 KENANGAN
    if (progress === "memories") {
        memoriesPage.classList.remove("hidden");

        setTimeout(() => {
            startMemoryAnimations();
        }, 100);

        return;
    }

    // 20 FOTO + MUSIK

if (progress === "gallery") {
        galleryPage.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        return;
}


if (progress === "final") {
    finalPage.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return;
}


    // Jika progress tidak dikenal
    gamePage.classList.remove("hidden");
    saveProgress("game");
    startXOX();
}

/* =====================================================
   START XOX
===================================================== */

function startXOX() {

    const board =
        document.getElementById(
            "xoxBoard"
        );

    board.innerHTML = "";

    xoxBoard =
        Array(9).fill("");

    xoxPlayer = "X";

    xoxGameOver = false;


    document
        .getElementById(
            "xoxStatus"
        )
        .textContent =
        "Baby duluan 💗";


    for (
        let i = 0;
        i < 9;
        i++
    ) {

        const cell =
            document.createElement(
                "button"
            );

        cell.className =
            "xox-cell";

        cell.addEventListener(
            "click",
            () => playXOX(i)
        );

        board.appendChild(cell);

    }

}


/* =====================================================
   MAIN XOX
===================================================== */

function playXOX(index) {

    if (
        xoxBoard[index] !== "" ||
        xoxGameOver
    ) {

        return;

    }


    xoxBoard[index] =
        xoxPlayer;


    const cells =
        document.querySelectorAll(
            ".xox-cell"
        );


    cells[index].textContent =
        xoxPlayer;


    cells[index].classList.add(
        xoxPlayer.toLowerCase()
    );


    /*
     * Cek menang
     */

    if (
        checkXOXWin(
            xoxPlayer
        )
    ) {

        xoxGameOver = true;


        document
            .getElementById(
                "xoxStatus"
            )
            .textContent =
            "YEAY! Sayang menang! 🥰💗";


        /*
         * Otomatis masuk
         * game berikutnya
         */

        saveProgress("memory");
setTimeout(goToMemory, 1300);

        return;

    }


    /*
     * Cek seri
     */

    if (
        !xoxBoard.includes("")
    ) {

        document
            .getElementById(
                "xoxStatus"
            )
            .textContent =
            "Seri! Kita coba lagi 💕";


        setTimeout(
            startXOX,
            1000
        );

        return;

    }


    /*
     * Giliran komputer
     */

    xoxPlayer = "O";


    setTimeout(
        computerXOX,
        400
    );

}


/* =====================================================
   KOMPUTER XOX
===================================================== */

function computerXOX() {

    if (xoxGameOver) {

        return;

    }


    const empty =
        xoxBoard
            .map(
                (value, index) =>
                    value === ""
                        ? index
                        : null
            )
            .filter(
                index =>
                    index !== null
            );


    if (!empty.length) {

        return;

    }


    /*
     * Komputer memilih random
     */

    const choice =
        empty[
            Math.floor(
                Math.random()
                *
                empty.length
            )
        ];


    xoxBoard[choice] =
        "O";


    const cells =
        document.querySelectorAll(
            ".xox-cell"
        );


    cells[choice].textContent =
        "O";


    cells[choice].classList.add(
        "o"
    );


    /*
     * Komputer menang
     */

    if (
        checkXOXWin("O")
    ) {

        document
            .getElementById(
                "xoxStatus"
            )
            .textContent =
            "Hehe aku menang 😝 coba lagi!";


        setTimeout(
            startXOX,
            1200
        );


        return;

    }


    xoxPlayer = "X";


    document
        .getElementById(
            "xoxStatus"
        )
        .textContent =
        "Giliran Baby 💗";

}


/* =====================================================
   CEK XOX
===================================================== */

function checkXOXWin(player) {

    const combinations = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]

    ];


    return combinations.some(
        combination =>
            combination.every(
                index =>
                    xoxBoard[index]
                    ===
                    player
            )
    );

}


/* =====================================================
   PINDAH XOX → MEMORY
===================================================== */

function goToMemory() {

    document
        .getElementById(
            "gamePage"
        )
        .classList.add(
            "hidden"
        );


    document
        .getElementById(
            "memoryGame"
        )
        .classList.remove(
            "hidden"
        );


    startMemory();

}


/* =====================================================
   🐶🐱🦆 GAME 2 — MEMORY
===================================================== */

let memoryFirst = null;

let memorySecond = null;

let memoryLocked = false;

let memoryMatched = 0;


const animalCards = [

    {
        name: "dog",
        image:
            "assets/images/games/dog.png"
    },

    {
        name: "cat",
        image:
            "assets/images/games/cat.png"
    },

    {
        name: "duck",
        image:
            "assets/images/games/duck.png"
    },

    {
        name: "rabbit",
        image:
            "assets/images/games/rabbit.png"
    },

    {
        name: "panda",
        image:
            "assets/images/games/panda.png"
    },

    {
        name: "bear",
        image:
            "assets/images/games/bear.png"
    }

];


function startMemory() {

    const board =
        document.getElementById(
            "memoryBoard"
        );


    board.innerHTML = "";

    memoryFirst = null;

    memorySecond = null;

    memoryLocked = false;

    memoryMatched = 0;


    /*
     * Buat dua kartu
     * untuk setiap hewan
     */

    let cards = [

        ...animalCards,

        ...animalCards

    ];


    /*
     * Acak
     */

    cards.sort(
        () =>
            Math.random() - .5
    );


    cards.forEach(
        (animal, index) => {

            const card =
                document.createElement(
                    "button"
                );


            card.className =
                "memory-card";


            card.dataset.name =
                animal.name;


            card.dataset.image =
                animal.image;


            card.addEventListener(
                "click",
                () =>
                    flipMemory(card)
            );


            board.appendChild(
                card
            );

        }
    );


    document
        .getElementById(
            "memoryStatus"
        )
        .textContent =
        "Cari semua pasangan! 🐾💗";

}


/* =====================================================
   FLIP MEMORY
===================================================== */

function flipMemory(card) {

    if (

        memoryLocked ||

        card.classList.contains(
            "flipped"
        ) ||

        card.classList.contains(
            "matched"
        )

    ) {

        return;

    }


    card.classList.add(
        "flipped"
    );


    const image =
        document.createElement(
            "img"
        );


    image.src =
        card.dataset.image;


    image.alt =
        card.dataset.name;


    card.appendChild(
        image
    );


    if (!memoryFirst) {

        memoryFirst =
            card;

        return;

    }


    memorySecond =
        card;

    memoryLocked = true;


    /*
     * PASANGAN COCOK
     */

    if (
        memoryFirst.dataset.name
        ===
        memorySecond.dataset.name
    ) {

        memoryFirst.classList.add(
            "matched"
        );

        memorySecond.classList.add(
            "matched"
        );


        memoryMatched += 2;


        memoryFirst = null;

        memorySecond = null;

        memoryLocked = false;


        document
            .getElementById(
                "memoryStatus"
            )
            .textContent =
            "Benar! 🥰 Cari pasangan berikutnya";


        /*
         * Semua selesai
         */

        if (
            memoryMatched ===
            animalCards.length * 2
        ) {

            document
                .getElementById(
                    "memoryStatus"
                )
                .textContent =
                "SEMUA PASANGAN KETEMU! 🥳💗";


            saveProgress("catch");
setTimeout(goToCatch, 1500);
        }


        return;

    }


    /*
     * SALAH
     */

    setTimeout(
        () => {

            memoryFirst
                .classList
                .remove(
                    "flipped"
                );


            memorySecond
                .classList
                .remove(
                    "flipped"
                );


            memoryFirst.innerHTML =
                "";

            memorySecond.innerHTML =
                "";


            memoryFirst = null;

            memorySecond = null;

            memoryLocked = false;


            document
                .getElementById(
                    "memoryStatus"
                )
                .textContent =
                "Belum cocok 🥺 coba lagi!";

        },
        700
    );

}


/* =====================================================
   MEMORY → CATCH
===================================================== */

function goToCatch() {

    document
        .getElementById(
            "memoryGame"
        )
        .classList.add(
            "hidden"
        );


    document
        .getElementById(
            "catchGame"
        )
        .classList.remove(
            "hidden"
        );


    resetCatchGame();


    setTimeout(
        startCatchGame,
        800
    );

}


/* =====================================================
   💗 GAME 3 — TANGKAP HATI
===================================================== */

let catchScore = 0;

let catchTimer = 10;

let catchInterval = null;

let catchRunning = false;


function resetCatchGame() {

    clearInterval(catchInterval);

    catchRunning = false;

    catchScore = 0;

    catchTimer = 10;


    // Reset tampilan skor
    document.getElementById("catchScore").textContent = "0";


    // Reset timer
    document.getElementById("catchTimer").textContent = "10";


    // Hapus semua hati yang masih ada
    const area = document.getElementById("catchArea");

    area.querySelectorAll(".falling-heart").forEach(
        heart => heart.remove()
    );


    // Reset pesan
    document.getElementById("startCatchText").textContent =
        "siap-siap sayanggg... 💕";
}   

/* =====================================================
   START CATCH
===================================================== */

function startCatchGame() {

    if (catchRunning) {
        return;
    }


    catchRunning = true;

    catchScore = 0;

    catchTimer = 10;


    // Reset skor
    document.getElementById("catchScore").textContent = "0";


    // Reset timer
    document.getElementById("catchTimer").textContent = "10";


    // Hilangkan tulisan bersiap
    document.getElementById("startCatchText").textContent = "";


    // Timer 20 detik
    catchInterval = setInterval(() => {

        catchTimer--;


        document.getElementById("catchTimer").textContent =
            catchTimer;


        if (catchTimer <= 0) {

            endCatchGame();

        }

    }, 1000);


    // Mulai hati berjatuhan
    createFallingHeart();
}

/* =====================================================
   BUAT HATI
===================================================== */

function createFallingHeart() {

    if (!catchRunning) {

        return;

    }


    const area =
        document.getElementById(
            "catchArea"
        );


    const heart =
        document.createElement(
            "button"
        );


    heart.className =
        "falling-heart";


    heart.textContent =
        "💗";


    heart.style.left =
        `${Math.random() * 85}%`;


    heart.addEventListener(
        "click",
        () => {

            catchScore++;


            document
                .getElementById(
                    "catchScore"
                )
                .textContent =
                catchScore;


            heart.remove();

        }
    );


    area.appendChild(
        heart
    );


    setTimeout(
        () => {

            if (
                heart.parentElement
            ) {

                heart.remove();

            }

        },
        1800
    );


    setTimeout(
        createFallingHeart,
        500
    );

}


/* =====================================================
   GAME SELESAI
===================================================== */

function endCatchGame() {

    catchRunning = false;

    clearInterval(catchInterval);


    // Hapus hati yang masih ada
    document
        .getElementById("catchArea")
        .querySelectorAll(".falling-heart")
        .forEach(
            heart => heart.remove()
        );


    // ==========================================
    // BERHASIL
    // ==========================================

    if (catchScore >= 2) {
        saveProgress("words");

        document.getElementById("startCatchText").textContent =
            `YEAY! sayang berhasil menangkap ${catchScore} hati! 🥰💗`;


        // Lanjut ke halaman berikutnya
        setTimeout(
            finishGames,
            2200
        );


        return;
    }


    // ==========================================
    // GAGAL
    // ==========================================

    document.getElementById("startCatchText").textContent =
        `Aduh, baru ${catchScore} hati baby🥺💗`;


    // Beri tahu bahwa harus mengulang
    setTimeout(() => {

        document.getElementById("startCatchText").textContent =
            "Belum cukup! Kita coba lagi yaa sayangkoo 💪💗";


        // Reset dan mulai lagi otomatis
        setTimeout(() => {

            resetCatchGame();

            startCatchGame();

        }, 1200);

    }, 1000);
}

/* =====================================================
   SELESAI SEMUA GAME
===================================================== */

function finishGames() {

    const catchGame =
        document.getElementById("catchGame");

    const wordsPage =
        document.getElementById("wordsPage");


    // Sembunyikan Game 3
    catchGame.classList.add("hidden");


    // Tampilkan halaman kata-kata
    wordsPage.classList.remove("hidden");


    // Scroll ke paling atas
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ==========================================
// CEK SESSION SAAT WEBSITE DIBUKA
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    if (isLoginSessionActive()) {
        // Password sudah benar dalam sesi ini
        document.getElementById("passwordPage").classList.add("hidden");

        setTimeout(() => {
            startGames();
        }, 100);
    }
});


// ==========================================
// PINDAH KE HALAMAN 5 KENANGAN
// ==========================================


// ==========================================
// DARI 5 FOTO KE GALERI 20 FOTO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const openGalleryBtn = document.getElementById("openGalleryBtn");

    if (openGalleryBtn) {
        openGalleryBtn.addEventListener("click", () => {

            // Simpan bahwa halaman 5 foto sudah selesai
            saveProgress("gallery");

            const memoriesPage =
                document.getElementById("memoriesPage");

            const galleryPage =
                document.getElementById("galleryPage");

            memoriesPage.classList.add("hidden");

            if (galleryPage) {
                galleryPage.classList.remove("hidden");

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }

        });
    }

});





document.addEventListener("DOMContentLoaded", () => {

    const openMemoriesBtn = document.getElementById("openMemoriesBtn");

    if (openMemoriesBtn) {
        openMemoriesBtn.addEventListener("click", () => {

            saveProgress("memories");

            const wordsPage = document.getElementById("wordsPage");
            const memoriesPage = document.getElementById("memoriesPage");

            wordsPage.classList.add("hidden");
            memoriesPage.classList.remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            // Jalankan animasi foto
            startMemoryAnimations();
        });

    }

});


// ==========================================
// ANIMASI FOTO SAAT DI-SCROLL
// ==========================================

function startMemoryAnimations() {

    const memoryItems = document.querySelectorAll(".memory-item");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.2
    });

    memoryItems.forEach((item) => {
        observer.observe(item);
    });
}


// ==========================================
// GALLERY & MUSIC PLAYER
// ==========================================

// ==========================================
// GLOBAL MUSIC SYSTEM
// ==========================================

const songs = [
    {
        title: "All of Me",
        artist: "John Legend",
        src: "assets/music/song1.mp3"
    },
    {
        title: "seasons",
        artist: "wave to earth",
        src: "assets/music/song2.mp3"
    },
    {
        title: "Can't Help Falling in Love",
        artist: "Elvis Presley",
        src: "assets/music/song3.mp3"
    },
    {
        title: "Aku Milikmu",
        artist: "Dewa 19",
        src: "assets/music/song4.mp3"
    },
    {
        title: "Last Night on Earth",
        artist: "Green Day",
        src: "assets/music/song5.mp3"
    }
];

let currentSong = 0;

const audioPlayer = new Audio();

audioPlayer.volume = 0.5;
audioPlayer.loop = false;


// ==========================================
// LOAD SONG
// ==========================================

function loadSong(index, autoPlay = false) {

    currentSong = index;

    const song = songs[currentSong];

    audioPlayer.src = song.src;

    audioPlayer.load();

    // Update tampilan Gallery
    const musicCover = document.getElementById("musicCover");

    if (musicCover) {
        musicCover.src =
            `assets/images/music/cover${currentSong + 1}.jpg`;
    }

    const songNumber =
        document.getElementById("currentSongNumber");

    const songTitle =
        document.getElementById("currentSongTitle");

    const songArtist =
        document.getElementById("currentSongArtist");

    const songLabels = [
    "For You, Always",
    "Our Little Moments",
    "Falling for You",
    "Just Yours",
    "Until the End"
];

if (songNumber) {
    songNumber.textContent = songLabels[currentSong];

    }

    if (songTitle) {
        songTitle.textContent = song.title;
    }

    if (songArtist) {
        songArtist.textContent = song.artist;
    }


    // Update active song
    document.querySelectorAll(".song-item").forEach((item, i) => {

        item.classList.toggle(
            "active",
            i === currentSong
        );

    });


    // Reset progress
    const progress =
        document.getElementById("musicProgress");

    const currentTime =
        document.getElementById("musicCurrentTime");

    if (progress) {
        progress.style.width = "0%";
    }

    if (currentTime) {
        currentTime.textContent = "0:00";
    }


    // Autoplay
    if (autoPlay) {
        playSong();
    }
}


// ==========================================
// PLAY
// ==========================================

function playSong() {

    const playPromise = audioPlayer.play();

    if (playPromise !== undefined) {

        playPromise
            .then(() => {

                const button =
                    document.getElementById("playSongBtn");

                if (button) {
                    button.textContent = "⏸";
                }

                const disc =
                    document.querySelector(".music-disc");

                if (disc) {
                    disc.classList.add("playing");
                }

            })
            .catch(() => {

                console.log(
                    "Autoplay diblokir browser. Menunggu interaksi pengguna."
                );

            });

    }
}


// ==========================================
// PAUSE
// ==========================================

function pauseSong() {

    audioPlayer.pause();

    const button =
        document.getElementById("playSongBtn");

    if (button) {
        button.textContent = "▶";
    }

    const disc =
        document.querySelector(".music-disc");

    if (disc) {
        disc.classList.remove("playing");
    }
}


// ==========================================
// TOGGLE PLAY / PAUSE
// ==========================================

function toggleSong() {

    if (audioPlayer.paused) {
        playSong();
    } else {
        pauseSong();
    }

}


// ==========================================
// NEXT SONG
// ==========================================

function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong, true);
}


// ==========================================
// PREVIOUS SONG
// ==========================================

function previousSong() {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong, true);
}


// ==========================================
// FORMAT TIME
// ==========================================

function formatTime(seconds) {

    if (isNaN(seconds)) {
        return "0:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        Math.floor(seconds % 60);

    return `${minutes}:${secs
        .toString()
        .padStart(2, "0")}`;
}


// ==========================================
// UPDATE MUSIC PROGRESS
// ==========================================

audioPlayer.addEventListener(
    "timeupdate",
    () => {

        const progress =
            document.getElementById("musicProgress");

        const currentTime =
            document.getElementById("musicCurrentTime");

        if (!progress) return;

        if (audioPlayer.duration) {

            const percent =
                (audioPlayer.currentTime /
                    audioPlayer.duration) * 100;

            progress.style.width =
                `${percent}%`;
        }

        if (currentTime) {

            currentTime.textContent =
                formatTime(
                    audioPlayer.currentTime
                );

        }

    }
);


// ==========================================
// UPDATE DURATION
// ==========================================

audioPlayer.addEventListener(
    "loadedmetadata",
    () => {

        const duration =
            document.getElementById("musicDuration");

        if (duration) {

            duration.textContent =
                formatTime(
                    audioPlayer.duration
                );

        }

    }
);


// ==========================================
// SONG FINISHED
// ==========================================

audioPlayer.addEventListener(
    "ended",
    () => {

        nextSong();

    }
);


// ==========================================
// MUSIC BUTTONS
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const playButton =
            document.getElementById("playSongBtn");

        const nextButton =
            document.getElementById("nextSongBtn");

        const previousButton =
            document.getElementById("prevSongBtn");


        if (playButton) {

            playButton.addEventListener(
                "click",
                toggleSong
            );

        }


        if (nextButton) {

            nextButton.addEventListener(
                "click",
                nextSong
            );

        }


        if (previousButton) {

            previousButton.addEventListener(
                "click",
                previousSong
            );

        }


        // Pilih lagu dari daftar
        document
            .querySelectorAll(".song-item")
            .forEach((item, index) => {

                item.addEventListener(
                    "click",
                    () => {

                        loadSong(
                            index,
                            true
                        );

                    }
                );

            });


        // Lagu pertama
        loadSong(0, false);


        // ==================================
        // COBA AUTOPLAY SAAT WEBSITE DIBUKA
        // ==================================

        setTimeout(() => {

            playSong();

        }, 300);

    }
);


// ==========================================
// AUTOPLAY FALLBACK
// ==========================================
// Jika browser memblokir autoplay,
// lagu akan mulai setelah interaksi pertama.

function tryStartMusic() {

    if (audioPlayer.paused) {

        playSong();

    }

}


// Interaksi pertama pengguna
document.addEventListener(
    "click",
    tryStartMusic,
    { once: true }
);

document.addEventListener(
    "touchstart",
    tryStartMusic,
    { once: true }
);

document.addEventListener(
    "keydown",
    tryStartMusic,
    { once: true }
);





// ==========================================
// FINAL SURPRISE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const giftButton = document.getElementById("giftBoxBtn");
    const finalMessage = document.getElementById("finalMessage");
    const restartButton = document.getElementById("restartBirthdayBtn");

    if (giftButton) {

        giftButton.addEventListener("click", () => {

            // Sembunyikan hadiah
            giftButton.style.display = "none";

            const giftHint = document.querySelector(".gift-hint");

            if (giftHint) {
                giftHint.style.display = "none";
            }

            // Tampilkan pesan
            if (finalMessage) {
                finalMessage.classList.remove("hidden");
            }

            // Tombol "Mulai lagi" muncul setelah 15 detik
const restartButton = document.getElementById("restartBirthdayBtn");

if (restartButton) {

    setTimeout(() => {

        restartButton.classList.add("show");

    }, 15000);

}

            // Confetti
            createFinalConfetti();
        });
    }


    // ==========================================
    // MULAI LAGI
    // ==========================================

    if (restartButton) {

        const restartButton =
    document.getElementById("restartBirthdayBtn");

const restartConfirmModal =
    document.getElementById("restartConfirmModal");

const cancelRestartBtn =
    document.getElementById("cancelRestartBtn");

const confirmRestartBtn =
    document.getElementById("confirmRestartBtn");


/* ==========================================
   BUKA KONFIRMASI
   ========================================== */

if (restartButton && restartConfirmModal) {

    restartButton.addEventListener("click", () => {

        restartConfirmModal.classList.remove("hidden");

    });

}


/* ==========================================
   BATAL
   ========================================== */

if (cancelRestartBtn && restartConfirmModal) {

    cancelRestartBtn.addEventListener("click", () => {

        restartConfirmModal.classList.add("hidden");

    });

}


/* ==========================================
   KONFIRMASI MULAI ULANG
   ========================================== */

if (confirmRestartBtn) {

    confirmRestartBtn.addEventListener("click", () => {

        localStorage.removeItem("birthdayProgress");

        saveProgress("game");

        sessionStorage.removeItem("birthdayUnlocked");

        location.reload();

    });

}
    }

});


// ==========================================
// CONFETTI SEDERHANA
// ==========================================

function createFinalConfetti() {

    const symbols = ["💗", "💕", "✨", "🎉", "♡"];

    for (let i = 0; i < 25; i++) {

        const confetti = document.createElement("div");

        confetti.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize =
            Math.random() * 15 + 15 + "px";

        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        confetti.style.transition =
            `transform ${Math.random() * 2 + 2}s linear,
             opacity 2s ease`;

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.transform =
                `translateY(110vh) rotate(${Math.random() * 720}deg)`;

            confetti.style.opacity = "0";

        }, 50);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}




// ==========================================
// GALLERY → FINAL SURPRISE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const openFinalBtn = document.getElementById("openFinalBtn");
    const galleryPage = document.getElementById("galleryPage");
    const finalPage = document.getElementById("finalPage");

    if (openFinalBtn && galleryPage && finalPage) {

        openFinalBtn.addEventListener("click", () => {

            // Simpan progress
            saveProgress("final");

            // Sembunyikan Gallery
            galleryPage.classList.add("hidden");

            // Tampilkan Final Surprise
            finalPage.classList.remove("hidden");

            // Kembali ke posisi paling atas
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});


// ==========================================
// 68 PHOTO SNAKE GALLERY
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    createSnakeGallery();

});


function createSnakeGallery() {
    const track1 = document.getElementById("photoTrack1");
    const track2 = document.getElementById("photoTrack2");

    if (!track1 || !track2) return;

    const photos = [];

    for (let i = 1; i <= 68; i++) {
        photos.push(`assets/images/gallery/photo${i}.jpg`);
    }

    // 34 foto untuk masing-masing baris
    const row1 = photos.slice(0, 34);
    const row2 = photos.slice(34, 68);

    createSeamlessTrack(track1, row1);
    createSeamlessTrack(track2, row2);

    setupPhotoPause(track1);
    setupPhotoPause(track2);
}

function createSeamlessTrack(track, photoList) {
    track.innerHTML = "";

    // Set pertama
    addPhotos(track, photoList);

    // Set kedua = salinan identik
    addPhotos(track, photoList);

    // Set ketiga untuk menjaga area tetap penuh
    addPhotos(track, photoList);
}

function addPhotos(track, photoList) {
    photoList.forEach((src) => {
        const photo = document.createElement("div");
        photo.className = "gallery-photo";

        const img = document.createElement("img");
        img.src = src;
        img.alt = "Kenangan";
        img.loading = "lazy";
        img.draggable = false;

        photo.appendChild(img);
        track.appendChild(photo);
    });
}


// ==========================================
// PAUSE / PLAY PHOTO GALLERY
// ==========================================

function pauseAllPhotoTracks() {
    document.querySelectorAll(".photo-track").forEach((track) => {
        track.style.animationPlayState = "paused";
    });
}

function playAllPhotoTracks() {
    document.querySelectorAll(".photo-track").forEach((track) => {
        track.style.animationPlayState = "running";
    });
}


// ==========================================
// HANYA SATU FOTO YANG BISA DIPILIH
// ==========================================

// ==========================================
// GALLERY PHOTO SELECT
// Tap = pause + zoom
// Swipe = tidak melakukan apa-apa
// ==========================================

let selectedGalleryPhoto = null;

function setupPhotoPause(track) {
    if (!track) return;

    let pressPhoto = null;
    let startX = 0;
    let startY = 0;
    let isDragging = false;

    track.addEventListener("pointerdown", (event) => {
        const photo = event.target.closest(".gallery-photo");

        if (!photo) return;

        // Kalau sudah ada foto yang dipilih,
        // jangan pilih foto lain
        if (
            selectedGalleryPhoto &&
            selectedGalleryPhoto !== photo
        ) {
            return;
        }

        pressPhoto = photo;
        startX = event.clientX;
        startY = event.clientY;
        isDragging = false;
    });

    // ==========================================
    // DETEKSI GERAKAN JARI / MOUSE
    // ==========================================

    track.addEventListener("pointermove", (event) => {
        if (!pressPhoto) return;

        const moveX = Math.abs(event.clientX - startX);
        const moveY = Math.abs(event.clientY - startY);

        // Lebih dari 10px = dianggap sedang geser
        if (moveX > 10 || moveY > 10) {
            isDragging = true;
            pressPhoto = null;
        }
    });

    // ==========================================
    // POINTER UP
    // ==========================================

    track.addEventListener("pointerup", (event) => {
        const photo = event.target.closest(".gallery-photo");

        // Kalau tadi ternyata geser, jangan zoom
        if (isDragging || !pressPhoto) {
            pressPhoto = null;
            isDragging = false;
            return;
        }

        if (!photo) {
            pressPhoto = null;
            return;
        }

        // ======================================
        // FOTO BENAR-BENAR DITAP
        // ======================================

        selectedGalleryPhoto = photo;

        pauseAllPhotoTracks();

        photo.classList.add("photo-selected");

        pressPhoto = null;
        isDragging = false;
    });

    track.addEventListener("pointercancel", () => {
        pressPhoto = null;
        isDragging = false;
    });
}


// ==========================================
// TEKAN AREA KOSONG
// UNTUK MELANJUTKAN GALLERY
// ==========================================

document.addEventListener("pointerdown", (event) => {
    if (!selectedGalleryPhoto) return;

    const clickedPhoto = event.target.closest(".gallery-photo");

    // Hanya area kosong
    if (!clickedPhoto) {
        selectedGalleryPhoto.classList.remove("photo-selected");

        selectedGalleryPhoto = null;

        playAllPhotoTracks();
    }
});