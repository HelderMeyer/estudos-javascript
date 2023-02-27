const char = createKnight('Helder')
const monster = createLittleMonster()

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)