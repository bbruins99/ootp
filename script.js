var sponsor = ['Marathon','Citi','Wells Fargo','Target','MetLife','Coca-Cola','Home Depot','Louisville Slugger','Ford','AT&T','Verizon','Bank of America','Pepsi',"Lowe's",'FedEx','American Airlines','Delta Air Lines','Southwest Airlines','Goodyear','Walgreens','Kroger','General Motors','Exxon Mobil','Best Buy'
,'Busch','Chase','Citizens Bank','Comerica','Coors','Globe Life','Great American','Miller','PNC','Progressive','Safeco','Tropicana','BB&T','Huntington','Fifth Third','AutoZone']

var title = ['Park','Field','Stadium','Ballpark','Diamond']

var city = ['Baltimore','Boston','New York','Tampa Bay','Toronto','Montreal','Chicago','Cleveland','Detroit','Kansas City','Minnesota','Houston','Anaheim','Los Angeles','Oakland','Seattle','Texas','Dallas','Atlanta','Miami','Florida','Philadelphia','Washington','Cincinnati'
,'Milwaukee','Pittsburgh','St. Louis','Arizona','Phoenix','Colorado','Denver','San Diego','San Francisco','Buffalo','Charlotte','Columbus','Durham','Gwinnett','Indianapolis','Lehigh Valley','Louisville','Norfolk','Portland','Rochester','Syracuse','Toledo','Albuquerque','El Paso'
,'Fresno','Iowa','Las Vegas','Memphis','Nashville','New Orleans','Oklahoma City','Omaha','Reno','Round Rock','Sacramento','Salt Lake City','Tacoma','Akron','Jacksonville','Indiana','New Mexico','California']

var nickname = ['Orioles','Red Sox','Yankees','Rays','Devil Rays','Blue Jays','White Sox','Indians','Tigers','Royals','Twins','Astros','Angels','Athletics','Mariners','Rangers','Braves','Marlins','Mets','Nationals','Cubs','Reds','Brewers','Pirates'
,'Cardinals','Diamondbacks','Rockies','Dodgers','Padres','Giants','Bisons','Bison','Knights','Clippers','Bulls','Bats','Tides','Red Wings','Chiefs','Mud Hens','Isotopes','Grizzlies','Redbirds','Aces','Express','River Cats','Bees','Rainiers','Senators'
,'Thunder','Fisher Cats','Rock Cats','Sea Dogs','Barons','Generals','BayBears','Blue Wahoos','Smokies','Drillers','Oilers','RoughRiders','Blaze','Mavericks','Storm','49ers','JetHawks','Ports','Mudcats','Hillcats','Pelicans','Dash','Marauders','Threshers'
,'Stone Crabs','Hammerheads','Snappers','Hot Rods','Dragons','Loons','Cougars','Captains','River Bandits','Whitecaps','Rattlers','Tourists','RiverDogs','Shorebirds','Drive','Suns','Crawdads','Intimidators','BlueClaws','Legends','Power','Doubledays','Cyclones'
,'Renegades','Spinners','Scrappers','Spikes','ValleyCats','Monsters','Black Bears','Crosscutters','Loggers','Sidewinders','Suns','Kings','Tribe']

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
