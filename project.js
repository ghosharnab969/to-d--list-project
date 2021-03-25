let input = prompt("What would you like to do?")
const todos = ['wash clothes', 'study web dev', 'watch movie'];
while (input !== 'quit' && input !== 'q') {
    if (input === "list") {
        console.log("********************************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i + 1}:${todos[i]}`);
        }
        console.log("********************************");
    }
    else if (input === "new") {
        const newTodo = prompt('what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list.`);
    }
    else if (input === 'delete') {
        const index = parseInt(prompt("which index to be deleted?"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index + 1, 1);
            console.log(`task "${deleted}" has been deleted!`);
        }
        else {
            console.log("Sorry! Unknown Index...");
        }
    }
    input = prompt('what would you like to do?');
}
console.log("Ok! you quit.");
