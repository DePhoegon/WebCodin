﻿var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var images = ["images/1234702096.kerns_seaofblood.jpg", "images/1270599430.kerns_untitled.jpg", "images/1270599778.kerns_old.jpg", "images/1270790464.kerns_hearthandcolored.jpg", "images/1432664220315.jpg", "images/1487723229718.jpg", "images/151.jpg", "images/152.jpg", "images/153.jpg", "images/154.jpg", "images/155.jpg", "images/156.jpg", "images/157.jpg", "images/15_min_plant_by_kernsd9hb7ye.jpg", "images/20140610.jpg", "images/20150316.jpg", "images/20150317.jpg", "images/20150324.jpg", "images/20150517.jpg", "images/40431165.jpg", "images/4_way_by_kerns_dbv48xcpre.jpg", "images/841b435a60eb499689e37faee21d1302.jpg", "images/a_future_without_life_by_kerns_dbgrgcefullview.jpg", "images/background_practice_by_kerns_d8jdnorfullview.jpg", "images/bare_bones_flow_by_kerns_dbi47abfullview.jpg", "images/birds_of_color_by_kerns_dbha74ifullview.jpg", "images/blue_by_kernsd9t6tdc.jpg", "images/challenge___what_happens_next_by_kernsd9hvsdl.jpg", "images/city_corner_prior_by_kernsd9tkkbg.jpg", "images/city_landscape__sunset_on_oblivion_mountains_by_kernsd9h9wm5.jpg", "images/colored_sketch__unamed_by_kerns_dbvcx1wpre.jpg", "images/darker_landscapes_by_kernsdb1q9tv.jpg", "images/dephine_by_kerns_dbfey1lfullview.jpg", "images/dragon_penned_by_kerns_d2nqljhpre.jpg", "images/dragon_pen_by_kerns_d2nqluopre.jpg", "images/e757d9be0fbf9d9fb79a151a4807b7f9.jpg", "images/face_of_____by_kerns.jpg", "images/focused_by_kerns_dbpkqwipre.jpg", "images/green_dragon___earth_day_plans_by_kerns.jpg", "images/green__by_kernsd9t6r2n.jpg", "images/heart_of_pain_by_kernsd2nqk91.jpg", "images/horse_by_kerns_dbmpwh6fullview.jpg", "images/IMG_20150220_183114.jpg", "images/KPDac1.jpg", "images/KPDac2.jpg", "images/KPDac3.jpg", "images/KPDac4.jpg", "images/KPDinnerlgt.jpg", "images/KPDwipPre2.jpg", "images/KPDwipPre2alt.jpg", "images/layered_view_by_kernsdaic6tb.jpg", "images/light_spread__by_kerns_dbooxynpre.jpg", "images/limited_color_background__by_kernsd9hwd22.jpg", "images/love_by_kernsdaaf18f.jpg", "images/magics_entry_by_kerns_dab4pm2fullview.jpg", "images/magics__path_by_kernsda9ubd7.jpg", "images/metallic_scene_by_kerns_dbw3pbspre.jpg", "images/orange_you_glad__by_kernsda59zyr.jpg", "images/painted_desert_by_kerns_db33p1mfullview.jpg", "images/preportion_practice_by_kerns_dbx902qpre.jpg", "images/red_by_kernsd9t6ool.jpg", "images/resized_JPEG_1488382206699_907011133.jpg", "images/Screenshot_20170905185901.jpg", "images/shadow_hash_by_kernsd9xcy9s.jpg", "images/shadow_stalker_by_kerns.jpg", "images/simple_flow_by_kerns_dbi472vfullview.jpg", "images/sketch1458059312499.jpg", "images/sketch1458077269800.jpg", "images/sketch1458246531286.jpg", "images/sketch1458263870452.jpg", "images/sketch_this__landscape___mountain__by_kerns_d9h001wfullview.jpg", "images/slice_by_kerns_db2llpufullview.jpg", "images/solo_flower_by_kernsd9j50qz.jpg", "images/stone_by_kernsd9vpfxb.jpg", "images/test01.jpg", "images/timed_tree_challenge_by_kernsd9fdtgv.jpg", "images/Untitled(1).jpg", "images/Untitled.jpg", "images/wave_by_kerns_dbgy9v9fullview.jpg", "images/which_side_up__by_kernsd9hxdai.jpg", "images/world_bird.jpg", "images/world___peace__by_kernsd9jhzfd.jpg", "images/0c80eee59bca422b813c4b77e8f7e80f2.png", "images/0e2ccff3185d45f695e289c5150127b8.png", "images/0fe155002c524f459be8bbd9ab03b768.png", "images/13c7578df36e4512a960118566de7db8.png", "images/1490139248300562.png", "images/1494515644575232.png", "images/151.png", "images/152.png", "images/153.png", "images/1dd1b3bc9f4f471394923d331a69dac82.png", "images/1e6f232c1d8f4b3b8e894b54f7a7f141.png", "images/20150405.png", "images/20150409.png", "images/20150414.png", "images/20150417.png", "images/22611d607c6a4cfc890f22bd0310412a.png", "images/26afdb0a38ce4fbd86b8eecb0616e87a.png", "images/295421a0400c40bea198bfff1b3db6a4.png", "images/2b0a7391919f4258b3fb05e0e9b57242.png", "images/300909f0f1ec45979561ce4e1be92a13.png", "images/35186aa3883c49498ef4ea503de6290f.png", "images/37f830496ca6485d9dc2aa06c0535fd0.png", "images/3b57d088f193440fa3fd0b53a92376c8.png", "images/3cc5d88e9e68437f87351ec430891fa5.png", "images/4d8cd096c07742668ad7b7c037373d81.png", "images/50c107a39718499997af3a4248b5c16c.png", "images/516a75a92e074e179c122bf8edcbab65.png", "images/561b9f6167204ac39c136f8f2e855c0a.png", "images/621ab2fa0df7479e944cc12fbcd71e19.png", "images/677cc8c3fd3e4197b24350394f2e2d71.png", "images/7705af080a3640f9a18e51dddfd63ede.png", "images/82dcf802afd24a75b558851da2a8faf8.png", "images/8427c746f70c421189c64daaa1f98ef3.png", "images/853cca58f90d4dbc86aebc6d2e8dc968.png", "images/8a0a5cdbf9054013bf80b322aa18dadb.png", "images/8b784e5e55204dfc87e2553731a908c0.png", "images/8bfa26ee1e61430f93b06bbe7dab95da.png", "images/8d635a0a8ce744b898e0d03655d033f7.png", "images/8ef6c5c92d3b4c83bbcbc602195caf02.png", "images/8fa08ce70fca4d85ba94d5e71e232a54.png", "images/918072a9463442f58b50d0c687983e47.png", "images/930df460dfcc410ba5ebe17672fb4849.png", "images/9343f05c67a64d549f8a5f65e011c51b.png", "images/955dd2bf35434397a1ea4c6faa1f9363.png", "images/9a4827be9a4f44b194fc933d72285c21.png", "images/9dc236cd96d249b3b914f6e16d93ea1d.png", "images/a42f29000e744c2fb51169243225c9741.png", "images/a42f29000e744c2fb51169243225c974.png", "images/b11a34880b9845efa0f0b706d08bb09c.png", "images/b1431fe89c7c4831b3c3c3ef194e8eae.png", "images/bd732764f5254d2bb0f281964bbf6ea81.png", "images/bd732764f5254d2bb0f281964bbf6ea8.png", "images/be1263ad5fbf4efca9e5e8ce249e24da.png", "images/bf14c7da6f0340f58e05698a62c73b59.png", "images/c2bc1d1525d344d1bb659842ffa8680e.png", "images/c46177f15651465394a3b512b5a8e60f.png", "images/cd1fb9e334254cdda08a5ed8176acc36.png", "images/cf4d7b105b1b4533bbe30059237e3170.png", "images/d7a92bc965b248c88a2a7e74a7ef1b2d.png", "images/dea71f02323a40ea91e5ce3a7c4f998c.png", "images/e492d98e97b941ff8ac0ecb2f5ebec43.png", "images/e5053ecc4c1b4fcfbcde66e33a2d3e3e.png", "images/eaa29dc36c734afebb6b7911f2576c67.png", "images/f0a155ff804d4e00b4f2541e0c5967ab.png", "images/f10f1ae607b94474ae7b42c9f6c0eed4.png", "images/f1fdcbaebb4c467e975df6043a0f451b.png", "images/sketch1428607652065.png", "images/sketch1432656633927.png", "images/sketch1432656717162.png", "images/sketch1459525490168.png", "images/sketch1459555230936.png", "images/sketch1459558211942.png", "images/sketch1463151447762.png", "images/sketch1473467021381.png", "images/sketch1479752176955.png", "images/sketch1481681340492.png", "images/sketch1508545394145.png", "images/Sketch275172237.png"]
function color() {
    var Tile = document.getElementsByClassName("area");
    var i;
    for (i = 0; i < Tile.length; i++) {
        var n1 = rng(100);
        var n2 = rng(100);
        var n3 = rng(100);
        Tile[i].style.backgroundColor = 'rgb(' + n1 + ',' + n2 + ',' + n3 + ')';
    }
    bcktst();
} /* Getting an background color via - rgb, using rng function */
function bcktst() {
    var hold = document.getElementsByClassName("hold");
    var t;
    for (t = 0; t < hold.length; t++) {
        hold[t].src = img();
    } 
} /* assigning random images, of all images in a class of an image tag */
function rng(LN) {
    var D = Math.floor((Math.random() * LN));
    var E = Math.floor((Math.random() * LN));
    var F = Math.floor((Math.random() * (LN/2)));
    var Z = D + E + F;
    return Z;
} /* Generate RNG of upto 2.5 times the length of the area. designed for a 100 item array 0-250 value for doing random colors */
function img() {
    var D = Math.floor((Math.random() * images.length));
    var R = images[D]
    return R;
} /* getting a random image from an array - Testing setup for image mapping. */
var t = 0;
function addrmimg() {
    if (t == 0) {
        document.getElementById("demo").innerHTML = "<img src='http://i.ebayimg.com/images/i/350788387020-0-1/s-l1000.jpg'/>";
        /* http:// or images/Sketch275172237.png like */
        t = "pic";
    } else {
        document.getElementById("demo").innerHTML = "";
        t = 0;
    }
}