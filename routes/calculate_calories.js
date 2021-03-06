var express = require('express');
var http = require('http');
var router = express.Router();

// Post requests

router.post('/', (req, res) => {
  let weight = req.body.weight;
  let minutes = req.body.minutes;
  let id = req.body.id;
  let table = {
    "1": "6.5",
    "2": "8.5",
    "3": "10.0",
    "4": "7.0",
    "5": "5.0",
    "6": "3.5",
    "7": "3.0",
    "8": "7.0",
    "9": "7.0",
    "10": "4.5",
    "11": "8.0",
    "12": "6.0",
    "13": "7.0",
    "14": "4.5",
    "15": "6.5",
    "16": "4.0",
    "17": "16.0",
    "18": "6.0",
    "19": "8.0",
    "20": "10.0",
    "21": "12.0",
    "22": "8.5",
    "23": "7.0",
    "24": "5.5",
    "25": "7.0",
    "26": "3.0",
    "27": "12.5",
    "28": "10.5",
    "29": "2.5",
    "30": "3.0",
    "31": "12.0",
    "32": "6.0",
    "33": "9.0",
    "34": "7.0",
    "35": "8.0",
    "36": "3.5",
    "37": "4.0",
    "38": "12.0",
    "39": "12.0",
    "40": "3.0",
    "41": "7.0",
    "42": "3.0",
    "43": "8.0",
    "44": "3.0",
    "45": "2.5",
    "46": "4.0",
    "47": "2.0",
    "48": "5.0",
    "49": "2.5",
    "50": "4.0",
    "51": "4.8",
    "52": "5.5",
    "53": "3.0",
    "54": "4.5",
    "55": "2.5",
    "56": "3.0",
    "57": "6.0",
    "58": "2.5",
    "59": "3.5",
    "60": "6.0",
    "61": "3.0",
    "62": "2.0",
    "63": "2.5",
    "64": "9.0",
    "65": "8.0",
    "66": "3.0",
    "67": "8.0",
    "68": "4.0",
    "69": "4.5",
    "70": "3.0",
    "71": "4.3",
    "72": "3.5",
    "73": "4.0",
    "74": "4.0",
    "75": "12.0",
    "76": "8.0",
    "77": "6.0",
    "78": "8.0",
    "79": "8.0",
    "80": "3.5",
    "81": "4.0",
    "82": "6.5",
    "83": "2.5",
    "84": "5.0",
    "85": "12.0",
    "86": "10.0",
    "87": "5.0",
    "88": "7.0",
    "89": "8.0",
    "90": "4.0",
    "91": "6.5",
    "92": "2.5",
    "93": "4.0",
    "94": "6.0",
    "95": "9.0",
    "96": "7.0",
    "97": "5.5",
    "98": "2.5",
    "99": "2.0",
    "100": "4.0",
    "101": "2.0",
    "102": "3.0",
    "103": "2.5",
    "104": "4.0",
    "105": "8.0",
    "106": "2.5",
    "107": "6.5",
    "108": "7.0",
    "109": "10.0",
    "110": "4.0",
    "111": "11.0",
    "112": "8.0",
    "113": "12.0",
    "114": "12.0",
    "115": "10.0",
    "116": "8.0",
    "117": "3.5",
    "118": "7.0",
    "119": "12.0",
    "120": "8.5",
    "121": "10.0",
    "122": "16.0",
    "123": "18.0",
    "124": "8.0",
    "125": "9.0",
    "126": "10.0",
    "127": "11.0",
    "128": "11.5",
    "129": "12.5",
    "130": "13.5",
    "131": "14.0",
    "132": "15.0",
    "133": "8.0",
    "134": "15.0",
    "135": "8.0",
    "136": "3.0",
    "137": "5.0",
    "138": "3.0",
    "139": "5.0",
    "140": "5.5",
    "141": "7.0",
    "142": "9.0",
    "143": "15.0",
    "144": "7.0",
    "145": "7.0",
    "146": "7.0",
    "147": "14.0",
    "148": "8.0",
    "149": "7.0",
    "150": "16.5",
    "151": "9.0",
    "152": "5.0",
    "153": "6.0",
    "154": "8.0",
    "155": "7.0",
    "156": "6.0",
    "157": "7.0",
    "158": "7.0",
    "159": "6.0",
    "160": "7.0",
    "161": "5.0",
    "162": "8.0",
    "163": "3.5",
    "164": "7.0",
    "165": "10.0",
    "166": "5.0",
    "167": "4.0",
    "168": "12.0",
    "169": "9.0",
    "170": "2.5",
    "171": "3.0",
    "172": "10.0",
    "173": "7.0",
    "174": "7.0",
    "175": "10.0",
    "176": "11.0",
    "177": "6.0",
    "178": "8.0",
    "179": "8.0",
    "180": "10.0",
    "181": "4.0",
    "182": "4.0",
    "183": "4.0",
    "184": "6.0",
    "185": "5.0",
    "186": "7.0",
    "187": "8.0",
    "188": "5.0",
    "189": "8.0",
    "190": "8.0",
    "191": "3.0",
    "192": "2.5",
    "193": "3.0",
    "194": "2.8",
    "195": "3.3",
    "196": "3.8",
    "197": "6.0",
    "198": "5.0",
    "199": "6.3",
    "200": "8.0",
    "201": "3.5",
    "202": "8.0",
    "203": "5.0",
    "204": "7.0",
    "205": "4.0",
    "206": "10.0",
    "207": "3.0",
    "209": "3.0",
    "210": "5.0",
    "211": "0.0",
    "212": "0.0",
    "213": "0.0",
    "214": "0.0",
    "215": "0.0",
    "216": "0.0",
    "217": "0.0",
    "218": "0.0",
    "219": "0.0",
    "220": "0.0",
    "221": "0.0",
    "222": "0.0",
    "223": "0.0",
    "224": "0.0",
    "225": "0.0",
    "226": "0.0",
    "227": "0.0",
    "228": "0.0",
    "229": "0.0",
    "230": "0.0",
    "231": "0.0",
    "232": "0.0",
    "233": "0.0",
    "234": "0.0",
    "235": "0.0",
    "236": "0.0",
    "237": "0.0",
    "238": "0.0",
    "239": "0.0",
    "240": "0.0",
    "241": "0.0",
    "242": "0.0",
    "243": "0.0",
    "244": "0.0",
    "245": "0.0",
    "246": "0.0",
    "247": "0.0",
    "248": "0.0",
    "249": "0.0",
    "250": "0.0",
    "251": "0.0",
    "252": "0.0",
    "253": "0.0",
    "254": "0.0",
    "255": "0.0",
    "256": "0.0",
    "257": "0.0",
    "258": "0.0",
    "259": "0.0",
    "260": "0.0",
    "261": "0.0",
    "262": "0.0",
    "263": "0.0",
    "264": "0.0",
    "265": "0.0",
    "266": "0.0",
    "267": "0.0",
    "268": "0.0",
    "269": "0.0",
    "270": "0.0",
    "271": "0.0",
    "272": "0.0",
    "273": "0.0",
    "274": "0.0",
    "275": "0.0",
    "276": "0.0",
    "277": "0.0",
    "278": "0.0",
    "279": "0.0",
    "280": "0.0",
    "281": "0.0",
    "282": "0.0",
    "283": "0.0",
    "284": "0.0",
    "285": "0.0",
    "286": "0.0",
    "287": "0.0",
    "288": "0.0",
    "289": "0.0",
    "290": "0.0",
    "291": "0.0",
    "292": "0.0",
    "293": "0.0",
    "294": "0.0",
    "295": "0.0",
    "296": "0.0",
    "297": "0.0",
    "298": "0.0",
    "299": "0.0",
    "300": "0.0",
    "301": "0.0",
    "302": "0.0",
    "303": "0.0",
    "304": "0.0",
    "305": "0.0",
    "306": "0.0",
    "330": "9.0",
    "421029": "2.5",
    "421030": "2.5",
    "421033": "5.1",
    "421078": "10.1",
    "421081": "11.9",
    "421085": "4.9",
    "421090": "7.3",
    "421093": "7.1",
    "421094": "8.3",
    "421098": "10.1",
    "421101": "4.5",
    "421102": "8.8",
    "421259": "7.6",
    "421260": "5.5",
    "421267": "7.9",
    "421271": "3.5",
    "421296": "6.2",
    "421298": "7.9",
    "421301": "6.2",
    "421303": "7.0",
    "421304": "14.6",
    "421306": "10.1",
    "421309": "10.1",
    "421311": "8.0",
    "421314": "3.5",
    "421315": "2.9",
    "421316": "5.4",
    "421318": "2.6",
    "421321": "3.5",
    "421322": "2.5",
    "421323": "4.0",
    "421325": "2.4",
    "421327": "4.0",
    "421330": "2.9",
    "421331": "2.6",
    "421334": "4.0",
    "421335": "2.5",
    "421336": "6.2",
    "421380": "4.5",
    "421381": "6.2",
    "20499218": "8.8",
    "23059328": "5.41",
    "23059329": "7.97",
    "23059330": "7.91",
    "23059331": "8.02",
    "23059332": "9.15",
    "23059333": "7.49",
    "23059334": "3.86",
    "26688321": "3.3",
    "63844869": "3.0",
    "63844870": "3.0",
    "63844871": "3.0",
    "63844872": "3.0",
    "63844873": "3.0",
    "63844874": "3.0",
    "63844875": "3.0",
    "63844876": "3.0",
    "63844877": "3.0",
    "63844878": "3.0",
    "63844879": "3.0",
    "63844880": "3.0",
    "63844881": "3.0",
    "63844882": "3.0",
    "63844883": "3.0",
    "63844884": "3.0",
    "63844885": "3.0",
    "63844886": "3.0",
    "63844887": "3.0",
    "63844888": "3.0",
    "63844889": "3.0",
    "63844890": "3.0",
    "63844891": "3.0",
    "63844892": "3.0",
    "63844893": "3.0",
    "63844894": "3.0",
    "63844895": "3.0",
    "63844896": "3.0",
    "63844897": "3.0",
    "63844898": "3.0",
    "63844899": "3.0",
    "63844900": "3.0",
    "63844901": "3.0",
    "63844902": "3.0",
    "63844903": "3.0",
    "63844904": "3.0",
    "63844905": "3.0",
    "63844906": "3.0",
    "63844907": "3.0",
    "63844908": "3.0",
    "63844909": "3.0",
    "63844910": "3.0",
    "63844911": "3.0",
    "63844912": "3.0",
    "63844913": "3.0",
    "63844914": "3.0",
    "63844915": "3.0",
    "63844916": "3.0",
    "63844917": "3.0",
    "63844918": "3.0",
    "63844919": "3.0",
    "63844920": "3.0",
    "63844921": "3.0",
    "63844922": "3.0",
    "63844923": "3.0",
    "63844924": "3.0",
    "63844925": "3.0",
    "63844926": "3.0",
    "63844927": "3.0",
    "63844928": "3.0",
    "63844929": "3.0",
    "63844930": "3.0",
    "63844931": "3.0",
    "63844932": "3.0",
    "63844933": "3.0",
    "63844934": "3.0",
    "63844935": "3.0",
    "63844936": "3.0",
    "63844937": "3.0",
    "63844938": "3.0",
    "63844939": "3.0",
    "63844940": "3.0",
    "63844941": "3.0",
    "63844942": "3.0",
    "63844943": "3.0",
    "63844944": "3.0",
    "63844945": "3.0",
    "63844946": "3.0",
    "63844947": "3.0",
    "63844948": "3.0",
    "63844949": "3.0",
    "63844950": "3.0",
    "63844951": "3.0",
    "63844952": "3.0",
    "63844953": "3.0",
    "63844954": "3.0",
    "63844955": "3.0",
    "63844956": "3.0",
    "63844957": "3.0",
    "63844958": "3.0",
    "63844959": "3.0",
    "63844960": "3.0",
    "63844961": "3.0",
    "63844962": "3.0",
    "63844963": "3.0",
    "63844964": "3.0",
    "63844965": "3.0",
    "63844966": "3.0",
    "63844967": "3.0",
    "63844968": "3.0",
    "63844969": "3.0",
    "63844970": "3.0",
    "63844971": "3.0",
    "63844972": "3.0",
    "63844973": "3.0",
    "63844974": "3.0",
    "63844975": "3.0",
    "63844976": "3.0",
    "63844977": "3.0",
    "63844978": "3.0",
    "63844979": "3.0",
    "63844980": "3.0",
    "63844981": "3.0",
    "63844982": "3.0",
    "63844983": "3.0",
    "63844984": "3.0",
    "63844985": "3.0",
    "63844986": "3.0",
    "63844987": "3.0",
    "63844988": "3.0",
    "63844989": "3.0",
    "63844990": "3.0",
    "63844991": "3.0",
    "63844992": "3.0",
    "63844993": "3.0",
    "63844994": "3.0",
    "63844995": "3.0",
    "63844996": "3.0",
    "63844997": "3.0",
    "63844998": "3.0",
    "63844999": "3.0",
    "63845000": "3.0",
    "63845001": "3.0",
    "63845002": "3.0",
    "63845003": "3.0",
    "63845004": "3.0",
    "63845005": "3.0",
    "63845006": "3.0",
    "63845007": "3.0",
    "63845008": "3.0",
    "63845010": "3.0",
    "63845011": "3.0",
    "73082227": "5.3"
    }

  
  console.log(req.body);
  let answer = {
    "answer": (minutes/60)*weight*table[id]

  }

  res.json(answer);

})

module.exports = router;
