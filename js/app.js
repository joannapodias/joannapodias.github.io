// document.cookie = 'cookie1=value1; SameSite=lax';
// document.cookie = 'SameSite=none; Secure';
isSubtitle = $(this).hasClass('subtitle');


document.cookie = 'sp_t = 838676dc166150b95fe2a62fe3f318e9; SameSite = none; Secure';
document.cookie = 'sp_adid = 9f10ea4d-0fbe-4d24-95fd-5e6ca40dc8e4; SameSite = none; Secure';
document.cookie = 'sp_ga = GA1.2.750121670.1613445706; SameSite = none; Secure';
document.cookie = 'sp_pin_unauth = dWlkPVlqYzBPREZtWkRZdE5qUTFNQzAwTmpJMkxXRXlNekl0WTJKaU56YzROMlV3TkRnMQ; SameSite = none; Secure';


// var elem = document.querySelector('.grid');
// // vanilla JS
// // init with element
// // var grid = document.querySelector('.grid');
// // var msnry = new Masonry( grid, {
// //   // options...
// //   itemSelector: '.grid-item',
// //   columnWidth: 200
// // });
// var msnry = new Masonry( elem, {
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });
// //
// // $('.grid').masonry({
// //   // options
// //   itemSelector: '.grid-item',
// //   columnWidth: 200
// // });

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
      $('.menu-container .title').css({'font-size': '3.93vw'});
      $('.menu-container').css({'width': '40.61vw'});
      $('.content-container').css({'width': 'calc(100vw - 40.61vw)'});
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
      $('.menu-container .title').css({'font-size': '1.93vw'});
      $('.menu-container').css({'width': '20.62vw'});
      $('.content-container').css({'width': 'calc(100vw - 25.62vw)'});
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
      <div class="row-music">
      <div class="column-music">
        <div class="interactive" data-bodyKey="betterthanyoupage" id="gridblock">
          <img src="media/betterthanyou-cover.jpg" id="better-than-you-pic">
          <h1><i>Better Than You</i>   (2018)</h1>
          <h2>song</h2>
        </div>
        <div class="interactive" data-bgcolor="#ff0000" data-bodykey="braindead" id="gridblock">
          <img src="media/ice-cream-sam-cover-art.png" id="ice-cream-pic">
          <h1><i>Brain Dead</i>   (2019)</h1>
          <h2>song</h2>
        </div>
      </div>
      <div class="column-music">
        <div class="interactive" data-bodyKey="blossompage" id="gridblock">
          <img src="media/blossom-screenshot.png" id="blossom-pic">
          <h1><i>Blossom</i>   (2017)</h1>
          <h2>sound design</h2>
        </div>
        <div class="interactive" data-bodyKey="pesmoupage" id="gridblock">
            <img src="media/pesmou-screenshot.png" id="pesmou-pic">
            <h1><i>Pes mou "Mou leipeis"</i>   (2019)</h1>
            <h2>sound design</h2>
        </div>
      </div>
      <div class="column-music">
          <div class="interactive" data-bodyKey="fleetpage" id="gridblock">
            <img src="media/cowboy-cat.jpg" id="cat-pic">
            <h1><i>Although the Sun Is Shining</i>   (2021)</h1>
            <h2>song</h2>
          </div>
          <div class="interactive" data-bodyKey="dys-soundpage" id="gridblock">
            <img src="media/jitter-blobs.png" id="dys-blobspic">
            <h1><i>Dysmorphia</i>   (2020)</h1>
            <h2>sound design/installation</h2>
          </div>
        </div>
      </div>
      `
  },
  "about":{
    body: `
    <img src="media/joanna-headshot.png" id="profile">
    <div class= "about-bio">
    Joanna Podias is a Greek-American multimedia artist from Brooklyn, New York.
    <br><br>
    Her work explores the perception of oneself through the eyes of society,
    and how it affects and distorts the way that we understand our bodies and minds.
    Particulary, Podias focuses on the interactions between women and the society,
     as well as ideas of mental illness.
    <br><br>
    While dealing in heavy topics, she likes her work to have a colorful, playful, and
    somewhat childish aesthetic; taking topics of trauma or heartbreak and turning
    them into ecstatic catharses.
    <br><br>
    While earning her Bachelor's in Multimedia & Electronic Music Experiments (MEME) at
    Brown University, she performed and displayed her works across the New England area. She performs and releases music under the stage name
    <span class="spg">Sex Power Goddess</span>.
    </div>
    `
  },
  "graphics":{
    body: `
      <div class="interactive" data-bodyKey="armwrestlingpage"
      id="gridblock" id="wrestlingtext">
        <img src="media/armwrestlingscreenshot.png" id="armwrestlingpic">
        <h1 style="color:white;"><i>Arm Wrestling</i>   (2018)</h1>
        <h2 style="color:white;">text animatic</h2>
      </div>
      <div class="row-graphics">
      <div class="column-graphics">
      <div class="interactive" data-bodyKey="dfpage" id="gridblock">
        <img src="media/hypnoxdfscreenshot.png" id="hypnoxdfpic">
        <h1><i>HYPNO X Dillon Francis</i>   (2018)</h1>
        <h2>interactive graphics</h2>
      </div>
      <div class="interactive" data-bodyKey="greekposterpage1" id="gridblock">
        <img src="media/greekposter1.png" id="greek1icon">
        <h1><i>(un)Common Ground - Lawrence Venuti Keynote </i>   (2019)</h1>
        <h2>poster</h2>
      </div>
      </div>
      <div class="column-graphics">
      <div class="interactive" data-bodyKey="memeensemblepage" id="gridblock">
        <img src="media/meme-ensemble.jpg" id="memeensicon">
        <h1><i>doorways into shadows: a ricotta opera</i>   (2017)</h1>
        <h2>poster</h2>
      </div>
      <div class="interactive" data-bodyKey="greekposterpage2" id="gridblock">
        <img src="media/greekposter2.png" id="greek2icon">
        <h1><i>(un)Common Ground</i>   (2019)</h1>
        <h2>poster</h2>
      </div>
      </div>
      </div>
    `
  },
  "sculpture": {
    body: `
    <div class="row-sculpture">
      <div class="column-sculpture">
        <div class="interactive" data-bodyKey="dysmorphiapage" id="gridblock">
          <img src="media/dysmorphia-icon.jpg" id="dysmorphiaicon">
          <h1><i>Dysmorphia</i>   (2018-2020)</h1>
          <h2>interactive light sculpture - urethane resin, LEDs, Arduino</h2>
        </div>
        <div class="interactive" data-bodyKey="fleshdyspage" id="gridblock">
          <img src="media/fleshdys.png" id="fleshdysicon">
          <h1><i>Flesh Dysmorph</i>   (2020)</h1>
          <h2>urethane resin, LEDs</h2>
        </div>
        <div class="interactive" data-bodyKey="pulpdyspage" id="gridblock">
          <img src="media/pulpydys.png" id="pulpydysicon">
          <h1><i>Pulpy Dysmorph</i>   (2019)</h1>
          <h2>silicone, mica poweder</h2>
        </div>
        <div class="interactive" data-bodyKey="lamourpage" id="gridblock">
          <img src="media/lamourpic.png" id="lamouricon">
          <h1><i>L'Amour</i>   (2021)</h1>
          <h2>poseable plush - recycled fabric, cotton batting, steel wire</h2>
        </div>
        <div class="interactive" data-bodyKey="spikeearringspage" id="gridblock">
          <img src="media/spikeearring.png" id="spikeearringsicon">
          <h1><i>Spike Spiegel</i>   (2020)</h1>
          <h2>printed image on paper, urethane resin, mica powder, jewelry wire, laquer varnish</h2>
        </div>
        <div class="interactive" data-bodyKey="matthelderspage" id="gridblock">
          <img src="media/mattheldersdrawing.jpg" id="matticon">
          <h1><i>Matt</i>   (2014)</h1>
          <h2>marker on paper</h2>
        </div>
        <div class="interactive" data-bodyKey="deneimaikalapage" id="gridblock">
          <img src="media/deneimaikala.jpg" id="deneimaiicon">
          <h1><i>Den Eimai Kala!</i>   (2017)</h1>
          <h2>collage - watercolor, construction paper, colored pencil, newsprint</h2>
        </div>
        </div>
        <div class="column-sculpture">
        <div class="interactive" data-bodyKey="veinblobpage" id="gridblock">
          <img src="media/veinblob.jpg" id="veinblobicon">
          <h1><i>Veined Dysmorph</i>   (2019)</h1>
          <h2>urethane resin, copper wire, glitter</h2>
        </div>
        <div class="interactive" data-bodyKey="wirehandpage" id="gridblock">
          <img src="media/wirehand.png" id="wirehandicon">
          <h1><i>Constraint</i>   (2018)</h1>
          <h2>electrical wire, hot glue</h2>
        </div>
        <div class="interactive" data-bodyKey="guitarmodpage" id="gridblock">
          <img src="media/guitarmod.png" id="guitarmodicon">
          <h1><i>Guitar mod</i>   (2021)</h1>
          <h2>rubber paint, acrylic, foil</h2>
        </div>
        <div class="interactive" data-bodyKey="ichigotchipage" id="gridblock">
          <img src="media/ichigotchi.png" id="ichigotchicon">
          <h1><i>Ichigotchi</i>   (2021)</h1>
          <h2>recycled fabric, cotton batting</h2>
        </div>
        <div class="interactive" data-bodyKey="jotaropage" id="gridblock">
          <img src="media/jotaroearrings.png" id="jotaroicon">
          <h1><i>Jotaro Kujo</i>   (2020)</h1>
          <h2>printed image on paper, urethane resin, mica powder, jewelry wire, laquer varnish</h2>
        </div>
        <div class="interactive" data-bodyKey="blueselfpage" id="gridblock">
          <img src="media/selfportraitblue.jpg" id="blueselficon">
          <h1><i>Self Portrait in Blue</i>   (2017)</h1>
          <h2>watercolor on cardstock</h2>
        </div>
        <div class="interactive" data-bodyKey="bluenudepage" id="gridblock">
          <img src="media/bluenudestudy.jpg" id="bluenudeicon">
          <h1><i>Nudes in Blue</i>   (2017)</h1>
          <h2>watercolor on cardstock</h2>
        </div>
        <div class="interactive" data-bodyKey="orangenudestudypage" id="gridblock">
          <img src="media/orangenudestudy.jpg" id="orangenudeicon">
          <h1><i>Nude in Orange</i>   (2017)</h1>
          <h2>watercolor on cardstock</h2>
        </div>
        </div>
      </div>
      `
  },
  "instrument-design": {
    body: `
    <div class="row-instruments" style="color:white;">
      <div class="column-instruments">
        <div class="interactive" data-bodyKey="fospage">
          <img src="media/fosangle.jpg" id="fosicon">
          <h1><i>Fos</i>   (2017)</h1>
          <h2>analog synthesizer</h2>
        </div>
        </div>
      <div class="column-instruments">
        <div class="interactive" data-bodyKey="roypage" id="gridblock">
          <img src="media/roy.png" id="royicon">
          <h1><i>Roy G. Biv</i>   (2017)</h1>
          <h2>video synthesizer</h2>
        </div>
      </div>
    </div>
      `
  },
  // "programming": {
  //   body: `
  //       <h1>Max msp apps, see if I can extract stuff from CS15.</h1>
  //     `
  // },
  "installations": {
    body: `
    <div class="row-installations">
      <div class="column-installations">
        <div class="interactive" data-bodyKey="freeformpage" id="gridblock">
          <img src="media/freeformicon.png" id="freeformicon">
          <h1><i>Samsung - Freeform</i>   (2018)</h1>
        </div>
        <div class="interactive" data-bodyKey="stonewallpage" id="gridblock">
          <img src="media/stonewall.png" id="stonewallicon">
          <h1><i>Google - Stonewall Forever</i>   (2019)</h1>
        </div>
      </div>
      <div class="column-installations">
        <div class="interactive" data-bodyKey="fastestpage" id="gridblock">
          <img src="media/fastesticon.png" id="fastesticon">
          <h1><i>Samsung - Fastest</i>   (2018)</h1>
        </div>
      </div>
    </div>
      `
  },
  "braindead": {
    body: `
    <iframe src="https://open.spotify.com/embed/track/7gArBu3VHWdk0ZlyLixaTq"
    height="380" frameborder="0" allowtransparency="true"
    allow="encrypted-media" id="brain-dead-iframe">
    </iframe>
    <div>
    <h1 id="title-text"><i>Brain Dead</i> (2019)</h1>
    <p>
    <i>Brain Dead</i> was written and recorded in collaboration with Seattle-based
    artist, Ice Cream Sam.<br><br>
    On this track, I performed the vocals, wrote the vocal melody and lyrics, and advised Sam
    during the mixing and production process.
    </p></div>
      `
  },
  "betterthanyoupage": {
    body: `
    <iframe src="https://open.spotify.com/embed/track/2BX5oxnHJd7rylLZURy1w2"
    width="300" height="380" frameborder="0" allowtransparency="true"
    allow="encrypted-media" id="better-than-you-iframe">
    </iframe>
    <div>
    <h1 id="title-text"><i>Better Than You</i> (2018)</h1>
    <p><i>Better Than You</i> is a song that I composed and produced as an assignment for my
      Advanced Recording Studio course at Brown University, in the Fall Semester of 2018. I recorded and
      mixed the song using Ableton Live.<br><br>

      I composed all the musical parts, wrote the lyrics,
      recorded and programmed all of the parts, sang, played all of the instruments,
      mixed the recording, and mastered the recording.<br><br>

      This song highlights my interest
      in creating hybrid timbres and examining the psychological and social implications of being a woman in society.
      I combined a drum pattern that I recorded on the studio drum kit with a series of synthesized drum samples, and
      then blended them together using volume automation, distortion, and reverb. The result is the hybrid, overly distorted
      drum sound that drives the entire piece. I treated the guitar parts similarly, recording audio of myself playing electric
      guitar and combining it with the long MIDI guitar samples that can be heard starting at around 17 seconds. My music tends
      to be about introspection and the expression of otherwise
      unspeakable thoughts, so the aesthetic choice to make these hybrid, "impossible" instruments fits the way in which I
      usually want my music to be consumed: as a private, imaginative experience rather than a performance.<br><br>
      The lyrical content
      of this song addresses the psychological and emotional state of a woman experiencing romantic conflict with a man.
      Many of the lyrics are tropes of female behavior within relationships, and how women are often framed as being irrational,
      dramatic, or undesirable for expressing their feelings. The repeated line "Why am I so crazy?" highlights the way that women
      are made to feel irrational and delusional when they speak their minds. This idea is further developed in lines like "I guess
      I'll put my feelings back up on the shelf," and "Drowning out the voices when they tell me not to start." These lines
      convey the way that women are taught to repress themselves and not speak up. The line "Every time I try to say what's
      on my mind, you say I'm too dramatic" addresses the way that women are accused of overreacting and dramatizing their
      problems. Finally, the line "I have no validation and I hate myself" shows the way that women are ostracized and marked
      as undesirable when they speak out against mistreatment. Also, at around 03:36, I added in audio samples of some of my
      male friends laughing and calling each other "bitches." I took this audio from a video of two of the boys having a wrestling
      match, and I thought it was very telling that they would use a misogynistic insult to criticize each other while engaging
      in the "masculine," primal act of physically fighting each other for fun. When the men in this group are acting "irrational,"
      by fighting each other for no reason, the other men label the fighters as females and ridicule their behavior.
      Whether their use of the word "bitch" here is intentionally misogynistic or not, it shows the deeply ingrained patterns
      of misogynistic thinking and expression within society, serving as much of a thematic purpose as the lyrics do.
      In making this piece, I wanted to create a piece of music that was enticing, while also thematically and aesthetically
      conveying the core feeling of conflict, and expressing very boldly the way I feel society sees women.
      </p></div>
    `
  },
  "fleetpage": {
    body: `
    <div class="fleetWrapper">
    <iframe width="100%" height="300" scrolling="no" frameborder="no"
    allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/925785691&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
    <div id="fleet-text">
    <h1 id="title-text"><i>Although the Sun is Shining</i> (2021)</h1>
    <p>
    This is a cover of the Fleetwood Mac song, "Although the Sun is Shining," originally
    written by Daniel Kirwan and recorded for Fleetwood Mac's 1969 album, "Then Play On."<br><br>

    I sang, played guitar, and mixed the song. I used Ableton Live.
    </p></div>
    `
  },
  "dys-soundpage": {
    body: `
    <div class="dys-wrapper">
    <iframe width="100%" height="300" scrolling="no"
    frameborder="no" allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/893689051&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break:
    normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
    font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,
    Verdana,Tahoma,sans-serif;font-weight: 100;">
    <a href="https://soundcloud.com/joannapodias"
    title="Joanna Podias" target="_blank"
    style="color: #cccccc;
    text-decoration:none;">Joanna Podias</a> · <a href="https://soundcloud.com/joannapodias/thesis-dysmorphia"
    title="Thesis - Dysmorphia" target="_blank" style="color: #cccccc; text-decoration: none;">Thesis - Dysmorphia</a></div>
    </div>
    <div>
    <h1 id="title-text"><i>Dysmorphia</i> (2020)</h1>
    <p>
    My thesis project Dysmorphia: A Liquification of Body and Sound was intended
    to be a large-scale installation of sculpture, light, and sound, that was due
    to take place in Studio 3 at the Granoff Center at Brown University on the weekend of April 3rd.
    <br><br>
    Conceptually and aesthetically, the piece was meant to be a visual and sonic
    abstraction of feelings of dysmorphia: misperception, distortion, and scrutiny
    of a physical body. The forms of the sculptures--the central element of the
    installation--were
    born out of dysmorphic descriptions of one's own body: blob-like,
    lumpy, jelly. I noticed that a lot of the nomenclature surrounding "undesirable"
    bodies in our culture centers around losing their shape, getting soft, or "turning into a blob,"
    which when taken to an extreme, made me think about turning into a pile of liquid, or what it would
    be like to bring life to an inanimate pile of liquid.<br><br>
    This piece is the sound component, which I present here as a stereo rendition of
    my original quadraphonic soundscape.<br><br>
    I wanted to create a sense of liquidity, living creatures,
    aliens, squelching, squishing, bubbling, dissolving, little animals
    crying out.
    </p>
    </div>
    `
  },
  "blossompage": {
    body: `
    <div class="blossomWrapper" style="width:100%;height:25vw;">
      <iframe width="560" height="315"
        src="https://www.youtube-nocookie.com/embed/jHcZgDLvL6w"
        frameborder="0" allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope;
        picture-in-picture" allowfullscreen>
      </iframe>
    </div>
    <div id="blossomtext">
    <h1 id="title-text"><i>Blossom</i> (2017)</h1>
    <p><i>Blossom</i> was originally created as my final project for a Sound Design course I took
    in the Fall Semester of 2017. It was originally mixed in 5.1 sound, but I've
    exported it as a stereo file for the purposes of this sample.<br><br>

    I compiled and edited the video clips, and mixed all of
    the sound for this project. I included the song "Deantown" by Vulfpeck, which I
    sampled and stretched to create the slow background groove. All other sounds
    were recorded and processed by me, using Logic.<br><br>

    This piece highlights my
    interest in using sound as a way to invoke other sensorial experiences,
    and it also explores ideas around representation of female identity and
    sexuality. In reference to the female perspective, women are often taught
    to repress or conceal their sexuality. When women outwardly admit to sexual
    behaviors and/or desires, they are usually shamed, and can be demonized by
    society. I created this piece as a way to loudly and obviously draw attention
    to female sexuality, with the intention of creating that discomfort or
    intrigue usually associated with women that are sexually assertive.
    Flowers are a common visual metaphor for female anatomy, and I found
    that the slowly blooming flowers take the metaphor further, into more
    evocative and suggestive territory. The flowers, without the sound, could
    be seen as innocent, pleasant imagery, but adding the sound gives the
    footage a more crass, metaphorical connotation that blatantly refers to
    sexual imagery. I took clips of women laughing and sighing, and then
    stretched and processed the samples to an extreme degree, so that the
    result is a cartoonish, overexaggerated expression of female pleasure
    and deviance. Pairing the sound and the video together intensifies each
    of those sensorial experiences, so much so that a viewer can find the
    experience awkward, arousing, comedic, or any other range of emotions
    that one might feel when witnessing expressions of sexuality. Aesthetically,
    this piece also showcases my interest in abstract, ethereal soundscapes,
    using lots of time stretching and sample manipulation to create a grand,
    sweeping field of sound.

    </p></div>
    `
  },
  "pesmoupage": {
    body: `
    <div class="pesmouWrapper" style="width:100%;height:25vw;">
      <iframe width="560" height="315"
        src="https://www.youtube-nocookie.com/embed/huxAg07UAOU"
        title="YouTube video player"
        frameborder="0" allow="accelerometer;
        autoplay; clipboard-write;
        encrypted-media; gyroscope;
        picture-in-picture" allowfullscreen>
      </iframe>
    </div>
    <div id="pesmou-text">
    <h1 id="title-text"><i>Pes mou "Mou leipeis"</i> (2019)</h1>
    <p>
    <i>***NOTE - Due to YouTube's copyright system, you may need to open the sample
    in a separate browser window by clicking "Watch on YouTube," as this piece contains copyrighted music.***</i>
    <br><br>
    <i>Pes mou "Mou leipeis,"</i> which translates from Greek to mean "tell me you miss me,"
    is an audio/visual monologue presented in the form of an old, melodramatic film trailer.
    <br><br>
    The monologue is a story of the dissolution of communication and trust in a once intimate
    relationship. The piece follows a phone call or text exchange from the perspective of a
    woman in America calling her former lover in Greece, the place where their relationship
    blossomed. The piece pairs feelings of nostalgia and distrust with correspondent visuals;
    a tinted image of the waves at the beach where they first swam together, and the bustle of
    a crowded Greek night club, where anything could be happening while they are apart.
    <br><br>
    The script and its Greek subtitles were written and translated by me, and performed and recorded by
    Samuel McKinney. The song, which I spliced to match the pacing of the visuals and monologue beats,
    is an instrumental version of the track "Pos Na Sou Po," originally performed by Maria Kougioumtzi.
    I did the sound effects and video editing using Ableton Live and Adobe Premiere,
    using footage recorded on my iPhone while in Greece during the summer of 2017.
    </p></div>

    `
  },
  "armwrestlingpage": {
    body: `
    <div id="armwrestling-wrapper">
    <video width="100%" height="100%" controls id="armwrestlingvideo">
      <source src="media/armwrestling.mp4" type="video/mp4">
    </video>
    </div>
    <div id="armwrestling-text">
    <h1 id="title-text"><i>Arm Wrestling</i> (2018)</h1>
    <p>
    <i>Arm Wrestling</i> is a comedic text animatic that I created for a project
    that prompted us to make a piece about "failure."<br><br>
    After hearing the prompt, I decided to deliberately do something that I was
    <i>expected</i> to fail at, due to my place in society, which gave the idea
    to challenge four of my male friends to an arm wrestling match while we were at
    a party.<br><br>
    At the beginning of each match, I took each person into a separate room with me
    to film, and told them "We're gonna have an arm wrestling match, and I'm gonna
    win."<br><br>
    The video shows how this statement from me led to a different reaction and expectation
    of outcome from each person, with Alex blatantly stating "I thought you wanted me to let you win,"
    Darius becoming confused, Brad recognized and acknowledging his own bias, and David taking no prisoners.
    <br><br>
    Although lighthearted and colorful, the piece plainly displays the men's expectation that
    women are weaker and thus, if I say that I'm going to win, them trying at all to beat me
    would immediately result in my failure.
    <br><br>
    I animated and designed the sound for this piece using Adobe After Effects.
    </p>
    </div>
    `
  },
  "dfpage": {
    body: `
    <h1 id="df-title"><i>HYPNO x Dillon Francis</i> (2018)</h1>
    <div class="row">
      <div class="column">
      <div>
        <video controls loop id="bababavideo">
          <source src="media/bababaexport.mp4" type="video/mp4">
        </video>
        <h1 id="df-text"><i>Ba Ba Ba</i></h1>
      </div>
      <div>
        <video controls loop id="estanochevideo">
          <source src="media/estanocheexport.mp4" type="video/mp4">
        </video>
        <h1 id="df-text"><i>Esta Noche</i></h1>
      </div>
      <div>
        <video controls loop id="venvideo">
          <source src="media/venexport.mp4" type="video/mp4">
        </video>
        <h1 id="df-text"><i>Ven</i></h1>
      </div>
      <div>
        <video controls loop id="whiteboivideo">
          <source src="media/whiteboi-export.mp4" type="video/mp4">
        </video>
        <h1 id="df-text"><i>White Boi</i></h1>
      </div>
      </div>
      <div class="column">
      <div>
        <video controls loop id="wethefunkvideo">
          <source src="media/wethefunkexport.mp4" type="video/mp4">
        </video>
        <h1 id="df-text"><i>We the Funk</i></h1>
      </div>
      <div>
        <video controls loop id="lookatthatbuttvideo">
          <source src="media/lookatthatbuttexport.mp4" type="video/mp4">
        </video>
          <h1 id="df-text"><i>Look At That Butt</i></h1>
      </div>
      <div>
        <video controls loop id="noparevideo">
          <source src="media/nopareexport.mp4" type="video/mp4">
        </video>
        <h1 id="df-text"><i>No Pare</i></h1>
      </div>
      <div>
        <video controls loop id="sexovideo">
          <source src="media/sexoexport.mp4" type="video/mp4">
        </video>
        <h1 id="df-text"><i>Sexo</i></h1>
      </div>
      </div>
      <div class="column">
      <div>
        <video controls loop id="neverletyougovideo">
          <source src="media/neverletyougoexport.mp4" type="video/mp4">
        </video>
        <h1 id="df-text"><i>Never Let You Go</i></h1>
      </div>
      <div>
        <video controls loop id="cuandovideo">
          <source src="media/cuandoexport.mp4" type="video/mp4">
        </video>
        <h1 id="df-text"><i>Cuando</i></h1>
      </div>
      <div>
        <video controls loop id="getitgetitvideo">
          <source src="media/getitgetitexport.mp4" type="video/mp4">
        </video>
        <h1 id="df-text"><i>Get It Get It</i></h1>
      </div>
      </div>
    </div>
    <div>
    <p id="df-body">
    As an intern at the <a href="https://hypno.com/" target="_blank"><u>HYPNO</u></a> company in Brooklyn, New York, I indepently created
    created these 11 unique, brand-integrated animation filters for the release of Dillon Francis's 2018 album
    <a href="https://open.spotify.com/album/1mdsI3uD5YlpbymXaGqkVE?si=M8PLaiu9Svua2XwTChO-hw" target="_blank"><i><u>WUT WUT.</u></i></a>
    <br><br>
    These "Hypno Scripts" were created in HYPNO's proprietary coding environment, using JavaScript, Metal,
    and GLSL. The graphic assets were given to me by Francis's management, who I collaborated with while
    creating and animating the frames in Adobe After Effects.
    <br><br>
    The scripts were hosted on the HYPNO app during the fall of 2018, in commemoration of the album's
    release, and allowed the user-base to create their own videos using any of the filters, with Francis himself
    using them on his Instagram page.
    </p>
    </div>
    `
  },

  "memeensemblepage": {
    body: `
    <div>
    <img src="media/meme-ensemble.jpg" id="meme-full">
    </div>
    <div>
    <p>
    I created this poster to advertise a concert by Brown University's
    MEME Ensemble, of which I was also a member.<br><br>
    The poster was created using Photoshop, and was displayed around campus.
    </p>
    </div>
    `
  },

  "greekposterpage1": {
    body: `
    <div>
      <img src="media/greekposter1.png" id="greek1-full">
    </div>
    <div>
    <p>
    This poster was created to advertise a translation colloquim being held
    by the Brown University Modern Greek Studies Department.<br><br>
    The poster was created using Photoshop.
    </p>
    </div>
    `
  },

  "greekposterpage2": {
    body: `
    <div>
      <img src="media/greekposter2.png" id="greek2-full">
    </div>
    <div>
    <p>
    This poster was created to advertise a translation colloquim being held
    by the Brown University Modern Greek Studies Department.<br><br>
    The poster was created using Photoshop.
    </p>
    </div>
    `
  },
  "matthelderspage": {
    body: `
    <h1 id="yellow-title"><i>Matt</i> (2014)</h1>
    <div>
    <img src="media/mattheldersdrawing.jpg" id="mattfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This piece is a portrait of Matt Helders, the drummer from the Arctic Monkeys.
    <br><br>
    I created this piece by drawing the linework in pencil and then inking it in with
    a permanent marker.
    </p>
    </div>
    `
  },
  "deneimaikalapage": {
    body: `
    <h1 id="yellow-title"><i>Den Eimai Kala!</i> (2017)</h1>
    <div>
    <img src="media/deneimaikala.jpg" id="deneimaipicfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    <i>Dem Eima Kala!</i> (Greek: "I am not okay!") is a self-portrait
    collage piece that I created to represent the chaotic inner workings
    of my ADHD-addled brain.
    <br><br>
    The piece features playful and colorful imagery, while simultaneously
    expressing a darker tone of struggle, chaos, and confusion.
    <br><br>
    The piece was created using watercolor paint, construction paper,
    sheet music, crossword puzzles, and old photographs.
    <br>
    </p>
    </div>

    `
  },
  "orangenudestudypage": {
    body: `
    <h1 id="yellow-title"><i>Nude in Orange</i> (2017)</h1>
    <div>
    <img src="media/orangenudestudy.jpg" id="orangenudepicfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This piece was created during a sitting with a live model.
    <br><br>
    The piece is done in watercolor on cardstock.
    </p>
    </div>

    `
  },
  "blueselfpage": {
    body: `
    <h1 id="yellow-title"><i>Self Portrait</i> (2017)</h1>
    <div>
    <img src="media/selfportraitblue.jpg" id="selfbluepicfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This piece is a self portrait of me at age 19.
    <br><br>
    The piece is done in watercolor on cardstock.
    </p>
    </div>

    `
  },
  "bluenudepage": {
    body: `
    <h1 id="yellow-title"><i>Nudes in Blue</i> (2017)</h1>
    <div>
    <img src="media/bluenudestudy.jpg" id="bluenudefull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This piece was created during a sitting with a live model.
    <br><br>
    The piece is done in watercolor on cardstock.
    </p>
    </div>

    `
  },
  "veinblobpage": {
    body: `
    <h1 id="yellow-title"><i>Veined Dysmorph</i> (2019)</h1>
    <div>
    <img src="media/veinblob.jpg" id="veinblobfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This piece is part is part of the <i>Dysmorphia</i> series of sculptures
    that I created between 2018 and 2020. All of the sculptures are fluid, "blobby"
    masses, often colored, lit, or adorned to resemble a living organism or tissue.
    <br><br>
    This particular "dysmorph" displays its pronounced series of veins and arteries,
    created by embedding red and blue enameled copper wire into the surface of the plastic.
    </p>
    </div>

    <div>
    <img src="media/veinblobtop.jpg" id="veinblobfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This piece, like the rest of the dysmorphs, was created by casting urethane resin
    from a custom-made silicone mold.
    </p>
    </div>
    `
  },
  "dysmorphiapage": {
    body: `
    <h1 id="yellow-title"><i>Dysmorphia</i> (2018-2020)</h1>
    <div>
    <img src="media/dysmorphia-icon.jpg" id="dysmorphiaiconfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This sculpture was the central piece of my intended 2020 Honors
    thesis project, Dysmorphia: A Liquification of Body and Sound.
    <br><br>
    This piece, originally created in 2018, was selected and displayed as part
    of Brown University's 2019 Student Juried Art Exhibition, curated by by
    jurors Carla Edwards (Rhode Island School of Design, multimedia artist) and
    Shey Rivera Rios (artist and arts manager.)
    <br><br>
    This piece was intended to be part of a large-scale installation of
    sculpture, light, and sound, that was due to take place in Studio 3 at Brown's
    Granoff Center on the weekend of April 3rd, 2020. Due to the COVID-19 pandemic,
    this installation unfortunately never took place.
    </p>
    </div>

    <div>
    <img src="media/sculpturecover.JPG" id="tarasculpture"
    </div>

    <div>
    <p style="color: black;">
    <br>
    Conceptually and aesthetically, the piece
    was meant to be a visual and sonic abstraction of feelings of dysmorphia:
    misperception, distortion, and scrutiny of a physical body. The forms of
    the sculptures--the central element of the installation--were born out of
    dysmorphic descriptions of one's own body: blob-like, lumpy, jelly. I noticed
    that a lot of the nomenclature surrounding "undesirable" bodies in our
    culture centers around losing their shape, getting soft, or "turning into a
    blob," which when taken to an extreme, made me think about turning into a
    pile of liquid, or what it would be like to bring life to an inanimate pile
    of liquid.
    <br>
    </p>
    </div>

    <div>
    <div class="dysVidWrapper" style="width:100%;height:35vw;">
    <iframe width="560" height="315"
    src="https://www.youtube.com/embed/IJ49OJXRDl8"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write;
    encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
    </iframe>
    </div>

    <div>
    <p style="color: black;">
    <br>
    The piece was created by casting urethane resin in custom silicone molds.
    Each resin blob is embedded with 8 to 11 individually-adressable RGB LEDs,
    with animations run by an Arduino Uno, coded in C++.
    </p>
    </div>

    <div class="dysVidWrapper" style="width:100%;height:35vw;">
    <iframe width="560" height="315"
    src="https://www.youtube.com/embed/IrHITb1y_FM"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write;
    encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
    </iframe>
    </div>

    <div>
    <p style="color: black;">
    <br>
    The piece was interactive, and would display one of two animation patterns,
    based on the viewers' interactions with it. When left untouched, the piece
    would display the slowly pulsating idle pattern as shown in the sample above.
    When touched by the viewer, the piece displays the erratic, chaotic pattern
    as shown in the sample below.
    </p>
    </div>

    <div class="dysVidWrapper" style="width:100%;height:35vw;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/T5n7tfm9wnQ"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    </div>

    </div>
    `
  },

  "fleshdyspage": {
    body: `
    <h1 id="yellow-title"><i>Fleshy Dysmorph</i> (2020)</h1>
    <div>
    <img src="media/fleshdys.png" id="fleshblobfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This piece is part is part of the <i>Dysmorphia</i> series of sculptures
    that I created between 2018 and 2020. All of the sculptures are fluid, "blobby"
    masses, often colored, lit, or adorned to resemble a living organism or tissue.
    <br>
    </p>
    </div>

    <div>
    <img src="media/flesh1.png" id="fleshblobfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This particular "dysmorph" is characterized by its light, fleshy tone, marked
    with some blue streaks that seem to indicate veins. This dysmorph is also unique
    in the fact that it has a self-contained led network embedded into the resin, powered
    by a battery pack, making it a portable "lamp" of sorts.
    </p>
    </div>

    <div>
    <img src="media/flesh3.png" id="fleshblobfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This piece, like the rest of the dysmorphs, was created by casting urethane resin
    from a custom-made silicone mold.
    </p>
    </div>

    <div>
    <img src="media/flesh2.png" id="fleshblobfull">
    </div>
    `
  },

  "wirehandpage": {
    body: `
    <h1 id="yellow-title"><i>Constraint</i> (2018)</h1>
    <div>
    <img src="media/wirehand.png" id="wirehandfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This piece was born out of the simple prompt to "make a piece inspired by the word 'constraint.'"
    Following that prompt, I decided to constrain my time and the materials I was allowed to use, while
    also physically constraining myself.
    </p>
    </div>

    <div class="wirehandVidWrapper" style="width:100%;height:35vw;">
    <iframe width="560" height="315"
    src="https://www.youtube.com/embed/xkQjVrKxPI0"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write;
    encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
    </iframe>
    </div>

    <div>
    <p style="color: black;">
    <br>
    What came from these parameters was that I decided to limit my time and materials to what I could
    find in a small electronics classroom in RISD's Metcalf Sculpture Building, which is where I physically
    was at the time this assignment popped up in my email. I was to work only with the amount of time I had
    left before the building closed for the night, which I believe ended up being four or five hours, and
    I limited myself to using only electrical wire and hot glue: the two supplies of which there was an abundance.
    </p>
    </div>

    <div class="wirehandVidWrapper" style="width:100%;height:35vw;">
    <iframe width="560" height="315"
    src="https://www.youtube.com/embed/3q7vk-p0UWA"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write;
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    </div>

    <div>
    <p style="color: black;">
    <br>
    Part of the way through the process of "constraining" my hand in wires and glue, I decided to start filming
    myself, so that the viewer could seeing the painful and sometimes hilarious process unfold in one sitting.
    In my original write up about the experience of covering my hand in wire and hot glue, I said that it was
    "stupid, and painful, but also felt kind of good sometimes," which I think is also an apt summation of my
    feelings towards the exercise of trying to create art with a set of arbitrary restrictions. The process was
    grueling and literally painful, but the end result was something I would not have otherwise tried to do, and
    participating in and inhabiting the <i>process</i> of the art made me feel that much more connected to it.
    It made me feel "kind of good," in a way.
    </p>
    </div>

    <div>
    <img src="media/constraint-pleased.jpg" id="wirehandfull">
    </div>

    <div>
    <p>
    <br>
    </p>
    </div>
    `
  },

  "pulpdyspage": {
    body: `
    <h1 id="yellow-title"><i>Pulpy Dysmorph</i> (2019)</h1>
    <div>
    <img src="media/pulpydys.png" id="pulpfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This piece is part is part of the <i>Dysmorphia</i> series of sculptures
    that I created between 2018 and 2020. All of the sculptures are fluid, "blobby"
    masses, often colored, lit, or adorned to resemble a living organism or tissue.
    <br>
    </p>
    </div>

    <div>
    <img src="media/pulp2.png" id="pulpfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This piece in particular shows a "bloody," or "pulpy" version of the dysmorph,
    with the deep red, sinewy strings of the piece suggesting musculature, or perhaps
    exposed internals due to physical trauma.
    <br>
    </p>
    </div>

    <div>
    <img src="media/pulp3.png" id="pulpfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This dysmorph differs from the others from the series in that it is made completely
    of low-durometer silicone rubber, making it completely limp and flexible. I created
    the structure by tinting the silicone with mica powders and then pouring it over one
    of the solid, resin-based dysmorphs. I wanted to experiment with casting the silicone
    with this piece in particular because the soft silicone, along with its longer curing time, allows
    for a more fleshy, stringy, pulpy look than the resin does.
    <br>
    </p>
    </div>

    <div>
    <img src="media/pulp1.png" id="pulpfull">
    </div>

    <div>
    <p>
    <br>
    </p>
    </div>

    `
  },

  "guitarmodpage": {
    body: `
    <h1 id="yellow-title"><i>Guitar mod</i> (2021)</h1>
    <div>
    <img src="media/guitarmod.png" id="guitfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This is a paint job modification that I did to my cream-colored
    Fender Telecaster.
    <br>
    </p>
    </div>

    <div>
    <img src="media/guit1.png" id="guitfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    I wanted to decorate my guitar with the "blob-related" imagery that recurs
    in much of my work. The patterns were created partially by masking and
    spray painting the body with a gradient of rubber paints, and partially
    by hand-painting the body with acrylic paint. I also removed the pick
    guard and covered it with a piece of adhesive, holographic foil.
    <br>
    </p>
    </div>

    <div>
    <img src="media/guit2.png" id="guitfull">
    </div>

    <div>
    <p>
    <br>
    </p>
    </div>
    `
  },

  "lamourpage": {
    body: `
    <h1 id="yellow-title"><i>L'Amour</i> (2021)</h1>
    <div>
    <img src="media/lamourpic.png" id="lamourfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This is a plush recreation of the character "L'Amour," from the
    game <i>Katamari Damacy,</i> released on the PlayStation 2 in 2004.
    <br>
    </p>
    </div>

    <div>
    <img src="media/lamour1.png" id="lamourfull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This piece was sewn and embroidered by hand, using recycled materials,
    cut from a custom pattern that I designed. There is a wire embedded into the
    piece so that the character can bend and twist like they do in the game.
    <br>
    </p>
    </div>

    <div>
    <img src="media/lamour2.png" id="lamourfull">
    </div>

    <div>
    <p>
    <br>
    </p>
    </div>
    `
  },

  "ichigotchipage": {
    body: `
    <h1 id="yellow-title"><i>Ichigotchi</i> (2021)</h1>
    <div>
    <img src="media/ichigotchi.png" id="ichigotchifull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This is a plush version of the character "Ichigotchi," from the
    Tamagotchi franchise.
    <br><br>
    This piece was sewn and embroidered by hand, using recycled materials,
    cut from a custom pattern that I designed.
    <br>
    </p>
    </div>

    <div>
    <p>
    <br>
    </p>
    </div>
    `
  },

  "spikeearringspage": {
    body: `
    <h1 id="yellow-title"><i>Spike Spiegel</i> (2020)</h1>
    <div>
    <img src="media/spikeearring.png" id="spikefull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This piece is from a pair of earrings that I created from an image
    of Spike Spiegel, the main character of the 1998 anime <i>Cowboy Bebop.</i>
    <br><br>
    This piece was created by embedding a printed image of the character into an
    uncured bed of urethane resin, and then covering it with a laquer varnish.
    <br>
    </p>
    </div>

    <div>
    <p>
    <br>
    </p>
    </div>
    `
  },

  "jotaropage": {
    body: `
    <h1 id="yellow-title"><i>Jotaro Kujo</i> (2020)</h1>
    <div>
    <img src="media/jotaroearrings.png" id="jotarofull">
    </div>

    <div>
    <p style="color: black;">
    <br>
    This is a pair of earrings that I created from an image
    of Jotaro Kujo, the main character of the 2014 anime <i>Jojo's Bizarre Adventure: Stardust Crusaders.</i>
    <br><br>
    The earrings were created by embedding a printed image of the character into an
    uncured bed of urethane resin, and then covering it with a laquer varnish.
    <br>
    </p>
    </div>

    <div>
    <p>
    <br>
    </p>
    </div>
    `
  },

  "fospage": {
    body: `
    <h1 id="title-text"><br><i>Fos</i> (2017)</h1>
    <div>
    <img src="media/fosangle.jpg" id="fosfull">
    </div>

    <div>
    <p>
    <br>
    "Fos" is the Greek word for
    "light" or "glow." In constructing this photo-sensitive analog synthesizer,
    I wanted to create an abstract performance piece
    that displayed the crossover of two sensorial experiences
    (hearing and sight,) and how they can alter and heighten
    the perception of the other.
    <br><br>
    I composed and performed this piece
    using the synthesizer and an original signal processing patch
    that I programmed using Max/MSP.
    </p>
    </div>

    <div>
    <div class="fosVidWrapper" style="width:100%;height:35vw;">
    <iframe width="560" height="315"
    src="https://www.youtube.com/embed/zBgehTN0Gq8"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write;
    encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
    </iframe>
    </div>

    <div>
    <p>
    <br><br>
    The brightness level of the purple string of lights was
    controlled by the amplitude of the audio, using a MIDI-to-DMX
    conversion box that was getting signal from the Max patch. Later
    in the piece, I use the light generated from the audio to play the
    photosensitive synthesizer, introducing more feedback into the system.
    I wanted to create a literal feedback loop between those two modes of
    sensorial perception, and to create something overwhelming, causing a
    "sensory overload." I also tried to create some hybrid timbres by
    implementing many layers of real-time audio processing on my vocals.
    The combination of the source sound from my voice and the many layers
    of pitch shifting, delay, and time manipulation created a new voice,
    which I see as an "analog/digital hybrid."
    </p>
    </div>

    <div>
    <img src="media/fos1.png" id="fosfull">
    </div>

    <div>
    <p>
    <br>
    This piece was selected for performance at the Brandeis Electro-Acoustic
    Music (BEAMS) Festival in Waltham, Massachusetts in the Fall of 2017.
    </p>
    </div>

    <div>
    <p>
    <br>
    </p>
    </div>
    `
  },

  "roypage": {
    body: `
    <h1 id="title-text"><br><i>Roy G. Biv</i> (2017)</h1>
    <div>
    <img src="media/roy1.png" id="royfull">
    </div>

    <div>
    <p>
    <br>
    Roy is a digital controller/video synthesizer that I designed and
    constructed using an Arduino Nano, and programmed in Max/MSP.
    <br><br>
    Roy reads the audio coming from the input source (in most cases, an audio
    interface, or the laptop microphone) and draws red, blue, and green waveforms
    based on the audio's amplitude.
    <br><br>
    Below is a demo of Roy at work, from an excerpt of <i>Shadows,</i> a piece
    that I composed and is being performed here by myself and the rest of
    the Brown University MEME Ensemble, in the fall of 2017.
    <br>
    </p>
    </div>

    <div>
    <div class="fosVidWrapper" style="width:100%;height:35vw;">
    <iframe width="560" height="315"
    src="https://www.youtube.com/embed/wA8lxXLrhig"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write;
    encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
    </iframe>
    </div>

    <div>
    <p>
    <br>
    <br>
    The designs for the hardware and software are a play on the phrase
    "ROY G. BIV," the common acronym for the colors of the rainbow, as well
    as "RGB," meaning red, blue, green, being the values that make up the
    color of a pixel on a screen.
    <br><br>
    The synthesized visuals were aesthetically inspired by the look of
    TV static or color test bars, which can be seen in the way it creates
    blocky, chaotic colors and shapes.
    </p>
    </div>

    <div>
    <img src="media/roy.png" id="royfull">
    </div>

    <div>
    <p>
    <br>
    Each part of Roy's "face" controls a different parameter of the
    Max patch. The pairs of blue, green, and red knobs controls the
    rate at which the synth draws patterns in the x and y directions
    of the screen, while the buttons for each color toggle between different
    types of waveforms being drawn, such as sine waves, triangle waves,
    sawtooth waves, or noise.
    <br><br>
    The yellow knobs control the resolution
    or "zoom" of the pixels in the x and y directions, causing the lines to
    appear thinner or thicker, and changing the number of lines that are
    visible on screen. Finally, the switch for his "nose" toggles between
    live audio feedback, and getting feedback from a pre-loaded audio file.
    <br>
    </p>
    </div>

    `
  },

  "freeformpage": {
    body: `
    <h1 id="title-text"><br><i>Samsung - Freeform</i> (2018)</h1>

    <div class="freeformVidWrapper" style="width:100%;height:35vw;">
    <iframe title="vimeo-player"
    src="https://player.vimeo.com/video/288247299"
    width="640" height="360"
    frameborder="0" allowfullscreen>
    </iframe>
    </div>

    <div>
    <p>
    <br>
    <i>Freeform</i> was a large-scale, interactive installation designed to
    commemorate the release of the Galaxy Note9, and to showcase its new
    S Pen feature.
    <br><br>
    The installation was housed at Samsung 837, the company's flagship
    retail showroom based in lower Manhattan.
    <br><br>
    Working with the crew at Hypno, I was one of the lead sound designers
    for the experience, having designed the interactive sound effects for
    each different pen, using a real-time setup in Reaktor.
    <br><br>
    The sample below shows what the ambient track and some of the pens
    sounded like.
    <br>
    </p>
    </div>

    <div class="freeformVidWrapper" style="width:100%;height:35vw;">
    <iframe width="560" height="315"
    src="https://www.youtube.com/embed/gM0bFoxfO_g"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write;
    encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
    </iframe>
    </div>

    `
  },

  "fastestpage": {
    body: `
    <h1 id="title-text"><br><i>Samsung - Fastest</i> (2018)</h1>

    <div class="fastestVidWrapper" style="width:100%;height:35vw;">
    <iframe width="560" height="315"
    src="https://www.youtube.com/embed/AVCQQoX5BE8"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write;
    encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
    </iframe>
    </div>

    <div>
    <p>
    <br>
    <i>Freeform</i> was a large-scale, installation designed to
    showcase the processing speed of the upcoming
    Galaxy Note9.
    <br><br>
    The installation was housed at Samsung 837, the company's flagship
    retail showroom based in lower Manhattan.
    <br><br>
    Working with the crew at Hypno, I was one of the hardware engineers on
    this project, soldering and wiring the twelve Arduino Unos that ran
    data between the phones and the LED wheels. I was also one of the
    installers on-location at 837, working with my colleagues to
    wire, assemble, and test the installation.
    <br><br>
    As the speeds ramp up and drop, so do the LED wheels for the corresponding
    phones.
    <br>
    </p>
    </div>
    `
  },

  "stonewallpage": {
    body: `
    <h1 id="title-text"><br><i>Google - Stonewall Forever</i> (2019)</h1>

    <div class="stonewallVidWrapper" style="width:100%;height:35vw;">
    <iframe title="vimeo-player"
    src="https://player.vimeo.com/video/345111346"
    width="640" height="360" frameborder="0"
    allowfullscreen>
    </iframe>
    </div>

    <div>
    <p>
    <br>
    <i>Stonewall Forever</i> was an interactive photobooth installation designed to
    commemorate 50 years of LGBTQIA pride.
    <br><br>
    The installation was created by Hypno, in collaboration with Google,
    and was housed in 5 locations across the world in June of 2019.
    <br><br>
    Working with Hypno, I acted as the head installer at four events:
    three locations in Manhattan (I was actually the installer for the specific event showcased
    in the video), and one location at the YouTube Space in
    Toronto.
    <br><br>
    As the installer, I shipped and transported the equipment for the install,
    assembled the booths and backdrops at each location, and worked with the
    software team to boot and callibrate the systems for consumer usage.
    <br><br>
    After taking their photos, users had the option to upload their shots to
    a virtual stonewall monument, populated with images and stories about the
    50 year history of Pride across the globe.
    </p>
    </div>
    `
  }
}
