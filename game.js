const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const angkaRahasia = Math.floor(Math.random() * 9) + 1;
let skor = 100;
let percobaan = 0;

readline.question("Tebak angka antara 1 dan 9: ", function(tebakan) {
    tebakan = parseInt(tebakan);
    percobaan++;

    if (tebakan === angkaRahasia) {
        console.log("Selamat! Anda menebak dengan benar. Skor Anda: " + skor);
        readline.close();
    } else {
        skor -= 10;
        if (tebakan < angkaRahasia) {
            console.log("Tebakan terlalu kecil. Skor Anda: " + skor);
        } else {
            console.log("Tebakan terlalu besar. Skor Anda: " + skor);
        }

        if (percobaan === 10) {
            console.log("Anda kalah! Skor Anda: 0");
            readline.close();
        } else {
            // Lanjutkan meminta tebakan
            tebakAngka();
        }
    }
});

function tebakAngka() {
    readline.question("Tebak angka antara 1 dan 9: ", function(tebakan) {
        tebakan = parseInt(tebakan);
        percobaan++;

        if (tebakan === angkaRahasia) {
            console.log("Selamat! Anda menebak dengan benar. Skor Anda: " + skor);
            readline.close();
        } else {
            skor -= 10;
            if (tebakan < angkaRahasia) {
                console.log("Tebakan terlalu kecil. Skor Anda: " + skor);
            } else {
                console.log("Tebakan terlalu besar. Skor Anda: " + skor);
            }

            if (percobaan === 10) {
                console.log("Anda kalah! Skor Anda: 0");
                readline.close();
            } else {
                // Lanjutkan meminta tebakan
                tebakAngka();
            }
        }
    });
}
