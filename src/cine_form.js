document.addEventListener("DOMContentLoaded", (e) =>{
    console.log(e.target);
    
    /* movie :[ 
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
    ] */
    const list_movie = [
        {
            image : "https://resizing.flixster.com/IIKXvP0JRYHDLTh_jD4wOm0ap2w=/206x305/v2/https://flxt.tmsimg.com/assets/p30673_p_v8_ag.jpg",
            title : "SPIRITED AWAY",
            date : 2001,
            director : "Hayao Miyazaki, Kirk Wise",
            type : "Fantasy, Animation, Adventure"
        },
        {
            image : "https://resizing.flixster.com/uK2CUyp6BYG4Odieix9hNxJgW2U=/206x305/v2/https://flxt.tmsimg.com/assets/p14436224_p_v8_aa.jpg",
            title : "PAPRIKA",
            date : 2018,
            director : "Satoshi Kon",
            type : "Adventure, Anime, Sci-Fi, Action"
        },
        {    
            image : "https://resizing.flixster.com/N4L-5qD9TC8P5V28dyZB3mTGAbQ=/206x305/v2/https://flxt.tmsimg.com/assets/p142479_v_v8_an.jpg",
            title : "METROPOLIS",
            date : 2002,
            director : "Rintaro",
            type : "Sci-Fi, Anime"
        },
        {    
            image : "https://resizing.flixster.com/7LuLxG_FcvvQUXweiHeHDhFwb-E=/206x305/v2/https://flxt.tmsimg.com/assets/p16852_p_v8_ad.jpg",
            title : "AKIRA",
            date : 1991,
            director : "Katsuhiro Ōtomo",
            type : "Animation, Sci-Fi, Cyberpunk"
        },
        {    
            image : "https://resizing.flixster.com/pOtl9I1DdzRLgzLgKhMv1jJyuqo=/206x305/v2/https://flxt.tmsimg.com/assets/p23436_p_v8_aa.jpg",
            title : "JIN-ROH: THE WOLF BRIGADE",
            date : 1998,
            director : "Hiroyuki Okiura",
            type : "Animation, Sci-Fi"
        }]
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
            const data_movie_modal = `<figure class="modale">
                                        <img src="${element.image}" alt="affiche ${element.title}">
                                        <figcaption>
                                        <h3 class="desc">${element.title}</h3>
                                            <p>
                                                Réalisateur : ${element.director} <br>
                                                Genre : ${element.type} <br>
                                            </p>
                                            <time>Sortie : ${element.date} </time>
                                        </figcaption>
                                        <figure>
                                    `

            let modal = document.querySelector(".parent-modale");
            function open_modal() {
                console.log(data_movie_modal);
                modal.classList.add("modale-active");
                modal.innerHTML = data_movie_modal;
                
            }
            
            el.addEventListener("click", open_modal);
            
            let closed = document.querySelector(".parent-modale");
            let closed_all = document.querySelector(".parent-modale");

            closed.addEventListener("click", () => {
                modal.classList.remove("modale-active");
            });
            closed_all.addEventListener("click", () => {
                modal.classList.remove("modale-active");
            });
        })
        
       
    })