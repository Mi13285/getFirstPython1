function getFirstPython(list) {
  const Python = list.find((list) => list.language === "Python");
  return Python
    ? `${Python.firstName}, ${Python.country}`
    : "There will be no Python developers";
}
console.log(
  getFirstPython([
    {
      firstName: "Mark",
      lastName: "G.",
      country: "Scotland",
      continent: "Europe",
      age: 22,
      language: "JavaScript",
    },
    {
      firstName: "Victoria",
      lastName: "T.",
      country: "Puerto Rico",
      continent: "Americas",
      age: 30,
      language: "Python",
    },
    {
      firstName: "Emma",
      lastName: "B.",
      country: "Norway",
      continent: "Europe",
      age: 19,
      language: "Clojure",
    },
  ])
);
