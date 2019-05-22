---
title: Football clubs expenses
author: Axel-Cleris Gailloty
date: '2019-05-22'
slug: football-clubs-expenses
categories:
  - R
tags:
  - R
  - visualizations
  - analysis
image:
  caption: ''
  focal_point: ''
---

```r
# Load the packages 
library(tidyverse)
library(FactoMineR)
library(factoextra)
library(highcharter)
library(ggthemes)
library(lubridate)
library(treemap)
```
This kernel is under construction :) !  

# Reading and preparing the data


```r
fifa <- read_csv("data.csv")
print(paste("The dataset contains", dim(fifa)[1], "observations and", dim(fifa)[2], "columns"))
```

```
## [1] "The dataset contains 18207 observations and 89 columns"
```

## Missing values

With this said let's check the consistency of the dataset by looking for missing values and understanding what each column stands for.


```r
theme_set(theme_solarized_2())
map_dbl(fifa, function(x) sum(is.na(x))/length(x)*100) %>%
  stack() %>%
  ggplot(aes(x = reorder(ind,values), y = values)) + 
  geom_bar(stat = 'identity') + coord_flip() +
  labs(y = "% of missing values", x = "Columns", title = "Missing values")
```

<img src="/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-3-1.png" width="768" />

The loaned from column contains lots of missing values. All the other columns have between 0 and 10% missing values. Overall the dataset contains few missing values.

## Columns content


```r
head(fifa)
```

```
## # A tibble: 6 x 89
##      X1     ID Name    Age Photo Nationality Flag  Overall Potential Club 
##   <dbl>  <dbl> <chr> <dbl> <chr> <chr>       <chr>   <dbl>     <dbl> <chr>
## 1     0 158023 L. M~    31 http~ Argentina   http~      94        94 FC B~
## 2     1  20801 Cris~    33 http~ Portugal    http~      94        94 Juve~
## 3     2 190871 Neym~    26 http~ Brazil      http~      92        93 Pari~
## 4     3 193080 De G~    27 http~ Spain       http~      91        93 Manc~
## 5     4 192985 K. D~    27 http~ Belgium     http~      91        92 Manc~
## 6     5 183277 E. H~    27 http~ Belgium     http~      91        91 Chel~
## # ... with 79 more variables: `Club Logo` <chr>, Value <chr>, Wage <chr>,
## #   Special <dbl>, `Preferred Foot` <chr>, `International
## #   Reputation` <dbl>, `Weak Foot` <dbl>, `Skill Moves` <dbl>, `Work
## #   Rate` <chr>, `Body Type` <chr>, `Real Face` <chr>, Position <chr>,
## #   `Jersey Number` <dbl>, Joined <chr>, `Loaned From` <chr>, `Contract
## #   Valid Until` <chr>, Height <chr>, Weight <chr>, LS <chr>, ST <chr>,
## #   RS <chr>, LW <chr>, LF <chr>, CF <chr>, RF <chr>, RW <chr>, LAM <chr>,
## #   CAM <chr>, RAM <chr>, LM <chr>, LCM <chr>, CM <chr>, RCM <chr>,
## #   RM <chr>, LWB <chr>, LDM <chr>, CDM <chr>, RDM <chr>, RWB <chr>,
## #   LB <chr>, LCB <chr>, CB <chr>, RCB <chr>, RB <chr>, Crossing <dbl>,
## #   Finishing <dbl>, HeadingAccuracy <dbl>, ShortPassing <dbl>,
## #   Volleys <dbl>, Dribbling <dbl>, Curve <dbl>, FKAccuracy <dbl>,
## #   LongPassing <dbl>, BallControl <dbl>, Acceleration <dbl>,
## #   SprintSpeed <dbl>, Agility <dbl>, Reactions <dbl>, Balance <dbl>,
## #   ShotPower <dbl>, Jumping <dbl>, Stamina <dbl>, Strength <dbl>,
## #   LongShots <dbl>, Aggression <dbl>, Interceptions <dbl>,
## #   Positioning <dbl>, Vision <dbl>, Penalties <dbl>, Composure <dbl>,
## #   Marking <dbl>, StandingTackle <dbl>, SlidingTackle <dbl>,
## #   GKDiving <dbl>, GKHandling <dbl>, GKKicking <dbl>,
## #   GKPositioning <dbl>, GKReflexes <dbl>, `Release Clause` <chr>
```

### Value and wage columns 


```r
glimpse(fifa[c("Value", "Wage")])
```

```
## Observations: 18,207
## Variables: 2
## $ Value <chr> "€110.5M", "€77M", "€118.5M", "€72M", "€102M", "€93M", "...
## $ Wage  <chr> "€565K", "€405K", "€290K", "€260K", "€355K", "€340K", "€...
```

Because of their formats `€-NUM-M/K`, R doesn't read them properly. We need to do some string manipulations in order to convert them into numerical columns so we can use later in the analysis.  
Let's start by removing the `€`symbols in both columns.


```r
fifa <- fifa %>% mutate(Value = str_replace(Value, "€", ""),
                Wage = str_replace(Wage, "€", ""))
```

Now since since the `Value` column is not always in million € we need to separate each element of it into two columns `raw_value` and `unit` that will hold the amount and the unit (millions (M) or thousands(K))


```r
fifa %>% separate(Value, into = c("raw_value", "unit_value"), sep = "(?=[:LETTER:])") %>%
  select(raw_value, unit_value) %>% group_by(unit_value) %>% summarize(count = n())
```

```
## Warning: Expected 2 pieces. Missing pieces filled with `NA` in 252 rows
## [453, 539, 569, 678, 865, 875, 954, 998, 1009, 1121, 1272, 1353, 1603,
## 1672, 1820, 1903, 1908, 1934, 1937, 1965, ...].
```

```
## # A tibble: 3 x 2
##   unit_value count
##   <chr>      <int>
## 1 K          11108
## 2 M           6847
## 3 <NA>         252
```

As we can see here, there a fewer players who are worth million. Let's save it and do the same for the Wage column.

```r
fifa <- fifa %>% separate(Value, into = c("raw_value", "unit_value"), sep = "(?=[:LETTER:])")
```



```r
fifa %>% separate(Wage, into = c("raw_wage", "unit_wage"), sep = "(?=[:LETTER:])") %>%
  select(raw_wage, unit_wage) %>% group_by(unit_wage) %>% summarize(count = n())
```

```
## # A tibble: 2 x 2
##   unit_wage count
##   <chr>     <int>
## 1 K         17966
## 2 <NA>        241
```

All the values of this column are expressed in thousands. So we can keep it as it is.  

Now let's convert them into numerical values. We will convert the millions that are in the `Value` column into thousands(K) so that each observation has the same unit.  


```r
# Converting into numerical columns
fifa <- fifa %>% mutate(value_k = as.numeric(raw_value)) 
# Convert it into thousands
fifa <- fifa %>% mutate(value_k = ifelse(unit_value == "M", value_k * 1000, value_k))
fifa <- fifa %>% mutate(Wage = str_replace(Wage, "K",""), Wage = as.numeric(Wage))
```

## Date columns


```r
glimpse(fifa[c("Joined", "Contract Valid Until")])
```

```
## Observations: 18,207
## Variables: 2
## $ Joined                 <chr> "Jul 1, 2004", "Jul 10, 2018", "Aug 3, ...
## $ `Contract Valid Until` <chr> "2021", "2022", "2022", "2020", "2023",...
```

```r
fifa <- fifa %>% rename(Contract_Validity = `Contract Valid Until`) %>%
  mutate(Joined = mdy(Joined), 
                Contract_Validity = ymd(Contract_Validity, truncated = 2L))
```

# Exploratory Data Analysis

## Visualizations 
### Value distribution


```r
fifa %>% filter(value_k < 1000) %>%
  ggplot(aes(x = value_k)) + geom_histogram(size = 1.2, fill = "lightblue", color = 'black') +
  labs(title = "Value distribution of players < million ", x = "Value in €")
```

<img src="/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-13-1.png" width="672" />

```r
fifa %>% filter(value_k > 1000) %>%
  ggplot(aes(x = value_k)) + geom_histogram(size = 1.2, fill = "lightblue", color = 'black') +
  labs(title = "Value distribution of players >  1 million", x = "Value in €")
```

<img src="/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-14-1.png" width="672" />

## Distribution of wage

```r
fifa %>%
  ggplot(aes(x = Wage)) + geom_histogram() + labs(title = "Distribution of wage")
```

```
## `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.
```

<img src="/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-15-1.png" width="672" />

### Correlation between wage and value


```r
fifa %>%
  ggplot(aes(x = value_k, y = Wage)) +
  geom_point(alpha = 1/3) + labs(title = "Correlation between value and wage", x = "Value (in thousands €)")
```

<img src="/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-16-1.png" width="672" />

## Time spent in current club

```r
fifa <- fifa %>% 
  mutate(months_in_current_club = interval(Joined, ymd(2019, truncated = 2L))/months(1))
```

### Link between time spent in current club and wage

```r
fifa %>%
  ggplot(aes(x = months_in_current_club, y = Wage)) +
  geom_point() + labs(x = "Number of months", y = "Wage (thousands €)")
```

<img src="/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-18-1.png" width="672" />

There is not obvious relationship between time spent in a club and the wage. 

## What are the top nationality of the players


```r
fifa %>% group_by(Nationality) %>%
  summarize(count = n()) %>%
  treemap(index = "Nationality", vSize = "count", title = "Nationality of players")
```

<img src="/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-19-1.png" width="672" />

This quite interesting. Out of the Fist five nationalities, 4 are European countries. Football is really popular in Europe in Europe.

## Which clubs have the highest spendings for their players


```r
fifa %>%
  group_by(Club) %>% summarize(spending = sum(Wage)) %>% top_n(30) %>%
  ggplot(aes(y = spending, x = reorder(Club, spending))) + 
           geom_bar(stat = "identity") + coord_flip() + 
  labs(y = "Total wages (in thousands €)", x = "Clubs", title = "Clubs spendings in wages")
```

```
## Selecting by spending
```

<img src="/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-20-1.png" width="672" />

# Cluster Analysis

In this section we want to study how can we gather the players based on their characteristics. We will use all the technical columns.


```r
library(FactoMineR)
library(factoextra)
```

Since I am not a football professional I'm going to use the columns that mean something in this cluster analysis.
