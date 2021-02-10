"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FakeRepo {
    constructor() {
        this.repo = new Array();
    }
    Write(item) {
        this.repo.push(item);
        return true;
    }
    ReadAll() {
        return this.repo;
    }
}
exports.default = FakeRepo;
