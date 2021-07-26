input.onButtonPressed(Button.A, function () {
    music.playTone(262, 1)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
