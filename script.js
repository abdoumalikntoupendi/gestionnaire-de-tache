document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          const parent = this.parentNode;
          parent.style.textDecoration = 'line-through';
          setTimeout(() => {
            parent.remove();
          }, 1000); // La tâche disparaîtra après 1 seconde
        }
      });
    });
  });
  