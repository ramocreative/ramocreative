// Navigation

const hamburgerButton = document.querySelector('.hamburger-button');
const navigation = document.querySelector('.navigation')

hamburgerButton.addEventListener('click', () => {
    navigation.hasAttribute('data-visible')
        ? hamburgerButton.setAttribute('aria-expanded', false)
        : hamburgerButton.setAttribute('aria-expanded', true);
    navigation.toggleAttribute('data-visible');
})