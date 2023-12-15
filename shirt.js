 
    var LoginForm = document.gotElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");
    var Indicator = document.getElementById("Indicator");

        function register(){
            RegForm.style.transform = "translateX(0px)"
            LoginForm.style.transform = "translateX(0px)";
            
        }

        function login(){
            RegForm.style.transform = "translateX(300px)";
            LoginForm.style.transform = "translateX(300px)";
            
        }