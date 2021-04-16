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

// const sayHi = document.getElementById('sayhibutton');
// sayHi.addEventListener("click", () => {
//   alert("yo")
// })

// Contact Form Submission
$("#sayhi").click(function() {
alert("hi")
})

$("#contact-form").on('submit',function(event) {
  event.preventDefault(); // to prevent default page reloading
  var dataString = $(this).serialize(); // to get the form data
  $(".contact--form").html("")
  $.ajax({
      method: "POST",
      url: "localhost:5500/contact-form-handler.php",
      data: dataString,
      success: function(data){
          $('#contact-form')[0].reset(); // to reset form data
      }
  }).done(function(data){
      setTimeout(function () {
          $('.contactform-messages').addClass('active');
      }, 500);
  });
});


// Slider
var galleryThumbs = new Swiper('.gallery-thumbs', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '2',
  // coverflowEffect: {
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows : true,
  // },
  
  coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows : false,
    },
    
  });
  
  
var galleryTop = new Swiper('.swiper-container.testimonial', {
  speed: 400,
  spaceBetween: 50,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      direction: 'horizontal'
    },
    768: {
      direction: 'vertical'
    }
  },
  // direction: 'vertical',
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
    type: 'bullets',
  },
  thumbs: {
    swiper: galleryThumbs
    }
    
  });
  