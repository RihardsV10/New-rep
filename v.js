function zin() {
  alert("Paldies! Kļūda tiks risināts pēc tām.")
};

const showAllBtn = document.querySelector(".button3");
const showSubstancesBtn = document.querySelector(".button31");
const showInventoryBtn = document.querySelectorAll(".button31")[1];
let tableRows = document.querySelectorAll("tbody tr");

showAllBtn.addEventListener("click", function () {
  tableRows.forEach(row => {
    row.style.display = "table-row";
  });
});

showSubstancesBtn.addEventListener("click", function () {
  tableRows.forEach(row => {
    if (row.children[2].textContent === "Viela") {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
});

showInventoryBtn.addEventListener("click", function () {
  tableRows.forEach(row => {
    if (row.children[2].textContent === "Aprīkojums") {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
});

const searchInput = document.querySelector('input[type="search"]');
const tableBody = document.querySelector('.con-table tbody');
searchInput.addEventListener('input', () => {

  const keyword = searchInput.value.trim().toLowerCase();
  tableBody.querySelectorAll('tr').forEach(row => {

    const containsKeyword = Array.from(row.querySelectorAll('td')).some(td => {
      return td.textContent.trim().toLowerCase().includes(keyword);
    });

    if (containsKeyword) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

const jsonDataOption1 = [
  {
    "apakstips": "sāls",
    "daudzums": 100,
    "id": 2,
    "komentari": "",
    "mervienibas": "g",
    "nosaukums": "Kalcija karbonāts CaCO3",
    "skaits": 25,
    "tips": "reaģents"
  },
  {
    "apakstips": "hidroksīds",
    "daudzums": 50,
    "id": 3,
    "komentari": "Šķīdums izvedots un sapildīts 2020.09.23",
    "mervienibas": "ml",
    "nosaukums": "NaOH šķīdums 10%",
    "skaits": 45,
    "tips": "reaģents"
  },
  {
    "apakstips": "skābe",
    "daudzums": 100,
    "id": 4,
    "komentari": "Šķīdums izvedots un sapildīts 2020.10.21",
    "mervienibas": "ml",
    "nosaukums": "Sālsskābes HCl šķīdums 20%",
    "skaits": 24,
    "tips": "reaģents"
  },
  {
    "apakstips": "test1",
    "daudzums": 50,
    "id": 5,
    "komentari": "Šķīdums izvedots un sapildīts 2020.09.23",
    "mervienibas": "ml",
    "nosaukums": "NaOH šķīdums 10%",
    "skaits": 45,
    "tips": "reaģents"
  },
  {
    "apakstips": "hidroksīds",
    "daudzums": 100,
    "id": 6,
    "komentari": "Šķīdums izvedots un sapildīts 2020.10.21",
    "mervienibas": "ml",
    "nosaukums": "NaOH šķīdums 20%",
    "skaits": 413,
    "tips": "reaģents"
  },
  {
    "apakstips": "test2",
    "daudzums": 50,
    "id": 7,
    "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
    "mervienibas": "ml",
    "nosaukums": "NaOH šķīdums 10%",
    "skaits": 45,
    "tips": "reaģents"
  },
  {
    "apakstips": "test2",
    "daudzums": 5,
    "id": 8,
    "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
    "mervienibas": "ml",
    "nosaukums": "Nosaukums lorem ipsum",
    "skaits": 4,
    "tips": "reaģents"
  },
  {
    "apakstips": "test2",
    "daudzums": 5,
    "id": 9,
    "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
    "mervienibas": "ml",
    "nosaukums": "Nosaukums lorem ipsum",
    "skaits": 4,
    "tips": "reaģents"
  },
  {
    "apakstips": "test2",
    "daudzums": 5,
    "id": 10,
    "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
    "mervienibas": "ml",
    "nosaukums": "Nosaukums lorem ipsum",
    "skaits": 4,
    "tips": "reaģents"
  },
  {
    "apakstips": "test2",
    "daudzums": 5,
    "id": 11,
    "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
    "mervienibas": "ml",
    "nosaukums": "Nosaukums lorem ipsum",
    "skaits": 4,
    "tips": "reaģents"
  },
  {
    "apakstips": "test2",
    "daudzums": 5,
    "id": 12,
    "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
    "mervienibas": "ml",
    "nosaukums": "Nosaukums lorem ipsum",
    "skaits": 4,
    "tips": "reaģents"
  },
  {
    "apakstips": "test2",
    "daudzums": 5,
    "id": 13,
    "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
    "mervienibas": "ml",
    "nosaukums": "Nosaukums lorem ipsum",
    "skaits": 4,
    "tips": "reaģents"
  },
  {
    "apakstips": "test2",
    "daudzums": 5,
    "id": 14,
    "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
    "mervienibas": "ml",
    "nosaukums": "Nosaukums lorem ipsum",
    "skaits": 4,
    "tips": "reaģents"
  },
  {
    "apakstips": "test2",
    "daudzums": 5,
    "id": 15,
    "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
    "mervienibas": "ml",
    "nosaukums": "Nosaukums lorem ipsum",
    "skaits": 4,
    "tips": "reaģents"
  }
]

const jsonDataOption2 = [
  {
    "apakstips": "mehāniskie svari",
    "id": 1,
    "komentari": "",
    "nosaukums": "Mehāniskie svari QWS",
    "skaits": 5,
    "tips": "svari"
  },
  {
    "apakstips": "elektroniskie svari",
    "id": 2,
    "komentari": "Darbojas uz 3 AAA tipa baterijām",
    "nosaukums": "Elektroniskie svari ES-25",
    "skaits": 15,
    "tips": "svari"
  },
  {
    "apakstips": "plītiņa",
    "id": 3,
    "komentari": "Strāvas vada garums 1m",
    "nosaukums": "Elektriskā plītīņa",
    "skaits": 8,
    "tips": "sildītājs"
  },
  {
    "apakstips": "trauki",
    "id": 4,
    "komentari": "Kolbas īpaši lielām vielām",
    "nosaukums": "Milzīgās kolbas",
    "skaits": 100,
    "tips": "trauks"
  },
  {
    "apakstips": "stikls",
    "id": 5,
    "komentari": "Viegli plīstoša",
    "nosaukums": "Stikla mēģene",
    "skaits": 12,
    "tips": "trauks"
  }
]

const jsonDataOptionUser =
  [
    {
      "id": "1",
      "vards": "Janis",
      "uzvards": "Kociņš",
      "loma": "admin",
      "parole": "12",
      "Komentāri": "Daži komentāri"
    }
  ]

const jsonDataOptionDef = [
  {
    "id": "KL1042724",
    "nosaukums": "Katalizātors",
    "tips": "Aprīkojums",
    "apakstips": "Trauks",
    "skaits": 23,
    "svars": null,
    "mervienibas": null,
    "komentari": "Daži komentāri"
  },
  {
    "id": "KL1042723",
    "nosaukums": "Birete",
    "tips": "Aprīkojums",
    "apakstips": "Trauks",
    "skaits": 20,
    "svars": null,
    "mervienibas": null,
    "komentari": "Daži komentāri"
  },
  {
    "id": "KL1042742",
    "nosaukums": "HCL",
    "tips": "Viela",
    "apakstips": "Skābe",
    "skaits": 19,
    "svars": 40,
    "mervienibas": null,
    "komentari": "Daži komentāri"
  },
  {
    "id": "KL1042744",
    "nosaukums": "Kalba",
    "tips": "Aprīkojums",
    "apakstips": "Trauks",
    "skaits": 20,
    "svars": null,
    "mervienibas": null,
    "komentari": "Daži komentāri"
  },
  {
    "id": "KL1042534",
    "nosaukums": "Fe",
    "tips": "Viela",
    "apakstips": "Metāls",
    "skaits": 48,
    "svars": 10,
    "mervienibas": null,
    "komentari": "Daži komentāri"
  },
  {
    "id": "KL1442721",
    "nosaukums": "Na",
    "tips": "Viela",
    "apakstips": "Metāls",
    "skaits": 20,
    "svars": 20,
    "mervienibas": null,
    "komentari": "Daži komentāri"
  }
];

const optionSelect = document.getElementById("option");
optionSelect.addEventListener("change", generateTable);

function generateTable() {
  const selectedOption = optionSelect.value;
  const jsonData =
    selectedOption === "option4" ? jsonDataOptionUser :
      selectedOption === "option3" ? jsonDataOption1 :
        selectedOption === "option2" ? jsonDataOption2 :
          selectedOption === "option1" ? jsonDataOptionDef :
            jsonDataOptionDef;
  const tableBody = document.getElementById("table-body").querySelector("tbody");
  const tableHeader = document.getElementById("table-body").querySelector("thead tr");
  const headers = optionHeaders[selectedOption];

  tableHeader.innerHTML = headers.map(header => `<th>${header}</th>`).join("");

  tableBody.innerHTML = "";

  jsonData.forEach((data) => {
    const row = document.createElement("tr");
    if (selectedOption === "option4") {
      const columns = ["ID", "Vārds", "Uzvārds", "Loma", "Parole", "Komentāri"];
      const keys = ["id", "vards", "uzvards", "loma", "parole", "Komentāri"];
      row.innerHTML = columns.map(column => `<td>${data[keys[columns.indexOf(column)]] || "-"}</td>`).join("");
    } else {
      row.innerHTML = `
        <td>${data.id}</td>
        <td>${data.nosaukums || "-"}</td>
        <td>${data.tips || "-"}</td>
        <td>${data.apakstips || "-"}</td>
        <td>${data.skaits || "-"}</td>
        <td>${data.svars || "-"}</td>
        <td>${data.mervienibas || "-"}</td>
        <td>${data.komentari || "-"}</td>
      `;
    }
    tableBody.appendChild(row);
    tableRows = document.querySelectorAll("tbody tr");
  });
}

const optionHeaders = {
  option1: ['ID', 'Nosaukums', 'Tips', 'Apakštips', 'Skaits', 'Svars', 'Mērvienība', 'Komentāri'],
  option2: ['ID', 'Nosaukums', 'Tips', 'Apakštips', 'Daudzums', 'Svars', 'Mērvienība', 'Komentāri'],
  option3: ['ID', 'Nosaukums', 'Tips', 'Apakštips', 'Daudzums', 'Svars', 'Mērvienība', 'Komentāri'],
  option4: ['ID', 'Vārds', 'Uzvārds', 'Loma', 'parole','Komentāri']
};