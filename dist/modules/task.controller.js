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
exports.deleteTask = exports.updateTask = exports.getTask = exports.createTask = void 0;
const tast_model_1 = require("./tast.model");
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = new tast_model_1.TaskModel(req.body);
        const saved = yield task.save();
        res.status(201).json(saved);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createTask = createTask;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield tast_model_1.TaskModel.find();
    res.json(task);
});
exports.getTask = getTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updated = yield tast_model_1.TaskModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated)
        return res.status(404).json({ message: 'Task not found' });
    res.json(updated);
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleted = yield tast_model_1.TaskModel.findByIdAndDelete(id);
    if (!deleted)
        return res.status(404).json({ message: 'Task not found' });
    res.json(deleted);
});
exports.deleteTask = deleteTask;
