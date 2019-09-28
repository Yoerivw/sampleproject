let appIdeas = [];
let elForm = document.getElementById('formSignup');
let idea = document.getElementById('idea').value;

console.log('this is working');







function addIdea(e, idea) {
    let input = this.idea.value;
    console.log("this function is being executed");
    console.log(input);


    if (!input) {
        alert("please fill out something relevant");
        e.preventDefault();
    } else {
        input = this.idea.value;
        console.log('input' + input);
        e.preventDefault();
        let newEl = document.createElement('li');
        console.log('newEl' + newEl);
        let newIdea = document.createTextNode(input);
        console.log('newIdea' + newIdea);
        newEl.appendChild(newIdea);

        let position = document.getElementsByTagName('ul')[0];

        position.appendChild(newEl);


    }


}

elForm.addEventListener('submit', addIdea, false);