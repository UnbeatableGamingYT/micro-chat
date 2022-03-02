input.onButtonPressed(Button.A, function () {
    basic.showString("HELLO")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("HOW ARE YOU")
})
radio.setGroup(1)
