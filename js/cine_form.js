document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    movie: [{
        image: String,
        title: String,
        date: Number,
        director: String,
        type: String
    }, {
        image: String,
        title: String,
        date: Number,
        director: String,
        type: String
    }];
    const list_movie = [{
        image: "https://resizing.flixster.com/IIKXvP0JRYHDLTh_jD4wOm0ap2w=/206x305/v2/https://flxt.tmsimg.com/assets/p30673_p_v8_ag.jpg",
        title: "SPIRITED AWAY",
        date: 2001,
        director: "Hayao Miyazaki, Kirk Wise",
        type: "Fantasy, Animation, Adventure"
    }, {
        image: "https://resizing.flixster.com/uK2CUyp6BYG4Odieix9hNxJgW2U=/206x305/v2/https://flxt.tmsimg.com/assets/p14436224_p_v8_aa.jpg",
        title: "PAPRIKA",
        date: 2018,
        director: "Satoshi Kon",
        type: "Adventure, Anime, Sci-Fi, Action"
    }, {
        image: "https://resizing.flixster.com/N4L-5qD9TC8P5V28dyZB3mTGAbQ=/206x305/v2/https://flxt.tmsimg.com/assets/p142479_v_v8_an.jpg",
        title: "METROPOLIS",
        date: 2002,
        director: "Rintaro",
        type: "Sci-Fi, Anime"
    }, {
        image: "https://resizing.flixster.com/7LuLxG_FcvvQUXweiHeHDhFwb-E=/206x305/v2/https://flxt.tmsimg.com/assets/p16852_p_v8_ad.jpg",
        title: "AKIRA",
        date: 1991,
        director: "Katsuhiro Ōtomo",
        type: "Animation, Sci-Fi, Cyberpunk"
    }, {
        image: "https://resizing.flixster.com/pOtl9I1DdzRLgzLgKhMv1jJyuqo=/206x305/v2/https://flxt.tmsimg.com/assets/p23436_p_v8_aa.jpg",
        title: "JIN-ROH: THE WOLF BRIGADE",
        date: 1998,
        director: "Hiroyuki Okiura",
        type: "Animation, Sci-Fi"
    }];
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
                                `;
        let el = document.createElement("li");
        let parents = document.querySelector("ul");
        parents.appendChild(el);
        el.innerHTML = data_movie;
    });

    const form = {
        first_name: document.getElementsByName("nom")[0],
        last_name: document.getElementsByName("prenom")[0],
        e_mail: document.getElementsByName("e-mail")[0],
        ville: document.getElementsByName("ville-opt")[0],
        pays: document.getElementsByName("pays")[0],
        btn_validation: document.querySelector("button"),
        warning: document.querySelector(".warning"),
        info: [],
        control() {
            if (this.first_name.value && this.last_name.value && this.e_mail.value && this.ville.value && this.pays.value) {
                console.log(`Nom : ${this.first_name.value}
                    Prénom : ${this.last_name.value}
                    e-mail : ${this.e_mail.value}
                    pays : ${this.pays.value}
                    `);
                localStorage.setItem('User', JSON.stringify(form.info));
                form.info.push(this.first_name.value, this.last_name.value, this.e_mail.value, this.ville.value, this.pays.value);
                console.table(form.info);
                form.warning.classList.remove("show-warning");
            } else {
                form.warning.classList.add("show-warning");
                form.warning.innerText = "Remplir les champs";
            }
        }
    };
    form.btn_validation.addEventListener("click", e => {
        e.preventDefault();
        form.control;
    });
});