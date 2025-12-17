/* O2 Main Logic */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }


    // --- Evaluations Tabs ---
    const tabs = document.querySelectorAll('.tab');
    const evalCards = document.querySelectorAll('.eval-card');
    const completedHeader = document.querySelector('h3[style*="Recently Completed"]');

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                // Add active to clicked tab
                tab.classList.add('active');

                const isPending = tab.innerText.includes('Pending');

                if (isPending) {
                    // Show Pending (not completed class)
                    evalCards.forEach(card => {
                        if (card.classList.contains('completed')) {
                            card.style.display = 'none';
                        } else {
                            card.style.display = 'block';
                        }
                    });
                    if(completedHeader) completedHeader.style.display = 'none';
                } else {
                    // Show Completed
                     evalCards.forEach(card => {
                        if (card.classList.contains('completed')) {
                            card.style.display = 'block'; 
                        } else {
                            card.style.display = 'none';
                        }
                    });
                    if(completedHeader) completedHeader.style.display = 'block';
                    if(completedHeader) completedHeader.innerText = "Completed Evaluations"; // Adjust text
                }
            });
        });
        
        // Init state: Click the 'active' tab to set correct visibility
        const activeTab = document.querySelector('.tab.active');
        if(activeTab) activeTab.click();
    }


    // --- Course Catalog Search ---
    const searchInput = document.querySelector('.search-input');
    const courseCards = document.querySelectorAll('.course-card');

    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const query = e.target.value.toLowerCase();

            courseCards.forEach(card => {
                const text = card.innerText.toLowerCase();
                if (text.includes(query)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

});
