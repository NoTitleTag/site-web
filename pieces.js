<<<<<<< HEAD
// Création du lien avec le fichier pieces-auto.json
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// Création du lien entre json et js
const article = pieces[0];
=======
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

// Création des balises 
const article = pieces[2];
>>>>>>> P1C4-Exercice

const imageElement = document.createElement("img");
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;

const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

const categorieElement = document.createElement("p");
<<<<<<< HEAD
categorieElement.innerText = article.categorie ?? "(Aucune catégorie)"

// Création du lien entre js et html

const sectionFiches = document.querySelector(".fiches")
sectionFiches.appendChild(imageElement)
sectionFiches.appendChild(nomElement)
sectionFiches.appendChild(prixElement)
sectionFiches.appendChild(categorieElement)
=======
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

const descriptionElement = document.createElement("p")
descriptionElement.innerText = article.description ?? "Pas de description pour le moment"

const disponibiliteElement = document.createElement("p")
disponibiliteElement.innerText = `${article.disponibilite === true ? "En stock" : "Rupture de stock"}` 

//Rattachement de nos balises au DOM
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(disponibiliteElement);
>>>>>>> P1C4-Exercice
