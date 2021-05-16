# Exercice 3
Créer un docker file qui permet la création du conteneur node avec un serveur http.

utiliser la base "node";

ne pas oublier de télécharger les dépendances (npm i).
Il faut copier l'ensemble du dossier serveur.
Il faut exposer le port 8080 pour pouvoir utiliser le serveur depuis l'extérieur.
Pour lancer un script js, la commande est "node mon Fichier>".
la commande pour lancer le conteneur devient 

```shell 
docker run -p 8080: 8080 noms image>
```