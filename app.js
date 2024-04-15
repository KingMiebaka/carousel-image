
// for (let i = 0; i < indicators.length; i++) {
//    indicators[i].addEventListener('click', () => {
//     const element =    carList.style.transform = `translate(${i * -14.3}%)`;
//         for (let j = 0; j < indicators.length; j++) {
//             indicators[j].classList.remove('active');
//         }
//         indicators[i].classList.add('active');
//     });
// }


// let carIndex = 0;

// function moveRight() {
//     if (carIndex < 6) {
//         carIndex = carIndex + 1;
//     }

//     else {
//         carIndex = 6;
//     }

//     carList.style.transform = `translate(${carIndex * -14.3}%)`;
//     indicators.children[carIndex].classList.add('active');
//     elements = indicators.children[carIndex].classList.remove('active');
// }
// function moveLeft() {

//     if (carIndex > 0) {
//         carIndex = carIndex - 1;
//     }

//     else {
//         carIndex = 0;
//     }


//     carList.style.transform = `translate(${carIndex * -14.3}%)`;
// }

// nextBtn.addEventListener('click', moveRight);
// previousBtn.addEventListener('click', moveLeft);

// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => {
//     console.log(element);
// });

// const nextBtn = document.querySelector("#next");
// const previousBtn = document.querySelector("#previous");
// const carList = document.querySelector("ul");
// const indicators = document.querySelectorAll(".indicator");

// // Set the initial active indicator
// let carIndex = 0;
// indicators[carIndex].classList.add('active');

// // Function to update the active indicator
// function updateIndicators() {
//     for (let i = 0; i < indicators.length; i++) {
//         if (i === carIndex) {
//             indicators[i].classList.add('active');
//         } else {
//             indicators[i].classList.remove('active');
//         }
//     }
// }

// // Function to move the car list to the right
// function moveRight() {
//     if (carIndex < 6) {
//         carIndex++;
//     } else {
//         carIndex = 6;
//     }

//     carList.style.transform = `translate(${carIndex * -14.3}%)`;
//     updateIndicators();
//     document.body.style.backgroundColor = 'transparent'; // Adjust background color
// }

// // Function to move the car list to the left
// function moveLeft() {
//     if (carIndex > 0) {
//         carIndex--;
//     } else {
//         carIndex = 0;
//     }

//     carList.style.transform = `translate(${carIndex * -14.3}%)`;
//     updateIndicators();
// }
const nextBtn = document.querySelector("#next");
const previousBtn = document.querySelector("#previous");
const carList = document.querySelector("ul");
const indicators = document.querySelectorAll(".indicator");

// Function to update the active indicator
function updateIndicators(index) {
    for (let i = 0; i < indicators.length; i++) {
        if (i === index) {
            indicators[i].classList.add('active');
        } else {
            indicators[i].classList.remove('active');
        }
    }
}

// Event listeners for indicators
for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener('click', () => {
        const index = i;
        const translateValue = index * -14.3;
        carList.style.transform = `translate(${translateValue}%)`;
        updateIndicators(index);
    });
}

// Initial active indicator
updateIndicators(0);

let carIndex = 0;

function moveRight() {
    if (carIndex < 6) {
        carIndex++;
    } else {
        carIndex = 6;
    }

    const translateValue = carIndex * -14.3;
    carList.style.transform = `translate(${translateValue}%)`;
    updateIndicators(carIndex);
    document.body.style.backgroundColor = 'transparent'; // Adjust background color
}

function moveLeft() {
    if (carIndex > 0) {
        carIndex--;
    } else {
        carIndex = 0;
    }

    const translateValue = carIndex * -14.3;
    carList.style.transform = `translate(${translateValue}%)`;
    updateIndicators(carIndex);
}

// Event listeners for next and previous buttons
nextBtn.addEventListener('click', moveRight);
previousBtn.addEventListener('click', moveLeft);
