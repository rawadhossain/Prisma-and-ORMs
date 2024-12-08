"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
function createDummyUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.user.create({
            data: {
                username: 'rwkyktyd',
                password: '1234',
                age: 20,
                city: 'Dhaka',
            },
        });
        yield client.todo.createMany({
            data: [
                {
                    title: 'Todo 1',
                    description: 'Description 1',
                    done: false,
                    userId: user.id,
                },
                {
                    title: 'Todo 2',
                    description: 'Description 2',
                    done: false,
                    userId: user.id,
                },
            ],
        });
    });
}
