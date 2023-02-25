let log = new Log(document.querySelector('ul#log'))
let char = new Sorcerer('Helder')
let monster = new BigMonster()

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start()