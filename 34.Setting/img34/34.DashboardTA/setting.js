// script.js
document.addEventListener('DOMContentLoaded', function() {
    const togglePasswordVisibility = (toggleId, inputId) => {
        const toggle = document.getElementById(toggleId);
        const input = document.getElementById(inputId);

        toggle.addEventListener('click', function() {
            if (input.type === 'password') {
                input.type = 'text';
                toggle.classList.add('visible');
            } else {
                input.type = 'password';
                toggle.classList.remove('visible');
            }
        });
    };

    togglePasswordVisibility('toggleCurrentPassword', 'nhappass');
    togglePasswordVisibility('toggleNewPassword', 'nhapnewpass');
    togglePasswordVisibility('toggleConfirmPassword', 'xacnhanpass');
});
