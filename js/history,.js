function changeColor(id) {
    localStorage.setItem('activeButton', id);
}

function buttonstate() {
    const activeButton = localStorage.getItem('activeButton');
    if (activeButton) {
        document.getElementById(activeButton).classList.add('clicked');
    }
}

window.onload = buttonstate;





document.getElementById('btn1').addEventListener('click', function () {
    document.getElementById('history').classList.add('hidden');
    document.getElementById('donation-portion').classList.add('hidden');
    document.getElementById('donation-portion').classList.remove('hidden');
    document.getElementById('btn1').classList.add('clicked');
    document.getElementById('btn2').classList.remove('clicked');
});


document.getElementById('btn2').addEventListener('click', function () {
    document.getElementById('donation-portion').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('btn2').classList.add('clicked');
    document.getElementById('btn1').classList.remove('clicked');
});


const now = new Date();
const dateTimeString = now.toString();



// for first button
document.getElementById('first-button').addEventListener('click', function (event) {
    event.preventDefault();
    const Money = document.getElementById('total-money').innerText; //amar money
    const totalMoney = parseFloat(Money);
    const nMoney = document.getElementById('noakhali-money').innerText;//noakhali money
    const noakhaliMoney = parseFloat(nMoney);

    const noaMoney = parseFloat(document.getElementById('noakhali-input').value);

    if (noaMoney > totalMoney) {
        alert('Lack of enough money');
        modalCheckbox.checked = false;
        document.getElementById('noakhali-input').value = "";
        return;
    }
    if(isNaN(noaMoney)){
        alert('Invalid input');
        modalCheckbox.checked = false;
        document.getElementById('noakhali-input').value = "";
        return;
    }
    else {
        const newMoney = noakhaliMoney + noaMoney;
        document.getElementById('noakhali-money').innerText = newMoney;


        const newMoney1 = totalMoney - noaMoney;
        document.getElementById('total-money').innerText = newMoney1;

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border border-solid border-inherit rounded-xl mt-11 ml-44" style="width: 1140px;">
                <p class="font-bold text-xl px-5 py-5">${noaMoney} Taka is Donated for Flood-2024 at Noakhali, Bangladesh</p>
                <p class="px-5 pb-4">Date: ${dateTimeString}</p>
            </div>
        `;
        document.getElementById('history').appendChild(div);

    }

    document.getElementById('noakhali-input').value = "";
});













// for second button
document.getElementById('second-button').addEventListener('click', function (event) {
    event.preventDefault();



    const Money1 = document.getElementById('total-money').innerText; //amar money
    const totalMoney1 = parseFloat(Money1);
    const fMoney = document.getElementById('feni-money').innerText;//noakhali money
    const feniMoney = parseFloat(fMoney);




    const feinMoney = parseFloat(document.getElementById('feni-input').value);


    if (feinMoney > totalMoney1) {
        alert('Lack of enough money');
        modalCheckbox.checked = false;
        document.getElementById('noakhali-input').value = "";
        return;
    }
    if(isNaN(feinMoney)){
        alert('Invalid input');
        modalCheckbox.checked = false;
        document.getElementById('noakhali-input').value = "";
        return;
    }
    else {
        const newMoney2 = feniMoney + feinMoney;
        document.getElementById('feni-money').innerText = newMoney2;


        const newMoney1 = totalMoney1 - feinMoney;
        document.getElementById('total-money').innerText = newMoney1;
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border border-solid border-inherit rounded-xl mt-11 ml-44" style="width: 1140px;">
                <p class="font-bold text-xl px-5 py-5">${feinMoney} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
                <p class="px-5 pb-4">Date: ${dateTimeString}</p>
            </div>
        `;
        document.getElementById('history').appendChild(div);
    }
    document.getElementById('feni-input').value = "";
});







// for third button
document.getElementById('third-button').addEventListener('click', function (event) {
    event.preventDefault();



    const Money = document.getElementById('total-money').innerText; //amar money
    const totalMoney = parseFloat(Money);
    const qMoney = document.getElementById('quota-money').innerText;//noakhali money
    const quotaMoney = parseFloat(qMoney);




    const quoMoney = parseFloat(document.getElementById('quota-input').value);


    if (quoMoney > totalMoney) {
        alert('Lack of enough money');
        modalCheckbox.checked = false;
        document.getElementById('noakhali-input').value = "";
        return;
    }
    if(isNaN(quoMoney)){
        alert('Invalid input');
        modalCheckbox.checked = false;
        document.getElementById('noakhali-input').value = "";
        return;
    }
    else {
        const newMoney = quotaMoney + quoMoney;
        document.getElementById('quota-money').innerText = newMoney;


        const newMoney1 = totalMoney - quoMoney;
        document.getElementById('total-money').innerText = newMoney1;
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border border-solid border-inherit rounded-xl mt-11 ml-44" style="width: 1140px;">
                <p class="font-bold text-xl px-5 py-5">${quoMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
                <p class="px-5 pb-4">Date: ${dateTimeString}</p>
            </div>
        `;
        document.getElementById('history').appendChild(div);
    }
    document.getElementById('quota-input').value = ' ';
});




document.getElementById('blog').addEventListener('click',function(){
    window.location.href='/blog.html';
});