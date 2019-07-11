---
authors:
- admin
categories: [R, wrangling, Tidyvserse]
date: "2019-07-10"
draft: false
featured: true
image:
  caption: ""
  focal_point: ""
projects: []
subtitle: 
summary: Combine dplyr & tidyr to create dummy columns from your multiple levels columns
tags: [R, tidyr, dplyr, tidyverse]
title: Dummy columns with the Tidyverse
---
# Intro 

Lately I struggled with creating dummy columns for a dataset I wanted to do analysis on. Knowing that there exists several packages on CRAN that can do it I didn’t want to install another package to do it and wanted to stick with the Tidyverse.
To demonstrate how you can create dummy columns in the Tidyverse environment I’m going to work on the Women World cup dataset from the Tidytuesday event. The dataset is available on GitHub.

# Package & Data import


```R
library(dplyr)
library(tidyr)
```


```R
squads <- readr::read_csv("https://raw.githubusercontent.com/rfordatascience/tidytuesday/master/data/2019/2019-07-09/squads.csv")
```

    Parsed with column specification:
    cols(
      squad_no = col_double(),
      country = col_character(),
      pos = col_character(),
      player = col_character(),
      dob = col_datetime(format = ""),
      age = col_double(),
      caps = col_double(),
      goals = col_double(),
      club = col_character()
    )
    

# Glimpse on the dataset
Let’s have a look on the dataset.


```R
head(squads)
```


<table>
<thead><tr><th scope=col>squad_no</th><th scope=col>country</th><th scope=col>pos</th><th scope=col>player</th><th scope=col>dob</th><th scope=col>age</th><th scope=col>caps</th><th scope=col>goals</th><th scope=col>club</th></tr></thead>
<tbody>
	<tr><td>1                     </td><td>US                    </td><td>GK                    </td><td>Alyssa Naeher         </td><td>1988-04-20            </td><td>31                    </td><td> 43                   </td><td> 0                    </td><td>Chicago Red Stars     </td></tr>
	<tr><td>2                     </td><td>US                    </td><td>FW                    </td><td>Mallory Pugh          </td><td>1998-04-29            </td><td>21                    </td><td> 50                   </td><td>15                    </td><td>Washington Spirit     </td></tr>
	<tr><td>3                     </td><td>US                    </td><td>MF                    </td><td>Sam Mewis             </td><td>1992-10-09            </td><td>26                    </td><td> 47                   </td><td> 9                    </td><td>North Carolina Courage</td></tr>
	<tr><td>4                     </td><td>US                    </td><td>DF                    </td><td>Becky Sauerbrunn      </td><td>1985-06-06            </td><td>34                    </td><td>155                   </td><td> 0                    </td><td>Utah Royals           </td></tr>
	<tr><td>5                     </td><td>US                    </td><td>DF                    </td><td>Kelley O'Hara         </td><td>1988-08-04            </td><td>30                    </td><td>115                   </td><td> 2                    </td><td>Utah Royals           </td></tr>
	<tr><td>6                     </td><td>US                    </td><td>MF                    </td><td>Morgan Brian          </td><td>1993-02-26            </td><td>26                    </td><td> 82                   </td><td> 6                    </td><td>Chicago Red Stars     </td></tr>
</tbody>
</table>



The column types


```R
dplyr::glimpse(squads)
```

    Observations: 552
    Variables: 9
    $ squad_no <dbl> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,...
    $ country  <chr> "US", "US", "US", "US", "US", "US", "US", "US", "US", "US"...
    $ pos      <chr> "GK", "FW", "MF", "DF", "DF", "MF", "DF", "MF", "MF", "FW"...
    $ player   <chr> "Alyssa Naeher", "Mallory Pugh", "Sam Mewis", "Becky Sauer...
    $ dob      <dttm> 1988-04-20, 1998-04-29, 1992-10-09, 1985-06-06, 1988-08-0...
    $ age      <dbl> 31, 21, 26, 34, 30, 26, 26, 27, 25, 36, 34, 20, 29, 25, 33...
    $ caps     <dbl> 43, 50, 47, 155, 115, 82, 37, 79, 66, 271, 99, 19, 160, 31...
    $ goals    <dbl> 0, 15, 9, 0, 2, 6, 0, 18, 8, 107, 1, 1, 101, 0, 44, 6, 28,...
    $ club     <chr> "Chicago Red Stars", "Washington Spirit", "North Carolina ...
    

The dataset contains 552 observations for 9 columns.
I want to create dummy columns for the pos and country columns. The spread() function of the tidyr packages lets us spread a column levels into multiple columns.

# Dummies with the spread() function.
Here’s some information we get from the function description (?spread)

> **Description**  
Spread a key-value pair across multiple columns.

> **Usage**  
spread(data, key, value, fill = NA, convert = FALSE, drop = TRUE, sep = NULL)

This function takes your dataset as first argument. You also need to specify the key and value arguments. If there is not perfect key:value match then you can use the fill argument to specify a value to fill. By default it will fill with NA for unmatched key value pairs.

Let’s look at some examples :


```R
spread(
  squads, # the dataset
  key = pos, # column to spread
  value = club
) %>%
slice(1:5)
```


<table>
<thead><tr><th scope=col>squad_no</th><th scope=col>country</th><th scope=col>player</th><th scope=col>dob</th><th scope=col>age</th><th scope=col>caps</th><th scope=col>goals</th><th scope=col>DF</th><th scope=col>FW</th><th scope=col>GK</th><th scope=col>MF</th></tr></thead>
<tbody>
	<tr><td>1                     </td><td>US                    </td><td>Alyssa Naeher         </td><td>1988-04-20            </td><td>31                    </td><td> 43                   </td><td> 0                    </td><td>NA                    </td><td>NA                    </td><td>Chicago Red Stars     </td><td>NA                    </td></tr>
	<tr><td>2                     </td><td>US                    </td><td>Mallory Pugh          </td><td>1998-04-29            </td><td>21                    </td><td> 50                   </td><td>15                    </td><td>NA                    </td><td>Washington Spirit     </td><td>NA                    </td><td>NA                    </td></tr>
	<tr><td>3                     </td><td>US                    </td><td>Sam Mewis             </td><td>1992-10-09            </td><td>26                    </td><td> 47                   </td><td> 9                    </td><td>NA                    </td><td>NA                    </td><td>NA                    </td><td>North Carolina Courage</td></tr>
	<tr><td>4                     </td><td>US                    </td><td>Becky Sauerbrunn      </td><td>1985-06-06            </td><td>34                    </td><td>155                   </td><td> 0                    </td><td>Utah Royals           </td><td>NA                    </td><td>NA                    </td><td>NA                    </td></tr>
	<tr><td>5                     </td><td>US                    </td><td>Kelley O'Hara         </td><td>1988-08-04            </td><td>30                    </td><td>115                   </td><td> 2                    </td><td>Utah Royals           </td><td>NA                    </td><td>NA                    </td><td>NA                    </td></tr>
</tbody>
</table>



You can use the sep argument to add a prefix to the new columns. Let’s add an `_`.


```R
spread(
  squads, # the dataset
  key = pos, # column to spread
  value = club,
  sep = "_"
) %>% slice(1:5)
```


<table>
<thead><tr><th scope=col>squad_no</th><th scope=col>country</th><th scope=col>player</th><th scope=col>dob</th><th scope=col>age</th><th scope=col>caps</th><th scope=col>goals</th><th scope=col>pos_DF</th><th scope=col>pos_FW</th><th scope=col>pos_GK</th><th scope=col>pos_MF</th></tr></thead>
<tbody>
	<tr><td>1                     </td><td>US                    </td><td>Alyssa Naeher         </td><td>1988-04-20            </td><td>31                    </td><td> 43                   </td><td> 0                    </td><td>NA                    </td><td>NA                    </td><td>Chicago Red Stars     </td><td>NA                    </td></tr>
	<tr><td>2                     </td><td>US                    </td><td>Mallory Pugh          </td><td>1998-04-29            </td><td>21                    </td><td> 50                   </td><td>15                    </td><td>NA                    </td><td>Washington Spirit     </td><td>NA                    </td><td>NA                    </td></tr>
	<tr><td>3                     </td><td>US                    </td><td>Sam Mewis             </td><td>1992-10-09            </td><td>26                    </td><td> 47                   </td><td> 9                    </td><td>NA                    </td><td>NA                    </td><td>NA                    </td><td>North Carolina Courage</td></tr>
	<tr><td>4                     </td><td>US                    </td><td>Becky Sauerbrunn      </td><td>1985-06-06            </td><td>34                    </td><td>155                   </td><td> 0                    </td><td>Utah Royals           </td><td>NA                    </td><td>NA                    </td><td>NA                    </td></tr>
	<tr><td>5                     </td><td>US                    </td><td>Kelley O'Hara         </td><td>1988-08-04            </td><td>30                    </td><td>115                   </td><td> 2                    </td><td>Utah Royals           </td><td>NA                    </td><td>NA                    </td><td>NA                    </td></tr>
</tbody>
</table>



The pos column has 4 levels : DF, FW, GK and MF. These levels were spread when we call the function with the specified arguments. I want to use this same idea to create dummy columns. This mean I want the four levels spread but for each observation there is 1 if the key is true and 0 else.

I want to spread the pos column so that each player is marked 1 if she is one of the four levels.
To achieve this we need to do some hack. We will create a column that has only a single value then this column is supplied to the value argument then we fill all the unmatched with 0.


```R
squads %>%
  mutate(dummy = 1) %>% # column with single value
  
  spread(
  key = pos, # column to spread
  value = dummy,
  fill = 0
) %>%
slice(1:5)
```


<table>
<thead><tr><th scope=col>squad_no</th><th scope=col>country</th><th scope=col>player</th><th scope=col>dob</th><th scope=col>age</th><th scope=col>caps</th><th scope=col>goals</th><th scope=col>club</th><th scope=col>DF</th><th scope=col>FW</th><th scope=col>GK</th><th scope=col>MF</th></tr></thead>
<tbody>
	<tr><td>1                     </td><td>US                    </td><td>Alyssa Naeher         </td><td>1988-04-20            </td><td>31                    </td><td> 43                   </td><td> 0                    </td><td>Chicago Red Stars     </td><td>0                     </td><td>0                     </td><td>1                     </td><td>0                     </td></tr>
	<tr><td>2                     </td><td>US                    </td><td>Mallory Pugh          </td><td>1998-04-29            </td><td>21                    </td><td> 50                   </td><td>15                    </td><td>Washington Spirit     </td><td>0                     </td><td>1                     </td><td>0                     </td><td>0                     </td></tr>
	<tr><td>3                     </td><td>US                    </td><td>Sam Mewis             </td><td>1992-10-09            </td><td>26                    </td><td> 47                   </td><td> 9                    </td><td>North Carolina Courage</td><td>0                     </td><td>0                     </td><td>0                     </td><td>1                     </td></tr>
	<tr><td>4                     </td><td>US                    </td><td>Becky Sauerbrunn      </td><td>1985-06-06            </td><td>34                    </td><td>155                   </td><td> 0                    </td><td>Utah Royals           </td><td>1                     </td><td>0                     </td><td>0                     </td><td>0                     </td></tr>
	<tr><td>5                     </td><td>US                    </td><td>Kelley O'Hara         </td><td>1988-08-04            </td><td>30                    </td><td>115                   </td><td> 2                    </td><td>Utah Royals           </td><td>1                     </td><td>0                     </td><td>0                     </td><td>0                     </td></tr>
</tbody>
</table>



Now we have successfully created dummy columns from the pos column. Each line represent the player and one of the four new columns will be 1 if it is the player position 0 else.

# Conclusion
I find this way of creating dummy column very easy and all remains in the tidyverse. Because we specified which value to match, we have more control. We could for example decide to create dummy columns that have -1 and 1.
