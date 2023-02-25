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
    constructor(fighter1, fighter2, fighter1Element, fighter2Element, logObject) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1Element = fighter1Element
        this.fighter2Element = fighter2Element
        this.log = logObject
    }
    start() {
        // TODO: Evento do botão de atacar
        this.update()
        this.fighter1Element = document.querySelector('#attackButtonFighter1').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2Element = document.querySelector('#attackButtonFighter2').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
    }
    update() {
        // Fighter1
        this.fighter1Element = document.querySelector('#nameChar').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(2)} HP`
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighter1Element = document.querySelector('#barChar').style.width = `${f1Pct}%`
        this.fighter1Element = document.querySelector('#barChar').style.transition = `0.5s`
        // Fighter2
        this.fighter2Element = document.querySelector('#nameMonster').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)} HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighter2Element = document.querySelector('#barMonster').style.width = `${f2Pct}%`
        this.fighter2Element = document.querySelector('#barMonster').style.transition = `0.5s`
    }
    doAttack(attacking, attacked) {
        let attackFactor = (Math.random() * 2).toFixed(2)
        let defenseFactor = (Math.random() * 2).toFixed(2)
        let actualAttack = attacking.attack * attackFactor
        let actualDefense = attacked.defense * defenseFactor

        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
        } else {
            this.log.addMessage(`${attacked.name} conseguiu defender...`)
        }
        if (attacked.life <= 0) {
            this.log.addMessage(`${attacking.name} derrotou ${attacked.name}`)
            document.querySelector('#attackButtonFighter1').style.display = 'none'
            document.querySelector('#attackButtonFighter2').style.display = 'none'
            const buttonReset = document.querySelector('button#buttonResetGame')
            buttonReset.style.display = 'block'
            buttonReset.addEventListener('click', function () { location.reload() })
            attacked.life -= actualAttack
        }
        this.update()
    }
}

class Log {
    list = []
    constructor(listElement) {
        this.listElement = listElement
    }
    addMessage(msg) {
        this.list.push(msg)
        this.render()
    }
    render() {
        this.listElement.innerHTML = ''
        for (let i in this.list) {
            const myLi = document.createElement('li')
            myLi.innerHTML = this.list[i]
            this.listElement.appendChild(myLi)
        }
    }
}