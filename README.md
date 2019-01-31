Détecter les trolls dans les réponses au Grand Débat National

Projet de hackathon de la Nuit des Idées au Liberté Living Lab le 31/01/2019.

Détection
---------

Ce qui laisse supposer un « troll » :

- [x] ~3~ 6 points d'exclamation à la suite
- [ ] Tout en majuscules
- [x] « Benalla »
- [x] Une URL dans le titre de la contribution




Implémentation
--------------

- Implémentation en JavaScript (Node, ES6).
- Chaque critère de détection est implémenté sous la forme d'un fichier séparé dans le dossier `troll-detectors`. Pour en créer un nouveau, il faut créer un nouveau fichier et le référencer dans `troll-detectors/index.js`.
- Chaque « détecteur » doit exporter une fonction `detect(text, [contribution])`, où `text` est la concaténation de toutes les réponses (`String`) et `contribution` est la donnée brute de la contribution (`Object`). Voir les implémentations actuelles pour des exemples.
- Le fichier source et la présentation du résultat sont définis dans `troll-detectors/index.js`.

Licence
-------

WTFPL
