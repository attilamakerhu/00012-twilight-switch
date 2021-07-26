let adjusted_light_level = 0
basic.forever(function () {
    adjusted_light_level = input.lightLevel() - 30
    basic.showNumber(adjusted_light_level)
    if (adjusted_light_level > 150) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
