let appIdeas = [];
let elForm = document.getElementById('formSignup');
let idea = document.getElementById('idea').value;


function addIdea(e, idea) {
    let input = this.idea.value;

    if (!input) {
        alert("please fill out something relevant");
        e.preventDefault();
    } else {
        input = this.idea.value;
        e.preventDefault();
        //create a li and a element and create text node with input
        let newEl = document.createElement('li');
        let newLink = document.createElement('a');
        let newIdea = document.createTextNode(input);

        //change attritube of link 
        newLink.setAttribute('href', 'deleteItem');

        //append the text node to the link
        newLink.appendChild(newIdea);
        newEl.appendChild(newLink);

        let position = document.getElementsByTagName('ul')[0];

        position.appendChild(newEl);
    }
}

function deleteIdea(e) {

}

elForm.addEventListener('submit', addIdea, false);