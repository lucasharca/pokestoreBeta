## Differences

For this version I wanted to make some changes to the layout. This time the store sells only water type pokémon, so I gave it a blue color on the header and some buttons to match the theme.

The Checkout cart is also different. It's more compact showing only the amount of pokémon selected and the shipping and handling price (set R$14.99 by default ). To remove a pokemon from the cart, the user should click on the pokémon "add to cart" button again.

The Pokémon shop layout this time has no pagination. I saw that, because of the huge amount of available pokémon, the lack of pagination made the scrollbar too big on mobile devices. To solve this I limited the height of the main page on mobile, making a invisible scroll and setting the cart right below it.

---------------------------------------

## PokeStore
You can preview this app at: https://pokestore-br.herokuapp.com/
Heroku needs 10 seconds do "wake up", if the page doesn't load wait 1 minute and try reloading.

In this project I created an online store example using pokémon. This particular store only contains fire type pokémon.
The tech used is ReactJS, together with pokeAPI as a source of pokémon data.

The app is straight foward. You select the pokémon you want from a list and add it to cart, once you have everything you want you can checkout, that will clear the cart and show a modal message.

The page is 100% responsive, looking and working great on any screen size with all the functions and clean layout.

This app uses Redux for data storage
