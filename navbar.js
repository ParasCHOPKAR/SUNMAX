// Desktop dropdown hover fix
document.querySelectorAll('.nav-links .dropdown').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const dropdown = item.querySelector('.dropdown-content');
    dropdown.style.display = 'block';
  });
  item.addEventListener('mouseleave', () => {
    const dropdown = item.querySelector('.dropdown-content');
    dropdown.style.display = 'none';
  });
});

// Sidebar toggle
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// Sidebar dropdown toggle
function toggleDropdown(el) {
  el.parentElement.classList.toggle('active');
}
