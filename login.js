function goBack() {
    window.history.back();
}


function Reg() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    if (email && password) {
        alert('Thankyou for Registering !'); 
    }
    else {
        alert('Please Fill The Details');
    }
    
}

function cancel() {
    window.history.back();
}

