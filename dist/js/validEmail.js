window.onload = function(){
    document.querySelector('.input-component__btn').addEventListener('click', function(){
        if(validMail(document.querySelector('.input-component__field').value)){
            showAlert('Success, check your Email, please!', 'success');
            var template_params = {
                "reply_to": "reply_to_value",
                "topic" : "Test site",
                "message_html": "Привіт, це перевірка тестового завдання, яке зробив Kostia",
                "email": document.querySelector('.input-component__field').value
            }
            var service_id = "default_service";
            var template_id = "template_SevYsKfk";
            emailjs.send(service_id, template_id, template_params);

            document.querySelector('.input-component__field').value = '';
        }   else {
            showAlert('Error, invalid email!', 'error');
            document.querySelector('.input-component__field').value = '';
        }
    });
}

function validMail(mail)
{
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}


function showAlert(mesage, className) {
    const div = document.createElement('div');
    div.className = `${className}-msg`;
    div.appendChild(document.createTextNode(mesage));
    const container = document.querySelector('.input-component');
    const form = document.querySelector('.input-component__field');
    container.insertBefore(div, form);

    setTimeout(function() {
        container.removeChild(div);
    }, 2000);
}



