---
# Project title.
title: "Cleaning a text corpus"

# Date this page was created.
date : "2019-08-17T15:38:00"

# Project summary to display on homepage.
summary : "Preprocessing text for natural language processing (NLP)"

# Tags: can be used for filtering projects.
tags : 

# Optional external URL for project (replaces project detail page).
external_link : ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references 
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides : ""`.
slides : ""

# Links (optional).
url_pdf : ""
url_slides : ""
url_video : ""
url_code : "https://github.com/agailloty/NLP-Projects/blob/master/1%20-%20Clean%20a%20text.ipynb"

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
#url_custom = [{icon_pack = "fab", icon="twitter", name="Follow", url = "https://twitter.com/georgecushen"}]

# Featured image
# To use, add an image named `featured.jpg/png` to your project's folder. 
image:
caption : ""
  
# Focal point (optional)
# Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
focal_point : "Smart"
---


# Cleaning a corpus of text
## Introduction
After successfully completed the [Machine Learning Fundamentals]() course offered by the University of California San Diego through edX, my interest of Machine Learning is growing. one of the topic I would like to master in near future is Natural Language Processing (NLP). NLP is a subset of Artificial intelligenc that deals with the human language. NLP has a large variety of applications and I aim to get some solid skills on this topic.  
Four days ago I started the 8 weeks long NLP curriculum designed by Siraj Raval. For this week the assigned project is to clean a text of my choice using techniques such as lemmatization, stemming, tokenization... 
If you are not familiar with these techniques, don't worry I will present them.    

**Note : You can download this project as a Jupyter Notebook on [GitHub](https://github.com/agailloty/NLP-Projects)**

## Importing the libraries
For this project I will work with the Natural language toolkit or nltk librarie which provide a large variety of techniques to deal with natural language processing. Some say that Spacy, which is another library for NLP, is better but I never worked with it and wish to encounter it soon.


```python
import nltk
from nltk import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from collections import Counter
#nltk.download("punkt")
#nltk.download('averaged_perceptron_tagger')
```

## The text
The text on which I'm going to work is entitled "The English Church in the eighteenth century". I took it from Project Gutenberg. If you want to reproduce what I do here you can download the text at the [Project Gutenberg website](https://www.gutenberg.org/ebooks/16791). You can downlod it in the format you want. For me I already downloaded it and saved it on my computer.  
Let's open and read it !


```python
text = open("the_english_church_in_18th_century", "r", encoding = "UTF-8")
```


```python
raw = text.read()
```


```python
type(raw)
```




    str




```python
len(raw)
```




    1302162



For the moment the raw text is simply a very long string. We cannot do much with it right now, we'll need to tokenize it ! Now let's define what is a tokenzation and apply it with nltk.
# Tokenization
From Stanford we can read : "a token is an instance of a sequence of characters in some particular document that are grouped together as a useful semantic unit for processing."
This means for example if we have a string like the following "doing nlp is very cool" we can tokenize into a list of five elements like (doing, nlp, is, very, cool).
Now let's see how to do it with nltk
nltk provides many tokenization methods such as sent_tokenize which tokenizes a long string into sentences and word_tokenize which tokenizes into words (unit).


```python
sentences = sent_tokenize(raw)
```


```python
sentences[10]
```




    'In both one and the other the high feeling of faith was enervated; and this deficiency was sensibly felt in a lowering of general tone, both in the domain of intellect and in that of practice.'




```python
len(sentences)
```




    9939



When we sentence tokenize the raw text it results in a total of 9939 sentences of various size.  
Let's tokenize into words.


```python
tokens = word_tokenize(raw)
```


```python
tokens[20]
```




    'life'




```python
len(tokens)
```




    256016



The raw text contains a total of 256 016 words. But this does not mean that we have 256K unique words.


```python
word_count = Counter(tokens)
word_count.most_common(10)
```




    [(',', 16331),
     ('the', 13674),
     ('of', 11174),
     ('.', 9721),
     ('and', 6175),
     ('to', 5680),
     ('in', 5120),
     ('a', 3870),
     ('was', 2915),
     ('[', 2538)]



We clearly see that the tokens are not always words. In our case the coma (,) is the most frequent token. This leads us to the notion of punctuation removal

# Normalization : Punctuaction removal & lower casing tokens
Punctuations are handy when reading texts, they have different meaning and help us understand better. But for the purpose of NLP we are interested in words that have meaning. So it would be useful to remove all the punctuations in this corpus.


```python
"?".isalpha()
```




    False




```python
"This".isalpha()
```




    True




```python
tokens = [word for word in tokens if word.isalpha()]
```


```python
len(tokens)
```




    209511



By removing the punctuations, the total of tokens dropped to 100K. 
It is also important to lower all the words so the word "The" and "the" are not considered as different tokens. If we choose to do so, there can be ambiguity on words such as "US" and "us". 


```python
tokens = [word.lower() for word in tokens]
```


```python
word_count = Counter(tokens)
word_count.most_common(10)
```




    [('the', 14598),
     ('of', 11201),
     ('and', 6316),
     ('to', 5758),
     ('in', 5507),
     ('a', 4029),
     ('was', 2918),
     ('that', 2460),
     ('it', 2267),
     ('he', 2084)]



# Stop words removals

Stop words are words of a language that do not have any particular meaning. Let's look at some examples.


```python
stopwords.words("english")[1:10]
```




    ['me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're"]




```python
tokens = [word for word in tokens if not word in stopwords.words("english")]
```


```python
len(tokens)
```




    103045




```python
word_count = Counter(tokens)
word_count.most_common(10)
```




    [('church', 1132),
     ('one', 729),
     ('would', 594),
     ('upon', 536),
     ('century', 483),
     ('many', 473),
     ('great', 458),
     ('life', 434),
     ('much', 411),
     ('could', 395)]



# Stemming or Lemmatization ?

Stemming and lemmatization are both techniques to normalize tokens. In English and most languages a single word can have multiple forms depending on the context it is used. For example the verb "to swear" can be take the form "swears", "swore", "sworn". When we tokenize a text each of these form are considered different but as the language user we know that all the forms refer to only one concept or idea.   



Stemming tries to normalize a word by taking reducing the word to its stem. For example the words "automate", "automatic", "automation", "automations" will be reduced to "automat" such that all these forms will refer to a single token "automat". Stemming can be used when the stem is constant accross all the possible forms but when the stem is not constant accross all the forms of the word lemmatization is the best option. Lemmatization aims to achieve a similar base "stem" for a word, but aims to derive the genuine dictionary root word, not just a trunctated version of the word. For example "was", "were", "is", "are" will be lemmatized to "be". 
Let's apply all this in python

## Stemming


```python
from nltk.stem import PorterStemmer, SnowballStemmer 
```


```python
porter = PorterStemmer()
```


```python
for stem in ["automatic", "automatically", "swears", 
             "swore", "presidential", "president"]:
    print(porter.stem(stem))
```

    automat
    automat
    swear
    swore
    presidenti
    presid
    


```python
snowball = SnowballStemmer("english")
```


```python
for stem in ["automatic", "automatically", "swears", 
             "swore", "presidential", "president"]:
    print(snowball.stem(stem))
```

    automat
    automat
    swear
    swore
    presidenti
    presid
    

Both stemmers look the same, SnowballStemmer has the advantage that it supports many languages.

## Lemmatization


```python
from nltk import WordNetLemmatizer
```

The WordNetLemmatizer uses the wordnet database to perform the lemmatization. Before you use that class you'll need to download wordnet with `nltk.download('wordnet')`.


```python
lemma = WordNetLemmatizer()
```


```python
for verb in ["was", "torn", "threw", "swore", "swears", "mapped"]:
    print(lemma.lemmatize(verb, pos = "v"))
```

    be
    tear
    throw
    swear
    swear
    map
    


```python
for verb in ["new", "mice", "countries", "expensive", 
             "leaves", "knives", "children", ]:
    print(lemma.lemmatize(verb, pos = "n"))
```

    new
    mouse
    country
    expensive
    leaf
    knife
    child
    

Which one should I use ?
Personally I think lemmatization is better than stemming because it keeps the meaning of the token without truncating it. However when using the lemmatizer we need to do the operation twice : do the first for verbs and the second for nouns.


```python
tokens[101]
```




    'enervated'




```python
tokens = [lemma.lemmatize(word, pos = "v") for word in tokens]
```


```python
tokens[101]
```




    'enervate'




```python
tokens[146]
```




    'royalists'




```python
tokens = [lemma.lemmatize(word, pos = "n") for word in tokens]
```


```python
tokens[146]
```




    'royalist'



# Put all the step in a function


```python
from nltk import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from nltk import WordNetLemmatizer
def clean_text(text):
    """
    This function takes as input a text on which several 
    NLTK algorithms will be applied in order to preprocess it
    """
    tokens = word_tokenize(text)
    # Remove the punctuations
    tokens = [word for word in tokens if word.isalpha()]
    # Lower the tokens
    tokens = [word.lower() for word in tokens]
    # Remove stopword
    tokens = [word for word in tokens if not word in stopwords.words("english")]
    # Lemmatize
    lemma = WordNetLemmatizer()
    tokens = [lemma.lemmatize(word, pos = "v") for word in tokens]
    tokens = [lemma.lemmatize(word, pos = "n") for word in tokens]
    return tokens
```


```python
test_it = clean_text(raw)
```


```python
test_it == tokens
```




    True



# Conclusion
Natural Language Processing is an interesting field to study. I am glad that I can do all the work above just in a week of study. I'm in my beginnings and I hope the coming weeks will be full of knowledge. 

# References:
I would like to thank the following for the material they provide that help me realize this first project :
- Hands on NLTK tutorials by hb20007 on [GitHub](https://github.com/hb20007/hands-on-nltk-tutorial)
- [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/), Dan Jurafsky and James H. Martin 
