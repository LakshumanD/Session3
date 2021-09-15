//1)For the given JSON iterate over all for loops (for, for in, for of, forEach)
let myResume = {
  name: "Lakshumanasamy D",
  age: 33,
  email: "llakshman.samy@gmail.com",
  "Mobile no": 8072000546,
  address: {
    street: "56,south street",
    city: "Madurai",
    Zip: "638702",
  },
  Education_Details: {
    SSLC: "Govt.Hr.Sec.School",
    HSC: "Govt. Hr. Sec. School",
    PG: "K.S.R College of Engineering",
  },
  languages_known: ["Tamil", "English"],
  Skills: ["C#", "Asp.Net", "MVC", "ReactJs", "NodeJs"],
};

console.log("*** For Loop ***");
for (add_data = 0; add_data < myResume.languages_known.length; add_data++) {
  console.log(myResume.languages_known[add_data]);
}

console.log("*** For in Loop ***");
for (let edu in myResume.Education_Details) console.log(edu);

console.log("*** For Each ***");
myResume.Skills.forEach(function (data, index) {
  console.log(data);
});

console.log("*** For Of ***");
for (const [key, value] of Object.entries(myResume.address)) {
  console.log(key, ":", value);
}
