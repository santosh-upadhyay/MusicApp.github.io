// console.log("gjklf;ghjkl;jdksl;")
songIndex =  0;
audioElement = new Audio('song/1.mp3');
masterPlay = document.getElementById("masterPlay");
myProgressBar=document.getElementById("myProgressBar");
gif = document.getElementById('gif');
songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"1.jpg"},
    {songName:"Gaya Gaya Gaya",filePath:"song/2.mp3",coverPath:"1.jpg"},
    {songName:"Maan Le",filePath:"song/3.mp3",coverPath:"1.jpg"},
    {songName:"Mera Love Main",filePath:"song/4.mp3",coverPath:"1.jpg"},
    {songName:"Pehli Pehli Baarish",filePath:"song/5.mp3",coverPath:"1.jpg"},
    {songName:"Voice Of Anek",filePath:"song/6.mp3",coverPath:"1.jpg"}
];

songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText= songs[i].songName;
    element.getElementsByClassName('timestamp')[0].innerHtml=new Audio(songs[i].filePath).currentTime;
});
// How to Handle Play And Pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})

// timeupdate of audioElement
audioElement.addEventListener('timeupdate',()=>{
    console.log("my name is santosh")
    progress = ((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
   // t=audioElement.currentTime*100;
        audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
        //myProgressBar.value = t;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    // AudioElement = new Audio(songs[i].filePath);
    element.addEventListener('click',(e)=>{
    //    console.log(e.target);
       makeAllPlays();
       songIndex = parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       audioElement.src = `song/${songIndex+1}.mp3`;
       audioElement.currentTime = 0;
       audioElement.play(); 
       masterPlay.classList.add('fa-play-circle');
       masterPlay.classList.remove('fa-pause-circle');
       
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>5){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play(); 
    masterPlay.classList.add('fa-play-circle');
    masterPlay.classList.remove('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play(); 
    masterPlay.classList.add('fa-play-circle');
    masterPlay.classList.remove('fa-pause-circle');
})

