"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExampleController {
    constructor(router) {
        this.router = router;
        router.get('/api', this.sayHello.bind(this));
    }
    async sayHello() {
        return 'Hello, friend';
    }
}
exports.default = ExampleController;
