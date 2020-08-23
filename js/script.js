// Set the date we're counting down to
var countDownDate = new Date("april 10, 2021 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = "EXPIRED";
  }
}, 1000);






$('.slide').slick({
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  autoplay:true,
  autoplaySpeed:1000,
  slidesToScroll: 1,
    prevArrow:'<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



// fixed/sticky menu

$(window).scroll(function(){
  var scrollamount = $(window).scrollTop()
  
  if(scrollamount > 700){
    $(".menu").addClass("fixed")
  }else{
    $(".menu").removeClass("fixed")
  }

    



  if(scrollamount > 500){
    $(".btop").fadeIn();
  }else{
    $(".btop").fadeOut();
  }
})


$(".btop").click(function(){
$("html,body").animate({
  scrollTop:0
},3000)
})