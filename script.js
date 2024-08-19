
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
        var correctPin = {
    "Prince will": {"pin": "41957", "link": "princewill.html"},
    "hello world": {"pin": "12345", "link": "https://www.example.com"},
    "another name": {"pin": "67890", "link": "https://www.anotherlink.com"}
};

        function openModal(name) {
            modal.style.display = "block";
            document.getElementById("modalTitle").innerHTML = name;
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        function checkPin() {
    var pin = document.getElementById("pin").value;
    var name = document.getElementById("modalTitle").innerHTML;
    if (pin === correctPin[name].pin) { 
        alert("Correct PIN!");
        var link = document.getElementById("link");
        link.href = correctPin[name].link;
        link.style.display = "block";
        link.click();
    } else {
        document.getElementById("pinError").innerHTML = "Incorrect PIN. Please try again.";
    }
}






// var correctPin = {
//     "Prince will": {"pin": "41957", "link": "https://www.google.com"},
//     "hello world": {"pin": "12345", "link": "https://www.example.com"},
//     "another name": {"pin": "67890", "link": "https://www.anotherlink.com"}
// };


// function checkPin() {
//     var pin = document.getElementById("pin").value;
//     var name = document.getElementById("modalTitle").innerHTML;
//     if (pin === correctPin[name].pin) {
//         alert("Correct PIN!");
//         document.getElementById("link").style.display = "block";
//         document.getElementById("link").href = correctPin[name].link;
//     } else {
//         document.getElementById("pinError").innerHTML = "Incorrect PIN. Please try again.";
//     }
// }