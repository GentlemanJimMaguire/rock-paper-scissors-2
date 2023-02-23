let MyGo = 0
let Comp = 0
input.onButtonPressed(Button.A, function () {
    MyGo = 1
})
input.onButtonPressed(Button.AB, function () {
    MyGo = 3
})
input.onButtonPressed(Button.B, function () {
    MyGo = 2
})
input.onGesture(Gesture.Shake, function () {
    Comp = randint(1, 3)
    if (Comp == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (Comp == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
basic.forever(function () {
    MyGo = 0
    while (MyGo == 0) {
        basic.showString("GO")
    }
    if (MyGo == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (MyGo == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    Comp = 0
    while (Comp == 0) {
        basic.showString("SHAKE")
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    if (MyGo == 1) {
        if (Comp == 1) {
            basic.showString("DRAW")
        } else if (Comp == 2) {
            basic.showString("LOSE")
        } else {
            basic.showString("WIN")
        }
    }
    if (MyGo == 2) {
        if (Comp == 1) {
            basic.showString("WIN")
        } else if (Comp == 2) {
            basic.showString("DRAW")
        } else {
            basic.showString("LOSE")
        }
    }
    if (MyGo == 3) {
        if (Comp == 1) {
            basic.showString("LOSE")
        } else if (Comp == 2) {
            basic.showString("WIN")
        } else {
            basic.showString("DRAW")
        }
    }
})
