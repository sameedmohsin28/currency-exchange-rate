const currencyAcronyms = {
  aed: 'United Arab Emirates Dirham',
  afn: 'Afghan Afghani',
  all: 'Albanian Lek',
  amd: 'Armenian Dram',
  ang: 'Netherlands Antillean Guilder',
  aoa: 'Angolan Kwanza',
  ars: 'Argentine Peso',
  aud: 'Australian dDollar',
  awg: 'Aruban Florin',
  azn: 'Azerbaijani Manat',
  bam: 'Bosnia-Herzegovina Convertible Mark',
  bbd: 'Bajan Dollar',
  bdt: 'Bangladeshi Taka',
  bgn: 'Bulgarian Lev',
  bhd: 'Bahraini Dinar',
  bif: 'Burundian Franc',
  bmd: 'Bermudan Dollar',
  bnd: 'Brunei Dollar',
  bob: 'Bolivian Boliviano',
  brl: 'Brazilian Real',
  bsd: 'Bahamian Dollar',
  btn: 'Bhutan Currency',
  bwp: 'Botswanan Pula',
  byn: 'New Belarusian Ruble',
  bzd: 'Belize Dollar',
  cad: 'Canadian Dollar',
  cdf: 'Congolese Franc',
  chf: 'Swiss Franc',
  clp: 'Chilean Peso',
  cny: 'Chinese Yuan',
  cop: 'Colombian Peso',
  crc: 'Costa Rican Colón',
  cup: 'Cuban Peso',
  cve: 'Cape Verdean Escudo',
  czk: 'Czech Koruna',
  djf: 'Djiboutian Franc',
  dkk: 'Danish Krone',
  dop: 'Dominican Peso',
  dzd: 'Algerian Dinar',
  egp: 'Egyptian Pound',
  ern: 'Eritrean Nakfa',
  etb: 'Ethiopian Birr',
  eur: 'Euro',
  fjd: 'Fijian Dollar',
  fkp: 'Falkland Islands Pound',
  fok: 'Faroese Krona',
  gbp: 'Pound Sterling',
  gel: 'Georgian Lari',
  ggp: 'GGPro',
  ghs: 'Ghanaian Cedi',
  gip: 'Gibraltar Pound',
  gmd: 'Gambian Dalasi',
  gnf: 'Guinean Franc',
  gtq: 'Guatemalan Quetzal',
  gyd: 'Guyanaese Dollar',
  hkd: 'Hong Kong Dollar',
  hnl: 'Honduran Lempira',
  hrk: 'Croatian Kuna',
  htg: 'Haitian Gourde',
  huf: 'Hungarian Forint',
  idr: 'Indonesian Rupiah',
  ils: 'Israeli New Shekel',
  imp: 'CoinIMP',
  inr: 'Indian Rupee',
  iqd: 'Iraqi Dinar',
  irr: 'Iranian Rial',
  isk: 'Icelandic Króna',
  jep: 'Jersey Pound',
  jmd: 'Jamaican Dollar',
  jod: 'Jordanian Dinar',
  jpy: 'Japanese Yen',
  kes: 'Kenyan Shilling',
  kgs: 'Kyrgystani Som',
  khr: 'Cambodian Riel',
  kid: 'Kiribati Dollar',
  kmf: 'Comorian Franc',
  krw: 'South Korean Won',
  kwd: 'Kuwaiti Dinar',
  kyd: 'Cayman Islands Dollar',
  kzt: 'Kazakhstani Tenge',
  lak: 'Laotian Kip',
  lbp: 'Lebanese Pound',
  lkr: 'Sri Lankan Rupee',
  lrd: 'Liberian Dollar',
  lsl: 'Lesotho Loti',
  lyd: 'Libyan Dinar',
  mad: 'Moroccan Dirham',
  mdl: 'Moldovan Leu',
  mga: 'Malagasy Ariary',
  mkd: 'Macedonian Denar',
  mmk: 'Myanmar Kyat',
  mnt: 'Mongolian Tugrik',
  mop: 'Macanese Pataca',
  mru: 'Mauritanian Quguiya',
  mur: 'Mauritian Rupee',
  mvr: 'Maldivian Rufiyaa',
  mwk: 'Malawian Kwacha',
  mxn: 'Mexican Peso',
  myr: 'Malaysian Ringgit',
  mzn: 'Mozambican Metical',
  nad: 'Namibian Dollar',
  ngn: 'Nigerian Naira',
  nio: 'Nicaraguan Córdoba',
  nok: 'Norwegian Krone',
  npr: 'Nepalese Rupee',
  nzd: 'New Zealand Dollar',
  omr: 'Omani Rial',
  pab: 'Panamanian Balboa',
  pen: 'Sol',
  pgk: 'Papua New Guinean Kina',
  php: 'Philippine Peso',
  pkr: 'Pakistani Rupee',
  pln: 'Poland Złoty',
  pyg: 'Paraguayan Guarani',
  qar: 'Qatari Rial',
  ron: 'Romanian Leu',
  rsd: 'Serbian Dinar',
  rub: 'Russian Ruble',
  wf: 'Rwandan Franc',
  sar: 'Saudi Riyal',
  sbd: 'Solomon Islands Dollar',
  scr: 'Seychellois Rupee',
  sdg: 'Sudanese Pound',
  sek: 'Swedish Krona',
  sgd: 'Singapore Dollar',
  shp: 'Saint Helena Pound',
  sll: 'Sierra Leonean Leone',
  sos: 'Somali Shilling',
  srd: 'Surinamese Dollar',
  ssp: 'South Sudanese Pound',
  stn: 'Sao Tomean Dobra',
  syp: 'Syrian Pound',
  szl: 'Swazi Lilangeni',
  thb: 'Thai Baht',
  tjs: 'Tajikistani Somoni',
  tmt: 'Turkmenistani Manat',
  tnd: 'Tunisian Dinar',
  top: 'Tongan Paʻanga',
  try: 'Turkish Lira',
  ttd: 'Trinidad & Tobago Dollar',
  tvd: 'Tuvaluan Dollar',
  twd: 'New Taiwan Dollar',
  tzs: 'Tanzanian Shilling',
  uah: 'Ukrainian Hryvnia',
  ugx: 'Ugandan Shilling',
  usd: 'United States Dollar',
  uyu: 'Uruguayan Peso',
  uzs: 'Uzbekistani Som',
  ves: 'Venezuelan Bolívar',
  vnd: 'Vietnamese Dong',
  vuv: 'Vanuatu Vatu',
  wst: 'Samoan Tala',
  xaf: 'Central African CFA Franc',
  xcd: 'East Caribbean Dollar',
  xdr: 'Special Drawing Rights',
  xof: 'West African CFA Franc',
  xpf: 'CFP Franc',
  yer: 'Yemeni Rial',
  zar: 'South African Rand',
  zmw: 'Zambian Kwacha',
  zwl: 'Zimbabwean Dollar',
};

export default currencyAcronyms;
