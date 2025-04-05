var siteRecentPosts = document.querySelectorAll('.recentPostBlocks');


document.addEventListener("DOMContentLoaded", function(){
        var tekstot = document.querySelector('textarea[name=txt]');
        var brojach = document.getElementById("ushteKolku");

        function promenaBoja(dolzinaTekst){
            brojach.style.color = `rgb(${dolzinaTekst * 0.255} ,0,0)`;
        }

        tekstot.addEventListener("input", function(){
            var dolzinaTekst = tekstot.value.length;
            brojach.textContent = `Imas us ${1000 - dolzinaTekst} karakteri ak me postovas`;
            promenaBoja(dolzinaTekst);
        })
        
        
})

for (var i = 0; i< siteRecentPosts.length; i++){
    siteRecentPosts[i].addEventListener("click", function(){
        var novNaslovNaMain = this.querySelector('#RecentPostNaslov').innerHTML;
        var novContentNaMain = this.querySelector('.RecentPostContent').getAttribute('data-unsliced');
        var novFooterNaMain = this.querySelector('#RecentPostByKoj').innerHTML;


        document.querySelector('#MainPostTitle').innerHTML = novNaslovNaMain;
        document.querySelector('#MainPostContent').innerHTML = novContentNaMain.replace(/\r?\n/g, "<br>");
        document.querySelector('#MainPostFooter').innerHTML = novFooterNaMain;
    })
    siteRecentPosts[i].addEventListener("touchend", function(){
        var novNaslovNaMain = this.querySelector('#RecentPostNaslov').innerHTML;
        var novContentNaMain = this.querySelector('.RecentPostContent').getAttribute('data-unsliced');
        var novFooterNaMain = this.querySelector('#RecentPostByKoj').innerHTML;


        document.querySelector('#MainPostTitle').innerHTML = novNaslovNaMain;
        document.querySelector('#MainPostContent').innerHTML = novContentNaMain.replace(/\r?\n/g, "<br>");
        document.querySelector('#MainPostFooter').innerHTML = novFooterNaMain;
    })
}

var animiraniDugminja = document.querySelectorAll('.dugmeZaPosts');

for(let i = 0;i< animiraniDugminja.length;i++){
    animiraniDugminja[i].addEventListener("mousedown", function(){
        animiraniDugminja[i].classList.add("pritisnatoDugme");
    });
    animiraniDugminja[i].addEventListener("mouseout", function(){
        animiraniDugminja[i].classList.remove("pritisnatoDugme");
    });
    animiraniDugminja[i].addEventListener("mouseup", function(){
        animiraniDugminja[i].classList.remove("pritisnatoDugme");
    });
}