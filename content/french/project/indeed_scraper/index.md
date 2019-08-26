---
date: "2019-08-26T00:00:00Z"
internal_link = https://agailloty.rbind.io/fr/project/indeed_scraper/
external_link: https://github.com/agailloty/indeed_webscraper
image:
  caption: indeed.com
  focal_point: Smart
summary: Création d'un webscraper avec Python qui se charge de collecter les résultats d'offre d'emplois proposés sur Indeed au travers de une ou plusieurs requêtes puis de les préparer pour une analyse de données.
tags: 
- BeautifulSoup
- Python
- Web scraping
title: Indeed webscraper with Python
---
# Intro
Ce démo a pour but de montrer l'utilisation du webscraper. Le webscraper contient deux fonctions principales : `scrape_indeed()` et `make_df()`.


```python
from indeed_scrape import scrape_indeed, make_df
```


```python
data_science_job_offers = scrape_indeed(request = "Data scientist")
```

Par défaut la fonction scrape_indeed retourne environ 250 (50*5) résultats organisés sous formes de 5 listes Python contenant les requêtes effectuées.
Cette architecture est due au fait que Indeed limite le nombre de résultats par page à 50. L'astuce est donc d'afficher les n premiers pages.
Cela se fait en utilisant l'argument n_rounds qui est 5 par défaut.
- results_per_page = 50
- n_rounds = 5



```python
type(data_science_job_offers)
```




    list




```python
len(data_science_job_offers)
```




    5



Pour traiter les résultats de manière à les analyser, l'utilisation de la fonction `make_df()` est souhaitée car elle va "parser" le HTML afin d'extraire les informations et puis elle l'enregistre dans une data frame Pandas.


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



Prêt pour l'analyse !


```python
job_offer_df.shape
```




    (292, 4)

