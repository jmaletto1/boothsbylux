  $(function(){
  $(".footer").load("/components/footer.html")
  });

  $(function(){
    $(".desktop__nav").load("/components/nav.html")
    });

  $(function() {
    $('.mobile__nav').load("/components/mobileNav.html")
  })

  $(function() {
    $('#sideNav').load("/components/sideNav.html")
  })
  
  $(function() {
    $('.contact__container').load("/components/contact.html")
  })

// Sidenav Variables

let menuStatus = closed;

// Open SideNav

function openNav() {

  $('#sideNav').css("width", "255px");
  $('.container').css("opacity", "7");
  setTimeout(function () {
    menuStatus = "open";
  }, 100)
}

// Close SideNav

function closeNav() {
  $('#sideNav').width(0);
  menuStatus = "closed";
}

// Close Mobile Nav if user clicks on container.
$('.container').click(() => {
  if (menuStatus === "open")
  closeNav();
})

$('.mobile__link').click( () => {
  closeNav();
  })

  // Mobile Nav

  $('#select-link').click(() =>
  alert(hi))