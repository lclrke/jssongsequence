


var freeverb = new Tone.Freeverb(
  {
roomSize : 0.4 ,
dampening : 2000
}

);
freeverb.wet.value = 0.3;

var dist = new Tone.Distortion({
	"distortion" : 0.5
});

var lowPassFreq = new Tone.Signal(100, Tone.Frequency);

var lowPass = new Tone.Filter(
    {
        "type":"lowpass",
        "frequency":0
    }
);


var basscutEQ = new Tone.EQ3(-.5, 0, 0);


 const FracArpsynth = new Tone.MonoSynth({
   "oscillator" : {
     "type" : "sawtooth"
  },

  filter : {
  Q : 5 ,
  type : "lowpass",
  rolloff : -12
  } ,

  envelope : {
    attack : 0.09 ,
   decay : 0.4 ,
   sustain : 0.4 ,
   release : .000009
 },
 filterEnvelope : {
 attack : .5 ,
 decay : 0.2 ,
 sustain : 0.9 ,
 release : 0.5 ,
 baseFrequency : 500 ,

 octaves : 5 ,
 exponent : 9
 }

}).chain(dist,basscutEQ,lowPass, freeverb,Tone.Master);

 FracArpsynth.volume.value = -45;



 var Marimbasynth = new Tone.Synth({

       "oscillator": {
           "partials": [
               1,
               0,
               2,
               0,
               3
           ]
       },
       "envelope": {
           "attack": 0.001,
           "decay": 1.2,
           "sustain": 0,
           "release": 1.2
       }

 }).toMaster();
 Marimbasynth.volume.value = -20;
