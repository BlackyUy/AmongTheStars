/**
 * Created by mbustamante on 5/7/15.
 */


var TOTALBASICLOCATIONS;
var TOTALSPECIALLOCATIONS;
var BASICTILENUMBER = [18,18,18,20,24];
var SPECIALTILENUMBER = [24,18,24,40,48]
var RACESTOSELECT=[2,3,4,5,6];
var TOTALRACES;
var db = openDatabase('mydb', '1.0', 'Test DB', 200 * 1024 * 1024);
var msg;

//var numberOfCards = 20;
//var turnTokenSize=10;

//var len;
function loadDatabase() {
    db.transaction(function (tx) {

        //BASIC LOCATIONS
        tx.executeSql("DROP TABLE IF EXISTS BasicLocations", [],
            function (tx, results) {
                console.log("Successfully Dropped")
            },
            function (tx, error) {
                console.log("Could not delete")
            }
        );
        tx.executeSql('CREATE TABLE IF NOT EXISTS BasicLocations (id unique, name, color, url, expansion)', [],
            function (tx, results) {
                console.log("Successfully Created Table")
            },
            function (tx, error) {
                console.log("Could not delete")
            }
        );


        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (1, "Fighter Launch Bay" , "Red", "http:","Base")', [],
            function (tx, results) {
                console.log("Successfully Inserted")
            },
            function (tx, error) {
                console.log("Could not delete")
            });
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (2, "Shield Generator" , "Red", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (3, "Turret" , "Red", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (4, "Experimental Weapon" , "Red", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (5, "High Security Area" , "Red", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (6, "Minefield" , "Red", "http:","The Ambassadors")');


        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (7, "Alien Bazaar" , "Yellow", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (8, "Customs" , "Yellow", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (9, "Energy Market" , "Yellow", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (10, "Factory" , "Yellow", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (11, "Shopping Centre" , "Yellow", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (12, "Trade Show" , "Yellow", "http:","The Ambassadors")');


        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (13, "Garden" , "Purple", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (14, "Holographic Display Area" , "Purple", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (15, "Restaurant" , "Purple", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (16, "Fast Food Drive-In" , "Purple", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (17, "Plaza" , "Purple", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (18, "Race Track" , "Purple", "http:","The Ambassadors")');


        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (19, "Ambassador Quarters" , "Green", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (20, "Council Room" , "Green", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (21, "Embassy Offices" , "Green", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (22, "Alliance Information Point" , "Green", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (23, "Ambassadorial Sector" , "Green", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (24, "Foreign Affairs Office" , "Green", "http:","The Ambassadors")');


        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (25, "Command Centre" , "Blue", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (26, "Crew Quarters" , "Blue", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (27, "Docking Bay" , "Blue", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (28, "Medical Facility" , "Blue", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (29, "Security Station" , "Blue", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (30, "Transportation Platform" , "Blue", "http:","Base")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (31, "Energy Stabilizers" , "Blue", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (32, "Escape Pods" , "Blue", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO BasicLocations (id, name, color, url, expansion ) VALUES (33, "Hydroponics" , "Blue", "http:","The Ambassadors")');


        //SPECIAL LOCATIONS

        tx.executeSql("DROP TABLE IF EXISTS SpecialLocations", [],
            function (tx, results) {
                console.log("Successfully Dropped SpecialLocations")
            },
            function (tx, error) {
                console.log("Could not delete")
            }
        );
        tx.executeSql('CREATE TABLE SpecialLocations (id unique, name , quantity, color, url, expansion)');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (1, "Alliance Fleet Base" ,2 , "Red", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (2, "Heavy Ion Cannon",2 , "Red", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (3, "Pilot Training Area",2 , "Red", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (4, "War Room",2 , "Red", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (5, "Turret", 1, "Red", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (6, "Dreadnought Shipyard",2 , "Red", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (7, "Energy Reserve",2 , "Red", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (8, "Privateer Bay",2 , "Red", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (9, "Defense Grid",2 , "Red", "http:","The Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (10, "Military Sector Gateway",2 , "Red", "http:","The Ambassadors Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (11, "Military Academy",1 , "Red", "http:","Reprint Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (12, "Recruitment Office",2 , "Red", "http:","Reprint Promos")');


        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (13, "Business Offices",2 , "Yellow", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (14, "Galactic Bank",2 , "Yellow", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (15, "Market Place",2 , "Yellow", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (16, "Trade Union Headquarters",2 , "Yellow", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (17, "Energy Lab",2 , "Yellow", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (18, "Galactic News Network",2 , "Yellow", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (19, "Treasury Of The Alliance",2 , "Yellow", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (20, "Galactic Expo",2 , "Yellow", "http:","The Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (21, "Business Sector Gateway",2 , "Yellow", "http:","The Ambassadors Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (22, "Mint",1 , "Yellow", "http:","Reprint Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (23, "Accounting Office",2 , "Yellow", "http:","Reprint Promos")');


        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (24, "Galactic Resort",2 , "Purple", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (25, "Observation Dome",2 , "Purple", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (26, "Opera House",2 , "Purple", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (27, "Sports Arena",2 , "Purple", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (28, "Library",2 , "Purple", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (29, "Tourist Reception Area",2 , "Purple", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (30, "War Monument",2 , "Purple", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (31, "Zero Gravity Area",2 , "Purple", "http:","The Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (32, "Casino Special Location",2 , "Purple", "http:","The Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (33, "Recreational Sector Gateway",2 , "Purple", "http:","The Ambassadors Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (34, "Artificial Environment",1 , "Purple", "http:","Reprint Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (35, "Theme Park",2 , "Purple", "http:","Reprint Promos")');


        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (36, "School of Alien Culture",2 , "Green", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (37, "Alien Temple",2 , "Green", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (38, "Alliance Headquarters",2 , "Green", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (39, "Galactic Research Facility",2 , "Green", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (40, "Conference Room",2 , "Green", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (41, "Cultural Centre",2 , "Green", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (42, "Planetary Aid Organization",2 , "Green", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (43, "Xenobiology Lab",2 , "Green", "http:","The Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (44, "Diplomatic Sector Gateway",2 , "Green", "http:","The Ambassadors Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (45, "Alliance High Council",1 , "Green", "http:","Reprint Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (46, "Immigration Office",2 , "Green", "http:","Reprint Promos")');


        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (47, "Backup Reactor",2 , "Blue", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (48, "Cargo Hold",2 , "Blue", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (49, "Communications Beacon",2 , "Blue", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (50, "Life Support Systems",2 , "Blue", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (51, "Solar Panels",2 , "Blue", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (52, "Transportation Platform",2 , "Blue", "http:","Base")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (53, "Archives",2 , "Blue", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (54, "Data Centre",2 , "Blue", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (55, "Maintenance Department",2 , "Blue", "http:","The Ambassadors")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (56, "Waste Processing Facility",2 , "Blue", "http:","The Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (57, "Administrative Sector Gateway",2 , "Blue", "http:","The Ambassadors Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (58, "Starport",2 , "Blue", "http:","Reprint Promos")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (59, "Sectional Command Office",1 , "Blue", "http:","Reprint Promos")');


        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (60, "Alien Museum",2 , "Purple/Green", "http:","Dual expansion 1")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (61, "Galactic Court",2 , "Green/Blue", "http:","Dual Set 1")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (62, "Holdic Cells",2 , "Blue/Red", "http:","Dual Set 1")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (63, "Hotel",2 , "Yellow/Purple", "http:","Dual Set 1")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (64, "Ship Repair Facility",2 , "Red/Yellow", "http:","Dual Set 1")');

        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (65, "Alliance Strategic Command",2 , "Red/Green", "http:","Dual Set 2")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (66, "Galactic Trade Centre",2 , "Green/Yellow", "http:","Dual Set 2")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (67, "Logistics Facility",2 , "Yellow/Blue", "http:","Dual Set 2")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (68, "Mess Hall",2 , "Blue/Red", "http:","Dual Set 2")');
        tx.executeSql('INSERT INTO SpecialLocations (id, name, quantity, color, url, expansion ) VALUES (69, "Space Combat Simulator",2 , "Purple/Red", "http:","Dual Set 2")');


        //RACES

        tx.executeSql("DROP TABLE IF EXISTS Races", [],
            function (tx, results) {
                console.log("Successfully Dropped Races")
            },
            function (tx, error) {
                console.log("Could not delete")
            }
        );
        tx.executeSql('CREATE TABLE Races (id unique, name, url, expansion)');
        tx.executeSql('INSERT INTO Races (id, name, url, expansion) VALUES (1,"GarrnAthakNok","http","Base" )', [],
            function (tx, results) {
                console.log("Successfully Dropped Races")
            },
            function (tx, error) {
                console.log("Could not delete")
            }
        );
        tx.executeSql('INSERT INTO Races (id, name, url, expansion) VALUES (2,"Humareen","http","Base" )');
        tx.executeSql('INSERT INTO Races (id, name, url, expansion) VALUES (3,"Minireen","http","Base" )');
        tx.executeSql('INSERT INTO Races (id, name, url, expansion) VALUES (4,"Qualeen","http","Base" )');
        tx.executeSql('INSERT INTO Races (id, name, url, expansion) VALUES (5,"Sheptas","http","Base" )');
        tx.executeSql('INSERT INTO Races (id, name, url, expansion) VALUES (6,"Sissaurians","http","Base" )');
        tx.executeSql('INSERT INTO Races (id, name, url, expansion) VALUES (7,"Vak","http","Base" )');
        tx.executeSql('INSERT INTO Races (id, name, url, expansion) VALUES (8,"Zehuti","http","Base" )');
        tx.executeSql('INSERT INTO Races (id, name, url, expansion) VALUES (9,"Debos","http","Promos" )');
        tx.executeSql('INSERT INTO Races (id, name, url, expansion) VALUES (10,"Nyxtos","http","Promos" )');
        tx.executeSql('INSERT INTO Races (id, name, url, expansion) VALUES (11,"Ludons","http","The Ambassadors Promos" )');
        tx.executeSql('INSERT INTO Races (id, name, url, expansion) VALUES (12,"Feronsy","http","Reprint Promos" )');
        tx.executeSql('INSERT INTO Races (id, name, url, expansion) VALUES (13,"Monzeerian","http","Reprint Promos" )');
        tx.executeSql('INSERT INTO Races (id, name, url, expansion) VALUES (14,"Hythian","http","BoardGameGeek Promos" )');
        tx.executeSql('INSERT INTO Races (id, name, url, expansion) VALUES (15,"Wiss","http","BoardGameGeek Promos" )');


        msg = '<p>Log message created and row inserted.</p>';
        console.log(msg);
        //document.querySelector('#status').innerHTML = msg;


    })


    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM BasicLocations', [], function (tx, results) {


            TOTALBASICLOCATIONS = results.rows.length;


            msg = "<p>Found rows: " + TOTALBASICLOCATIONS + "</p>";
            //document.querySelector('#status').innerHTML += msg;
            console.log(msg);
            for (i = 0; i < TOTALBASICLOCATIONS; i++) {
                msg = "<p><b>" + results.rows.item(i).name + "</b></p>";
                //document.querySelector('#status').innerHTML += msg;
                console.log(msg);
            }
        }, null);
    });
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM SpecialLocations', [], function (tx, results) {


            TOTALSPECIALLOCATIONS = results.rows.length;


            msg = "<p>Found rows: " + TOTALSPECIALLOCATIONS + "</p>";
            //document.querySelector('#status').innerHTML += msg;
            console.log(msg);
            for (i = 0; i < TOTALSPECIALLOCATIONS; i++) {
                msg = "<p><b>" + results.rows.item(i).name + "</b></p>";
               // document.querySelector('#status').innerHTML += msg;
                console.log(msg);
            }
        }, null);
    });

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Races', [], function (tx, results) {

            TOTALRACES = results.rows.length;


            msg = "<p>Found rows: " + TOTALRACES + "</p>";
            //document.querySelector('#status').innerHTML += msg;
            console.log(msg);
            for (i = 0; i < TOTALRACES; i++) {
                msg = "<p><b>" + results.rows.item(i).name + "</b></p>";
                //document.querySelector('#status').innerHTML += msg;
                console.log(msg);
            }
        }, null);
    });
}

function randomizeBasicTiles(){db.transaction(function (tx){
    msg ='';
    var playerCount = document.getElementById('NumberOfPlayers');
    var numberOfTiles = BASICTILENUMBER[playerCount.selectedIndex];

    var questionString='';
    var min = 1;
    var max = TOTALBASICLOCATIONS;
    var tileList = fullRandArray(numberOfTiles, TOTALBASICLOCATIONS);
    for (i = 0; i<numberOfTiles; i++){
        questionString +='?,';

    }
    questionString = questionString.substring(0, questionString.length-1);

    var rand = randomIntFromInterval(min,max);
    tx.executeSql('select * from BasicLocations where id  in ('+ questionString +')', tileList, function (tx, results){
        var largo = results.rows.length;
        msg+='<ul data-role="listview" class="ui-listview ui-listview-inset ui-corner-all ui-shadow">' +
            '<li data-role="list-divider" role="heading" class="ui-li-divider ui-bar-a ui-first-child"> total Tiles: ' + largo +"</li>";

        for (i = 0; i<largo;i++) {
            msg += '<li class="ui-li-static ui-body-inherit">' + results.rows.item(i).name + ' - ' + results.rows.item(i).color + ' - ' + results.rows.item(i).expansion + "</li>";

        }
        msg+= "</ul>";
        document.querySelector('#basic').innerHTML=msg;
    });
})
};

function randomIntFromInterval(min,max)
{

    var theNum = Math.floor(Math.random()*(max-min+1)+min);
    return  theNum;

}

function fullRandArray(quantity, maximumNumber){
    var listOfNumbers = [];
    for(var i = 0; i<quantity;i++){
        listOfNumbers[i]=noRepeats(listOfNumbers, maximumNumber);
    }
    return listOfNumbers;
}


function noRepeats(listOfNumbers , maximumNumber) {
    var num = randomIntFromInterval(1, maximumNumber);
    if (listOfNumbers.indexOf(num) < 0) {

        return num;
    }

    else {
        return noRepeats(listOfNumbers, maximumNumber);
    }
}

function randomizeSpecialTiles(){db.transaction(function (tx){
    msg ='';
    var playerCount = document.getElementById('NumberOfPlayers');
    var numberOfTiles = SPECIALTILENUMBER[playerCount.selectedIndex];
    var questionString='';
    var min = 1;
    var max = TOTALSPECIALLOCATIONS;
    var tileList = fullRandArray(numberOfTiles, TOTALSPECIALLOCATIONS);
    for (i = 0; i<numberOfTiles; i++){
        questionString +='?,';

    }
    questionString = questionString.substring(0, questionString.length-1);


    var rand = randomIntFromInterval(min,max);
    tx.executeSql('select * from SpecialLocations where id  in ('+ questionString +')', tileList, function (tx, results){
        var largo = results.rows.length;
        msg+='<ul data-role="listview" class="ui-listview ui-listview-inset ui-corner-all ui-shadow">' +
        '<li data-role="list-divider" role="heading" class="ui-li-divider ui-bar-a ui-first-child"> total Tiles: ' + largo +"</li>";

        for (i = 0; i<largo;i++) {
            msg += '<li class="ui-li-static ui-body-inherit">' + results.rows.item(i).name + ' - ' + results.rows.item(i).color + ' - ' + results.rows.item(i).expansion + "</li>";
        }
        msg+= "</ul>";
        document.querySelector('#special').innerHTML=msg;
        //document.querySelector('#special').innerHTML=msg;
    });
})
};

function randomizeRaces(){db.transaction(function (tx){
    msg ='';
    var playerCount = document.getElementById('NumberOfPlayers');
    var numberOfTiles = RACESTOSELECT[playerCount.selectedIndex];

    var questionString='';
    var min = 1;
    var max = TOTALRACES;
    var tileList = fullRandArray(numberOfTiles, TOTALRACES);
    for (i = 0; i<numberOfTiles; i++){
        questionString +='?,';

    }
    questionString = questionString.substring(0, questionString.length-1);


    var rand = randomIntFromInterval(min,max);
    tx.executeSql('select * from Races where id  in ('+ questionString +')', tileList, function (tx, results){
        var largo = results.rows.length;
        msg+='<ul data-role="listview" class="ui-listview ui-listview-inset ui-corner-all ui-shadow">' +
        '<li data-role="list-divider" role="heading" class="ui-li-divider ui-bar-a ui-first-child"> Race Tiles: ' + largo +"</li>";

        for (i = 0; i<largo;i++) {
            msg += '<li class="ui-li-static ui-body-inherit">Player ' + (i+1) + ' -  ' + results.rows.item(i).name+ "</li>";
        }
        msg+= "</ul>";
        document.querySelector('#races').innerHTML=msg;
    });
})
};

function loadAllThree(){
    randomizeBasicTiles();
    randomizeRaces();
    randomizeSpecialTiles();
};



