// BAGIAN NAVBAR

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-links a');

// Menangani event scroll untuk menyembunyikan atau menampilkan navbar
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll Down - Sembunyikan navbar
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll Up - Tampilkan navbar
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Untuk memastikan lastScrollTop tidak menjadi negatif
});

document.getElementById('menu-icon').addEventListener('click', function() {
    this.classList.toggle('active');
});

// Menangani event click pada ikon menu untuk menampilkan atau menyembunyikan menu navigasi
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    if (window.innerWidth <= 768) {
        navbar.style.transform = 'translateY(0)'; // Pastikan navbar tetap terlihat saat menu dibuka
    }
});

// Menangani event click pada setiap link di menu navigasi
links.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('show'); // Sembunyikan menu setelah link di-klik
            // Menambahkan efek scroll ke atas sebelum menyembunyikan navbar
            setTimeout(() => {
                navbar.style.transform = 'translateY(-100%)'; // Navbar kembali tersembunyi
            }, 300); // Durasi animasi menu navigasi, sesuaikan dengan CSS
        }
    });
});


// BAGIAN NAVBAR


// BAGIAN SECCROL===
// Fungsi untuk mengecek jika elemen berada di viewport

document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".scroll-kanan");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  scrollElements.forEach(element => {
    observer.observe(element);
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".scroll-kiri");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  scrollElements.forEach(element => {
    observer.observe(element);
  });
});



window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-atas');
    elements.forEach(function(element) {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            element.classList.add('scrolled');
        } else {
            element.classList.remove('scrolled');
        }
    });
});


















