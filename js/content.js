/* =====================================================
   💗 ISI KONTEN WEBSITE

   File ini sengaja dibuat terpisah supaya kamu
   mudah mengganti tulisan, nama, dan musik nanti.

   Kamu tidak perlu mengubah script utama.
===================================================== */


const birthdayContent = {

    /* =========================================
       DATA UTAMA
    ========================================== */

    // ✏️ GANTI DENGAN NAMA / PANGGILAN GF
    name: "Sayang",

    // ✏️ GANTI TANGGAL LAHIR DI script.js
    // Format: YYYY-MM-DD


    /* =========================================
       HALAMAN PEMBUKA
    ========================================== */

    welcome: {

        title: "Untuk seseorang yang sangat spesial...",

        description:
            "Aku membuat sesuatu kecil untukmu. " +
            "Mungkin sederhana, tapi dibuat dengan penuh rasa sayang."

    },


    /* =========================================
       PESAN PASSWORD
    ========================================== */

    password: {

        wrong:
            "Hmm... kayaknya bukan tanggal itu 🥺 Coba ingat-ingat lagi ya, Sayang 💗",

        success:
            "Benar! Selamat datang, Sayang 💕"

    },


    /* =========================================
       5 KATA-KATA + 5 FOTO
    ========================================== */

    words: [

        {
            title: "Hal pertama yang membuatku tertarik padamu...",
            text:
                "Ada sesuatu tentang kamu yang sejak awal membuatku ingin mengenalmu lebih jauh. Entah itu senyummu, caramu berbicara, atau caramu menjadi dirimu sendiri. Semakin mengenalmu, semakin aku bersyukur pernah menemukanmu.",
            image: "assets/images/words/foto-01.jpg"
        },

        {
            title: "Salah satu hal yang paling aku suka darimu...",
            text:
                "Aku suka banyak hal tentang kamu. Bahkan mungkin terlalu banyak untuk dituliskan satu per satu. Tapi salah satu yang paling aku suka adalah caramu membuat hari-hariku terasa lebih menyenangkan hanya dengan kehadiranmu.",
            image: "assets/images/words/foto-02.jpg"
        },

        {
            title: "Tentang semua kenangan kita...",
            text:
                "Mungkin bagi orang lain beberapa momen kita terlihat sederhana. Tapi bagiku, hal-hal kecil yang kita lakukan bersama justru menjadi kenangan yang paling berharga.",
            image: "assets/images/words/foto-03.jpg"
        },

        {
            title: "Terima kasih sudah hadir...",
            text:
                "Terima kasih sudah menjadi seseorang yang selalu memberikan warna dalam hidupku. Terima kasih untuk semua tawa, cerita, perhatian, dan waktu yang sudah kita lewati bersama.",
            image: "assets/images/words/foto-04.jpg"
        },

        {
            title: "Kalau aku diberi kesempatan memilih lagi...",
            text:
                "Kalau suatu hari aku diberi kesempatan untuk mengulang semuanya dari awal, aku tetap ingin bertemu denganmu. Tetap ingin mengenalmu. Dan tetap ingin memilih kamu.",
            image: "assets/images/words/foto-05.jpg"
        }

    ],


    /* =========================================
       20 FOTO MEMORY
    ========================================== */

    memories: [

        {
            image: "assets/images/memories/memory-01.jpg",
            caption: "Salah satu momen yang selalu aku ingat 💗"
        },

        {
            image: "assets/images/memories/memory-02.jpg",
            caption: "Momen kecil yang ternyata begitu berarti."
        },

        {
            image: "assets/images/memories/memory-03.jpg",
            caption: "Senyummu selalu berhasil membuat hariku lebih baik."
        },

        {
            image: "assets/images/memories/memory-04.jpg",
            caption: "Satu lagi kenangan yang ingin aku simpan."
        },

        {
            image: "assets/images/memories/memory-05.jpg",
            caption: "Aku senang pernah melewati hari ini bersamamu."
        },

        {
            image: "assets/images/memories/memory-06.jpg",
            caption: "Kenangan sederhana, tapi sangat berarti."
        },

        {
            image: "assets/images/memories/memory-07.jpg",
            caption: "Kalau bisa mengulang hari ini, aku mau."
        },

        {
            image: "assets/images/memories/memory-08.jpg",
            caption: "Terima kasih sudah menjadi bagian dari cerita ini."
        },

        {
            image: "assets/images/memories/memory-09.jpg",
            caption: "Salah satu foto favoritku tentang kita."
        },

        {
            image: "assets/images/memories/memory-10.jpg",
            caption: "Aku ingin lebih banyak momen seperti ini."
        },

        {
            image: "assets/images/memories/memory-11.jpg",
            caption: "Momen yang tidak ingin aku lupakan."
        },

        {
            image: "assets/images/memories/memory-12.jpg",
            caption: "Kita, dalam satu frame kecil."
        },

        {
            image: "assets/images/memories/memory-13.jpg",
            caption: "Terima kasih untuk setiap cerita."
        },

        {
            image: "assets/images/memories/memory-14.jpg",
            caption: "Semoga masih banyak foto seperti ini."
        },

        {
            image: "assets/images/memories/memory-15.jpg",
            caption: "Satu dari banyak alasan aku tersenyum."
        },

        {
            image: "assets/images/memories/memory-16.jpg",
            caption: "Momen yang akan selalu punya tempat."
        },

        {
            image: "assets/images/memories/memory-17.jpg",
            caption: "Aku dan kamu, sesederhana itu."
        },

        {
            image: "assets/images/memories/memory-18.jpg",
            caption: "Kenangan yang ingin terus bertambah."
        },

        {
            image: "assets/images/memories/memory-19.jpg",
            caption: "Semoga perjalanan kita masih panjang."
        },

        {
            image: "assets/images/memories/memory-20.jpg",
            caption: "Dan masih banyak cerita yang belum kita buat. 💗"
        }

    ],


    /* =========================================
       5 LAGU
    ========================================== */

    music: [

        {
            title: "Lagu Kita #1",
            artist: "Untuk Kamu",
            file: "assets/music/lagu-01.mp3"
        },

        {
            title: "Lagu Kita #2",
            artist: "Untuk Kamu",
            file: "assets/music/lagu-02.mp3"
        },

        {
            title: "Lagu Kita #3",
            artist: "Untuk Kamu",
            file: "assets/music/lagu-03.mp3"
        },

        {
            title: "Lagu Kita #4",
            artist: "Untuk Kamu",
            file: "assets/music/lagu-04.mp3"
        },

        {
            title: "Lagu Kita #5",
            artist: "Untuk Kamu",
            file: "assets/music/lagu-05.mp3"
        }

    ]

};