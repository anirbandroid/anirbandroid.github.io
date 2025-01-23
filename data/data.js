﻿//MAIN MENU PATH
var menu = [{ "id": "menu1", "name": "MOCKTAILS & HOT BEVERAGES", "icon": "" },
    { "id": "menu2", "name": "CHAAT COUNTER", "icon": "" },
    { "id": "menu3", "name": "APPETIZER VEG", "icon": "<i class='fa fa-adjust' style='color: #38da34'></i>" },
    { "id": "menu4", "name": "APPETIZER NON-VEG", "icon": "<i class='fa fa-adjust' style='color: #ff0000'></i>" },
    { "id": "menu5", "name": "DEESERT", "icon": "" },
    { "id": "menu6", "name": "INTERNATIONAL DEESERT", "icon": "" }];

//MOCKTAILS & HOT BEVERAGES
var mocktailsbv = [{ "id": "mk1", "name": "Virgin Mojito", "icon": "virginmohito1.jpg" },
    { "id": "mk2", "name": "Sherry Temple", "icon": "sherrytemple1.jpg" },
    { "id": "mk3", "name": "Lemon Bliss", "icon": "lemonbliss1.jpg" },
    { "id": "mk4", "name": "Lemon Soda", "icon": "lemonsoda1.jpg" },
    { "id": "mk5", "name": "Kolkata Cutting Chai(with Toast)", "icon": "kolkatachai1.jpg" },
    { "id": "mk6", "name": "Freshly Brewed Hot Coffee", "icon": "coffee1.jpg" },
    { "id": "mk7", "name": "Cold Coffee", "icon": "coffee1.jpg" },
    { "id": "mk8", "name": "Kashmiri Kahwa", "icon": "khawa1.jpg" },
    { "id": "mk9", "name": "Fruit Punch", "icon": "fruitpunch.png" },
    { "id": "mk10", "name": "Soft Drinks", "icon": "softdrinks.jpg" }];

//CHAAT COUNTER
var chat = [{ "id": "ch1", "name": "Kolkata'r Fuchka", "icon": "golgoppa1.jpg" },
    { "id": "ch2", "name": "Ranchi Aloo Tikki with Ghugni Matar", "icon": "alutikkighognimatar1.jpg" },
    { "id": "ch3", "name": "Delhi Ragra Chat with Kulcha", "icon": "dilliragrachaatkulcha1.jpg" },
    { "id": "ch4", "name": "Jodhpur Bhalla Papri Chat", "icon": "bhallapaprichaat1.jpg" },
    { "id": "ch5", "name": "Rajkot Cream Bhalla", "icon": "creambhalla1.jpg" },
    { "id": "ch6", "name": "Indori Raj Kahori Chat", "icon": "rajkachorichat1.jpg" },
    { "id": "ch7", "name": "Mumbai Bhel Chat", "icon": "indianbhelcha1.jpg" }];

//STARTER VEG
var starterVeg = [{ "id": "sv1", "name": "Paneer Kathi Roll", "icon": "paneerkatthitoll1.jpg" },
    { "id": "sv2", "name": "Veg Spring Roll", "icon": "vegspringroll1.png" },
    { "id": "sv3", "name": "Cheese Garlic Mushroom", "icon": "cheesegarlicmushroom1.jpg" },
    { "id": "sv4", "name": "Cheese Balls", "icon": "cheeseball1.jpg" },
    { "id": "sv5", "name": "Panskura Vegetable Chop", "icon": "vegetablechop1.jpg" },
    { "id": "sv6", "name": "Darjeeling Cheese Wonton", "icon": "cheesewonton1.jpg" },
    { "id": "sv7", "name": "Bhatinda Paneer Tikka", "icon": "paneertikka1.jpg" },
    { "id": "sv8", "name": "Paneer Chilli", "icon": "paneertikka1.jpg" },
    { "id": "sv9", "name": "Veg Manchurian", "icon": "vegmanchurian.jpg" },
    { "id": "sv10", "name": "Honey Chilli Potatoes", "icon": "honeychillipotates.jpg" },
    { "id": "sv11", "name": "Crispy Fried Vegetables", "icon": "crispyfriedvegetables.png" },
    { "id": "sv12", "name": "Sikkim Veg Hakka Noddles", "icon": "veghakkanoddles.jpg" },
    { "id": "sv13", "name": "Bihar Special Litti Chokha", "icon": "littichokha.png" }];

//STARTER NON-VEG
var starterNonVeg = [{ "id": "snv1", "name": "Guwahati Chilli Chicken", "icon": "chillichicken1.jpg" },
    { "id": "snv2", "name": "Goan Herb Fried Prawns", "icon": "herbfriedprawns1.jpg" },
    { "id": "snv3", "name": "Lucknowi Mutton Galawti Kebab", "icon": "muttongelowtikebab1.jpg" },
    { "id": "snv4", "name": "Beer Batter Fried Fish", "icon": "beerbatterfriedfish1.jpg" },
    { "id": "snv5", "name": "Mutton Seekh Kebab", "icon": "muttonsheekkebab1.jpg" },
    { "id": "snv6", "name": "Chicken Jaiselmeri Tikka", "icon": "chichkenjaselmeritikka1.jpg" },
    { "id": "snv7", "name": "Chicken in Hot Garlic", "icon": "chichkenjaselmeritikka1.jpg" }];

//DESERT
var desert = [{ "id": "ds1", "name": "Patiala Moong Dal Ka Halwa", "icon": "moongdalhalwa1.jpg" },
    { "id": "ds2", "name": "Nalen Gur Baked Rasogolla", "icon": "bakedrasgulla2.jpg" },
    { "id": "ds3", "name": "Kesar Pista Rasmalai", "icon": "kesarpistarasmalai1.jpg" },
    { "id": "ds4", "name": "Benaras ka Kesariya Jalebi with Rabri", "icon": "kesarijalbewithrabri1.jpg" },
    { "id": "ds5", "name": "Tutti Frutti", "icon": "tutifruti1.jpg" },
    { "id": "ds6", "name": "Belgium Dark Chocolate Pudding", "icon": "darkchocolatepudding1.jpg" },
    { "id": "ds7", "name": "Hot Chocolate Brownie with Vanilla", "icon": "hotchocolatebrowniewithvanilla1.jpg" },
    { "id": "ds8", "name": "Ice Cream", "icon": "icecream1.jpg" }];

//DESERT
var indesert = [];

var tableimage = [{ "id": "tbl1", "name": "pending", "icon": "tableorder.png" },
    { "id": "tbl2", "name": "open", "icon": "tableopen.png" },
    { "id": "tbl3", "name": "delivered", "icon": "tabledelivered.png" }];