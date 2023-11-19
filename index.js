import express, { request, response } from "express"

const app = express();

app.use(express.json());

const users = [];

app.get("/users", (request, response)  => {
    return response.json(users);
});

app.post("/users", (request, response) => {
    const {name, age, nickName} = request.body

    users.push({name, age, nickName });

    return response.json({ name, age, nickName});
});

app.listen(3000);