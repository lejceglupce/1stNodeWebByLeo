

document.addEventListener("DOMContentLoaded", function(){
        var tekstot = document.querySelector('textarea[name=txt]');
        var brojach = document.getElementById("ushteKolku");
        

        function promenaBoja(dolzinaTekst){
            brojach.style.color = `rgb(${dolzinaTekst * 0.255} ,0,0)`;
        };

        tekstot.addEventListener("input", function(){
            var dolzinaTekst = tekstot.value.length;
            brojach.textContent = `Imas us ${1000 - dolzinaTekst} karakteri ak me postovas`;
            promenaBoja(dolzinaTekst);
        });
});

document.addEventListener("DOMContentLoaded", function(){
    var allTheSideBlocks = document.querySelectorAll(".recentPostBlocks");

    for(var i = 0; i<allTheSideBlocks.length; i++)
    {
        allTheSideBlocks[i].addEventListener("click", function(){
            var naslovZaMain = this.querySelector(".RecentPostNaslov").innerHTML;
            var contentZaMain = this.querySelector(".RecentPostContent").getAttribute('data-unsliced').replace(/\r?\n/g, '<br>');
            var footerZaMain = this.querySelector(".RecentPostByKoj").innerHTML;

            document.querySelector(".MainPostTitle").innerHTML = naslovZaMain;
            document.querySelector(".MainPostContent").innerHTML = contentZaMain;
            document.querySelector(".MainPostFooter").innerHTML = footerZaMain;
        });   
    }
    for(var i = 0; i<allTheSideBlocks.length; i++)
        {
            allTheSideBlocks[i].addEventListener("touchstart", function(){
                event.preventDefault;
                var naslovZaMain = this.querySelector(".RecentPostNaslov").innerHTML;
                var contentZaMain = this.querySelector(".RecentPostContent").getAttribute('data-unsliced').replace(/\r?\n/g, '<br>');
                var footerZaMain = this.querySelector(".RecentPostByKoj").innerHTML;
    
                document.querySelector(".MainPostTitle").innerHTML = naslovZaMain;
                document.querySelector(".MainPostContent").innerHTML = contentZaMain;
                document.querySelector(".MainPostFooter").innerHTML = footerZaMain;
            });   
        }
});



