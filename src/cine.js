document.addEventListener("DOMContentLoaded",(e)=>{
    console.log(e.target);
    /*movie :[ 
        {
        image : String,
        title : String,
        date : Number,
        director : String,
        type : String
        },
        {
        image : String,
        title : String,
        date : Number,
        director : String,
        type : String
        }
    ]*/
    const list_movie = [
        {
            image : "https://resizing.flixster.com/ofMWj9FQLR4I6gMc1jLnmfjgjRY=/206x305/v2/https://flxt.tmsimg.com/assets/p4161_p_v8_av.jpg",
            title : "THE GOOD, THE BAD AND THE UGLY",
            date : 1967,
            director : "Sergio Leone",
            type : "Western"
        },
        {
            image : "https://resizing.flixster.com/rsjbL-fRhAFApMv-HILDdS9TBUg=/206x305/v2/https://flxt.tmsimg.com/assets/p3571_p_v8_al.jpg",
            title : "A FISTFUL OF DOLLARS",
            date : 1964,
            director : "Sergio Leone",
            type : "Western"
        },
        {    
            image : "https://resizing.flixster.com/1-3jYE6RE5xexGFbDhv81g0cWUU=/206x305/v2/https://flxt.tmsimg.com/assets/p9287010_p_v8_aa.jpg",
            title : "DJANGO UNCHAINED",
            date : 2012,
            director : "Quentin Tarantino",
            type : "Action, Western, Drama"
        },
        {    
            image : "https://resizing.flixster.com/vXLCFvdBmgV9FYaFwFVoeDc8rNE=/206x305/v2/https://flxt.tmsimg.com/assets/p2803_p_v8_af.jpg",
            title : "ONCE UPON A TIME IN THE WEST",
            date : 1969,
            director : "Sergio Leone",
            type : "Western"
        },
        {    
            image : "https://resizing.flixster.com/wmT7MbU06GHG5IJoJmxNwUWbZPU=/206x305/v2/https://flxt.tmsimg.com/NowShowing/152024/152024_ab.jpg",
            title : "THE HATEFUL EIGHT",
            date : 2015,
            director : "Quentin Tarantino",
            type : "Western"
        },
        {    
            image : "https://resizing.flixster.com/SCs35-FvuLFrtxcSSNzvGE6wg7U=/206x305/v2/https://flxt.tmsimg.com/assets/p33156_p_v8_aq.jpg",
            title : "THE LORD OF THE RINGS: THE RETURN OF THE KING",
            date : 2003,
            director : "Peter Jackson",
            type : "Adventure, Fantasy"
        },
        { 
            image : "https://resizing.flixster.com/hXI16eWpzhmvHh4wKtyC1_ytSZk=/206x305/v2/https://flxt.tmsimg.com/NowShowing/28900/28900_da.jpg",
            title : "HARRY POTTER AND THE CHAMBER OF SECRETS",
            date : 2002,
            director : "Chris Columbus",
            type : "Kids & Family, Adventure, Fantasy"
        },
        {    
            image : "https://resizing.flixster.com/cJDPuwlpKY1FZAUNFEpDqn7fn24=/206x305/v2/https://resizing.flixster.com/KGNmshIAmgzapsowABGYNKSiAIk=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzAwOWFkYzdjLTczNjgtNDE5ZC04NjExLTJjNzk4MTc1ODJiNi5qcGc= ",
            title : "EXCALIBUR",
            date : 1981,
            director : "John Boorman",
            type : "Adventure, Fantasy"
        },
        {    
            image : "https://resizing.flixster.com/DyWBH2fY4lt0Q4h0cfcLGde5Dis=/206x305/v2/https://flxt.tmsimg.com/assets/p8299_p_v8_as.jpg",
            title : "THE NEVERENDING STORY",
            date : 1984,
            director : "Wolfgang Petersen",
            type : "Adventure, Kids & Family, Fantasy"
        },
        {
            image : "https://resizing.flixster.com/V_oZJXOwGIr2tZpJzbtv43zdFnk=/206x305/v2/https://flxt.tmsimg.com/assets/p8884_p_v8_ae.jpg",
            title : "STAR WARS: EPISODE V -- THE EMPIRE STRIKES BACK",
            date : 1980,
            director : "Irvin Kershner",
            type : "Sci-Fi, Adventure, Fantasy, Action"
        },
        {
            image : "https://resizing.flixster.com/q1aWnhA588SmGiAht_9L3KXFUMA=/206x305/v2/https://flxt.tmsimg.com/assets/p22804_p_v8_av.jpg",
            title : "THE MATRIX",
            date : 1999,
            director : "Lilly Wachowski, Lana Wachowski",
            type : "Sci-Fi, Action"
        },
        {   
            image : "https://resizing.flixster.com/48cHHZ34n54JDDJSJzogRttBB1Y=/206x305/v2/https://flxt.tmsimg.com/assets/p21512_p_v8_ad.jpg",
            title : "BLADE",
            date : 1998,
            director : "Stephen Norrington",
            type : "Adventure, Horror, Action, Fantasy"
        },
        {
            image : "https://resizing.flixster.com/mhhbLJrcLHZGs5WNjP2m4ewUx8w=/206x305/v2/https://flxt.tmsimg.com/assets/p35470_p_v8_aj.jpg ",
            title : "KUNG FU HUSTLE",
            date : 2004,
            director : "Stephen Chow",
            type : "Comedy, Sports & Fitness, Action, Fantasy"
        },
        {
            image : "https://resizing.flixster.com/VjXAXx53p8xG61TKtC7Lbxd-ihY=/206x305/v2/https://flxt.tmsimg.com/assets/p16059_p_v8_ae.jpg ",
            title : "THE PROFESSIONAL",
            date : 1994,
            director : "Luc Besson",
            type : "Crime, Drama, Action, Mystery & Thriller"
        },
        {
            image : "https://resizing.flixster.com/8cpA3zKXCXtWdW5_JoQwxOGv1zg=/206x305/v2/https://flxt.tmsimg.com/assets/p32988_p_v8_af.jpg",
            title : "KILL BILL: VOL. 1",
            date : 2003,
            director : "Quentin Tarantino",
            type : "Action, Sports & Fitness"
        },
    ]
        list_movie.forEach(element => {
            
            const data_movie = `<figure>
                                    <img src="${element.image}" alt="affiche ${element.title}">
                                    <figcaption>
                                        <h3>${element.title}</h3>
                                            <ul>
                                                <li>Sortie : ${element.date}</li>
                                                <li>Réalisateur : ${element.director}</li>
                                                <li>Genre : ${element.type}</li>
                                            </ul>
                                    </figcaption>
                                <figure>
                                `
            let el = document.createElement("li")
            let parents = document.querySelector("ul")
            parents.appendChild(el);
            el.innerHTML = data_movie;
        })
        
    
})