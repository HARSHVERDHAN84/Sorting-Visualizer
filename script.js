const container = document.querySelector(".container");
const startButton = document.getElementById("startButton");

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements in the array
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                // Update visualization
                updateBars(arr, j, j + 1);

                await delay(100);
            }
        }
    }
}


async function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            updateBars(arr, i, minIndex);
            await delay(100);
        }
    }
}

async function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            updateBars(arr, j, j + 1);
            await delay(100);
            j--;
        }

        arr[j + 1] = key;
        updateBars(arr, j, j + 1);
        await delay(100);
    }
}

function updateBars(arr, index1, index2) {
    const bars = container.querySelectorAll(".bar");

    const bar1 = bars[index1];
    const bar2 = bars[index2];

    const height1 = `${arr[index1]}px`;
    const height2 = `${arr[index2]}px`;

    bar1.style.height = height1;
    bar2.style.height = height2;
}

function createBars(arr) {
    container.innerHTML = "";

    for (const num of arr) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${num * 3}px`;
        container.appendChild(bar);
    }
}

startButton.addEventListener("click", async () => {
    const numbers = [67, 34, 12, 89, 45, 27, 72, 91, 56, 18];
    createBars(numbers);
    
    await bubbleSort(numbers);
});
