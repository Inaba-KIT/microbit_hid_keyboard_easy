keyboard.startKeyboardService()
basic.showLeds(`
    . # . . #
    . # . # .
    . # # . .
    . # . # #
    . . . . .
    `)
basic.forever(function () {
    if (input.isGesture(Gesture.LogoDown)) {
        keyboard.sendSimultaneousKeys("w", true)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        keyboard.sendSimultaneousKeys("a", true)
    } else if (input.isGesture(Gesture.LogoUp)) {
        keyboard.sendSimultaneousKeys("s", true)
    } else if (input.isGesture(Gesture.TiltRight)) {
        keyboard.sendSimultaneousKeys("d", true)
    } else if (input.isGesture(Gesture.ScreenUp)) {
        keyboard.releaseKeys()
    }
    if (input.buttonIsPressed(Button.A)) {
        keyboard.sendSimultaneousKeys(keyboard.modifiers(keyboard._Modifier.shift), true)
    } else if (input.buttonIsPressed(Button.B)) {
        keyboard.sendSimultaneousKeys(" ", true)
    } else {
        keyboard.releaseKeys()
    }
})
