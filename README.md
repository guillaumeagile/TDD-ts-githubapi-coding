# Node.js with TypeScript

[SUBJECT.md for the instructions](./SUBJECT.md)

# GSE work

> `npm run test`  to see my work


I'm always doing TDD, in order to avoid wasting my time with PostMan and manual testing.


For that, I've added 2 libs
npm i mocha --save
npm i isomorphic-fetch --save

and one script:  test

One test as example has been written and passed, so that my tests infrastrucre is ok, and can be added to a CI pipeline.

## Testing strategies

as the controler method  are async, one way (but to be discuss later) is to assert whitn an async testing library.

It try to use chai-as-promised but it does not integrate with the current stack :'( 

## PAIN POINT

First bad surprise:  this Fastify framework is a smell.
It is not testable , and the tests strategies  that I could have found on Google are really.... weak!  
https://www.fastify.io/docs/latest/Testing/#testing-with-a-running-server

This framework is not clean for me, and I wouldn't like to work with it.
It encourages people to writte bad spaggheti code, all coupled.
I suspect people to write very dirty things with it, with a lot of end to end tests resulting in pain (and tears) when you go in production.

I would recommend to use NestJS / Express instead.
https://docs.nestjs.com/

However I will try to continue the exercise with my TDD approach, but I will break the "Promises" approach, on puprpose; because I havent enough time to find a test library that could work with promises (chai-as-promised dont work here).

See my comments in the multiple commits.


## TASK-1001: Healthcheck endpoint

Done using the TDD approach.
It allows me to find a better implementation for the timestamp rather than a Date().now which is not precise enough.

## TASK-1002: Add a tiny easter egg

I really didn't catch the point or the interest of this one, guys :/


## TASK-1003: Register user

je passe en francais là
La série des déconvenues bat son plein :(
La documentation de Fastify est très mal fichue et surtout repose sur du JS et non du TS
Du coup, quand on veut fortement typer les informations recues par les Request, bah ca marche pas ...
Soit ca compile pas, parce que tout est de type unknown, donc le compilo, il t'envoie bouler (et il a raison!)
Soit on caste en forcant le type d'une interface,  j'ai essayé comme indiqué dans le peu d'examples u'on trouve sur le net,  ca renvoie des chaines vide.  Bref, pas utilisable.

A ce satde là, je me suis vraiment focalisé sur mes TU, parce que le but c'est pas de faire du Fastify; mais de faire du code métier avec une vraie valeur ajoutée.
Le reste c'est que de la plomberie, du wiring avec une lib de MVC comme il y en a tant d'autres (et des meilleures je suis sur).
C'est pas cet aspect là de la programmation qui m'interesse.


Donc pour moi Fastify =  à fuir!   
Programmation quick & dirty, communauté pas très active, mauvais examples en général; samples en JS et pas en TS.
La doc est limitée dans le sens où elle donne des exemples simplistes et pas des vrais cas de la vie réelle.
Difficile de trouver d'autres exemples valables à part la doc;
Personne ne s'interesse aux tests unitaires dans cette communauté;
Quand on veut faire des trucs propres (validation des schemas), il faut écrire des tonnes de code...
Bref, vraiment c'est pas bon .



## TASK-1004: List registered users

ok, c'est fait dans la business Logic mais avec un découplage de la base de données.
En fait, je ne cherche pas à utiliser une BDD en particulier , mais une abstraction (équiv à un port/adapter dans une architecture hexagonale).

pour cela j'ai déclaré une interface IStore<T>  et une interface "universelle" pour décrire les propriétés de l'entité User (qui sera utilisé comme paramètre générique de IStore).
C'est ce qu'on fait habituellement quand on applique les principes du Domain Driven Design.

J'ai ensuite écrit une implémentation simpliste du storage, juste pour les tests (utilisant un simple array pour rester inMemory).
Le Repository est indépendant de l'implémentation de la classe DomainUser.
Le Business Service est indépendant du détail du Storage et du détail de l'entité DomainUser.
Le code est plus simple à maintenir en cas d'évolution ou de bugs.

C'est le principe que l'on retrouve dans l'archi hexagonale et dans DDD
https://dev.to/thombergs/hexagonal-architecture-with-java-and-spring-abl

### BONUS-1003: Add a database system

avec le design de la BL découplée de la BDD, il est facile de créer un adapteur de persistance vers n'importe quel moteur de base de données, relationnel ou NoSQL.
Pour cela; on écrit un adapteur qui implémente IStore<T> qui utilise un driver d'une base de son choix, ou une lib de mapping O/R pour le SQL.
Evidement, on fait des tests unitaires de cet adapteur, c'est à dire qu'on applique aussi le principe du TDD.

ENsuite, c'est avec l'injection de dépendance (en config ou par code au démarrage du service) que l'on fait utiliser une instance de l'adapteur plutôt que la version Fake inMemory, que l'on garde quand même pour les tests unitaires.


Si l'adapteur est bien testé, le Fake est lui aussi conforme aux même tests, alors il n'y a pas besoin de faire de tests E2E.  Ou juste un seul pour s'assurer que la config de DI est correcte
https://dev.to/guillaume_agile/pourquoi-les-tests-end-to-end-sont-reellement-un-enfer-et-ne-sont-qu-illusion-b9a


# Est ce que ca vaut le coup de faire tout ca?
Réponse
https://martinfowler.com/articles/is-quality-worth-cost.html
