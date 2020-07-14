$(document).ready(function(){

  $("a").css({cursor:"pointer"})

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var height = document.querySelector(".first").offsetHeight;

    if (scroll > height * 0.50) {
      $("header").css({"background-color":"#f2f2f2" , "box-shadow":"0 0 10px rgba(0,0,0,0.4)" });
      $(".nav a").css({"color":"#000033"});
      $(".nav span").css({"color":"#000033"});
    } else {
      $("header").css({"background-color":"transparent" , "box-shadow":"0 0 0" });
      $(".nav a").css({"color":"#ffffff"});
      $(".nav span").css({"color":"#ffffff"});
    }
    document.querySelector(".about-services").style.height = document.querySelector(".third-content").offsetHeight + "px";
    });


    $("#s,#x").animate({top:"0" , opacity:"1", } , "slow");
    $("#t,#y").animate({bottom:"0" , opacity:"1"} , "slow",function(){
      $(".first-1 , .first-2").animate({paddingRight:"0",paddingLeft:"0"} , "slow" , function(){
        $("header , .social-links").animate({opacity:"1"},200);
      })
  });

  $(".nav span").click(function(){
    gsap.to(".m-nav",{right:"0"})
  })
  $(".back-icon span").click(function(){
    gsap.to(".m-nav",{right:"-100%"})
  })
  $(".m-nav-links a").click(function(){
    gsap.to(".m-nav",{right:"-100%"})
  })


  $(document).click(function(event) {
    if (!$(event.target).closest(".s1 , .s2 , .s3 , .s4").length) {
        $(".third-content").css({"transform":"translateX(0%)"})
      }
  });

    $(".service-card").hover(function(){
      var scroll = document.querySelector("html").offsetWidth;
      console.log(scroll);
      if(scroll > 950) {
      $(this).css({"transform":"translateY(-10%)" , "box-shadow":"0 0 40px rgba(0, 0, 0, 0.3)" , "background":"linear-gradient(139.58deg, #08E5FF -5.69%, #0D1E3A 98.24%)"});
    } else {
      console.log("less")
      $(this).css({"box-shadow":"0 0 40px rgba(0, 0, 0, 0.3)" , "background":"linear-gradient(139.58deg, #08E5FF -5.69%, #0D1E3A 98.24%)"})
    }
    $(this).children("h1").css({"color":"white"});
    $(this).children("span").css({"color":"white" , "display":"block"});
    })

    $(".service-card").mouseleave(function(){
      $(this).css({"transform":"translateY(0%)" , "box-shadow":"0 0 10px rgba(0, 0, 0, 0.2)" , "background":"linear-gradient(139.58deg, #FFFFFF -5.69%, #FFFFFF 98.24%)"})
      $(this).children("h1").css({"color":"black"});
      $(this).children("span").css({"color":"white" , "display":"none"});
    })

    $(".s1").click(function() {
      document.querySelector(".about-services h1").innerHTML = "Web Design and Development"
      document.querySelector(".about-services p").innerHTML = "If you need a modern and powerful website for your business, startup or yourself, we are available for work. You can email us directly at info@styx.org.in."
      $(".third-content").css({"transform":"translateX(-40%)"})
    })
    $(".s2").click(function() {
      document.querySelector(".about-services h1").innerHTML = "Marketing"
      document.querySelector(".about-services p").innerHTML = "We provide all kind of marketing services catering to your brand personalized according to your target audience you can reach out to us at info@styx.org.in"
      $(".third-content").css({"transform":"translateX(-40%)"})
    })
    $(".s3").click(function() {
      document.querySelector(".about-services h1").innerHTML = "Graphic Design"
      document.querySelector(".about-services p").innerHTML = "Without design you cannot run a business and without looking at our design portfolio we would not recemmond you leave this site just a look you won’t regret it"
      $(".third-content").css({"transform":"translateX(-40%)"})
    })
    $(".s4").click(function() {
      document.querySelector(".about-services h1").innerHTML = "Video Creation"
      document.querySelector(".about-services p").innerHTML = "Visual content is the buzz right now and we can help you differentiate yourself by our services in 2d animation and video editing maybe a combination of both or something people have never tried before ."

      $(".third-content").css({"transform":"translateX(-40%)"})
    })






    $(".fifth-left-arrow").click(function(){
      fifthleft();
    })
    $(".fifth-right-arrow").click(function(){
      fifthright();
    })



    $(".ms1").click(function(){
      mobileservice(".ms1 ")
      resetother(".ms2")
      resetother(".ms3")
      resetother(".ms4")
    })
    $(".ms2").click(function(){
      mobileservice(".ms2 ")
      resetother(".ms1")
      resetother(".ms3")
      resetother(".ms4")
    })
    $(".ms3").click(function(){
      resetother(".ms2")
      resetother(".ms1")
      resetother(".ms4")
      mobileservice(".ms3 ")
    })
    $(".ms4").click(function(){
      mobileservice(".ms4 ")
      resetother(".ms2")
      resetother(".ms3")
      resetother(".ms1")
    })
    $(document).click(function(event) {
    if (!$(event.target).closest(".name").length) {
      resetother(".ms1")
      resetother(".ms2")
      resetother(".ms3")
      resetother(".ms4")
    }
    });

    $("#web").click(function(){
      var tl = gsap.timeline();
      tl.to(".marketing-works,.graphic-works, .video-works",{display:"none"}).to(".web-works",{display:"flex"});
    })
    $("#market").click(function(){
      var tl = gsap.timeline();
      tl.to(".web-works,.graphic-works, .video-works",{display:"none"}).to(".marketing-works",{display:"flex"});
    })
    $("#graphic").click(function(){
      var tl = gsap.timeline();
      tl.to(".web-works,.marketing-works, .video-works",{display:"none"}).to(".graphic-works",{display:"flex"});
    })
    $("#video").click(function(){
      var tl = gsap.timeline();
      tl.to(".web-works,.graphic-works, .marketing-works",{display:"none"}).to(".video-works",{display:"flex"});
    })



    $(".web_img").click(function(){
      var id = "wimg" + $(this).attr('data-catid')
      var imgbox = document.getElementById(id)
      var mimg = document.getElementById('mimg')
      mimg.src = imgbox.src;
      $(".mymodal video").css({"display":"none"})
      $(".mymodal img").css({"display":"block"})
      $(".mymodal").css({"display":"flex"})
      gsap.fromTo(".mymodal", {scale:0}, {scale:1});
    })
    $(".graphic-works .works").click(function(){
      var id = "gimg" + $(this).attr('data-catid')
      var imgbox = document.getElementById(id)
      var mimg = document.getElementById('mimg')
      mimg.src = imgbox.src;
      $(".mymodal video").css({"display":"none"})
      $(".mymodal img").css({"display":"block"})
      $(".mymodal").css({"display":"flex"})
      gsap.fromTo(".mymodal", {scale:0}, {scale:1});
    })
    $(".video-works .works").click(function(){
      var id = "video" + $(this).attr('data-catid')
      var imgbox = document.getElementById(id)
      var mimg = document.getElementById('mvideo')
      mimg.src = imgbox.src;
      $(".mymodal video").css({"display":"block"})
      $(".mymodal img").css({"display":"none"})
      $(".mymodal").css({"display":"flex"})
      gsap.fromTo(".mymodal", {scale:0}, {scale:1});
    })
    $(".close-modal span").click(function(){
      gsap.fromTo(".mymodal", {scale:1}, { scale:0});
    })

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var fname, email , lname , query , body;
        fname = $("#first_name").val();
        lname = $("#last_name").val();
        email = $("#email").val();
        query = $("#query").val();
        body = " There was a Visitor on your webiste who was willing to contact you. Name - " + fname + " "+lname+ ". Email - "+email + ". Query - " + query + ".";
        Email.send({
        SecureToken : "f862f50e-a09d-410c-b49a-d24dad8b76a1",
        To : 'info@styx.org.in',
        From : "ravikrsngh.rks@gmail.com",
        Subject : "Website Visitor ",
        Body : body,
        })
        this.reset();
        alert("Message Sent");
    });









});




var total_c = document.getElementById('fourth-move').children.length
console.log(total_c)
var i = 0;
$(".ca-right").click(function(){
  if (i == (total_c-1)) {
    console.log("here")
  } else {
    var move = (i+1)*100;
    $(".fourth-movediv").css({"transform":"translateX(-"+move+"%)"})
    i=i+1;
  }
})
$(".ca-left").click(function(){
  if (i == 0) {
    console.log("here")
  } else {
    var move = (i-1)*100;
    $(".fourth-movediv").css({"transform":"translateX(-"+move+"%)"})
    i=i-1;
  }
})


var total_m = document.getElementById('m-fourth-move').children.length
console.log(total_m)
var j = 0;
$(".ma-right").click(function(){
  if (j == (total_m-1)) {
    console.log("here")
  } else {
    var move = (j+1)*100;
    $(".m-fourth-move").css({"transform":"translateX(-"+move+"%)"})
    j=j+1;
  }
})
$(".ma-left").click(function(){
  if (j == 0) {
    console.log("here")
  } else {
    var move = (j-1)*100;
    $(".m-fourth-move").css({"transform":"translateX(-"+move+"%)"})
    j=j-1;
  }
})














function mobileservice(c){
  $(c+" .name").css({"box-shadow":"0 0 40px rgba(0, 0, 0, 0.3)" , "background":"linear-gradient(139.58deg, #08E5FF -5.69%, #0D1E3A 98.24%)"});
  $(c+" .name h4").css({"color":"white"});
  $(c+" .name span").css({"color":"white"});
  $(c+" .m-service-content").css({"display":"block"})
  gsap.to(c+".m-service-content", {height:"auto" , padding:"40px 5% 5% 5%"});
}
function resetother(c){
  var tl = gsap.timeline();
  tl.to(c+ " .m-service-content" , {height:"0" ,display:"none" , padding:'0'})
  $(c+" .name").css({"box-shadow":"0 0 10px rgba(0, 0, 0, 0.3)" , "background":"linear-gradient(139.58deg, #FFFFFF -5.69%, #FFFFFF 98.24%)"});
  $(c+" .name h4").css({"color":"black"});
  $(c+" .name span").css({"color":"black"});
}
