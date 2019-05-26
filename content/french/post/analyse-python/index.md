---
authors:
- admin
categories: [Python]
date: "2019-02-07"
draft: false
featured: true
image:
  caption: "[Analytics Viya](https://www.analyticsvidhya.com/blog/2018/03/pandas-on-ray-python-library-make-processing-faster/)"
  focal_point: ""
projects: []
subtitle: 
summary: Utiliser les librairies scientifiques de Python pour analyser un jeu de données.
tags: [Python,webscrape, analysis]
title: Analyser ses données avec Python
---
# Utiliser Python pour explorer vos données
  
    

Python est un langage généraliste, facile à utiliser et très puissant. Aujourd'hui de nombreuses applications et sites webs comme Dropbox, Youtube, Google tournent grâce à du code écrit en Python. C'est aussi à présent le langage qui bat les records en terme en matière d'adoption et de taux de croissance. 

Peu de temps après sa création, la communauté scientifique s'y est intéressée, ce qui a condit à l'écriture de la librairie scientifique `numpy`, dès ce jour l'avenir du langage a changé car l'écriture de cette librairie a posé la base sur laquelle l'écosystème scientifique et de la data science tourne. 

Mon but dans cet article est de vous présenter brièvement l'écosytème data science en Python en réalisant une analyse de données. Je suis bien content !

# `Importation des libraries`


```python
# Nous commençons par importer les libraries que nous utiliserons tout au long de cette analyse
import pandas as pd # librairie pour lecture et manipulation de donnée
import numpy as np # notre fameuse numpy pour le calcul numérique
import matplotlib.pyplot as plt # pour les visualisation
```

Dans cet article je vais travailler sur une base de donnée qui porte sur le classement de Shangai des Universités mondiales. La base de donnée a été librement distribuée par l'Organisme du classement et je l'ai eu grâce à la plateforme Kaggle.

# `Lecture de la base de donnée`


```python
classement = pd.read_csv("cwurData.csv")
```

La base vient d'être lue en utilisant la librairie Pandas. Comme à mon habitude j'aime bien rapidement regarder les premmières lignes d'une base de donnée pour me faire une représentation visuelle quand je travaillerai sur elle.


```python
classement.head()
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
      <th>world_rank</th>
      <th>institution</th>
      <th>country</th>
      <th>national_rank</th>
      <th>quality_of_education</th>
      <th>alumni_employment</th>
      <th>quality_of_faculty</th>
      <th>publications</th>
      <th>influence</th>
      <th>citations</th>
      <th>broad_impact</th>
      <th>patents</th>
      <th>score</th>
      <th>year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>Harvard University</td>
      <td>USA</td>
      <td>1</td>
      <td>7</td>
      <td>9</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>NaN</td>
      <td>5</td>
      <td>100.00</td>
      <td>2012</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>Massachusetts Institute of Technology</td>
      <td>USA</td>
      <td>2</td>
      <td>9</td>
      <td>17</td>
      <td>3</td>
      <td>12</td>
      <td>4</td>
      <td>4</td>
      <td>NaN</td>
      <td>1</td>
      <td>91.67</td>
      <td>2012</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>Stanford University</td>
      <td>USA</td>
      <td>3</td>
      <td>17</td>
      <td>11</td>
      <td>5</td>
      <td>4</td>
      <td>2</td>
      <td>2</td>
      <td>NaN</td>
      <td>15</td>
      <td>89.50</td>
      <td>2012</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>University of Cambridge</td>
      <td>United Kingdom</td>
      <td>1</td>
      <td>10</td>
      <td>24</td>
      <td>4</td>
      <td>16</td>
      <td>16</td>
      <td>11</td>
      <td>NaN</td>
      <td>50</td>
      <td>86.17</td>
      <td>2012</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>California Institute of Technology</td>
      <td>USA</td>
      <td>4</td>
      <td>2</td>
      <td>29</td>
      <td>7</td>
      <td>37</td>
      <td>22</td>
      <td>22</td>
      <td>NaN</td>
      <td>18</td>
      <td>85.21</td>
      <td>2012</td>
    </tr>
  </tbody>
</table>
</div>




```python
classement.shape
```




    (2200, 14)



La base de donné contient donc 2200 observations et 14 variables. La lecture des premières lignes de la base de donnée nous donne une indication que ces classents se sont faits sur plusieurs années, donc il est probable que certaines universités reviennent plusieurs fois.  
Nous allons dans la suite de ce projet détermine quelles sont les uniques occurences des universités et combien d'universités au total nous avons dans la base.


```python
classement = classement.set_index("world_rank")
```

On peut maintenant se demander s'il y a des données manquantes dans ce classement? Et si oui, où sont-elles localisées? La librairie Pandas nous offre des outils très utiles pour répondre à cette question et permet même de corriger les données manquantes grâce à des algorithmes puissants.


```python
classement.isna().sum()
```




    institution               0
    country                   0
    national_rank             0
    quality_of_education      0
    alumni_employment         0
    quality_of_faculty        0
    publications              0
    influence                 0
    citations                 0
    broad_impact            200
    patents                   0
    score                     0
    year                      0
    dtype: int64



Cette commande nous montre que la plupart des variables de la base de donnée ne contient pas de données manquantes, seule la variable `broad_impact` en contient, et 200 précisément!

# Signification des libellés

**world_rank** : classement mondial de l'Université  
**institution** Nom de l'Université  
**country** : Le pays dans lequel se trouve l'Université  
**national_rank**: classement de l'Université au niveau national  
**quality_of_education**: rang en fonction de la qualité de l'éducation  
**alumni_employment**: Rang de l'Université en fonction de ses anciens étudiants  
**quality_of_faculty**: Rang en fonction de la qualité de la Faculté  
**publications**: Rang en fonction des publications (plus l'Université publie, mieux elle est classée)  
**influence**: Rang en fonction de l'influence  
**citations**: Nombre des étudiants à l'Université  
**broad_impact**: Impact général (only available for 2014 and 2015)  
**patents rank for patents** : rang pour les brevets  
**score** score total, utilisé pour déterminer le classement  
**year**: année du classement (2012 à 2015)

Ayant maintenant ces libellés en tête, on peut explorer davantage la base de donnée. Les clarifications nous indiquent la variable `broad_impact` n'est disponible que pour les années 2014 et 2015, donc on peut la garder dans notre base et l'explorer plus tard.  
A partir d'ici on peut se demander combien d'uniques universités il y a dans la base puisque la base de donnée classe les universités sur 3 ans.


```python
classement["institution"].nunique()
```




    1024



Pour répondre à la question précédente, nous avons donc 1024 différentes universités dans ce classement.  
Combien de pays avons nous dans la base?


```python
classement["country"].nunique()
```




    59



Comme on peut le voir, tous les pays du monde ne sont pas représentés, toutes les 1024 Universités de ce classement appartiennent uniquement à ces seuls pays. On peut maintenant se demander quels sont les pays qui ont les plus d'universités dans le classement.

Affichons les 6 premiers et les 6 derniers


```python
classement["country"].value_counts().head(6)
```




    USA               573
    China             167
    Japan             159
    United Kingdom    144
    Germany           115
    France            109
    Name: country, dtype: int64



Les USA, à eux seuls comptent 573 universités soit plus de la moitié des Universités présentes dans le classement. La France figure parmi les premiers avec 109 universités ! 


```python
classement["country"].value_counts().tail(6)
```




    Serbia                  2
    Lebanon                 2
    Uganda                  2
    Puerto Rico             2
    United Arab Emirates    2
    Bulgaria                2
    Name: country, dtype: int64



On peut aussi voir la distribution de ces universités graphiquement pour avoir une idée plus claire.


```python
plt.style.use('fivethirtyeight') # Thème
```


```python
plt.figure(figsize = (12,6), dpi= 100) # Pour gérer la taille de la figure
classement["country"].value_counts().plot(kind = "bar")
plt.title("Nombre d'Universités par pays")
plt.xlabel("Pays")
plt.show()
```


![png](output_27_0.png)


Intéressons-nous maintenant à la distibution des scores. Les scores vont de 0 à 100


```python
plt.figure(figsize = (12,6), dpi= 100) # Pour gérer la taille de la figure
classement["score"].hist(bins = 50)
plt.title("Score des Universités")
plt.xlabel("Nombre d'universités")
plt.show()
```


![png](output_29_0.png)


Une très grande partie des universités a un score compris entre 25 et 50. Qu'est-ce qui peut expliquer cela? Et quelles sont les universités ayant les meilleurs scores? 

Rappellons-nous que les classements sont faits durant 3 années consécutives, donc il se peut qu'une université change de rang pendant ces années. C'est ce que nous allons essayer de voir

On peut se demander ici, combiens de classement il y a eu par année !


```python
classement["year"].value_counts()
```




    2015    1000
    2014    1000
    2013     100
    2012     100
    Name: year, dtype: int64



On observe que clairement, les années diffèrent. En 2012 et 2013 seules 100 universités ont été classées. C'est à partir de 2014 que le classement s'est élargi à un plus grand nombre d'universités, 9 fois plus. Pourquoi cela? 

# Saut

Comme nous l'avons remarqué plus haut, le classement se fait sur 4 années consécutives, il serait donc utile de compter le nombre d'uniques occurences sur ces 4 années.


```python
for cols, title in enumerate(classement.columns):
    print(f" Il y a {classement[title].nunique()} valeurs uniques dans, {title}")
```

     Il y a 1024 valeurs uniques dans, institution
     Il y a 59 valeurs uniques dans, country
     Il y a 229 valeurs uniques dans, national_rank
     Il y a 367 valeurs uniques dans, quality_of_education
     Il y a 565 valeurs uniques dans, alumni_employment
     Il y a 199 valeurs uniques dans, quality_of_faculty
     Il y a 987 valeurs uniques dans, publications
     Il y a 944 valeurs uniques dans, influence
     Il y a 135 valeurs uniques dans, citations
     Il y a 343 valeurs uniques dans, broad_impact
     Il y a 738 valeurs uniques dans, patents
     Il y a 764 valeurs uniques dans, score
     Il y a 4 valeurs uniques dans, year
    


```python
series = pd.Series()
for cols, title in enumerate(classement.columns):
    series[title] = classement[title].nunique()
```


```python
plt.figure(figsize = (10,4), dpi= 100) # Pour gérer la taille de la figure
series.plot(kind = "bar", )
```




    <matplotlib.axes._subplots.AxesSubplot at 0x26ad3cfe470>




![png](output_38_1.png)


**Que nous revèlent ces valeurs uniques?**

Nous avons un total de 1024 universités dans la base de donné. Le classement mondial va de 1 à 1000. On peut donc déduire qu'il y a des universités qui sont classées plusieurs fois, durant les 4 années successives et également qu'il y a en même temps certaines universités qui sont sorties du classement pendant que d'autres entrent dans le classement, c'est ce qui explique le différentiel 1024 universités et 1000 classements. Même constat pour les variables `publications` et `influence` qui avoisinent les 1000 valeurs uniques.

La question qu'on se pose maintenant est de comprendre comment se fait-il qu'il y a si peu de valeurs uniques dans les autres variables servant de classement? Y'aurait-il des chevauchements, où y'aurait-il des universités ex-aequo sur certains classements?

Pour répondre à cette question, nous allons voir dans un tableau année par année la variation des uniques occurences.


```python
series = pd.Series()
unique = pd.DataFrame()
years = list(classement["year"].unique())

for year in years:
    mask = classement.loc[:,"year"] == year
    df = classement[mask]
    for cols, title in enumerate(df.columns):
        series[title] = df[title].nunique()
    unique = unique.append(series, ignore_index = True)
```


```python
unique
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
      <th>alumni_employment</th>
      <th>broad_impact</th>
      <th>citations</th>
      <th>country</th>
      <th>influence</th>
      <th>institution</th>
      <th>national_rank</th>
      <th>patents</th>
      <th>publications</th>
      <th>quality_of_education</th>
      <th>quality_of_faculty</th>
      <th>score</th>
      <th>year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>50.0</td>
      <td>0.0</td>
      <td>81.0</td>
      <td>16.0</td>
      <td>81.0</td>
      <td>100.0</td>
      <td>58.0</td>
      <td>51.0</td>
      <td>80.0</td>
      <td>67.0</td>
      <td>78.0</td>
      <td>99.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>42.0</td>
      <td>0.0</td>
      <td>83.0</td>
      <td>18.0</td>
      <td>76.0</td>
      <td>100.0</td>
      <td>57.0</td>
      <td>41.0</td>
      <td>79.0</td>
      <td>58.0</td>
      <td>79.0</td>
      <td>96.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>473.0</td>
      <td>215.0</td>
      <td>63.0</td>
      <td>59.0</td>
      <td>899.0</td>
      <td>1000.0</td>
      <td>229.0</td>
      <td>71.0</td>
      <td>919.0</td>
      <td>354.0</td>
      <td>176.0</td>
      <td>435.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>564.0</td>
      <td>211.0</td>
      <td>61.0</td>
      <td>59.0</td>
      <td>915.0</td>
      <td>1000.0</td>
      <td>229.0</td>
      <td>736.0</td>
      <td>924.0</td>
      <td>367.0</td>
      <td>176.0</td>
      <td>416.0</td>
      <td>1.0</td>
    </tr>
  </tbody>
</table>
</div>



Dans ce tableau, nous avons les valeurs uniques année par année de toutes les colonnes de notre base de donnée.  
Les deux premières lignes représentent les années 2012 et 2013, pour ces années on observe que les valeurs uniques sont faibles car le classement s'effectuait sur un total de 100 pays seulement. Nous allons nous intéresser uniquement aux colonnes significatives : en 2012 il y a eu le classement en fonction des publication comptait 80 classements, ce nombre a baissé à 79 en 2013.   
Les deux autres colonnes représentent les années 2014 et 2015, là aussi on voit les évolutions des valeurs uniques.

# Les Universités françaises

On peut maintenant s'intéresser aux Universités françaises, pour voir leurs caractéristiques.


```python
france = classement["country"] == "France"
univ_france = classement[france]
```


```python
univ_france.head()
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
      <th>institution</th>
      <th>country</th>
      <th>national_rank</th>
      <th>quality_of_education</th>
      <th>alumni_employment</th>
      <th>quality_of_faculty</th>
      <th>publications</th>
      <th>influence</th>
      <th>citations</th>
      <th>broad_impact</th>
      <th>patents</th>
      <th>score</th>
      <th>year</th>
    </tr>
    <tr>
      <th>world_rank</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>48</th>
      <td>University of Paris-Sud</td>
      <td>France</td>
      <td>1</td>
      <td>48</td>
      <td>101</td>
      <td>25</td>
      <td>73</td>
      <td>96</td>
      <td>101</td>
      <td>NaN</td>
      <td>101</td>
      <td>50.44</td>
      <td>2012</td>
    </tr>
    <tr>
      <th>54</th>
      <td>École normale supérieure - Paris</td>
      <td>France</td>
      <td>2</td>
      <td>3</td>
      <td>61</td>
      <td>77</td>
      <td>101</td>
      <td>101</td>
      <td>101</td>
      <td>NaN</td>
      <td>101</td>
      <td>49.10</td>
      <td>2012</td>
    </tr>
    <tr>
      <th>61</th>
      <td>École Polytechnique</td>
      <td>France</td>
      <td>3</td>
      <td>47</td>
      <td>3</td>
      <td>101</td>
      <td>101</td>
      <td>101</td>
      <td>101</td>
      <td>NaN</td>
      <td>101</td>
      <td>48.33</td>
      <td>2012</td>
    </tr>
    <tr>
      <th>63</th>
      <td>Pierre-and-Marie-Curie University</td>
      <td>France</td>
      <td>4</td>
      <td>54</td>
      <td>101</td>
      <td>84</td>
      <td>36</td>
      <td>53</td>
      <td>78</td>
      <td>NaN</td>
      <td>101</td>
      <td>48.26</td>
      <td>2012</td>
    </tr>
    <tr>
      <th>100</th>
      <td>Mines ParisTech</td>
      <td>France</td>
      <td>5</td>
      <td>44</td>
      <td>4</td>
      <td>101</td>
      <td>101</td>
      <td>101</td>
      <td>101</td>
      <td>NaN</td>
      <td>101</td>
      <td>43.36</td>
      <td>2012</td>
    </tr>
  </tbody>
</table>
</div>



## Score des Universités françaises


```python
plt.figure(figsize = (10,4), dpi= 100) # Pour gérer la taille de la figure
univ_france["score"].plot.hist(bins = 30)
plt.title("Score des Universités françaises selon le classement de Shangai")
plt.xlabel("Score sur 100")
plt.show()
```


![png](output_48_0.png)


On observe que les scores des Universités françaises se situent dans l'intervalle [40, 60]. Toutefois la plupart d'entre elles ont un score inférieur à 50.  
Quelles sont les universités 5 premières et dernières universités françaises selon ce classement? On ne s'intéresse qu'à l'année 2015


```python
univ_france = univ_france
```


```python
univ_france[univ_france["year"] == 2015][["institution", "national_rank", "score"]].nlargest(5, "score")
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
      <th>institution</th>
      <th>national_rank</th>
      <th>score</th>
    </tr>
    <tr>
      <th>world_rank</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>36</th>
      <td>École Polytechnique</td>
      <td>1</td>
      <td>59.20</td>
    </tr>
    <tr>
      <th>37</th>
      <td>École normale supérieure - Paris</td>
      <td>2</td>
      <td>58.80</td>
    </tr>
    <tr>
      <th>58</th>
      <td>University of Paris-Sud</td>
      <td>3</td>
      <td>54.21</td>
    </tr>
    <tr>
      <th>63</th>
      <td>Pierre-and-Marie-Curie University</td>
      <td>4</td>
      <td>53.79</td>
    </tr>
    <tr>
      <th>104</th>
      <td>Mines ParisTech</td>
      <td>5</td>
      <td>50.34</td>
    </tr>
  </tbody>
</table>
</div>




```python
univ_france[univ_france["year"] == 2015][["institution", "national_rank", "score"]].nsmallest(5, "score")
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
      <th>institution</th>
      <th>national_rank</th>
      <th>score</th>
    </tr>
    <tr>
      <th>world_rank</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>989</th>
      <td>University of Pau and Pays de l'Adour</td>
      <td>49</td>
      <td>44.04</td>
    </tr>
    <tr>
      <th>978</th>
      <td>University of Reims Champagne-Ardenne</td>
      <td>48</td>
      <td>44.05</td>
    </tr>
    <tr>
      <th>966</th>
      <td>University of Valenciennes and Hainaut-Cambresis</td>
      <td>47</td>
      <td>44.06</td>
    </tr>
    <tr>
      <th>896</th>
      <td>University of Western Brittany</td>
      <td>46</td>
      <td>44.13</td>
    </tr>
    <tr>
      <th>879</th>
      <td>University of Orléans</td>
      <td>43</td>
      <td>44.15</td>
    </tr>
  </tbody>
</table>
</div>



La première Université française est classée 36e sur le rang mondial tandis que l'Université française dernière du classement national se positionne à la 989e place mondiale selon le classement Shangaï en 2015.  
C'est quoi les contrastes?


```python

```


```python

```


```python

```
