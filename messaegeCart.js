const displayNotifycationCard = () => {

    const btnConfirm = document.getElementById('btn-confirm');
    const inputUsername = document.getElementById('username');
    const inputPhoneNumber = document.getElementById('phone-number');
    const notifycationDisplay = document.querySelector(".container-notifycation");
    const iconVerify = document.querySelector('.icon-verify');
    const iconCheck = document.getElementById('check-icon');
    const iconCross = document.getElementById('cross-icon');
    const btnVerify = document.getElementById('btn-verify');
    const messageSuccessful = document.getElementById('true');
    const messageFalse = document.getElementById('false');

    const isSuccessful = () => {
        notifycationDisplay.style.display = 'flex';
        iconCross.style.display = 'none'
        iconCheck.style.display = 'block'
        iconVerify.classList.add('successful')
        iconVerify.classList.remove('dangerous')
        btnVerify.classList.add('successful')
        btnVerify.classList.remove('dangerous')
        messageFalse.style.display = 'none'
        messageSuccessful.style.display = 'block'
    }
    const isWrong = () => {
        notifycationDisplay.style.display = 'flex';
        iconCheck.style.display = 'none'
        iconCross.style.display = 'block'
        iconVerify.classList.remove('successful')
        iconVerify.classList.add('dangerous')
        btnVerify.classList.remove('successful')
        btnVerify.classList.add('dangerous')
        messageFalse.style.display = 'block'
        messageSuccessful.style.display = 'none'

    }

    const checkConfirm = () => {
        btnConfirm.addEventListener('click', () => {
            if (inputUsername.value === '' || inputPhoneNumber.value === '' || inputPhoneNumber.value.length < 9 || inputPhoneNumber.value[0] !== '0' || inputPhoneNumber.value.length > 10){
                isWrong();
            }
            else{
                isSuccessful();
            }

        })
        btnVerify.addEventListener('click', () => {
            notifycationDisplay.style.display = 'none';
            
        })
    }
    checkConfirm()
}
displayNotifycationCard();


