// Code goes here
var statArray = {
    stat: [],
    addStat: function(str, dex, con, int, wis, cha) {
        this.stat.push({
            STR: str,
            DEX: dex,
            CON: con,
            INT: int,
            WIS: wis,
            CHA: cha
        });


    }
    //addProf: function()
};
var feats = {
    feat: [],
    addFeat: function(name, type, typeDisplay, description, link) {
        this.feat.push({
            name: name,
            type: type, //Racial,Class,or other
            typeDisplay: typeDisplay,
            description: description,
            link: link
        });
    },
    setUpFeats: function() {
        this.addFeat('Fey Presence', 'class', 'Warlock Feat: Archfey Patron', 'Starting at 1st level, as an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throw are all charmed or frightened by you (your choice) until the end of your next turn.  Once you use this feature, you cant use it again until you finish a short or long rest.');
        this.addFeat('Misty Escape', 'class', 'Warlock Feat: Archfety Patron', 'Starting at 6th level, when you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell. Once you use this feature, you cant use it again until you finish a short or long rest.');
        this.addFeat('Darkvision', 'racial', 'Genasi Feat', 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. Your ties to the Elemental Plane of Fire make your darkvision unusual: everything you see in darkness is in a shade of red.');
        this.addFeat('Fire Resistance', 'racial', 'Genasi Feat', 'You have resistance to fire damage.');
        this.addFeat('Reach to the Blaze', 'racial', 'Genasi Feat', 'You know the produce flame cantrip. Once you reach 3rd level, you can cast the burning hands spell once with this trait as a 1st-level spell, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells.');
        this.addFeat('Pact of the Chain', 'class', 'Warlock Feat: Pact Boon', 'You learn the Find Familiar spell and can cast it as a ritual. The spell doesnt count against your number of spells known. When you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit or sprite. Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own with its reaction.');
      this.addFeat('INVOCATION: Agonizing blast', 'class', 'Warlock Invocation', 'When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit.');
      this.addFeat('INVOCATION: Sign of Ill Omen', 'class', 'Warlock Invocation', 'You can cast Bestow Curse once using a warlock spell slot. You cant do so again until you finish a long rest.');
      this.addFeat('INVOCATION: Voice of the Chain Master', 'class', 'Warlock Invocation', 'You can communicate telepathically with your familiar and perceive through your familiars senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiars senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech.');
      // this.addFeat('', '', '', '');
      // this.addFeat('', '', '', '');
      // this.addFeat('', '', '', '');
        this.addFeat('Actor', 'other', '5e PHB Feat', 'Skilled at mimicry and dramatics, you gain the following benefits: Increase your Charisma score by 1, to a maximum of 20. You have an advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person. You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make the sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows a listener to determine that the effect is faked.');


    },
    returnFeatType: function(type) {
        var racialFeats = [];
        feats.feat.forEach(function(element) {
            if (element.type == type) {
                racialFeats.push(element);
            }
        });

        return racialFeats;
    }

};

var otherArray = {
    other: [],
    addOther: function(dex) {
        this.other.push({
            profBonus: 3,
            inspiration: 0,
            armorClass: 14,
            initiative: dex,
            speed: 30,
            successes: 0,
            failures: 0,
            hpMax: 48,
            hpCurrent: 48,
            hitDieTotal: '5d8',
            hitDieCurrent: '5d8',
            hpTemp: 0


        });
    }
};

var weaponArray = {
    weapons: [],
    addWeapon: function(name, attribute, die, bonus, description) {
        this.weapons.push({
            name: name,
            attribute: attribute,
            dmgDie: die,
            bonus: bonus,
            description: description
        });
    },
  setUpWeapons: function(){
       this.addWeapon('Crossbow','DEX','1d8',0,'Must use bonus action to load/reload');
      this.addWeapon('Poison Dagger','DEX','1d4',0,'On hit, target rolls DC14 Con save.  On fail, creature loses reaction and takes 1d6 poison dmg');
  }

};

var spellbook = {
    spell: [],
    addSpell: function(name, lvl, link, conc, effect, action) {
        if (lvl === 'cantrip') {
            var level = 0;
        } else {
            var level = parseInt(lvl);
        }
        if (action === undefined) {
            action = 'Action';
        }
        var spellId = name.replace(/\s/g, '');
        var book = this.spell;
        //      if (book.length<1){
        this.spell.push({
            name: name,
            level: level,
            link: link,
            conc: conc,
            effect: effect,
            spellId: spellId,
            show: false,
            action: action
        });



        //       } else {
        //         for (i=book.length;i<0;i--){
        //          if(level< 
        //         }

        //       }

    },
    setUpSpells: function() {
        spellbook.addSpell('Create Bonfire', 'cantrip', 'https://cdn.glitch.com/c363254b-cab5-4b6d-ba91-38bce46cbbe9%2FspellCreateBonfire.PNG?1528869675412', true, 'Creates a 5 ft cube bonfire on the ground. It ignites flamable objects that arent being worn or carried.  Creatures in the space make DC14 dex save, take 2d8 fire dmg on fail. Also takes dmg if move through or end turn in fire.');
        spellbook.addSpell('Eldritch Blast', 'cantrip', 'https://cdn.glitch.com/c363254b-cab5-4b6d-ba91-38bce46cbbe9%2FspellEldritchBlast.PNG?1528866707292', false, 'Fires 2 beams of force.  +6 to hit, 2x(1d10+3) force damage.');
        spellbook.addSpell('Chill Touch', 'cantrip', 'https://cdn.glitch.com/c363254b-cab5-4b6d-ba91-38bce46cbbe9%2FspellChillTouch.PNG?1528867012194', false, 'Conjure a ghostly hand that attacks a creature.  +6 to hit, 2d8 Necrotic damage.');
        spellbook.addSpell('Hex', '1', 'https://cdn.glitch.com/c363254b-cab5-4b6d-ba91-38bce46cbbe9%2FspellHex.PNG?1528867381842', true, 'Place a hex on a creature.  Choose STR, DEX, CON, WIS, INT or CHA, the creature has disadvantage on all related ability checks.  Can chain to another creature as bonus action.  All damage YOU deal to creature does an additional 1d6.', 'Bonus action');
        spellbook.addSpell('Hold Person', '2', 'https://cdn.glitch.com/c363254b-cab5-4b6d-ba91-38bce46cbbe9%2FspellHoldPerson.PNG?1528867643511', true, 'Target 2 humanoid sized creatures.  If they fail a Wisdom save DC14, they are paralyzed.  They may attempt the save again at the end of each of their turns.');
        spellbook.addSpell('Phantasmal Force', '2', 'https://cdn.glitch.com/c363254b-cab5-4b6d-ba91-38bce46cbbe9%2FspellPhantasmalForce.PNG?1528867993034', true, 'One target creature makes a DC14 Int save.  On fail create 10x10ft illusion in a creatures mind.  Only they can see it.  Illusion can deal 1d6 psychic dmg if it is something that could cause dmg.  Creature may attempt save at end of each of its turn.');
        spellbook.addSpell('Shatter', '2', 'https://cdn.glitch.com/c363254b-cab5-4b6d-ba91-38bce46cbbe9%2FspellShatter.PNG?1528868421439', false, 'Creates sudden loud ringing noise at a point.  Creatures within 10ft radius of point make a DC14 con save.  Deals 4d8 damage on failed save, half on success. Inorganic creatures/objects have disadvantage (you can blow nonmagical objects up sometimes).');
        spellbook.addSpell('Hypnotic Pattern', '3', 'https://cdn.glitch.com/c363254b-cab5-4b6d-ba91-38bce46cbbe9%2FspellHypnoticPattern.PNG?1528868890755', true, 'Creates hpnotic pattern in 30ft cube.  All creatures in cube make DC14 wisdom save, or become charmed.  While charmed, they are incapacitated and have speed 0ft.  They wake if they are shaken or take damage.');
        spellbook.addSpell('Vampiric touch', '3', 'https://cdn.glitch.com/c363254b-cab5-4b6d-ba91-38bce46cbbe9%2FspellVampiricTouch.PNG?1528869202331', true, 'Enables you to syphon life with hand.  +6 to hit, 3d6 Necrotic dmg.  You heal half of necrotic dmg dealt.');
        spellbook.addSpell('Thunder Step', '3', 'https://cdn.glitch.com/c363254b-cab5-4b6d-ba91-38bce46cbbe9%2FspellThunderStep.PNG?1528869429549', true, 'Teleports you, reasonable things you are carrying, and up to 1 other willing creature 5ft away from you up to 90ft.  Creatures within the 10ft of the space you just left make a DC14 con save.  Take 3d10 thunder dmg on fail, half on success.  ');
        // spellbook.addSpell('Hypnotic Pattern', '3', '', true, '');
        // spellbook.addSpell('Hypnotic Pattern', '3', '', true, '');
        // spellbook.addSpell('Hypnotic Pattern', '3', '', true, '');
        // spellbook.addSpell('Hypnotic Pattern', '3', '', true, '');
        // spellbook.addSpell('Hypnotic Pattern', '3', '', true, '');
        // spellbook.addSpell('Hypnotic Pattern', '3', '', true, '');
        // spellbook.addSpell('Hypnotic Pattern', '3', '', true, '');



    }


};

var featSpellbook = {
    featspell: [],
    addSpell: function(name, lvl, link, conc, effect, action) {
        if (lvl === 'cantrip') {
            var level = 0;
        } else {
            var level = parseInt(lvl);
        }
        if (action === undefined) {
            action = 'action';
        }
        var spellId = name.replace(/\s/g, '');
        var book = this.featspell;
        //      if (book.length<1){
        this.featspell.push({
            name: name,
            level: level,
            link: link,
            conc: conc,
            effect: effect,
            spellId: spellId,
            show: false,
            action: action
        });

        //       } else {
        //         for (i=book.length;i<0;i--){
        //          if(level< 
        //         }

        //       }

    },
    setUpSpells: function() {

        featSpellbook.addSpell('Produce Flame', 'cantrip', 'https://cdn.glitch.com/c363254b-cab5-4b6d-ba91-38bce46cbbe9%2FspellProduceFlame.PNG?1528870190336', false, 'Fire Genasi Feat: Can produce a flame in your hand that does not harm you.  Can attack by hurling the flame as you conjure it or on a later turn as an action.  +6 to hit, 2d8 fire dmg.  ');
        featSpellbook.addSpell('Burning Hands', '1', 'https://cdn.glitch.com/c363254b-cab5-4b6d-ba91-38bce46cbbe9%2FspellBurningHands.PNG?1528870458371', false, 'Fire Genasi Feat, 1/day w/o using a spell slot: Creates 15ft cone of fire, each creature makes DC14 dex save.  They take 3d6 fire dmg on failed save, half on success.  Lights things on fire that arent worn or carried.');
        featSpellbook.addSpell('Find Familiar', '1', 'https://cdn.glitch.com/c363254b-cab5-4b6d-ba91-38bce46cbbe9%2FspellFindFamiliar.PNG?1528871116267', true, 'Archfey Patron Feat: Can cast Find Familiar with a warlock spell slot as a ritual.  Familiar lasts until it dies.  Additional familiar forms include imp, pseudodragon, quasit, sprite.  It cannot attack, but rolls initiative and can perform actions.  ', '1 hr ritual');
        featSpellbook.addSpell('Bestow Curse', '3', 'https://cdn.glitch.com/c363254b-cab5-4b6d-ba91-38bce46cbbe9%2FspellBestowCurse.PNG?1528870819142', true, 'Eldritch Invocation Feat: You may cast Bestow curse with a warlock spell slot.  Target creature makes a DC14 wisdom save.  Choose the effect of the curse.  It lasts for 1 min, and can only be removed by a remove curse spell.  ');
        // spellbook.addSpell('Hypnotic Pattern', '3', '', true, '');
        // spellbook.addSpell('Hypnotic Pattern', '3', '', true, '');



    }


};

var view = {
    currentTab: [],
    defaultTab: function() {
        this.currentTab.push({
            tab: 'Stats',
            status: 'live'
        });
    },
    changeTab: function(tab) {
        this.currentTab[0].tab = tab;
    },
    //Sets up event listeners on top row of buttons
    setUpEventListeners: function() {
        var tabs = 'tabs';
        var tabButtons = document.querySelector('div.' + tabs);
        tabButtons.addEventListener('click', function(event) {
            var elementClicked = event.target;
            if (elementClicked.id === 'stats') {
                view.showStats();
            } else if (elementClicked.id === 'feats') {
                view.showFeats();
            } else if (elementClicked.id === 'spells') {
                view.showSpells();
            }
        });
    },
    //Shows stats on page
    showStats: function() {
        var currentTabId = this.currentTab[0].tab;
        view.changeTab('Stats');
        console.log(currentTabId);
        view.displayMeat();
    },
    //Shows feats on page
    showFeats: function() {
        var currentTabId = this.currentTab[0].tab;
        view.changeTab('Feats');
        console.log(currentTabId);
        view.displayMeat();

    },
    //Shows spells on page
    showSpells: function() {
        var currentTabId = this.currentTab[0].tab;
        view.changeTab('Spells');
        console.log(currentTabId);
        view.displayMeat();

    },




    //initializes querySelector
    displayMeat: function() {

        //imports Proficiencies
        var proficiencies = ['Wis Saving Throw',
            'Cha Saving Throw',
            'Deception',
            'Intimidation',

        ];

        var profBonus = 3;


        //set up meatDiv
        var currentTabId = this.currentTab[0].tab;
        var meatDiv = document.querySelector('div.meat');
        meatDiv.innerHTML = '';
        meatDiv.id = 'row';


        //create meatP
        var meatP = document.createElement('p');
        meatP.id = 'sectionHead';




        //logic for deciding which tab to display

        //default table/set up stats page
        if (currentTabId === 'Stats') {
            meatP.textContent = 'This is the Stats page';
            meatDiv.appendChild(meatP);
            var stats = statArray.stat[0];
            //set up column div

            var colDiv1 = document.createElement('div');
            colDiv1.id = 'column';
            meatDiv.appendChild(colDiv1);


            //ARRAYS FOR ABILITIES:

            var strProfs = ['Str Saving Throw',
                'Atheletics'
            ];
            var dexProfs = ['Dex Saving Throw',
                'Acrobatics',
                'Sleight of hand',
                'Stealth'
            ];
            var conProfs = ['Con Saving Throw'];
            var intProfs = ['Int Saving Throw',
                'Arcana',
                'History',
                'Investigation',
                'Nature',
                'Religion'
            ];
            var wisProfs = ['Wis Saving Throw',
                'Animal Handling',
                'Insight',
                'Medicine',
                'Perception',
                'Survival'
            ];
            var chaProfs = ['Cha Saving Throw',
                'Deception',
                'Intimidation',
                'Performance',
                'Persuasion'
            ];

            //Append children to meatDiv

            //Append STR and proficiencies
            var strValue = stats.STR;
            var strMod = Math.floor((strValue - 10) / 2);
            colDiv1.appendChild(this.createH3Element('str', 'STR: ' + strValue + ' /// ' + strMod));
            var strList = this.createUlElement('strList');
            colDiv1.appendChild(strList);
            strProfs.forEach(function(element) {


                if (proficiencies.indexOf(element) > -1) {
                    var strModx = strMod + profBonus;
                } else {
                    var strModx = strMod;
                }
                if (strModx > 0) {
                    var strListElt = '+' + strModx + ' -- ' + element;
                } else {
                    var strListElt = strModx + ' -- ' + element;
                }
                strList.appendChild(view.createLiElement(strListElt));
            });



            //Append DEX and proficiencies
            var dexValue = stats.DEX;
            var dexMod = Math.floor((dexValue - 10) / 2);
            colDiv1.appendChild(this.createH3Element('dex', 'DEX: ' + dexValue + ' /// ' + dexMod));
            var dexList = this.createUlElement('dexList');
            colDiv1.appendChild(dexList);
            dexProfs.forEach(function(element) {


                if (proficiencies.indexOf(element) > -1) {
                    var dexModx = dexMod + profBonus;
                } else {
                    var dexModx = dexMod;
                }
                if (dexModx > 0) {
                    var dexListElt = '+' + dexModx + ' -- ' + element;
                } else {
                    var dexListElt = dexModx + ' -- ' + element;
                }
                dexList.appendChild(view.createLiElement(dexListElt));
            });
            //Append CON and proficiencies
            var conValue = stats.CON;
            var conMod = Math.floor((conValue - 10) / 2);
            colDiv1.appendChild(this.createH3Element('con', 'CON: ' + conValue + ' /// ' + conMod));
            var conList = this.createUlElement('conList');
            colDiv1.appendChild(conList);
            conProfs.forEach(function(element) {


                if (proficiencies.indexOf(element) > -1) {
                    var conModx = conMod + profBonus;
                } else {
                    var conModx = conMod;
                }
                if (conModx > 0) {
                    var conListElt = '+' + conModx + ' -- ' + element;
                } else {
                    var conListElt = conModx + ' -- ' + element;
                }
                conList.appendChild(view.createLiElement(conListElt));
            });




            //Append INT and proficiencies
            var intValue = stats.INT;
            var intMod = Math.floor((intValue - 10) / 2);
            colDiv1.appendChild(this.createH3Element('int', 'INT: ' + intValue + ' /// ' + intMod));
            var intList = this.createUlElement('intList');
            colDiv1.appendChild(intList);
            intProfs.forEach(function(element) {


                if (proficiencies.indexOf(element) > -1) {
                    var intModx = intMod + profBonus;
                } else {
                    var intModx = intMod;
                }
                if (intModx > 0) {
                    var intListElt = '+' + intModx + ' -- ' + element;
                } else {
                    var intListElt = intModx + ' -- ' + element;
                }
                intList.appendChild(view.createLiElement(intListElt));
            });




            //Append WIS and proficiencies
            var wisValue = stats.WIS;
            var wisMod = Math.floor((wisValue - 10) / 2);
            colDiv1.appendChild(this.createH3Element('wis', 'WIS: ' + wisValue + ' /// ' + wisMod));
            var wisList = this.createUlElement('wisList');
            colDiv1.appendChild(wisList);
            wisProfs.forEach(function(element) {


                if (proficiencies.indexOf(element) > -1) {
                    var wisModx = wisMod + profBonus;
                } else {
                    var wisModx = wisMod;
                }
                if (wisModx > 0) {
                    var wisListElt = '+' + wisModx + ' -- ' + element;
                } else {
                    var wisListElt = wisModx + ' -- ' + element;
                }
                wisList.appendChild(view.createLiElement(wisListElt));
            });




            //Append CHA and proficiencies
            var chaValue = stats.CHA;
            var chaMod = Math.floor((chaValue - 10) / 2);
            colDiv1.appendChild(this.createH3Element('cha', 'CHA: ' + chaValue + ' /// ' + chaMod));
            var chaList = this.createUlElement('chaList');
            colDiv1.appendChild(chaList);
            chaProfs.forEach(function(element) {


                if (proficiencies.indexOf(element) > -1) {
                    var chaModx = chaMod + profBonus;
                } else {
                    var chaModx = chaMod;
                }
                if (chaModx > 0) {
                    var chaListElt = '+' + chaModx + ' -- ' + element;
                } else {
                    var chaListElt = chaModx + ' -- ' + element;
                }
                chaList.appendChild(view.createLiElement(chaListElt));
            });

            // create second column
            var divCol2 = document.createElement('div');
            divCol2.id = 'column';
            meatDiv.appendChild(divCol2);

            // create other stat object
            otherArray.addOther(dexMod);
            var otherStats = otherArray.other[0];

            var otherStatTable = document.createElement('table');
            otherStatTable.id = 'otherStats';
            divCol2.appendChild(otherStatTable);




            //create Rows
            this.createTrPair('Proficiency Bonus', otherStats.profBonus, otherStatTable);
            this.createTrPair('Inspiration', otherStats.inspiration, otherStatTable);
            this.createTrPair('AC', otherStats.armorClass, otherStatTable);
            this.createTrPair('Initiative', otherStats.initiative, otherStatTable);
            this.createTrPair('speed', otherStats.speed, otherStatTable);
            this.createTrPair('Death Save Success', otherStats.successes, otherStatTable);
            this.createTrPair('Death Save Failure', otherStats.failures, otherStatTable);
            this.createTrPair('Maximum HP', otherStats.hpMax, otherStatTable);
            this.createTrPair('Current HP', otherStats.hpCurrent, otherStatTable);
            this.createTrPair('hitDieTotal', otherStats.hitDieTotal, otherStatTable);
            this.createTrPair('hitDieCurrent', otherStats.hitDieCurrent, otherStatTable);
            this.createTrPair('Temp HP', otherStats.hpTemp, otherStatTable);


            //create weapon chart
            var weaponHeader = view.createH3Element('weaponHead','Weapons');
          divCol2.appendChild(weaponHeader);
          
          var weapons = weaponArray.weapons;
          
          weapons.forEach(function(element){
            var weapon = view.createWeaponElement(element);
            divCol2.appendChild(weapon);
          });

            // feats page
        } else if (currentTabId === 'Feats') {
            meatP.textContent = 'This is the Feats page';
            meatDiv.appendChild(meatP);
            var racialFeatDiv = document.createElement('div');
            racialFeatDiv.id = 'racial';
            var classFeatDiv = document.createElement('div');
            classFeatDiv.id = 'class';
            var otherFeatDiv = document.createElement('div');
            otherFeatDiv.id = 'other';

            var featDiv = [racialFeatDiv, classFeatDiv, otherFeatDiv];

            var racialFeats = feats.returnFeatType('racial');
            var classFeats = feats.returnFeatType('class');
            var otherFeats = feats.returnFeatType('other');

            
            var featHeaders = ['Racial Feats', 'Warlock Feats', 'Other Feats'];
            var i = 0;


            featDiv.forEach(function(element) {
              var featHeaderVal = featHeaders[i];
              i++;
              var featHeader = view.createH3Element('feat',featHeaderVal);

                var typeFeats = feats.returnFeatType(element.id);
                typeFeats.forEach(function(e) {
                    var featTable = view.createFeatElement(e);
                    element.appendChild(featTable);
                });
              meatDiv.appendChild(featHeader);
                meatDiv.appendChild(element);

            });




            //Spells page
        } else if (currentTabId === 'Spells') {

            meatP.textContent = 'This is the Spells page';
            var spellDiv = document.createElement('div');
            spellDiv.id = 'spellDiv';
            meatDiv.appendChild(meatP);
            meatDiv.appendChild(spellDiv);

            var featSpellDiv = document.createElement('div');
            featSpellDiv.id = 'featSpellDiv';

            meatDiv.appendChild(featSpellDiv);




            var book = spellbook.spell;
            var featBook = featSpellbook.featspell;
            //spellbook.createSpellEntry(1);
            var warlockHeader = this.createH3Element('warlockHeader', 'Warlock Spells');
            spellDiv.appendChild(warlockHeader);
            book.forEach(function(element) {
                var testRow = view.createSpellElt(element);
                spellDiv.appendChild(testRow);


            });


            var featSpellHeader = this.createH3Element('featSpellHeader', 'Feat Spells');
            spellDiv.appendChild(featSpellHeader);
            featBook.forEach(function(element) {
                var testRow = view.createSpellElt(element);
                spellDiv.appendChild(testRow);


            });

            this.setUpSpellEventListeners();
        }




    },
    createH3Element: function(id, val) {
        var h3Element = document.createElement('h3');
        h3Element.id = id;
        h3Element.textContent = val;
        return h3Element;
    },
    createUlElement: function(id) {
        var ulElement = document.createElement('ul');
        ulElement.id = id;
        return ulElement;
    },
    createLiElement: function(val) {
        var liElement = document.createElement('li');
        liElement.textContent = val;
        return liElement;
    },
    createTrPair: function(label, value, parent) {
        var trElt = document.createElement('tr');
        var tdElt1 = document.createElement('td');
        var tdElt2 = document.createElement('td');
        tdElt1.textContent = label;
        tdElt2.textContent = value;
        parent.appendChild(trElt);
        trElt.appendChild(tdElt1);
        trElt.appendChild(tdElt2);
    },
    createSpellElt: function(element) {
        var spell = element;
        var spTable = document.createElement('table');
        var spRow1 = document.createElement('tr');
        var spRow2 = document.createElement('tr');
        var spName = document.createElement('td');
        var spLevel = document.createElement('td');
        var spAction = document.createElement('td');
        var spConc = document.createElement('td');
        var spDescription = document.createElement('td');

        spName.textContent = spell.name;
        spTable.id = spell.spellId;
        spLevel.textContent = 'Spell Level: ' + spell.level;
        spAction.textContent = 'Cast Time: ' + spell.action;
        spConc.textContent = 'Concentration: ' + spell.conc;
        spDescription.textContent = 'TL;DR: ' + spell.effect;
        spDescription.colSpan = 2;
        spRow1.appendChild(spName);
        spRow1.appendChild(spLevel);
        spRow1.appendChild(spAction);
        spRow2.appendChild(spConc);
        spRow2.appendChild(spDescription);
        spTable.appendChild(spRow1);
        spTable.appendChild(spRow2);
        return spTable;

    },
    createFeatElement: function(element) {
        var feat = element;
        var featTable = document.createElement('table');
        var featRow1 = document.createElement('tr');
        var featRow2 = document.createElement('tr');
        var featName = document.createElement('td');
        var featType = document.createElement('td');
        var featDescription = document.createElement('td');

        featName.textContent = feat.name;
        featTable.id = 'feat';
        featType.textContent = feat.typeDisplay;
        featDescription.textContent = feat.description;
        featDescription.colSpan = 2;
        featRow1.appendChild(featName);
        featRow1.appendChild(featType);
        featRow2.appendChild(featDescription);
        featTable.appendChild(featRow1);
        featTable.appendChild(featRow2);
        return featTable;

    },
  createWeaponElement: function(elt){
    var weapon = elt;
    var weaponTable = document.createElement('table');
        var weaponRow1 = document.createElement('tr');
        var weaponRow2 = document.createElement('tr');
        var weaponRow3 = document.createElement('tr');

        var weaponName = document.createElement('td');
        var weaponType = document.createElement('td');
        var weaponAtk = document.createElement('td');
        var weaponDmg = document.createElement('td');
        var weaponDescription = document.createElement('td');
        
        var weaponMod = elt.attribute;
        if (weaponMod = 'DEX'){
          var attrMod = Math.floor((statArray.stat[0].DEX - 10) / 2);
          
        } else {
          var attrMod = Math.floor((statArray.stat[0].STR - 10) / 2);
        }
        console.log(attrMod);
        weaponName.textContent = weapon.name;
        weaponTable.id = 'weapon';
        weaponType.textContent = 'Attribute: ' + weapon.attribute;
        weaponDescription.textContent = weapon.description;
        weaponAtk.textContent = 'Attack roll: 1d20 + ' + (attrMod+otherArray.other[0].profBonus);
        weaponDmg.textContent = 'Damage roll: ' + weapon.dmgDie + ' + ' + attrMod;
        weaponDescription.colSpan = 2;
        weaponRow1.appendChild(weaponName);
        weaponRow1.appendChild(weaponType);
        weaponRow3.appendChild(weaponAtk);
        weaponRow3.appendChild(weaponDmg);
        weaponRow2.appendChild(weaponDescription);
        weaponTable.appendChild(weaponRow1);
    weaponTable.appendChild(weaponRow3);
        weaponTable.appendChild(weaponRow2);
        console.log(weaponTable);
        return weaponTable;

    
    
  },
    setUpMeat: function() {
        spellbook.setUpSpells();
        featSpellbook.setUpSpells();
        feats.setUpFeats();
        weaponArray.setUpWeapons();
        view.displayMeat();
    },
    setUpSpellEventListeners: function() {

        var spellDiv = document.querySelector('div#spellDiv');
        spellbook.spell.forEach(function(element) {
            element.show = false;
        });
        spellDiv.addEventListener('click', function(event) {
            var elementIdClicked = event.target.parentNode.parentNode.id;

            var spellbookIdArray = [];
            var book = spellbook.spell;
            spellbook.spell.forEach(function(element) {
                spellbookIdArray.push(element.spellId);
            });

            var spellIndex = spellbookIdArray.indexOf(elementIdClicked);
            if (spellIndex > -1) {
                view.spellClick(spellIndex);
            }

            // if (elementIdClicked.indexOf(
        });
    },
    spellClick: function(spellIndex) {
        var spell = spellbook.spell[spellIndex];

        var showSpell = spell.show;
        console.log('the current show status is ' + showSpell);
        var parentTable = document.querySelector('table#' + spell.spellId);
        //add image
        if (showSpell === false) {
            var spellImage = document.createElement('img');
            spellImage.src = spell.link;
            spellImage.id = spell.spellId;
            parentTable.appendChild(spellImage);
            spellbook.spell[spellIndex].show = true;
            console.log('and has been changed to ' + spellbook.spell[spellIndex].show);


        } else { //remove image
            var spellImage = document.querySelector('img#' + spell.spellId);
            parentTable.removeChild(spellImage);
            spellbook.spell[spellIndex].show = false;
            console.log('and has been changed to ' + spellbook.spell[spellIndex].show);
        }

    }


};

view.setUpEventListeners();

var proficiencies = ['Wis Saving Throw',
    'Cha Saving Throw',
    'Deception',
    'Intimidation'
];
var stdStatArray = statArray.addStat(11, 14, 16, 13, 8, 16);
//statArray.weapons.addWeapon('crossbow','DEX','1d8',0,'piercing dmg, requires bonus action to load');
view.defaultTab();