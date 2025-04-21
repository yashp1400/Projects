// Initialize AOS Animation
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Initialize Hero Slider
    const heroSwiper = new Swiper('.hero-swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    // Initialize Testimonial Slider
    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        }
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }

    // Mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
                navbarCollapse.classList.remove('show');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Privacy Policy Modal
    const privacyModal = document.getElementById('privacyModal');
    if (privacyModal) {
        privacyModal.addEventListener('show.bs.modal', function() {
            document.body.style.overflow = 'hidden';
        });
        
        privacyModal.addEventListener('hidden.bs.modal', function() {
            document.body.style.overflow = 'auto';
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            if (!this.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                // Here you would typically send the form data to a server
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            }
            
            this.classList.add('was-validated');
        });

        // Phone number validation
        const phoneInput = contactForm.querySelector('#phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function() {
                // Remove any non-digit characters
                this.value = this.value.replace(/\D/g, '');
                
                // Format the phone number as (XXX) XXX-XXXX
                if (this.value.length > 0) {
                    if (this.value.length <= 3) {
                        this.value = `(${this.value}`;
                    } else if (this.value.length <= 6) {
                        this.value = `(${this.value.substring(0, 3)}) ${this.value.substring(3)}`;
                    } else {
                        this.value = `(${this.value.substring(0, 3)}) ${this.value.substring(3, 6)}-${this.value.substring(6, 10)}`;
                    }
                }
            });
        }
    }

    // Toggle between Login and Signup Forms
    document.querySelectorAll('.toggle-form').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const formToShow = this.getAttribute('data-form');
            
            // Hide all forms
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('signupForm').style.display = 'none';
            
            // Show the selected form
            document.getElementById(formToShow + 'Form').style.display = 'block';
            
            // Reinitialize AOS for the new form
            AOS.refresh();
        });
    });

    // Login Form Validation and Submission
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        const emailInput = loginForm.querySelector('input[type="email"]');
        const continueBtn = loginForm.querySelector('.btn-primary');

        // Email validation function
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        // Real-time email validation
        emailInput.addEventListener('input', function() {
            const isValid = validateEmail(this.value);
            if (isValid) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                continueBtn.disabled = false;
            } else {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
                continueBtn.disabled = true;
            }
        });

        // Form submission
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = emailInput.value;
            
            if (validateEmail(email)) {
                // Here you would typically make an API call to send the login code
                // For now, we'll just show a success message
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert alert-success mt-3';
                alertDiv.textContent = 'Login code has been sent to your email!';
                loginForm.appendChild(alertDiv);
                
                // Clear the form
                emailInput.value = '';
                emailInput.classList.remove('is-valid');
                continueBtn.disabled = true;
                
                // Remove the alert after 5 seconds
                setTimeout(() => {
                    alertDiv.remove();
                }, 5000);
            }
        });
    }

    // Signup Form Validation and Submission
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        const fullNameInput = signupForm.querySelector('#fullName');
        const emailInput = signupForm.querySelector('#signupEmail');
        const phoneInput = signupForm.querySelector('#phone');
        const passwordInput = signupForm.querySelector('#password');
        const confirmPasswordInput = signupForm.querySelector('#confirmPassword');
        const termsCheckbox = signupForm.querySelector('#terms');
        const submitBtn = signupForm.querySelector('.btn-primary');
        
        // Password validation function
        function validatePassword(password) {
            // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
            const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            return re.test(password);
        }
        
        // Phone validation function
        function validatePhone(phone) {
            // Simple validation for demonstration
            return phone.length >= 10;
        }
        
        // Real-time validation for all fields
        [fullNameInput, emailInput, phoneInput, passwordInput, confirmPasswordInput, termsCheckbox].forEach(input => {
            input.addEventListener('input', function() {
                validateSignupForm();
            });
            
            input.addEventListener('change', function() {
                validateSignupForm();
            });
        });
        
        // Validate the entire form
        function validateSignupForm() {
            let isValid = true;
            
            // Full name validation
            if (fullNameInput.value.trim() === '') {
                fullNameInput.classList.add('is-invalid');
                isValid = false;
            } else {
                fullNameInput.classList.remove('is-invalid');
                fullNameInput.classList.add('is-valid');
            }
            
            // Email validation
            if (!validateEmail(emailInput.value)) {
                emailInput.classList.add('is-invalid');
                isValid = false;
            } else {
                emailInput.classList.remove('is-invalid');
                emailInput.classList.add('is-valid');
            }
            
            // Phone validation
            if (!validatePhone(phoneInput.value)) {
                phoneInput.classList.add('is-invalid');
                isValid = false;
            } else {
                phoneInput.classList.remove('is-invalid');
                phoneInput.classList.add('is-valid');
            }
            
            // Password validation
            if (!validatePassword(passwordInput.value)) {
                passwordInput.classList.add('is-invalid');
                isValid = false;
            } else {
                passwordInput.classList.remove('is-invalid');
                passwordInput.classList.add('is-valid');
            }
            
            // Confirm password validation
            if (passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordInput.classList.add('is-invalid');
                isValid = false;
            } else {
                confirmPasswordInput.classList.remove('is-invalid');
                confirmPasswordInput.classList.add('is-valid');
            }
            
            // Terms checkbox validation
            if (!termsCheckbox.checked) {
                termsCheckbox.classList.add('is-invalid');
                isValid = false;
            } else {
                termsCheckbox.classList.remove('is-invalid');
                termsCheckbox.classList.add('is-valid');
            }
            
            // Enable/disable submit button
            submitBtn.disabled = !isValid;
            
            return isValid;
        }
        
        // Form submission
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateSignupForm()) {
                // Here you would typically make an API call to register the user
                // For now, we'll just show a success message
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert alert-success mt-3';
                alertDiv.textContent = 'Account created successfully! Welcome to HakuTrends.';
                signupForm.appendChild(alertDiv);
                
                // Clear the form
                signupForm.reset();
                [fullNameInput, emailInput, phoneInput, passwordInput, confirmPasswordInput, termsCheckbox].forEach(input => {
                    input.classList.remove('is-valid', 'is-invalid');
                });
                submitBtn.disabled = true;
                
                // Remove the alert after 5 seconds
                setTimeout(() => {
                    alertDiv.remove();
                }, 5000);
            }
        });
    }
}); 