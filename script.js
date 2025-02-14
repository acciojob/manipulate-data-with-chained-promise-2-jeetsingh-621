function manipulateData() {
            // Step 1: Return a promise that resolves after 3 seconds with the array [1, 2, 3, 4]
            new Promise((resolve) => {
                setTimeout(() => resolve([1, 2, 3, 4]), 3000);
            })
            // Step 2: First Transformation - Filter out odd numbers
            .then((arr) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const evens = arr.filter(num => num % 2 === 0);
                        document.getElementById("output").textContent = evens.join(", ");
                        resolve(evens);
                    }, 1000);
                });
            })
            // Step 3: Second Transformation - Multiply even numbers by 2
            .then((evens) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const doubled = evens.map(num => num * 2);
                        document.getElementById("output").textContent = doubled.join(", ");
                        resolve(doubled);
                    }, 2000);
                });
            });
        }

        // Call the function when the page loads
        manipulateData();