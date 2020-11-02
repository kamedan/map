
    const magasins = [
      {id:"01", link:"https://noz-clickandcollect.com/amberieuenbugey/" ,name:"AMBERIEU EN BUGEY"},
      {id:"80", link:"https://noz-clickandcollect.com/amiens/" ,name:"AMIENS"},
      {id:"44", link:"https://noz-clickandcollect.com/ancenis/" ,name:"ANCENIS"},
      {id:"62", link:"https://noz-clickandcollect.com/bapaume/" ,name:"BAPAUME"},
      {id:"10", link:"https://noz-clickandcollect.com/barberey/" ,name:"BARBEREY ST SULPICE"},
      {id:"90", link:"https://noz-clickandcollect.com/belfort/" ,name:"BELFORT"},
      {id:"25", link:"https://noz-clickandcollect.com/besancon/" ,name:"BESANCON"},
      {id:"01", link:"https://noz-clickandcollect.com/bourgenbresse/" ,name:"BOURG EN BRESSE"},
      {id:"79", link:"https://noz-clickandcollect.com/bressuire/" ,name:"BRESSUIRE"},
      {id:"56", link:"https://noz-clickandcollect.com/caudan/" ,name:"CAUDAN"},
      {id:"71", link:"https://noz-clickandcollect.com/chaintre/" ,name:"CHAINTRE"},
      {id:"60", link:"https://noz-clickandcollect.com/chambly/" ,name:"CHAMBLY"},
      {id:"39", link:"https://noz-clickandcollect.com/champagnole/" ,name:"CHAMPAGNOLE"},
      {id:"35", link:"https://noz-clickandcollect.com/chantepie/" ,name:"CHANTEPIE"},
      {id:"28", link:"https://noz-clickandcollect.com/chateaudun/" ,name:"CHATEAUDUN"},
      {id:"86", link:"https://noz-clickandcollect.com/chatellerault/" ,name:"CHATELLERAULT"},
      {id:"52", link:"https://noz-clickandcollect.com/chaumont/" ,name:"CHAUMONT"},
      {id:"79", link:"https://noz-clickandcollect.com/chauray/" ,name:"CHAURAY"},
      {id:"60", link:"https://noz-clickandcollect.com/clermont/" ,name:"CLERMONT"},
      {id:"16", link:"https://noz-clickandcollect.com/cognac/" ,name:"COGNAC"},
      {id:"03", link:"https://noz-clickandcollect.com/commentry/" ,name:"COMMENTRY"},
      {id:"29", link:"https://noz-clickandcollect.com/concarneau/" ,name:"CONCARNEAU"},
      {id:"51", link:"https://noz-clickandcollect.com/cormontreuil/" ,name:"CORMONTREUIL"},
      {id:"77", link:"https://noz-clickandcollect.com/coulommiers/" ,name:"COULOMMIERS"},
      {id:"62", link:"https://noz-clickandcollect.com/courrieres/" ,name:"COURRIERES"},
      {id:"03", link:"https://noz-clickandcollect.com/creuzierlevieux/" ,name:"CREUZIER LE VIEUX"},
      {id:"14", link:"https://noz-clickandcollect.com/divessurmer/" ,name:"DIVES SUR MER"},
      {id:"62", link:"https://noz-clickandcollect.com/divion/" ,name:"DIVION"},
      {id:"51", link:"https://noz-clickandcollect.com/dizy/" ,name:"DIZY"},
      {id:"39", link:"https://noz-clickandcollect.com/dole/" ,name:"DOLE"},
      {id:"91", link:"https://noz-clickandcollect.com/etampes/" ,name:"ETAMPES"},
      {id:"76", link:"https://noz-clickandcollect.com/eu" ,name:"EU"},
      {id:"27", link:"https://noz-clickandcollect.com/evreux/" ,name:"EVREUX"},
      {id:"42", link:"https://noz-clickandcollect.com/feurs/" ,name:"FEURS"},
      {id:"80", link:"https://noz-clickandcollect.com/flixecourt/" ,name:"FLIXECOURT"},
      {id:"85", link:"https://noz-clickandcollect.com/fontenayleconte/" ,name:"FONTENAY LE CONTE"},
      {id:"76", link:"https://noz-clickandcollect.com/franqueville/" ,name:"FRANQUEVILLE"},
      {id:"29", link:"https://noz-clickandcollect.com/gouesnou/" ,name:"GOUESNOU"},
      {id:"76", link:"https://noz-clickandcollect.com/gournayenbray/" ,name:"GOURNAY EN BRAY"},
      {id:"23", link:"https://noz-clickandcollect.com/gueret/" ,name:"GUERET"},
      {id:"71", link:"https://noz-clickandcollect.com/gueugnon/" ,name:"GUEUGNON"},
      {id:"22", link:"https://noz-clickandcollect.com/guingamp/" ,name:"GUINGAMP"},
      {id:"68", link:"https://noz-clickandcollect.com/horbourg/" ,name:"HORBOURG"},
      {id:"68", link:"https://noz-clickandcollect.com/illzach/" ,name:"ILLZACH"},
      {id:"29", link:"https://noz-clickandcollect.com/landerneau/" ,name:"LANDERNEAU"},
      {id:"22", link:"https://noz-clickandcollect.com/lannion/" ,name:"LANNION"},
      {id:"02", link:"https://noz-clickandcollect.com/laon/" ,name:"LAON"},
      {id:"55", link:"https://noz-clickandcollect.com/longevilleenbarrois/" ,name:"LONGEVILLE EN BARROIS"},
      {id:"56", link:"https://noz-clickandcollect.com/lorient/" ,name:"LORIENT"},
      {id:"22", link:"https://noz-clickandcollect.com/loudeac/" ,name:"LOUDEAC"},
      {id:"54", link:"https://noz-clickandcollect.com/luneville/" ,name:"LUNÉVILLE"},
      {id:"28", link:"https://noz-clickandcollect.com/maintenon/" ,name:"MAINTENON"},
      {id:"63", link:"https://noz-clickandcollect.com/malauzat/" ,name:"MALAUZAT"},
      {id:"21", link:"https://noz-clickandcollect.com/marsannaylacote/" ,name:"MARSANNAY LA COTE"},
      {id:"27", link:"https://noz-clickandcollect.com/menneval/" ,name:"MENNEVAL"},
      {id:"67", link:"https://noz-clickandcollect.com/mertzwiller/" ,name:"MERTZWILLER"},
      {id:"01", link:"https://noz-clickandcollect.com/meximieux/" ,name:"MEXIMIEUX"},
      {id:"60", link:"https://noz-clickandcollect.com/montataire/" ,name:"MONTATAIRE"},
      {id:"21", link:"https://noz-clickandcollect.com/montbard/" ,name:"MONTBARD "},
      {id:"29", link:"https://noz-clickandcollect.com/morlaix/" ,name:"MORLAIX "},
      {id:"68", link:"https://noz-clickandcollect.com/morschwiller/" ,name:"MORSCHWILLER"},
      {id:"59", link:"https://noz-clickandcollect.com/nieppe/" ,name:"NIEPPE"},
      {id:"79", link:"https://noz-clickandcollect.com/niort/" ,name:"NIORT"},
      {id:"70", link:"https://noz-clickandcollect.com/noidanslesvesoul/" ,name:"NOIDANS LES VESOUL"},
      {id:"60", link:"https://noz-clickandcollect.com/noyon/" ,name:"NOYON"},
      {id:"85", link:"https://noz-clickandcollect.com/olonnesurmer/" ,name:"OLLONE SUR MER"},
      {id:"71", link:"https://noz-clickandcollect.com/paraylemonial/" ,name:"PARAY LE MONIAL"},
      {id:"79", link:"https://noz-clickandcollect.com/parthenay/" ,name:"PARTHENAY "},
      {id:"80", link:"https://noz-clickandcollect.com/peronne/" ,name:"PERONNE"},
      {id:"56", link:"https://noz-clickandcollect.com/pluneret/" ,name:"PLUNERET"},
      {id:"86", link:"https://noz-clickandcollect.com/poitiers/" ,name:"POITIERS"},
      {id:"27", link:"https://noz-clickandcollect.com/pontaudemer/" ,name:"PONT AUDEMER "},
      {id:"56", link:"https://noz-clickandcollect.com/pontivy/" ,name:"PONTIVY"},
      {id:"59", link:"https://noz-clickandcollect.com/proville/" ,name:"PROVILLE"},
      {id:"51", link:"https://noz-clickandcollect.com/reims/" ,name:"REIMS "},
      {id:"35", link:"https://noz-clickandcollect.com/rennes2/" ,name:"RENNES 2"},
      {id:"42", link:"https://noz-clickandcollect.com/roanne2/" ,name:"ROANNE"},
      {id:"42", link:"https://noz-clickandcollect.com/roanneperreux/" ,name:"ROANNE PERREUX"},
      {id:"10", link:"https://noz-clickandcollect.com/romillysurseine/" ,name:"ROMILLY SUR SEINE "},
      {id:"17", link:"https://noz-clickandcollect.com/saintes/" ,name:"SAINTES"},
      {id:"57", link:"https://noz-clickandcollect.com/sarrebourg/" ,name:"SARREBOURG"},
      {id:"77", link:"https://noz-clickandcollect.com/savignyletemple/" ,name:"SAVIGNY LE TEMPLE"},
      {id:"08", link:"https://noz-clickandcollect.com/sedan/" ,name:"SEDAN"},
      {id:"02", link:"https://noz-clickandcollect.com/soissons/" ,name:"SOISSONS"},
      {id:"53", link:"https://noz-clickandcollect.com/saintberthevin/" ,name:"ST BERTHEVIN"},
      {id:"22", link:"https://noz-clickandcollect.com/stbrieuc/" ,name:"ST BRIEUC "},
      {id:"39", link:"https://noz-clickandcollect.com/stclaude/" ,name:"ST CLAUDE"},
      {id:"52", link:"https://noz-clickandcollect.com/saintdizier/" ,name:"ST DIZIER"},
      {id:"88", link:"https://noz-clickandcollect.com/remiremont/" ,name:"ST ETIENNE LES REMIREMONT"},
      {id:"17", link:"https://noz-clickandcollect.com/stjeandangely/" ,name:"ST JEAN D ANGELY"},
      {id:"10", link:"https://noz-clickandcollect.com/saintparresauxtertres/" ,name:"ST PARRES AUX TERTRES"},
      {id:"59", link:"https://noz-clickandcollect.com/stpolsurmer/" ,name:"ST POL SUR MER "},
      {id:"77", link:"https://noz-clickandcollect.com/soupplets/" ,name:"ST SOUPPLETS"},
      {id:"63", link:"https://noz-clickandcollect.com/thiers/" ,name:"THIERS "},
      {id:"57", link:"https://noz-clickandcollect.com/thionville/" ,name:"THIONVILLE"},
      {id:"79", link:"https://noz-clickandcollect.com/thouars/" ,name:"THOUARS"},
      {id:"38", link:"https://noz-clickandcollect.com/tignieujameyzieu/" ,name:"TIGNIEU JAMEYZIEU"},
      {id:"17", link:"https://noz-clickandcollect.com/tonnaycharente/" ,name:"TONNAY CHARENTE"},
      {id:"59", link:"https://noz-clickandcollect.com/tourcoing/" ,name:"TOURCOING"},
      {id:"22", link:"https://noz-clickandcollect.com/tregueux/" ,name:"TREGUEUX"},
      {id:"56", link:"https://noz-clickandcollect.com/vannes/" ,name:"VANNES"},
      {id:"41", link:"https://noz-clickandcollect.com/vendome/" ,name:"VENDÔME"},
      {id:"28", link:"https://noz-clickandcollect.com/vernouillet/" ,name:"VERNOUILLET"},
      {id:"91", link:"https://noz-clickandcollect.com/vigneuxsurseine/" ,name:"VIGNEUX SUR SEINE"},
      {id:"02", link:"https://noz-clickandcollect.com/cotterets/cotterets/" ,name:"VILLIERS COTTERETS"},
      {id:"57", link:"https://noz-clickandcollect.com/woippy/" ,name:"WOIPPY"},
      {id:"03", link:"https://noz-clickandcollect.com/yzeure/" ,name:"YZEURE"}
];



const departements = [
    {
      "num_dep": "01",
      "dep_name": "Ain",
      "region_name": "Auvergne-Rhône-Alpes"
    },
    {
      "num_dep": "02",
      "dep_name": "Aisne",
      "region_name": "Hauts-de-France"
    },
    {
      "num_dep": "03",
      "dep_name": "Allier",
      "region_name": "Auvergne-Rhône-Alpes"
    },
    {
      "num_dep": "04",
      "dep_name": "Alpes-de-Haute-Provence",
      "region_name": "Provence-Alpes-Côte d'Azur"
    },
    {
      "num_dep": "05",
      "dep_name": "Hautes-Alpes",
      "region_name": "Provence-Alpes-Côte d'Azur"
    },
    {
      "num_dep": "06",
      "dep_name": "Alpes-Maritimes",
      "region_name": "Provence-Alpes-Côte d'Azur"
    },
    {
      "num_dep": "07",
      "dep_name": "Ardèche",
      "region_name": "Auvergne-Rhône-Alpes"
    },
    {
      "num_dep": "08",
      "dep_name": "Ardennes",
      "region_name": "Grand Est"
    },
    {
      "num_dep": "09",
      "dep_name": "Ariège",
      "region_name": "Occitanie"
    },
    {
      "num_dep": "10",
      "dep_name": "Aube",
      "region_name": "Grand Est"
    },
    {
      "num_dep": "11",
      "dep_name": "Aude",
      "region_name": "Occitanie"
    },
    {
      "num_dep": "12",
      "dep_name": "Aveyron",
      "region_name": "Occitanie"
    },
    {
      "num_dep": "13",
      "dep_name": "Bouches-du-Rhône",
      "region_name": "Provence-Alpes-Côte d'Azur"
    },
    {
      "num_dep": "14",
      "dep_name": "Calvados",
      "region_name": "Normandie"
    },
    {
      "num_dep": "15",
      "dep_name": "Cantal",
      "region_name": "Auvergne-Rhône-Alpes"
    },
    {
      "num_dep": "16",
      "dep_name": "Charente",
      "region_name": "Nouvelle-Aquitaine"
    },
    {
      "num_dep": "17",
      "dep_name": "Charente-Maritime",
      "region_name": "Nouvelle-Aquitaine"
    },
    {
      "num_dep": "18",
      "dep_name": "Cher",
      "region_name": "Centre-Val de Loire"
    },
    {
      "num_dep": "19",
      "dep_name": "Corrèze",
      "region_name": "Nouvelle-Aquitaine"
    },
    {
      "num_dep": "21",
      "dep_name": "Côte-d'Or",
      "region_name": "Bourgogne-Franche-Comté"
    },
    {
      "num_dep": "22",
      "dep_name": "Côtes-d'Armor",
      "region_name": "Bretagne"
    },
    {
      "num_dep": "23",
      "dep_name": "Creuse",
      "region_name": "Nouvelle-Aquitaine"
    },
    {
      "num_dep": "24",
      "dep_name": "Dordogne",
      "region_name": "Nouvelle-Aquitaine"
    },
    {
      "num_dep": "25",
      "dep_name": "Doubs",
      "region_name": "Bourgogne-Franche-Comté"
    },
    {
      "num_dep": "26",
      "dep_name": "Drôme",
      "region_name": "Auvergne-Rhône-Alpes"
    },
    {
      "num_dep": "27",
      "dep_name": "Eure",
      "region_name": "Normandie"
    },
    {
      "num_dep": "28",
      "dep_name": "Eure-et-Loir",
      "region_name": "Centre-Val de Loire"
    },
    {
      "num_dep": "29",
      "dep_name": "Finistère",
      "region_name": "Bretagne"
    },
    {
      "num_dep": "30",
      "dep_name": "Gard",
      "region_name": "Occitanie"
    },
    {
      "num_dep": "31",
      "dep_name": "Haute-Garonne",
      "region_name": "Occitanie"
    },
    {
      "num_dep": "32",
      "dep_name": "Gers",
      "region_name": "Occitanie"
    },
    {
      "num_dep": "33",
      "dep_name": "Gironde",
      "region_name": "Nouvelle-Aquitaine"
    },
    {
      "num_dep": "34",
      "dep_name": "Hérault",
      "region_name": "Occitanie"
    },
    {
      "num_dep": "35",
      "dep_name": "Ille-et-Vilaine",
      "region_name": "Bretagne"
    },
    {
      "num_dep": "36",
      "dep_name": "Indre",
      "region_name": "Centre-Val de Loire"
    },
    {
      "num_dep": "37",
      "dep_name": "Indre-et-Loire",
      "region_name": "Centre-Val de Loire"
    },
    {
      "num_dep": "38",
      "dep_name": "Isère",
      "region_name": "Auvergne-Rhône-Alpes"
    },
    {
      "num_dep": "39",
      "dep_name": "Jura",
      "region_name": "Bourgogne-Franche-Comté"
    },
    {
      "num_dep": "40",
      "dep_name": "Landes",
      "region_name": "Nouvelle-Aquitaine"
    },
    {
      "num_dep": "41",
      "dep_name": "Loir-et-Cher",
      "region_name": "Centre-Val de Loire"
    },
    {
      "num_dep": "42",
      "dep_name": "Loire",
      "region_name": "Auvergne-Rhône-Alpes"
    },
    {
      "num_dep": "43",
      "dep_name": "Haute-Loire",
      "region_name": "Auvergne-Rhône-Alpes"
    },
    {
      "num_dep": "44",
      "dep_name": "Loire-Atlantique",
      "region_name": "Pays de la Loire"
    },
    {
      "num_dep": "45",
      "dep_name": "Loiret",
      "region_name": "Centre-Val de Loire"
    },
    {
      "num_dep": "46",
      "dep_name": "Lot",
      "region_name": "Occitanie"
    },
    {
      "num_dep": "47",
      "dep_name": "Lot-et-Garonne",
      "region_name": "Nouvelle-Aquitaine"
    },
    {
      "num_dep": "48",
      "dep_name": "Lozère",
      "region_name": "Occitanie"
    },
    {
      "num_dep": "49",
      "dep_name": "Maine-et-Loire",
      "region_name": "Pays de la Loire"
    },
    {
      "num_dep": "50",
      "dep_name": "Manche",
      "region_name": "Normandie"
    },
    {
      "num_dep": "51",
      "dep_name": "Marne",
      "region_name": "Grand Est"
    },
    {
      "num_dep": "52",
      "dep_name": "Haute-Marne",
      "region_name": "Grand Est"
    },
    {
      "num_dep": "53",
      "dep_name": "Mayenne",
      "region_name": "Pays de la Loire"
    },
    {
      "num_dep": "54",
      "dep_name": "Meurthe-et-Moselle",
      "region_name": "Grand Est"
    },
    {
      "num_dep": "55",
      "dep_name": "Meuse",
      "region_name": "Grand Est"
    },
    {
      "num_dep": "56",
      "dep_name": "Morbihan",
      "region_name": "Bretagne"
    },
    {
      "num_dep": "57",
      "dep_name": "Moselle",
      "region_name": "Grand Est"
    },
    {
      "num_dep": "58",
      "dep_name": "Nièvre",
      "region_name": "Bourgogne-Franche-Comté"
    },
    {
      "num_dep": "59",
      "dep_name": "Nord",
      "region_name": "Hauts-de-France"
    },
    {
      "num_dep": "60",
      "dep_name": "Oise",
      "region_name": "Hauts-de-France"
    },
    {
      "num_dep": "61",
      "dep_name": "Orne",
      "region_name": "Normandie"
    },
    {
      "num_dep": "62",
      "dep_name": "Pas-de-Calais",
      "region_name": "Hauts-de-France"
    },
    {
      "num_dep": "63",
      "dep_name": "Puy-de-Dôme",
      "region_name": "Auvergne-Rhône-Alpes"
    },
    {
      "num_dep": "64",
      "dep_name": "Pyrénées-Atlantiques",
      "region_name": "Nouvelle-Aquitaine"
    },
    {
      "num_dep": "65",
      "dep_name": "Hautes-Pyrénées",
      "region_name": "Occitanie"
    },
    {
      "num_dep": "66",
      "dep_name": "Pyrénées-Orientales",
      "region_name": "Occitanie"
    },
    {
      "num_dep": "67",
      "dep_name": "Bas-Rhin",
      "region_name": "Grand Est"
    },
    {
      "num_dep": "68",
      "dep_name": "Haut-Rhin",
      "region_name": "Grand Est"
    },
    {
      "num_dep": "69",
      "dep_name": "Rhône",
      "region_name": "Auvergne-Rhône-Alpes"
    },
    {
      "num_dep": "70",
      "dep_name": "Haute-Saône",
      "region_name": "Bourgogne-Franche-Comté"
    },
    {
      "num_dep": "71",
      "dep_name": "Saône-et-Loire",
      "region_name": "Bourgogne-Franche-Comté"
    },
    {
      "num_dep": "72",
      "dep_name": "Sarthe",
      "region_name": "Pays de la Loire"
    },
    {
      "num_dep": "73",
      "dep_name": "Savoie",
      "region_name": "Auvergne-Rhône-Alpes"
    },
    {
      "num_dep": "74",
      "dep_name": "Haute-Savoie",
      "region_name": "Auvergne-Rhône-Alpes"
    },
    {
      "num_dep": "75",
      "dep_name": "Paris",
      "region_name": "Île-de-France"
    },
    {
      "num_dep": "76",
      "dep_name": "Seine-Maritime",
      "region_name": "Normandie"
    },
    {
      "num_dep": "77",
      "dep_name": "Seine-et-Marne",
      "region_name": "Île-de-France"
    },
    {
      "num_dep": "78",
      "dep_name": "Yvelines",
      "region_name": "Île-de-France"
    },
    {
      "num_dep": "79",
      "dep_name": "Deux-Sèvres",
      "region_name": "Nouvelle-Aquitaine"
    },
    {
      "num_dep": "80",
      "dep_name": "Somme",
      "region_name": "Hauts-de-France"
    },
    {
      "num_dep": "81",
      "dep_name": "Tarn",
      "region_name": "Occitanie"
    },
    {
      "num_dep": "82",
      "dep_name": "Tarn-et-Garonne",
      "region_name": "Occitanie"
    },
    {
      "num_dep": "83",
      "dep_name": "Var",
      "region_name": "Provence-Alpes-Côte d'Azur"
    },
    {
      "num_dep": "84",
      "dep_name": "Vaucluse",
      "region_name": "Provence-Alpes-Côte d'Azur"
    },
    {
      "num_dep": "85",
      "dep_name": "Vendée",
      "region_name": "Pays de la Loire"
    },
    {
      "num_dep": "86",
      "dep_name": "Vienne",
      "region_name": "Nouvelle-Aquitaine"
    },
    {
      "num_dep": "87",
      "dep_name": "Haute-Vienne",
      "region_name": "Nouvelle-Aquitaine"
    },
    {
      "num_dep": "88",
      "dep_name": "Vosges",
      "region_name": "Grand Est"
    },
    {
      "num_dep": "89",
      "dep_name": "Yonne",
      "region_name": "Bourgogne-Franche-Comté"
    },
    {
      "num_dep": "90",
      "dep_name": "Territoire de Belfort",
      "region_name": "Bourgogne-Franche-Comté"
    },
    {
      "num_dep": "91",
      "dep_name": "Essonne",
      "region_name": "Île-de-France"
    },
    {
      "num_dep": "92",
      "dep_name": "Hauts-de-Seine",
      "region_name": "Île-de-France"
    },
    {
      "num_dep": "93",
      "dep_name": "Seine-Saint-Denis",
      "region_name": "Île-de-France"
    },
    {
      "num_dep": "94",
      "dep_name": "Val-de-Marne",
      "region_name": "Île-de-France"
    },
    {
      "num_dep": "95",
      "dep_name": "Val-d'Oise",
      "region_name": "Île-de-France"
    },
    
  ];