$(document).ready(function(){
/////////////////////////////
      // $('#wrapper').fullpage({
      //   anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage','5thpage','6thpage'],
      //   menu: '#menu',
      //   scrollOverflow: true
      // });
///////////////////////////////
$(".fancybox").fancybox({
    openEffect  : 'elastic',
    closeEffect : 'elastic'
  });
/////////////////////////////////
 $(".scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
//////////////////////////////////

});