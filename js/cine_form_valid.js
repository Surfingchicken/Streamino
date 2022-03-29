document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    const el = document.querySelector(".inner-form");
    let elements = document.createElement("ul");
    el.prepend(elements);

    const form = {

        first_name: document.getElementsByName("nom")[0],
        last_name: document.getElementsByName("prenom")[0],
        email: document.getElementsByName("email")[0],
        ville: document.getElementsByName("ville")[0],
        pays: document.getElementsByName("pays")[0],
        btn_validation: document.getElementsByTagName("input")[5],
        warning: document.querySelector(".warning"),
        info: [],
        control() {
            if (this.first_name.value && this.last_name.value && this.email.value && this.ville.value && this.pays.value) {
                console.log(`Nom : ${this.first_name.value}
                Prénom : ${this.last_name.value}
                e-mail : ${this.email.value}
                ville : ${this.ville.value}
                pays : ${this.pays.value}
                `);
                form.info.push(this.first_name.value, this.last_name.value, this.email.value, this.ville.value, this.pays.value);
                console.table(form.info);
                localStorage.setItem('User', JSON.stringify(form.info));
                form.warning.classList.remove("show-warning");
            } else {
                form.warning.classList.add("show-warning");
                form.warning.innerText = "Remplir les champs";
            }
        }
    };

    form.btn_validation.addEventListener("click", e => {
        e.preventDefault();
        form.control();
    });
});