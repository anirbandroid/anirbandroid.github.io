//MAIN MENU PATH
var counters = [{ "id": "counter1", "name": "Mocktails & Beverages", "icon": "" },
    { "id": "counter2", "name": "Desi Chaat", "icon": "" },
    { "id": "counter3", "name": "Appetizer Veg", "icon": "<i class='fa fa-adjust' style='color: #38da34'></i>" },
    { "id": "counter4", "name": "Appetizer Non-Veg", "icon": "<i class='fa fa-adjust' style='color: #ff0000'></i>" },
    { "id": "counter5", "name": "Chinese", "icon": "" },
    { "id": "counter6", "name": "Tandoor", "icon": "" },
    { "id": "counter7", "name": "Desert", "icon": "" },
    { "id": "counter8", "name": "Ice Creams", "icon": "" }];

//MOCKTAILS & HOT BEVERAGES
var mocktailsbv = [{ "id": "mk1", "name": "Virgin Mojito", "icon": "virginmohito1.jpg", "counter": "counter1"},
    { "id": "mk2", "name": "Sherry Temple", "icon": "sherrytemple1.jpg", "counter": "counter1" },
    { "id": "mk3", "name": "Lemon Bliss", "icon": "lemonbliss1.jpg", "counter": "counter1" },
    { "id": "mk4", "name": "Lemon Soda", "icon": "lemonsoda1.jpg", "counter": "counter1" },
    { "id": "mk5", "name": "Kolkata Cutting Chai(with Toast)", "icon": "kolkatachai1.jpg", "counter": "counter1" },
    { "id": "mk6", "name": "Freshly Brewed Hot Coffee", "icon": "coffee1.jpg", "counter": "counter1" },
    { "id": "mk7", "name": "Cold Coffee", "icon": "coffee1.jpg", "counter": "counter1" },
    { "id": "mk8", "name": "Kashmiri Kahwa", "icon": "khawa1.jpg", "counter": "counter1" },
    { "id": "mk9", "name": "Fruit Punch", "icon": "fruitpunch.png", "counter": "counter1" },
    { "id": "mk10", "name": "Soft Drinks", "icon": "softdrinks.jpg", "counter": "counter1" }];

//CHAAT COUNTER
var chat = [{ "id": "ch1", "name": "Kolkata'r Fuchka", "icon": "golgoppa1.jpg", "counter": "counter2" },
    { "id": "ch2", "name": "Ranchi Aloo Tikki with Ghugni Matar", "icon": "alutikkighognimatar1.jpg", "counter": "counter2" },
    { "id": "ch3", "name": "Delhi Ragra Chat with Kulcha", "icon": "dilliragrachaatkulcha1.jpg", "counter": "counter2" },
    { "id": "ch4", "name": "Jodhpur Bhalla Papri Chat", "icon": "bhallapaprichaat1.jpg", "counter": "counter2" },
    { "id": "ch5", "name": "Rajkot Cream Bhalla", "icon": "creambhalla1.jpg", "counter": "counter2" },
    { "id": "ch6", "name": "Indori Raj Kahori Chat", "icon": "rajkachorichat1.jpg", "counter": "counter2" },
    { "id": "ch7", "name": "Mumbai Bhel Chat", "icon": "indianbhelcha1.jpg", "counter": "counter2" }];

//STARTER VEG
var starterVeg = [{ "id": "sv1", "name": "Paneer Kathi Roll", "icon": "paneerkatthitoll1.jpg", "counter": "counter3" },
    { "id": "sv2", "name": "Veg Spring Roll", "icon": "vegspringroll1.png", "counter": "counter3" },
    { "id": "sv3", "name": "Cheese Garlic Mushroom", "icon": "cheesegarlicmushroom1.jpg", "counter": "counter3" },
    { "id": "sv4", "name": "Cheese Balls", "icon": "cheeseball1.jpg", "counter": "counter3" },
    { "id": "sv5", "name": "Panskura Vegetable Chop", "icon": "vegetablechop1.jpg", "counter": "counter3" },
    { "id": "sv6", "name": "Darjeeling Cheese Wonton", "icon": "cheesewonton1.jpg", "counter": "counter5" },
    { "id": "sv7", "name": "Bhatinda Paneer Tikka", "icon": "paneertikka1.jpg", "counter": "counter6" },
    { "id": "sv8", "name": "Paneer Chilli", "icon": "paneertikka1.jpg", "counter": "counter3" },
    { "id": "sv9", "name": "Veg Manchurian", "icon": "vegmanchurian.jpg", "counter": "counter5" },
    { "id": "sv10", "name": "Honey Chilli Potatoes", "icon": "honeychillipotates.jpg", "counter": "counter5" },
    { "id": "sv11", "name": "Crispy Fried Vegetables", "icon": "crispyfriedvegetables.png", "counter": "counter5" },
    { "id": "sv12", "name": "Sikkim Veg Hakka Noddles", "icon": "veghakkanoddles.jpg", "counter": "counter5" },
    { "id": "sv13", "name": "Bihar Special Litti Chokha", "icon": "littichokha.png", "counter": "counter2" }];

//STARTER NON-VEG
var starterNonVeg = [{ "id": "snv1", "name": "Guwahati Chilli Chicken", "icon": "chillichicken1.jpg", "counter": "counter5" },
    { "id": "snv2", "name": "Goan Herb Fried Prawns", "icon": "herbfriedprawns1.jpg", "counter": "counter4" },
    { "id": "snv3", "name": "Lucknowi Mutton Galawti Kebab", "icon": "muttongelowtikebab1.jpg", "counter": "counter6" },
    { "id": "snv4", "name": "Beer Batter Fried Fish", "icon": "beerbatterfriedfish1.jpg", "counter": "counter4" },
    { "id": "snv5", "name": "Mutton Seekh Kebab", "icon": "muttonsheekkebab1.jpg", "counter": "counter6" },
    { "id": "snv6", "name": "Chicken Jaiselmeri Tikka", "icon": "chichkenjaselmeritikka1.jpg", "counter": "counter6" },
    { "id": "snv7", "name": "Chicken in Hot Garlic", "icon": "chichkenjaselmeritikka1.jpg", "counter": "counter5" }];

//DESERT
var desert = [{ "id": "ds1", "name": "Patiala Moong Dal Ka Halwa", "icon": "moongdalhalwa1.jpg", "counter": "counter7" },
    { "id": "ds2", "name": "Nalen Gur Baked Rasogolla", "icon": "bakedrasgulla2.jpg", "counter": "counter7" },
    { "id": "ds3", "name": "Kesar Pista Rasmalai", "icon": "kesarpistarasmalai1.jpg", "counter": "counter7" },
    { "id": "ds4", "name": "Benaras ka Kesariya Jalebi with Rabri", "icon": "kesarijalbewithrabri1.jpg", "counter": "counter7" },
    { "id": "ds5", "name": "Tutti Frutti", "icon": "tutifruti1.jpg", "counter": "counter8" },
    { "id": "ds6", "name": "Belgium Dark Chocolate Pudding", "icon": "darkchocolatepudding1.jpg", "counter": "counter8" },
    { "id": "ds7", "name": "Hot Chocolate Brownie with Vanilla", "icon": "hotchocolatebrowniewithvanilla1.jpg", "counter": "counter8" },
    { "id": "ds8", "name": "Ice Cream", "icon": "icecream1.jpg", "counter": "counter8" }];

var tableimage = [{ "id": "tbl1", "name": "pending", "icon": "tableorder.png" },
    { "id": "tbl2", "name": "open", "icon": "tableopen.png" },
    { "id": "tbl3", "name": "delivered", "icon": "tabledelivered.png" }];