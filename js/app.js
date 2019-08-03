var wowCallback = function(box){
}

var titleSwitcher = function(){
 $('.title').on('click', function(){
   var color = $(this).data("bgcolor")
   $('body').css({'background-color': color});
  $('blobs').style.webkitTransition = 'opacity 0.5s';
  $('blobs').style.mozTransition = 'opacity 0.5s';
  $('blobs').style.msTransition = 'opacity 0.5s';
  $('blobs').style.oTransition = 'opacity 0.5s';
  $('blobs').style.transition = 'opacity 0.5s';
  
   
   
   if($(this).hasClass('joanna')){
     $('.menu-container .title').removeClass('selected')     
     $('.menu-container .title').removeClass('outline');
     $('.footer a').removeClass('white'); 
//     $('.blobs').css({'background-color': color});
//    $('.blob').css({'background': color});
   $('.blobs').css({'opacity': '1'});
  
     
    
   }else{
     $('.menu-container .title').removeClass('selected')
     $('.menu-container .title').addClass('outline')   
     $(this).addClass('selected').removeClass('outline');
     $('.joanna').removeClass('selected')        
     $('.footer a').addClass('white');
//     $('.blobs').css({'background-color': color});
//     $('.blob').css({'background': color});
     $('.blobs').css({'opacity': '0'});
    
    
      
   }

 })
}

$( document ).ready(function() {
    console.log( "ready!" );
    new WOW({
    offset:100,
    callback: function(t) {
      wowCallback(t);
    }
    }).init()
    
    
    // initializers
    titleSwitcher();
});



