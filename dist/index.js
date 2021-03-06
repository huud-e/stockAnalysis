"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8080;
app.set('view engine', 'ejs');
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.render('index', { context: "Word" });
});
app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
const stockRouter = require('../routes/stock');
app.use('/stock', stockRouter);
