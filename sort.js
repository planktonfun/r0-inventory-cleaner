// exceptions
prices['cross_bow_1s']['snapping'] = 999;
prices['mage_coat']['snapping'] = 999;

//filter
for (var vehicle in prices) {
	if(prices[vehicle]['snapping'] < 1)
		prices[vehicle]['snapping']=0;

	prices[vehicle]['id'] = 1000;
}

// RO sorting algo
prices['time_twister']['id'] = 1;
prices['rose_quartz']['id'] = 2;
prices['wrapping_lace']['id'] = 3;
prices['bell']['id'] = 4;
prices['heroic_emblem']['id'] = 5;
prices['bloody_rune']['id'] = 6;
prices['soft_feather']['id'] = 7;
prices['pearl']['id'] = 8;
prices['orc_claw']['id'] = 9;
prices['fabric']['id'] = 10;
prices['antenna']['id'] = 11;
prices['memory_gem']['id'] = 12;
prices['christmas_socks']['id'] = 13;
prices['orcish_voucher']['id'] = 14;
prices['amethyst']['id'] = 15;
prices['topaz']['id'] = 16;
prices['zircon']['id'] = 17;
prices['mandragora']['id'] = 18;
prices['skel_bone']['id'] = 19;
prices['christmas_garland']['id'] = 20;
prices['glitter_shell']['id'] = 21;
prices['armor_shard']['id'] = 22;
prices['mercury']['id'] = 23;
prices['gold_sand']['id'] = 24;
prices['coal']['id'] = 25;
prices['steel']['id'] = 26;
prices['iron']['id'] = 27;
prices['frozen_heart']['id'] = 28;
prices['crystal_bone']['id'] = 29;
prices['necklace_of_oblivion']['id'] = 30;
prices['hand_of_god']['id'] = 31;
prices['evil_horn']['id'] = 32;
prices['immortal_heart']['id'] = 33;
prices['memento']['id'] = 34;
prices['abyss_flower']['id'] = 35;
prices['necklace_of_wisdom']['id'] = 36;
prices['glass_bead']['id'] = 37;
prices['hard_skin']['id'] = 38;
prices['sticky_mucus']['id'] = 39;
prices['box_wrapper']['id'] = 40;
prices['temporal_crystal']['id'] = 41;
prices['cyfar']['id'] = 42;
prices['brigan']['id'] = 43;
prices['scell']['id'] = 44;
prices['garlet']['id'] = 45;
prices['zargon']['id'] = 46;
prices['jellopy']['id'] = 47;

var sortable = [];
for (var vehicle in prices) {
    sortable.push([vehicle, prices[vehicle]['id']]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
});


items = [];
for (var i = 0; i < sortable.length; i++) {
	// remove all crafting equips and leave all materials
	if(recipes[sortable[i][0]] === undefined) {
		items.push(sortable[i][0]);
	}
}