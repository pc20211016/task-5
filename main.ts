let lamp = 0
let light2 = 0
input.onButtonPressed(Button.A, function () {
    lamp = 0
    light2 = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(lamp, light2)
            basic.pause(100)
            lamp += 1
        }
        light2 += 1
        lamp = 0
    }
})
basic.forever(function () {
	
})
