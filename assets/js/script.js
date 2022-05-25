// ------- Task 1 Start

let mouse = document.getElementById("mouse")
let cont = document.getElementById("cont")
let marginX = 0;
let marginY = 0;
// let width = 100;

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 37:
            let bodyLeftRect = document.body.getBoundingClientRect(),
                mouseLeftRect = mouse.getBoundingClientRect(),
                offsetLeft = mouseLeftRect.left - bodyLeftRect.left;
            if (offsetLeft > 0) {
                marginX = marginX - 50;
                mouse.style.marginLeft = `${marginX}px`;
                mouse.style.transform = "rotate(-20deg)";
            }
            else {
                marginX = marginX + 1400;
                mouse.style.marginLeft = `${marginX}px`
                mouse.style.transform = "rotate(-20deg)";
            }

            break;
        case 38:
            let bodyUpRect = document.body.getBoundingClientRect(),
                mouseUpRect = mouse.getBoundingClientRect(),
                offsetUp = mouseUpRect.top - bodyUpRect.top;
            if (offsetUp > 0) {
                marginY = marginY - 50;
                mouse.style.marginTop = `${marginY}px`
                // width = width - 10;
                // mouse.style.width = `${width}px`
                mouse.style.transform = "rotate(0deg)";
            }
            else {
                marginY = marginY + 600;
                mouse.style.marginTop = `${marginY}px`
                width = 220;
                // width = width + 10;
                // mouse.style.width = `${width}px`
                mouse.style.transform = "rotate(0deg)";
            }
            break;
        case 39:
            let bodyRightRect = document.body.getBoundingClientRect(),
                mouseRightRect = mouse.getBoundingClientRect(),
                offsetRight = mouseRightRect.left - bodyRightRect.left;
            if (offsetRight <= 1350) {
                marginX = marginX + 50;
                mouse.style.marginLeft = `${marginX}px`
                mouse.style.transform = "rotate(20deg)";
            } else {
                marginX = marginX - 1400;
                mouse.style.marginLeft = `${marginX}px`;
                mouse.style.transform = "rotate(20deg)";
            }
            break;
        case 40:
            let bodyDownRect = document.body.getBoundingClientRect(),
                mouseDownRect = mouse.getBoundingClientRect(),
                offsetDown = mouseDownRect.top - bodyDownRect.top;
            if (offsetDown <= 550) {
                marginY = marginY + 50;
                mouse.style.marginTop = `${marginY}px`
                // width = width + 10;
                // mouse.style.width = `${width}px`
                mouse.style.transform = "rotate(0deg)";
            }
            else {
                marginY = marginY - 600;
                mouse.style.marginTop = `${marginY}px`
                width = 100;
                // width = width - 10;
                // mouse.style.width = `${width}px`
                mouse.style.transform = "rotate(0deg)";
            }
            break;
    }
});


// ------- Task 1 End






// --------- Task 2 Start

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

// forEach

companies.forEach(function (company) {
    console.log(company.name);
});

// filter

// Get 21 and older

let canDrink1 = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrink1.push(ages[i]);
    }
}

const canDrink2 = ages.filter(function (age) {
    if (age >= 21) {
        return true;
    }
});

const canDrink3 = ages.filter(age => age >= 21);

// Filter retail companies

const retailCompanies1 = companies.filter(function (company) {
    if (company.category === 'Retail') {
        return true;
    }
});

const retailCompanies2 = companies.filter(company => company.category === 'Retail');

// Get 80s companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// map

// Create array of company names
const companyNames = companies.map(function (company) {
    return company.name;
});

const testMap = companies.map(function (company) {
    return `${company.name} [${company.start} - ${company.end}]`;
});

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

// sort

// Sort companies by start year

const sortedCompanies = companies.sort(function (c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages
const sortAges = ages.sort((a, b) => a - b);

console.log(sortAges);

// reduce

let ageSum1 = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum1 += ages[i];
}

const ageSum2 = ages.reduce(function (total, age) {
    return total + age;
}, 0);

const ageSum3 = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

const totalYears1 = companies.reduce(function (total, company) {
    return total + (company.end - company.start);
}, 0);

const totalYears2 = companies.reduce((total, company) => total + (company.end - company.start), 0);

// Combine Methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combined);


// ----- Task 2 End

let check = document.getElementById("check")


check.onclick = function () {
    // swal("Oops", "Something went wrong!", "error")
    // swal("Good job!", "You clicked the button!", "success");
    // swal({ closeOnEsc: false })

    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
}

// deyerlendirme

// import React from 'react'
// import swal from '@sweetalert/with-react'

// const onPick = value => {
//     swal("Thanks for your rating!", `You rated us ${value}/3`, "success")
// }

// const MoodButton = ({ rating, onClick }) => (
//     <button
//         data-rating={rating}
//         className="mood-btn"
//         onClick={() => onClick(rating)}
//     />
// )

// swal({
//     text: "How was your experience getting help with this issue?",
//     buttons: {
//         cancel: "Close",
//     },
//     content: (
//         <div>
//             <MoodButton
//                 rating={1}
//                 onClick={onPick}
//             />
//             <MoodButton
//                 rating={2}
//                 onClick={onPick}
//             />
//             <MoodButton
//                 rating={3}
//                 onClick={onPick}
//             />
//         </div>
//     )
// })