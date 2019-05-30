---
authors:
- admin
categories: [R, data analysis]
date: "2019-05-22"
draft: false
featured: false
image:
  caption: ""
  focal_point: ""
projects: []
subtitle: 
summary: How much do football clubs invest in their players ?
tags: [R, clustering]
title: Football clubs spendings
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
theme_set(theme_economist())
map_dbl(fifa, function(x) sum(is.na(x))/length(x)*100) %>%
  stack() %>%
  ggplot(aes(x = reorder(ind,values), y = values)) + 
  geom_bar(stat = 'identity') + coord_flip() +
  labs(y = "% of missing values", x = "Columns", title = "Missing values")
```

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-3-1.png" width="768" />

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
  labs(title = "Value distribution of players < million ", x = "Value in K €")
```

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-13-1.png" width="672" />

```r
fifa %>% filter(value_k > 1000) %>%
  ggplot(aes(x = value_k)) + geom_histogram(size = 1.2, fill = "lightblue", color = 'black') +
  labs(title = "Value distribution of players >  1 million", x = "Value in €")
```

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-14-1.png" width="672" />

## Distribution of wage

```r
fifa %>% filter(Wage < 100) %>%
  ggplot(aes(x = Wage)) + geom_histogram(size = 1.2, fill = "lightblue", color = 'black') + labs(title = "Distribution of wage < 100k €")
```

```
## `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.
```

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-15-1.png" width="672" />


```r
fifa %>% filter(Wage > 100) %>%
  ggplot(aes(x = Wage)) + geom_histogram(size = 1.2, fill = "lightblue", color = 'black') + labs(title = "Distribution of wage > 100k €")
```

```
## `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.
```

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-16-1.png" width="672" />
### Correlation between wage and value


```r
fifa %>%
  ggplot(aes(x = value_k, y = Wage)) +
  geom_point(alpha = 1/3) + labs(title = "Correlation between value and wage", x = "Value (in thousands €)")
```

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-17-1.png" width="672" />

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

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-19-1.png" width="672" />

There is not obvious relationship between time spent in a club and the wage. 

## What are the top nationality of the players


```r
fifa %>% group_by(Nationality) %>%
  summarize(count = n()) %>%
  treemap(index = "Nationality", vSize = "count", title = "Nationality of players")
```

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-20-1.png" width="672" />

This quite interesting. Out of the Fist five nationalities, 4 are European countries. Football is really popular in Europe in Europe.

## Which clubs have the highest spendings for their players


```r
fifa %>%
  group_by(Club) %>% summarize(spending = sum(Wage)) %>% top_n(35) %>%
  ggplot(aes(y = spending, x = reorder(Club, spending))) + 
           geom_bar(stat = "identity") + coord_flip() + 
  labs(y = "Total wages (in thousands €)", x = "Clubs", title = "Clubs spendings in wages")
```

```
## Selecting by spending
```

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-21-1.png" width="672" />

# Cluster Analysis

In this section we want to study how can we gather the players based on their characteristics. We will use all the technical columns.


```r
library(FactoMineR)
library(factoextra)
```

Since I am not a football professional I'm going to use the columns that mean something in this cluster analysis.
Let's select the columns


```r
head(fifa)
```

```
## # A tibble: 6 x 92
##      X1     ID Name    Age Photo Nationality Flag  Overall Potential Club 
##   <dbl>  <dbl> <chr> <dbl> <chr> <chr>       <chr>   <dbl>     <dbl> <chr>
## 1     0 158023 L. M~    31 http~ Argentina   http~      94        94 FC B~
## 2     1  20801 Cris~    33 http~ Portugal    http~      94        94 Juve~
## 3     2 190871 Neym~    26 http~ Brazil      http~      92        93 Pari~
## 4     3 193080 De G~    27 http~ Spain       http~      91        93 Manc~
## 5     4 192985 K. D~    27 http~ Belgium     http~      91        92 Manc~
## 6     5 183277 E. H~    27 http~ Belgium     http~      91        91 Chel~
## # ... with 82 more variables: `Club Logo` <chr>, raw_value <chr>,
## #   unit_value <chr>, Wage <dbl>, Special <dbl>, `Preferred Foot` <chr>,
## #   `International Reputation` <dbl>, `Weak Foot` <dbl>, `Skill
## #   Moves` <dbl>, `Work Rate` <chr>, `Body Type` <chr>, `Real Face` <chr>,
## #   Position <chr>, `Jersey Number` <dbl>, Joined <date>, `Loaned
## #   From` <chr>, Contract_Validity <date>, Height <chr>, Weight <chr>,
## #   LS <chr>, ST <chr>, RS <chr>, LW <chr>, LF <chr>, CF <chr>, RF <chr>,
## #   RW <chr>, LAM <chr>, CAM <chr>, RAM <chr>, LM <chr>, LCM <chr>,
## #   CM <chr>, RCM <chr>, RM <chr>, LWB <chr>, LDM <chr>, CDM <chr>,
## #   RDM <chr>, RWB <chr>, LB <chr>, LCB <chr>, CB <chr>, RCB <chr>,
## #   RB <chr>, Crossing <dbl>, Finishing <dbl>, HeadingAccuracy <dbl>,
## #   ShortPassing <dbl>, Volleys <dbl>, Dribbling <dbl>, Curve <dbl>,
## #   FKAccuracy <dbl>, LongPassing <dbl>, BallControl <dbl>,
## #   Acceleration <dbl>, SprintSpeed <dbl>, Agility <dbl>, Reactions <dbl>,
## #   Balance <dbl>, ShotPower <dbl>, Jumping <dbl>, Stamina <dbl>,
## #   Strength <dbl>, LongShots <dbl>, Aggression <dbl>,
## #   Interceptions <dbl>, Positioning <dbl>, Vision <dbl>, Penalties <dbl>,
## #   Composure <dbl>, Marking <dbl>, StandingTackle <dbl>,
## #   SlidingTackle <dbl>, GKDiving <dbl>, GKHandling <dbl>,
## #   GKKicking <dbl>, GKPositioning <dbl>, GKReflexes <dbl>, `Release
## #   Clause` <chr>, value_k <dbl>, months_in_current_club <dbl>
```

```r
pca_data <- fifa[c(3:4,56:89)]
```

```r
# Remove duplicate players
pca_data <- pca_data %>% filter(!duplicated(Name))
```

Clean the missing values


```r
pca_data <- na.omit(pca_data)
pca_data <- data.frame(pca_data, row.names = 1)
```


```r
head(pca_data)
```

```
##                   Age Crossing Finishing HeadingAccuracy ShortPassing
## L. Messi           31       84        95              70           90
## Cristiano Ronaldo  33       84        94              89           81
## Neymar Jr          26       79        87              62           84
## De Gea             27       17        13              21           50
## K. De Bruyne       27       93        82              55           92
## E. Hazard          27       81        84              61           89
##                   Volleys Dribbling Curve FKAccuracy LongPassing
## L. Messi               86        97    93         94          87
## Cristiano Ronaldo      87        88    81         76          77
## Neymar Jr              84        96    88         87          78
## De Gea                 13        18    21         19          51
## K. De Bruyne           82        86    85         83          91
## E. Hazard              80        95    83         79          83
##                   BallControl Acceleration SprintSpeed Agility Reactions
## L. Messi                   96           91          86      91        95
## Cristiano Ronaldo          94           89          91      87        96
## Neymar Jr                  95           94          90      96        94
## De Gea                     42           57          58      60        90
## K. De Bruyne               91           78          76      79        91
## E. Hazard                  94           94          88      95        90
##                   Balance ShotPower Jumping Stamina Strength LongShots
## L. Messi               95        85      68      72       59        94
## Cristiano Ronaldo      70        95      95      88       79        93
## Neymar Jr              84        80      61      81       49        82
## De Gea                 43        31      67      43       64        12
## K. De Bruyne           77        91      63      90       75        91
## E. Hazard              94        82      56      83       66        80
##                   Aggression Interceptions Positioning Vision Penalties
## L. Messi                  48            22          94     94        75
## Cristiano Ronaldo         63            29          95     82        85
## Neymar Jr                 56            36          89     87        81
## De Gea                    38            30          12     68        40
## K. De Bruyne              76            61          87     94        79
## E. Hazard                 54            41          87     89        86
##                   Composure Marking StandingTackle SlidingTackle GKDiving
## L. Messi                 96      33             28            26        6
## Cristiano Ronaldo        95      28             31            23        7
## Neymar Jr                94      27             24            33        9
## De Gea                   68      15             21            13       90
## K. De Bruyne             88      68             58            51       15
## E. Hazard                91      34             27            22       11
##                   GKHandling GKKicking GKPositioning GKReflexes
## L. Messi                  11        15            14          8
## Cristiano Ronaldo         11        15            14         11
## Neymar Jr                  9        15            15         11
## De Gea                    85        87            88         94
## K. De Bruyne              13         5            10         13
## E. Hazard                 12         6             8          8
```



```r
pca <- PCA(pca_data, quanti.sup = 1)
```

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-28-1.png" width="672" /><img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-28-2.png" width="672" />

Let's now try to see how correlated are the variables and discover how they separate the players.


```r
fviz_pca_var(pca, repel = T) + theme_economist()
```

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-29-1.png" width="768" />

```r
dimdesc(pca)
```

```
## $Dim.1
## $Dim.1$quanti
##                 correlation       p.value
## BallControl       0.9575674  0.000000e+00
## Dribbling         0.9292212  0.000000e+00
## ShortPassing      0.9163976  0.000000e+00
## Positioning       0.8718798  0.000000e+00
## Crossing          0.8705012  0.000000e+00
## ShotPower         0.8563707  0.000000e+00
## Curve             0.8522071  0.000000e+00
## LongShots         0.8517836  0.000000e+00
## LongPassing       0.8126963  0.000000e+00
## Stamina           0.8073784  0.000000e+00
## Volleys           0.8056571  0.000000e+00
## FKAccuracy        0.7951769  0.000000e+00
## Penalties         0.7871776  0.000000e+00
## Finishing         0.7807105  0.000000e+00
## Agility           0.7243417  0.000000e+00
## HeadingAccuracy   0.7159097  0.000000e+00
## Acceleration      0.7123085  0.000000e+00
## SprintSpeed       0.7041238  0.000000e+00
## Vision            0.7039064  0.000000e+00
## Composure         0.6750123  0.000000e+00
## Aggression        0.6369436  0.000000e+00
## Balance           0.6350150  0.000000e+00
## Marking           0.5407773  0.000000e+00
## StandingTackle    0.5111614  0.000000e+00
## Interceptions     0.5095279  0.000000e+00
## SlidingTackle     0.4793948  0.000000e+00
## Reactions         0.4262738  0.000000e+00
## Jumping           0.2632617 8.458303e-270
## Strength          0.1226311  1.883645e-58
## Age               0.1027927  1.652906e-41
## GKKicking        -0.8483274  0.000000e+00
## GKPositioning    -0.8484342  0.000000e+00
## GKHandling       -0.8517354  0.000000e+00
## GKReflexes       -0.8525332  0.000000e+00
## GKDiving         -0.8533499  0.000000e+00
## 
## 
## $Dim.2
## $Dim.2$quanti
##                 correlation       p.value
## Finishing        0.48869080  0.000000e+00
## Volleys          0.39497273  0.000000e+00
## Agility          0.36161221  0.000000e+00
## Positioning      0.33718933  0.000000e+00
## Vision           0.33672344  0.000000e+00
## Penalties        0.32794746  0.000000e+00
## LongShots        0.32309363  0.000000e+00
## Balance          0.30934699  0.000000e+00
## Acceleration     0.28467696 4.463986e-317
## Curve            0.26913331 2.457159e-282
## SprintSpeed      0.23622994 4.019428e-216
## Dribbling        0.23147968 2.312527e-207
## FKAccuracy       0.22333367 8.455848e-193
## GKKicking        0.18696811 1.054205e-134
## ShotPower        0.18605096 2.212049e-133
## GKHandling       0.18586050 4.153619e-133
## GKDiving         0.18469723 1.919634e-131
## GKReflexes       0.18462331 2.446956e-131
## GKPositioning    0.18245441 2.894091e-128
## Crossing         0.09501422  1.090711e-35
## BallControl      0.08345967  6.815662e-28
## Composure       -0.01643873  3.134159e-02
## Reactions       -0.03010491  8.047868e-05
## ShortPassing    -0.06956196  7.525288e-20
## Age             -0.11049258  1.004341e-47
## LongPassing     -0.14743043  6.184010e-84
## Stamina         -0.22397254 6.395073e-194
## Jumping         -0.25648884 9.891799e-256
## HeadingAccuracy -0.39038523  0.000000e+00
## Strength        -0.51113647  0.000000e+00
## Aggression      -0.57430161  0.000000e+00
## Marking         -0.74305466  0.000000e+00
## Interceptions   -0.77149466  0.000000e+00
## StandingTackle  -0.79446128  0.000000e+00
## SlidingTackle   -0.80109110  0.000000e+00
## 
## 
## $Dim.3
## $Dim.3$quanti
##                correlation       p.value
## Reactions       0.73323051  0.000000e+00
## Age             0.55111367  0.000000e+00
## Composure       0.53883124  0.000000e+00
## GKPositioning   0.41000841  0.000000e+00
## GKHandling      0.40447867  0.000000e+00
## GKReflexes      0.40429174  0.000000e+00
## GKKicking       0.40274211  0.000000e+00
## GKDiving        0.40114161  0.000000e+00
## Strength        0.38320668  0.000000e+00
## Vision          0.37647732  0.000000e+00
## LongPassing     0.24431357 1.735274e-231
## FKAccuracy      0.20506235 3.258515e-162
## LongShots       0.17944771 4.544011e-124
## ShotPower       0.17399244 1.206321e-116
## Aggression      0.17287201 3.768740e-115
## Curve           0.15234669  1.456918e-89
## ShortPassing    0.14868943  2.335257e-85
## Volleys         0.14289355  6.527233e-79
## Interceptions   0.11498692  1.455053e-51
## Jumping         0.09745726  1.818163e-37
## Penalties       0.08770203  1.226461e-30
## Finishing       0.06213573  3.817631e-16
## BallControl     0.04354398  1.166468e-08
## Crossing        0.04175925  4.486744e-08
## Positioning     0.03431513  6.966596e-06
## Marking         0.02828461  2.118418e-04
## StandingTackle  0.02147269  4.922562e-03
## Stamina        -0.02418791  1.536283e-03
## Dribbling      -0.03738368  9.735851e-07
## Agility        -0.14372548  8.049441e-80
## Balance        -0.26358489 1.759919e-270
## SprintSpeed    -0.29679997  0.000000e+00
## Acceleration   -0.30572583  0.000000e+00
```


```r
fviz_pca_contrib(pca, choice = "var")
```

```
## Warning in fviz_pca_contrib(pca, choice = "var"): The function
## fviz_pca_contrib() is deprecated. Please use the function fviz_contrib()
## which can handle outputs of PCA, CA and MCA functions.
```

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-31-1.png" width="672" />


```r
fviz_pca_contrib(pca, choice = "var", axes = 2)
```

```
## Warning in fviz_pca_contrib(pca, choice = "var", axes = 2): The function
## fviz_pca_contrib() is deprecated. Please use the function fviz_contrib()
## which can handle outputs of PCA, CA and MCA functions.
```

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-32-1.png" width="672" />



```r
fviz_pca_ind(pca, geom = "point", alpha.ind = "contrib", addEllipses = T) + theme_economist()
```

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-33-1.png" width="672" />


```r
fviz_pca_ind(pca, geom = "point", 
             alpha.ind = "contrib", addEllipses = T) + theme_economist() +
  xlim(c(-6, -10))
```

```
## Warning: Removed 16778 rows containing non-finite values (stat_ellipse).
```

```
## Warning: Removed 16778 rows containing missing values (geom_point).
```

```
## Warning: Removed 1 rows containing missing values (geom_vline).
```

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-34-1.png" width="672" />

```r
fviz_pca_ind(pca, geom = "text", 
             select.ind = list(name = c("L. Messi", 
                                        "Cristiano Ronaldo", "Neymar Jr", "E. Hazard"))) + 
  theme_economist()
```

<img src="/english/post/2019-05-22-football-clubs-expenses_files/figure-html/unnamed-chunk-35-1.png" width="672" />

