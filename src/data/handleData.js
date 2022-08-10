export default function handleData(){
    const path = window.location.pathname


    // ================================================== [ Data ] ==================================================
    const bottle = [
      {
        id: "pp-01",
        title: "Wave Antarctica - Blue",
        artist: "Thomas Buisson",
        desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Antarctica_450ml_Close_04765724-94f5-4762-a1b8-c1bf6098454c_1100x.jpg?v=1638455109",
        backThumbnail:
          "https://cdn.shopify.com/s/files/1/0689/1443/products/antartida-02_square_1a8289fd-3ff2-4290-9771-13af3da6cbdb_1100x.jpg?v=1638455109",
        maskThumbnail:
          "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/01.jpg",
        price: 10,
      },
      {
        id: "pp-02",
        title: "Wave Antarctica - Red",
        artist: "Ahmed Amr",
        desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Arizona_450ml_Close_4a2823ce-ec02-4b6f-b5b8-4d0b542dd950_1100x.jpg?v=1638455109",
        backThumbnail:
          "https://cdn.shopify.com/s/files/1/0689/1443/products/wave_arizona_03_800x800_5738d980-7672-4791-a8bf-6888c52c7a21_1100x.jpg?v=1638455109",
        maskThumbnail:
          "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/02.jpg",
        price: 20,
      },
      {
        id: "pp-03",
        title: "Wave Arizona - Green",
        artist: "Dominik Kandravý",
        desc: "Folder concept prototype by Dominik Kandravý.",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Amazonia_450ml_Close_b215804b-865d-48be-b342-dd7dad7b1604_1100x.jpg?v=1638455109",
        backThumbnail:
          "https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaWaveAmazonia_mochila_1100x.jpg?v=1638455109",
        maskThumbnail:
          "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/03.jpg",
        price: 30,
      },
      {
        id: "pp-04",
        title: "Wave Arizona - Darkblue",
        artist: "Tony Kim",
        desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_ABYSS_450ml_Close_1100x.jpg?v=1638455109",
        backThumbnail:
          "https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaWaveAbyss_loop_8_860x.jpg?v=1638455109",
        maskThumbnail:
          "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/04.jpg",
        price: 40,
      },
      {
        id: "pp-05",
        title: "Wave Arizona - Lightpurple",
        artist: "Tony Kim",
        desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Himalaya_450ml_close_b5b06d8b-34bb-43b0-bbbf-4198b804196b_1100x.jpg?v=1638455109",
        backThumbnail:
          "https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaHelmetLoopHimalaya_wave_8_1100x.jpg?v=1638455109",
        maskThumbnail:
          "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/05.jpg",
        price: 50,
      },
      {
        id: "pp-06",
        title: "Black Savana",
        artist: "Richard Oldfield",
        desc: `Made exclusively for Protopie Playoff 2021
                Shout up if you get stuck!
                For the full experience. View in the Protopie App.
                #PieDay #PlayOff #ProtoPie`,
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0689/1443/products/BLACK_SUN_CLOSED_REDDOT_1100x.jpg?v=1635316925",
        backThumbnail:
          "https://cdn.shopify.com/s/files/1/0689/1443/products/01_Blacksavanna2ok_1100x.jpg?v=1635174448",
        maskThumbnail:
          "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/06.jpg",
        price: 60,
      },
    ]

    const helmet = [
        {
            id: "pp-01",
            title: "Loop Aurora - Green",
            artist: "Thomas Buisson",
            desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
            thumbnail:
              "https://cdn.shopify.com/s/files/1/0689/1443/products/Helmet-Loop-AMAZONIA-perfil_1100x.jpg?v=1638447819",
            backThumbnail:
              "https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaLoopAmazonia_bici_1100x.jpg?v=1638447819",
            maskThumbnail:
              "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/01.jpg",
            price: 10,
          },
          {
            id: "pp-02",
            title: "Loop Aurora - Blue",
            artist: "Ahmed Amr",
            desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
            thumbnail:
              "https://cdn.shopify.com/s/files/1/0689/1443/products/Helmet-Loop-ABYSS-perfil_1100x.jpg?v=1638449493",
            backThumbnail:
              "https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaLoopAbyss_wave_1100x.jpg?v=1638449493",
            maskThumbnail:
              "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/02.jpg",
            price: 20,
          },
          {
            id: "pp-03",
            title: "Loop Aurora - Lightpurple",
            artist: "Dominik Kandravý",
            desc: "Folder concept prototype by Dominik Kandravý.",
            thumbnail:
              "https://cdn.shopify.com/s/files/1/0689/1443/products/Helmet-Loop-HIMALAYA-perfil_1100x.jpg?v=1638447676",
            backThumbnail:
              "https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaLoopHimalaya_lado_1100x.jpg?v=1638447819",
            maskThumbnail:
              "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/03.jpg",
            price: 30,
          },
          {
            id: "pp-04",
            title: "Loop Aurora - Beige",
            artist: "Tony Kim",
            desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
            thumbnail:
              "https://cdn.shopify.com/s/files/1/0689/1443/products/Helmet-Loop-SAHARA-perfil_1100x.jpg?v=1638447819",
            backThumbnail:
              "https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaLoopSahara_12_1100x.jpg?v=1638447819",
            maskThumbnail:
              "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/04.jpg",
            price: 40,
          },
          {
            id: "pp-05",
            title: "Helmet Visor - Relf",
            artist: "Tony Kim",
            desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
            thumbnail:
              "https://cdn.shopify.com/s/files/1/0689/1443/products/Reflective_1_1000x1000_c82587ed-5f75-48e0-a51b-9282d24555a1_1100x.jpg?v=1635421573",
            backThumbnail:
              "https://cdn.shopify.com/s/files/1/0689/1443/products/Reflective_3_1100x.png?v=1629286520",
            maskThumbnail:
              "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/05.jpg",
            price: 50,
          },
          {
            id: "pp-06",
            title: "Helmet Visor - kale",
            artist: "Richard Oldfield",
            desc: `Made exclusively for Protopie Playoff 2021
                    Shout up if you get stuck!
                    For the full experience. View in the Protopie App.
                    #PieDay #PlayOff #ProtoPie`,
            thumbnail:
              "https://cdn.shopify.com/s/files/1/0689/1443/products/Kale_1_700x_b3fe2cb7-b413-466a-b104-3267a5a6fd32_1100x.jpg?v=1635421573",
            backThumbnail:
              "https://cdn.shopify.com/s/files/1/0689/1443/products/kale_3_1100x.png?v=1629286459",
            maskThumbnail:
              "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/06.jpg",
            price: 60,
          },
    ]
    
    
    
    
    
    
    // ================================================== [ 조건문 ] ==================================================
    if(path === "/bottle"){
      const product = bottle
      return product
    } else if(path === "/helmet"){
        const product = helmet
        return product
    }
  }