function screenshot() {
    html2canvas(document.querySelector("#test")).then(canvas => {
        var dataURL = canvas.toDataURL();
        var img = document.createElement('img');
        img.src = dataURL;
        console.log(img);
        document.body.appendChild(img)
    });
}
var carimbo = document.querySelectorAll('.carimbo')
var marca = document.createElement('div');
marca.classList = "carimbo-img";
let nomeInput = document.querySelectorAll('.nome');
let nome = document.querySelector('#nome');
let card = document.querySelector("#card");

for (let i = 0; i < carimbo.length; i++) {
    if (carimbo[i].addEventListener('click', function() {
            console.log('click');
            if (i == 2) {
                console.log("2");
                carimbo[i].children[0].classList.toggle('carimbo-03');
            }
            if (i == 5) {
                console.log("5");
                carimbo[i].children[0].classList.toggle('carimbo-06');
            } else {
                carimbo[i].children[0].classList.toggle('carimbo-img');
            }

        })) {}
}

function conf03() {
    carimbo[2].children[0].classList.toggle('confirmado');
}

function conf06() {
    carimbo[5].children[0].classList.toggle('confirmado');
}

// function nomear() {
//     nomeInput[0].innerHTML = nome.value;
// }

// function gerarImg() {
//     html2canvas(document.querySelector("#card"), {}).then(canvas => {
//         var dataURL = canvas.toDataURL();
//         var img = document.createElement('img');
//         img.src = dataURL;
//         console.log(img);
//         document.body.appendChild(img).classList = "print";

//     })
// }
function gerarImg() {
    domtoimage.toPng(card)
        .then(function(dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img).classList = "print";;
        })
        .catch(function(error) {
            console.error('oops, something went wrong!', error);
        });
}
// function gerarImg() {
//     htmlToImage.toPng(card)
//         .then(function(dataUrl) {
//             var img = new Image();
//             img.src = dataUrl;
//             document.body.appendChild(img).classList = "print";
//         })
//         .catch(function(error) {
//             console.error('oops, something went wrong!', error);
//         });
// }