# Instances
Ce site web permet la création et l'enregistrement des instances par un utilisateur. Il se compose de plusieurs pages permettant de créer de nouvelles instances, d'afficher la liste des instances existantes et de naviguer entre les différentes sections du site via un menu.

**Fonctionnalités

1)Menu Principal
La page principale affiche un menu offrant deux options :

-Créer une nouvelle instance : Permet d'accéder à un formulaire pour ajouter une nouvelle instance.
-Afficher la liste des instances : Permet d'afficher toutes les instances créées.

2)Création d'une Instance
La création d'une instance se fait en remplissant un formulaire avec les informations suivantes :

-Code : Un code unique identifiant chaque instance, généré automatiquement par le système mais modifiable par l'utilisateur.
-Désignation de l'instance : Le nom ou la désignation de l'instance.
-Propriétaire : Le nom du propriétaire de l'instance.
-Type de l'instance : Sélectionnez si l'instance est "Propre" ou "Collective".
-Date de création : La date actuelle est saisie automatiquement, mais elle peut être modifiée par l'utilisateur.
-Date de clôture : La date de clôture de l'instance, si applicable.
-Observations : Toute observation ou commentaire pertinent.

3)Liste des Instances
La page affichant la liste des instances permet de :

-Voir toutes les instances créées avec leurs informations associées.
-Supprimer une instance spécifique.
-Supprimer toutes les instances en une seule action.
-Ajouter une nouvelle instance via un bouton qui redirige vers le formulaire de création.
-Revenir au menu principal via un bouton "Retour au menu" en bas de la page.


**Structure des Pages (détails techniques)

*Menu Principal (menu.html)
Contient des liens pour naviguer vers la création d'une nouvelle instance ou vers la liste des instances existantes.

*Formulaire de Création (creerInstance.html)
Formulaire pour entrer les détails d'une nouvelle instance. Les champs sont :

-Code (champ texte)
-Désignation (champ texte)
-Propriétaire (champ texte)
-Type de l'instance (radio bouton)
-Date de création (date picker)
-Date de clôture (date picker)
-Observations (textarea)

*Liste des Instances (listeInstances.html)
Affiche toutes les instances créées avec des boutons pour :

Trier les instances un tri croissant ou décroissant selon une option choisie (code, date de création, ... etc).
Supprimer une instance spécifique.
Supprimer toutes les instances.
Ajouter une nouvelle instance.
Revenir au menu principal.

*Scripts

script.js
Gère les opérations de création et de stockage des instances dans le localStorage.

script2.js
Gère l'affichage, le tri, et la suppression des instances de la liste. Assure également la navigation et les interactions utilisateur pour les instances.


**Utilisation
Naviguer vers le menu principal : Accéder à menu.html.
Créer une nouvelle instance :
Cliquer sur "Créer une nouvelle instance".
Remplir le formulaire et soumettre.
Afficher la liste des instances :
Cliquer sur "Afficher la liste des instances".
Voir les instances créées et utiliser les options de gestion (supprimer, ajouter, etc.).
Retourner au menu principal : Utiliser le bouton "Retour au menu" en bas de chaque page.
Ce site web assure une gestion simplifiée et efficace des instances, permettant à l'utilisateur de créer, visualiser et gérer ses instances en quelques clics.
