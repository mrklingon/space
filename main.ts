input.onPinPressed(TouchPin.P2, function () {
    music.playMelody("C - C E E C5 D E ", 120)
    ship2 = game.createSprite(randint(0, 4), 0)
    ship2.turn(Direction.Right, randint(0, 180))
    for (let index = 0; index < 10; index++) {
        ship2.move(1)
        ship2.ifOnEdgeBounce()
        basic.pause(100)
    }
    ship2.delete()
})
input.onPinPressed(TouchPin.P1, function () {
    ship = game.createSprite(0, randint(0, 4))
    ship.turn(Direction.Right, randint(0, 180))
    for (let index = 0; index < 10; index++) {
        ship.move(1)
        ship.ifOnEdgeBounce()
        basic.pause(100)
    }
    music.playMelody("C5 C5 C5 C C - F E ", 120)
    ship.delete()
})
let ship: game.LedSprite = null
let ship2: game.LedSprite = null
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
let Sun = game.createSprite(2, 2)
let Mercury = game.createSprite(2, 1)
let Venus = game.createSprite(2, 0)
Mercury.turn(Direction.Right, 45)
Venus.turn(Direction.Right, 45)
basic.forever(function () {
    Mercury.move(1)
    Mercury.turn(Direction.Right, 90)
    Venus.turn(Direction.Right, 45)
    Venus.move(1)
    basic.pause(500)
})
