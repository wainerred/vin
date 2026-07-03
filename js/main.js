/* ==========================================================================
   1win Landing — Scripts
   ========================================================================== */

'use strict';

/**
 * Generate the animated floating particles inside the hero section.
 */
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const PARTICLE_COUNT = 30;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';
        container.appendChild(particle);
    }
}

/**
 * Wire up the bonus buttons. Prevents the default anchor navigation and
 * shows a placeholder redirect message.
 */
function initBonusButtons() {
    document.querySelectorAll('.btn-bonus').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Перенаправление на регистрацию...');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initBonusButtons();
});
