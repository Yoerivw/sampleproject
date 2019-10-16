let appIdeas = [];
let elForm = document.getElementById('formSignup');
let idea = document.getElementById('idea').value;
let link = document.getElementsByClassName('link');


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
        newEl.setAttribute('class', 'link');
        //append the text node to the link
        newLink.appendChild(newIdea);
        newEl.appendChild(newLink);

        let position = document.getElementsByTagName('ul')[0];

        position.appendChild(newEl);
    }
}

function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;

}

function deleteIdea(e) {

    let target = getTarget(e);
    let parent = target.parentNode;
    let grandParent = target.parentNode.parentNode;

    grandParent.removeChild(parent);
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

}
let el = document.getElementById('list-parent');
elForm.addEventListener('submit', addIdea, false);
el.addEventListener('click', function(e) {

    deleteIdea(e);
}, false);