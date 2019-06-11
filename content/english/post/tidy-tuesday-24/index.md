---
authors:
- admin
categories: [R,Tidytuesday]
date: "2019-06-11"
draft: false
featured: true
image:
  caption: ""
  focal_point: ""
projects: []
subtitle: 
summary: Make cool graphs with R
tags: [R, ggplot2, tidytuesday]
title: "Tidytuesday #2"
---
## Tidytuesday #2

I'm always happy to participate to the #tidytuesday event held by the R for Data science community (R4DS). This week the data on which we work on is about Meteorites ! 


```R
meteorites <- readr::read_csv("https://raw.githubusercontent.com/rfordatascience/tidytuesday/master/data/2019/2019-06-11/meteorites.csv")
```

    Parsed with column specification:
    cols(
      name = col_character(),
      id = col_double(),
      name_type = col_character(),
      class = col_character(),
      mass = col_double(),
      fall = col_character(),
      year = col_double(),
      lat = col_double(),
      long = col_double(),
      geolocation = col_character()
    )
    


```R
options(warn = -1)
suppressPackageStartupMessages(library(dplyr))
suppressPackageStartupMessages(library(tidyr))
suppressPackageStartupMessages(library(ggrepel))
```

## Check & understand the data


```R
glimpse(meteorites)
```

    Observations: 45,716
    Variables: 10
    $ name        <chr> "Aachen", "Aarhus", "Abee", "Acapulco", "Achiras", "Adh...
    $ id          <dbl> 1, 2, 6, 10, 370, 379, 390, 392, 398, 417, 423, 424, 42...
    $ name_type   <chr> "Valid", "Valid", "Valid", "Valid", "Valid", "Valid", "...
    $ class       <chr> "L5", "H6", "EH4", "Acapulcoite", "L6", "EH4", "LL3-6",...
    $ mass        <dbl> 21, 720, 107000, 1914, 780, 4239, 910, 30000, 1620, 144...
    $ fall        <chr> "Fell", "Fell", "Fell", "Fell", "Fell", "Fell", "Fell",...
    $ year        <dbl> 1880, 1951, 1952, 1976, 1902, 1919, 1949, 1814, 1930, 1...
    $ lat         <dbl> 50.77500, 56.18333, 54.21667, 16.88333, -33.16667, 32.1...
    $ long        <dbl> 6.08333, 10.23333, -113.00000, -99.90000, -64.95000, 71...
    $ geolocation <chr> "(50.775, 6.08333)", "(56.18333, 10.23333)", "(54.21667...
    

It's quite a huge dataset. We have lots of observations.  
Let's check unique values within each column


```R
purrr::map_int(meteorites, function(x) length(unique(x)))
```


<dl class=dl-horizontal>
	<dt>name</dt>
		<dd>45716</dd>
	<dt>id</dt>
		<dd>45716</dd>
	<dt>name_type</dt>
		<dd>2</dd>
	<dt>class</dt>
		<dd>455</dd>
	<dt>mass</dt>
		<dd>12577</dd>
	<dt>fall</dt>
		<dd>2</dd>
	<dt>year</dt>
		<dd>266</dd>
	<dt>lat</dt>
		<dd>12739</dd>
	<dt>long</dt>
		<dd>14641</dd>
	<dt>geolocation</dt>
		<dd>17101</dd>
</dl>



As we see above, all the meteorites present in the dataset are unique (the name & id match the number of observations).  
On the Github repository where we find the link to the dataset, we find the following information on the columns.  
  
**variable	class	description**  
> **name**	character	Meteorite name  
**id**	double	Meteorite numerical ID  
**name_type**	character	Name type either valid or relict, where relict = a meteorite that cannot be assigned easily to a class  
**class**	character	Class of the meteorite, please see Wikipedia for full context  
**mass**	double	Mass in grams  
**fall**	character	Fell or Found meteorite  
**year**	integer	Year found  
**lat**	double	Latitude  
**long**	double	Longitude  
**geolocation**	character	Geolocation  

## Goal of this post
The main goal of this post is to create a world map with all the meteorites zones. I'll be using {ggplot2}

First, let's plot all the longitude and latitude coordinates to have an idea of where the meteorites fell or where found.


```R
options(repr.plot.res = 300, repr.plot.height = 4)
meteorites %>%
ggplot(aes(x = long, y = lat, color = fall)) +
geom_point(alpha = 1/5) + theme_void()
```


![png](output_11_0.png)


There seem to be an outlier in the dataset. There is a point really far from the other on the x axis.


```R
meteorites %>%
filter(long >300)
```


<table>
<thead><tr><th scope=col>name</th><th scope=col>id</th><th scope=col>name_type</th><th scope=col>class</th><th scope=col>mass</th><th scope=col>fall</th><th scope=col>year</th><th scope=col>lat</th><th scope=col>long</th><th scope=col>geolocation</th></tr></thead>
<tbody>
	<tr><td>Meridiani Planum     </td><td>32789                </td><td>Valid                </td><td>Iron, IAB complex    </td><td>NA                   </td><td>Found                </td><td>2005                 </td><td>-1.94617             </td><td>354.4733             </td><td>(-1.94617, 354.47333)</td></tr>
</tbody>
</table>



After some research I found this about Medirani Plannum:  
Basketball-sized iron meteorite, found by the Mars rover Opportunity in January 2005. This was the first meteorite found on another planet and the third found on another Solar System body — two others, Bench Crater and Hadley Rille, were found on the Moon.


```R
# Let's remove that point
cleaned_data <- meteorites %>% filter(long < 300)
```


```R
# Let's create a world map with ggplot2
world_map <- ggplot2::borders("world")
```

It was as simple as `Bonjour` !


```R
# Now let's plot it
options(repr.plot.height = 5.6, repr.plot.res = 450, repr.plot.width = 8)
cleaned_data %>%
ggplot(aes(x = long, y = lat, col = fall)) +
geom_point(size = 0.8, alpha = 1/5) + theme_void() +
geom_label_repel(aes(label=ifelse(mass>2e07, name,''), 
                     fill = fall, size = mass), col = "black") + 
world_map +
labs(title = "World Map of Meteorites \n", subtitle = "The impact zones show where scientists have found meteorites, or the impact craters of meteorites, \n
some dating back as far as the year 2,300BC", caption = " Data source : Meteocritical Society") + 
guides(size = FALSE) +
theme(plot.background=element_rect(fill="#f4f8ff"),
      plot.subtitle = element_text(size = 8),
     plot.caption = element_text(size = 6))
```


![png](output_18_0.png)


Voilà !  
I uploaded this on Twitter ! So in case you want to retweet it  

{{<tweet 1138407944612175872>}}


```R

```
