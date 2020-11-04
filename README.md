# javascript-challenge
Javascript Homework - Javascript and DOM Manipulation
![image of HW](https://github.com/BPayne-216/javascript-challenge/blob/master/docs/static/images/nasa.jpg)
Intro to this project

This project used javascript to query a given field (table) of UFO data.  HTML, css, andbootstrap were used to create the website.

The motivation of this project is to create an interactive website that allows the visitor to the site to query the table information based on: date, city, state, country, shape.
Level I: this allows visitor to query by typing in the date and retrieving all table elements that match that date.
Level II: this is an interactive filter that allows the visitor to query the table elements based on (5) elements: date/time, city, state, country, and shape.  A button creates the query and any combination of the (5) filters may be utilized.

Build status: the initial project was given the data (array), html, starter javascript code.  The main objective was to create filters based on the data that allowed for queries based on date/time and multiple filters.

Technology/Framework (In order):  
VS Code Editor: HTML (css, bootstrap).  Javascript.

Features/Files:
mission_to_mars.ipynb is the initial python document that connects to the individual websites listed and aggregates the reviewed data (text, table, pictures) to be stored.  Lists and dictionaries were used.
scrape_mars.py this file performs the scrape based on the initial jupyter notebook format and is linked to the app.py file.
app.py this file uses Flask and pymongo to store the data and transform the /scrape function to be used in HTML format.
index.html reviewed the information scraped in HTML format.
