
const locations = [];

const Liste = document.getElementById("reserver");

function reserver(e) {

    e.preventDefault();

    const nom = document.getElementById("nom");
    const voiture = document.getElementById("voiture");
    const jours = document.getElementById("jours");
    const date = document.getElementById("date");
    const email = document.getElementById("email");

    let prix = 0;

    if (voiture.value == "Clio") {
        prix = 120;
    }
    else if (voiture.value == "Golf") {
        prix = 160;
    }
     else if (voiture.value == "Bmw") {
        prix = 275;
    }
    else if (voiture.value == "Mercedes") {
        prix = 250;
    }

    let somme = prix * Number(jours.value);

    let nouvelleLocation = {
        nom: nom.value,
        voiture: voiture.value,
        jours: jours.value,
        date: date.value,
        somme: somme
    };

    locations.push(nouvelleLocation);

    alert("Location ajoutee avec succes");

    AfficherLocation();

    document.querySelector("form").reset();
}


function AfficherLocation() {

    Liste.replaceChildren();

    locations.forEach(function(location) {

        let ligne = document.createElement("tr");

        let Cnom = document.createElement("td");
        let Cvoiture = document.createElement("td");
        let Cjours = document.createElement("td");
        let Cemail = document.createElement("td");
        let Cdate = document.createElement("td");
        let Cretour = document.createElement("td");
        let Csomme = document.createElement("td");

        Cnom.textContent = location.nom;

        Cvoiture.textContent = location.voiture;

        Cjours.textContent = location.jours;

        Cemail.textContent = "Non disponible";

        Cdate.textContent = location.date;

        let retour = new Date(location.date);

        retour.setDate(retour.getDate() + Number(location.jours));

        Cretour.textContent = retour.toLocaleDateString("fr-FR");

        Csomme.textContent = location.somme + " DT";

        ligne.appendChild(Cnom);
        ligne.appendChild(Cvoiture);
        ligne.appendChild(Cjours);
        ligne.appendChild(Cemail);
        ligne.appendChild(Cdate);
        ligne.appendChild(Cretour);
        ligne.appendChild(Csomme);
        Liste.appendChild(ligne);
    });
}
