var sponsor = ['Marathon','Citi','Wells Fargo','Target','MetLife','Coca-Cola','Home Depot','Louisville Slugger','Ford','AT&T','Verizon','Bank of America','Pepsi',"Lowe's",'FedEx','American Airlines','Delta Air Lines','Southwest Airlines','Goodyear','Walgreens','Kroger'
,'General Motors','Exxon Mobil','Best Buy','Busch','Chase','Citizens Bank','Comerica','Coors','Globe Life','Great American','Miller','PNC','Progressive','Safeco','Tropicana','BB&T','Huntington','Fifth Third','AutoZone','Prudential']

var title = ['Park','Field','Stadium','Ballpark','Diamond','Park','Park','Stadium','Stadium','Park','Field']

var city = ['Baltimore','Baltimore','Baltimore','Baltimore','Boston','Boston','Boston','Boston','Boston','Chicago','Chicago','Chicago','Chicago','Chicago','Chicago','Cleveland','Cleveland','Cleveland','Cleveland','Detroit','Detroit','Detroit','Detroit','Houston'
,'Houston','Houston','Kansas City','Kansas City','Kansas City','Kansas City','Los Angeles','Los Angeles','Los Angeles','Los Angeles','Los Angles','Los Angeles','Minnesota','Minnesota','Minnesota','New York','New York','New York','New York','New York','New York','Oakland'
,'Oakland','Oakland','Oakland','Seattle','Seattle','Seattle','Seattle','Seattle','Tampa Bay','Tampa Bay','Tampa Bay','Tampa Bay','Texas','Texas','Texas','Texas','Texas','Toronto','Toronto','Toronto','Toronto','Arizona','Arizona','Arizona','Atlanta','Atlanta','Atlanta'
,'Atlanta','Cincinnati','Cincinnati','Cincinnati','Cincinnati','Colorado','Colorado','Colorado','Miami','Miami','Miami','Milwaukee','Milwaukee','Milwaukee','Milwaukee','Philadelphia','Philadelphia','Philadelphia','Philadelphia','Pittsburgh','Pittsburgh','Pittsburgh'
,'Pittsburgh','San Diego','San Diego','San Diego','San Francisco','San Francisco','San Francisco','San Francisco','St. Louis','St. Louis','St. Louis','St. Louis','Washington','Washington','Washington','Washington','Anaheim','Anaheim','Anaheim','San Jose','San Jose'
,'San Jose','Dallas','Dallas','Dallas','Dallas','Dallas','Nashville','Nashville','Nashville','Buffalo','Buffalo','Buffalo','Florida','Florida','Florida','Florida','Montreal','Montreal','Montreal','Carolina','Carolina','Carolina','Carolina','Columbus','Columbus'
,'Columbus','Columbus','New Jersey','New Jersey','New Jersey','New Jersey','Phoenix','Phoenix','Phoenix','Phoenix','San Antonio','San Antonio','San Antonio','Austin','Austin','Austin','Jacksonville','Jacksonville','Jacksonville','Jacksonville','Indianapolis','Indianapolis'
,'Indianapolis','Indianapolis','Charlotte','Charlotte','Charlotte','El Paso','El Paso','El Paso','Denver','Denver','Denver','Denver','Memphis','Memphis','Memphis','Oklahoma City','Oklahoma City','Oklahoma City','Portland','Portland','Portland','Portland','Las Vegas'
,'Las Vegas','Las Vegas','Louisville','Louisville','Louisville','Albuquerque','Albuquerque','Tucson','Tucson','Fresno','Fresno','Sacramento','Sacramento','Sacramento','Mesa','Mesa','Virginia Beach','Virginia Beach','Omaha','Omaha','Colorado Springs','Colorado Springs'
,'Raleigh','Minneapolis','Tulsa','Tulsa','Wichita','Wichita','New Orleans','New Orleans','New Orleans','Arlington','Bakersfield','Aurora','Corpus Christi','Corpus Christi','Lexington','Lexington','Stockton','Stockton','Greensboro','Greensboro','Toledo','Toledo'
,'Orlando','Orlando','Orlando','Durham','Durham','Norfolk','Reno','Reno','Richmond','Richmond','Rochester','Rochester','Boise','Baton Rouge','Birmingham','Spokane','Tacoma','Tacoma','Augusta','Akron']

var nickname = ['Orioles','Red Sox','Yankees','Rays','Devil Rays','Blue Jays','White Sox','Indians','Tigers','Royals','Twins','Astros','Angels','Athletics','Mariners','Rangers','Braves','Marlins','Mets','Nationals','Cubs','Reds','Brewers','Pirates'
,'Cardinals','Diamondbacks','Rockies','Dodgers','Padres','Giants','Bisons','Bison','Knights','Clippers','Bulls','Bats','Tides','Red Wings','Chiefs','Mud Hens','Isotopes','Grizzlies','Redbirds','Aces','Express','River Cats','Bees','Rainiers','Senators'
,'Thunder','Fisher Cats','Rock Cats','Sea Dogs','Barons','Generals','BayBears','Blue Wahoos','Smokies','Drillers','Oilers','RoughRiders','Blaze','Mavericks','Storm','49ers','JetHawks','Ports','Mudcats','Hillcats','Pelicans','Dash','Marauders','Threshers'
,'Stone Crabs','Hammerheads','Snappers','Hot Rods','Dragons','Loons','Cougars','Captains','River Bandits','Whitecaps','Rattlers','Tourists','RiverDogs','Shorebirds','Drive','Suns','Crawdads','Intimidators','BlueClaws','Legends','Power','Doubledays','Cyclones'
,'Renegades','Spinners','Scrappers','Spikes','ValleyCats','Monsters','Black Bears','Crosscutters','Loggers','Sidewinders','Suns','Kings','Tribe','Admirals','Aeros','Aliens','Americans','Apaches','Archers','Armada','Arrows','Arsenal','Timberjacks','Mounties'
,'Bruins','Capitals','Rebels','Sharks','Bayhawks','Bay Hawks','Rampage','Avalanche','Bucks','Bulldogs','Galaxy','Atoms','Jets','Blue Sox','Eagles','Devils','Bandits','Gold Sox','Danger','Blazers','Aviators','Crusaders','Defenders','Destroyers','Firebirds'
,'Gladiators','Conquest','Miners','Jaguars','Outlaws','Patriots','Predators','Raiders','Trojans','Spartans','Saints','Sting','Islanders','Wizards','Scorpions','Brawlers','Stars','Titans','Revolution','Griffins','Owls','Badgers','Rivermen','Swarm','Blizzard'
,'Blues','Cowboys','Heros','Fire','Hitmen','Lancers','Night Hawks','Seahawks','Stampede','Wild','Hawks','Lightning','Monarchs','Vikings','Warriors','Wolves','Lakers','Packers','Whalers','Ravens','Moose','Attack','Rams','Octopus','Rockets'
,'Colts','Acorns','Hurricanes','Pilots','Dukes']

function nameField() {
  var sponsorName = Math.floor(Math.random() * sponsor.length);
  var titleName = Math.floor(Math.random() * title.length);

  document.getElementById('field').innerHTML = sponsor[sponsorName] + " " + title[titleName];
}

function teamName() {
  var cityName = Math.floor(Math.random() * city.length);
  var nickName = Math.floor(Math.random() * nickname.length);

  document.getElementById('name').innerHTML = city[cityName] + " " + nickname[nickName];

}
