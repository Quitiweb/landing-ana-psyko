// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    }

    // Contact Form Submission (via Formspree)
    // Reemplaza TU_ID_FORMSPREE en el atributo action del <form> por tu ID real
    // de https://formspree.io para que los mensajes lleguen al correo de Ana.
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            const action = contactForm.getAttribute('action') || '';

            // Si Formspree no está configurado todavía, evitamos el envío real
            // y avisamos en pantalla en lugar de perder el mensaje.
            if (action.includes('TU_ID_FORMSPREE') || action.trim() === '') {
                e.preventDefault();
                showFormMessage('El formulario aún no está conectado. Escríbenos a ana@anaruizromero.es mientras tanto.', 'error');
                return;
            }

            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.textContent : '';
            if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Enviando…'; }

            try {
                const response = await fetch(action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    showFormMessage('¡Gracias! Tu mensaje se ha enviado correctamente. Te responderé lo antes posible.', 'success');
                    contactForm.reset();
                } else {
                    showFormMessage('Ha ocurrido un problema al enviar el mensaje. Puedes escribirme a ana@anaruizromero.es.', 'error');
                }
            } catch (err) {
                showFormMessage('No se pudo conectar. Comprueba tu conexión o escríbeme a ana@anaruizromero.es.', 'error');
            } finally {
                if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText; }
            }
        });
    }

    function showFormMessage(text, type) {
        let box = document.getElementById('formMessage');
        if (!box) {
            box = document.createElement('div');
            box.id = 'formMessage';
            box.className = 'form-message';
            contactForm.appendChild(box);
        }
        box.textContent = text;
        box.classList.remove('success', 'error');
        box.classList.add(type);
    }

    // Smooth scroll enhancement
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and contact cards
    document.querySelectorAll('.service-card, .contact-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
