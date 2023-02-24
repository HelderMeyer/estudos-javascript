class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name
    }

    get life() {
        return this._life
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife
    }
}

class Knight extends Character {
    constructor(name) {
        super(name)
        this.life = 100
        this.attack = 10
        this.defense = 8
        this.maxLife = this.life
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name)
        this.life = 80
        this.attack = 15
        this.defense = 3
        this.maxLife = this.life
    }
}

class LittleMonster extends Character {
    constructor(name) {
        super('Little Monster')
        this.life = 40
        this.attack = 4
        this.defense = 4
        this.maxLife = this.life
    }
}

class BigMonster extends Character {
    constructor(name) {
        super('Big Mosnter')
        this.life = 120
        this.attack = 16
        this.defense = 6
        this.maxLife = this.life
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1Element, fighter2Element) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1Element = fighter1Element
        this.fighter2Element = fighter2Element
    }
    start() {
        // TODO: Evento do botão de atacar
        this.update()
    }
    update() {
        // Fighter1
        this.fighter1Element = document.querySelector('#nameChar').innerHTML = this.fighter1.name
        // Fighter2
        this.fighter2Element = document.querySelector('#nameMonster').innerHTML = this.fighter2.name
    }
}