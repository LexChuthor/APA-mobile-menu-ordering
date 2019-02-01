# APA Online Ordering

A full-stack MERN application designed to be used as a self-serve ordering interface in restaurants.  Users are able to order items off the menu and orders then show up in the designated kitchen page.

## Starting

* Clone the repository and install dependencies by running `yarn install` at the project root.

* Ensure that your local mongo database is running.

* Start the app by running `yarn start` from the project root.

* Once the app starts open your browser to [localhost:3000](http://localhost:3000).


### Part 1

* Navigate to the "signup" page and create a login, then sign-in.

* Once you are on the "kitchen" page, enter in menu items via the "add new item" form.

* url is meant to be a link to an image, categories will add a new category if it is a new category, otherwise categories must match existing categories exactly.

### Part 2

* To begin ordering, navigate to the root directory/menu/:orderaname (localhost:xxxx/menu/exampleOrderName)

* Click on whatever items you would like to order and then hit "Submit Order"

* Paypal integration is currently hard-coded, to enable, change the paypal details and pass in the transaction total.


