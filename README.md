# Inventory Keeper (NASA THEME)

## Description

Welcome to NASA Wholesale's inventory management application! This is a great open source application to help you manage your brand new space storefront!

Our app will use a database to create, read, update and delete items. The application is based on selling items of different categories which calculates the amount left in stock along with the current price. Since the application is deployed via Heroku, it allows users with an internet connection to use the appliciation on any web browser!

## Usage

App is open source and free to use.

## Installation

Clone the repository to your local machine. Open the console in the root folder and run `npm install`. Enter your `MySql password` into the `password property on line 4` of the `config.json`. and save the file. Run `sequelize db:create` to create a local database to use on your machine. Run `node ./server.js` and go to `localhost:8080` in your browser to run a local instance of the app. From there you can enter new categories and items to your local database from the HTML page.

## Contributors

Christopher Sipe

Ha Phan

Caleb Hay

Ayse Nur

## Built With

Microsoft Visual Studio Code
