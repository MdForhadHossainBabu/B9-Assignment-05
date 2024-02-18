

let count = 40;
let seatIncrement = 0;

const allBtn = document.getElementsByClassName('btn');
for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        if (btn >= 4) {
            alert('hfghf')
        }
        if (count > 0) {
            count--;
        }

        seatInnerText('seetCount', count)

        if (seatIncrement < 40) {
            seatIncrement++;
        }
        seatInnerText('seetIncrement', seatIncrement)
        btn.style.backgroundColor = "green";

        const seatNumber = (e.target.innerText);
        const seatName = document.getElementById('seetName');
        const h1 = document.createElement("h1");
        h1.innerText = seatNumber;

        seatName.appendChild(h1)


        const classNmae = document.getElementById('classNmae');
        const h2 = document.createElement('h2');
        h2.innerHTML = 'Economoy'
        classNmae.appendChild(h2)

        const seatPrice = document.getElementById('seatPrice');
        const h3 = document.createElement('h3');
        h3.innerHTML = '550'
        seatPrice.appendChild(h3)

        const total = document.getElementById('totalprice').innerText;

        const convertMoney = parseInt(total);
        document.getElementById('totalprice').innerText = convertMoney + parseInt(550);




    })
}


function seatInnerText(id, value) {
    // seetCount.innerText=count;
    document.getElementById(id).innerText = value;


}

const nextbtn = document.getElementById('nextbtn');

nextbtn.addEventListener('click', function () {
    const popup = document.getElementById('popup');
    // popup.remove('this'.remove)


})
if (nextbtn === 'click') {
    const getElementByID = document.getElementById('popup');
    getElementByID.classList();
    console.log(getElementByID)
}