const path = require("path");
const fs = require("fs");
const usersURL = path.resolve(__dirname, "../../", "users.json");

const data = fs.readFileSync(usersURL, "utf8");
const users = JSON.parse(data);

const get = () => users;

const del = id => {
    const deletedUsers = users.filter(user => String(user.id) !== id);
    fs.writeFileSync(usersURL, JSON.stringify(deletedUsers));
};

const update = (id, body) => {
    const updatedUsers = users.map(user => {
        if(String(user.id) === id) {
            return { ...user, ...body }
        }

        return user
    });

    fs.writeFileSync(usersURL, JSON.stringify(updatedUsers));
};

const add = body => {
    users.push({ ...body });
    fs.writeFileSync(usersURL, JSON.stringify(users));
};

module.exports = {
    get,
    del,
    update,
    add
};