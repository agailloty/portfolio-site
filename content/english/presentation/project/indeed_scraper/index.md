---
date: "2019-08-26T00:00:00Z"
external_link: https://github.com/agailloty/indeed_webscraper
image:
  caption: indeed.com
  focal_point: Smart
summary: A webscraper to retrieve job offers from Indeed and analyse them using Pandas
tags: 
- BeautifulSoup
- Python
- Web scraping
title: Indeed webscraper with Python
---
# Intro
This demo intends to demonstrate the use of the webscraper


```python
from indeed_scrape import scrape_indeed, make_df
```


```python
data_science_job_offers = scrape_indeed(request = "Data scientist")
```

By default this function looks for around 250 (50*5) jobs offers because the specified parameters which are :
- results_per_page = 50
- n_rounds = 5

The object we get in return after executing this function is a list of html raw text. 


```python
type(data_science_job_offers)
```




    list




```python
len(data_science_job_offers)
```




    5



Now we need to pass this result into the `make_df()` function for analysis.


```python
job_offer_df = make_df(data_science_job_offers)
```


```python
job_offer_df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>titre</th>
      <th>entreprise</th>
      <th>lieu</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Data Scientist</td>
      <td>Data Driven Advantage</td>
      <td>Guyancourt (78)</td>
      <td>Nous recherchons un Data scientist dont la mis...</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Data Analyst/Scientist</td>
      <td>MWM</td>
      <td>Bordeaux (33)</td>
      <td>Participez à la construction de la stratégie D...</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Data Developer</td>
      <td>Teradata</td>
      <td>Toulouse (31)</td>
      <td>A Data Developer works with the delivery team,...</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Data Scientist / Data Engineer F/H</td>
      <td>Fives</td>
      <td>Niort (79)</td>
      <td>En tant que Data Scientist / Data Engineer, vo...</td>
    </tr>
    <tr>
      <th>4</th>
      <td>TECHNICAL LEADER SENIOR HADOOP / BIG DATA-(H/F)</td>
      <td>Société Générale</td>
      <td>La Défense (92)</td>
      <td>Etablir, avec le Product Owner, ou les data sc...</td>
    </tr>
  </tbody>
</table>
</div>



You get in return a Pandas data frame 


```python
job_offer_df.shape
```




    (292, 4)