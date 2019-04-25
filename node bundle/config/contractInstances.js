
// instances of exchange contracts that use many instances instead of 1 main contract
module.exports = {
    uniswapContracts:{
        /* work in progress
        uniswap exchange contracts  exchange_addr :token_addr
        Official token list:
          https://github.com/Uniswap/uniswap-frontend/blob/master/src/ducks/addresses.js
        Alternative with custom tokens
          https://github.com/Uniswap/uniswap-info/blob/master/tools/exchanges.json
       */
        '0x701564aa6e26816147d4fa211a0779f1b774bb9b':'0xb6ed7644c69416d67b522e20bc294a9a9b405b31', // 0xBTC
        '0xb800445dd982c1311523fd465ac44f55093b2b5b':'0x4470bb87d77b963a013db939be332f927f2b992e', // ADX
        '0x27f99de8a71f09e9e567050192ce3005f0dcd0b3':'0xae31b85bfe62747d0836b82608b4830361a3d37a', // AERGO
        '0xdf02ffeafdb79e564ae9fdac6545c5f4c2178400':'0x8eb24319393716668d768dcec29356ae9cffe285',// AGI
        '0x164c93580839f40609ce0250dd4c98a25da175de':'0x949bed886c739f1a3273629b3320db0c5024c719', //AMIS
        '0x077d52b047735976dfda76fef74d4d988ac25196':'0x960b236a07cf122663c4303350609a66a7b288c0', //ANT
        '0x2e642b8d59b45a1d8c5aef716a84ff44ea665914':'0x0d8775f648430679a709e98d2b0cb6250d2887ef', //BAT
        '0x87d80dbd37e551f58680b4217b23af6a752da83f':'0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c', // BNT
        '0x1c6c712b1f4a7c263b1dbd8f97fb447c945d3b9a':'0x41e5560054824ea6b0732e656e3ad64e20e94e45', //CVC
        '0x09cabec1ead1c0ba254b09efb3ee13841712be14':'0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359', //DAI
        '0xb92de8b30584392af27726d5ce04ef3c4e5c9924':'0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf', // DGX
        '0xf79cb3bea83bd502737586a6e8b133c378fd1ff2':'0x4946fcea7c692606e8908002e55a582af44ac121', //FOAM
        '0x60a87cc7fca7e53867facb79da73181b1bb4238b':'0x419d0d8bdd9af5e606ae2232ed285aff190e711b', //FUN
        '0xe8e45431b93215566ba923a7e611b7342ea954df':'0x6810e776880c02933d47db1b9fc05908e5386b96', //GNO
        '0x4b17685b330307c751b47f33890c8398df4fe407':'0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd', //GRID
        '0xd883264737ed969d2696ee4b4caf529c2fc2a141':'0x056fd409e1d7a124bd7017459dfea2f387b6d5cd', //GUSD
        '0xb7520a5f8c832c573d6bd0df955fc5c9b72400f7':'0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5', //KIN
        '0x49c4f9bc14884f6210f28342ced592a633801a8b':'0xdd974d5c2e2928dea5f71b9825b8b646686bd200', //KNC
        '0xf173214c720f58e03e194085b1db28b50acdeead':'0x514910771af9ca656af840dff83e8264ecf986ca', //LINK
        '0x417cb32bc991fbbdcae230c7c4771cc0d69daa6b':'0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0', //LOOM
        '0xc6581ce3a005e2801c1e0903281bbd318ec5b5c2':'0x0f5d2fb29fb7d3cfee444a200298f468908cc942', //MANA
        '0x2c4bd064b998838076fa341a83d007fc2fa50957':'0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', //MKR
        '0x069c97dba948175d10af4b2414969e0b88d44669':'0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206', //NEXO
        '0xc040d51b07aea5d94a89bc21e8078b77366fc6c7':'0x8e870d67f660d95d5be530380d0ec0bd388289e1', //PAX
        '0x755899f0540c3548b99e68c59adb0f15d2695188':'0x687bfc3e73f6af55f0ccca8450114d107e781a0e', //QCH
        '0x7d03cecb36820b4666f45e1b4ca2538724db271c':'0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6', //RDN
        '0x43892992b0b102459e895b88601bb2c76736942c':'0x408e41876cccdc0f92210600ef50372656052a38', //REN
        '0x48b04d2a05b6b604d8d5223fd1984f191ded51af':'0x1985365e9f78359a9b6ad760e32412f4a445e862', //REP
        '0xa825cae02b310e9901b4776806ce25db520c8642':'0x607f4c5bb672230e8672085532f7e901544a7375', //RLC
        '0x394e524b47a3ab3d3327f7ff6629dc378c1494a3':'0x168296bb09e24a88805cb9c33356536b980d3fc5', //RHOC
        '0xc0c59cde851bfcbdddd3377ec10ea54a18efb937':'0x4156d3342d5c385a87d264f90653733592000581', //SALT
        '0x1aec8f11a7e78dc22477e91ed924fab46e3a88fd':'0x744d70fdbe2ba4cf95131626614a1763df805b9e', //SNT
        '0x4e395304655f0796bc3bc63709db72173b9ddf98':'0x42d6622dece394b54999fbd73d108123806f6a18', //SPANK
        '0xb6cfbf322db47d39331e306005dc7e5e6549942b':'0xaaaf91d9b90df800df4f55c205fd6989c977e73a', //TKN
        '0x4f30e682d0541eac91748bd38a648d759261b8f3':'0x8dd5fbce2f6a956c3022ba3663759011dd51e73e', //TUSD
        '0x97dec872013f6b5fb443861090ad931542878126':'0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', //USDC
        '0x17e5bf07d696eaf0d14caa4b44ff8a1e17b34de3':'0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374', //VERI
        '0x4d2f5cfba55ae412221182d8475bc85799a5644b':'0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', //WBTC
        '0xa2881a90bf33f03e7a3f803765cd2ed5c8928dfb':'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', //WETH
        '0x7dc095a5cf7d6208cc680fa9866f80a53911041a':'0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27', //ZIL
        '0xae76c84c9262cdb9abc0c2c8888e62db8e22a0bf':'0xe41d2489571d322189246dafa5ebde1f4699f498', //ZRX

        '0xbd4479c98dc21563ba822c3c206d8339698e2dd4':'0x7b22938ca841aa392c93dbb7f4c42178e3d65e88', // ASRTO
        '0x8aa3cc2bf30cb47f290fd4e9b660bc3a685b9b3e':'0xad22f63404f7305e4713ccbd4f296f34770513f4', // AWC
        '0x3c3351e44d32b36bf2af97de6f40b548b00cf654':'0x84f7c44b6fed1080f647e354d552595be2cc602f', //BBO
        '0xe9078a97eef2bb502a9f792169f9c03626649248':'0x4d8fc1453a0f359e99c9675954e656d80d996fbf', //BEE
        '0x7eb81c7a0b322d31c11064105e14dce6e852e8c1':'0x539efe69bcdd21a83efd9122571a64cc25e0282b', //BLUE
        '0x255e60c9d597dcaa66006a904ed36424f7b26286':'0xb8c77482e45f1f44de1745f52c74426c631bdd52', //BNB
        '0xd1f3e9b413f5c9fd56f044699c64ff710e7e5a9a':'0xd2d6158683aee4cc838067727209a0aaf4359de3', // BNTY
        '0x262275a4989c96cc6ecde77eb2dda6e13d508c4e':'0x439ce375e3ee4dc203d71958beca3c0f417d65cb', //BOI
        '0xb2744df7bfbb4802f44fd1b1fd9012502d4af704':'0x327682779bab2bf4d1337e8974ab9de8275a7ca8', //BPT
        '0xea3a62838477082d8f2106c43796d636dc78d8a4':'0xb683d83a532e2cb7dfa5275eed3698436371cc9f', //BTU
        '0xf7b5a4b934658025390ff69db302bc7f2ac4a542':'0x26e75307fc0c021472feb8f727839531f112f317', //C20
        '0x066198694b1db74d67007d19a7c4f2fc3a061075':'0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0', //CAN
        '0x53e31a941b76ef1b486e86aa39bcd5ae56829870':'0x47bc01597798dcd7506dcca36ac4302fc93a8cfb', //CMCT
        '0x21b8a991a203a440c83450564fdefa3db10a5004':'0xd4c435f5b09f855c3317c8524cb1f586e42795fa', //CND
        '0xe31a245102fc1ae72f80c6969f6475e85c897bbe':'0x8713d26637cf49e1b6b4a7ce57106aabc9325343', //CNN
        '0x30b16fc2b530dbf991e1b15ed953cc4585f0b27c':'0x722f2f3eac7e9597c73a593f7cf3de33fbfc3308', //CNUS
        '0xbb7cf8a9d6b2aa7d98fb0bf3548a589a68ddb774':'0x94d6b4fb35fb08cb34aa716ab40049ec88002079', //CNX
        '0x2135d193bf81abbead93906166f2be32b2492c04':'0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b', //CRO
        '0xe1e005d82922303ca9fb5cb6426c2eb07f8e5c84':'0xcd7d0042fdb92f3dde312aa61af084953aa914ee', //CRPHT
        '0x4f0d6e2179938828cff93da40a8ba1df7519ca8c':'0x0cf0ee63788a0849fe5297f3407f701e122cc023', //DATA
        '0x9709ef0958b831865a97682d9ec08f897fe3b56f':'0x3597bfd533a99c9aa083587b074434e61eb0a258', //DENT
        '0xc3b03664126f2f192ec658e1c62798c9ebd0ff08':'0x7365877678c744b435ed03b1cac12ab407cba13a', //DKC
        '0xaa3b3810c8aada6cbd2ce262699903ad7ae6a7ef':'0x0abdace70d3790235af448c88547603b945604ea', //DNT
        '0xed9d5aa6124a3310b80a2468c67763627653887d':'0x23d80c4ee8fb55d4183dd9329296e176dc7464e1', //DONUT
        '0xe18256cd23efcdc4f95581e86f61ea1b09afd02a':'0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190', //DTH
        '0x0045d5d2cac7688f7fc36313e69fb5350958936c':'0xa0872ee815b8dd0f6937386fd77134720d953581', //EDU
        '0x2995b7f65cbc1b0ae8095eae314246508c49182a':'0x95daaab98046846bf4b2853e23cba236fa394a31', //EMONT
        '0x884715e2dce8757c9ee19739c366b2c7c65f05b1':'0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4', //ENG
        '0xa1c467dc897a36689dbbadcc212b212b4f526e49':'0x5bc7e5f0ab8b2e10d2d0a3f21739fce62459aef3', //ENTRP
        '0xf50bac10faf905e95ffdc9f35b75ee67117dad2a':'0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea', //ERC20
        '0x32a29c4269dee1a9e87eb75d66da71591a7aee96':'0x4b4a70cae3f7c84e36ce9aa19abc98f85db7f058', //FAC
        '0xf5bb20e73c59e0f643ae4bcd89d761ebdec83b73':'0x78a73b6cbc5d183ce56e786f6e905cadec63547b', //FT
        '0x62ccb0577aa63b8d72449b9fd13b3cdbcf3787d6':'0x74436ae1db59c62bbb3de88d268f7e058dce6d50', //GCB
        '0x78bac62f2a4cd3a7cb7da2991affc7b11590f682':'0xfa3e941d1f6b7b10ed84a0c211bfa8aee907965e', // HAY
        '0xd1a8c5ba35752e4b62c71c795a3f6481faa4d36e':'0xe34e1944e776f39b9252790a0527ebda647ae668', //HBZ
        '0x059ad96e38f027ccd127567dc09b164762bcd695':'0x6251583e7d997df3604bc73b9779196e94a090ce', //HERC
        '0xd4777e164c6c683e10593e08760b803d58529a8e':'0x6c6ee5e31d828de241282b9606c8e98ea48526e2', //HOT
        '0xfe3f05c7da9fe53591fab3f920798a67a95747ed':'0xa66daa57432024023db65477ba87d4e7f5f95213', //HPT
        '0x7d31fc38ddd7d6907f820f4268f1d8d5d5797826':'0xecf3958d0f82291ca1ff6c9bda8eb3c50ee41ce3', //HUM
        '0x3fbc2275de71427aaebbe0e5e6bc13fe8f27fa9e':'0x02c4c78c462e32cca4a90bc499bf411fb7bc6afb', //IDT
        '0x20149f1672175c7118bdbf966bfb6a02bf733810':'0x0aef06dcccc531e581f0440059e6ffcc206039ee', //ITT
        '0x657184e418d43a661a91d567182dc3d1a4179ec4':'0x0ed024d39d55e486573ee32e583bc37eb5a6271f', //JCD
        '0x380fdc8bb8722915076a09479d1bbc75e69c8be0':'0x2bf91c18cd4ae9c2f2858ef9fe518180f7b5096d', //KIWI
        '0x08850bd3ce3a8f6b64d724c3dabdbf6f4f8561fc':'0x4dadf81edf74e9b1a9ad1f364d51a176be48f0ac', //KRH
        '0x28991ac221054bee3a38ae9ad0fb3d0c3e45d0cf':'0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf', //LATOKEN
        '0xe79fe64771d5351b936eeac6222682c3d878063e':'0xfe5f141bf94fe84bc28ded0ab966c16b17490657', //LBA
        '0xb580a2b495917b8577d9a612be068f591e8c20f9':'0x49aaa160506f7e07e6c3f6cd6316b6866025cdcb', // LIRA
        '0xe69ea0f00b6d399a11030eb6d79e54c486c0e1d1':'0xdcef0710b10ad66bc2194b412fb37c65d4d0a965', //LOT
        '0xc4a1c45d5546029fd57128483ae65b56124bfa6a':'0x58b6a8a3302369daec383334672404ee733ab239', //LPT
        '0xe3406e7d0155e0a83236ec25d34cd3d903036669':'0xd29f0b5b3f50b07fe9a9511f7d86f4f4bac3f8c4', //LQD
        '0xe2f548a3b898eca923bd61919f2635b071a7f95e':'0x23ccc43365d9dd3882eab88f43d515208f832430', //MAS
        '0xedc485266aa0ebe9ccbfc1f255bb5ffea1f9e3cc':'0xb63b606ac810a52cca15e44bb630fd42d8d1d83d', //MCO
        '0x68326300df49ec6387e75690857424c2ae111750':'0x737fa0372c8d001904ae6acaf0552d4015f9c947', //MEDIBIT
        '0x8809c63af18ec760547426a5c3e122e0a3efbf27':'0xb9625381f086e7b8512e4825f6af1117e9c84d43', //MGN
        '0xaec97872d14ac79e95fff18c169bfd183efc6962':'0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1', //MLN old
        '0xbe478403ac906d329fa8ebef1d3f9e0a48067d57':'0xa6a7fce4affe059548fc39ebbc74555952a6fb0d', //MOR
        '0xb684f9b231accdef385f06038395e27a4e3aa86b':'0xf3be20da25b31bd6ee4ce4496985b2064304c125', //MYU
        '0x2bf5a5ba29e60682fc56b2fcf9ce07bef4f6196f':'0x1776e1f26f98b1a5df9cd347953a26dd3cb46671', //NMR
        '0xddee242662323a3cff3f9aa139ffa496ac3c73b0':'0xd26114cd6ee289accf82350c8d8487fedb8a0c07', //OMG
        '0x7174ef6b9cb528e954508264a9912da905977422':'0xb9bb08ab7e9fa0a1356bd4a39ec0ca267e03b0b3', //PAI
        '0x95efaafe52e89992bfd4f33c96ad971fccdc31f6':'0x7b94a1281db0335c9efd68aca5c98b494d775c70', //PATH
        '0x6f1c46e91ce29d430e31205ead148b0bee46b9fc':'0xb97048628db6b661d4c2aa833e95dbe1a905b280', //PAY
        '0x329c9642efe33a62161dda6b4eb3821965191441':'0x87f56ee356b434187105b40f96b230f5283c0ab4', //PITCH
        '0xf43b2329130cfd87b322e49b96681e09f1ef172f':'0xe477292f1b3268687a29376116b0ed27a9c76170', // PLAY
        '0xcc36e05eeffac3eb61b696d0bb328f2b08389fb5':'0x846c66cf71c43f80403b51fe3906b3599d63336f', //PMA
        '0xf506828b166de88ca2edb2a98d960abba0d2402a':'0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d', //PNK
        '0xa2e6b3ef205feaee475937c4883b24e6eb717eef':'0x6758b7d441a9739b98552b373703d8d3d14f9e62', //POA20
        '0x6fca96a679490ed8a80c7344799f1b090fd4c94d':'0x9709907cb2cf9e16df841f7b145b78c230d8205e', //POW
        '0x817e391baf312dc5078cd7a98a7a0255ac63ca48':'0x7728dfef5abd468669eb7f9b48a7f70a501ed29d', //PRG
        '0xe8bc0a210aaf86dab4dd600faca5cfe492e2e084':'0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06', //PTOY
        '0xd91ff16ef92568fc27f466c3c5613e43313ab1dc':'0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6', //RCN
        '0xbcdf538581f7167ec8228ec2c9b1cfc2f74788c7':'0x8f8221afbb33998d8584a2b05749ba73c37a938a', //REQ
        '0xb7836492f5850d9b61d6b71c73697c5b9676208d':'0x2e071d2966aa7d8decb1005885ba1977d6038a65', //ROL
        '0x3fb2f18065926ddb33e7571475c509541d15da0e':'0xb4efd85c19999d84251304bda99e90b92300bd93', //RPL
        '0x8a8d7ad4b89d91983cd069c58c4aa9f2f4166298':'0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098', //SAN
        '0xa0513d82f17c491dc6ab34efd89dc372bb180378':'0x3638c9e50437f00ae53a649697f288ba68888cc1', //SCHAP
        '0x0b5ce6f7cbe0627aa8ad2e7e69ed554c0fe79162':'0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037', //SENT
        '0x174dfb6e6e78c95678580b553eee7f282b28c795':'0x86c8bf8532aa2601151c9dbbf4e4c4804e042571', //SIM
        '0x23228ec35e810569495bd0aa4d56e9fad759bb29':'0xc011a72400e58ecd99ee497cf89e3775d4bd732f', //SNX
        '0x2afc64cd5e64a32a363ea84b8cad1ce5239a1a3d':'0x006bea43baa3f7a6f765f14f10a1a1b08334ef45', //STX
        '0xc3c028721f854bc75967cbe432fb0e221908baa1':'0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a', //SWM
        '0x755160062e3e09d34af0a00ff8cab8500e81e0d7':'0xb9e7f8568e08d5659f5d29c4997173d84cdf2607', //SWT
        '0x38577ccec0ceffd178fd3be66e1c6f531bfa410e':'0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f', //TRAC
        '0x95e4649f5209dd292caf1f087b8f1db3be24927f':'0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b', //TRST
        '0x2263fd7c62914ab8ec2b5e7b00bc8371a6c0d221':'0xea097a2b1db00627b2fa17460ad260c016016977', //UFR
        '0x28d9353611c5a0d5a026a648c05e5d6523e41cbf':'0x09617f6fd6cf8a71278ec86e23bbab29c04353a7', //ULT
        '0x72208a7d8c11cb28c8e6d32e1a070015786c0823':'0x4cf488387f035ff08c371515562cba712f9015d4', //WPR
        '0x8de0d002dc83478f479dc31f76cb0a8aa7ccea17':'0xb4272071ecadd69d933adcd19ca99fe80664fc08', //XCHF
        '0xcfcc608f03c0cee86589e11224f24779212f0fe5':'0x236149288602c07b84387d0d75784d73f133142b', //ZCI
        '0x1c116d67e0bf0cf5cb0ad5a74a041d26e89271e7':'0xb9ef770b6a5e12e45983c5d80545258aa38f3b78', //ZCN
        '0x4785cedbd89c818d60988dc5979b029f3900b54b':'0x4805f9568bca23bef099c2a317346b42146384a1', //E11
        '0x69f276abd6456152d519d23086031da7c73f91b8':'0x57ab1e02fee23774580c119740129eac7081e9d3', //SUSD
    },
    //some of the many bancor converter contracts, address not necessary to find trades, but makes reading things easier
    bancorConverters:[ 
        '0xf20b9e713a33f61fa38792d2afaf1cd30339126a',
        '0x3839416bd0095d97be9b354cbfb0f6807d4d609e',
        '0x2b9eab2098e4a363a114aa6934f5c3cdea8149a3',
        '0xc02d4bd00f642d2821e4279c810dd7b6e49264f8',
        '0xe9800c0b73a71be61d49a61fa3b2320ee524fb3d',
        '0x238b7e54dfee4d8e98b8d1a78ab40dd94349bcfd',
        '0xaf6a5b0998ff41355f3b4fe1ab96d89bd2c487d3',
        '0x2d56d1904bb750675c0a55ca7339f971f48d9dda',
        '0x587044b74004e3d5ef2d453b7f8d198d9e4cb558',
        '0x8c2036ce61648fcddffb06d6d11fe0b479ed63fe',
        '0x967f1c667fc490ddd2fb941e3a461223c03d40e9',
        '0x4a5cb62e27120a5a2b113198a69a2b12069ad146',
        '0x58b249b613ce917b6ccc2f66787856ef39f4f0b6',
        '0x07cff9c779702a57a4da4b15ef9a0af58e9472d3',
        '0xb19710f3bdb4df4c781b9dc3cd62979921878280',
        '0x8606704880234178125b2d44cbbe190ccdbde015',
        '0xbb9859dca5b269e787e9dd6042db46b07515fc4b',
        '0x46ffcdc6d8e6ed69f124d944bbfe0ac74f8fcf7f',
        '0x2dad2c84f6c3957ef4b83a5df6f1339dfd9e6080',
        '0x1f4baef92123335fbb6db8781cc28d2cf4a85800',
        '0xedcc9346d266c78364f21b1aca88641be7ca73e1',
        '0x71168843b49e305e4d53de158683903ef261b37f',
        '0x7172c5b24bdce3b93a78c53ef1ece011b0472c1b',
        '0xde6a1e3702c31ae9e13ec316fce463278c8962d3',
        '0x02b5e0c10862c8d24585c00282bde99d09831a6c',
        '0x0c41f4e6339e9c8635062f39d976789dbd832b09',
        '0xf4327c919854cb099ac574a22f5fba901e2025c4',
        '0x83e240d1cbc6ec7f394cd6ba5ed01b7fcdf44ed5',
        '0xdd9b82c59aa260b2a834ec67c472f43b40a2e6f1',
        '0x645a3f2fa86be27a4d9a3cc93a73f27b33df766f',
        '0xf3ed5b15618494ddbd0a57b3bca8b2686ac0bc04',
        '0x94c654fef85b8b0a982909a6ca45b66bb2384236',
        '0x58c46d06cfdcf9ca2cb590d7b79b12ffa8adce04',
        '0xa0db892affca7ec5ba3cea5d03fc0bc53db34036',
        '0xfa968bc2e4768d431ffec4ee64307f8152e1c9f1',
        '0xec532c82ad94b196b908e6ef86c9ac69811dfd56',
        '0x8fd5bfbc2f61a450400ae275e64d1e171c05b639',
        '0xc18166e01970be040d8c7761cdd1c3372ae1edf0',
        '0xe88d6d63389d5c91e6348e379913f330739ad2c4',
        '0xd0c1bdb51514f144f11169140d408c26bd89f9e5',
        '0x2769eb86e3acdda921c4f36cfe6cad035d95d31b',
        '0x8658863984d116d4b3a0a5af45979eceac8a62f1',
        '0x7bac8115f3789f4d7a3bfe241eb1bcb4d7f71665',
        '0xaa8cec9cbd7d051ba86d9deff1ec0775bd4b13c5',
        '0x751b934e7496e437503d74d0679a45e49c0b7071',
        '0xd3a3bace3d61f6f5d16a9b415d51813cd2ea3887',
        '0xba2be1cd1f00470c21385b7cbed6211aefac0172',
        '0x66906318f947e519da5e6a0f8c88ddd1610d3621',
        '0x11614c5f1eb215ecffe657da56d3dd12df395dc8',
        '0x2ac0e433c3c9ad816db79852d6f933b0b117aefe',
        '0x9c3a65ef4dae8655d7725ada3dd7711cfcc19ef5',
        '0xc31db08240a11df6a4c159ff4e6d69f484fc3828',
        '0x599485dc0f3d8b308b973b2db5cd44bae46d31c4',
        '0x4b19e0bd92ac4e3d4ac69bc9f90c8602fe2bf306',
        '0x6b431a7a99780819473722161ee9145e5649c5e2',
        '0xd64ac0a8f157df9762f8fae9e650a0f99b039629',
        '0x287565333c9cafd57ad7241ccb1d29de976bb5f8',
        '0x8fff721412503c85cffef6982f2b39339481bca9',
        '0x0f1c029c5d7f626f6820bfe0f6a7b2ac48746ddf',
        '0x9a3487c0d300c4d3a7b3ff38d7a18c53c66f1c49',
        '0xcde79f10b689a716029d0edb54de78b1bbc14957',
        '0x1c35e1157f85527569134d84af72a96f2fb8fd3a',
        '0x72844ab8b5f59c0251bcce6ef5f2be92d7528c1a',
        '0x3b42239a8bc2f07bb16b17578fe44ff2422c16f6',
        '0xc7151af2e9d1a702a61fcb655e2334bfee5b5faf',
        '0x315b9696cd3c83bb3e082f5c7f612cd2126f90d1',
        '0x99f357f722ec3e456af0eb530c1c14a3251305ad',
        '0xbe1daf05bf9e054b3e28b7e9c318819ef5dacb58',
        '0x32d4fb837f41955b81556f74dadb2c5b8a0d0989',
        '0x7e4b0abad3407b87a381c1c05af78d7ad42975e7',
        '0xdf76e7e26f6ee937f09a3f17f1d7047c0f928e12',
        '0x37c88474b5d6c593bbd2e4ce16635c08f8215b1e',
        '0xbf7f4e20473ed510cd7cdd0c1a5036a2791ff1bc',
        '0x20d23c7a4b2ea38f9dc885bd25b1bc8c2601d44d',
        '0x079cf5c7b29067708bf653fbb93d7f619d9287a9',
        '0x69e37aba9b520a204bb0baebd76b0ac1a2390b37',
        '0x25d4aef414ea092fbcbd83fd30e89e15cf820d0a',
        '0x4f88dfc8e1d7ba696db158656457797cfbdfb844',
        '0xc6aacdf2cb021515009098025a0ece472608918e',
        '0xc04b5a4556d00bca8eac5f5acca31981a6597409',
        '0x6411a822850dcfe2fae215248e47de77b1738bea',
        '0x7322e84e522407d026ccb86f688281222cbc8874',
        '0xa8ace92ea2d9174f75208ee44495f459e0491a96',
        '0x952eb7dc904f6f8b6b0bc6c5c99d45143e743cd7',
        '0xfe75413e059eecf6eb2b92f06456276e8596862b',
        '0x4f138e1ceec7b33dfa4f3051594ec016a08c7513',
        '0x2c2d1113dd9f40fad1b04cf23af9da84c37efcf3',
        '0x635c9c9940d512bf5cb455706a28f9c7174d307f',
        '0xdb9272880400e0ae8e522994f6a959122d94c7b7',
        '0x9f547e89078b24d0e2269ba08eb411102e98ca14',
        '0xd7169672b25271d379cc2c022dfe0ceebb3f006f',
        '0x5ae1217f932fe1acdc8a34229044444920a13db8',
        '0x0fec04a7526f601a1019edcd5d5b003101c46a0c',
        '0x7dfebdd6902f3df5a0f247d18f7895116f640bd1',
        '0x60dfa58865b9cce905cf570d6e2bfa7899ce0b2b',
        '0x8e7fc617e87b39bd5fe1767a95afa53d2c79f147',
        '0x2f3cdf19a7ed0352f96440dac92a6d2959719c07',
        '0x73f73391e5f56ce371a61fc3e18200a73d44cf6f',
        '0x8bb76c5ae6b7d6bd1678510edd06444acdf8f72b',
        '0xcbc7e6dccfaaf6ed2e8346ceda633f77247eb84c',
        '0x8b30e174bddb3c0376e666afb8a4196e2f53182d',
        '0xb5a5a031d8b8577871384be6055b2ea29fac064c',
        '0xc9788f6fe9c5808a106f10cb6844618cbeddd1c0',
        '0x39a23012c065e0a93a6e268717c8b0f25f0430e9',
        '0x810c99c5de0a673e4bc86090f9bfe96a6d1b49a7',
        '0x8b56ef96c1cc67dac0a57ccea197a2ef1568ad33',
        '0x91ba23a1dcc91ce023660c98434ba611addaa173',
        '0xc11cce040583640001f5a7e945dfd82f662cc0ae',
        '0xce1e2b5ffe4d441abafd136768f24867101dfa50',
        '0x0960465fe4bb1c2fd822235e7ca826d648c3fb34',
        '0x13ddae7f499474791d78902b4fa8c32a418ba3ad',
        '0x2ce573c05c9b8f6ef1a476cc40250972f1f3d63c',
        '0x3167cc146d228c6977dcbada380df926b39865b1',
        '0xe27cf7324e6377bddc48db6bac642839ffa9bb36',
        '0x3b0116363e435d9e4ef24eca6282a21b7cc662df',
        '0x3f7ba8b8f663fddb47568cca30eac7aed3d2f1a3',
        '0xb018af916ed0116404537d1238b18988d652733a',
        '0xff8d1014da6382f4c07461fbd5f3bed733b229f1',
        '0xdbd2291c8719003717fcab6c7888f1e8c392b85b',
        '0x73314db8f62312e6a1fb365c3a98599119a91c74',
        '0xe0569fd1c3f0affd7e08131a16c06f3381c9355a',
        '0xf346a9884bf8f858848268fb9d8ab31dae4b323f',
        '0xb85e52268cbf57b97ae15136aa65d4f567b8107c',
        '0xe53730216bafc67e12d371047fa9f18fa4cfd93c',
        '0x5039d9b575bd5722d310af6d2fc11e053c6d03da',
        '0xc85e1c39a08a8bc385644f16f068156a329e7867',
        '0x5142127a6703f5fc80bf11b7b57ff68998f218e4',
        '0xf0521bc69f0e6e21e03cf0f15efe28af0cc3acce',
        '0x34e4e501dfa903c7c1c7b7f82a56b870838b5274',
        '0xa7a402266ceea0652ea8eafd919d619d16bee134',
        '0xfd9e980adb3d1f9e9ff515aff99e454ad839bdfa',
        '0x4ccd6c8da3e35f60c3328388d46f64f1be49b41f',
        '0x9a914cee02c69e37e4ca51c46967e4ffacb95cc5',
        '0x42d2c774b30f53b81a1468f894d8405cdff07b83',
        '0xa0776ec5aaffc81268c47e5ca3365f92dd035b74',
        '0x593a70c88a14188f05636f9173a63128540a5890',
        '0xe103038c907625be740aa467cf597c7e89d5c5ad',
        '0xbafc0bf857ae9b8feaed937ac90e44d90a487c72',
        '0x3e3acb9cfebab0e3652c87bcb923184bb6408a51',
        '0x2666c5656460b12b4013b5e68514b76cf47e7611',
        '0x0a9ed23490cf8f89e750bbc3e28f96502bb45491',
        '0xf166d91c417c89444c601c95b171a23acbd10b93',
        '0x5552b2460ba2e899ada7c8369dcf09042ff14308',
        '0xe65c7e27c1c086f26ce0daa986c3d9c24ef3c2d8',
        '0x8c73126b85f59d85aa61391579b4c2710dd70f96',
        '0xe86d3a9bada1b7adcc32abde0522861b1dc7973a',
        '0x5fd2edfd49d0c88321ba644dda91fa16a2fe3a9c',
        '0x6e0e57ef7cbecd23162ebedccc3ac8e25d200487',
        '0x8cfcd76160a695303ec6f8dfacaa347fd6ae6f6f',
        '0xd361339550cd8b3e9446bbb12aea337785a7aea4',
        '0x3524bf63a3c97ed21f13f7621d14d2fe486d994c',
        '0x3d937ed623ef7ff3a61c55aebe32789fe443cf13',
        '0xd6c1942f34554aa6c85c8ea1d820e30ad8c2e43d',
        '0x8ca94b91be0b35f404d5af515cf448131b02ed37',
        '0x60c866423679fd30c1c7a7e16ed5142e9632a860',
        '0x6a4ebd8ce47b1362ea809d93f1beb744c4ffd7ee',
        '0x0cfbed1bd80bd8a740f24ec5fca8e8d1a9f87052',
        '0x98b069022c1304e95df0f060dcc186b6e25f2412',
        '0x14609cca8a69c734f7ba6dca3f723c4fbbeb6b43',
        '0x38ef8fd7cfd46d615ebf7788bc7225906b58406f',
        '0x2723a5af933ff0a3522a301015544be366e6ee31',
        '0xc3a60d674712019611fd68febb45a89ba766c8ef',
        '0xee5f5354f261383e67a45a65307e636bfda2d100',
        '0x9b10206f236669f4f40e8e9806de9ab1813d3f65',
        '0xb952ccbc1893c4dd1701bde249e62fc3ed357967',
        '0x82c970c55711dc5f33aa40fee6614fbb857ceb83',
        '0x7768a2e685da843a7dcf9a0f09b4d03d8d7fb6c4',
        '0xb3ad443ad4ec366127a634fae67453b0babc3f67',
        '0xc44330a585c3408392afb85b7018178bd4bae219',
        '0x2b2ed53e664d3616a20347cc0ff8940521784d47',
        '0xf458fd28e012e4a36f744384acc244d7bc38bb96',
        '0x445556b7215349b205997aaaf6c6dfa258eb029d',
        '0x32131848edc60e032abf0369241d34ec969ebf90',
        '0x38a3fc625df834dd34e8ede60e10cd3024a6650e',
        '0xe18e79a0e53fd57aea0e748c8d8da54b85a68d51',
        '0x123e3506bc08c14b15f1a967e27c26b108557db2',
        '0x015040eb85ac97f1532d4d45e309e16d07c0c164',
        '0x5ce5dc8107539907ce5f663ac71a93ccdd84a0be',
        '0x9bd60265d6e894dbbbba55eb76c6c9dd09efb22e',
        '0xce194c194cda85d93557867c2e88dc9f5bcd01f1',
        '0x1d9d9670351d7a05c19ed7c06d3085dcbef68264',
        '0x620266bf3b1675646173f9b8d7b5ed92c0805400',
        '0xb2bc3b9558a22a73edd531c590593f5e4e3370a7',
        '0x1c533d00b6463bdb609555e906cee92bd8e5f313',
        '0x07d30104ba4d9eb4a845db1142bf9aa1f5a93d97',
        '0xecc17838dcc6ed1be59c7b3aadc015c7299c72ec',
        '0x51907923c3280c24b6b69b0d217ea34cabde684d',
        '0x211d59b3ce1b8f6fc37df1055a603394cdd3a4e4',
        '0xdacc53bb6dbb17029f17e408ae9e07e13b8af563',
        '0xd016ab46ec8fd9ccc19103db74b3cca72e68ea62',
        '0x8a048742ae8f533cc8680b0098701bf9557f25da',
        '0x8ea7865cdf06ed8bfaf3826fdd34ecb6d596d612',
        '0xfec548e321d1776867821bd8697e147eda5e8f20',
        '0x8646a2dbf9585b0e76811bc338706d702ed68203',
        '0xdcb059d5d596e15cf7256b406e1d5991dee7ec70',
        '0x4f70eaf75e7d31cea17248476fc98947b31d4d3a',
        '0xb5621cf12d88f3711836a062f23bf6d3965d7f09',
        '0x6dc4a22c8b5e208a75a86b89c65273e361eaac6a',
        '0xe06418962803dc41a36fd6c677dfab68a954d066',
        '0x3f400c81c3c13ece47ec02b612d5643f92dd6aeb',
        '0x30fdf2c840aab738bccba53d9787bffa8ba27005',
        '0x4c789df2c1e21bb17c5ab24ed95d6abeb114726b',
        '0xc99209bbc3ce73b610f5f17cd01a0d1244abbc8d',
        '0x5e7fd9521a17c38f3f69a02e3f45f8df7763c224',
    ],
};