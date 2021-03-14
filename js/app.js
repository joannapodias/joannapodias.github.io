// document.cookie = 'cookie1=value1; SameSite=lax';
// document.cookie = 'SameSite=none; Secure';
isSubtitle = $(this).hasClass('subtitle');

var wowCallback = function (box) {
}

var colorSwitcher = function () {
  $('body').on('click', ".title", function() {
    var color = $(this).data("bgcolor")
    $('body').css({ 'background-color': color });

    if ($(this).hasClass('joanna') && !isSubtitle) {
      console.log('you clicked on joanna podias')
      $('.menu-container .title').removeClass('selected')
      $('.menu-container .title').removeClass('outline');
      $('.footer a').removeClass('white');
      //     $('.blobs').css({'background-color': color});
      //    $('.blob').css({'background': color});
      $('.blobs').css({ 'opacity': '1' });



    } else if (!isSubtitle) {
      console.log('this is a title')
      $('.menu-container .title').removeClass('selected')
      $('.menu-container .title').addClass('outline')
      $(this).addClass('selected').removeClass('outline');
      $('.joanna').removeClass('selected')
      $('.footer a').addClass('white');
      //     $('.blobs').css({'background-color': color});
      //     $('.blob').css({'background': color});
      $('.blobs').css({ 'opacity': '0' });
    }
  })
}

var contentSwitcher = function(){
  $('body').on('click', '.interactive', function() {
      console.log('the body should change')
      var bodyKey = $(this).data("bodykey")
      var pageVar = pages[bodyKey]
      var newBody = pageVar.body
      $('.content-container').html(newBody);
  })
}

// var titleSwitcher = function () {
//   $('body').on('click', ".title", function () {
//     var color = $(this).data("bgcolor")
//     $('body').css({ 'background-color': color });
//     var bodyKey = $(this).data("bodykey")
//     var page = pages[bodyKey]
//     var newBody = page.body
//     $('.content-container').html(newBody);
//
//
//
//     if ($(this).hasClass('joanna') && !isSubtitle) {
//       console.log('you clicked on joanna podias')
//       $('.menu-container .title').removeClass('selected')
//       $('.menu-container .title').removeClass('outline');
//       $('.footer a').removeClass('white');
//       //     $('.blobs').css({'background-color': color});
//       //    $('.blob').css({'background': color});
//       $('.blobs').css({ 'opacity': '1' });
//
//
//
//     } else if (!isSubtitle) {
//       console.log('this is a title')
//       $('.menu-container .title').removeClass('selected')
//       $('.menu-container .title').addClass('outline')
//       $(this).addClass('selected').removeClass('outline');
//       $('.joanna').removeClass('selected')
//       $('.footer a').addClass('white');
//       //     $('.blobs').css({'background-color': color});
//       //     $('.blob').css({'background': color});
//       $('.blobs').css({ 'opacity': '0' });
//     }
//
//     else if (isSubtitle){
//       console.log('this is a subtitle')
//       // var bodyKey = $(this).data("bodykey")
//       // var page = pages[bodyKey]
//       // var newBody = page.body
//       // $('.content-container').html(newBody);
//     }
//
//   })
// }

$(document).ready(function () {
  console.log("ready!");
  new WOW({
    offset: 100,
    callback: function (t) {
      wowCallback(t);
    }
  }).init()


  // initializers
  // titleSwitcher();
  colorSwitcher();
  contentSwitcher();
});


pages =
  {
  "home":{
    body:`
    <div class="pic-container">
      <div class="about-button interactive" data-bodyKey="about">
      <img src="media/brownartsperformance.jpg" width="600px" height="600px" id="pic">
      <h1 id="about-text">ABOUT</h1>
      </div>
    </div>
    `
  },
  "music":{
      body: `
      <div class="interactive" data-bodyKey="betterthanyoupage">
        <img src="media/betterthanyou-cover.jpg" id="better-than-you-pic">
      </div>
      <div class="interactive" data-bgcolor="#ff0000" data-bodykey="braindead">
        <img src="media/ice-cream-sam-cover-art.png" id="ice-cream-pic">
      </div>
      `
  },
  "about":{
    body: `
    <img src="media/joanna-profile.jpg" id="profile">
    <div class= "about-bio">
    Joanna Podias is a multimedia artist from Brooklyn, New York. While earning her Bachelor's in Multimedia & Electronic Music Experiments (MEME) at
    Brown University, she performed and displayed her works across the New England area. She performs and releases music under the stage name
    <span class="spg">Sex Power Goddess</span>.
    </div>
    `
  },
  "graphics":{
    body: `
      <a href="https://google.com">Google</a>
    `
  },
  "sculpture": {
    body: `
        <a href="https://google.com">Google</a>
      `
  },
  "instrument-design": {
    body: `
        <a href="https://google.com">Google</a>
      `
  },
  "robotics": {
    body: `
        <a href="https://google.com">Google</a>
      `
  },
  "installations": {
    body: `
        <a href="https://google.com">Google</a>
      `
  },
  "braindead": {
    body: `
    <iframe src="https://open.spotify.com/embed/track/7gArBu3VHWdk0ZlyLixaTq"
    width="300" height="380" frameborder="0" allowtransparency="true"
    allow="encrypted-media">
    </iframe>
      `
  },
  "betterthanyoupage": {
    body: `
    <iframe src="https://open.spotify.com/embed/track/2BX5oxnHJd7rylLZURy1w2"
    width="300" height="380" frameborder="0" allowtransparency="true"
    allow="encrypted-media">
    </iframe>
    `
  }
}



