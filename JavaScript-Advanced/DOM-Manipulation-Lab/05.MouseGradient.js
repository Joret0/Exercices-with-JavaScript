function attachGradientEvents() {
    let gradient = document.getElementById('gradient');

    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    }

    gradient.addEventListener('mousemove', gradientMove);

    function gradientOut(event) {
        document.getElementById('result').textContent = "";
    }

    gradient.addEventListener('mouseout', gradientOut);
}