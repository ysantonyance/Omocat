import { ProductGenerator } from "./entities/ProductGenerator.js";
import { Category } from "./entities/Category.js";
import { Cart } from "./entities/Cart.js";
import { checkout } from './entities/Cart.js';
import { Product } from "./entities/Product.js";
import { loadProducts } from "./entities/api.js";

let collections = new Category(1, "Collections", );
let hololiveEn = new Category(2, "HOLOLIVE EN", collections);
let hololiveStage = new Category(3, "HOLOLIVE STAGE W.T. '24 -SOAR!-", collections);
let hololiveGamers = new Category(4, "HOLOLIVE GAMERS", collections);
let hololiveMeet = new Category(5, "HOLOLIVE MEET", collections);
let omori = new Category(6, "OMORI", collections);
let original = new Category(7, "ORIGINAL", collections);
let omocat10thAnni = new Category(8, "OMOCAT 10TH ANNI", collections);
let samekoSaba = new Category(9, "SAMEKO SABA", collections);

let apparel = new Category(10, "APPAREL");
let jacketsNZips = new Category(11, "JACKETS & ZIPS", apparel);
let sweatersNHoodies = new Category(12, "SWEATERS & HOODIES", apparel);
let shirts = new Category(13, "SHIRTS", apparel);
let pantsNShirts = new Category(14, "PANTS & SHORTS", apparel);

let accessories = new Category(15, "ACCESSORIES");
let hats = new Category(16, "HATS", accessories);
let bags = new Category(17, "BAGS", accessories);
let lanyards = new Category(18, "LANYARDS", accessories);
let keychainsNStands = new Category(19, "KEYCHAINS & STANDS", accessories);
let pins = new Category(20, "PINS", accessories);
let deskNStationery = new Category(22, "DESK & STATIONERY", accessories);
let homeware = new Category(23, "HOMEWARE", accessories);

let collectibles = new Category(24, "COLLECTIBLES");
let plushies = new Category(25, "PLUSHIES", collectibles);
let figures = new Category(26, "FIGURES", collectibles);
let booksNMedia = new Category(27, "BOOKS & MEDIA", collectibles);
let artPrintsNPosters = new Category(28, "ART PRINTS & POSTERS", collectibles);
let skateDecks = new Category(29, "SKATE DECKS", collectibles);

export let products = [
  new Product(
    1,
    "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo01_550x.png?v=1775844885",
    "holoJustice Varsity Jacket",
    130,
    false,
    "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_group_jacket_portrait01_550x.png?v=1775847328",
    [hololiveEn, jacketsNZips],
    ['https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_group_jacket_portrait02_550x.png?v=1775847328', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_group_jacket_portrait03_550x.png?v=1775847328', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_group_jacket_landscape01_550x.png?v=1775847328', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_group_jacket_landscape02_550x.png?v=1775847328', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_group_jacket_landscape02_550x.png?v=1775847328', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_group_jacket_landscape03_550x.png?v=1775847328', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_group_jacket_landscape04_550x.png?v=1775847328', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo01_1_550x.png?v=1775847328'],
    [
      {size: 'S', inStock: true},
      {size: 'M', inStock: true},
      {size: 'L', inStock: true},
      {size: 'XL', inStock: true},
      {size: 'XXL', inStock: true},
      {size: '3XL', inStock: true}
    ]
  ),
  new Product(
    2,
    "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo02_14a897c1-a0ad-4e25-90bd-c514d85090d1_550x.png?v=1775845160",
    "holoJustice T-Shirt",
    35,
    false,
    "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_group_shirt_portrait01_750x.png?v=1775846826",
    [hololiveEn, shirts],
    ['https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_group_shirt_portrait02_550x.png?v=1775846826', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_group_shirt_portrait03_550x.png?v=1775846825', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_group_shirt_portrait04_550x.png?v=1775846825', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_group_shirt_portrait05_550x.png?v=1775846826', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_group_shirt_landscape01_550x.png?v=1775846852', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_group_shirt_landscape02_550x.png?v=1775846852', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_group_shirt_landscape03_550x.png?v=1775846852', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_group_shirt_portrait06_550x.png?v=1775846852'],
    [
      {size: 'S', inStock: true},
      {size: 'M', inStock: false},
      {size: 'L', inStock: false},
      {size: 'XL', inStock: false},
      {size: 'XXL', inStock: false},
      {size: '3XL', inStock: false}
    ]
  ),
  new Product(
    3,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo03_c8fbc9f0-01ac-4302-88bd-6eda5b948a0d_550x.png?v=1775845166',
    'ELIZABETH ROSE BLOODFLAME Hoodie',
    35,
    false,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_hoodie_portrait05_550x.png?v=1775850591',
    [hololiveEn, sweatersNHoodies],
    ['https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_hoodie_portrait06_550x.png?v=1775850591', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_hoodie_portrait07_550x.png?v=1775850591', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_hoodie_portrait02_550x.png?v=1775850591', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_hoodie_portrait03_550x.png?v=1775850591', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_hoodie_portrait04_550x.png?v=1775850591', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_hoodie_landscape01_550x.png?v=1775850591', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_hoodie_landscape02_550x.png?v=1775850534', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_hoodie_landscape03_550x.png?v=1775850534', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo04_8e45bc87-4629-4b48-9c81-98f9bfa74c9f_550x.png?v=1775850534'],
    [
      {size: 'S', inStock: true},
      {size: 'M', inStock: true},
      {size: 'L', inStock: true},
      {size: 'XL', inStock: true},
      {size: 'XXL', inStock: true},
      {size: '3XL', inStock: false}
    ]
  ),
  new Product(
    4,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo05_7208d623-64e8-4c41-ac2e-00b0dee519a5_550x.png?v=1775851114',
    'SCARLET QUEEN T-Shirt',
    45,
    true,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_shirt_portrait01_550x.png?v=1775851114',
    [hololiveEn, shirts],
    ['https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_shirt_portrait02_550x.png?v=1775851114', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_shirt_portrait03_550x.png?v=1775851114', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_shirt_landscape01_550x.png?v=1775851114', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_shirt_portrait04_550x.png?v=1775851114', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_shirt_portrait05_550x.png?v=1775851114', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_shirt_portrait06_550x.png?v=1775851114', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_shirt_portrait07_550x.png?v=1775851114', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_shirt_portrait08_550x.png?v=1775851114'],
    [
      {size: 'S', inStock: false},
      {size: 'M', inStock: false},
      {size: 'L', inStock: false},
      {size: 'XL', inStock: false},
      {size: 'XXL', inStock: false},
      {size: '3XL', inStock: false}
    ]
  ),
  new Product(
    5,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo06_125ef682-3115-4ce7-a433-c640632b48ae_550x.png?v=1775845182',
    'GGEZ Hoodie',
    75,
    true,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_ggez_portraitpng03_550x.png?v=1775851651',
    [hololiveEn, sweatersNHoodies],
    ['https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_ggez_portraitpng02_550x.png?v=1775851651', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_ggez_portraitpng01_550x.png?v=1775851651', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_ggez_landscape01_550x.png?v=1775851610', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_ggez_landscape02_550x.png?v=1775851610', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_ggez_landscape03_550x.png?v=1775851610', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_ggez_landscape04_550x.png?v=1775851610', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_ggez_landscape05_550x.png?v=1775851610', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo07_ad04ea1a-77c1-4714-bfc9-6f7c5a88d1ac_550x.png?v=1775851610'],
    [
      {size: 'S', inStock: false},
      {size: 'M', inStock: false},
      {size: 'L', inStock: false},
      {size: 'XL', inStock: false},
      {size: 'XXL', inStock: false},
      {size: '3XL', inStock: false}
    ]
  ),
  new Product(
    6,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo08_80325d01-0617-40ce-ba60-5ca3e5b49f35_550x.png?v=1775845186',
    'GIGI MURIN T-Shirt',
    35,
    true,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_gg_shirt_portriat_logo01_5f65dfe7-311b-4ec7-8f2a-19628acc3d56_550x.png?v=1775852109',
    [hololiveEn, shirts],
    ['https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_gg_shirt_portriat_logo02_f86ecf0c-2062-46ca-9797-943ed3584b72_550x.png?v=1775852109', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_gg_shirt_portriat_logo03_51ce22cc-0d20-4b5a-874f-b1d5ed54b183_550x.png?v=1775852109', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_gg_shirt_portriat_logo04_d67e4d1f-9f7d-4245-b70e-a0254f6c52f5_550x.png?v=1775852109', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_gg_shirt_landscape01_550x.png?v=1775852109', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_gg_shirt_landscape02_550x.png?v=1775852109'],
    [
      {size: 'S', inStock: false},
      {size: 'M', inStock: false},
      {size: 'L', inStock: false},
      {size: 'XL', inStock: false},
      {size: 'XXL', inStock: false},
      {size: '3XL', inStock: false}
    ]
  ),
  new Product(
    7,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo09_25c06743-5102-492f-98bb-b4165ad8d4ae_550x.png?v=1775845192',
    'CECILIA IMMERGREEN Sweater',
    65,
    true,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_sweater01_550x.png?v=1775852689',
    [hololiveEn, sweatersNHoodies],
    ['https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_sweater02_550x.png?v=1775852689', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_sweater03_550x.png?v=1775852689', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_sweater04_550x.png?v=1775852689', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_sweater05_c63b043c-5328-4c7f-ba96-730c28ad00bf_550x.png?v=1775852756', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_sweater06_550x.png?v=1775852756', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_sweater07_550x.png?v=1775852756', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_sweater08_550x.png?v=1775852756', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_sweater09_550x.png?v=1775852756', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo10_70162e52-a84a-466e-bb15-7337aadb7ed1_550x.png?v=1775852756'],
    [
      {size: 'S', inStock: false},
      {size: 'M', inStock: false},
      {size: 'L', inStock: false},
      {size: 'XL', inStock: false},
      {size: 'XXL', inStock: false},
      {size: '3XL', inStock: false}
    ]
  ),
  new Product(
    8,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo11_3c9e28c4-577f-4403-8841-63eb93c28e1c_550x.png?v=1775845193',
    'OTOMO Pocket T-Shirt',
    45,
    true,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_shirt_logo01_550x.png?v=1775853021',
    [hololiveEn, shirts],
    ['https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_shirt_logo02_550x.png?v=1775853021', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_shirt_logo03_550x.png?v=1775853021', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_shirt_logo04_550x.png?v=1775853021', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cc_shirt_landscape01_550x.png?v=1775853075', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_shirt_logo06_550x.png?v=1775853108', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_shirt_logo05_550x.png?v=1775853108', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cc_shirt_landscape02_550x.png?v=1775853108', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cc_shirt_landscape03_550x.png?v=1775853108', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_shirt_logo07_550x.png?v=1775853108'],
    [
      {size: 'S', inStock: false},
      {size: 'M', inStock: false},
      {size: 'L', inStock: false},
      {size: 'XL', inStock: false},
      {size: 'XXL', inStock: false},
      {size: '3XL', inStock: false}
    ]
  ),
  new Product(
    9,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo12_958aae6e-0e32-4524-9ee9-4365b91217cd_550x.png?v=1775845174',
    'RAORA PANTHERA Zip-Hoodie',
    80,
    false,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_raora_jacket_logo05_a77091af-ace6-4182-a513-6c77bdae16a1_550x.png?v=1775853473',
    [hololiveEn, sweatersNHoodies],
    ['https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_raora_jacket_logo01_d9599978-2a34-48b8-b584-f3c1e4395760_550x.png?v=1775853473', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_raora_jacket_logo02_61712a1a-d1c8-4a4c-83df-46925bfe6791_550x.png?v=1775853473', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_raora_jacket_logo04_b980bc88-f5a7-4f21-b0da-72dd8b2905e4_550x.png?v=1775853473', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_raora_jacket_logo03_5e5796d2-53a2-4fd3-84f0-ba3df52df55e_550x.png?v=1775853473', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_raora_jacket_logo06_7f270bfa-43bb-4485-8fee-a6b3d78f3cb3_550x.png?v=1775853422', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_raora_jacket_landscape01_4a72e45f-0737-4636-b482-033615ed4b5c_550x.png?v=1775853422', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_raora_jacket_landscape02_64760f60-0299-4763-85bd-424f6b753d2a_550x.png?v=1775853422', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_raora_jacket_landscape03_180ccab7-4093-4cb2-9323-0ff1f35410c4_550x.png?v=1775853422', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_raora_jacket_landscape04_23b33b73-9770-49a5-8b3b-142f59a06ca7_550x.png?v=1775853422', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo13_f7364bc2-c53a-44f1-9021-e47feed70545_550x.png?v=1775853422'],
    [
      {size: 'S', inStock: true},
      {size: 'M', inStock: true},
      {size: 'L', inStock: true},
      {size: 'XL', inStock: true},
      {size: 'XXL', inStock: false},
      {size: '3XL', inStock: false}
    ]
  ),
  new Product(
    10,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo14_23c0187e-d05e-47c8-80d8-a8ec3286d83f_550x.png?v=1775845176',
    'CHATTINI T-Shirt',
    45,
    false,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_raora_shirt_logo01_550x.png?v=1775853804',
    [hololiveEn, shirts],
    ['https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_raora_shirt_logo02_550x.png?v=1775853804', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_raora_shirt_landscape_550x.png?v=1775853804', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_raora_shirt_logo03_550x.png?v=1775853804', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_raora_shirt_logo04_550x.png?v=1775853804', 'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_raora_shirt_logo05_550x.png?v=1775853804'],
    [
      {size: 'S', inStock: true},
      {size: 'M', inStock: false},
      {size: 'L', inStock: false},
      {size: 'XL', inStock: true},
      {size: 'XXL', inStock: false},
      {size: '3XL', inStock: false}
    ]
  ),
  new Product(
    11,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo03_550x.png?v=1775845598',
    'PIXEL ELIZABETH Cap',
    35,
    false,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo04_550x.png?v=1775845598',
    [hololiveEn, hats]
  ),
  new Product(
    12,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo05_550x.png?v=1775845581',
    'PIXEL GIGI Cap',
    35,
    true,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo06_550x.png?v=1775845582',
    [hololiveEn, hats]
  ),
  new Product(
    13,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo01_550x.png?v=1775845582',
    'PIXEL CECILIA Cap',
    35,
    false,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo02_550x.png?v=1775845581',
    [hololiveEn, hats]
  ),
  new Product(
    14,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo07_550x.png?v=1775845635',
    'PIXEL RAORA Cap',
    35,
    false,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo08_550x.png?v=1775845635',
    [hololiveEn, hats]
  ),
  new Product(
    15,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_keychains_logo01_550x.png?v=1775846140',
    'PIXEL holoJustice Acrylic Keychain',
    10,
    false,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_keychains_logo02_550x.png?v=1775846140',
    [hololiveEn, hats],
    ['https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_keychains_logo03_550x.png?v=1775846140', 'https://www.omocat-shop.com/cdn/shop/files/acrylic_film_guide_97763615-f194-462a-93cb-ac74ee6f63fd_550x.png?v=1775854241']
  ),
  new Product(
    16,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_acrylic_blocks_logo04_4de4fcbb-0f08-48bf-a5f7-16155b9b6f90_550x.png?v=1775854209',
    'PIXEL ELIZABETH Acrylic Stand',
    12,
    false,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_acrylic_blocks_logo03_3467a4ae-aa97-415f-9da8-cad8f34ce8c6_550x.png?v=1775854209',
    [hololiveEn, keychainsNStands],
    ['https://www.omocat-shop.com/cdn/shop/files/acrylic_film_guide_97763615-f194-462a-93cb-ac74ee6f63fd_550x.png?v=1775854241']
  ),
  new Product(
    17,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_acrylic_blocks_logo06_d6cac341-b43b-4050-9881-7e911f50b07d_550x.png?v=1775854142',
    'PIXEL GIGI Acrylic Stand',
    12,
    false,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_acrylic_blocks_logo05_7fb29977-4523-43da-8477-81d190cb3b5b_550x.png?v=1775854142',
    [hololiveEn, keychainsNStands],
    ['https://www.omocat-shop.com/cdn/shop/files/acrylic_film_guide_97763615-f194-462a-93cb-ac74ee6f63fd_550x.png?v=1775854241']
  ),
  new Product(
    18,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_acrylic_blocks_logo02_550x.png?v=1775854160"',
    'PIXEL CECILIA Acrylic Stand',
    12,
    false,
    'https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_acrylic_blocks_logo01_550x.png?v=1775854160',
    [hololiveEn, keychainsNStands],
    ['https://www.omocat-shop.com/cdn/shop/files/acrylic_film_guide_97763615-f194-462a-93cb-ac74ee6f63fd_550x.png?v=1775854241']
  )
]


export function setupCart() {
  let cart = new Cart();
  cart.loadFromCart();

  function updateCartBadge() {
    let badge = document.getElementById('cartCount');
    if (badge)
      badge.textContent = cart.getItemCount();
  }

  function renderCart() {
    let container = document.getElementById('cartItemsContainer');
    let totalEl = document.getElementById('cartTotalPrice');
    if (!container)
      return;

    if (cart.items.length === 0) {
      container.innerHTML = '<p>Your cart is empty.</p>';
      if (totalEl)
        totalEl.textContent = '0';
      return;
    }

    container.innerHTML = '';
    cart.items.forEach(item => {
      if (!item || !item.product) return;
      let div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.product.imgUrl}" alt="${item.product.name}">
        <div class="cart-item-info">
          <p class="cart-item-name">${item.product.name}</p>
          <p class="cart-item-price">$${item.product.price}</p>
          <div class="cart-item-controls">
            <button class="cart-qty-btn" data-id="${item.product.id}" data-action="decrease">-</button>
            <span>${item.quantity}</span>
            <button class="cart-qty-btn" data-id="${item.product.id}" data-action="increase">+</button>
          </div>
        </div>
        <button class="cart-remove-btn" data-id="${item.product.id}">×</button>
      `;
      container.appendChild(div);
    });

    if (totalEl)
      totalEl.textContent = cart.getTotal().toFixed(2);

    container.querySelectorAll('.cart-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        let id = parseInt(btn.dataset.id);
        let item = cart.items.find(i => i.product.id === id);
        if (!item) return;
        let newQty = btn.dataset.action === 'increase' ? item.quantity + 1 : item.quantity - 1;
        cart.updateQuantity(id, newQty);
        renderCart();
        updateCartBadge();
      });
    });

    container.querySelectorAll('.cart-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        cart.removeItem(parseInt(btn.dataset.id));
        renderCart();
        updateCartBadge();
      });
    });
  }

  let cartIcon = document.getElementById('cartIcon');
  let cartDrawer = document.getElementById('cartDrawer');
  let closeCartBtn = document.getElementById('closeCartBtn');
  let drawerOverlay = document.getElementById('drawerOverlay');

  if (cartIcon)
    cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    renderCart();
    cartDrawer.classList.add('open');
  });
  if (closeCartBtn)
    closeCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      cartDrawer.classList.remove('open');
    });
  if (drawerOverlay)
    drawerOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      cartDrawer.classList.remove('open')
    });

  updateCartBadge();

  return { cart, renderCart, updateCartBadge };
}

document.addEventListener('DOMContentLoaded', async () => {
  let { cart, renderCart, updateCartBadge } = setupCart();
  let container = document.getElementById('products-container');
  if (container) {
    let generator = new ProductGenerator();

    //все работает, но мне нужный мои продукты, а не рандомные
    /*let products = await loadProducts();*/

    generator.generate(products, container);
  }

  updateCartBadge();

  let checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      checkout(cart);
    });
  }
});


