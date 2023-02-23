const input = document.querySelector('input#input')
input.addEventListener('keypress', function(event){if(event.keyCode == 13){
    let list = document.querySelector('ul#vertinho')
    let item = document.createElement('li')
    item.innerHTML = input.value
    list.appendChild(item)
    input.value = ''
}})