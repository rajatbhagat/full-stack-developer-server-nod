// import posts from "./tuits.js";
import mongoose from "mongoose";
import {findAllTuitsDao,createTuitDao, deleteTuitDao, updateTuitDao} from "../schema/tuits-dao.js"
// let tuits = posts;

mongoose.connect('mongodb://localhost:27017/webdev');

const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    // tuits.push(newTuit);
    const insertedTuit = await createTuitDao(newTuit);
    res.json(insertedTuit);

}

const findAllTuits = async (req, res) => {
    const tuits = await findAllTuitsDao();
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await updateTuitDao(tuitdIdToUpdate, updatedTuit);
    // tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(status);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await deleteTuitDao(tuitdIdToDelete);
    res.sendStatus(status)
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}




