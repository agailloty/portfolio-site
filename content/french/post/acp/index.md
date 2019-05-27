---
authors:
- admin
categories: [R,ACP]
date: "2019-03-12T00:00:00Z"
draft: false
featured: true
image:
  caption: ""
  focal_point: ""
projects: []
subtitle: 
summary: Etudier le taux de fertilité des femmes dans les pays européens
tags: [R, ACP, data analysis]
title: Analyse en composantes principales
---
{{% toc %}}
# L'Analyse en Composante Principale (ACP)
## Intuition
L'un des clés essentiels au succès d'un projet de data science est de comprendre le problème qu'on veut bien résoudre. La plupart des data scientists affirment que plus de 70% du temps qu'ils consacrent à la résolution d'un problème donné est consacré au nettoyage de la base de donnée et à la compréhension du problème. Donc avant même d'appliquer n'importe quel algorithme de Machine Learning il faut comprendre pourquoi on fait ce choix et quels sont les bénéfices pour la résolution du problème.   
L'analyse en composante principale est une l'un des outils qui font partie de l'arsenal des professionnels en science des données car il permet (1) de **résumer** et (2) **réduire** la dimension d'un jeu de données. Que faites-vous si vous avez un jeu de données contenant 10000 individus et 30 variables quantitatives? On peut essayer de calculer manuellement la moyenne, les écarts-types pour essayer de comprendre le jeu de données mais cela est long est fastidieux et on ne pourrait pas vraiment résumer l'information. C'est alors que vient l'ACP.  
Dans cet article, je vous épargnes les détails techniques de l'ACP que vous pouvez trouver partout sur Internet. A ce sujet je vous conseille fortement les vidéos de [François Husson](https://www.youtube.com/channel/UCyz4M1pwJBNfjMFaUCHCNUQ) qui sont sur Youtube et qui sont d'une grande qualité. Lui et l'équipe d'AgroCampus Ouest sont les auteurs du package (et même de la base de donnée que j'ai eu en suivant son MOOC sur FUN-MOOC) que je vais utiliser pour la réalisation de ce projet. 

### Les scripts ainsi que le notebook sont disponibles dans ce [répertoire GitHub](https://github.com/agailloty/projets). 

## Chargement de la base

Je travaillerai avec le langage R et plus précisément avec le package [FactoMiner](http://factominer.free.fr/index_fr.html). Comme j'aime bien faire de beaux graphiques, j'utiliserai les packages `ggplot2` et `autoplot` pour représenter les graphiques d'interprétations. Ce projet est destiné à offrir un pipeline cohérent pour réaliser vos études statistiques multivariées.


```R
library(FactoMineR)
library(ggplot2)
library(ggfortify)
```

La base de donnée sur laquelle je vais travailler concerne la fertilité moyenne des femmes dans 39 pays européens par catégorie d'âge: les 15-19 ans, 20-24 ans ...


```R
fertility <- read.csv("data_PCA_Fertility.csv", sep= ';', row.names=1) # 
```


```R
# Regardons comment se présente la base
head(fertility)
```


<table>
<thead><tr><th></th><th scope=col>X15.19</th><th scope=col>X20.24</th><th scope=col>X25.29</th><th scope=col>X30.34</th><th scope=col>X35.39</th><th scope=col>X40.et..</th><th scope=col>Area</th></tr></thead>
<tbody>
	<tr><th scope=row>Albania</th><td>20.8 </td><td>107.1</td><td>126.7</td><td> 72.3</td><td>24.4 </td><td>5.5  </td><td>South</td></tr>
	<tr><th scope=row>Austria</th><td> 8.6 </td><td> 44.5</td><td> 89.2</td><td> 94.6</td><td>46.8 </td><td>9.6  </td><td>West </td></tr>
	<tr><th scope=row>Belarus</th><td>21.4 </td><td> 90.4</td><td>106.7</td><td> 67.6</td><td>26.0 </td><td>4.4  </td><td>East </td></tr>
	<tr><th scope=row>Belgium</th><td> 9.0 </td><td> 52.6</td><td>127.0</td><td>116.6</td><td>48.3 </td><td>9.6  </td><td>West </td></tr>
	<tr><th scope=row>Bosnia and Herzegovina</th><td>11.0 </td><td> 52.5</td><td> 91.8</td><td> 69.7</td><td>25.7 </td><td>4.7  </td><td>South</td></tr>
	<tr><th scope=row>Bulgaria</th><td>42.1 </td><td> 71.9</td><td> 90.9</td><td> 67.1</td><td>27.2 </td><td>4.7  </td><td>East </td></tr>
</tbody>
</table>




```R
dim(fertility)
```


<ol class=list-inline>
	<li>39</li>
	<li>7</li>
</ol>



Nous avons 39 individus et 7 variables.

# Analyse exploratoire 

## Statistiques descriptives

Cette partie est pour explorer la base de données afin de comprendre de quoi il est question, de la nettoyer si possible et la visualiser.


```R
summarytools::descr(fertility, transpose = T)
```


<table>
<thead><tr><th></th><th scope=col>Mean</th><th scope=col>Std.Dev</th><th scope=col>Min</th><th scope=col>Q1</th><th scope=col>Median</th><th scope=col>Q3</th><th scope=col>Max</th><th scope=col>MAD</th><th scope=col>IQR</th><th scope=col>CV</th><th scope=col>Skewness</th><th scope=col>SE.Skewness</th><th scope=col>Kurtosis</th><th scope=col>N.Valid</th><th scope=col>Pct.Valid</th></tr></thead>
<tbody>
	<tr><th scope=row>X15.19</th><td>14.333333  </td><td> 8.913365  </td><td> 3.5       </td><td> 8.0       </td><td>12.0       </td><td> 19.2      </td><td> 42.1      </td><td> 8.30256   </td><td>11.05      </td><td>0.6218627  </td><td>1.19413200 </td><td>0.3782198  </td><td> 1.17945591</td><td>39         </td><td>100        </td></tr>
	<tr><th scope=row>X20.24</th><td>55.348718  </td><td>18.676243  </td><td>29.2       </td><td>41.3       </td><td>52.5       </td><td> 68.4      </td><td>107.1      </td><td>19.12554   </td><td>25.30      </td><td>0.3374286  </td><td>0.81770434 </td><td>0.3782198  </td><td> 0.01278804</td><td>39         </td><td>100        </td></tr>
	<tr><th scope=row>X25.29</th><td>97.271795  </td><td>17.018395  </td><td>57.6       </td><td>85.2       </td><td>93.8       </td><td>108.4      </td><td>132.1      </td><td>19.12554   </td><td>22.15      </td><td>0.1749571  </td><td>0.02981643 </td><td>0.3782198  </td><td>-0.61042969</td><td>39         </td><td>100        </td></tr>
	<tr><th scope=row>X30.34</th><td>93.843590  </td><td>22.795196  </td><td>46.1       </td><td>76.5       </td><td>91.4       </td><td>112.3      </td><td>136.7      </td><td>28.02114   </td><td>34.75      </td><td>0.2429063  </td><td>0.17612427 </td><td>0.3782198  </td><td>-0.91437019</td><td>39         </td><td>100        </td></tr>
	<tr><th scope=row>X35.39</th><td>45.197436  </td><td>16.075750  </td><td>19.9       </td><td>32.7       </td><td>43.4       </td><td> 57.3      </td><td> 97.5      </td><td>18.38424   </td><td>24.00      </td><td>0.3556784  </td><td>0.75110236 </td><td>0.3782198  </td><td> 0.78358398</td><td>39         </td><td>100        </td></tr>
	<tr><th scope=row>X40.et..</th><td> 9.533333  </td><td> 4.191428  </td><td> 3.8       </td><td> 6.6       </td><td> 9.5       </td><td> 12.5      </td><td> 23.8      </td><td> 4.29954   </td><td> 5.45      </td><td>0.4396603  </td><td>0.99832021 </td><td>0.3782198  </td><td> 1.32437008</td><td>39         </td><td>100        </td></tr>
</tbody>
</table>



La fonction `descr` du package `summarytools` nous affiche des élements utiles concernant notre base de données. Ce qu'on remarque dans un premier c'est les deux dernières colonnes qui nous indique le nombre de données valides. Heureusement pour nous aucune donnée n'est manquante, cela nous épargne du temps.  
Tout à gauche les 5 premières colonnes nous présentent les statistiques descriptives du jeu de données. On observe par exemple que la moyenne de la fertilité des femmes de plus de 40 ans est la plus faible, suivie de celle des 15-19 ans. L'écart-type de ces moyenne est reltivement élevé pour les femmes de 30-34, ce qui explique qu'il y a une assez forte variance entre les pays.
## Données groupées
Groupons maintenant ces données par région (Area) pour voir les moyennes des variables mais par régions. 


```R
library(tidyverse)
```


```R
group_by(fertility, Area) %>% summarise_all(mean)
```


<table>
<thead><tr><th scope=col>Area</th><th scope=col>X15.19</th><th scope=col>X20.24</th><th scope=col>X25.29</th><th scope=col>X30.34</th><th scope=col>X35.39</th><th scope=col>X40.et..</th></tr></thead>
<tbody>
	<tr><td>East     </td><td>24.760000</td><td>68.12000 </td><td> 90.9400 </td><td> 70.8400 </td><td>30.18000 </td><td> 5.76000 </td></tr>
	<tr><td>North    </td><td>10.710000</td><td>53.11000 </td><td>107.3900 </td><td>111.6700 </td><td>58.68000 </td><td>13.05000 </td></tr>
	<tr><td>South    </td><td>12.850000</td><td>53.76667 </td><td> 92.3750 </td><td> 86.9500 </td><td>41.14167 </td><td> 8.87500 </td></tr>
	<tr><td>West     </td><td> 7.157143</td><td>43.01429 </td><td>100.2571 </td><td>113.0571 </td><td>54.34286 </td><td>11.02857 </td></tr>
</tbody>
</table>



Ici nous avons les moyennes par régions. L'indication qu'on avait eu de la variance des 30-34 se confirme ici car on observe que la moyenne des fécondités varie fortement par région. Les 15-19 ont une plus grande fertilité en Europe de l'Est que dans les autres régions.

# Visualisation


```R
options(repr.plot.res = 300, repr.plot.width = 6, repr.plot.height = 3)
```

## Fertilité des 15-19 par pays


```R
row.names(fertility)
```


<ol class=list-inline>
	<li>'Albania'</li>
	<li>'Austria'</li>
	<li>'Belarus'</li>
	<li>'Belgium'</li>
	<li>'Bosnia and Herzegovina'</li>
	<li>'Bulgaria'</li>
	<li>'Croatia'</li>
	<li>'Denmark'</li>
	<li>'Estonia'</li>
	<li>'Finland'</li>
	<li>'France'</li>
	<li>'Germany'</li>
	<li>'Greece'</li>
	<li>'Hungary'</li>
	<li>'Iceland'</li>
	<li>'Ireland'</li>
	<li>'Italy'</li>
	<li>'Latvia'</li>
	<li>'Lithuania'</li>
	<li>'luxembourg'</li>
	<li>'Macedonia'</li>
	<li>'Malta'</li>
	<li>'Moldova'</li>
	<li>'Montenegro'</li>
	<li>'Netherlands'</li>
	<li>'Norway'</li>
	<li>'Poland'</li>
	<li>'Portugal'</li>
	<li>'Rep. Czech'</li>
	<li>'Romania'</li>
	<li>'Russia'</li>
	<li>'Serbia'</li>
	<li>'Slovakia'</li>
	<li>'Slovenia'</li>
	<li>'Spain'</li>
	<li>'Sweden'</li>
	<li>'Swiss'</li>
	<li>'UK'</li>
	<li>'Ukraine'</li>
</ol>




```R
plot_fertility <- function(data, x=row.names(fertility), y, size_text = 3, ...){
    ggplot(data, aes(x = x)) + 
    geom_text(aes(y=y, label = x), size = size_text) + theme_classic() + 
theme(axis.text.x = element_blank()) + xlab(" ")
}
```


```R
plot_fertility(fertility, y = fertility$X15.19, size_text = 2.4) + 
ggtitle("Fertilité des 15-19 ans") + ylab("Fertilité")
```


![png](output_22_0.png)



```R
plot_fertility(fertility, y = fertility$X20.24, size_text = 2.4) + 
ggtitle("Fertilité des 20-24 ans") + ylab("Fertilité")
```


![png](output_23_0.png)



```R
plot_fertility(fertility, y = fertility$X25.29, size_text = 2.4) + 
ggtitle("Fertilité des 25-29 ans") + ylab("Fertilité")
```


![png](output_24_0.png)


La France arrive en tête de la fertilité moyenne des 25-29 ans. 

## Corrélations


```R
library(ggcorrplot)
```

    Warning message:
    "package 'ggcorrplot' was built under R version 3.5.2"


```R
ggcorrplot(corr = cor(fertility[,-7]), hc.order = TRUE, type = "lower",
   lab = TRUE)
```


![png](output_28_0.png)


Ce graphique nous donne les corrélations entre les variables quantitatives du jeu de donnée. Par exemple la fertilité des 35-39 corrèle très fortement avec la fertilité des 40 ans et plus. 

# L'Analyse en composante principale
Comme on le voit au travers de ces graphiques, certaines variables différencient bien les pays, d'autres pas vraiment. On ne peut juste avoir qu'un aperçu mais pas un résumé complet qui nous permet de comprendre les facteurs de différence entre les pays. l'ACP nous aidera à mieux représenter les individus

## Construction


```R
acp <- PCA(X = fertility, scale.unit = T, quali.sup = 7)
```

On vient de créer l'objet `acp` qui contient les résultats de l'analyse. Les arguments entrés dans la fonction PCA : X représente le jeu de donnée, scale.unit = T car on veut mettre à l'échelle toutes les variables et quali.sup = 7 c'est notre variable qualitative supplémentaire (7e colonne du jeu de données). 


```R
# Voyons ce que contient l'objet acp
names(acp)
```


<ol class=list-inline>
	<li>'eig'</li>
	<li>'var'</li>
	<li>'ind'</li>
	<li>'svd'</li>
	<li>'quali.sup'</li>
	<li>'call'</li>
</ol>



Nous allons d'abord voir un résumé.


```R
summary(acp, ncp = 2)
```

    
    Call:
    PCA(X = fertility, scale.unit = T, quali.sup = 7) 
    
    
    Eigenvalues
                           Dim.1   Dim.2   Dim.3   Dim.4   Dim.5   Dim.6
    Variance               3.702   1.360   0.677   0.206   0.046   0.009
    % of var.             61.704  22.665  11.287   3.427   0.772   0.145
    Cumulative % of var.  61.704  84.369  95.656  99.084  99.855 100.000
    
    Individuals (the 10 first)
                               Dist    Dim.1    ctr   cos2    Dim.2    ctr   cos2  
    Albania                |  3.883 | -2.879  5.742  0.550 |  2.435 11.182  0.393 |
    Austria                |  1.007 |  0.567  0.222  0.317 | -0.647  0.789  0.413 |
    Belarus                |  2.990 | -2.762  5.283  0.853 |  0.964  1.751  0.104 |
    Belgium                |  2.141 |  0.937  0.608  0.192 |  1.730  5.643  0.653 |
    Bosnia and Herzegovina |  2.073 | -1.425  1.406  0.472 | -0.670  0.846  0.104 |
    Bulgaria               |  3.870 | -3.359  7.816  0.754 | -0.338  0.216  0.008 |
    Croatia                |  0.651 | -0.244  0.041  0.140 |  0.043  0.004  0.004 |
    Denmark                |  2.352 |  1.989  2.740  0.715 |  0.774  1.131  0.108 |
    Estonia                |  0.537 | -0.086  0.005  0.026 |  0.086  0.014  0.026 |
    Finland                |  1.729 |  1.569  1.704  0.823 |  0.697  0.916  0.163 |
    
    Variables
                              Dim.1    ctr   cos2    Dim.2    ctr   cos2  
    X15.19                 | -0.831 18.668  0.691 | -0.024  0.042  0.001 |
    X20.24                 | -0.728 14.319  0.530 |  0.533 20.899  0.284 |
    X25.29                 |  0.041  0.046  0.002 |  0.979 70.413  0.958 |
    X30.34                 |  0.908 22.280  0.825 |  0.342  8.591  0.117 |
    X35.39                 |  0.942 23.981  0.888 |  0.026  0.049  0.001 |
    X40.et..               |  0.876 20.705  0.767 | -0.008  0.005  0.000 |
    
    Supplementary categories
                               Dist    Dim.1   cos2 v.test    Dim.2   cos2 v.test  
    East                   |  2.191 | -2.143  0.957 -4.032 | -0.338  0.024 -1.050 |
    North                  |  1.618 |  1.414  0.763  2.660 |  0.703  0.189  2.184 |
    South                  |  0.553 | -0.243  0.194 -0.519 | -0.375  0.460 -1.321 |
    West                   |  1.529 |  1.459  0.911  2.186 |  0.121  0.006  0.298 |
    

Ici j'ai choisi de n'afficher que les détails des deux premières composantes principales (ncp =2).   
Les eignevalues représentent les valeurs propres. La première composante résume à elle seule près de 62% de la variance des individus, ce qui fait si on ajoute à ce pourcentage de variance, le pourcentage de variance de la deuxième composante nous résumons 84% de l'information. C'est un excellent score. Donc au lieu de 6 variables explicatives, seules 2 variables synthétiques suffisent pour comprendre la variabilité des individus.  Nous verrons comment commenter ces variables. 
## Graphique des variables
Représentons maintenant le graphique des variables sur les deux prémières composantes


```R
options(repr.plot.res = 150, repr.plot.width = 5, repr.plot.height = 5)
plot.PCA(acp, choix = "var")
```


![png](output_38_0.png)


### Comment lire ce graphique ?
Les deux axes de ce graphique représentent les coefficients de corrélations qui vont de -1 à 1. Les flèches indiquent à la fois la corrélation de chacune des variables à l'axe donnée et la corrélation des variables entre elles. Comme nous l'avions déja anticipé dans la partie corrélation on voit que la fertilité des femmes 35-39 ans corrèle fortement avec celle des femmes de plus de 40 ans. Et il se trouve également que ce sont ces deux variables + la variable des 30-34 qui sont les plus corrélées positivement avec l'axe 1. La variable 15-19 quant à elle est très négativement corrélée avec cette prémière axe.   
La variable X25-29 corrèle très fortement avec l'axe 2, les autres X20-24 et X30-34 corrèlent aussi positivement mais de manière modérée.
## Graphique des individus


```R
options(repr.plot.width = 7)
plot.PCA(acp, choix= "ind")
```


![png](output_40_0.png)


Ce graphique représente la distance des pays du barycentre. Un pays situé au centre de ce graphique a tendance à avoir des valeurs moyennes pour toutes les variables, inversement les pays qui s'éloignent du barycentre sont ont des valeurs éloignés de la moyenne et enfin la distance entre les pays traduit leur différence ou similitude. Pour voir un exemple, comparons les valeurs que prennent l'Espagne, l'Albanie et la Croatie


```R
fertility[c("Spain", "Albania", "Croatia"),]
```


<table>
<thead><tr><th></th><th scope=col>X15.19</th><th scope=col>X20.24</th><th scope=col>X25.29</th><th scope=col>X30.34</th><th scope=col>X35.39</th><th scope=col>X40.et..</th><th scope=col>Area</th></tr></thead>
<tbody>
	<tr><th scope=row>Spain</th><td> 8.9 </td><td> 29.2</td><td> 57.6</td><td>91.2 </td><td>62.4 </td><td>14.9 </td><td>South</td></tr>
	<tr><th scope=row>Albania</th><td>20.8 </td><td>107.1</td><td>126.7</td><td>72.3 </td><td>24.4 </td><td> 5.5 </td><td>South</td></tr>
	<tr><th scope=row>Croatia</th><td>11.4 </td><td> 54.6</td><td> 99.1</td><td>91.4 </td><td>39.9 </td><td> 7.8 </td><td>South</td></tr>
</tbody>
</table>




```R
# Moyennes des colonnes
t(summarytools::descr(fertility)["Mean",])
```


<table>
<thead><tr><th scope=col>X15.19</th><th scope=col>X20.24</th><th scope=col>X25.29</th><th scope=col>X30.34</th><th scope=col>X35.39</th><th scope=col>X40.et..</th></tr></thead>
<tbody>
	<tr><td>14.33333</td><td>55.34872</td><td>97.27179</td><td>93.84359</td><td>45.19744</td><td>9.533333</td></tr>
</tbody>
</table>



On voit ici que tout semble opposer l'Espagne et l'Albanie. L'Espagne a tendance à avoir des valeurs faibles pour les variables X15.19, X20.24 et X25.29 là où l'Albanie enregistre de forte valeurs, et similairement l'Espagne semble avoir des valeurs plus élevées pour X30.34, X35-39, X40.  
La Croatie qui se situe au près du barycentre a des valeurs proches de la moyenne des colonnes.
## Comment comprendre le graphique des individus?
L'interprétation du graphique des individus se fait en ayant en tête le cercle des corrélations (graphique des variables). Sur l'axe 1 les pays situés à droite sont les pays dans lesquels la fertilité des femmes de plus de 30 ans est la plus élévée et inversement pour les pays situés à gauche.

## Influence des variables et des individus

### Influence des variables

Dans cette section, il est question d'examiner les coordonnées des individus et des variables pour voir celles qui contribuent à la définition des axes, autrement y a-t-il des variables ou des individus sur-représentées dans la précédente analyse?


```R
acp$var$contrib[, c("Dim.1", "Dim.2")]
```


<table>
<thead><tr><th></th><th scope=col>Dim.1</th><th scope=col>Dim.2</th></tr></thead>
<tbody>
	<tr><th scope=row>X15.19</th><td>18.66806198 </td><td> 0.042332761</td></tr>
	<tr><th scope=row>X20.24</th><td>14.31907798 </td><td>20.899108658</td></tr>
	<tr><th scope=row>X25.29</th><td> 0.04641997 </td><td>70.412919869</td></tr>
	<tr><th scope=row>X30.34</th><td>22.28022806 </td><td> 8.591130345</td></tr>
	<tr><th scope=row>X35.39</th><td>23.98076041 </td><td> 0.049487266</td></tr>
	<tr><th scope=row>X40.et..</th><td>20.70545160 </td><td> 0.005021103</td></tr>
</tbody>
</table>



Ce tableau nous montre la contribution des variables dans la définition des 2 axes. L'axe 1 est bien équilibrée car la contribution des variables est bien proportionnée, aucune variable n'est sur-représentée. Ce constat n'est pas valide pour la dimension 2 car la variable X25-29 semble sur-représentée avec 70% de la contribution à la définition de l'axe 2.

### Influence des individus

Quelles sont les individus qui influencent les plus les résultats de l'ACP? Nous chercherons pour axe les pays qui ont les plus d'impacts dans la construction de chacune des axes.

#### Première axe 


```R
individus <- acp$ind$contrib[, c("Dim.1", "Dim.2")] %>% data.frame
```


```R
options(scipen = 99) #Les décimales après la virgule
```


```R
individus[order(individus$Dim.1, decreasing = T),]["Dim.1"] %>% head()
```


<table>
<thead><tr><th></th><th scope=col>Dim.1</th></tr></thead>
<tbody>
	<tr><th scope=row>Ireland</th><td>11.828437</td></tr>
	<tr><th scope=row>Moldova</th><td> 8.489856</td></tr>
	<tr><th scope=row>Bulgaria</th><td> 7.816444</td></tr>
	<tr><th scope=row>Ukraine</th><td> 7.277283</td></tr>
	<tr><th scope=row>Romania</th><td> 6.452351</td></tr>
	<tr><th scope=row>Albania</th><td> 5.742210</td></tr>
</tbody>
</table>




```R
sum(individus[order(individus$Dim.1, decreasing = T),]["Dim.1"] %>% head())
```


47.6065807477098


Ces individus sont les mieux représentés sur l'axe. A eux seuls ils contribuent à hauteur de 47% à la construction de l'axe 1.

#### La deuxième axe


```R
individus[order(individus$Dim.2, decreasing = T),]["Dim.2"] %>% head()
```


<table>
<thead><tr><th></th><th scope=col>Dim.2</th></tr></thead>
<tbody>
	<tr><th scope=row>Spain</th><td>13.110490</td></tr>
	<tr><th scope=row>Albania</th><td>11.182419</td></tr>
	<tr><th scope=row>France</th><td> 9.910815</td></tr>
	<tr><th scope=row>Portugal</th><td> 6.634490</td></tr>
	<tr><th scope=row>Belgium</th><td> 5.642806</td></tr>
	<tr><th scope=row>Italy</th><td> 5.438278</td></tr>
</tbody>
</table>




```R
sum(individus[order(individus$Dim.2, decreasing = T),]["Dim.2"] %>% head())
```


51.9192973349872


Ici ces 6 individus contribuent à hauteur de 52% à la définition de l'axe 2.

# Classification ascendante hiérarchique (CAH)

Nous voulons maintenant classer les individus en fonction de leurs ressemblances dans des clusters. C'est ce que nous permet de faire l'algorithme de la classification ascendante hiérarchique.


```R
cluster <- HCPC(res= acp, nb.clust = 5)
```


```R
cluster$data.clust %>% head()
```


<table>
<thead><tr><th></th><th scope=col>X15.19</th><th scope=col>X20.24</th><th scope=col>X25.29</th><th scope=col>X30.34</th><th scope=col>X35.39</th><th scope=col>X40.et..</th><th scope=col>Area</th><th scope=col>clust</th></tr></thead>
<tbody>
	<tr><th scope=row>Albania</th><td>20.8 </td><td>107.1</td><td>126.7</td><td> 72.3</td><td>24.4 </td><td>5.5  </td><td>South</td><td>1    </td></tr>
	<tr><th scope=row>Austria</th><td> 8.6 </td><td> 44.5</td><td> 89.2</td><td> 94.6</td><td>46.8 </td><td>9.6  </td><td>West </td><td>3    </td></tr>
	<tr><th scope=row>Belarus</th><td>21.4 </td><td> 90.4</td><td>106.7</td><td> 67.6</td><td>26.0 </td><td>4.4  </td><td>East </td><td>1    </td></tr>
	<tr><th scope=row>Belgium</th><td> 9.0 </td><td> 52.6</td><td>127.0</td><td>116.6</td><td>48.3 </td><td>9.6  </td><td>West </td><td>4    </td></tr>
	<tr><th scope=row>Bosnia and Herzegovina</th><td>11.0 </td><td> 52.5</td><td> 91.8</td><td> 69.7</td><td>25.7 </td><td>4.7  </td><td>South</td><td>2    </td></tr>
	<tr><th scope=row>Bulgaria</th><td>42.1 </td><td> 71.9</td><td> 90.9</td><td> 67.1</td><td>27.2 </td><td>4.7  </td><td>East </td><td>1    </td></tr>
</tbody>
</table>



Nous avons une copie de notre base de donnée

## Gain d'inertie


```R
plot.HCPC(cluster, choice = "bar")
```


![png](output_68_0.png)


Ce graphique nous montre le gain d'inertie associé à l'ajout d'un cluster supplémentaire. Nous observons sur ce graphique qu'au delà de 4 clusters le gain d'inertie n'est plus significatif. Essayons d'abord de voir la proportion des individus dans chaque cluster


```R
cluster$data.clust %>% group_by(clust) %>% summarize(nombre_individus = n())
```


<table>
<thead><tr><th scope=col>clust</th><th scope=col>nombre_individus</th></tr></thead>
<tbody>
	<tr><td>1 </td><td> 8</td></tr>
	<tr><td>2 </td><td>12</td></tr>
	<tr><td>3 </td><td> 8</td></tr>
	<tr><td>4 </td><td>10</td></tr>
	<tr><td>5 </td><td> 1</td></tr>
</tbody>
</table>



Nous voyons que le cluster 1 ne compte qu'un seul pays, donc le graphique précédent nous a donné une bonne indication, il faudrait réduire le nombre de clusters à 4 pour être plus efficient.


```R
cluster_2 <- HCPC(res = acp, nb.clust = 4)
```


```R
plot.HCPC(cluster_2, choice = "bar")
```


![png](output_73_0.png)



```R
cluster_2$data.clust %>% group_by(clust) %>% summarize(nombre_individus = n())
```


<table>
<thead><tr><th scope=col>clust</th><th scope=col>nombre_individus</th></tr></thead>
<tbody>
	<tr><td>1 </td><td> 8</td></tr>
	<tr><td>2 </td><td>14</td></tr>
	<tr><td>3 </td><td> 7</td></tr>
	<tr><td>4 </td><td>10</td></tr>
</tbody>
</table>



Le classement est beaucoup plus équilibré avec 4 clusters. 

## Etude des cluster
On se donne maintenant la tâche d'étudier les clusters afin de comprendre les différences entre entre clusters et les similitudes entre les individus regroupés ensemble.


```R
plot.HCPC(cluster_2, choice = "map")
```


![png](output_77_0.png)


## Caractéristiques des clusters

### Cluster 1


```R
cluster_2$desc.var$quanti$"1"
```


<table>
<thead><tr><th></th><th scope=col>v.test</th><th scope=col>Mean in category</th><th scope=col>Overall mean</th><th scope=col>sd in category</th><th scope=col>Overall sd</th><th scope=col>p.value</th></tr></thead>
<tbody>
	<tr><th scope=row>X20.24</th><td> 4.871131     </td><td>84.0250       </td><td>55.348718     </td><td>11.855774     </td><td>18.435249     </td><td>0.000001109614</td></tr>
	<tr><th scope=row>X15.19</th><td> 4.739694     </td><td>27.6500       </td><td>14.333333     </td><td> 7.642153     </td><td> 8.798349     </td><td>0.000002140412</td></tr>
	<tr><th scope=row>X40.et..</th><td>-3.412325     </td><td> 5.0250       </td><td> 9.533333     </td><td> 0.907951     </td><td> 4.137343     </td><td>0.000644111719</td></tr>
	<tr><th scope=row>X35.39</th><td>-3.692305     </td><td>26.4875       </td><td>45.197436     </td><td> 3.608822     </td><td>15.868312     </td><td>0.000222231138</td></tr>
	<tr><th scope=row>X30.34</th><td>-3.911592     </td><td>65.7375       </td><td>93.843590     </td><td> 8.906730     </td><td>22.501052     </td><td>0.000091689697</td></tr>
</tbody>
</table>



Les pays du cluster 1 sont caractérisés par une fertilité des femmes de 15 à 24 supérieure aux autres pays. En moyenne la fertilité des femmes de cette tranche d'âge est de 84 alors que la moyenne générale est de 55.  
Par effet inverse la fertilité des femmes de plus de 30 ans est relativement faible que dans les autres pays. Les pays qui caractérisent ce cluster sont :


```R
cluster_2$desc.ind$para$"1"
```


<dl class=dl-horizontal>
	<dt>Ukraine</dt>
		<dd>0.689737008366458</dd>
	<dt>Russia</dt>
		<dd>0.826626850576947</dd>
	<dt>Belarus</dt>
		<dd>0.938331050874943</dd>
	<dt>Macedonia</dt>
		<dd>1.30786149412495</dd>
	<dt>Romania</dt>
		<dd>1.42674483831148</dd>
</dl>



### Cluster 2


```R
cluster_2$desc.var$quanti$"2"
```


<table>
<thead><tr><th></th><th scope=col>v.test</th><th scope=col>Mean in category</th><th scope=col>Overall mean</th><th scope=col>sd in category</th><th scope=col>Overall sd</th><th scope=col>p.value</th></tr></thead>
<tbody>
	<tr><th scope=row>X35.39</th><td>-1.994749</td><td>38.33571 </td><td>45.19744 </td><td>5.78787  </td><td>15.86831 </td><td>0.0460703</td></tr>
</tbody>
</table>



Les pays qui sont dans ce cluster ne se distinguent des autres pays que par la fertilité des femmes des 35 à 39 relativement plus faible que la moyenne des autres. Les pays qui caractérisent ce cluster sont :


```R
cluster_2$desc.ind$para$"2"
```


<dl class=dl-horizontal>
	<dt>Croatia</dt>
		<dd>0.441189988156594</dd>
	<dt>Poland</dt>
		<dd>0.750448903336045</dd>
	<dt>Latvia</dt>
		<dd>0.864624236753571</dd>
	<dt>Rep. Czech</dt>
		<dd>0.920514950124321</dd>
	<dt>Estonia</dt>
		<dd>0.992402672777697</dd>
</dl>




```R
cluster_2$desc.var$quanti$"3"
```


<table>
<thead><tr><th></th><th scope=col>v.test</th><th scope=col>Mean in category</th><th scope=col>Overall mean</th><th scope=col>sd in category</th><th scope=col>Overall sd</th><th scope=col>p.value</th></tr></thead>
<tbody>
	<tr><th scope=row>X40.et..</th><td> 2.047435   </td><td>12.471429   </td><td> 9.533333   </td><td>2.384901    </td><td> 4.137343   </td><td>0.0406153689</td></tr>
	<tr><th scope=row>X15.19</th><td>-2.154959   </td><td> 7.757143   </td><td>14.333333   </td><td>2.404078    </td><td> 8.798349   </td><td>0.0311650310</td></tr>
	<tr><th scope=row>X20.24</th><td>-3.247185   </td><td>34.585714   </td><td>55.348718   </td><td>3.771104    </td><td>18.435249   </td><td>0.0011655268</td></tr>
	<tr><th scope=row>X25.29</th><td>-3.851882   </td><td>74.828571   </td><td>97.271795   </td><td>8.196814    </td><td>16.798793   </td><td>0.0001172135</td></tr>
</tbody>
</table>



Ce qui caractérise les pays présents dans ce cluster c'est leur fertilité des femmes de plus 40 plus élévée que la moyenne des autres pays. Les moyennes des fertilités des femmes de 15 à 29 ans sont faibles comparé aux autres pays. Les pays caractéristiques de ce cluster sont :


```R
cluster_2$desc.ind$para$"3"
```


<dl class=dl-horizontal>
	<dt>Greece</dt>
		<dd>0.559213141015855</dd>
	<dt>Germany</dt>
		<dd>0.833195757525693</dd>
	<dt>luxembourg</dt>
		<dd>0.914814217056602</dd>
	<dt>Italy</dt>
		<dd>0.99461389438098</dd>
	<dt>Swiss</dt>
		<dd>1.04392232825817</dd>
</dl>



### Cluster 4


```R
cluster_2$desc.var$quanti$"4"
```


<table>
<thead><tr><th></th><th scope=col>v.test</th><th scope=col>Mean in category</th><th scope=col>Overall mean</th><th scope=col>sd in category</th><th scope=col>Overall sd</th><th scope=col>p.value</th></tr></thead>
<tbody>
	<tr><th scope=row>X30.34</th><td> 4.928649      </td><td>124.48         </td><td>93.843590      </td><td> 7.732632      </td><td>22.501052      </td><td>0.0000008280034</td></tr>
	<tr><th scope=row>X35.39</th><td> 4.020047      </td><td> 62.82         </td><td>45.197436      </td><td>12.756159      </td><td>15.868312      </td><td>0.0000581864498</td></tr>
	<tr><th scope=row>X40.et..</th><td> 3.453041      </td><td> 13.48         </td><td> 9.533333      </td><td> 3.957221      </td><td> 4.137343      </td><td>0.0005543049357</td></tr>
	<tr><th scope=row>X25.29</th><td> 3.404258      </td><td>113.07         </td><td>97.271795      </td><td>11.713159      </td><td>16.798793      </td><td>0.0006634407437</td></tr>
	<tr><th scope=row>X15.19</th><td>-2.416441      </td><td>  8.46         </td><td>14.333333      </td><td> 3.943653      </td><td> 8.798349      </td><td>0.0156730464208</td></tr>
</tbody>
</table>



Les pays qui se trouvent dans ce cluster ont une fertilité bien répartie sur toutes les catégories d'âge sauf les femmes de 15-19 qui ont une fertilité plus faible que la moyenne.

# Conclusion
En conclusion, l'ACP est une méthode très puissante et largement utilisée dans tous les domaines qui traitent des données. Il n'est donc pas étonnant qu'en économie on l'utilise grandement pour étudier les caractéristiques économiques des pays, les disparités etc... Les variables synthétiques que produit une ACP rendent facile la compréhension et l'interprétation d'un jeu de donnée multidimensionnel
