// document.getElementById("Q1");
// document.getElementById("Q1"[0]);

//===============================>Q1
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 }
];
//companies.forEach(company => {if (company.start > 1987) { console.log(company.name);}});



//==========================>Q2
// if (Array.isArray(companies)) {
//   const retailCompanies = companies.filter(company => company.category === "Retail");

//   // Log filtered retail companies
//   console.log("Retail companies:", retailCompanies);

//   retailCompanies.forEach(company => {
//       company.start += 1;

//       // Create a new div and append it to the body
//       const div = document.createElement('div');
//       div.classList.add('company-info');
//       div.innerHTML = `
//           <p>Name: ${company.name}</p>
//           <p>Category: ${company.category}</p>
//           <p>Start: ${company.start}</p>
//           <p>End: ${company.end}</p>
//       `;

//       document.body.appendChild(div);
//   });
// } else {
//   console.error("Companies is not an array");
// }console.log(...companies);


//==============================>Q3
const SD = [...companies].sort((a, b) => a.end - b.end);
//console.log(SD);

//===================================>Q4
const ages = [34, 23, 25, 31, 29];
const sortedAgesDescending = [...ages].sort((a, b) => b - a);
//console.log(sortedAgesDescending);

//======================================>Q5
const TA = ages.reduce((sum, age) => sum + age, 0);
//console.log(TA);

//=======================================>Q6
const { name, category } = companies[0];

const newObject = {
    name,
    category,
    print() {
        console.log(this.name);
    }
};
//newObject.print();

//============================================>Q7
const person = {
  name: "AHMED",
  street: "LOLLLLLL"
};
const {  street  } = person;
//console.log(street);

//============================>Q8
companies.forEach(company => {
  //console.log(company.name);
});

//==============================>Q9
const numbers = [1, 2, 3, 4, 5]; 
const squaredNumbers = numbers.map(num => num * num);
//console.log(squaredNumbers);
