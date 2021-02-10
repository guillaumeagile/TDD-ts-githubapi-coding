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

I would recommend to use Express/Node.js instead.
https://blog.logrocket.com/typescript-with-node-js-and-express/

However I will try to continue the exercise with my TDD approach, but I will break the "Promises" approach, on puprpose; because I havent enough time to find a test library that could work with promises (chai-as-promised dont work here).



## TASK-1001: Healthcheck endpoint


