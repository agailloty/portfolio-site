---
date: "2020-07-07T00:00:00Z"
internal_link:shiny-auth
external_link: https://github.com/agailloty/shiny-snippets/tree/master/auth
image:
  caption: 
  focal_point: Smart
summary: Implement a simple authentication mechanism with R Shiny

tags: 
- R, Shiny
title: Implement a simple authentication mechanism

---
# A simple authentication mechanism

In this tutorial you'll learn how to implement a simple authentication mechanism for your Shiny App. 
The idea is simple, you have a public version of the app that everyone on the Internet can access but you also want to limit parts or all the app to a list of specified users you know beforehand. 

In this example the users are stored in an R data frame but you can apply the same principle to a database.

Here's an overview of what you'll get. 

## A log in page

![](assets/screenshot.PNG)

![](assets/log.PNG)

## A page that shows for a simple user

![](assets/page1.PNG)

## A page that shows for a the admin
![](assets/page2.PNG)

