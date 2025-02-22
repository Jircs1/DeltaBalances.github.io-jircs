module.exports = {
    // .supportedDex toggles whether recent.js parses them as Exchanges
    EtherDelta: { addr: '0x8d12a197cb00d4747a1fe03395095ce2a5cc6819', name: 'EtherDelta', supportedDex: true },
    EtherDelta2: { addr: '0x373c55c277b866a69dc047cad488154ab9759466', name: 'EtherDelta-OLD', supportedDex: true },
    EtherDelta3: { addr: '0x4aea7cf559f67cedcad07e12ae6bc00f07e8cf65', name: 'EtherDelta-OLD', supportedDex: true },
    EtherDelta4: { addr: '0x2136bbba2edca21afdddee838fff19ea70d10f03', name: 'EtherDelta-OLD', supportedDex: true },
    EtherDelta5: { addr: '0xc6b330df38d6ef288c953f1f2835723531073ce2', name: 'EtherDelta-OLD', supportedDex: true },
    TokenStore: { addr: '0x1ce7ae555139c5ef5a57cc8d814a867ee6ee33d8', name: 'Token Store', supportedDex: true },
    Idex: { addr: '0x2a0c0dbecc7e4d658f48e01e3fa353f44050c208', name: 'IDEX', supportedDex: true },
    Decentrex: { addr: '0xbf29685856fae1e228878dfb35b280c0adcc3b05', name: 'Decentrex', supportedDex: true },
    '0x': { addr: '0x12459c951127e0c374ff9105dda097662a027093', name: '0x Exchange', supportedDex: true },
    '0xProxy': { addr: '0x8da0d80f5007ef1e431dd2127178d224e32c2ef4', name: '0x Proxy', supportedDex: true },
    '0x2': { addr: '0x4f833a24e1f95d70f028921e27040ca56e09ab0b', name: '0x Exchange2', supportedDex: true },
    '0xProxy2': { addr: '0x2240dab907db71e64d3e0dba4800c83b5c502d4e', name: '0x ERC20 Proxy', supportedDex: true },
    '0xProxy3': { addr: '0x208e41fb445f1bb1b6780d58356e81405f3e6127', name: '0x ERC721 Proxy', supportedDex: false },
    '0xForwarder': { addr: '0x7afc2d5107af94c462a194d2c21b5bdd238709d6', name: '0x Instant', supportedDex: false },
    '0xForwarder2': { addr: '0x5468a1dc173652ee28d249c271fa9933144746b1', name: '0x Instant', supportedDex: false },
    //0x v2.1 bugfix release
    '0x2.1': { addr: '0x080bf510fcbf18b91105470639e9561022937712', name: '0x Exchange 2.1', supportedDex: true },
    '0xProxy4': { addr: '0x95e6f48254609a6ee006f7d493c8e5fb97094cef', name: '0x ERC20 Proxy', supportedDex: true },
    '0xProxy5': { addr: '0xefc70a1b18c432bdc64b596838b4d138f6bc6cad', name: '0x ERC721 Proxy', supportedDex: false },
    '0xProxy6': { addr: '0xef701d5389ae74503d633396c4d654eabedc9d78', name: '0x MAP Proxy', supportedDex: false },
    '0xForwarder3': { addr: '0xdc4587cb17d2a1829512e2cfec621f8066290e6a', name: '0x Instant', supportedDex: false },

    // ethfinex v1, 0x v1 clone
    Ethfinex: { addr: '0xdcdb42c9a256690bd153a7b409751adfc8dd5851', name: 'Ethfinex', supportedDex: true },
    EthfinexProxy: { addr: '0x7e03d2b8edc3585ecd8a5807661fff0830a0b603', name: 'Ethfinex Proxy', supportedDex: true },

    OasisDex: { addr: '0x14fbca95be7e99c15cc2996c6c9d841e54b79425', name: 'OasisDex', supportedDex: true },
    OasisDex2: { addr: '0xb7ac09c2c0217b07d7c103029b4918a2c401eecb', name: 'OasisDex', supportedDex: true },
    OasisDex3: { addr: '0x39755357759ce0d7f32dc8dc45414cca409ae24e', name: 'Eth2Dai (Oasis)', supportedDex: true },
    OasisDexOld: { addr: '0x3aa927a97594c3ab7d7bf0d47c71c3877d1de4a1', name: 'OasisDex (OLD)', supportedDex: true },
    OasisDexOld2: { addr: '0x83ce340889c15a3b4d38cfcd1fc93e5d8497691f', name: 'OasisDex (OLD2)', supportedDex: true },
    OasisDexOld3: { addr: '0xa1b5eedc73a978d181d1ea322ba20f0474bb2a25', name: 'OasisDex (OLD3)', supportedDex: false },

    //Oasisdirect proxy creator
    OasisDirect: { addr: '0x793ebbe21607e4f04788f89c7a9b97320773ec59', name: 'OasisDirect', supportedDex: true },
    //0x279594b6843014376a422ebb26a6eab7a30e36f0 Oasisdirect only 2 txs

    AirSwap: { addr: '0x8fd3121013a07c57f0d69646e86e7a4880b467b7', name: 'AirSwap', supportedDex: true },
    Kyber: { addr: '0x964f35fae36d75b1e72770e244f6595b68508cf5', name: 'Kyber Network', supportedDex: true }, // contract disabled?
    KyberTest: { addr: '0xd2d21fdef0d054d2864ce328cc56d1238d6b239e', name: 'Kyber Test', supportedDex: true },

    Kyber2: { addr: '0x91a502c678605fbce581eae053319747482276b9', name: 'Kyber Network', supportedDex: true }, // Kyber v2?
    Kyber2Proxy: { addr: '0x818e6fecd516ecc3849daf6845e3ec868087b755', name: 'Kyber Network', supportedDex: true }, // kyber2 moved events to proxy?
    Kyber2_2: { addr: '0x706abce058db29eb36578c463cf295f180a1fe9c', name: 'Kyber Network', supportedDex: true },
    Kyber2_2Proxy: { addr: '0xc14f34233071543e979f6a79aa272b0ab1b4947d', name: 'Kyber Network', supportedDex: true },
    Kyber2_3: { addr: '0x44f854ea73eec7a10c9ff0e003d1ec076ac18197', name: 'Kyber Network', supportedDex: true },
    Kyber2_3Proxy: { addr: '0x3257073d3b80bae378db8dea32519938910d05cc', name: 'Kyber Network', supportedDex: true },
    Kyber2_4: { addr: '0xaa9fb0f5b12752af97afa9ffdad9a15902645dbf', name: 'Kyber Network', supportedDex: true },
    Kyber2_4Proxy: { addr: '0xd76d2888828aea74247c41157020dad54865e730', name: 'Kyber Network', supportedDex: true },

    Kyber2_5: { addr: '0x9ae49c0d7f8f9ef4b864e004fe86ac8294e20950', name: 'Kyber Network', supportedDex: true },

    BancorQuick: { addr: '0xcf1cc6ed5b653def7417e3fa93992c3ffe49139b', name: 'Bancor', supportedDex: false },
    BancorQuick2: { addr: '0xf87a7ec94884f44d9de33d36b73f42c7c0dd38b1', name: 'Bancor', supportedDex: false },
    // network is quick v3?
    BancorNetwork: { addr: '0xf20b9e713a33f61fa38792d2afaf1cd30339126a', name: 'Bancor', supportedDex: false },
    // bancor quick3? 0x111913ca1c1a8d4e3283213ba115bf6dcde07d6f
    Enclaves: { addr: '0xbf45f4280cfbe7c2d2515a7d984b8c71c15e82b7', name: 'EnclavesDex', supportedDex: true },
    Enclaves2: { addr: '0xed06d46ffb309128c4458a270c99c824dc127f5d', name: 'EnclavesDex', supportedDex: false },
    Ethen: { addr: '0xf4c27b8b002389864ac214cb13bfeef4cc5c4e8d', name: 'ETHEN', supportedDex: true },
    Ethex: { addr: '0xb746aed479f18287dc8fc202fe06f25f1a0a60ae', name: 'ETHEX', supportedDex: true },
    Singularx: { addr: '0x9a2d163ab40f88c625fd475e807bbc3556566f80', name: 'SingularX', supportedDex: true },
    EtherC: { addr: '0xd8d48e52f39ab2d169c8b562c53589e6c71ac4d3', name: 'EtherC', supportedDex: true },

    /* exchange aggregators */
    EasyTrade: { addr: '0x9ae4ed3bf7a3a529afbc126b4541c0d636d455f6', name: 'EasyTrade', supportedDex: true },
    EasyTrade2: { addr: '0x0c577fbf29f8797d9d29a33de59001b872a1d4dc', name: 'EasyTrade', supportedDex: true },
    //tokenstore instant
    InstantTrade: { addr: '0xe17dbb844ba602e189889d941d1297184ce63664', name: 'TS InstantTrade', supportedDex: true },


    /* exchange aggregators (no input parsing yet) */
    // totle primary contracts      //https://github.com/totleplatform/contracts
    Totle: { addr: '0xd94c60e2793ad587400d86e4d6fd9c874f0f79ef', name: 'Totle', supportedDex: false },
    Totle2: { addr: '0x99eca38b58ceeaf0fed5351df21d5b4c55995314', name: 'Totle', supportedDex: false },
    Totle3: { addr: '0x476a0a98beaae3e7e451ccd46e50fb465ae540bb', name: 'Totle', supportedDex: false },
    Totle4: { addr: '0xa674695d170b51e300624728fb920f3c01b0f5c3', name: 'Totle', supportedDex: false },
    Totle5: { addr: '0x98db9047e80260b407ffbc67543f9a010ef0fc6a', name: 'Totle-OLD', supportedDex: false }, // unknown abi
    TotleProxy: { addr: '0xad5aa494bcd729b8ea728f581aade049c4ec4e9d', name: 'Totle', supportedDex: false },
    TotleProxy2: { addr: '0x74758acfce059f503a7e6b0fc2c8737600f9f2c4', name: 'Totle', supportedDex: false },
    TotleProxy3: { addr: '0xad5aa494bcd729b8ea728f581aade049c4ec4e9d', name: 'Totle', supportedDex: false },


    /* small ED/FD clones, not in balance & history pages yet, input/events should parse */
    Bitox: { addr: '0xb5adb233f28c86cef693451b67e1f2d41da97d21', name: 'BITOX', supportedDex: true },
    Coinchange: { addr: '0x2f23228b905ceb4734eb42d9b42805296667c93b', name: 'Coinchangex', supportedDex: true },
    EtherNext: { addr: '0x499197314f9903a1ba9bed7ee54cd9eee5900e49', name: 'Ethernext', supportedDex: true },
    Swisscrypto: { addr: '0xbeeb655808e3bdb83b6998f09dfe1e0f2c66a9be', name: 'SwissCrypto', supportedDex: true },
    Ethmall: { addr: '0x2b44d68555899dbc1ab0892e7330476183dbc932', name: 'Ethmall', supportedDex: true },
    Ethernity: { addr: '0x18f0cd26c06449d967ca6aef8b5f9d8ee9fd7992', name: 'Ethernity', supportedDex: true },
    ExToke: { addr: '0x97c9e0eccc27efef7330e89a8c9414623ba2ee0f', name: 'ExToke', supportedDex: true },
    AZExchange: { addr: '0xba74368aa52ad58d08309f1f549aa63bab0c7e2a', name: 'AZExchange', supportedDex: true },
    EtherERC: { addr: '0x20ac542ea6b358066f2308c9805531be62747e90', name: 'EtherERC', supportedDex: true },
    Polaris: { addr: '0x25066b77ae6174d372a9fe2b1d7886a2be150e9b', name: 'PolarisDEX', supportedDex: true },
    TradexOne: { addr: '0xf61a285edf078536a410a5fbc28013f9660e54a8', name: 'TradexOne', supportedDex: true },
    LSCX: { addr: '0x3da70c70b9574ff185b31d70878a8e3094603c4c', name: 'LSCX Dex', supportedDex: true },
    Scam: { addr: '0x1cd442aff7cdd247420a4dc76b44111994f521c9', name: 'SCAM EtherDelta', supportedDex: true },
    nDEx: { addr: '0x51a2b1a38ec83b56009d5e28e6222dbb56c23c22', name: 'nDex market', supportedDex: true },
    SeedDex: { addr: '0x7e21c13cac00528f5217f8c0c06706a91afe4a48', name: 'SeedDex', supportedDex: true },
    SeedDex2: { addr: '0xd4cc0cda97ec567235b7019c655ec75cd361f712', name: 'SeedDex', supportedDex: true },
    SwitchDex: { addr: '0xc3c12a9e63e466a3ba99e07f3ef1f38b8b81ae1b', name: 'SwitchDex', supportedDex: true },
    GiantDex: { addr: '0x7e21c13cac00528f5217f8c0c06706a91afe4a48', name: 'GiantDex', supportedDex: true },
    EtheRoox: { addr: '0xbca13cbebff557143e8ad089192380e9c9a58c70', name: 'EtheRoox', supportedDex: true },
    Ampl: { addr: '0x232ba9f3b3643ab28d28ed7ee18600708d60e5fe', name: 'Amplbitcratic', supportedDex: true },
    FakeED: { addr: '0x60394f71266901a5930bb4e90db5dd26b77f8dad', name: 'Fake EtherDelta', supportedDex: true },
    Marketplace: { addr: '0x2f13fa06c0efd2a5c4cf2175a0467084672e648b', name: 'Marketplace', supportedDex: true },
    Bloxxor: { addr: '0xb92c5f4f3a13bb14467fe0c25a4c569aa20e1df8', name: 'Bloxxor', supportedDex: true },
    Bitcratic: { addr: '0x3c020e014069df790d4f4e63fd297ba4e1c8e51f', name: 'Bitcratic', supportedDex: true },
    Swatx: { addr: '0x513c07e83237124e08672be4c8d481246d6f03f2', name: 'SWATX', supportedDex: true },
    CryptloDex: { addr: '0xcf5d889e2336d0f35f6121718f6c25e0650d4b25', name: 'CryptloDex', supportedDex: true},
    UnknownED: { addr: '0x4d55f76ce2dbbae7b48661bef9bd144ce0c9091b', name: 'Unknown', supportedDex: true },

    /* exchanges with no parsing support yet */
    DDEX: { addr: '0x2cb4b49c0d6e9db2164d94ce48853bf77c4d883e', name: 'DDEX Hydro', supportedDex: false },
    DDEX2: { addr: '0xe2a0bfe759e2a4444442da5064ec549616fff101', name: 'DDEX Hydro 1.1', supportedDex: false },
    DDEXproxy: { addr: '0x74622073a4821dbfd046e9aa2ccf691341a076e1', name: 'DDEX Hydro', supportedDex: false },
    R1: { addr: '0x7b45a572ea991887a01fd919c05edf1cac79c311', name: 'R1 Protocol', supportedDex: false }, //bithumb R1 protocol?
    // old R1? 0xE18898c76a39ba4Cd46a544b87ebe1166fbe7052
    BithumbDex: { addr: '0xc7c9b856d33651cc2bcd9e0099efa85f59f78302', name: 'BithumbDex', supportedDex: false },     //bithumb dex R1
    Martle: { addr: '0x551d56781e0cd16ac2c61a03e6537844a41c7709', name: 'Martle instant', supportedDex: false },
    Switcheo: { addr: '0xba3ed686cc32ffa8664628b1e96d8022e40543de', name: 'Switcheo', supportedDex: true }, //partial
    DutchX: { addr: '0x039fb002d21c1c5eeb400612aef3d64d49eb0d94', name: 'DutchX', supportedDex: false },
    DutchXProxy: { addr: '0xaf1745c0f8117384dfa5fff40f824057c70f2ed3', name: 'DutchX', supportedDex: false },
    Ethermium: { addr: '0xa5CC679A3528956E8032df4F03756C077C1eE3F4', name: 'Ethermium', supportedDex: false },
    // UniSwap (contract per token pair)

    /* small exchanges, no input/event parsing yet */
    Dexy: { addr: '0x54b0de285c15d27b0daa687bcbf40cea68b2807f', name: 'Dexy', supportedDex: false },
    Dexy2: { addr: '0x9d160e257f1dff52ec81d5a4e7326dd82e144177', name: 'Dexy', supportedDex: false },
    Dubiex: { addr: '0x7c21d723af0f4594d4f8821aa16bc27c8ea6cec7', name: 'DUBIex', supportedDex: false },
    Radex: { addr: '0x9462eeb9124c99731cc7617348b3937a8f00b11f', name: 'Radex', supportedDex: false },
    Joyso: { addr: '0x04f062809b244e37e7fdc21d9409469c989c2342', name: 'Joyso', supportedDex: false },
    DexTop: { addr: '0x7600977eb9effa627d6bd0da2e5be35e11566341', name: 'DEx.top', supportedDex: false },
    BitEye: { addr: '0x39fbd1140cd1fc298f00c3ea64b3591de94c67e7', name: 'BitEye', supportedDex: false },
    BitEye2: { addr: '0x9e2f2dd1e3641f389673f89dc316bb00b01cd83a', name: 'BitEye', supportedDex: false },
    AXNET: { addr: '0xacf999bfa9347e8ebe6816ed30bf44b127233177', name: 'AXNET', supportedDex: false },
    WeiDex: { addr: '0xccd7ce9ec004bfbd5711245f917d6109813a909c', name: 'WeiDex', supportedDex: false },
    DexBlue: { addr: '0x257586004f6828a01ba4a874d3cfd0757029f32a', name: 'dexBlue', supportedDex: false },
    AllBit: { addr: '0xdc1882f350b42ac9a23508996254b1915c78b204', name: 'AllBit', supportedDex: false },
    AllBit2: { addr: '0xff6b1cdfd2d3e37977d7938aa06b6d89d6675e27', name: 'AllBit', supportedDex: false },
    Saturn: { addr: '0x13f64609bf1ef46f6515f8cd3115433a93a00dc6', name: 'Saturn Network', supportedDex: false },
    Loopring: { addr: '0x8d8812b72d1e4ffcec158d25f56748b7d67c1e78', name: 'LoopRing', supportedDex: false },
    Aiwallet: { addr: '0x3dbf4ee7ed88157cda8b2c1578861cea1a1230f1', name: 'Aiwallet', supportedDex: false },
    AmisDex: { addr: '0x2cc69caaaaa6114ddf48f4ddb2adb9c5d5d3e048', name: 'AmisDex', supportedDex: false },
    Verify1: { addr: '0x48bf5e13a1ee8bd4385c182904b3abf73e042675', name: '0xVerify', supportedDex: false },
    Verify2: { addr: '0x1c307a39511c16f74783fcd0091a921ec29a0b51', name: '0xVerify', supportedDex: false },
    Orderbook: { addr: '0xb3ec0d352c7935dd2663eafab4c99be6508df9af', name: 'orderbook.io', supportedDex: false },
    DexFarm: { addr: '0xa78fa0825b46b38c8679c3ea7e493d90cd6bc834', name: 'Dex Farm', supportedDex: false },
    DexBrokerage: { addr: '0x41a5b8aa081dcd69ace566061d5b6adcb92cae1c', name: 'DexBrokerage', supportedDex: true }, // everything beside trade parses (idex-like)
    WandX: { addr: '0xf9570f0332776abc55e5fbdb35c82bb20b5ad00b', name: 'WandX', supportedDex: false },
    Blockonix: { addr: '0x80ea118992545f43a8592c812b1099e518097874', name: 'Blockonix', supportedDex: false },
    Blockonix2: { addr: '0x67b084e4654e1d62afa9694b6a626cec5c9ff2bd', name: 'Blockonix', supportedDex: false },
    CryptoKitty: { addr: '0xb1690c08e213a35ed9bab7b318de14420fb57d8c', name: 'CryptoKitties', supportedDex: false }, //auction
    Dinngo: { addr: '0xd494938d0524edadfc239adc2c233e50550fa152', name: 'Dinngo', supportedDex: false },
    DappDex: { addr: '0xec3d7968b0d3fff0a074668e08eb56c5e6d38b21', name: 'DappDex', supportedDex: false},

    // hb dex 0xf5f310b4bc81917c39a73cfec2c1b36325437fea, 0x5907aecf617c5019d9b3b43a5d65e583ce0f48bf
    // cryptozodiac 0xf238f55ede5120915b36715b0fffe20ff57f8134
    // dex.io 0xababb61a9f837aad53ed4320221737fc6e9dc84b

    // counter.market 0x12345678979f29ebc99e00bdc5693ddea564ca80, 0xc0deee11aa091189fff0713353c43c7c8cae7881, 0x12345678982cb986dd291b50239295e3cb10cdf6
    // 0xverify 0x48bf5e13a1ee8bd4385c182904b3abf73e042675


    //leverj
    Leverj1: { addr: '0x67b084e4654e1d62afa9694b6a626cec5c9ff2bd', name: 'LeverJ', supportedDex: false },//registry
    Leverj2: { addr: '0x67b084e4654e1d62afa9694b6a626cec5c9ff2bd', name: 'LeverJ', supportedDex: false },//custodian
    Leverj3: { addr: '0x67b084e4654e1d62afa9694b6a626cec5c9ff2bd', name: 'LeverJ', supportedDex: false },//staking

    //compound.finance v1
    Compound1: { addr: '0x67b084e4654e1d62afa9694b6a626cec5c9ff2bd', name: 'Compound', supportedDex: false }, //market
    Compound2: { addr: '0x67b084e4654e1d62afa9694b6a626cec5c9ff2bd', name: 'Compound', supportedDex: false }, //oracle
    Compound3: { addr: '0x67b084e4654e1d62afa9694b6a626cec5c9ff2bd', name: 'Compound', supportedDex: false }, //interest

    //bilink
    Bilink1: { addr: '0xffd883e94f7a3700aaf81a411bd164ad27acc656', name: 'Bilink', supportedDex: false }, //loan
    Bilink1: { addr: '0xaea870ca4ad2ee820050124a7580e78176d9c806', name: 'Bilink', supportedDex: false }, //loan
    Bilink1: { addr: '0x4acbad9064c1a248ff73b1855613c16d9f5894b4', name: 'Bilink', supportedDex: false }, // exchange, trades
    Bilink1: { addr: '0x611ce695290729805e138c9c14dbddf132e76de3', name: 'Bilink', supportedDex: false }, // data
    Bilink1: { addr: '0xc75fa06f6002b458468d9e484d13bf522030d4ae', name: 'Bilink', supportedDex: false }, // balance


    // kernel? 0x740f8b58f5562c8379f2a8c2230c9be5c03ac3fc
    // nuo network https://github.com/NuoNetwork/contracts-v2
    
    //slowtrade 0x851b7f3ab81bd8df354f0d7640efcd7288553419 ??
    //slowtrade 0x039fb002d21c1c5eeb400612aef3d64d49eb0d94 ??


    //dether 0x9e282120e0820787085fd9914c6f36cc73631476 ??
    //dether 0x876617584678d5b9a6ef93eba92b408367d9457c ??

    //stixex 0x946bff9ee4f2486d4f061a05bf6f7bc40703769a

    //thor swap 0x2348174894e42b82db043d210051cec544653389

    //market protocol?

    /* unknown ed clones */
    // 0xd307c5686441fe6677e9251d1c1c469e0785e331
    // 0xa0e8bf2b304a9761cbbf82369182f748cbeae6b5
    // 0x4d55f76ce2dbbae7b48661bef9bd144ce0c9091b
    // 0xc86366cb075426223bca74059ae9dd3d68b5210a
    // 0xec65d776a9624e1186fabe988280b2f8e13bbf80
    // 0xccdabeaa4c1c54efab58484c791428b22083b432
    // 0xdb212bb6dd0c9cbc9fc0c5ffe88be35b81cbeb92

    // fake 0x? 0x5fb2f392772a6cb5ac423ceb587b62898c06c8cf
    // 0x v2 ?? 0xec200345f7e2991bcead2d299902e1380f902dca
    //unverified bancor? 0xf0e5af5380edf5295279dd0d5b930d3b9408867d
    // ?? 0x634cf699a42940f0ded47a98ce8e36bc82683baf
};