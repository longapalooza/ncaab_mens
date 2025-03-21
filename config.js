const close_time = new Date(new Date('2025-03-20 11:30').toLocaleString('en', {timeZone: 'America/Chicago'}));

const title = "March Madness 2025";

const form_url = "https://docs.google.com/forms/d/e/1FAIpQLSdlliPEA2oqsKPtqZ8MjbSeAJgT0Vk-Qu-nkANXWuA5qsPu0g/formResponse?usp=pp_url&";

const pre_img_url = "https://www.ncaa.com/sites/default/files/images/logos/schools/bgl/";
const post_img_url = ".svg";

const teams = [
    [{name: "Auburn", seed: 1, abbr: "auburn"}],
    [{name: "Alabama St.", seed: 16, abbr: "alabama-st"}, {name: "Saint Francis U", seed: 16, abbr: "st-francis-pa"}],
    [{name: "Louisville", seed: 8, abbr: "louisville"}],
    [{name: "Creighton", seed: 9, abbr: "creighton"}],
    [{name: "Michigan", seed: 5, abbr: "michigan"}],
    [{name: "UC San Diego", seed: 12, abbr: "uc-san-diego"}],
    [{name: "Texas A&M", seed: 4, abbr: "texas-am"}],
    [{name: "Yale", seed: 13, abbr: "yale"}],
    [{name: "Ole Miss", seed: 6, abbr: "ole-miss"}],
    [{name: "San Diego St.", seed: 11, abbr: "san-diego-st"}, {name: "North Carolina", seed: 11, abbr: "north-carolina"}],
    [{name: "Iowa St.", seed: 3, abbr: "iowa-st"}],
    [{name: "Lipscomb", seed: 14, abbr: "lipscomb"}],
    [{name: "Marquette", seed: 7, abbr: "marquette"}],
    [{name: "New Mexico", seed: 10, abbr: "new-mexico"}],
    [{name: "Michigan St.", seed: 2, abbr: "michigan-st"}],
    [{name: "Bryant", seed: 15, abbr: "bryant"}],
    [{name: "Florida", seed: 1, abbr: "florida"}],
    [{name: "Norfolk St.", seed: 16, abbr: "norfolk-st"}],
    [{name: "UConn", seed: 8, abbr: "uconn"}],
    [{name: "Oklahoma", seed: 9, abbr: "oklahoma"}],
    [{name: "Memphis", seed: 5, abbr: "memphis"}],
    [{name: "Colorado St.", seed: 12, abbr: "colorado-st"}],
    [{name: "Maryland", seed: 4, abbr: "maryland"}],
    [{name: "Grand Canyon", seed: 13, abbr: "grand-canyon"}],
    [{name: "Missouri", seed: 6, abbr: "missouri"}],
    [{name: "Drake", seed: 11, abbr: "drake"}],
    [{name: "Texas Tech", seed: 3, abbr: "texas-tech"}],
    [{name: "UNC Wilmington", seed: 14, abbr: "unc-wilmington"}],
    [{name: "Kansas", seed: 7, abbr: "kansas"}],
    [{name: "Arkansas", seed: 10, abbr: "arkansas"}],
    [{name: "Saint John's", seed: 2, abbr: "st-johns-ny"}],
    [{name: "Omaha", seed: 15, abbr: "neb-omaha"}],
    [{name: "Duke", seed: 1, abbr: "duke"}],
    [{name: "American", seed: 16, abbr: "american"}, {name: "Mount St. Mary's", seed: 16, abbr: "mt-st-marys"}],
    [{name: "Mississippi St.", seed: 8, abbr: "mississippi-st"}],
    [{name: "Baylor", seed: 9, abbr: "baylor"}],
    [{name: "Oregon", seed: 5, abbr: "oregon"}],
    [{name: "Liberty", seed: 12, abbr: "liberty"}],
    [{name: "Arizona", seed: 4, abbr: "arizona"}],
    [{name: "Akron", seed: 13, abbr: "akron"}],
    [{name: "BYU", seed: 6, abbr: "byu"}],
    [{name: "VCU", seed: 11, abbr: "vcu"}],
    [{name: "Wisconsin", seed: 3, abbr: "wisconsin"}],
    [{name: "Montana", seed: 14, abbr: "montana"}],
    [{name: "Saint Mary's", seed: 7, abbr: "st-marys-ca"}],
    [{name: "Vanderbilt", seed: 10, abbr: "vanderbilt"}],
    [{name: "Alabama", seed: 2, abbr: "alabama"}],
    [{name: "Robert Morris", seed: 15, abbr: "robert-morris"}],
    [{name: "Houston", seed: 1, abbr: "houston"}],
    [{name: "SIU Edwardsville", seed: 16, abbr: "siu-edwardsville"}],
    [{name: "Gonzaga", seed: 8, abbr: "gonzaga"}],
    [{name: "Georgia", seed: 9, abbr: "georgia"}],
    [{name: "Clemson", seed: 5, abbr: "clemson"}],
    [{name: "McNeese", seed: 12, abbr: "mcneese"}],
    [{name: "Purdue", seed: 4, abbr: "purdue"}],
    [{name: "High Point", seed: 13, abbr: "high-point"}],
    [{name: "Illinois", seed: 6, abbr: "illinois"}],
    [{name: "Texas", seed: 11, abbr: "texas"}, {name: "Xavier", seed: 11, abbr: "xavier"}],
    [{name: "Kentucky", seed: 3, abbr: "kentucky"}],
    [{name: "Troy", seed: 14, abbr: "troy"}],
    [{name: "UCLA", seed: 7, abbr: "ucla"}],
    [{name: "Utah St.", seed: 10, abbr: "utah-st"}],
    [{name: "Tennessee", seed: 2, abbr: "tennessee"}],
    [{name: "Wofford", seed: 15, abbr: "wofford"}]
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
