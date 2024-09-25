import { useEffect } from "react";
import ShopifyBuy from "@shopify/buy-button-js";

export default function BuyButton() {
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '19f91b-f2.myshopify.com',
      storefrontAccessToken: 'fa9552497768727c604b1bff2c2059c7',
    });
    var ui = ShopifyBuy.UI.init(client);
      ui.createComponent('product', {
        id: '9812886749530',
        node: document.getElementById('product-component-1727271517970'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "title": {
        "font-size": "26px"
      },
      "button": {
        "font-family": "Gill Sans, sans-serif",
        ":hover": {
          "background-color": "#96099b"
        },
        "background-color": "#a70aac",
        ":focus": {
          "background-color": "#96099b"
        },
        "border-radius": "40px"
      },
      "price": {
        "font-size": "18px"
      },
      "compareAt": {
        "font-size": "15.299999999999999px"
      },
      "unitPrice": {
        "font-size": "15.299999999999999px"
      }
    },
    "buttonDestination": "checkout",
    "layout": "horizontal",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true,
      "description": true
    },
    "width": "100%",
    "text": {
      "button": "Compra ora"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Gill Sans, sans-serif",
        ":hover": {
          "background-color": "#96099b"
        },
        "background-color": "#a70aac",
        ":focus": {
          "background-color": "#96099b"
        },
        "border-radius": "40px"
      },
      "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#4c4c4c"
      },
      "price": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "18px",
        "color": "#4c4c4c"
      },
      "compareAt": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "unitPrice": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-family": "Gill Sans, sans-serif",
        ":hover": {
          "background-color": "#96099b"
        },
        "background-color": "#a70aac",
        ":focus": {
          "background-color": "#96099b"
        },
        "border-radius": "40px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Gill Sans, sans-serif",
        "background-color": "#a70aac",
        ":hover": {
          "background-color": "#96099b"
        },
        ":focus": {
          "background-color": "#96099b"
        }
      }
    }
  }
},
    });
  }

  useEffect(() => {
    ShopifyBuyInit();
  }, []);

    return (<div id='product-component-1727271517970'></div>)
}