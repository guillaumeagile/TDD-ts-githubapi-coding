# Node.js with TypeScript

[SUBJECT.md for the instructions](./SUBJECT.md)

# GSE work

I'm always doing TDD, in order to avoid wasting my time with PostMan and manual testing.


For that, I've added 2 libs
npm i mocha --save
npm i isomorphic-fetch --save

and one script:  npm run test

One test as example has been written and passed, so that my tests infrastrucre is ok, and can be added to a CI pipeline.

## Testing strategies

as the controler method  are async, one way (but to be discuss later) is to assert whitn an async testing library.

It try to use chai-as-promised but it 

## PAIN POINT

First bad surprise:  your fastify framework is a smell.
It is not testable , and the tests strategies  that I could have found on google are really.... weak!
https://www.fastify.io/docs/latest/Testing/#testing-with-a-running-server

This framework is not clean for me, and I wouldn't like to work with it.
It encourages people to writte bad spaggheti code, all coupled.
I suspect people to write very dirty things with it, with a lot of end to end testing and pain (and tears) when you put in production.

I would recommend to use NestJS / Express/ instead.
https://docs.nestjs.com/

However I will try to continue the exercise with my TDD approach, but I will break the "Promises" approach, on puprpose; because I havent enough time to find a test library that could work with promises (chai-as-promised dont work here).

See my comments in the multiple commits.


## TASK-1001: Healthcheck endpoint

done using the TDD approach.
It allows me to find a better implementation for the timestamp rather than a Date().now which is not precise enough.

## TASK-1002: Add a tiny easter egg

I really didn't catch the point or the interest of this one, guys :/


## TASK-1003: Register user

je passe en francais là
La série des déconvenues bat son plein
La documentation de Fastify est très mal fichue et surtout repose sur du JS et non du TS
Du coup, quand on veut fortement typer les informations recues par les Request, bah ca marche pas
Soit ca compile pas, parce que tout est type unknown, donc le compilo, il t'envoie bouler (et il a raison!)
Soit on caste en forcant le type d'une interface,  j'ai essayé comme indiqué dans le peu d'examples u'on trouve sur le net,  ca renvoie des chaine vide

A ce stde là, je me suis vraiment focalisé sur mes TU
Le reste c'est que de la plomberie, du wiring avec une lib de MVC  comme il y en a tant d'autres (et des meilleures je suis sur).
C'est pas cet aspect là de la programmation qui m'interesse.


Donc pour moi Fastify =  à fuir!   
Programmation quick & dirty, communauté pas très active, mauvais codeurs en général; exemple en JS et pas en TS
la doc est limitée dans le sens où elle donne des exemples simplistes et pas des vrais cas de la vie réelle
difficile de trouver d'autres exemples valables à part la doc
personne ne s'interesse aux tests unitaires;
quand on veut faire des trucs propres (validation des schemas), il faut écrire des tonnes de code
bref, vraiment c'est pas bon .



## TASK-1004: List registered users

ok, c'est fait dans la business Logic mais avec un découplage de la base de données
en fait, je ne cherche pas à utiliser un BD , mais une abstraction (un port/adapter dans une architecture hexagonale)
pour cela j'ai déclaré une interface IStore<T>  et