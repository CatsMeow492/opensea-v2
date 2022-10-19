# Commands Used

`yarn create next-app -e with-tailwindcss opensea-v2`
`npm install -g @sanity/cli`  // This is the database ORM
`npm install @3rdweb/hooks`
`npm install react-hot-toast` // This is the module used to handle notifications
`npm install @3rdweb/sdk`

API Query
`
*[_type == "marketItems" && contractAddress == "0x491C45074be572E6B6ecFA49C5870Bf5530Fe591" ] {
"imageUrl": profileImage.asset->url,
"bannerImageUrl": bannerImage.asset->url,
volumeTraded, 
createdBy, 
contractAddress,
"creator": createdBy->userName,
title,
floorPrice,
"allOwners": owners[]->,
description
}
`

0x1263eD594D37C4B9cC2288B49Ee16cD994B1952e - Marketplace
0xD0Da94912ED157f905B68686d8cAdb37a23e9BCe - Collection

1:34:00