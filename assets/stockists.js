document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.country-dropdown .title-container').forEach(title => {
    title.addEventListener('click', function() {
      const countryDropdown = this.closest('.country-dropdown');
      countryDropdown.classList.toggle('active');
    });
  });
  
});