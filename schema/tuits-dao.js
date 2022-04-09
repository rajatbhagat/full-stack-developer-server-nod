import tuitsModel from './tuits-model.js';

export const findAllTuitsDao = () => tuitsModel.find();
export const createTuitDao = (tuit) => tuitsModel.create(tuit);
export const deleteTuitDao = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuitDao = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})
