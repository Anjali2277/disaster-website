document.addEventListener('DOMContentLoaded', function() {
    var aboutDropdown = document.querySelector('.about-dropdown');
  
    // Show About Us submenu on hover
    aboutDropdown.addEventListener('mouseover', function() {
      var aboutSubmenu = this.querySelector('.about-submenu');
      if (aboutSubmenu) {
        aboutSubmenu.style.display = "block";
      }
    });
  
    // Hide About Us submenu on mouseout
    aboutDropdown.addEventListener('mouseout', function() {
      var aboutSubmenu = this.querySelector('.about-submenu');
      if (aboutSubmenu) {
        aboutSubmenu.style.display = "none";
      }
    });
  
    var divisionSubmenu = document.querySelector('.division-submenu');
  
    // Show Division submenu on hover
    divisionSubmenu.addEventListener('mouseover', function() {
      var divisionSubmenuContent = this.querySelector('.division-submenu-content');
      if (divisionSubmenuContent) {
        divisionSubmenuContent.style.display = "block";
      }
    });
  
    // Hide Division submenu on mouseout
    divisionSubmenu.addEventListener('mouseout', function() {
      var divisionSubmenuContent = this.querySelector('.division-submenu-content');
      if (divisionSubmenuContent) {
        divisionSubmenuContent.style.display = "none";
      }
    });
    function toggleDonationForm() {
        var donationForm = document.getElementById('donationForm');
        if (donationForm.style.display === 'none') {
          donationForm.style.display = 'block';
        } else {
          donationForm.style.display = 'none';
        }
      }
    
      // Attach toggleDonationForm function to Donation link
      var donationLink = document.querySelector('.donation-link');
      donationLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        toggleDonationForm();
      });
    
  });
 