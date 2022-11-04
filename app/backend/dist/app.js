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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const UserRouter_1 = __importDefault(require("./routes/UserRouter"));
const ProductRouter_1 = __importDefault(require("./routes/ProductRouter"));
const SaleRouter_1 = __importDefault(require("./routes/SaleRouter"));
const SaleProductRouter_1 = __importDefault(require("./routes/SaleProductRouter"));
const error_1 = __importDefault(require("./middlewares/error"));
const generateJWT_1 = __importDefault(require("./token/generateJWT"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('/', UserRouter_1.default);
app.use('/', ProductRouter_1.default);
app.use('/', SaleRouter_1.default);
app.use('/', SaleProductRouter_1.default);
app.use('/images', express_1.default.static(path_1.default.join('public', 'images')));
app.post('/validate', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    try {
        const response = generateJWT_1.default.validateToken(authorization);
        if (response && response.type === 'authentication') {
            return res.status(200).json({ result: true, role: response.role });
        }
        return res.status(500).end();
    }
    catch (error) {
        next(error);
    }
}));
app.use(error_1.default);
exports.default = app;
