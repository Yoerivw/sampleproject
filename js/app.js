let appIdeas = [];
console.log('this is working');

function addIdea() {
    console.log('this is executed');
    let idea = document.forms["addIdea"]["appEntry"].value;
    console.log(idea);
    let newEl = document.createElement('li');

    let newIdea = document.createTextNode('lol');
    console.log(newIdea);
    newEl.appendChild(newIdea);

    let position = document.getElementById('list-parent')[0];

    position.appendChild(newEl);
    appIdeas.push(idea);



}
window.onload = function() {
    document.getElementById("btn").addEventListener("click", addIdea)
}