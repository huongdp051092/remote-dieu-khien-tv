let Remote = function () {

    this.code = "";

    this.switchChanel = function (tivi, chanel) {
        tivi.changeChanel(chanel);
    };

    this.increaseVolume = function (tivi) {
        tivi.increaseVolume();
    };

    this.decreaseVolume = function () {
        tivi.decreaseVolume();
    };

    this.power = function (tivi) {
        tivi.status = !tivi.status;
    }
}

let Tivi = function () {

    this.currentChanel = 1;
    this.volume = 0;
    this.status = false;

    this.changeChanel = function (chanel) {
        if (this.status) {
            this.currentChanel = chanel;
        }
    };

    this.increaseVolume = function () {
        if (this.status && this.volume < 100) {
                this.volume++;
        }
    };

    this.decreaseVolume = function () {
        if (this.status && this.volume > 0) {
            this.volume--;
        }
    };
}

// Kich ban

let LG = new Tivi();
let remoteLG = new Remote();
LG.status = true;
LG.changeChanel(7);
remoteLG.switchChanel(LG, 3);
LG.increaseVolume();
LG.increaseVolume();
remoteLG.power(LG);