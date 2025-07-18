// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Add fade-in animation to sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section, .card');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'hsla(220, 26%, 14%, 0.95)';
    } else {
        header.style.backgroundColor = 'hsla(220, 26%, 14%, 0.8)';
    }
});

// Add click handlers for buttons
document.addEventListener('click', function(e) {
    // Email buttons
    if (e.target.closest('.btn') && e.target.textContent.includes('Send me an Email')) {
        window.location.href = 'mailto:suhasbegade21@gmail.com';
    }
    
    // Resume download buttons
    if (e.target.closest('.btn') && e.target.textContent.includes('Download Resume')) {
        // You can replace this with actual resume file path
        alert('Resume download feature - please add your actual resume file path');
    }
    
    // Social media links
    if (e.target.closest('.social-link') || e.target.closest('.social-btn') || e.target.closest('.footer-link')) {
        // Links are handled by anchor tags
        return;
    }
    
    // Project buttons
    if (e.target.closest('.btn') && e.target.textContent.includes('Live Demo')) {
        alert('Project demo - please add your actual project URLs');
    }
    
    if (e.target.closest('.btn') && e.target.textContent.includes('Source Code')) {
        alert('Source code - please add your actual GitHub repository URLs');
    }
    
    if (e.target.closest('.btn') && e.target.textContent.includes('View All Projects')) {
        window.open('https://github.com', '_blank');
    }
});

// Mobile menu functionality (if you want to add a mobile menu later)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-open');
}

// Typing effect for hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add some interactive hover effects
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.project-card')) {
        e.target.closest('.project-card').style.transform = 'translateY(-5px)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.project-card')) {
        e.target.closest('.project-card').style.transform = 'translateY(0)';
    }
});

// Form validation (if you add a contact form later)
function validateContactForm(form) {
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');
    
    if (!email.value || !message.value) {
        alert('Please fill in all required fields');
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    return true;
}

// Parallax effect for hero section (optional enhancement)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add dynamic year to footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
});

// Skills animation on scroll
function animateSkills() {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize skill tags animation
document.addEventListener('DOMContentLoaded', function() {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        tag.style.transition = 'all 0.3s ease';
    });
    
    const skillsSection = document.getElementById('skills');
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
});