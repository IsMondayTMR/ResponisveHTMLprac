var emailCollectorForm = document.getElementById("EMAIL");

emailCollectorForm.addEventListener("submit", getsubmit);

function getsubmit(event){
    event.preventDefault();

    let my_form_data = new FormData(event.target);
    let user_firstname = my_form_data.get("firstName");
    let user_email_address = my_form_data.get("emailAddress");
    let update_content =  `
        <h2>Congratulations, ${user_firstname}!</h2>

        <p>You're on your way to becoming a BBQ Master!</p>
        
        <p class="fine-print">You will get weekly BBQ tips sent to: ${user_email_address}</p>`;

    let content = document.getElementById("MAIN");
        content.innerHTML = update_content;
}