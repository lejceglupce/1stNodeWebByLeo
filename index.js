import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirName = dirname(fileURLToPath(import.meta.url));

var postoj = []; /// prazna niza za da mojt site input raboti da se napiket tamu






const port = 3000;
const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));




app.get("/CreatePost", (req,res) =>{
    res.render("cpost.ejs");
}) // createpage load once clicked


app.get("/", (req,res) =>{
    res.render("main.ejs");
}) // mainpage load



app.post("/Submit", (req,res) =>{
    
    var vremeNaPost = new Date();
    var saati = vremeNaPost.getHours();
    var minuti = vremeNaPost.getMinutes();
    var sekundi = vremeNaPost.getSeconds();
    var den = vremeNaPost.getDate();
    var mesec = vremeNaPost.getMonth()+1;
    var godina = vremeNaPost.getFullYear();
    
    var vreme = `${saati < 10 ? "0" + saati : saati}:${minuti < 10 ? "0" + minuti : minuti}:${sekundi < 10 ? "0" + sekundi : sekundi}`;
    var datum = `${mesec < 10 ? "0" + mesec : mesec}/${den < 10 ? "0" + den : den}/${godina}`;
    var vremePrikaz = `${saati < 10 ? "0" + saati : saati}:${minuti < 10 ? "0" + minuti : minuti}`;

   var VnesenNaslov = req.body.naslov;
   var VnesenoIme = req.body.ime;
   var VnesenTxt = req.body.txt;
   var PasswordOdPostirac = req.body.pword;

   

   res.locals.pword = PasswordOdPostirac;
   res.locals.naslov = VnesenNaslov;
   res.locals.ime = VnesenoIme;
   res.locals.txt = VnesenTxt;
             // ovie 6 linii se za da mozam da gi koristam od bodyparser promenlivi vo EJS

                var novPost = {
                    imePost: req.body.ime,
                    naslovPost: req.body.naslov,
                    kontentPost: req.body.txt,
                    vremePost: vreme,
                    datumPost: datum,
                    vremeZaDisplay: vremePrikaz
                }
                postoj.push(novPost);
                res.locals.successMsg = "Uspesno submitovano ak me potsovas";
             // gi primat site inputi, gi redit vo objektot novPost pa vo zavisno ako site inputi se popolneti go redit objektot vo nizata
        // i vrakjat soodvetna poraka  // da mozam da ja koristasm vo EJS bez undefined

    res.render("cpost.ejs"); // pomagat da mozam da koristam data vo EJS
});

app.get("/Home", (req,res) =>{
    var sortedPostoj = postoj.sort((a,b) => {
        var prvTime = new Date(`${a.datumPost} ${a.vremePost}`);
        var vtorTime = new Date(`${b.datumPost} ${b.vremePost}`);
        return vtorTime - prvTime;
    })
    res.render("main.ejs", { sitePostoj : sortedPostoj });
}) //BIDEJKI INPUTITE SE ZACUVANI LOKALNO, SO OVAJ GET METHOD GI KORISTIME OD LOKALNI I MU GI PREDAVAME NA /HOME DA MOJT DA SE KORISTET VO EJS


app.post("/Search", (req,res)=>{
    var imeShoBarame = req.body.SearchByName;
    var baraniPostoj = [];

    for(var i =0;i<postoj.length;i++)
    {
        if(postoj[i].imePost === imeShoBarame)
        {
            baraniPostoj.push(postoj[i]);
        }
    }
    res.render("search.ejs", { 
        siteBaraniPostoj: baraniPostoj,
        defoPorache: "No results found"
    });
});



app.listen(port, ()=>{
    console.log(`Successfully running a server on ${port} port`);
});


