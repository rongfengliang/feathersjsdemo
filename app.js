const feathers = require("@feathersjs/feathers");

const app = feathers();

app.use('todos', {
    async get(name) {
        // Return an object in the form of { name, text }
        return {
            name,
            text: `You have to do ${name}`
        };
    }
});

app.service("todos").hooks({

    before: {
        get: async context => {
         console.log(context)
        }

    }

})

app.hooks({
    before:{
    get: async context =>{
        console.log("global context info",context)
    }
    }
})
const result = app.service("todos").get("dalong").then(data => {
    console.log(data)
});
demofn = async() => {
    const service = app.service("todos");
    const todoitems = await service.get("ddd");
    console.log(todoitems)
}
demofn();