import { Injectable } from '@angular/core';
import { Article } from '../../utils/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private articles: Article[] = [
    {
      "id": 1,
      "titre": "Découvrir Angular",
      "contenu": "Angular est un framework JavaScript très populaire pour la création d'applications web riches.",
      "auteur": "Alice Dupont",
      "dateCreation": new Date("2023-11-01T09:00:00Z")
    },
    {
      "id": 2,
      "titre": "Introduction à JavaScript",
      "contenu": "JavaScript est le langage de programmation de base pour le développement web moderne.",
      "auteur": "Bob Martin",
      "dateCreation": new Date("2023-11-02T10:30:00Z")
    },
    {
      "id": 3,
      "titre": "Les nouveautés d'Angular 16",
      "contenu": "Angular 16 introduit de nombreuses améliorations qui facilitent le développement.",
      "auteur": "Charlie Durand",
      "dateCreation": new Date("2023-11-03T11:00:00Z")
    },
    {
      "id": 4,
      "titre": "Comprendre les composants Angular",
      "contenu": "Les composants sont des éléments essentiels dans toute application Angular.",
      "auteur": "David Bernard",
      "dateCreation": new Date("2023-11-04T12:45:00Z")
    },
    {
      "id": 5,
      "titre": "Le cycle de vie des composants Angular",
      "contenu": "Le cycle de vie d'un composant Angular inclut plusieurs étapes pour gérer son comportement.",
      "auteur": "Emma Lefevre",
      "dateCreation": new Date("2023-11-05T14:00:00Z")
    },
    {
      "id": 6,
      "titre": "Introduction à RxJS avec Angular",
      "contenu": "RxJS est une bibliothèque puissante pour travailler avec des flux asynchrones dans Angular.",
      "auteur": "Félix Lambert",
      "dateCreation": new Date("2023-11-06T15:20:00Z")
    },
    {
      "id": 7,
      "titre": "Angular et les services",
      "contenu": "Les services Angular permettent de partager des données et des fonctionnalités entre composants.",
      "auteur": "Gabrielle Richard",
      "dateCreation": new Date("2023-11-07T13:15:00Z")
    },
    {
      "id": 8,
      "titre": "Gestion des formulaires dans Angular",
      "contenu": "Angular propose deux approches pour les formulaires : réactifs et pilotés par le template.",
      "auteur": "Henri Moreau",
      "dateCreation": new Date("2023-11-08T16:00:00Z")
    },
    {
      "id": 9,
      "titre": "Les directives Angular expliquées",
      "contenu": "Les directives Angular permettent de manipuler facilement le DOM et d'étendre les capacités HTML.",
      "auteur": "Inès Brun",
      "dateCreation": new Date("2023-11-09T17:25:00Z")
    },
    {
      "id": 10,
      "titre": "Automatiser les tâches avec Angular CLI",
      "contenu": "L'Angular CLI est un outil précieux pour démarrer et maintenir des projets Angular rapidement.",
      "auteur": "Jacques Bernard",
      "dateCreation": new Date("2023-11-10T09:40:00Z")
    },
    {
      "id": 11,
      "titre": "Maîtriser le routage dans Angular",
      "contenu": "Le routage Angular est une fonctionnalité essentielle pour développer des applications de type SPA.",
      "auteur": "Karine Richard",
      "dateCreation": new Date("2023-11-11T18:50:00Z")
    },
    {
      "id": 12,
      "titre": "Transformer les données avec les pipes Angular",
      "contenu": "Les pipes sont des outils pratiques pour transformer les données dans les templates Angular.",
      "auteur": "Louis Roux",
      "dateCreation": new Date("2023-11-12T12:30:00Z")
    },
    {
      "id": 13,
      "titre": "Tester vos applications avec Angular",
      "contenu": "Angular fournit Jasmine et Karma pour l'écriture et l'exécution de tests unitaires.",
      "auteur": "Maëlle Simon",
      "dateCreation": new Date("2023-11-13T14:10:00Z")
    },
    {
      "id": 14,
      "titre": "NgRx : Gestion de l'état dans Angular",
      "contenu": "NgRx est une bibliothèque qui permet de gérer l'état des applications Angular de manière centralisée.",
      "auteur": "Nicolas Fabre",
      "dateCreation": new Date("2023-11-14T16:35:00Z")
    },
    {
      "id": 15,
      "titre": "Sécuriser vos applications Angular",
      "contenu": "La sécurité est cruciale dans toute application web. Voici comment sécuriser Angular efficacement.",
      "auteur": "Olivier Leroy",
      "dateCreation": new Date("2023-11-15T10:55:00Z")
    },
    {
      "id": 16,
      "titre": "Optimiser les performances d'Angular",
      "contenu": "Pour tirer le meilleur parti de votre application Angular, il est important d'optimiser ses performances.",
      "auteur": "Pauline Dubois",
      "dateCreation": new Date("2023-11-16T13:45:00Z")
    },
    {
      "id": 17,
      "titre": "UI avec Angular Material",
      "contenu": "Angular Material est une bibliothèque qui permet de construire rapidement une interface utilisateur agréable.",
      "auteur": "Quentin Morel",
      "dateCreation": new Date("2023-11-17T15:20:00Z")
    },
    {
      "id": 18,
      "titre": "Déploiement d'une application Angular",
      "contenu": "Déployer une application Angular demande une bonne configuration du serveur et du build.",
      "auteur": "Roxane Meunier",
      "dateCreation": new Date("2023-11-18T11:10:00Z")
    },
    {
      "id": 19,
      "titre": "Animations en Angular",
      "contenu": "Les animations permettent de rendre une application Angular plus interactive et agréable à utiliser.",
      "auteur": "Sébastien Perret",
      "dateCreation": new Date("2023-11-19T17:00:00Z")
    },
    {
      "id": 20,
      "titre": "Utilisation de GraphQL avec Angular",
      "contenu": "GraphQL est un outil moderne et performant pour interagir avec vos données. Découvrez comment l'utiliser avec Angular.",
      "auteur": "Thérèse Petit",
      "dateCreation": new Date("2023-11-20T14:30:00Z")
    }
  ];

  getArticles(): Observable<Article[]>{
    return of(this.articles);
  }
}
