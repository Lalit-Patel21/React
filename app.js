import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("rest data", resData);
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    avgRatingString,
    locality,
    areaName,
  } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} starts</h4>
      <h4>{costForTwo}</h4>
      <h4>{locality}</h4>
      <h4>{areaName} </h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "65267",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/955acd82-d556-4a90-a2a9-c5896fc896f8_65267.JPG",
      locality: "South Tukoganj",
      areaName: "South Tukoganj",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-07 23:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹70",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "7.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/mcdonalds-south-tukoganj-rest65267",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "65543",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/eaec8fcf-dc2c-4a19-97fd-99115e0608f1_65543.JPG",
      locality: "Saket Square",
      areaName: "Old Palasia",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-08 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/pizza-hut-saket-square-old-palasia-rest65543",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "625686",
      name: "Wow! Momo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/3e7561a6-46f7-43fb-8109-f7e5af5c1556_625686.jpg",
      locality: "MG Road",
      areaName: "South Tukoganj",
      costForTwo: "₹300 for two",
      cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
      avgRating: 4.3,
      parentId: "1776",
      avgRatingString: "4.3",
      totalRatingsString: "525",
      sla: {
        deliveryTime: 54,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-08 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "182",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/wow-momo-mg-road-south-tukoganj-rest625686",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "728301",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/d6c7b865-ccb8-44e7-8117-0676d6f7656b_728301.jpg",
      locality: "New Palasia",
      areaName: "Indore",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "8.2K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-08 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹139",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/burger-king-new-palasia-indore-rest728301",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "198432",
      name: "The Biryani Life",
      cloudinaryImageId: "mclqhksycwrqrvlxyt4v",
      locality: "NR MAHI SALON",
      areaName: "SAKET SQUARE",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "8496",
      avgRatingString: "4.3",
      totalRatingsString: "882",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-07 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/the-biryani-life-nr-mahi-salon-saket-square-rest198432",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "86719",
      name: "Cafe Coffee Day",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/19/7db81317-eada-4494-be72-3a9a3e07a565_86719.JPG",
      locality: "TREASURE ISLAND 2 MALL INDORE MP",
      areaName: "South Tukoganj",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food",
      ],
      avgRating: 4.4,
      parentId: "1",
      avgRatingString: "4.4",
      totalRatingsString: "442",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-07 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/cafe-coffee-day-treasure-island-2-mall-mp-south-tukoganj-rest86719",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "778987",
      name: "Wendy's Burgers",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/088f9051-d015-4a45-8991-070d40ffb487_778987.JPG",
      locality: "Behind Malhar Megamall",
      areaName: "Vijay Nagar Indore",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
      avgRating: 4.2,
      parentId: "972",
      avgRatingString: "4.2",
      totalRatingsString: "956",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-07 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/wendys-burgers-behind-malhar-megamall-vijay-nagar-indore-rest778987",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "65133",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/c89faf0a-3d78-41a5-8b4c-67aee44a5f72_65133.jpg",
      locality: "NR MAHI SALON",
      areaName: "SAKET SQUARE",
      costForTwo: "₹200 for two",
      cuisines: ["Thalis", "North Indian", "Biryani"],
      avgRating: 4.3,
      parentId: "4925",
      avgRatingString: "4.3",
      totalRatingsString: "3.9K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-07 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/lunchbox-meals-and-thalis-nr-mahi-salon-saket-square-rest65133",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "64708",
      name: "Jain Mithai Bhandar (JMB)",
      cloudinaryImageId: "h4khlm6nndlaylfi4meb",
      locality: "Khajrana",
      areaName: "Old Palasia",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Fast Food", "South Indian", "Beverages"],
      avgRating: 4.5,
      parentId: "108938",
      avgRatingString: "4.5",
      totalRatingsString: "27K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-07 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Mithai.png",
            description: "Delivery!",
          },
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mithai.png",
                },
              },
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹19",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "608",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/jain-mithai-bhandar-jmb-khajrana-old-palasia-rest64708",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "84070",
      name: "Gurukripa Restaurant - Sarwate",
      cloudinaryImageId: "g5txnz35wlrgbskk3r8y",
      locality: "Sarwate",
      areaName: "South Tukoganj",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "Thalis",
        "Indian",
        "Fast Food",
        "Chinese",
        "Beverages",
        "Desserts",
        "Jain",
        "Punjabi",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "92204",
      avgRatingString: "4.4",
      totalRatingsString: "126K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-07 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-North%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/gurukripa-restaurant-sarwate-sarwate-south-tukoganj-rest84070",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "420556",
      name: "McDonald's Gourmet Burger Collection",
      cloudinaryImageId: "uqjhcsgstxwwzsvrqojp",
      locality: "M G Road",
      areaName: "Tukoganj",
      costForTwo: "₹500 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.2,
      parentId: "10761",
      avgRatingString: "4.2",
      totalRatingsString: "110",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-07 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/mcdonalds-gourmet-burger-collection-m-g-road-tukoganj-rest420556",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "73369",
      name: "Maa Ki Rasoi",
      cloudinaryImageId: "b1h0agx8ysx7w6ybrygc",
      locality: "Sudama Nagar",
      areaName: "Sudama Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Thalis", "South Indian", "Chinese"],
      avgRating: 4.4,
      parentId: "4107",
      avgRatingString: "4.4",
      totalRatingsString: "95K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-07 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Thali.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Thali.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹450",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "2.6K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/maa-ki-rasoi-sudama-nagar-rest73369",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "628657",
      name: "Go Zero Ice Creams & Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/19/21d0ee4f-4837-4018-b4f5-0361900752de_628657.JPG",
      locality: "A B Road",
      areaName: "Vijay Nagar",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts", "Healthy Food"],
      avgRating: 4.5,
      veg: true,
      parentId: "343689",
      avgRatingString: "4.5",
      totalRatingsString: "332",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-07 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/go-zero-ice-creams-and-desserts-a-b-road-vijay-nagar-rest628657",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "67970",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/ee031666-e182-44aa-a55d-07c18dd502a4_67970.JPG",
      locality: "Snehnagar",
      areaName: "Sapna Sangeeta mall",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "6.1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-08 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/subway-snehnagar-sapna-sangeeta-mall-rest67970",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "73884",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/9563df68-5d0f-49cf-85e6-1c4e43ae4deb_73884.JPG",
      locality: "Malhar Mega Mall",
      areaName: "Vijay Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.1,
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "8.3K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-08 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/kfc-malhar-mega-mall-vijay-nagar-rest73884",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "263721",
      name: "Veg Meals by Lunchbox",
      cloudinaryImageId: "subbwrwmb4o2myjbeiet",
      locality: "NR MAHI SALON",
      areaName: "SAKET SQUARE",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "21938",
      avgRatingString: "4.6",
      totalRatingsString: "123",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-07 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/veg-meals-by-lunchbox-nr-mahi-salon-saket-square-rest263721",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "882432",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/ed7d2ac3-3660-48e4-b7d4-b8a4a0f5909a_882432.jpg",
      locality: "Near Janjeerwala Square",
      areaName: "Darshan Mall, Race Course Rd",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Desserts", "Beverages"],
      avgRating: 4.5,
      parentId: "1040",
      avgRatingString: "4.5",
      totalRatingsString: "909",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-08 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹1099",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/theobroma-near-janjeerwala-square-darshan-mall-race-course-rd-rest882432",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "403809",
      name: "Starbucks Coffee",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/17/28b0347e-ee87-4d30-bb35-6a4551b61e2c_403809.JPG",
      locality: "Race Course Road",
      areaName: "New Palasia",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.4,
      parentId: "195515",
      avgRatingString: "4.4",
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-07 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/starbucks-coffee-race-course-road-new-palasia-rest403809",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "861454",
      name: "Pastas By Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fed5b915-225a-4e35-a318-0c602fe2d137_861454.jpg",
      locality: "Saket Square",
      areaName: "Old Palasia",
      costForTwo: "₹400 for two",
      cuisines: ["Pastas"],
      avgRating: 3.6,
      parentId: "306806",
      avgRatingString: "3.6",
      totalRatingsString: "31",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-08 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/pastas-by-pizza-hut-saket-square-old-palasia-rest861454",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "669093",
      name: "IBACO",
      cloudinaryImageId: "a75b9873d2809fc9c3df51c5c24b11f2",
      locality: "Ranjit Hanuman Road",
      areaName: "Sudama Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "3481",
      avgRatingString: "4.6",
      totalRatingsString: "89",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-08 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21e6478f-0514-4f70-bae2-3125bdcc04b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/indore/ibaco-ranjit-hanuman-road-sudama-nagar-rest669093",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
