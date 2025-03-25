class Navigation {
    static init() {
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = e.target.dataset.page;
                Navigation.showPage(pageId);
            });
        });

       
        const initialPage = window.location.hash.slice(1) || 'assignment-description';
        Navigation.showPage(initialPage);
    }

    static showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show selected page
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.classList.add('active');
            window.location.hash = pageId;
        }
    }
}