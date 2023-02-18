function showPassword() {
    var x = document.getElementById("password");
    var img = document.getElementById("showpasswordimg");
    if (x.type === "password") {
        img.setAttribute("src", "images/hide.png");
        x.type = "text";
    } else {
        img.setAttribute("src", "images/show.png");
        x.type = "password";
    }
}

function showRules() {
    let list = document.getElementById("ruleslist");
    if (list.hasAttribute("hidden")) {
        list.removeAttribute("hidden");
    } else {
        list.setAttribute("hidden", "");
    }
}
function authenticate() {
    let refname = "atharva_tiwary";
    let refpassword = "Password*25";
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    if (username === refname && password === refpassword) {
        // alert("Login Successful");
        message.innerText = "Login Successful";
        if (message.classList.contains("fail")) {
            message.classList.replace("fail", "success");
        } else {
            message.classList.add("success");
        }
    } else {
        // alert("Username or password may be incorrect");
        message.innerText = "Username or password may be incorrect";
        message.classList.add("fail");
    }
}
