//let tor = "tor3.xm" //зміна фонової музики. від 1 до --


        var script = document.createElement('script');                     // Підключаємо скріпт
        script.src = "channel.js";                                         // щоб в html вписати одну строку
        document.getElementsByTagName('head')[0].appendChild(script);      // А інші js підтягувались звіти 
        
        var script1 = document.createElement('script');
        script1.src = "binary-file-reader.js";
        document.getElementsByTagName('head')[0].appendChild(script1);
        
        var script1 = document.createElement('script');
        script1.src = "note-tooltips.js";
        document.getElementsByTagName('head')[0].appendChild(script1);
        
        var script1 = document.createElement('script');
        script1.src = "xm.js";
        document.getElementsByTagName('head')[0].appendChild(script1);



// FIXME assumes linear frequency table
function computePlaybackRate(noteNum, relNoteNum, fineTune) {
  // this is different from the formula in the spec, but is more readable
  return Math.pow(2, (noteNum - 1 + relNoteNum - 48/*C-4*/ + fineTune/128)/12) * 8363 / 44100;
}

var actx;
var maxVolume = 0.2;
// HTML elements


function onBodyLoad() {
  
        
  actx = new AudioContext();
  onFetch(event);
  
  if (location.hash !== '') {
    var url = location.hash.slice(1); // remove # from beginning
    fetchUrlAndRead(url);
  }
}


var stopPlease = false;

function stopPlaying() {
  // set stopPlease to make sure onended callbacks don't start new stuff
  stopPlease = true;
  if (xm !== undefined) { xm.stopAllChannels(); }
  // after all the onended callbacks have run, reset stopPlease
  setTimeout(function() { stopPlease = false; }, 500);
}

var xm;

function clearSong() {


  if (xm !== undefined) {
    xm.masterVolume.disconnect();
    xm = undefined;
  }
}

function readFile(file) {
  clearSong();
  xm = new XM(file);
  xm.onload = function() {

    console.log("successfully loaded file");

	
	setTimeout(function() { 
	console.log("pleay");
	xm.playSong(); 
	}, 800);
  }
}

function fetchUrlAndRead(url) {
  console.log('fetching XM file from URL: ' + url);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status === 200) {
      console.log('fetched, reading');
      readFile(xhr.response);
    } // TODO handle HTTP errors
  }
  xhr.send();
}

function onInputFileChange(evt) {
  readFile(evt.target.files[0]);
}

function onFetch(evt) {
  fetchUrlAndRead(tor);
}
