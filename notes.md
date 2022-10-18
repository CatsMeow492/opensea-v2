# Commands Used

`yarn create next-app -e with-tailwindcss opensea-v2`
`npm install -g @sanity/cli`  // This is the database ORM
`npm install @3rdweb/hooks`
`npm install react-hot-toast` // This is the module used to handle notifications

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

1:14:00