var mongoose = require('mongoose');

var EpicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  }
})

var Epic = mongoose.model('Epic', EpicSchema);

var createNewEpic = function(hero) {
  function rInd (length) {
    return Math.floor(Math.random() * length);
  };
  console.log(hero.gender);
  var gen = {"1": 1, "2": 2, "3": 3};
  var gender = gen[hero.gender];
  var name = hero.name;

  var proNomCap = ['He', 'She', 'Ze'];
  var proObCap = ['Him', 'Her', 'Zir'];
  var proDeCap = ['His', 'Her', 'Zir'];
  var proPoCap = ['His', 'Hers', 'Zirs'];
  var proNomNc = ['he', 'she', 'ze'];
  var proObNc = ['him', 'her', 'zir'];
  var proDeNc = ['his', 'her', 'zir'];
  var proPoNc = ['his', 'hers', 'zirs'];
  var racSiCap = ["Human", "Elf", "Dwarf", "Orc"];
  var racPlCap = ['Humans', 'Elves', 'Dwarves', 'Orcs'];
  var racSiNc = ["human", "elf", "dwarf", "orc"];
  var racPlNc = ['humans', 'elves', 'dwarves', 'orcs'];
  var entroops = [['horsemen', 'archers', 'swordsmen'], ['archers', 'swordsmen', 'pikemen'], ['axemen', 'archers', 'swordsmen'], ['wargs', 'trolls', 'orcs']]
  var places = [['Minas Tirith', 'Bree', 'Dale'],['Rivendell', 'the Grey Havens', 'Lothlorien'],[ 'the Misty Mountains', 'Erebor', 'the Iron Hills'],['Mount Doom', 'Minas Morgul', 'the Mines of Moria'], 'Fangorn Forest']
  var flaVerMov = ['raced', 'meandered', 'wandered', 'roamed', 'strode'];
  var flaVerFit = ['pounded', 'demeaned', 'spied out', 'sought out', 'conquered'];
  var flaVerWin = ['feasted', 'gloated', 'lived in peace', 'boasted of ' + proDeCap[gender] + ' exploits', 'lived as a hero'];
  var peopAdj = ['wealthy', 'lowly', 'ambitious', 'lordly', 'uncaring', 'doting', 'aimless'];
  var flaAdj = ['pivotal', 'small', 'crucial', 'public', 'decisive']
  var flaInd = rInd(flaVerMov.length);
  var race = rInd(racSiCap.length);
  var gender = hero.gender || 1; //This will need to be changed**************
  var enemy;
  if (race < racSiCap.indexOf("Orc")) {
    enemy = racSiCap.indexOf("Orc");
  }
  else {
    enemy = rInd(racSiCap.length -1);
  }
  var home = places[race][rInd(3)];
  var begSents = [
    function() {
      return name + " was a " + racSiNc[race] + " among " + racPlNc[race] + ". Born in " + places[race][rInd(3)] + " to " + peopAdj[rInd(peopAdj.length)] + " parents, " proDeNc[gender] + " life really began when the " + racPlNc[enemy] + "  invaded. ";
    }
  ]
  var movSents = [
    function() {
      return 'Then the call for warriors came. ' + name + ' ' + flaVerMov[flaInd] + ' past ' + places[rInd(4)][rInd(3)] + " to take part in the battle. ";
    }
  ];
  var fitSents = [
    function() {
      return 'When the fighting began, ' + proNomNc[gender] + ' played a ' + flaAdj[flaInd] + ' role when ' + proNomNc[gender] + ' ' + flaVerFit[flaInd] + ' a troop of ' + entroops[enemy][rInd(3)] + '. ';
    }
  ];
  var winSents = [
    function () {
      return 'The victory was brief, but it allowed ' + name + " to return to " + proDeNc[gender] + " home in " + home + ", where " + proNomNc[gender] + " " + flaVerWin[flaInd];
    }
  ];
  return begSents[rInd(begSents.length)] + movSents[rInd(movSents.length)]() + fitSents[rInd(fitSents.length)]() + winSents[rInd(winSents.length)]();
};
module.exports = {
  Epic: Epic,
  createNewEpic: createNewEpic
};