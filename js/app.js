var wowCallback = function(box){
}

var titleSwitcher = function(){
 $('.title').on('click', function(){
   var color = $(this).data("bgcolor")
   $('body').css({'background-color': color});
   $('.blobs').css({'background-color': color});
   $('.blob').css({'background': color}); 
   
   if($(this).hasClass('joanna')){
     $('.menu-container .title').removeClass('selected')     
     $('.menu-container .title').removeClass('outline');
     $('.footer a').removeClass('white');     
   }else{
     $('.menu-container .title').removeClass('selected')
     $('.menu-container .title').addClass('outline')   
     $(this).addClass('selected').removeClass('outline');
     $('.joanna').removeClass('selected')        
     $('.footer a').addClass('white');
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



