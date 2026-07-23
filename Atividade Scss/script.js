const dataEvento = new Date("August 8, 2026 22:00:00").getTime();

const contador = setInterval(function () {

    const agora = new Date().getTime();

    const tempo = dataEvento - agora;

    const dias = Math.floor(tempo / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (tempo % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (tempo % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (tempo % (1000 * 60)) / 1000
    );

    document.getElementById("contador").innerHTML =
        dias + " dias " +
        horas + " horas " +
        minutos + " minutos " +
        segundos + " segundos";

    if (tempo < 0) {

        clearInterval(contador);

        document.getElementById("contador").innerHTML =
            "O show já começou! 🎤";
    }

}, 1000);