window.addEventListener('DOMContentLoaded', () => {
    const article = document.querySelector('article');
    if (article) {
        article.style.opacity = '0';
        setTimeout(() => {
            article.style.transition = 'opacity 1s ease';
            article.style.opacity = '1';
        }, 100);
    }
});
