var checkbox = document.getElementById("switch1"); //get the checkbox to a variable

//check storage if dark mode was on or off
if (sessionStorage.getItem("mode") == "dark") {
    darkmode(); //if dark mode was on, run this funtion
} else {
    nodark(); //else run this funtion
}

//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function() {
    //check if the checkbox is checked or not
    if (checkbox.checked) {
        darkmode(); //if the checkbox is checked, run this funtion
    } else {
        nodark(); //else run this funtion
    }
});

//function for checkbox when checkbox is checked
function darkmode() {
    document.body.classList.add("dark-mode"); //add a class to the body tag
    checkbox.checked = true; //set checkbox to be checked state
    sessionStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
}

//function for checkbox when checkbox is not checked
function nodark() {
    document.body.classList.remove("dark-mode"); //remove added class from body tag
    checkbox.checked = false; //set checkbox to be unchecked state
    sessionStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
}
var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right="0";
}
function hideMenu(){
    navLinks.style.right="-200px";
}
function show(){
    document.getElementById('slidebar').classList.toggle('active');
}
function initMap() {
    var myLatLng = {lat: 37.7749, lng: -122.4194};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: myLatLng
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'My Company'
    });
  }
  $(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

  