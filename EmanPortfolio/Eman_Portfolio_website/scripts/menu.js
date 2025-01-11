function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarContent = document.getElementById('sidebar-content');
    sidebar.classList.toggle('w-64');
    sidebarContent.classList.toggle('hidden');
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    
    mobileMenu.classList.toggle('hidden');
    
    // Animate hamburger to X
    line1.classList.toggle('rotate-45');
    line1.classList.toggle('translate-y-1.5');
    line2.classList.toggle('opacity-0');
    line3.classList.toggle('-rotate-45');
    line3.classList.toggle('-translate-y-1.5');

    // Close profile menu if open
    const profileMenu = document.getElementById('profileMenu');
    if (!profileMenu.classList.contains('hidden')) {
        profileMenu.classList.add('hidden');
    }
}

function toggleProfileMenu() {
    const profileMenu = document.getElementById('profileMenu');
    profileMenu.classList.toggle('hidden');
    
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        // Reset hamburger icon
        const line1 = document.getElementById('line1');
        const line2 = document.getElementById('line2');
        const line3 = document.getElementById('line3');
        line1.classList.remove('rotate-45', 'translate-y-1.5');
        line2.classList.remove('opacity-0');
        line3.classList.remove('-rotate-45', '-translate-y-1.5');
    }
}
