//your JS code here. If required.
        function appendCharacter(char) {
            document.getElementById("display").value += char;
        }
        function clearDisplay() {
            document.getElementById("display").value = "";
        }
        function backspace() {
            let display = document.getElementById("display");
            display.value = display.value.slice(0, -1);
        }
     function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

    </script>
