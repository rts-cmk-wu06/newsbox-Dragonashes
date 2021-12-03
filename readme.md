# Newsbox-Dragonashes

## beskrivelse

- Fetch fra New York Times API
  - fetch filter
- swipe-to-delete (kun "world" kategori)
- Dark Mode
- gulp
  - minify
  - merge files

## todo


brug home api i stedet for top stories
  muligvis placer categories i array
  brug muligvis while loop
  https://api.nytimes.com/svc/topstories/v2/home.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG
  skal bruge samme ID system som jeg bruger til archive.html
  jeg har ændret "deleteitem" tror jeg det var, jeg har kun IDs til første category fetch.
  archive mangler categories
    lav først når home api bruges.
      filter skal virke med archive categories
        dette er ikke nødvendigt, men er godt som eksempel
category check sættes ikke ordenligt
  Element.hasAttribute() ???

## dev setup

install node.js
npm init
npm i gulp gulp-sass sass --save-dev
npm i gulp-purgecss --save
npm i gulp-concat gulp-minify --save-dev

## links

https://github.com/rts-cmk-wu06/newsbox-Dragonashes
https://developer.nytimes.com/apis
  https://developer.nytimes.com/docs/top-stories-product/1/overview
https://github.com/yggdr4s1l/Swipetodelete

## NYT TOP STORIES TOKEN

app id
c54e6b46-8d71-4bb6-bf1d-3c9d0d7cda78
key
55NwTRr1fPA9ZChVHPonPlef6sRlaWGG
secret
AaWWvU7Ly59MSjn0