const close_time = new Date(new Date('2024-03-14 17:35').toLocaleString('en', {timeZone: 'America/Chicago'}));

const title = "March Madness 2023";

const form_url = "https://docs.google.com/forms/d/e/1FAIpQLSdlliPEA2oqsKPtqZ8MjbSeAJgT0Vk-Qu-nkANXWuA5qsPu0g/formResponse?usp=pp_url&";

const pre_img_url = "https://www.ncaa.com/sites/default/files/images/logos/schools/bgl/";
const post_img_url = ".svg";

const teams = [
    [{name: "Alabama", seed: 1, abbr: "alabama"}],
    [{name: "Texas A&M-CC", seed: 16, abbr: "am-corpus-chris"}, {name: "SE Missouri St.", seed: 16, abbr: "southest-mo-st"}],
    [{name: "Maryland", seed: 8, abbr: "maryland"}],
    [{name: "West Virginia", seed: 9, abbr: "west-virginia"}],
    [{name: "San Diego St.", seed: 5, abbr: "san-diego-st"}],
    [{name: "Col of Charleston", seed: 12, abbr: "col-of-charleston"}],
    [{name: "Virginia", seed: 4, abbr: "virginia"}],
    [{name: "Furman", seed: 13, abbr: "furman"}],
    [{name: "Creighton", seed: 6, abbr: "creighton"}],
    [{name: "NC State", seed: 11, abbr: "north-carolina-st"}],
    [{name: "Baylor", seed: 3, abbr: "baylor"}],
    [{name: "UCSB", seed: 14, abbr: "uc-santa-barbara"}],
    [{name: "Missouri", seed: 7, abbr: "missouri"}],
    [{name: "Utah St.", seed: 10, abbr: "utah-st"}],
    [{name: "Arizona", seed: 2, abbr: "arizona"}],
    [{name: "Princeton", seed: 15, abbr: "princeton"}],
    [{name: "Purdue", seed: 1, abbr: "purdue"}],
    [{name: "Texas Southern", seed: 16, abbr: "texas-southern"}, {name: "FDU", seed: 16, abbr: "farleigh-dickinson"}],
    [{name: "Memphis", seed: 8, abbr: "memphis"}],
    [{name: "FAU", seed: 9, abbr: "fla-atlantic"}],
    [{name: "Duke", seed: 5, abbr: "duke"}],
    [{name: "Oral Roberts", seed: 12, abbr: "oral-roberts"}],
    [{name: "Tennessee", seed: 4, abbr: "tennesse"}],
    [{name: "Louisiana", seed: 13, abbr: "la-lafayette"}],
    [{name: "Kentucky", seed: 6, abbr: "kentucky"}],
    [{name: "Providence", seed: 11, abbr: "providence"}],
    [{name: "Kansas St.", seed: 3, abbr: "kansas-st"}],
    [{name: "Montana St.", seed: 14, abbr: "montana-st"}],
    [{name: "Michigan St.", seed: 7, abbr: "michigan-st"}],
    [{name: "USC", seed: 10, abbr: "sourthern-california"}],
    [{name: "Marquette", seed: 2, abbr: "marquette"}],
    [{name: "Vermont", seed: 15, abbr: "vermont"}],
    [{name: "Houston", seed: 1, abbr: "houston"}],
    [{name: "N Kentucky", seed: 16, abbr: "northern-ky"}],
    [{name: "Iowa", seed: 8, abbr: "iowa"}],
    [{name: "Auburn", seed: 9, abbr: "auburn"}],
    [{name: "Miami", seed: 5, abbr: "miami-fl"}],
    [{name: "Drake", seed: 12, abbr: "drake"}],
    [{name: "Indiana", seed: 4, abbr: "indiana"}],
    [{name: "Kent St.", seed: 13, abbr: "kent-st"}],
    [{name: "Iowa St.", seed: 6, abbr: "iowa-st"}],
    [{name: "Mississippi St.", seed: 11, abbr: "mississippi-st"}, {name: "Pitt", seed: 11, abbr: "pittsburgh"}],
    [{name: "Xavier", seed: 3, abbr: "xavier"}],
    [{name: "Kennesaw St.", seed: 14, abbr: "kennesaw-st"}],
    [{name: "Texas A&M", seed: 7, abbr: "texas-am"}],
    [{name: "Penn St.", seed: 10, abbr: "penn-st"}],
    [{name: "Texas", seed: 2, abbr: "texas"}],
    [{name: "Colgate", seed: 15, abbr: "colgate"}],
    [{name: "Kansas", seed: 1, abbr: "kansas"}],
    [{name: "Howard", seed: 16, abbr: "howard"}],
    [{name: "Arkansas", seed: 8, abbr: "arkansas"}],
    [{name: "Illinois", seed: 9, abbr: "illinois"}],
    [{name: "Saint Mary's", seed: 5, abbr: "st-marys-ca"}],
    [{name: "VCU", seed: 12, abbr: "vcu"}],
    [{name: "UConn", seed: 4, abbr: "uconn"}],
    [{name: "Iona", seed: 13, abbr: "iona"}],
    [{name: "TCU", seed: 6, abbr: "tcu"}],
    [{name: "Arizona St.", seed: 11, abbr: "arizona-st"}, {name: "Nevada", seed: 11, abbr: "nevada"}],
    [{name: "Gonzaga", seed: 3, abbr: "gonzaga"}],
    [{name: "Grand Canyon", seed: 14, abbr: "grand-canyon"}],
    [{name: "Northwestern", seed: 7, abbr: "northwestern"}],
    [{name: "Boise St.", seed: 10, abbr: "boise-st"}],
    [{name: "UCLA", seed: 2, abbr: "ucla"}],
    [{name: "UNC Asheville", seed: 15, abbr: "unc-asheville"}]
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
