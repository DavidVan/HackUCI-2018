       // Initialize Firebase
        let config = {
            apiKey: "AIzaSyD69_6YZen6nLawXQ14vI4fBwGiaw2Ets8",
            authDomain: "hackuci2018-dcb66.firebaseapp.com",
            databaseURL: "https://hackuci2018-dcb66.firebaseio.com",
            projectId: "hackuci2018-dcb66",
            storageBucket: "",
            messagingSenderId: "298079984245"
        };
        firebase.initializeApp(config);



        let registerBtn = document.getElementById("register");
        registerBtn.addEventListener('click', () => {
            $('#modal-window').modal('show');
            let registerConfirmBtn = document.getElementById("registerform-registerbutton");
            registerConfirmBtn.addEventListener('click', () => {
            let email = document.getElementById('registerform-email').value;
            let password = document.getElementById('registerform-password').value;
            let loginBtn = document.getElementById("login");
            loginBtn.innerText = "Logout";
            document.getElementById("register").style.display = 'none';
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                //Handle Errors
                let errorCode = error.code;

                let errorMessage = error.message;
                console.log("Error Creating account!");
                let sendError = document.getElementById("registerinformation");
                sendError.innerHTML += "<a id=\"ErrorText\" class=\"ui input red\"> There was an error creating the account!</a>";
            });
        });
        });

        let loginBtn = document.getElementById("login");
        loginBtn.addEventListener('click', () => {
            if(loginBtn.innerText === "Login") {
                $('#modal-login').modal('show');
                let loginBtnConfirm = document.getElementById("loginform-loginbutton");
                loginBtnConfirm.addEventListener('click', () => {
                    let email = document.getElementById('loginform-email').value;
                    let password = document.getElementById("loginform-password").value;
                    let loginBtn = document.getElementById("login");
                    loginBtn.innerText = "Logout";
                    document.getElementById("register").style.display = 'none';
                    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                        // Handle Errors here.
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        console.log(error.code + error.message);
                        console.log("Error logging in!");
                        let sendError = document.getElementById("loginInformation");
                        sendError.innerHTML += "<a id=\"ErrorText\" class= \"ui input red\"> There was an error logging in!</a>"
                        loginBtn.innerText = "Login";
                        document.getElementById("register").style.display = 'block';

            });

        });
            } else {
                firebase.auth().signOut().then(function() {
                    loginBtn.innerText = "Login";
                    document.getElementById("register").style.display = 'block';


                }).catch(function(error) {

                });
            }
        });

        // Start developing database
        let db = firebase.database();

        function writeUserData(userId, name, email) {
            firebase.database().ref('users/' + userId).set({
                username: name,
                email: email
            });
        }

        // let writeDataLink = document.getElementById("writeData")
        // writeDataLink.addEventListener('click', () => {
        //     writeUserData("1", "Test", "test@test.com")
        // });

        // document.getElementById('register').addEventListener('click', () => {
        //     $('#modal-window').modal('show');
        // });
        function checkIfOn() {
            console.log(firebase.auth().currentUser);
            if(firebase.auth().currentUser !== null) {
                let loginBtn = document.getElementById("login");
                console.log("Hello");
                loginBtn.innerText = "Logout";
                document.getElementById("register").style.display = 'none';

            } 
            console.log("HELLO WORLD");
        }

        window.setTimeout(checkIfOn,500);