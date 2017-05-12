/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8081,

	language: 'en',
	timeFormat: 12,
	units: 'imperial',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'MMM-mqtt_command',
			position: 'top_left',	// This can be any of the regions. Best results in left or right regions.
			header: 'Voice Commands', // This is optional
			config: {
				"mqttServer":"mqtt://blt-mqtt.cloudapp.net",
				"topic":"/mm/",
			}
		},
		{
			module: 'clock',
			position: 'top_left'
		},
	/*
		{
			module: 'smarthomethermo',
			position: 'top_left',
			config: {
				id: 'B3F922410A21CA52DC9B11909271DBA0196E247B',
				c_id: '9BEFDD08-FA85-FAAF-08BB-1679572FC22E',
				c_ltpk: '8E83C3AE5E13C96A378F8B21BFE53B6F1AC5A08893A71EFE4089506873E9C8C9',
				c_ltsk: 'C079CDA8C51EA6C2944EAC61FA019C7D9EE20B35192FC8A339944353CD3254A9',
				accessory: [
					{"name":"Thermostat","ccid": "649DEB6F4AA68257CD59895FB8C51497", "pow":"001960D45889D40F0000000000", "ltpk": "6BC4692A6A35D01118DE27D308A9AA545B59899D29E5DB922E8C769658CFA035", "type": "IDEV0005", "chars":"", "charsOut":""},
				],
				apiBase: "http://localhost:8080",
				timeout: 8000, //Call timeout
				showMode: true,
				showHumidity: true,
		    showFan: true,
				showSchedule: true,
				showService: true,
		    filterWarningPercent: 20,
		    updateInterval: 1 * 20 * 1000, // every 1 minutes
			}
		},
		*/
		{
			module: 'smarthome',
			position: 'top_right',
			config: {
				id: 'B3F922410A21CA52DC9B11909271DBA0196E247B',
				c_id: '9BEFDD08-FA85-FAAF-08BB-1679572FC22E',
				c_ltpk: '8E83C3AE5E13C96A378F8B21BFE53B6F1AC5A08893A71EFE4089506873E9C8C9',
				c_ltsk: 'C079CDA8C51EA6C2944EAC61FA019C7D9EE20B35192FC8A339944353CD3254A9',
				accessory: [
					//{"name":"Couch","ccid": "646FC02570FD3F151DBFD26F5016DAD4", "pow":"006837A8587C57000000000000", "ltpk": "2FDD29B73B12BA92DDBDAF1D0DBA8D611DE5BD3D115E2AE94B67793DBE3AC929", "type": "IDEV0001", "chars":"", "charsOut":"", "daykWh":""},
					//{"name":"Laptop","ccid": "64D7498A8F2109BDB5A654BBCB60E5A7", "pow":"00B7457158BF820B0000000000", "ltpk": "CE7AEB9FDA9A7FD226A4850B206886978EB2004C5714358BA423367D65291BA6", "type": "IDEV0001", "chars":"", "charsOut":"", "daykWh":""},
					//{"name":"Snake Light","ccid": "64453807690AA3135F29E7BEAC1C78C3", "pow":"00AF5AB058B491100000000000", "ltpk": "3138CB54C364A8EF8251C30026986C59E6880CE49870EF938E73B611E4BCFC77", "type": "IDEV0001", "chars":"", "charsOut":"", "daykWh":""},
					//{"name":"Snake Heat","ccid": "64F995A3DCD9F9BF6447C2334440030A", "pow":"0018EEE6580341040000000000", "ltpk": "E3249D1907938867E58573C681FA27E51D1DB962C88A54188CE8CAF7D2E453DB", "type": "IDEV0001", "chars":"", "charsOut":"", "daykWh":""},
					{"name":"Demo One","ccid": "64CC583814E21D536DB27FAD14408BDB", "pow":"00B147E8585183130000000000", "ltpk": "B6FA4BE72E97CF33D944C871DAF246FD864051244B081D7BE7DF69610D57A606", "type": "IDEV0001", "chars":"", "charsOut":"", "daykWh":""},
					{"name":"Demo Two","ccid": "64A8B3B70CA9EDAAF9E17DC77856CBC5", "pow":"007530EA585E401C0000000000", "ltpk": "A021681A33E990E0AD9484B9CE1EF3FABD57BBE9DE5FB5B9DDAAC73424B3AC57", "type": "IDEV0001", "chars":"", "charsOut":"", "daykWh":""},
					{"name":"Demo Three","ccid": "642C08B4FFBE8032A56CF99A7F1246FB", "pow":"008946E8583C000F0000000000", "ltpk": "9331E4F844A48F1DE5BBB4BAB3335DCB28B948B194B19EFD8BEA8C59CFFF75DD", "type": "IDEV0001", "chars":"", "charsOut":"", "daykWh":""},
					{"name":"Wall One","ccid": "6412951FC66EB5050B6DB1E9CF53DD0A", "pow":"00DDEEE65860FF070000000000", "ltpk": "F2A569CEA17549A7C58235BDA7635CED59B3E38618EB698625EDBB1A04676E86", "type": "IDEV0010", "chars":"", "charsOut":"", "daykWh":""},
					{"name":"Wall Two","ccid": "6412951FC66EB5050B6DB1E9CF53DD0A", "pow":"00DDEEE65860FF070000000000", "ltpk": "F2A569CEA17549A7C58235BDA7635CED59B3E38618EB698625EDBB1A04676E86", "type": "IDEV0010A", "chars":"", "charsOut":"", "daykWh":""},

					//{"name":"Chandelier","ccid": "640D701C95C50D1DEF435DFF23AFAC12", "pow":"00ACF1E658EAAD340000000000", "ltpk": "FE72127A804F105BFC0DCC009A5E3644ACD0A96AE5102A82C430BAFE0B408F1A", "type": "IDEV0009", "chars":"", "charsOut":"", "daykWh":""},
					//{"name":"Bed Lamp 1","ccid": "64A560CCCD7A115C3228E0A9875B3C42", "pow":"00AC21915835C0090000000000", "ltpk": "EE1291B5E6314FB7D629CA5FF249701F12B2FD21BB8B3AA39317D2065980CB21", "type": "IDEV0002", "chars":"", "charsOut":""},
					//{"name":"Bed Lamp 2","ccid": "64597CAE2DA77FA88F4656ABCEBC12ED", "pow":"00D5C9A458B207150000000000", "ltpk": "7030767316654D70500CB65ACA3B55DAEC13A8806744C64673834EC77A871A8A", "type": "IDEV0002", "chars":"", "charsOut":""},
					//{"name":"Bedside","ccid": "64DD0B48721A603DBDBA498BC94B8963", "pow":"009AE17458E434020000000000", "ltpk": "3FD542D99A8FA346237CF73F18339CD21BB78B6C5BC523602AA071D5630B79CD", "type": "IDEV0002", "chars":"", "charsOut":""},
					//{"name":"Fireplace 1","ccid": "64B455047E2F29C647D0F36151FF8446", "pow":"006637A858009C150000000000", "ltpk": "12277A8CB6968AFDA5427724E5083B2247DAEAF302380C5937F8508B43591306", "type": "IDEV0002", "chars":"", "charsOut":""},
					//{"name":"Fireplace 2","ccid": "647002C4E6D6D2B20DE405B59522E7DA", "pow":"006537A858F92D010000000000", "ltpk": "61EA19C640D8C03C9DB32A17DE67144E7FA872BC95F2308BDEB800A5DB4A3A14", "type": "IDEV0002", "chars":"", "charsOut":""},
					//{"name":"Lily Door","ccid": "645E3AFB01F2EFA44C777775652C2950", "pow":"00D5653A589397170000000000", "ltpk": "22498FFBBBDF729B6492D02381CA33F75732CBE90F3E64E1E8661F86B8ABA587", "type": "IDEV0002", "chars":"", "charsOut":""},
					//{"name":"Lily Vanity","ccid": "64DFB6389D0D5A27384977EAAED53DE3", "pow":"00D6653A586DCC010000000000", "ltpk": "A03319EAC60655E18DC52916B4FEFA1585E635AF8B8022FEABB91F031253296C", "type": "IDEV0002", "chars":"", "charsOut":""},
					//{"name":"Jasper Bed","ccid": "641345D29D47E02ACE908F5B6EB66CC4", "pow":"00727F5E586301020000000000", "ltpk": "5FE8072C4FAAAC42981734FFC3808A3F421663A95C60378CB4FDB739A1A4B919", "type": "IDEV0002", "chars":"", "charsOut":""},
				],
				apiBase: "http://localhost:8080",
				timeout: 8000, //Call timeout
				kwhCost: 0.1246,
				showAllTimeUse: false,
				showNightlight: false,
				showSchedule: false,
				showUse: false,
				showTotals: true,
				updateInterval: 1 * 40 * 1000, // every 1 minutes
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
