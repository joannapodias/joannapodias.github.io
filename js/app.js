var wowCallback = function(box){
}

var titleSwitcher = function(){
 $('.title').on('click', function(){
   var color = $(this).data("bgcolor")
   $('body').css({'background-color': color});
 
   
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



