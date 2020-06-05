const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let player = {};
  let  detailedPlayers = players.map(function (name ,index){
        player = {};
        player.name = name;
        player.strength = getRandomStrength();
        player.image =`images/super-${index+1}.png`;
        if(index % 2){
            player.type = `villain`;
        }
        else{
            player.type = `hero`;
        }
        console.log(player);
        
        return player;
        
    });
    // Instead of forloop use Map method
    // Code here
    console.log(detailedPlayers)
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';
    let div1 , pic ,div2 ,div3;
    fragment = players.filter(function (player){
      //  console.log(player);
      //  console.log(player.type);
        return player.type == type;
    }).map(function(player){

            div1 = document.createElement('div');
            div1.className = 'player';
            pic = document.createElement('img');
            pic.src = `${player.image}`;
           // console.log(pic.src);
            pic.alt = ``;
            div2 = document.createElement('div');
            div2.className = 'name';
            div2.textContent  = `${player.name}`;
            div3 = document.createElement('div');
            div3.className = 'strength';
            div3.textContent  = `${player.strength}`;
            div1.appendChild(pic);
            div1.appendChild(div2);
            div1.appendChild(div3);
          console.log(div1.outerHTML);
            return div1.outerHTML;
    }).reduce(function (initial , Current){
        return initial + Current;
    },``)
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}