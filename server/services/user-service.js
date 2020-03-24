const { User } = require("./../models");


const getAll = async () => await User.find({});

const get = async id => await User.findById(id);

const del = async id => await User.deleteOne({ _id: id });

const update = async (id, body) =>
    await User.findByIdAndUpdate(id, body, { new: true});

const add = async body => await User.create(body);

module.exports = {
    getAll,
    get,
    del,
    update,
    add
};