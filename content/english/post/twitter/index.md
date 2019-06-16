---
authors:
- admin
categories: [Tutorial, Hugo]
date: "2019-06-16"
draft: false
featured: true
image:
  caption: ""
  focal_point: ""
projects: []
subtitle: 
summary: 2 steps to embed any Twitter feed to your Hugo website
tags: [Hugo, Twitter]
title: "Embed a Twitter feed to Hugo"
---
Hi everyone ! In this tutorial I want to guide you through the steps of adding any Twitter feed to your Hugo website.   
The Twitter feeds may be :  
- Your profile feeds  
- Selected feeds  
- Hashtag feeds  
- Any other feed you can retrieve from Twitter   

I really like how Hugo makes it easy to customise one own site and when I was editing my personal website I thought it would be a good idea to select some tweets and embed to my website to help the visitors of my website find me easily on Twitter.  

# Outlines : 
At the end of this post you'll be able to add something similar to the following on your Hugo website.  
![image.png](feed.png)  

# Steps

## 1 - Go to [Twitter Publish](https://publish.twitter.com/#)
![image.png](embed.png)  
This website will generate an HTML code to emebed in any page.
You need to provide any Twitter URL. It can be your `https://twitter.com/user_name` or any custom Moment or list you create. 
Make sure to click on the the `Embedded timeline` to see a preview of the embedding before you add it to your site. You can set customization options. 
Copy the generated code. 

## 2 - Add the desired feed to your site
Once you finished with the first step, you'll want to add to your Hugo site.  
What follows will work for any page : blog post, home page etc ...

### 2.1 - Create a new Markdown file with the `custom` widget

```
+++
# Custom widget.
# An example of using the custom widget to create your own homepage section.
# To create more sections, duplicate this file and edit the values below as desired.
widget = "custom"
active = true
date = 2019-05-22T00:00:00

# Note: a full width section format can be enabled by commenting out the `title` and `subtitle` with a `#`.
title = "Moments"
subtitle = ""

# Order that this section will appear in.
weight = 70
+++
```
### 2.2 - Paste the generated code
In this markdown file paste the generated code. 

Save the file, make sure it's a Markdown file (`file-name.md`) and save it where you want it to appear your home page or somewhere else. You can adjust the order of apearance with the `weight = XX` in the front matter. 

For demonstration purpose I'm pasting the generated code for my tweets inside this blog post.   

<a class="twitter-timeline" href="https://twitter.com/cleris_mr?ref_src=twsrc%5Etfw">Tweets by cleris_mr</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

# References :
Adding Twitter feed to Hugo page? : https://discourse.gohugo.io/t/adding-twitter-feed-to-hugo-page/15146  
Twitter Publish : https://publish.twitter.com/  