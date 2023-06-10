  function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown');
    var button = dropdown.querySelector('.dropbtn');
    var dropdownContent = dropdown.querySelector('.dropdown-content');

    // Toggle the 'clicked' class on the button
    button.classList.toggle('clicked');

    // Toggle the display of the dropdown content
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

    // Change the button color when clicked
    button.style.backgroundColor = button.classList.contains('clicked') ? 'black' : '';
  }