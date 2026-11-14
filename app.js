// Tab bar: toggle the active tab on click (visual only).
document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
