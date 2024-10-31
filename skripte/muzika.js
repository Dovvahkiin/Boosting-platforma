// PROBLEM: Iz nekog razloga ne radi ova skripta ukoliko se ne pokrene sajt pomoću live servera u VSCode.

const audio = new Audio("../audio/pozadinskaMuzika.mp3");
let klik = 0;

function pustanjeMuzike ()
{
    audio.volume = 0.25;
    audio.play();
}

let mutiranje = $(".mutiranje");

mutiranje.click(function()
{
    if(klik===0)
    {
        klik = 1;
        akoJeKliknuto();
    }
    else 
    {
        klik = 0;
        akoJeKliknuto();
    }

    
})

function akoJeKliknuto()
{
    switch(klik)
    {
        case 0:

            audio.pause();
            mutiranje.attr("src","../slike/mute.png");
            break;
    
    
        case 1:
            audio.play();
            mutiranje.attr("src","../slike/unmute.png");
            break;

    }
}


