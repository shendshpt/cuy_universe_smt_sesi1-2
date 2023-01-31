const nama = "hnpstore";
let usia = 3;

const biodata = document.getElementById('biodata')
console.log(biodata )

function generateBiodata() {
    if (usia == 5) {
        //kondisi yang sesuai
        console.log('anda kolot')
    } else {
        //kondisi yang tidak sesuai
        console.log('anda bocil')
    }
    console.log(`nama saya adalah ${nama} dan umur saya ${usia}`)
}

function database() {
    if (usia > 1 && usia < 5) {
        console.log('balita')
    } 
    else if(usia > 5 && usia < 10) {
        console.log('anak kecil')
    }
    else if (usia > 10 && usia < 20) {
        console.log('remaja lewat')
    }
    else {
        console.log('gatau guabingung elu yang mana bro')
    }
}

database()
generateBiodata()
console.log(nama)
console.log(usia)