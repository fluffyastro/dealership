let kepek = [
    "../járművek/Image1.jpg",
    "../járművek/Image2.jpg",
    "../járművek/Image3.jpg",
    "../járművek/Image4.webp",
    "../járművek/Image5.jpg",
    "../járművek/Image6.jpg",
    "../járművek/Image7.jpg",
    "../járművek/Image8.jpg",
    "../járművek/Image9.jpg",
    "../járművek/Image10.jpg"
];


let leirasok = [
    "Márka: Miskolc 💪, Model: Legerősebb, Lóerő: nemtom",
    "Márka: Redbull, Model: Végsebesség 60, Lóerő: Csak lejtőn",
    "Márka: Lada, Model: Lángoló Kipufogó, Lóerő: 50, de érzésre 500",
    "Márka: Tesla, Model: Kocsihang DLC, Lóerő: 1000, de csak ha nincs hideg",
    "Márka: BMW, Model: Index? Az mi?, Lóerő: Sosem tudni",
    "Márka: Ferrari, Model: Parkolóőr rémálma, Lóerő: 700, parkolási esély: 0",
    "Márka: Opel, Model: Rozsdás Villám, Lóerő: Fogy az idővel",
    "Márka: VW, Model: Füstgránát Edition, Lóerő: 150, NOx: végtelen",
    "Márka: Fiat, Model: Csak szerelőig, Lóerő: Volt, de eltűnt",
    "Márka: Audi, Model: Mindig Külső Sáv, Lóerő: Elegendő, de sose elég"
];

let tabla = document.getElementById("tabla")


function LoadCars() {
    let tablaContent = ""

    for (let index = 1; index < kepek.length; index++) {
        tablaContent += "<tr>" + "<td>" + "<img src='" +kepek[index]+"'>" + "</td>"+ "<td>" +leirasok[index]+"</td>" +"</tr>";
    }

    tabla.innerHTML = tablaContent
}