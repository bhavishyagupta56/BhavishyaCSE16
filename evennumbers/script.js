function calculateSum() {
    const n = parseInt(document.getElementById("number").value);

    if (isNaN(n) || n < 1) {
        document.getElementById("result").innerHTML =
            "Please enter a valid positive number.";
        return;
    }

    let sum = 0;

    // Loop through numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    document.getElementById("result").innerHTML =
        `Sum of all even numbers from 1 to ${n} is: ${sum}`;
}