const close_time = new Date('2024-02-21 8:35'); // 24 hour time

const title = "March Madness 2023";

const form_url = "https://docs.google.com/forms/d/e/1FAIpQLSdlliPEA2oqsKPtqZ8MjbSeAJgT0Vk-Qu-nkANXWuA5qsPu0g/formResponse?usp=pp_url&";

const pre_img_url = "https://www.ncaa.com/sites/default/files/images/logos/schools/bgl/";
const post_img_url = ".svg";

const teams = [
    [{name: "Baylor", seed: 1, abbr: "north-carolina"}],
    [{name: "Norfolk St.", seed: 16, abbr: "north-carolina"}],
    [{name: "North Carolina", seed: 8, abbr: "north-carolina"}],
    [{name: "Marquette", seed: 9, abbr: "north-carolina"}],
    [{name: "Saint Mary's", seed: 5, abbr: "north-carolina"}],
    [{name: "Wyoming", seed: 12, abbr: "north-carolina"}, {name: "Indiana", seed: 12, abbr: "north-carolina"}],
    [{name: "UCLA", seed: 4, abbr: "north-carolina"}],
    [{name: "Akron", seed: 13, abbr: "north-carolina"}],
    [{name: "Texas", seed: 6, abbr: "north-carolina"}],
    [{name: "Virginia Tech", seed: 11, abbr: "north-carolina"}],
    [{name: "Purdue", seed: 3, abbr: "north-carolina"}],
    [{name: "Yale", seed: 14, abbr: "north-carolina"}],
    [{name: "Murray St.", seed: 7, abbr: "north-carolina"}],
    [{name: "San Francisco", seed: 10, abbr: "north-carolina"}],
    [{name: "Kentucky", seed: 2, abbr: "north-carolina"}],
    [{name: "St. Peter's", seed: 15, abbr: "north-carolina"}],
    [{name: "Gonzaga", seed: 1, abbr: "north-carolina"}],
    [{name: "Georgia St.", seed: 16, abbr: "north-carolina"}],
    [{name: "Boise St.", seed: 8, abbr: "north-carolina"}],
    [{name: "Memphis", seed: 9, abbr: "north-carolina"}],
    [{name: "UConn", seed: 5, abbr: "north-carolina"}],
    [{name: "New Mexico St.", seed: 12, abbr: "north-carolina"}],
    [{name: "Arkansas", seed: 4, abbr: "north-carolina"}],
    [{name: "Vermont", seed: 13, abbr: "north-carolina"}],
    [{name: "Alabama", seed: 6, abbr: "north-carolina"}],
    [{name: "Rutgers", seed: 11, abbr: "north-carolina"}, {name: "Notre Dame", seed: 11, abbr: "north-carolina"}],
    [{name: "Texas Tech", seed: 3, abbr: "north-carolina"}],
    [{name: "Montana St.", seed: 14, abbr: "north-carolina"}],
    [{name: "Michigan St.", seed: 7, abbr: "north-carolina"}],
    [{name: "Davidson", seed: 10, abbr: "north-carolina"}],
    [{name: "Duke", seed: 2, abbr: "north-carolina"}],
    [{name: "CSU Fullerton", seed: 15, abbr: "north-carolina"}],
    [{name: "Arizona", seed: 1, abbr: "north-carolina"}],
    [{name: "Wright St.", seed: 16, abbr: "north-carolina"}, {name: "Bryant", seed: 16, abbr: "north-carolina"}],
    [{name: "Seton Hall", seed: 8, abbr: "north-carolina"}],
    [{name: "TCU", seed: 9, abbr: "north-carolina"}],
    [{name: "Houston", seed: 5, abbr: "north-carolina"}],
    [{name: "UAB", seed: 12, abbr: "north-carolina"}],
    [{name: "Illinois", seed: 4, abbr: "north-carolina"}],
    [{name: "Chattanooga", seed: 13, abbr: "north-carolina"}],
    [{name: "Colorado St.", seed: 6, abbr: "north-carolina"}],
    [{name: "Michigan", seed: 11, abbr: "north-carolina"}],
    [{name: "Tennessee", seed: 3, abbr: "north-carolina"}],
    [{name: "Longwood", seed: 14, abbr: "north-carolina"}],
    [{name: "Ohio St.", seed: 7, abbr: "north-carolina"}],
    [{name: "Loyola Chicago", seed: 10, abbr: "north-carolina"}],
    [{name: "Villanova", seed: 2, abbr: "north-carolina"}],
    [{name: "Delaware", seed: 15, abbr: "north-carolina"}],
    [{name: "Kansas", seed: 1, abbr: "north-carolina"}],
    [{name: "TX Southern", seed: 16, abbr: "north-carolina"}, {name: "TX A&M CC", seed: 16, abbr: "north-carolina"}],
    [{name: "San Diego St.", seed: 8, abbr: "north-carolina"}],
    [{name: "Creighton", seed: 9, abbr: "north-carolina"}],
    [{name: "Iowa", seed: 5, abbr: "north-carolina"}],
    [{name: "Richmond", seed: 12, abbr: "north-carolina"}],
    [{name: "Providence", seed: 4, abbr: "north-carolina"}],
    [{name: "South Dakota St.", seed: 13, abbr: "north-carolina"}],
    [{name: "LSU", seed: 6, abbr: "north-carolina"}],
    [{name: "Iowa St.", seed: 11, abbr: "north-carolina"}],
    [{name: "Wisconsin", seed: 3, abbr: "north-carolina"}],
    [{name: "Colgate", seed: 14, abbr: "north-carolina"}],
    [{name: "USC", seed: 7, abbr: "north-carolina"}],
    [{name: "Miami", seed: 10, abbr: "north-carolina"}],
    [{name: "Auburn", seed: 2, abbr: "north-carolina"}],
    [{name: "Jacksonville St.", seed: 15, abbr: "north-carolina"}]
];

const field_ids = [1106046231,
                   1006301913,
                   821070827,
                   554824384,
                   1052206320,
                   2143058442,
                   1214001433,
                   1937954133,
                   992162671,
                   6898456,
                   1484763812,
                   161595687,
                   591587938,
                   830208779,
                   88189638,
                   106569068,
                   1090144009,
                   1789367935,
                   1553874326,
                   1699707435,
                   103358204,
                   908129150,
                   12879209,
                   1064259103,
                   1498445517,
                   274738042,
                   1113682363,
                   572788231,
                   922643385,
                   2087326142,
                   933917890,
                   1825946844,
                   833263275,
                   9436869,
                   2068489962,
                   402170040,
                   759619955,
                   1035298230,
                   960590841,
                   1046474274,
                   445446792,
                   1331545443,
                   1331981691,
                   1654355002,
                   1605458505,
                   169486593,
                   1158659574,
                   1239292469,
                   252465233,
                   485034727,
                   2050168686,
                   1998036701,
                   346362340,
                   595386958,
                   283289711,
                   1139518945,
                   1444568338,
                   1385212411,
                   1345784535,
                   576058148,
                   1884682668,
                   1408102586,
                   136943209,
                   1435998191,
                   1548781571];