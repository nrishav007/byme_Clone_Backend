# byme_Clone_Backend
It is the repo of the backend of byme clone website. We use this repo to make the API's of the wesite. Here is the repo link of frontend part 
https://github.com/nrishav007/longing-carpenter-4207
# Endpoints
# Home
display all data =>/api/home
display particular object =>/api/home/:objectname
# USER
user registration => /signup
user login =>/login
user read (for admin)=> /user
user create (for admin)=> /user/create
user update (for admin)=> /user/update/:id
user delete (for admin)=> /user/delete/:id
# PRODUCT
product read => /product
product read particular data type(men/women)=>/product/:type
product read particular data type(men/women) and category=>/product/:type?category=:categoryname&limit=:limit
product create (for admin)=> /product/create
product update (for admin)=> /product/update/:id
product delete (for admin)=> /product/delete/:id
# CART
cart read => /cart
cart create (for admin)=> /cart/create
cart delete (for admin)=> /cart/delete/:id
# WISH
wish read => /cart
wish create (for admin)=> /wish/create
wish delete (for admin)=> /wish/delete/:id