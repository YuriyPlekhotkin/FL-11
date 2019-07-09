// Your code goes here
let num1 = 5;
let num2 = 6;
let email = prompt('Please enter your email', '');
if (email === 'admin@gmail.com' || email === 'user@gmail.com') {
    let pass = prompt('Please enter your password', '');
    if (pass === 'AdminPass' && email === 'admin@gmail.com' || pass === 'UserPass' && email === 'user@gmail.com') {
        if (confirm('Do you want to change your password?')) {
            let oldPass = prompt('Please enter your old password', '');
            if (oldPass === 'AdminPass' || oldPass === 'UserPass') {
                let newPass = prompt('Please enter your new password', '');
                if (newPass.length > num1) {
                    let newPass2 = prompt('Please confirm your new password', '');
                    if (newPass === newPass2) {
                        alert('You have successfully changed your password');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                } else {
                    alert('It’s too short password. Sorry.');
                }
            }
        } else {
            alert('You have failed the change.');
        }

    } else if (pass === null) {
        alert('Canceled');

    } else {
        alert('Wrong password');
    }
} else if (email === null) {
    alert('Canceled');
} else if (email.length > num2) {
    alert('I don\'t know you');
} else {
    alert('I don\'t know any emails having name length less than 6 symbols');
}