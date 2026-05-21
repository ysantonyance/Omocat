import { ProductGenerator } from "./entities/ProductGenerator.js";

let products = [
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo01_550x.png?v=1775844885",
    name: "holoJustice Varsity Jacket",
    price: 130,
    isSold: false,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_group_jacket_portrait01_550x.png?v=1775847328"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo02_14a897c1-a0ad-4e25-90bd-c514d85090d1_550x.png?v=1775845160",
    name: "holoJustice T-Shirt",
    price: 35,
    isSold: false,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_group_shirt_portrait01_750x.png?v=1775846826"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo03_c8fbc9f0-01ac-4302-88bd-6eda5b948a0d_550x.png?v=1775845166",
    name: "ELIZABETH ROSE BLOODFLAME Hoodie",
    price: 35,
    isSold: false,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_hoodie_portrait05_550x.png?v=1775850591"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo05_7208d623-64e8-4c41-ac2e-00b0dee519a5_550x.png?v=1775851114",
    name: "SCARLET QUEEN T-Shirt",
    price: 45,
    isSold: true,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_erb_shirt_portrait01_550x.png?v=1775851114"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo06_125ef682-3115-4ce7-a433-c640632b48ae_550x.png?v=1775845182",
    name: "GGEZ Hoodie",
    price: 75,
    isSold: true,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_ggez_portraitpng03_550x.png?v=1775851651"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo08_80325d01-0617-40ce-ba60-5ca3e5b49f35_550x.png?v=1775845186",
    name: "GIGI MURIN T-Shirt",
    price: 35,
    isSold: true,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_gg_shirt_portriat_logo01_5f65dfe7-311b-4ec7-8f2a-19628acc3d56_550x.png?v=1775852109"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo09_25c06743-5102-492f-98bb-b4165ad8d4ae_550x.png?v=1775845192",
    name: "CECILIA IMMERGREEN Sweater",
    price: 65,
    isSold: true,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_sweater01_550x.png?v=1775852689"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo11_3c9e28c4-577f-4403-8841-63eb93c28e1c_550x.png?v=1775845193",
    name: "OTOMO Pocket T-Shirt",
    price: 45,
    isSold: true,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_cece_shirt_logo01_550x.png?v=1775853021"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo12_958aae6e-0e32-4524-9ee9-4365b91217cd_550x.png?v=1775845174",
    name: "RAORA PANTHERA Zip-Hoodie",
    price: 80,
    isSold: false,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_raora_jacket_logo05_a77091af-ace6-4182-a513-6c77bdae16a1_550x.png?v=1775853473"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_logo14_23c0187e-d05e-47c8-80d8-a8ec3286d83f_550x.png?v=1775845176",
    name: "CHATTINI T-Shirt",
    price: 35,
    isSold: false,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_raora_shirt_logo01_550x.png?v=1775853804"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo03_550x.png?v=1775845598",
    name: "PIXEL ELIZABETH Cap",
    price: 35,
    isSold: false,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo04_550x.png?v=1775845598"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo05_550x.png?v=1775845581",
    name: "PIXEL GIGI Cap",
    price: 35,
    isSold: true,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo06_550x.png?v=1775845582"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo01_550x.png?v=1775845582",
    name: "PIXEL CECILIA Cap",
    price: 35,
    isSold: false,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo02_550x.png?v=1775845581"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo07_550x.png?v=1775845635",
    name: "PIXEL RAORA Cap",
    price: 35,
    isSold: false,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_hats_logo08_550x.png?v=1775845635"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_keychains_logo01_550x.png?v=1775846140",
    name: "PIXEL holoJustice Acrylic Keychain",
    price: 10,
    isSold: false,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_keychains_logo02_550x.png?v=1775846140"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_acrylic_blocks_logo04_4de4fcbb-0f08-48bf-a5f7-16155b9b6f90_550x.png?v=1775854209",
    name: "PIXEL ELIZABETH Acrylic Stand",
    price: 12,
    isSold: false,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_acrylic_blocks_logo03_3467a4ae-aa97-415f-9da8-cad8f34ce8c6_550x.png?v=1775854209"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_acrylic_blocks_logo06_d6cac341-b43b-4050-9881-7e911f50b07d_550x.png?v=1775854142",
    name: "PIXEL GIGI Acrylic Stand",
    price: 12,
    isSold: false,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_acrylic_blocks_logo05_7fb29977-4523-43da-8477-81d190cb3b5b_550x.png?v=1775854142"
  },
  {
    imgUrl: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_acrylic_blocks_logo02_550x.png?v=1775854160",
    name: "PIXEL CECILIA Acrylic Stand",
    price: 12,
    isSold: false,
    hover: "https://www.omocat-shop.com/cdn/shop/files/holojustice_shop_photos_acrylic_blocks_logo01_550x.png?v=1775854160"
  }
]
let container = document.getElementById("products-container");

let generator = new ProductGenerator();
generator.generate(products, container);
