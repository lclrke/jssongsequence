const HangDrum = new Tone.Sampler({


"G4": "G4.wav",
"D4": "D4.wav",


}, {
  "release" : 1,
  "baseUrl" : "https://lclrke.github.io/Sampler/HangDrum/"
}).toMaster();
HangDrum.volume.value = -14;



const SoulChords = new Tone.Sampler({

"D4": "Dm.wav",
"E4": "Em.wav",
"F4": "F.wav",
"G4": "G.wav",
"A4": "Am.wav",
"C4": "C.wav",

}, {
"release" : 1,
"baseUrl" : "https://lclrke.github.io/Sampler/SoulPianoChords/"
}).toMaster();
SoulChords.volume.value = -14;



const AiryMarimba = new Tone.Sampler({


"G4": "G4.wav",
"D4": "D4.wav",
"A3": "A3.wav",
"E3": "E3.wav",

}, {
"release" : 1,
"baseUrl" : "https://lclrke.github.io/Sampler/AiryMarimba/"
}).toMaster();
AiryMarimba.volume.value = -15;


const LightMarimba = new Tone.Sampler({

"G3": "https://dl.dropboxusercontent.com/s/94scejal9gqbtic/flightmarimba.wav?dl=0",
"D4": "https://dl.dropboxusercontent.com/s/v7ghfsvpw7eapo1/clightmarimba.wav?dl=0",
"A3": "https://dl.dropboxusercontent.com/s/g79px061z3kpv43/glightmarimba.wav?dl=0",


}, {
"release" : 1,
}).toMaster();
LightMarimba.volume.value = -5;







const FractTripChords = new Tone.Sampler({

"D4": "https://dl.dropboxusercontent.com/s/ps51hwl4ff1hvd2/dmfracttrip1m.wav?dl=0" ,
"F4": "https://dl.dropboxusercontent.com/s/8x6e5b5ts1o28fw/ffracttrip1m.wav?dl=0" ,

}, {
"release" : 1,
}).toMaster();
FractTripChords.volume.value = -2;


const FractPads = new Tone.Sampler({

"D4": "https://dl.dropboxusercontent.com/s/8void8g7p7bzerm/dmfractpad2m.wav?dl=0",

"F4": "https://dl.dropboxusercontent.com/s/ets801lm0q3sd2n/Ffractpad2m.wav?dl=0",

}, {
"release" : 1,
}).toMaster();
FractPads.volume.value = 0;



const FractPianoLead = new Tone.Sampler({

"D4": "https://dl.dropboxusercontent.com/s/aay60y160uxn2k0/fractpianoleadb2m.wav?dl=0",

"F4": "https://dl.dropboxusercontent.com/s/1k80nshwa2g76up/fractpianoleada2m.wav?dl=0",

}, {
"release" : 1,
}).toMaster();
FractPianoLead.volume.value = 0;


const MarimbaRoll = new Tone.Sampler({

"D4": "https://dl.dropboxusercontent.com/s/ghsv6evabnl0kfc/marimbaroll.wav?dl=0",


}, {
"release" : 1,
}).toMaster();
MarimbaRoll.volume.value = 2;


const FractVox = new Tone.Sampler({

"D4": "https://dl.dropboxusercontent.com/s/qasel5y9tqel0et/fractvoxB4m.wav?dl=0" ,
"F4": "https://dl.dropboxusercontent.com/s/caf755nbpe3ua6z/fractvoxA4m.wav?dl=0" ,

}, {
"release" : 1,
}).toMaster();
FractVox.volume.value = 0;
