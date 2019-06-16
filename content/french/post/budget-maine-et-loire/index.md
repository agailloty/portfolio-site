---
authors:
- admin
categories: [R,visualisations]
date: "2019-06-01T00:00:00Z"
draft: false
featured: true
image:
  caption: ""
  focal_point: ""
projects: []
subtitle: 
summary: Analyser les données d'Opendata49 sur le budget primitif du Maine-et-Loire entre 1998 et 2017
tags: [R, Econométrie]
title: Budget primitif du Maine-et-Loire
---


Budget primitif du Département de Maine-et-Loire de 1998 à 2017.
Le budget primitif présente les prévisions budgétaires fixées en début d'année : les recettes attendues et les montants maximum de dépenses pouvant être engagés pendant la durée de l'exercice budgétaire.  


```R
options(warn = -1)
suppressPackageStartupMessages(library(tidyverse))
library(treemap)
library(ggthemes)
library(ggwordcloud)
library(tm)
library(SnowballC)
```


```R
budget <- read_csv2("Budget-primitif-departement.csv")
```

    Using ',' as decimal and '.' as grouping mark. Use read_delim() for more control.
    Parsed with column specification:
    cols(
      EXERCICE = col_double(),
      `LIBELLE SOUS FONCTION` = col_character(),
      `TYPE MVT` = col_character(),
      SECTION = col_character(),
      `NATURE MVTS` = col_character(),
      `BUDGET PRIMITIF` = col_double()
    )
    


```R
glimpse(budget)
```

    Observations: 12,198
    Variables: 6
    $ EXERCICE                <dbl> 1998, 1998, 1998, 1998, 1998, 1998, 1998, 1...
    $ `LIBELLE SOUS FONCTION` <chr> "ABBAYE D'ASNIERES", "ABBAYE D'ASNIERES", "...
    $ `TYPE MVT`              <chr> "DEPENSE", "DEPENSE", "RECETTE", "DEPENSE",...
    $ SECTION                 <chr> "FONCTIONNEMENT", "FONCTIONNEMENT", "FONCTI...
    $ `NATURE MVTS`           <chr> "REEL", "ORDRE", "REEL", "REEL", "ORDRE", "...
    $ `BUDGET PRIMITIF`       <dbl> 8715.50, 10425.09, 0.00, 25321.79, 0.00, 0....
    


```R
head(budget)
```


<table>
<thead><tr><th scope=col>EXERCICE</th><th scope=col>LIBELLE SOUS FONCTION</th><th scope=col>TYPE MVT</th><th scope=col>SECTION</th><th scope=col>NATURE MVTS</th><th scope=col>BUDGET PRIMITIF</th></tr></thead>
<tbody>
	<tr><td>1998                </td><td>ABBAYE D'ASNIERES   </td><td>DEPENSE             </td><td>FONCTIONNEMENT      </td><td>REEL                </td><td> 8715.50            </td></tr>
	<tr><td>1998                </td><td>ABBAYE D'ASNIERES   </td><td>DEPENSE             </td><td>FONCTIONNEMENT      </td><td>ORDRE               </td><td>10425.09            </td></tr>
	<tr><td>1998                </td><td>ABBAYE D'ASNIERES   </td><td>RECETTE             </td><td>FONCTIONNEMENT      </td><td>REEL                </td><td>    0.00            </td></tr>
	<tr><td>1998                </td><td>ABBAYE DE SAINT MAUR</td><td>DEPENSE             </td><td>FONCTIONNEMENT      </td><td>REEL                </td><td>25321.79            </td></tr>
	<tr><td>1998                </td><td>ABBAYE DE SAINT MAUR</td><td>DEPENSE             </td><td>FONCTIONNEMENT      </td><td>ORDRE               </td><td>    0.00            </td></tr>
	<tr><td>1998                </td><td>ABBAYE DE SAINT MAUR</td><td>RECETTE             </td><td>FONCTIONNEMENT      </td><td>REEL                </td><td>    0.00            </td></tr>
</tbody>
</table>



Le jeu de données comprend 12198 observations pour 6 colonnes.  
**Attributs :**  
**EXERCICE** : année de l'exercice budgétaire  
**LIBELLE SOUS FONCTION** : objet du mouvement budgétaire  
**TYPE MVT** : recette ou dépense  
**SECTION** : budget de fonctionnement ou budget d'investissement  
**NATURE MVTS** : réel ou ordre  
**BUDGET PRMITIF** : montant fixé pour la dépense ou la recette  

# Exploration du jeu de données

Avant de visualiser ces données il convient d'explorer les colonnes du jeu de données pour les comprendre. 


```R
# Nombres de valeurs uniques de chaque colonnes
map_int(budget, function(x) length(unique(x)))
```


<dl class=dl-horizontal>
	<dt>EXERCICE</dt>
		<dd>20</dd>
	<dt>LIBELLE SOUS FONCTION</dt>
		<dd>389</dd>
	<dt>TYPE MVT</dt>
		<dd>2</dd>
	<dt>SECTION</dt>
		<dd>2</dd>
	<dt>NATURE MVTS</dt>
		<dd>2</dd>
	<dt>BUDGET PRIMITIF</dt>
		<dd>3134</dd>
</dl>



Le jeu de donnée couvre les budgets du Maine-et-Loire pour une période de 20 ans. 
Il y a en total 389 sous fonctions (nous explorons cela). Les type de mouvement, section et nature des mouvements n'ont que deux valeurs uniques. Ces colonnes catégorisent bien les mouvements du budget.  
Par contre il n'y a que 3134 uniques budgets alors que le jeu de données comporte 12198 observations.   
Essayons de comprendre les 389 sous fonctions. La description de cette colonne nous indique qu'il s'agit de l'objet du mouvement. En y pensant un peu on peut se rendre à l'évidence que les objets du mouvement peuvent varier avec les années. Essayons tout de même d'avoir une idée des objets qui reviennent les plus souvent.


```R
budget$`LIBELLE SOUS FONCTION` %>% sample(size = 10)
```


<ol class=list-inline>
	<li>'ARTISANAT'</li>
	<li>'DETTE RECUPERABLE'</li>
	<li>'EQUIPEMENTS CULTURELS'</li>
	<li>'C.I.O. SAUMUR'</li>
	<li>'DROITS DE VOIRIE'</li>
	<li>'ECLAIRAGE PUBLIC ET SIGNALISATION'</li>
	<li>'ECLAIRAGE PUBLIC ET SIGNALISATION'</li>
	<li>'RESEAU TELEPHONIQUE'</li>
	<li><span style=white-space:pre-wrap>'AIDE SOCIALE FACULTATIVE A LA  CHARGE DU DEPARTEMENT'</span></li>
	<li>'AMENAGEMENT DE LA LOIRE'</li>
</ol>



Les objets sont divers et variés comme on peut le voir sur cet échantillon.


```R
options(repr.plot.width = 8, repr.plot.height = 6, repr.plot.res = 200)
budget %>% group_by(`LIBELLE SOUS FONCTION`) %>%
summarize(count = n()) %>% arrange(desc(count)) %>% head(20) %>%
ggplot(aes(x = reorder(`LIBELLE SOUS FONCTION`, count), y = count)) +
geom_bar(stat = "identity",fill = "lightblue", col = "black", size = 0.2) + 
coord_flip() + theme_economist() + 
labs( x = "Objet du mouvement", y = "Nombre d'occurences", 
     title = "Occurences des 20 premiers \n objets de mouvements du budget",
    subtitle = "Toute période confondue (1998 - 2017)")
```


![png](output_12_0.png)


## Mots clés fréquents


```R
mots_cles <- budget$`LIBELLE SOUS FONCTION` %>% VectorSource %>% Corpus
```


```R
mots_cles <- tm_map(mots_cles, tolower)
mots_cles <- tm_map(mots_cles, removeWords, stopwords("french"))
mots_cles <- tm_map(mots_cles, removeWords, c("autre", "autres"))
```


```R
dtm <- TermDocumentMatrix(mots_cles)
```


```R
dtm <- dtm %>% as.matrix() %>% 
rowSums %>% sort(decreasing = T) %>% 
data.frame() %>% rownames_to_column
colnames(dtm) <- c("mot", "freq")
```


```R
wordcloud(words = dtm$mot, freq = dtm$freq, 
          min.freq = 20, max.words = 120, random.orders = FALSE,rot.per = 0.45,
         colors = brewer.pal(8, "Dark2"))
```


![png](output_18_0.png)


## Evolution du budget

Les opérations réelles ont un impact direct sur la trésorerie,
il s'agit d'encaissements et décaissements effectifs.
Les opérations d’ordre n'ont pas de conséquences sur la trésorerie,
elles ne représentent que des jeux d'écriture :
- elles ne donnent lieu ni à encaissement, ni à décaissement,
- elles sont retracées en dépenses et en recettes,
- et sont équilibrées.


```R
# Convertissons EXERCICE en année.
budget <- budget %>% mutate(EXERCICE = as.Date(ISOdate(EXERCICE, 1, 1)))
```


```R
options(repr.plot.width = 8, repr.plot.height = 6, repr.plot.res = 200)
budget %>% filter(`NATURE MVTS` == "REEL") %>% 
group_by(EXERCICE, `TYPE MVT`) %>%
summarize(budget_annuel = sum(`BUDGET PRIMITIF`)) %>%
ggplot(aes(x = EXERCICE, y = budget_annuel)) + geom_line(linetype = 2) +
facet_wrap(~`TYPE MVT`, nrow = 2, scales = "free_y") + theme_economist() +
scale_y_continuous(breaks = c(6e8, 1e9, 4e9, 5e9), label = c("600M", "1MD", "4MD", "5MD"))
```


![png](output_22_0.png)


Zoomons à partir de 2003 pour observer l'évolution


```R
budget %>% filter(`NATURE MVTS` == "REEL" & EXERCICE > as.Date("2003-01-01")) %>% 
group_by(EXERCICE, `TYPE MVT`) %>%
summarize(budget_annuel = sum(`BUDGET PRIMITIF`)) %>%
ggplot(aes(x = EXERCICE, y = budget_annuel)) + geom_line(linetype = 2) +
facet_wrap(~`TYPE MVT`, nrow = 2, scales = "free_y") + theme_economist() +
scale_y_continuous(breaks = c(5e8, 8e8), 
                   label = c("500M", "600M"))
```


![png](output_24_0.png)



```R

```
