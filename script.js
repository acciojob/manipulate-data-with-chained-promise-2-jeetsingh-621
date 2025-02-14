 function manipulateData() {
            // Initial Promise: Resolve faster (1s instead of 3s)
            new Promise((resolve) => {
                setTimeout(() => resolve([1, 2, 3, 4]), 1000);
            })
            // Step 1: Filter out odd numbers
            .then((arr) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const evens = arr.filter(num => num % 2 === 0);
                        document.getElementById("output").textContent = evens.join(", ");
                        resolve(evens);
                    }, 1000); // Cypress will see "2,4" at 2s
                });
            })
            // Step 2: Multiply even numbers by 2
            .then((evens) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const doubled = evens.map(num => num * 2);
                        document.getElementById("output").textContent = doubled.join(", ");
                        resolve(doubled);
                    }, 1000); // Cypress will see "4,8" at 3s
                });
            });
        }

        // Call function on page load
        manipulateData();