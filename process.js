var recipes = {
    "buster_1s": {"iron":10, "rotten_bandage":80,"black_magic_ore":10, "cost":10000, "profit": 84000},
    "cross_bow_1s": {"iron":5, "jellopy":100, "cost":10000, "profit": 24200},
    "haeodonggum_1s": {"iron":5, "jellopy":100, "cost":10000, "profit": 24200},
    "deathcat_shoes": {"mandragora":15, "rotten_bandage":125,"iron":6, "cost":10000, "profit": 160635},
    "fullblack_dagger_1s": {"iron":5,"jellopy":100, "cost":10000, "profit": 2400},
    "healing_staff_1s": {"mandragora":15,"iron":5,"jellopy":125, "cost":10000, "profit": 7904},
    "piercing_staff_1s": {"iron":5,"jellopy":100, "cost":10000, "profit": 2420},
    "mink_coat": {"rotten_bandage":80,"feather":120,"cost": 15000, "profit": 3240},
    "safety_boots": {"steel":10,"feather":180,"cost": 15000, "profit": 7560},
    "wooden_mail": {"steel":10,"memento":120,"cost": 15000, "profit": 77120},
    "cotton_shirt": {"rotten_bandage":100,"feather":180,"cost": 15000, "profit": 65800},
    "round_buckleer": {"steel":10,"iron":10,"cost": 15000, "profit": 45860},
    "lords_clothes": {"feather":200,"warm_meal":2,"scarlet_dyestuffs":5,"cost": 15000, "profit": 50000},
    "statue_of_judgement": {"steel":10,"memento":160,"cost": 15000, "profit": 91140},
    "mage_coat": {"feather":80,"rotten_bandage":120,"cost": 15000, "profit": 62240},
    "scapulare": {"rotten_bandage":80,"feather":120,"cost": 15000, "profit": 53000},
    "manteau": {"feather":100,"rotten_bandage":180,"cost": 15000, "profit": 84040},
    "orcish_axe_1s": {"steel":20,"memento":180,"black_magic_ore":20,"cost": 15000, "profit": 137520},
    "sword_mace_1s": {"steel":10,"memento":160,"cost": 15000, "profit": 90600},
    "floral_bracelet": {"aquamarine":15,"steel":13,"memento":150,"cost": 15000, "profit": 138028},
    "magic_bible_vol1": {"aquamarine":10,"steel":13,"memento":150,"cost": 15000, "profit": 125828},
    "mithril_gown": {"zircon":30,"sticky_mucus":150,"coal":15,"cost": 20000, "profit": 262345},
    "memory_book": {"zircon":30,"memento":300,"coal":19,"cost": 20000, "profit": 348890},
    "survivors_manteau": {"coal":15,"feather":280,"cost": 20000, "profit": 90555},
    "tights": {"coal":15,"sticky_mucus":150,"cost": 20000, "profit": 799712},
    "slaughter_1s": {"coal":35,"garlet":200,"black_magic_ore":15,"cost": 20000, "profit": 159000},
    "summoner_coat": {"coal":15,"memento":150,"cost": 20000, "profit": 110405},
    "coat_of_dragon_scale": {"coal":15,"memento":220,"cost": 20000, "profit": 0},
    "shoes": {"coal":15,"iron":15,"cost": 20000, "profit": 69260},
    "rogue_clothes": {"coal":15,"sticky_mucus":150,"cost": 20000, "profit": 80555},
    "soldier_boots": {"coal":15,"steel":15,"cost": 20000, "profit": 99395},
    "skull_bracer": {"coal":15,"memento":240,"cost": 20000, "profit": 137120},
    "ragamuffin_manteau": {"coal":15,"memento":280,"cost": 20000, "profit": 154395},
    "attached_sword_1s": {"zircon":30,"coal":20,"garlet":280,"cost": 25000, "profit": 294100},
    "survivors_rod_1s": {"coal":15,"garlet":240,"cost": 20000, "profit": 91355},
    "release_of_wish_1s": {"zircon":30,"coal":20,"garlet":280,"cost": 25000, "profit": 294680},
    "gakkung_bow_1s": {"coal":15,"sticky_mucus":240,"cost": 20000, "profit": 126355},
    "rune_shoes": {"orcish_voucher":30,"soft_feather":2,"skel_bone":25, "profit": 374461},
    "blood_axe_1s": {"orcish_voucher":35,"bloody_rune":2,"skel_bone":80,"necklace_of_wisdom":350, "profit": 486566},
    "guillotine_katar_1s": {"orcish_voucher":30,"heroic_emblem":2,"skel_bone":25, "profit": 303691},
    "feather_mace_1s": {"orcish_voucher":10,"cursed_ruby":1,"skel_bone":40,"hand_of_god":450, "profit": 483999},
    "mithril_metal_armor": {"orcish_voucher":30,"cursed_ruby":2,"skel_bone":25,"mercury":60, "profit": 623183},
    "bohemian_coat": {"orcish_voucher":10,"skel_bone":40,"fabric":1,"hand_of_god":600, "profit": 527167},
    "rescuer_shoes": {"orcish_voucher":10,"skel_bone":40,"bloody_rune":1,"necklace_of_wisdom":600, "profit": 308148},
    "roguemasters_bow_1s": {"orcish_voucher":10,"skel_bone":40,"star_crumb":1,"hand_of_god":550, "profit": 490795, "cost":25000},
    "knuckle_dusters_1s": {"orcish_voucher":30,"bell":2,"skel_bone":80,"brigan":300, "profit": 660856, "cost": 30000},
    "staff_of_element_fusion_1s": {"orcish_voucher":30,"star_crumb":2,"skel_bone":25, "profit": 422585},
    "lance_1s": {"gold_sand":15,"immortal_heart":190,"cost": 20000, "profit": 75460},
    "statue_of_guardian_angel": {"gold_sand":15,"immortal_heart":185,"cost": 20000, "profit": 74190},
    "pole_axe_1s": {"gold_sand":15,"scell":185,"cost": 20000, "profit": 122475},
    "high_heels": {"gold_sand":15,"immortal_heart":185,"cost": 20000, "profit": 74930, "cost":20000},
    "fox_wrist_guard": {"gold_sand":15,"hard_skin":185, "profit": 100460},
    "ninja_suit_sakura": {"gold_sand":15,"hard_skin":165,"cost": 20000, "profit": 92540},
    "golden_ornament": {"gold_sand":15,"iron":15,"cost": 20000, "profit": 34400},
    "chain_mail": {"gold_sand":15,"iron":15,"cost": 20000, "profit": 64040},
    "cleaver_1s": {"gold_sand":40,"immortal_heart":280,"normal_precision_stone":15,"black_magic_ore":25,"cost": 20000, "profit": 280440},
    "cutlus_1s": {"gold_sand":15,"scell":185,"cost": 20000, "profit": 122475},
    "saints_robe": {"gold_sand":15,"immortal_heart":165,"cost": 20000, "profit": 69110},
    "poison_knife_1s": {"gold_sand":15,"scell":185,"cost": 20000, "profit": 122475},
    "double_bound_1s": {"gold_sand":15,"hard_skin":185,"cost": 20000, "profit": 100460},
    "holy_stick_1s": {"gold_sand":15,"scell":185,"cost": 20000, "profit": 121550},
    "staunch_cope": {"topaz":30,"hard_skin":308,"gold_sand":25, "profit": 0},
    "dragon_vest": {"topaz":30,"immortal_heart":231,"gold_sand":15, "profit": 165874, "cost":25000},
    "goibnes_spaulders": {"topaz":30,"hard_skin":231,"gold_sand":15, "profit": 198676, "cost": 25000},
    "katar_of_quaking_1s": {"topaz":30,"gold_sand":25,"scell":280, "profit": 296200},
    "sack_teddy_shoes": {"mercury":15,"glass_bead":150, "profit": 112040},
    "momo_shoes": {"mercury":15,"glass_bead":150, "profit": 110210},
    "cardo_1s": {"amethyst":30,"mercury":20,"evil_horn":188, "profit": 238702},
    "windhawk_1s": {"amethyst":35,"antenna":2,"mercury":80,"slow_atk_alloy":20, "profit": 832569},
    "black_wing_1s": {"amethyst":10,"mercury":25,"orc_claw":1,"evil_horn":300, "profit": 320617},
    "desert_twilight_1s": {"mercury":15,"zargon":150, "profit": 107390},
    "waghnak_1s": {"mercury":20,"evil_horn":300, "profit": 179600},
    "falken_blitz_1s": {"mercury":15,"zargon":150, "profit": 107840},
    "calder_dagger_1s": {"amethyst":10,"mercury":25,"pearl":1,"glass_bead":300, "profit": 315031},
    "alloy_mail": {"mercury":15,"zargon":300, "profit": 4472431},
    "berdysz_1s": {"mercury":20,"evil_horn":300, "profit": 215280},
    "guillotine_1s": {"armor_shard":100,"rapid_atk_alloy":25,"rose_quartz":3,"necklace_of_oblivion":650, "profit": 1392987, "cost":35000},
    "rune_armor": {"armor_shard":120,"lemegeton_tear":50,"necklace_of_wisdom":752,"necklace_of_oblivion":580, "profit": 5445870},
    "scalpel_1s": {"cost":30000, "broken_blade":30,"wrapping_lace":1,"armor_shard":90,"abyss_flower":450, "profit": 482671},
    "forest_staff_1s": {"armor_shard":100,"skel_bone":120,"abyss_flower":780,"dead_branch":350, "profit": 1046500},
    "bazerald_1s": {"broken_blade":40,"armor_shard":150,"crystal_mirror":3,"cyfar":688, "profit": 895731, "craft":35000},
    "mirror_shield": {"broken_blade":35,"armor_shard":120,"crystal_mirror":2,"abyss_flower":512, "profit": 683626, "cost":35000},
    "ivory_knife_1s": {"broken_blade":30,"armor_shard":70,"biotite":1,"abyss_flower":650, "profit": 832449},
    "strong_shield": {"memory_gem":35,"glitter_shell":140,"key_of_clock_tower":3,"crystal_bone":750, "profit": 0},
    "berserk_1s": {"memory_gem":30,"glitter_shell":150,"time_twister":3,"temporal_crystal":735, "profit": 4804019},
    "chemical_protection_gloves": {"christmas_socks":35,"christmas_garland":140,"ice_powder":3,"frozen_heart":750, "elunium":30, "profit": 1899280},
    "prophet_cape": {"christmas_socks":35,"christmas_garland":140,"fang_of_gram":3,"box_wrapper":750, "profit": 4650454, "elunium":30},
    "mystery_bow_1s": {
        "cost":50000, "bell":2, "coal": 15, "garlet": 150, "gold_sand":20, "hard_skin": 180, "iron": 20, "jellopy":100, "mercury":25, "orcish_voucher":33, "skel_bone":25, "steel": 30, "zargon":200
    },
    "sniping_suit": {
        "cost": 35000+35000+35000+35000,
        "necklace_of_oblivion": 450,
        "glitter_shell": 40+50,
        "memory_gem": 10+15,
        "time_twister": 1,
        "key_of_clock_tower": 2,
        "crystal_bone": 500,
        "box_wrapper": 600,
        "christmas_garland": 60 + 70,
        "christmas_socks": 25 + 20,
        "ice_powder": 2,
        "ice_cube": 700,
        "fang_of_gram": 3,
    },
  };

var zeny_mode = false; // change this if you want to have exact material process
// needs a work around for the exact material cost using inventory a.k.a a crafting simulator

function processIt() {

var temp = {};
// remove all that's not snapping
for (var i in recipes) {
  if(prices[i].snapping > 0)
        temp[i] = recipes[i];
}

recipes = temp;

var model = {
  "optimize": "profit",
  "opType": "max",
  "constraints": {
    "cost": { "max": 9999999999 } // your zeny
  },
  "variables": recipes
};

// convert file data to model
// var fs = require('fs');
// var template = fs.readFileSync('template', 'utf-8');

// var lines = template.split("\n");
// for (var i = lines.length - 1; i >= 0; i--) {
//     var data = lines[i].split('\t');

//     model.constraints[data[0].trim()] = { "max": data[1].trim()*1 };
// }

if(zeny_mode == false) {
    for (var i in inventory) {
        model.constraints[i] = { "max": inventory[i]*1 };
    }

} else {
    // convert everything to ingredient to zeny
    var zenies = {}
    for (var i in recipes) {
        var canHave = 0;
        var valid = false; // only include items you have ingredients on
        var total_zeny = 0;
        for(var j in recipes[i]) {
            if(prices[j] != undefined) {
                var qty = recipes[i][j];

                if(inventory[j] != undefined) {
                    // have max quantities of said items
                    if(Math.ceil(inventory[j]/qty) > canHave) {
                        canHave = Math.ceil(inventory[j]/qty);
                    }

                    qty -= inventory[j];
                    valid = true;
                }

                if(qty < 0)
                    qty = 0;

                total_zeny += prices[j]['price']*qty;
            }
        }

        if(recipes[i]['cost'] != undefined)
            total_zeny += recipes[i]['cost'];

        if(valid) {
            var tobestuff=  {cost:total_zeny, profit:(prices[i].price*1-total_zeny)};
            tobestuff[i] = 1;
            zenies[i] = tobestuff;
            model.constraints[i] = { "max": canHave };
        }
    }

    model.variables = zenies;
}

var getCraftingCost = function(product)
{
    if(recipes[product]['cost'] != undefined) {
        return recipes[product]['cost'];
    }

    return 0;
}

// Normalize
var constraints = model.constraints;
var ints = {};

for (var i in model.variables) {
  ints[i] = 1;

    model.variables[i].profit = prices[i].price - getCraftingCost(i);

  for(var e in model.variables[i]) {
    if(
      e != model.optimize &&
      model.constraints[e] == undefined
    ) {
      constraints[e] = { "max": 0 };
    }
  }
}
model["ints"] = ints;

console.log(JSON.stringify(model, null, 2));

results = solver.Solve(model);

// Normalize results
// remove all the zero quantity
var realResults = {};
for (var i in results)
{
  if(i == 'feasible'||i == 'result'||i == 'bounded') {

  } else if(results[i] != 0) {
    realResults[i] = results[i];
  }
}

return realResults;

}

var craftSimulator = function(inventory) {
    this.inventory = inventory;
    this.totalCost = 0;
    this.totalExchangePrice = 0;
    this.qty = 0;
    this.breakdown = {
        "gains": []
    };

    this.lastGain = 0;

    this.hasInventoryForIt = function(product) {
        var valid = false;

        for(var i in recipes[product]) {
            if(this.inventory[i] != undefined) {
                if(this.inventory[i] > 0) {
                    valid = true;
                }
            }
        }

        return valid;
    }

    this.getCraftingCost = function(product)
    {
        if(recipes[product]['cost'] != undefined) {
            return recipes[product]['cost'];
        }

        return 0;
    }

    this.addBreakDown = function(product, value) {
        if(this.breakdown[product] === undefined) {
            this.breakdown[product] = 0;
        }

        this.breakdown[product] += value;
    }

    this.craft = function(product) {

        if(this.hasInventoryForIt(product) == false) {
            return false;
        }

        var cost = this.getCraftingCost(product);

        this.addBreakDown('crafting_cost', cost);

        for(var j in recipes[product]) {
            if(prices[j] != undefined && prices[j] != 'profit') {
                var qty = recipes[product][j];

                // remove some from inventory
                if(inventory[j] != undefined) {
                    if(inventory[j] > 0) {

                        var outcome = qty - inventory[j];

                        if(qty >= inventory[j]) {
                            inventory[j] = 0;
                        } else if(inventory[j] > qty) {
                            inventory[j] -= qty;
                        }

                        qty = outcome;

                        if(qty < 0) qty = 0;
                    }
                }

                this.addBreakDown(j, prices[j]['price']*qty);
                this.addBreakDown(j+'_qty', qty);

                cost += prices[j]['price']*qty;
            } else {
                if(this.breakdown[j] === undefined) {
                    this.breakdown[j] = '????';
                }
            }
        }

        this.addBreakDown(product, prices[product]['price']);
        this.addBreakDown(product+'_qty', 1);

        this.totalCost += cost;
        this.totalExchangePrice += prices[product]['price'];
        this.qty++;

        this.calculateGains();

        return true;
    }

    this.calculateGains = function()
    {
        if(this.breakdown["gains"].length == 0) {
            this.breakdown["gains"].push(this.getTotalProfit());
            this.lastGain = this.getTotalProfit();
        } else {
            this.breakdown["gains"].push(this.getTotalProfit()-this.lastGain);
            this.lastGain = this.getTotalProfit();
        }
    }

    this.getInventory = function()
    {
        return this.inventory;
    }

    this.getTotalProfit = function() {
        return this.totalExchangePrice - this.totalCost - (this.totalExchangePrice*0.01);
    }
}

