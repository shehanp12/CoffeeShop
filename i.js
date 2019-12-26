
function contactScript(value) {
    var a = { 
        apiKey: "AIzaSyDLuxMywllmIgkMAdl7UZy4LtTKR7nTvVk",
    authDomain: "najisir-55d96.firebaseapp.com",
    databaseURL: "https://najisir-55d96.firebaseio.com",
    projectId: "najisir-55d96",
    storageBucket: "najisir-55d96.appspot.com",
    messagingSenderId: "1036977387063",
    appId: "1:1036977387063:web:64b12e198166663553f1b2",
    measurementId: "G-HYMBMBY6G4"
     
    };
    firebase.initializeApp(a);
    var b = firebase.database().ref("messages");
        $("#newContact").submit(function(a) { $(this), console.log("Submit to Firebase");
        var c = $("#name").val(),
            d = $("#email").val(),
            f = { name: c, email: d};
        return b.push(f).then(function(a) { 
            $(".sucess").css("display", "block"), 
            $(".sucess-none").css("display", "none") }), !1 })   
}
