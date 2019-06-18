---
authors:
- admin
categories: [Python, Pandas]
date: "2019-06-18"
draft: false
featured: true
image:
  caption: ""
  focal_point: ""
projects: []
subtitle: 
summary: Output a nice HTML summary of your Pandas dataframe
tags: [Python, Pandas]
title: Summarize your Pandas dataset

```python
import pandas as pd
import pandas_profiling
```


```python
loan_data = pd.read_csv("loan_data.csv")
```


```python
pandas_profiling.ProfileReport(loan_data)
```




<meta charset="UTF-8">

<style>

        .variablerow {
            border: 1px solid #e1e1e8;
            border-top: hidden;
            padding-top: 2em;
            padding-bottom: 2em;
            padding-left: 1em;
            padding-right: 1em;
        }

        .headerrow {
            border: 1px solid #e1e1e8;
            background-color: #f5f5f5;
            padding: 2em;
        }
        .namecol {
            margin-top: -1em;
            overflow-x: auto;
        }

        .dl-horizontal dt {
            text-align: left;
            padding-right: 1em;
            white-space: normal;
        }

        .dl-horizontal dd {
            margin-left: 0;
        }

        .ignore {
            opacity: 0.4;
        }

        .container.pandas-profiling {
            max-width:975px;
        }

        .col-md-12 {
            padding-left: 2em;
        }

        .indent {
            margin-left: 1em;
        }

        .center-img {
            margin-left: auto !important;
            margin-right: auto !important;
            display: block;
        }

        /* Table example_values */
            table.example_values {
                border: 0;
            }

            .example_values th {
                border: 0;
                padding: 0 ;
                color: #555;
                font-weight: 600;
            }

            .example_values tr, .example_values td{
                border: 0;
                padding: 0;
                color: #555;
            }

        /* STATS */
            table.stats {
                border: 0;
            }

            .stats th {
                border: 0;
                padding: 0 2em 0 0;
                color: #555;
                font-weight: 600;
            }

            .stats tr {
                border: 0;
            }

            .stats td{
                color: #555;
                padding: 1px;
                border: 0;
            }


        /* Sample table */
            table.sample {
                border: 0;
                margin-bottom: 2em;
                margin-left:1em;
            }
            .sample tr {
                border:0;
            }
            .sample td, .sample th{
                padding: 0.5em;
                white-space: nowrap;
                border: none;

            }

            .sample thead {
                border-top: 0;
                border-bottom: 2px solid #ddd;
            }

            .sample td {
                width:100%;
            }


        /* There is no good solution available to make the divs equal height and then center ... */
            .histogram {
                margin-top: 3em;
            }
        /* Freq table */

            table.freq {
                margin-bottom: 2em;
                border: 0;
            }
            table.freq th, table.freq tr, table.freq td {
                border: 0;
                padding: 0;
            }

            .freq thead {
                font-weight: 600;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

            }

            td.fillremaining{
                width:auto;
                max-width: none;
            }

            td.number, th.number {
                text-align:right ;
            }

        /* Freq mini */
            .freq.mini td{
                width: 50%;
                padding: 1px;
                font-size: 12px;

            }
            table.freq.mini {
                 width:100%;
            }
            .freq.mini th {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                max-width: 5em;
                font-weight: 400;
                text-align:right;
                padding-right: 0.5em;
            }

            .missing {
                color: #a94442;
            }
            .alert, .alert > th, .alert > td {
                color: #a94442;
            }


        /* Bars in tables */
            .freq .bar{
                float: left;
                width: 0;
                height: 100%;
                line-height: 20px;
                color: #fff;
                text-align: center;
                background-color: #337ab7;
                border-radius: 3px;
                margin-right: 4px;
            }
            .other .bar {
                background-color: #999;
            }
            .missing .bar{
                background-color: #a94442;
            }
            .tooltip-inner {
                width: 100%;
                white-space: nowrap;
                text-align:left;
            }

            .extrapadding{
                padding: 2em;
            }

            .pp-anchor{

            }

</style>

<div class="container pandas-profiling">
    <div class="row headerrow highlight">
        <h1>Overview</h1>
    </div>
    <div class="row variablerow">
    <div class="col-md-6 namecol">
        <p class="h4">Dataset info</p>
        <table class="stats" style="margin-left: 1em;">
            <tbody>
            <tr>
                <th>Number of variables</th>
                <td>14 </td>
            </tr>
            <tr>
                <th>Number of observations</th>
                <td>9578 </td>
            </tr>
            <tr>
                <th>Total Missing (%)</th>
                <td>0.0% </td>
            </tr>
            <tr>
                <th>Total size in memory</th>
                <td>1.0 MiB </td>
            </tr>
            <tr>
                <th>Average record size in memory</th>
                <td>112.0 B </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="col-md-6 namecol">
        <p class="h4">Variables types</p>
        <table class="stats" style="margin-left: 1em;">
            <tbody>
            <tr>
                <th>Numeric</th>
                <td>11 </td>
            </tr>
            <tr>
                <th>Categorical</th>
                <td>1 </td>
            </tr>
            <tr>
                <th>Boolean</th>
                <td>2 </td>
            </tr>
            <tr>
                <th>Date</th>
                <td>0 </td>
            </tr>
            <tr>
                <th>Text (Unique)</th>
                <td>0 </td>
            </tr>
            <tr>
                <th>Rejected</th>
                <td>0 </td>
            </tr>
            <tr>
                <th>Unsupported</th>
                <td>0 </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="col-md-12" style="padding-left: 1em;">
        
        <p class="h4">Warnings</p>
        <ul class="list-unstyled"><li><a href="#pp_var_delinq.2yrs"><code>delinq.2yrs</code></a> has 8458 / 88.3% zeros <span class="label label-info">Zeros</span></li><li><a href="#pp_var_inq.last.6mths"><code>inq.last.6mths</code></a> has 3637 / 38.0% zeros <span class="label label-info">Zeros</span></li><li><a href="#pp_var_pub.rec"><code>pub.rec</code></a> has 9019 / 94.2% zeros <span class="label label-info">Zeros</span></li><li><a href="#pp_var_revol.bal"><code>revol.bal</code></a> has 321 / 3.4% zeros <span class="label label-info">Zeros</span></li><li><a href="#pp_var_revol.util"><code>revol.util</code></a> has 297 / 3.1% zeros <span class="label label-info">Zeros</span></li> </ul>
    </div>
</div>
    <div class="row headerrow highlight">
        <h1>Variables</h1>
    </div>
    <div class="row variablerow">
    <div class="col-md-3 namecol">
        <p class="h4 pp-anchor" id="pp_var_credit.policy">credit.policy<br/>
            <small>Boolean</small>
        </p>
    </div><div class="col-md-6">
    <div class="row">
        <div class="col-sm-6">
            <table class="stats ">
                <tr class="">
                    <th>Distinct count</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>Unique (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (n)</th>
                    <td>0</td>
                </tr>
            </table>
        </div>
        <div class="col-sm-6">
            <table class="stats ">
                <tr>
                    <th>Mean</th>
                    <td>0.80497</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="col-md-3 collapse in" id="minifreqtable-3327088562867904741">
    <table class="mini freq">
        <tr class="">
    <th>1</th>
    <td>
        <div class="bar" style="width:100%" data-toggle="tooltip" data-placement="right" data-html="true"
             data-delay=500 title="Percentage: 80.5%">
            7710
        </div>
        
    </td>
</tr><tr class="">
    <th>0</th>
    <td>
        <div class="bar" style="width:24%" data-toggle="tooltip" data-placement="right" data-html="true"
             data-delay=500 title="Percentage: 19.5%">
            1868
        </div>
        
    </td>
</tr>
    </table>
</div>
<div class="col-md-12 text-right">
    <a role="button" data-toggle="collapse" data-target="#freqtable-3327088562867904741, #minifreqtable-3327088562867904741"
        aria-expanded="true" aria-controls="collapseExample">
        Toggle details
    </a>
</div>
<div class="col-md-12 extrapadding collapse" id="freqtable-3327088562867904741">
    
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">1</td>
        <td class="number">7710</td>
        <td class="number">80.5%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0</td>
        <td class="number">1868</td>
        <td class="number">19.5%</td>
        <td>
            <div class="bar" style="width:24%">&nbsp;</div>
        </td>
</tr>
</table>
</div>
</div><div class="row variablerow">
    <div class="col-md-3 namecol">
        <p class="h4 pp-anchor" id="pp_var_days.with.cr.line">days.with.cr.line<br/>
            <small>Numeric</small>
        </p>
    </div><div class="col-md-6">
    <div class="row">
        <div class="col-sm-6">
            <table class="stats ">
                <tr>
                    <th>Distinct count</th>
                    <td>2687</td>
                </tr>
                <tr>
                    <th>Unique (%)</th>
                    <td>28.1%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (n)</th>
                    <td>0</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (n)</th>
                    <td>0</td>
                </tr>
            </table>

        </div>
        <div class="col-sm-6">
            <table class="stats ">

                <tr>
                    <th>Mean</th>
                    <td>4560.8</td>
                </tr>
                <tr>
                    <th>Minimum</th>
                    <td>178.96</td>
                </tr>
                <tr>
                    <th>Maximum</th>
                    <td>17640</td>
                </tr>
                <tr class="ignore">
                    <th>Zeros (%)</th>
                    <td>0.0%</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="col-md-3 collapse in" id="minihistogram2479925782813965044">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABLCAYAAAA1fMjoAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAAd5JREFUeJzt3TGuElEYhuF/iC3QE2YRJm7BxAXZ3cTO0qXY29q7CwgLYGJhIWOh2Jh8guGeYfB5WsKcIZk3P5zi0I3jOFZj%2B/2%2B%2Br5vvSwzt9vtarvdNl3zRdPVflkul1X18wOvVqspboEZOR6P1ff97%2BempUkC6bquqqpWq9Vkgbx6%2BnT1e768f/MMd8Klzs9NS4vmK8KMTDJBbu1fpgFcwgSBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUDwEIc2tHLt4RCOCZo/EwQCgUAgEAgEAsHd/Uh3SiL3xASBQCAQCAQCgUAgEAgEAsHdbfM%2BEn/zNn8mCAQCgUAgEAgEAoFAIBAIbPPeGVvD98UEgcAEeQAOk3g%2BAvkP%2BRp3uUkCGcexqqqOx%2BMfr33/9rX17XCBl28/Xv2ez%2B9e32Tt83Nyfm5amiSQYRiqqqrv%2BymWp5H1h9tebxiGWq/Xt73oX3TjBFmeTqc6HA61XC6r67rWyzMz4zjWMAy12WxqsWi7rzRJIDAXtnkhEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCH4AiZ1STarqT8AAAAAASUVORK5CYII%3D">

</div>
<div class="col-md-12 text-right">
    <a role="button" data-toggle="collapse" data-target="#descriptives2479925782813965044,#minihistogram2479925782813965044"
       aria-expanded="false" aria-controls="collapseExample">
        Toggle details
    </a>
</div>
<div class="row collapse col-md-12" id="descriptives2479925782813965044">
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#quantiles2479925782813965044"
                                                  aria-controls="quantiles2479925782813965044" role="tab"
                                                  data-toggle="tab">Statistics</a></li>
        <li role="presentation"><a href="#histogram2479925782813965044" aria-controls="histogram2479925782813965044"
                                   role="tab" data-toggle="tab">Histogram</a></li>
        <li role="presentation"><a href="#common2479925782813965044" aria-controls="common2479925782813965044"
                                   role="tab" data-toggle="tab">Common Values</a></li>
        <li role="presentation"><a href="#extreme2479925782813965044" aria-controls="extreme2479925782813965044"
                                   role="tab" data-toggle="tab">Extreme Values</a></li>

    </ul>

    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active row" id="quantiles2479925782813965044">
            <div class="col-md-4 col-md-offset-1">
                <p class="h4">Quantile statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Minimum</th>
                        <td>178.96</td>
                    </tr>
                    <tr>
                        <th>5-th percentile</th>
                        <td>1320</td>
                    </tr>
                    <tr>
                        <th>Q1</th>
                        <td>2820</td>
                    </tr>
                    <tr>
                        <th>Median</th>
                        <td>4140</td>
                    </tr>
                    <tr>
                        <th>Q3</th>
                        <td>5730</td>
                    </tr>
                    <tr>
                        <th>95-th percentile</th>
                        <td>9330</td>
                    </tr>
                    <tr>
                        <th>Maximum</th>
                        <td>17640</td>
                    </tr>
                    <tr>
                        <th>Range</th>
                        <td>17461</td>
                    </tr>
                    <tr>
                        <th>Interquartile range</th>
                        <td>2910</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-4 col-md-offset-2">
                <p class="h4">Descriptive statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Standard deviation</th>
                        <td>2496.9</td>
                    </tr>
                    <tr>
                        <th>Coef of variation</th>
                        <td>0.54748</td>
                    </tr>
                    <tr>
                        <th>Kurtosis</th>
                        <td>1.9379</td>
                    </tr>
                    <tr>
                        <th>Mean</th>
                        <td>4560.8</td>
                    </tr>
                    <tr>
                        <th>MAD</th>
                        <td>1897.7</td>
                    </tr>
                    <tr class="">
                        <th>Skewness</th>
                        <td>1.1557</td>
                    </tr>
                    <tr>
                        <th>Sum</th>
                        <td>43683000</td>
                    </tr>
                    <tr>
                        <th>Variance</th>
                        <td>6234700</td>
                    </tr>
                    <tr>
                        <th>Memory size</th>
                        <td>74.9 KiB</td>
                    </tr>
                </table>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane col-md-8 col-md-offset-2" id="histogram2479925782813965044">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQCAYAAAByNR6YAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAIABJREFUeJzt3Xt0VOW9//HPSJIB0mQMxGQy3IweRTFIJfFAQOWiJlAutbQViqaktalULmLgqMhqRVuBo4jWUtFSVKpYqAdx0QVNCZbrScIlECVAKZUAQTIENEwChUmA5/eHh/1zSLhUd7KZ8H6tNWtl9n5m7%2B83OyEfnr1nj8sYYwQAAADbXOV0AQAAAM0NAQsAAMBmBCwAAACbEbAAAABsRsACAACwGQELAADAZgQsAAAAmxGwAAAAbEbAAgAAsBkBCwAAwGYELAAAAJsRsAAAAGxGwAIAALAZAQsAAMBmBCwAAACbEbAAAABsRsACAACwGQELAADAZgQsAAAAmxGwAAAAbEbAAgAAsBkBCwAAwGYELAAAAJsRsAAAAGxGwAIAALAZAQsAAMBmBCwAAACbEbAAAABsRsACAACwGQELAADAZgQsAAAAmxGwAAAAbEbAAgAAsBkBCwAAwGYELAAAAJuFbcCaM2eObr31VsXGxio2Nlbp6en6y1/%2BYq0PBoMaN26c4uPjFR0draFDh%2BrAgQMh29i/f7%2BGDBmi6OhoxcfHa/z48aqtrQ0Zs2bNGqWmpqply5a67rrr9NprrzVJfwAAIHyFbcBq3769ZsyYoc2bN2vz5s3q37%2B/vv3tb2v79u2SpAkTJmjJkiVauHCh1q9fr2PHjmnw4ME6ffq0JOn06dMaNGiQjh8/rvXr12vhwoVavHixJk6caO2jrKxM3/rWt3TnnXdq69ateuqppzR%2B/HgtXrzYkZ4BAEB4cBljjNNF2KVNmzZ64YUX9L3vfU/XXHON3n77bQ0fPlySdPDgQXXo0EHLly9XZmam/vKXv2jw4MEqLy%2BXz%2BeTJC1cuFDZ2dmqrKxUbGysnnjiCS1dulQ7d%2B609jF69Gh99NFHKiwsdKRHAABw%2BYtwugA7nD59Wu%2B9956OHz%2Bu9PR0FRcXq66uThkZGdYYn8%2BnlJQUFRQUKDMzU4WFhUpJSbHClSRlZmYqGAyquLhY/fr1U2FhYcg2zo6ZN2%2Be6urqFBkZ2WA9wWBQwWDQen7mzBl9/vnnatu2rVwul83dAwCAhhhjVFNTI5/Pp6uuatqTdmEdsLZt26b09HSdPHlS3/jGN7RkyRJ16dJFJSUlioqKUlxcXMj4xMRE%2Bf1%2BSZLf71diYmLI%2Bri4OEVFRV1wTGJiok6dOqUjR44oKSmpwbqmT5%2BuZ555xq42AQDA11BeXq727ds36T7DOmB17txZJSUlOnr0qBYvXqxRo0ZpzZo15x1vjAmZQWpoNuliY86eUb3QTNTkyZOVm5trPQ8EAurYsaPKy8sVGxt78cYAAMDXVl1drQ4dOigmJqbJ9x3WASsqKkr/8R//IUlKS0vTpk2b9Otf/1rDhw9XbW2tqqqqQmaxKisr1atXL0mS1%2BvVhg0bQrZXVVWluro6a9bK6/Vas1lf3kZERITatm173rrcbrfcbne95Wff8QgAAJqOE5fnhO27CBtijFEwGFRqaqoiIyOVn59vrauoqFBpaakVsNLT01VaWqqKigprzIoVK%2BR2u5WammqN%2BfI2zo5JS0s77/VXAAAAYTuD9dRTT2ngwIHq0KGDampqtHDhQq1evVp5eXnyeDx66KGHNHHiRLVt21Zt2rTRpEmT1LVrV91zzz2SpIyMDHXp0kVZWVl64YUX9Pnnn2vSpEnKycmxZplGjx6t2bNnKzc3Vzk5OSosLNS8efP0xz/%2B0cnWAQDAZS5sA9ahQ4eUlZWliooKeTwe3XrrrcrLy9O9994rSXrppZcUERGh%2B%2B%2B/XydOnNDdd9%2Btt956Sy1atJAktWjRQsuWLdMjjzyi3r17q1WrVho5cqRmzpxp7SM5OVnLly/XY489pt/%2B9rfy%2BXx65ZVX9N3vfteRngEAQHhoVvfBulxVV1fL4/EoEAhwDRYAAE3Eyb%2B/zeoaLAAAgMsBAQsAAMBmBCwAAACbEbAAAABsRsACAACwGQELAADAZgQsAAAAmxGwAAAAbBa2d3IHGlvalDynS/i3bH5ugNMlAAD%2BDzNYAAAANiNgAQAA2IyABQAAYDMCFgAAgM0IWAAAADYjYAEAANiMgAUAAGAzAhYAAIDNCFgAAAA2407uaDLhdmd0AAC%2BKmawAAAAbEbAAgAAsBkBCwAAwGYELAAAAJsRsAAAAGxGwAIAALAZAQsAAMBmBCwAAACbEbAAAABsRsACAACwGQELAADAZgQsAAAAmxGwAAAAbEbAAgAAsBkBCwAAwGYELAAAAJsRsAAAAGxGwAIAALAZAQsAAMBmBCwAAACbEbAAAABsRsACAACwGQELAADAZmEbsKZPn67bb79dMTExSkhI0H333addu3aFjOnbt69cLlfIY8SIESFjqqqqlJWVJY/HI4/Ho6ysLB09ejRkzLZt29SnTx%2B1atVK7dq107PPPitjTKP3CAAAwlPYBqw1a9ZozJgxKioqUn5%2Bvk6dOqWMjAwdP348ZFxOTo4qKiqsx%2Buvvx6yfuTIkSopKVFeXp7y8vJUUlKirKwsa311dbXuvfde%2BXw%2Bbdq0Sb/5zW80c%2BZMzZo1q0n6BAAA4SfC6QK%2Bqry8vJDnb775phISElRcXKy77rrLWt66dWt5vd4Gt7Fz507l5eWpqKhIPXr0kCTNnTtX6enp2rVrlzp37qwFCxbo5MmTeuutt%2BR2u5WSkqJ//OMfmjVrlnJzc%2BVyuRqvSQAAEJbCdgbrXIFAQJLUpk2bkOULFixQfHy8brnlFk2aNEk1NTXWusLCQnk8HitcSVLPnj3l8XhUUFBgjenTp4/cbrc1JjMzUwcPHtTevXsbsSMAABCuwnYG68uMMcrNzdUdd9yhlJQUa/kDDzyg5ORkeb1elZaWavLkyfroo4%2BUn58vSfL7/UpISKi3vYSEBPn9fmvMtddeG7I%2BMTHRWpecnFzv9cFgUMFg0HpeXV39tXsEAADho1kErLFjx%2Brjjz/W%2BvXrQ5bn5ORYX6ekpOiGG25QWlqatmzZou7du0tSg6f4jDEhy88dc/YC9/OdHpw%2BfbqeeeaZr9YMAAAIe2F/inDcuHFaunSpVq1apfbt219wbPfu3RUZGandu3dLkrxerw4dOlRv3OHDh61ZKq/Xa81mnVVZWSnp/89knWvy5MkKBALWo7y8/N/uCwAAhK%2BwDVjGGI0dO1bvv/%2B%2B/va3vzV4qu5c27dvV11dnZKSkiRJ6enpCgQC2rhxozVmw4YNCgQC6tWrlzVm7dq1qq2ttcasWLFCPp%2Bv3qnDs9xut2JjY0MeAADgyhG2AWvMmDF655139O677yomJkZ%2Bv19%2Bv18nTpyQJH3yySd69tlntXnzZu3du1fLly/X97//fd12223q3bu3JOnmm2/WgAEDlJOTo6KiIhUVFSknJ0eDBw9W586dJX1xGwe3263s7GyVlpZqyZIlmjZtGu8gBAAA5xW2AWvOnDkKBALq27evkpKSrMeiRYskSVFRUfrwww%2BVmZmpzp07a/z48crIyNDKlSvVokULazsLFixQ165dlZGRoYyMDN166616%2B%2B23rfUej0f5%2Bfk6cOCA0tLS9Mgjjyg3N1e5ublN3jMAAAgPLsMtyRtddXW1PB6PAoHAFX26MG1K3sUH4Svb/NwAp0sAgMuKk39/w3YGCwAA4HJFwAIAALAZAQsAAMBmBCwAAACbEbAAAABsRsACAACwGQELAADAZgQsAAAAmxGwAAAAbEbAAgAAsBkBCwAAwGYELAAAAJsRsAAAAGxGwAIAALAZAQsAAMBmBCwAAACbEbAAAABsRsACAACwGQELAADAZgQsAAAAmxGwAAAAbEbAAgAAsBkBCwAAwGYELAAAAJsRsAAAAGxGwAIAALAZAQsAAMBmBCwAAACbEbAAAABsRsACAACwGQELAADAZgQsAAAAmxGwAAAAbEbAAgAAsBkBCwAAwGYELAAAAJsRsAAAAGxGwAIAALAZAQsAAMBmBCwAAACbEbAAAABsRsACAACwWdgGrOnTp%2Bv2229XTEyMEhISdN9992nXrl0hY4LBoMaNG6f4%2BHhFR0dr6NChOnDgQMiY/fv3a8iQIYqOjlZ8fLzGjx%2Bv2trakDFr1qxRamqqWrZsqeuuu06vvfZao/cHAADCV9gGrDVr1mjMmDEqKipSfn6%2BTp06pYyMDB0/ftwaM2HCBC1ZskQLFy7U%2BvXrdezYMQ0ePFinT5%2BWJJ0%2BfVqDBg3S8ePHtX79ei1cuFCLFy/WxIkTrW2UlZXpW9/6lu68805t3bpVTz31lMaPH6/Fixc3ec8AACA8uIwxxuki7HD48GElJCRozZo1uuuuuxQIBHTNNdfo7bff1vDhwyVJBw8eVIcOHbR8%2BXJlZmbqL3/5iwYPHqzy8nL5fD5J0sKFC5Wdna3KykrFxsbqiSee0NKlS7Vz505rX6NHj9ZHH32kwsLCS6qturpaHo9HgUBAsbGx9jcfJtKm5DldQrO2%2BbkBTpcAAJcVJ//%2Bhu0M1rkCgYAkqU2bNpKk4uJi1dXVKSMjwxrj8/mUkpKigoICSVJhYaFSUlKscCVJmZmZCgaDKi4utsZ8eRtnx2zevFl1dXWN2hMAAAhPEU4XYAdjjHJzc3XHHXcoJSVFkuT3%2BxUVFaW4uLiQsYmJifL7/daYxMTEkPVxcXGKioq64JjExESdOnVKR44cUVJSUr16gsGggsGg9by6uvrrNwkAAMJGs5jBGjt2rD7%2B%2BGP98Y9/vOhYY4xcLpf1/MtfX%2BqYs2dVG3qt9MUF%2BB6Px3p06NDhkvoAAADNQ9gHrHHjxmnp0qVatWqV2rdvby33er2qra1VVVVVyPjKykprRsrr9VozVWdVVVWprq7ugmMqKysVERGhtm3bNljT5MmTFQgErEd5efnX7hMAAISPsA1YxhiNHTtW77//vv72t78pOTk5ZH1qaqoiIyOVn59vLauoqFBpaal69eolSUpPT1dpaakqKiqsMStWrJDb7VZqaqo15svbODsmLS1NkZGRDdbmdrsVGxsb8gAAAFeOsA1YY8aM0TvvvKN3331XMTEx8vv98vv9OnHihCTJ4/HooYce0sSJE/Xhhx9q69atevDBB9W1a1fdc889kqSMjAx16dJFWVlZ2rp1qz788ENNmjRJOTk5VigaPXq09u3bp9zcXO3cuVNvvPGG5s2bp0mTJjnWOwAAuLyFbcCaM2eOAoGA%2Bvbtq6SkJOuxaNEia8xLL72k%2B%2B67T/fff7969%2B6t1q1b689//rNatGghSWrRooWWLVumli1bqnfv3rr//vt13333aebMmdY2kpOTtXz5cq1evVrf/OY39ctf/lKvvPKKvvvd7zZ5zwAAIDw0m/tgXc64D9YXuA9W4%2BI%2BWAAQivtgAQAANCMELAAAAJsRsAAAAGxGwAIAALAZAQsAAMBmBCwAAACbEbAAAABsRsACAACwGQELAADAZgQsAAAAmxGwAAAAbEbAAgAAsBkBCwAAwGaOBKx33nlHJ0%2BedGLXAAAAjc6RgJWbmyuv16uHH35YGzdudKIEAACARuNIwDp48KDeeOMNVVRU6I477tAtt9yiF198UYcPH3aiHAAAAFs5ErAiIiI0bNgwLV26VPv379eoUaP0xhtvqH379ho2bJiWLVsmY4wTpQEAAHxtjl/k7vV6dffdd6tv375yuVzavHmzRo4cqRtuuEHr1q1zujwAAIB/m2MB68iRI3r55ZfVrVs39e7dW5WVlfrggw%2B0b98%2Bffrppxo8eLB%2B%2BMMfOlUeAADAVxbhxE6/853vaPny5UpOTtZPfvITjRo1Stdcc421/hvf%2BIYef/xxvfLKK06UBwAA8LU4ErBiY2O1cuVK3Xnnnecdk5SUpN27dzdhVQAAAPZwJGDNnz//omNcLpeuv/76JqgGAADAXo5cg/XYY49p9uzZ9Zb/9re/1cSJEx2oCAAAwD6OBKz33ntPPXv2rLc8PT1dixYtcqAiAAAA%2BzgSsI4cOaK4uLh6y2NjY3XkyBEHKgIAALCPIwHr%2Buuv11//%2Btd6y//6178qOTnZgYoAAADs48hF7hMmTNCECRP02WefqX///pKkDz/8UM8//7xmzpzpREkAAAC2cSRg5eTk6OTJk5o2bZqefvppSVL79u31yiuv6Mc//rETJQEAANjGkYAlSePGjdO4ceNUUVGhVq1a6eqrr3aqFAAAAFs5FrDOSkpKcroEAAAAWzlykfvhw4f1ox/9SB07dlTLli0VFRUV8gAAAAhnjsxgZWdn65NPPtF//dd/KSkpSS6Xy4kyAAAAGoUjAWvt2rVau3atbrvtNid2DwAA0KgcOUXYvn17Zq0AAECz5UjAeumllzR58mQdOHDAid0DAAA0KkdOEWZlZammpkadOnVSbGysIiMjQ9ZXVlY6URYAAIAtHAlYM2bMcGK3AAAATcKRgPXQQw85sVsAAIAm4cg1WJK0d%2B9eTZ06VVlZWdYpwRUrVmjnzp1OlQQAAGALRwLWunXrdMstt2jNmjX605/%2BpGPHjkmStmzZol/84hdOlAQAAGAbRwLWE088oalTp2rVqlUhd27v37%2B/ioqKnCgJAADANo4ErI8//ljf%2B9736i1PSEjQ4cOHHagIAADAPo4ErKuvvlp%2Bv7/e8pKSErVr186BigAAAOzjSMAaMWKEnnzySR0%2BfNi6o/uGDRs0adIkPfjgg5e8nbVr12rIkCHy%2BXxyuVz64IMPQtZnZ2fL5XKFPHr27BkyJhgMaty4cYqPj1d0dLSGDh1a7wao%2B/fv15AhQxQdHa34%2BHiNHz9etbW1X7F7AADQ3DkSsKZNmyav16ukpCQdO3ZMXbp0Ua9evXT77bfr5z//%2BSVv5/jx4%2BrWrZtmz5593jEDBgxQRUWF9Vi%2BfHnI%2BgkTJmjJkiVauHCh1q9fr2PHjmnw4ME6ffq0JOn06dMaNGiQjh8/rvXr12vhwoVavHixJk6c%2BNWaBwAAzZ4j98GKiorSokWL9I9//ENbtmzRmTNn1L17d910003/1nYGDhyogQMHXnCM2%2B2W1%2BttcF0gENC8efP09ttv65577pEkvfPOO%2BrQoYNWrlypzMxMrVixQjt27FB5ebl8Pp8k6cUXX1R2draee%2B45xcbG/ls1AwCA5s%2BRgHXWjTfeqBtvvLFR97F69WolJCTo6quvVp8%2BffTcc88pISFBklRcXKy6ujplZGRY430%2Bn1JSUlRQUKDMzEwVFhYqJSXFCleSlJmZqWAwqOLiYvXr16/ePoPBoILBoPW8urq6ETsEAACXG0cC1k9/%2BtMLrv/d735ny34GDhyo73//%2B%2BrUqZPKysr085//XP3791dxcbHcbrf8fr%2BioqIUFxcX8rrExETrIny/36/ExMSQ9XFxcYqKimrwQn1Jmj59up555hlbegAAAOHHkYBVUVER8ryurk7bt29XTU2N7rrrLtv2M3z4cOvrlJQUpaWlqVOnTlq2bJmGDRt23tcZY6yL7yWFfH2%2BMV82efJk5ebmWs%2Brq6vVoUOHr9ICAAAIQ44ErD//%2Bc/1lp06dUo/%2B9nPdPPNNzfafpOSktSpUyft3r1bkuT1elVbW6uqqqqQWazKykr16tXLGrNhw4aQ7VRVVamurq7ezNZZbrdbbre7kboAGpY2Jc/pEi7Z5ucGOF0CADQqxz6L8FwRERGaNGmSXnjhhUbbx2effaby8nIlJSVJklJTUxUZGan8/HxrTEVFhUpLS62AlZ6ertLS0pBZtxUrVsjtdis1NbXRagUAAOHL0Yvcz7Vnzx7V1dVd8vhjx47pn//8p/W8rKxMJSUlatOmjdq0aaOpU6fqu9/9rpKSkrR371499dRTio%2BP13e%2B8x1Jksfj0UMPPaSJEyeqbdu2atOmjSZNmqSuXbta7yrMyMhQly5dlJWVpRdeeEGff/65Jk2apJycHN5BCAAAGuRIwHr88cdDnhtjVFFRoaVLl%2BqBBx645O1s3rw55F18Z697GjVqlObMmaNt27bpD3/4g44ePaqkpCT169dPixYtUkxMjPWal156SREREbr//vt14sQJ3X333XrrrbfUokULSVKLFi20bNkyPfLII%2Brdu7datWqlkSNHaubMmV/nWwAAAJoxlzHGNPVO77zzzpDnV111la655hr1799fOTk5ioyMbOqSGlV1dbU8Ho8CgcAVPesVTtcIoXFxDRaApuDk319HZrDWrVvnxG4BAACaxGVzkTsAAEBz4cgM1u23337ee0ida%2BPGjY1cDQAAgL0cCVj9%2BvXT66%2B/rhtvvFHp6emSpKKiIu3atUsPP/ww95ACAABhzZGAdfToUY0ZM0bTpk0LWT5lyhQdOnRIv//9750oCwAAwBaOXIP1pz/9ST/60Y/qLc/OztZ7773nQEUAAAD2cSRgud1uFRQU1FteUFDA6UEAABD2HDlFOH78eI0ePVpbt25Vz549JX1xDdbcuXP11FNPOVESAACAbRwJWFOmTFFycrJ%2B/etf64033pAk3XzzzZo7d65GjhzpREkAAAC2ceyzCEeOHEmYAgAAzZJjNxqtrq7WW2%2B9pV/84heqqqqSJH300UeqqKhwqiQAAABbODKDVVpaqnvuuUetW7dWeXm5srOzFRcXpz/96U86cOCA5s%2Bf70RZAAAAtnBkBuuxxx7TyJEj9cknn6hly5bW8kGDBmnt2rVOlAQAAGAbR2awNm3apDlz5tT7uJx27dpxihAAAIQ9R2awoqKidOzYsXrLd%2B/erfj4eAcqAgAAsI8jAWvo0KH65S9/qVOnTkmSXC6XPv30Uz355JMaNmyYEyUBAADYxpGA9eKLL%2BrgwYPyer06ceKE%2Bvfvr%2Buuu04tW7as9/mEAAAA4caRa7A8Ho8KCgqUn5%2BvLVu26MyZM%2BrevbsyMzPrXZcFAAAQbpo8YNXV1elb3/qWXn31VWVkZCgjI6OpSwAAAGhUTX6KMDIyUlu3bmWmCgAANFuOXIP14IMP6s0333Ri1wAAAI3Osc8inD17tlauXKm0tDRFR0eHrHv%2B%2BecdqgoAAODrcyRgFRcX69Zbb5UkffzxxyHrOHUIAADCXZMGrD179ig5OVnr1q1ryt0CAAA0qSa9BuuGG27Q4cOHrefDhw/XoUOHmrIEAACARtekAcsYE/J8%2BfLlOn78eFOWAAAA0OgceRchAABAc9akAcvlctW7iJ2L2gEAQHPTpBe5G2OUnZ0tt9stSTp58qRGjx5d7zYN77//flOWBQAAYKsmDVijRo0Kef7ggw825e4BAACaRJMGLO7ebr%2B0KXlOlwAAAM7BRe4AAAA2I2ABAADYjIAFAABgMwIWAACAzQhYAAAANiNgAQAA2IyABQAAYDMCFgAAgM0IWAAAADYjYAEAANiMgAUAAGCzsA5Ya9eu1ZAhQ%2BTz%2BeRyufTBBx%2BErDfGaOrUqfL5fGrVqpX69u2r7du3h4ypqqpSVlaWPB6PPB6PsrKydPTo0ZAx27ZtU58%2BfdSqVSu1a9dOzz77rIwxjd4fAAAIT2EdsI4fP65u3bpp9uzZDa5//vnnNWvWLM2ePVubNm2S1%2BvVvffeq5qaGmvMyJEjVVJSory8POXl5amkpERZWVnW%2Burqat17773y%2BXzatGmTfvOb32jmzJmaNWtWo/cHAADCU4TTBXwdAwcO1MCBAxtcZ4zRyy%2B/rClTpmjYsGGSpPnz5ysxMVHvvvuuHn74Ye3cuVN5eXkqKipSjx49JElz585Venq6du3apc6dO2vBggU6efKk3nrrLbndbqWkpOgf//iHZs2apdzcXLlcribrFwAAhIewnsG6kLKyMvn9fmVkZFjL3G63%2BvTpo4KCAklSYWGhPB6PFa4kqWfPnvJ4PCFj%2BvTpI7fbbY3JzMzUwYMHtXfv3gb3HQwGVV1dHfIAAABXjmYbsPx%2BvyQpMTExZHliYqK1zu/3KyEhod5rExISQsY0tI0v7%2BNc06dPt67p8ng86tChw9drBgAAhJVmG7DOOvcUnjEmZFlDp/guNubsBe7nOz04efJkBQIB61FeXv6V6wcAAOEnrK/BuhCv1yvpi1mmpKQka3llZaU1A%2BX1enXo0KF6rz18%2BHDImHNnqiorKyXVnx07y%2B12h5xSBAAAV5ZmO4OVnJwsr9er/Px8a1ltba3WrFmjXr16SZLS09MVCAS0ceNGa8yGDRsUCARCxqxdu1a1tbXWmBUrVsjn8%2Bnaa69tmmYAAEBYCeuAdezYMZWUlKikpETSFxe2l5SUaP/%2B/XK5XJowYYKmTZumJUuWqLS0VNnZ2WrdurVGjhwpSbr55ps1YMAA5eTkqKioSEVFRcrJydHgwYPVuXNnSV/cxsHtdis7O1ulpaVasmSJpk2bxjsIAQDAeYX1KcLNmzerX79%2B1vPc3FxJ0qhRo/TWW2/p8ccf14kTJ/TII4%2BoqqpKPXr00IoVKxQTE2O9ZsGCBRo/frz1bsOhQ4eG3FfL4/EoPz9fY8aMUVpamuLi4pSbm2vtCwAA4Fwuwy3JG111dbU8Ho8CgYBiY2Nt3XbalDxbtwc0hc3PDXC6BABXgMb8%2B3sxYX2KEAAA4HJEwAIAALAZAQsAAMBmBCwAAACbEbAAAABsRsACAACwGQELAADAZgQsAAAAmxGwAAAAbEbAAgAAsBkBCwAAwGYELAAAAJsRsAAAAGxGwAIAALAZAQsAAMBmBCwAAACbEbAAAABsRsACAACwGQELAADAZgQsAAAAmxGwAAAAbBbhdAEArjxpU/KcLuHfsvm5AU6XACDMMIMFAABgMwIWAACAzQhYAAAANiNgAQAA2IyABQAAYDMCFgAAgM0IWAAAADYjYAEAANiMgAUAAGAzAhYAAIDNCFgAAAA2I2ABAADYjIAFAABgMwIWAACAzQhYAAAANiNgAQAA2IyABQAAYDMCFgAAgM0IWAAAADYjYAEAANisWQesqVOnyuVyhTy8Xq%2B13hijqVOnyufzqVWrVurbt6%2B2b98eso2qqiplZWXJ4/HI4/EoKyuwYDdiAAATOUlEQVRLR48ebepWAABAGGnWAUuSbrnlFlVUVFiPbdu2Weuef/55zZo1S7Nnz9amTZvk9Xp17733qqamxhozcuRIlZSUKC8vT3l5eSopKVFWVpYTrQAAgDAR4XQBjS0iIiJk1uosY4xefvllTZkyRcOGDZMkzZ8/X4mJiXr33Xf18MMPa%2BfOncrLy1NRUZF69OghSZo7d67S09O1a9cude7cuUl7AQAA4aHZz2Dt3r1bPp9PycnJGjFihPbs2SNJKisrk9/vV0ZGhjXW7XarT58%2BKigokCQVFhbK4/FY4UqSevbsKY/HY40BAAA4V7OewerRo4f%2B8Ic/6MYbb9ShQ4f0q1/9Sr169dL27dvl9/slSYmJiSGvSUxM1L59%2ByRJfr9fCQkJ9babkJBgvb4hwWBQwWDQel5dXW1HOwAAIEw064A1cOBA6%2BuuXbsqPT1d119/vebPn6%2BePXtKklwuV8hrjDEhy85d39CYc02fPl3PPPPM1y0fAACEqWZ/ivDLoqOj1bVrV%2B3evdu6LuvcmajKykprVsvr9erQoUP1tnP48OF6M19fNnnyZAUCAetRXl5uYxcAAOByd0UFrGAwqJ07dyopKUnJycnyer3Kz8%2B31tfW1mrNmjXq1auXJCk9PV2BQEAbN260xmzYsEGBQMAa0xC3263Y2NiQBwAAuHI061OEkyZN0pAhQ9SxY0dVVlbqV7/6laqrqzVq1Ci5XC5NmDBB06ZN0w033KAbbrhB06ZNU%2BvWrTVy5EhJ0s0336wBAwYoJydHr7/%2BuiTppz/9qQYPHsw7CAEAwHk164B14MAB/eAHP9CRI0d0zTXXqGfPnioqKlKnTp0kSY8//rhOnDihRx55RFVVVerRo4dWrFihmJgYaxsLFizQ%2BPHjrXcbDh06VLNnz3akHwAAEB5cxhjjdBHNXXV1tTwejwKBgO2nC9Om5Nm6PQD1bX5ugNMlAPgKGvPv78VcUddgAQAANAUCFgAAgM0IWAAAADYjYAEAANiMgAUAAGAzAhYAAIDNCFgAAAA2I2ABAADYjIAFAABgMwIWAACAzQhYAAAANiNgAQAA2IyABQAAYDMCFgAAgM0inC4AAC53aVPynC7h37L5uQFOlwBc8ZjBAgAAsBkBCwAAwGYELAAAAJsRsAAAAGxGwAIAALAZAQsAAMBmBCwAAACbEbAAAABsRsACAACwGQELAADAZgQsAAAAmxGwAAAAbEbAAgAAsBkBCwAAwGYELAAAAJsRsAAAAGwW4XQBAAB7pU3Jc7qES7b5uQFOlwA0CmawAAAAbEbAAgAAsBkBCwAAwGYELAAAAJsRsAAAAGxGwAIAALAZt2kAADgmnG4pIXFbCVw6ZrAAAABsRsACAACwGQELAADAZgQsAAAAmxGwLtGrr76q5ORktWzZUqmpqVq3bp3TJQEAgMsU7yK8BIsWLdKECRP06quvqnfv3nr99dc1cOBA7dixQx07dnS6PABAE%2BFdj7hUzGBdglmzZumhhx7ST37yE9188816%2BeWX1aFDB82ZM8fp0gAAwGWIGayLqK2tVXFxsZ588smQ5RkZGSooKGjwNcFgUMFg0HoeCAQkSdXV1bbXdzp43PZtAgCah9smLXa6hEu25hf32r7Ns393jTG2b/tiCFgXceTIEZ0%2BfVqJiYkhyxMTE%2BX3%2Bxt8zfTp0/XMM8/UW96hQ4dGqREAgHDnebHxtl1TUyOPx9N4O2gAAesSuVyukOfGmHrLzpo8ebJyc3Ot52fOnNHnn3%2Butm3bnvc1F1NdXa0OHTqovLxcsbGxX2kb4epK7f1K7Vu6cnu/UvuWrtzer9S%2Bpabp3Rijmpoa%2BXy%2BRtn%2BhRCwLiI%2BPl4tWrSoN1tVWVlZb1brLLfbLbfbHbLs6quvtqWe2NjYK%2B6X8KwrtfcrtW/pyu39Su1bunJ7v1L7lhq/96aeuTqLi9wvIioqSqmpqcrPzw9Znp%2Bfr169ejlUFQAAuJwxg3UJcnNzlZWVpbS0NKWnp%2Bt3v/ud9u/fr9GjRztdGgAAuAy1mDp16lSni7jcpaSkqG3btpo2bZpmzpypEydO6O2331a3bt2atI4WLVqob9%2B%2Bioi48nLxldr7ldq3dOX2fqX2LV25vV%2BpfUvNu3eXceK9iwAAAM0Y12ABAADYjIAFAABgMwIWAACAzQhYAAAANiNghYlXX31VycnJatmypVJTU7Vu3TqnS7pk06dP1%2B23366YmBglJCTovvvu065du0LG9O3bVy6XK%2BQxYsSIkDFVVVXKysqSx%2BORx%2BNRVlaWjh49GjJm27Zt6tOnj1q1aqV27drp2WefdeQzqM6aOnVqvb68Xq%2B13hijqVOnyufzqVWrVurbt6%2B2b98eso1w7Pvaa6%2Bt17fL5dKYMWMkNa/jvXbtWg0ZMkQ%2Bn08ul0sffPBByPqmPMaLFy9Wly5d5Ha71aVLFy1ZsqRxmtaF%2B66rq9MTTzyhrl27Kjo6Wj6fTz/84Q918ODBkG009HNy7ue%2B7t%2B/X0OGDFF0dLTi4%2BM1fvx41dbWhoxZs2aNUlNT1bJlS1133XV67bXXGq1v6eLHPDs7u15fPXv2DBkTDAY1btw4xcfHKzo6WkOHDtWBAwdCxlxuvV%2Bs74Z%2B510ul1544QVrTLge86/E4LK3cOFCExkZaebOnWt27NhhHn30URMdHW327dvndGmXJDMz07z55pumtLTUlJSUmEGDBpmOHTuaY8eOWWP69OljcnJyTEVFhfU4evRoyHYGDBhgUlJSTEFBgSkoKDApKSlm8ODB1vpAIGASExPNiBEjzLZt28zixYtNTEyMmTlzZpP1eq6nn37a3HLLLSF9VVZWWutnzJhhYmJizOLFi822bdvM8OHDTVJSkqmurrbGhGPflZWVIT3n5%2BcbSWbVqlXGmOZ1vJcvX26mTJliFi9ebCSZJUuWhKxvqmNcUFBgWrRoYaZNm2Z27txppk2bZiIiIkxRUVGT93306FFzzz33mEWLFpm///3vprCw0PTo0cOkpqaGbKNTp07m2WefDfk5qKmpsdafOnXKpKSkmH79%2BpktW7aY/Px84/P5zNixY60xe/bsMa1btzaPPvqo2bFjh5k7d66JjIw0//M//9MofV%2Bsd2OMGTVqlBkwYEBIX5999lnImNGjR5t27dqZ/Px8s2XLFtOvXz/TrVs3c%2BrUqcu294v1/eV%2BKyoqzBtvvGFcLpf55JNPrDHhesy/CgJWGPjP//xPM3r06JBlN910k3nyyScdqujrqaysNJLMmjVrrGV9%2BvQxjz766Hlfs2PHDiMp5I9FYWGhkWT%2B/ve/G2OMefXVV43H4zEnT560xkyfPt34fD5z5syZRujk4p5%2B%2BmnTrVu3BtedOXPGeL1eM2PGDGvZyZMnjcfjMa%2B99poxJnz7Ptejjz5qrr/%2Beque5nq8z/2j05TH%2BP777zcDBgwIqSczM9OMGDHC/kbP0dAf23Nt3LjRSAr5j2GnTp3MSy%2B9dN7XLF%2B%2B3Fx11VXm008/tZb98Y9/NG632wQCAWOMMY8//ri56aabQl738MMPm549e36VVv5t5wtY3/72t8/7mqNHj5rIyEizcOFCa9mnn35qrrrqKpOXl2eMufx7v5Rj/u1vf9v0798/ZFlzOOaXilOEl7na2loVFxcrIyMjZHlGRoYKCgocqurrCQQCkqQ2bdqELF%2BwYIHi4%2BN1yy23aNKkSaqpqbHWFRYWyuPxqEePHtaynj17yuPxWN%2BHwsJC9enTJ%2BRzIDMzM3Xw4EHt3bu3ETu6sN27d8vn8yk5OVkjRozQnj17JEllZWXy%2B/0hx9btdqtPnz4hPYVr32fV1tbqnXfe0Y9//OOQDztvrsf7y5ryGBcWFtb7dyIzM/Oy%2BXciEAjI5XLV%2B1zW//7v/1bbtm31zW9%2BU88991zIqaDCwkKlpKSEfFBvZmamgsGgiouLrTEN9b1582bV1dU1YkcXtnr1aiUkJOjGG29UTk6OKisrrXXFxcWqq6sLqdvn8yklJSXkmIdr75J06NAhLVu2TA899FC9dc31mJ%2Br%2Bd06tZk5cuSITp8%2BXe%2BDpRMTE%2Bt9AHU4MMYoNzdXd9xxh1JSUqzlDzzwgJKTk%2BX1elVaWqrJkyfro48%2Bsj4D0u/3KyEhod72EhISrO%2BD3%2B/XtddeG7L%2B7PfN7/crOTm5kbo6vx49eugPf/iDbrzxRh06dEi/%2BtWv1KtXL23fvt2qu6Fju2/fPqvucOz7yz744AMdPXpU2dnZ1rLmerzP1ZTH2O/3X7b/Tpw8eVJPPvmkRo4cGfKhvo8%2B%2Bqi6d%2B%2BuuLg4bdy4UZMnT1ZZWZl%2B//vfS1KDPcXFxSkqKirke9NQ36dOndKRI0eUlJTUyN3VN3DgQH3/%2B99Xp06dVFZWpp///Ofq37%2B/iouL5Xa75ff7FRUVpbi4uHp1X6ivcOj9rPnz5ysmJkbDhg0LWd5cj3lDCFhh4sv/85e%2BCCrnLgsHY8eO1ccff6z169eHLM/JybG%2BTklJ0Q033KC0tDRt2bJF3bt3l1T/eyDV/z409H0632ubwsCBA62vu3btqvT0dF1//fWaP3%2B%2BddHrxY5tOPb9ZfPmzdPAgQND/kfaXI/3%2BTTVMb4c/52oq6vTiBEjdObMGb366qsh6x577DHr61tvvVVxcXH63ve%2BZ81wSOH5czB8%2BHDr65SUFKWlpalTp05atmxZvcDxZc3pd/%2BNN97QAw88oJYtW4Ysb67HvCGcIrzMxcfHq0WLFvX%2BF1pZWVkvwV/uxo0bp6VLl2rVqlVq3779Bcd2795dkZGR2r17tyTJ6/Xq0KFD9cYdPnzY%2Bj54vd4Gv09S/RkEp0RHR6tr167avXu39W7CCx3bcO973759WrlypX7yk59ccFxzPd5NeYzPN8bJ70VdXZ3uv/9%2BlZWVKT8/P2T2qiFn/9Pxz3/%2BU1LDPVVVVamuru6ifUdERFh/sJ2WlJSkTp06hfx819bWqqqqKmTcuT8X4dr7unXrtGvXrov%2B3kvN95hLBKzLXlRUlFJTU61TJ2fl5%2BerV69eDlX17zHGaOzYsXr//ff1t7/97ZJO3Wzfvl11dXXWVG96eroCgYA2btxojdmwYYMCgYD1fUhPT9fatWtDzuevWLFCPp%2Bv3ukVpwSDQe3cuVNJSUnWKbIvH9va2lqtWbMmpKdw7vvNN99UQkKCBg0adMFxzfV4N%2BUxTk9Pr/fvxIoVKxz7d%2BJsuNq9e7dWrlx5SX/4tm7dKkkhPwelpaWqqKiwxqxYsUJut1upqanWmIb6TktLU2RkpF3tfC2fffaZysvLrb5SU1MVGRkZUndFRYVKS0tDjnm49j5v3jylpqaqW7duFx3bXI%2B5JG7TEA7O3qZh3rx5ZseOHWbChAkmOjra7N271%2BnSLsnPfvYz4/F4zOrVq0Pemvuvf/3LGGPMP//5T/PMM8%2BYTZs2mbKyMrNs2TJz0003mdtuu816y7IxX7yV/dZbbzWFhYWmsLDQdO3aNeSt7EePHjWJiYnmBz/4gdm2bZt5//33TWxsrKO3K5g4caJZvXq12bNnjykqKjKDBw82MTEx1rGbMWOG8Xg85v333zfbtm0zP/jBDxp8C3%2B49W2MMadPnzYdO3Y0TzzxRMjy5na8a2pqzNatW83WrVuNJDNr1iyzdetW691yTXWM//d//9e0aNHCzJgxw%2BzcudPMmDGjUW/TcKG%2B6%2BrqzNChQ0379u1NSUlJyO99MBg0xnxxW4mzr9mzZ49ZtGiR8fl8ZujQodY%2Bzr5l/%2B677zZbtmwxK1euNO3bt2/wLfuPPfaY2bFjh5k3b16jv2X/Qr3X1NSYiRMnmoKCAlNWVmZWrVpl0tPTTbt27UKO%2BejRo0379u3NypUrzZYtW0z//v0bvE3D5dT7xX7WjfniliKtW7c2c%2BbMqff6cD7mXwUBK0z89re/NZ06dTJRUVGme/fuIbc4uNxJavDx5ptvGmOM2b9/v7nrrrtMmzZtTFRUlLn%2B%2BuvN%2BPHj69035rPPPjMPPPCAiYmJMTExMeaBBx4wVVVVIWM%2B/vhjc%2Beddxq32228Xq%2BZOnWqo7cqOHvPo8jISOPz%2BcywYcPM9u3brfVnzpwxTz/9tPF6vcbtdpu77rrLbNu2LWQb4di3Mcb89a9/NZLMrl27QpY3t%2BO9atWqBn%2B%2BR40aZYxp2mP83nvvmc6dO5vIyEhz0003mcWLFzvSd1lZ2Xl/78/eC624uNj06NHDeDwe07JlS9O5c2fz9NNPm%2BPHj4fsZ9%2B%2BfWbQoEGmVatWpk2bNmbs2LEht6swxpjVq1eb2267zURFRZlrr722wT/uTdX7v/71L5ORkWGuueYaExkZaTp27GhGjRpl9u/fH7KNEydOmLFjx5o2bdqYVq1amcGDB9cbc7n1frGfdWOMef31102rVq3q3dfOmPA%2B5l%2BFyxgHb/cMAADQDHENFgAAgM0IWAAAADYjYAEAANiMgAUAAGAzAhYAAIDNCFgAAAA2I2ABAADYjIAFAABgMwIWAACAzQhYAAAANiNgAQAA2IyABQAAYDMCFgAAgM0IWAAAADYjYAEAANiMgAUAAGAzAhYAAIDNCFgAAAA2%2B3/0geVSju5aDwAAAABJRU5ErkJggg%3D%3D"/>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12" id="common2479925782813965044">
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">3660.0</td>
        <td class="number">50</td>
        <td class="number">0.5%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">3630.0</td>
        <td class="number">48</td>
        <td class="number">0.5%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">3990.0</td>
        <td class="number">46</td>
        <td class="number">0.5%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">4410.0</td>
        <td class="number">44</td>
        <td class="number">0.5%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">3600.0</td>
        <td class="number">41</td>
        <td class="number">0.4%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">2550.0</td>
        <td class="number">38</td>
        <td class="number">0.4%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">4080.0</td>
        <td class="number">38</td>
        <td class="number">0.4%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">3690.0</td>
        <td class="number">37</td>
        <td class="number">0.4%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">1800.0</td>
        <td class="number">37</td>
        <td class="number">0.4%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">4020.0</td>
        <td class="number">35</td>
        <td class="number">0.4%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="other">
        <td class="fillremaining">Other values (2677)</td>
        <td class="number">9164</td>
        <td class="number">95.7%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12"  id="extreme2479925782813965044">
            <p class="h4">Minimum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">178.95833330000002</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:34%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">180.04166669999998</td>
        <td class="number">3</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">181.0</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:34%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">183.04166669999998</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:34%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">209.04166669999998</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:34%">&nbsp;</div>
        </td>
</tr>
</table>
            <p class="h4">Maximum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">16260.0</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">16350.0</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">16652.0</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">17616.0</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">17639.95833</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
    </div>
</div>
</div><div class="row variablerow">
    <div class="col-md-3 namecol">
        <p class="h4 pp-anchor" id="pp_var_delinq.2yrs">delinq.2yrs<br/>
            <small>Numeric</small>
        </p>
    </div><div class="col-md-6">
    <div class="row">
        <div class="col-sm-6">
            <table class="stats ">
                <tr>
                    <th>Distinct count</th>
                    <td>11</td>
                </tr>
                <tr>
                    <th>Unique (%)</th>
                    <td>0.1%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (n)</th>
                    <td>0</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (n)</th>
                    <td>0</td>
                </tr>
            </table>

        </div>
        <div class="col-sm-6">
            <table class="stats ">

                <tr>
                    <th>Mean</th>
                    <td>0.16371</td>
                </tr>
                <tr>
                    <th>Minimum</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>Maximum</th>
                    <td>13</td>
                </tr>
                <tr class="alert">
                    <th>Zeros (%)</th>
                    <td>88.3%</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="col-md-3 collapse in" id="minihistogram-8059198228321611849">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABLCAYAAAA1fMjoAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAAa5JREFUeJzt1zGq1FAYhuE/l9sm0w%2BTRQhuQXBBdhfsLF2Kva29u5hhFpBgYeEcCx1BLnx4VU4cfJ42kO8EzltkaK216ux0OtU8z71nuXHH47EOh0PXzfuua9%2BN41hV3z54mqYtjsANWZal5nn%2BcW962iSQYRiqqmqapkeBPH94/%2BT3fXzz8q%2Bci3/b9d70dNd9EW6IQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgENxvMdpaq6qqZVkePfvy%2BdOT3/fs1bs/PtOv%2BPD6RZcdfna9J9d709MmgazrWlVV8zxvMf/bdm%2B3PsH/bV3X2u12XTeHtkGWl8ulzudzjeNYwzD0nufGtNZqXdfa7/d1d9f3r2CTQOBW%2BEmHQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIPgKdRVAcenbRsUAAAAASUVORK5CYII%3D">

</div>
<div class="col-md-12 text-right">
    <a role="button" data-toggle="collapse" data-target="#descriptives-8059198228321611849,#minihistogram-8059198228321611849"
       aria-expanded="false" aria-controls="collapseExample">
        Toggle details
    </a>
</div>
<div class="row collapse col-md-12" id="descriptives-8059198228321611849">
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#quantiles-8059198228321611849"
                                                  aria-controls="quantiles-8059198228321611849" role="tab"
                                                  data-toggle="tab">Statistics</a></li>
        <li role="presentation"><a href="#histogram-8059198228321611849" aria-controls="histogram-8059198228321611849"
                                   role="tab" data-toggle="tab">Histogram</a></li>
        <li role="presentation"><a href="#common-8059198228321611849" aria-controls="common-8059198228321611849"
                                   role="tab" data-toggle="tab">Common Values</a></li>
        <li role="presentation"><a href="#extreme-8059198228321611849" aria-controls="extreme-8059198228321611849"
                                   role="tab" data-toggle="tab">Extreme Values</a></li>

    </ul>

    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active row" id="quantiles-8059198228321611849">
            <div class="col-md-4 col-md-offset-1">
                <p class="h4">Quantile statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Minimum</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>5-th percentile</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Q1</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Median</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Q3</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>95-th percentile</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>Maximum</th>
                        <td>13</td>
                    </tr>
                    <tr>
                        <th>Range</th>
                        <td>13</td>
                    </tr>
                    <tr>
                        <th>Interquartile range</th>
                        <td>0</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-4 col-md-offset-2">
                <p class="h4">Descriptive statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Standard deviation</th>
                        <td>0.54621</td>
                    </tr>
                    <tr>
                        <th>Coef of variation</th>
                        <td>3.3365</td>
                    </tr>
                    <tr>
                        <th>Kurtosis</th>
                        <td>71.433</td>
                    </tr>
                    <tr>
                        <th>Mean</th>
                        <td>0.16371</td>
                    </tr>
                    <tr>
                        <th>MAD</th>
                        <td>0.28913</td>
                    </tr>
                    <tr class="">
                        <th>Skewness</th>
                        <td>6.0618</td>
                    </tr>
                    <tr>
                        <th>Sum</th>
                        <td>1568</td>
                    </tr>
                    <tr>
                        <th>Variance</th>
                        <td>0.29835</td>
                    </tr>
                    <tr>
                        <th>Memory size</th>
                        <td>74.9 KiB</td>
                    </tr>
                </table>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane col-md-8 col-md-offset-2" id="histogram-8059198228321611849">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQCAYAAAByNR6YAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAIABJREFUeJzt3X9U1HW%2Bx/EXoQzowqQoDJNYuMdSw8rAW6ilW4mtv67b7rotSrJ1uXolDdFSY2vdWqHMyJuUXrz9cDPT9pS7djODrAt6kRSU/JFHazPFH4Tu0oClgPi9f3gcd8LSrQ/zdeT5OGfOcb7z4Tvvmc4Oz/3Ol5kgy7IsAQAAwJjL7B4AAADgUkNgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGEZgAQAAGNbO7gHaglOnTunQoUMKDw9XUFCQ3eMAANAmWJal%2Bvp6ud1uXXaZf48pEVh%2BcOjQIcXGxto9BgAAbVJVVZW6devm1/sksPwgPDxc0un/wBERETZPAwBA21BXV6fY2Fjv72F/IrD84MzbghEREQQWAAB%2BZsfpOZzkDgAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBhf9hzgErPX2j3CBSufe6fdIwAA4BccwQIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADCMwAIAADAsYAPr5MmT%2Bu1vf6u4uDiFhYWpR48eeuyxx3Tq1CnvGsuyNGfOHLndboWFhWnIkCHauXOnz35qa2uVmpoqp9Mpp9Op1NRUffnllz5rtm/frsGDByssLExXXHGFHnvsMVmW5ZfHCQAAAk/ABtaTTz6pxYsXKz8/X7t27dK8efP01FNPaeHChd418%2BbNU15envLz87V582a5XC4NHTpU9fX13jUpKSmqrKzU2rVrtXbtWlVWVio1NdV7e11dnYYOHSq3263Nmzdr4cKFmj9/vvLy8vz6eAEAQOBoZ/cA39fGjRv1r//6rxoxYoQk6aqrrtJrr72m8vJySaePXi1YsEDZ2dm66667JElLly5VdHS0li9frokTJ2rXrl1au3atysrKdNNNN0mSlixZoqSkJO3evVvXXHONXn31VZ04cUIvv/yyHA6H4uPjtWfPHuXl5SkrK0tBQUH2PAEAAOCiFbBHsAYNGqR169Zpz549kqSPPvpIGzZs0PDhwyVJe/fuVXV1tZKTk70/43A4NHjwYJWWlko6HWlOp9MbV5J08803y%2Bl0%2BqwZPHiwHA6Hd82wYcN06NAhff755639MAEAQAAK2CNYM2fOlMfjUa9evRQcHKzm5mbNnTtXv/71ryVJ1dXVkqTo6Gifn4uOjta%2Bffu8a6KiolrsOyoqyvvz1dXVuuqqq1rs48xtcXFxLX6%2BoaFBDQ0N3ut1dXXf81ECAIBAFLBHsFauXKlly5Zp%2BfLl2rJli5YuXar58%2Bdr6dKlPuu%2B%2BRaeZVk%2B2871Ft/51pw5wf3b3h7Mzc31njTvdDoVGxv7zz04AAAQ0AI2sB588EHNmjVLd999t/r27avU1FRNmzZNubm5kiSXyyXp7JGsM2pqarxHoFwul7744osW%2Bz5y5IjPmnPtQ2p5dOyM2bNny%2BPxeC9VVVU/4JECAIBAE7CB9fXXX%2Buyy3zHDw4O9n5MQ1xcnFwul4qKiry3NzY2qri4WAMGDJAkJSUlyePxaNOmTd41H374oTwej8%2BakpISNTY2etcUFhbK7Xa3eOvwDIfDoYiICJ8LAABoOwI2sEaNGqW5c%2Bfq7bff1ueff65Vq1YpLy9PP/vZzySdfvsuMzNTOTk5WrVqlXbs2KG0tDR16NBBKSkpkqTevXvrzjvvVHp6usrKylRWVqb09HSNHDlS11xzjaTTH%2BPgcDiUlpamHTt2aNWqVcrJyeEvCAEAwLcK2JPcFy5cqEceeUSTJ09WTU2N3G63Jk6cqEcffdS75qGHHtLx48c1efJk1dbW6qabblJhYaHCw8O9a1599VVNnTrV%2B9eGo0ePVn5%2Bvvd2p9OpoqIiZWRkKDExUZ06dVJWVpaysrL892ABAEBACbL4SPJWV1dXJ6fTKY/HY/ztwsTstUb315rK595p9wgAgDakNX//nk/AvkUIAABwsSKwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADCOwAAAADAvowDp48KDGjx%2BvyMhIdejQQTfccIMqKiq8t1uWpTlz5sjtdissLExDhgzRzp07ffZRW1ur1NRUOZ1OOZ1Opaam6ssvv/RZs337dg0ePFhhYWG64oor9Nhjj8myLL88RgAAEHgCNrBqa2s1cOBAtW/fXu%2B8844%2B/vhjPf3007r88su9a%2BbNm6e8vDzl5%2Bdr8%2BbNcrlcGjp0qOrr671rUlJSVFlZqbVr12rt2rWqrKxUamqq9/a6ujoNHTpUbrdbmzdv1sKFCzV//nzl5eX59fECAIDA0c7uAb6vJ598UrGxsXrppZe826666irvvy3L0oIFC5Sdna277rpLkrR06VJFR0dr%2BfLlmjhxonbt2qW1a9eqrKxMN910kyRpyZIlSkpK0u7du3XNNdfo1Vdf1YkTJ/Tyyy/L4XAoPj5ee/bsUV5enrKyshQUFOTXxw0AAC5%2BAXsEa/Xq1UpMTNQvf/lLRUVFqV%2B/flqyZIn39r1796q6ulrJycnebQ6HQ4MHD1ZpaakkaePGjXI6nd64kqSbb75ZTqfTZ83gwYPlcDi8a4YNG6ZDhw7p888/P%2BdsDQ0Nqqur87kAAIC2I2AD67PPPtOiRYvUs2dPvfvuu5o0aZKmTp2qP/7xj5Kk6upqSVJ0dLTPz0VHR3tvq66uVlRUVIt9R0VF%2Baw51z7%2B8T6%2BKTc313tOl9PpVGxs7A94pAAAINAEbGCdOnVKN954o3JyctSvXz9NnDhR6enpWrRokc%2B6b76FZ1mWz7ZzvcV3vjVnTnD/trcHZ8%2BeLY/H471UVVX9cw8OAAAEtIANrJiYGPXp08dnW%2B/evbV//35JksvlktTyKFNNTY33CJTL5dIXX3zRYt9HjhzxWXOufUgtj46d4XA4FBER4XMBAABthy2BtWzZMp04ceIH7WPgwIHavXu3z7Y9e/boyiuvlCTFxcXJ5XKpqKjIe3tjY6OKi4s1YMAASVJSUpI8Ho82bdrkXfPhhx/K4/H4rCkpKVFjY6N3TWFhodxut89J9QAAAGfYElhZWVlyuVyaOHGiT9z8M6ZNm6aysjLl5OTo008/1fLly1VQUKCMjAxJp9%2B%2By8zMVE5OjlatWqUdO3YoLS1NHTp0UEpKiqTTR7zuvPNOpaenq6ysTGVlZUpPT9fIkSN1zTXXSDr9MQ4Oh0NpaWnasWOHVq1apZycHP6CEAAAfCtbAuvQoUN68cUXdfjwYQ0aNEjXXnutnn76aR05cuSC99G/f3%2BtWrVKr732muLj4/X4449rwYIFGjdunHfNQw89pMzMTE2ePFmJiYk6ePCgCgsLFR4e7l3z6quvqm/fvkpOTlZycrKuu%2B46vfLKK97bnU6nioqKdODAASUmJmry5MnKyspSVlaWmScDAABccoIsmz%2BSvLq6Wn/84x%2B1dOlSffrppxoxYoTuu%2B8%2BDR8%2B/JI5QlRXVyen0ymPx2P8fKzE7LVG99eayufeafcIAIA2pDV//56P7Se5u1wu3X777RoyZIiCgoJUXl6ulJQU9ezZU%2BvXr7d7PAAAgH%2BabYF19OhRLViwQNdff70GDhyompoa/fnPf9a%2Bfft08OBBjRw5Uvfcc49d4wEAAHxvtnxVzs9%2B9jOtWbNGcXFx%2Brd/%2BzdNmDBBXbt29d7%2Box/9SA899JCeffZZO8YDAAD4QWwJrIiICL333nu65ZZbvnVNTEyMPvnkEz9OBQAAYIYtgbV06dLzrgkKCtKPf/xjP0wDAABgli3nYE2bNk35%2Bfkttj/33HOaPn26DRMBAACYY0tg/elPf9LNN9/cYntSUpJWrlxpw0QAAADm2BJYR48eVadOnVpsj4iI0NGjR22YCAAAwBxbAuvHP/6x3n333Rbb3333XcXFxdkwEQAAgDm2nOSemZmpzMxM/e1vf9Ntt90mSVq3bp3mzZun%2BfPn2zESAACAMbYEVnp6uk6cOKGcnBz97ne/kyR169ZNzz77rO699147RgIAADDGlsCSpClTpmjKlCk6fPiwwsLCdPnll9s1CgAAgFG2BdYZMTExdo8AAABglC0nuR85ckS/%2Bc1v1L17d4WGhiokJMTnAgAAEMhsOYKVlpamv/71r3rwwQcVExOjoKAgO8YAAABoFbYEVklJiUpKStSvXz877h4AAKBV2fIWYbdu3ThqBQAALlm2BNYzzzyj2bNn68CBA3bcPQAAQKuy5S3C1NRU1dfX68orr1RERITat2/vc3tNTY0dYwEAABhhS2A98cQTdtwtAACAX9gSWPfdd58ddwsAAOAXtpyDJUmff/655syZo9TUVO9bgoWFhdq1a5ddIwEAABhhS2CtX79e1157rYqLi/X666/r2LFjkqQtW7bo0UcftWMkAAAAY2wJrJkzZ2rOnDn64IMPfD65/bbbblNZWZkdIwEAABhjS2Bt27ZNv/jFL1psj4qK0pEjR2yYCAAAwBxbAuvyyy9XdXV1i%2B2VlZW64oorbJgIAADAHFsC6%2B6779asWbN05MgR7ye6f/jhh5oxY4bGjx9vx0gAAADG2BJYOTk5crlciomJ0bFjx9SnTx8NGDBA/fv31yOPPGLHSAAAAMbY8jlYISEhWrlypfbs2aMtW7bo1KlTuvHGG9WrVy87xgEAADDKlsA64%2Bqrr9bVV19t5wgAAADG2RJY//7v//6dtxcUFPhpEgAAAPNsCazDhw/7XG9qatLOnTtVX1%2BvW2%2B91Y6RAAAAjLElsN56660W206ePKn/%2BI//UO/evW2YCAAAwBzbvovwm9q1a6cZM2boqaeesnsUAACAH%2BSiCSxJ%2Buyzz9TU1GT3GAAAAD%2BILW8RPvTQQz7XLcvS4cOHtXr1ao0bN86OkQAAAIyxJbA2btzoc/2yyy5T165d9cQTTyg9Pd2OkQAAAIyxJbDWr19vx90CAAD4xUV1DhYAAMClwJYjWP379/d%2ByfP5bNq0qZWnAQAAMMuWwPrJT36i//qv/9LVV1%2BtpKQkSVJZWZl2796tiRMnyuFw2DEWAACAEbYE1pdffqmMjAzl5OT4bM/OztYXX3yh//7v/7ZjLAAAACNsOQfr9ddf129%2B85sW29PS0vSnP/3JhokAAADMsSWwHA6HSktLW2wvLS3l7UEAABDwbHmLcOrUqZo0aZK2bt2qm2%2B%2BWdLpc7CWLFmihx9%2B2I6RAAAAjLElsLKzsxUXF6f//M//1IsvvihJ6t27t5YsWaKUlBQ7RgIAADDGlsCSpJSUFGIKAABckmz7oNG6ujq9/PLLevTRR1VbWytJ%2Buijj3T48GG7RgIAADDCliNYO3bs0B133KEOHTqoqqpKaWlp6tSpk15//XUdOHBAS5cutWMsAAAAI2w5gjVt2jSlpKTor3/9q0JDQ73bR4wYoZKSEjtGAgAAMMaWI1ibN2/WokWLWnxdzhVXXMFbhAAAIODZcgQrJCREx44da7H9k08%2BUZcuXWyYCAAAwBxbAmv06NF6/PHHdfLkSUlSUFCQDh48qFmzZumuu%2B6yYyQAAABjbAmsp59%2BWocOHZLL5dLx48d12223qUePHgoNDW3x/YQAAACBxpbAcjqdKi0t1fLly/WHP/xB6enp%2Bstf/qL169frRz/60ffaZ25uroKCgpSZmend1tDQoClTpqhLly7q2LGjRo8erQMHDvj83P79%2BzVq1Ch17NhRXbp00dSpU9XY2Oizpri4WAkJCQoNDVWPHj20ePHi7zUjAABoG/x%2BkntTU5OGDx%2Bu559/XsnJyUpOTv7B%2B9y8ebMKCgp03XXX%2BWzPzMzUW2%2B9pRUrVigyMlLTp0/XyJEjVVFRoeDgYDU3N2vEiBHq2rWrNmzYoL/97W%2BaMGGCLMvSwoULJUl79%2B7V8OHDlZ6ermXLlun//u//NHnyZHXt2lU///nPf/DsAADg0uP3wGrfvr22bt3a4i8Iv69jx45p3LhxWrJkif7whz94t3s8Hr3wwgt65ZVXdMcdd0iSli1bptjYWL333nsaNmyYCgsL9fHHH6uqqkput1vS6bcv09LSNHfuXEVERGjx4sXq3r27FixYIOn0V/qUl5dr/vz5BBYAADgnW94iHD9%2BvF566SUj%2B8rIyNCIESO8EXVGRUWFmpqafI6Qud1uxcfHq7S0VJK0ceNGxcfHe%2BNKkoYNG6aGhgZVVFR413zzKNuwYcNUXl6upqYmI48BAABcWmz7LsL8/Hy99957SkxMVMeOHX1umzdv3gXtY8WKFaqoqFB5eXmL26qrqxUSEqJOnTr5bI%2BOjlZ1dbV3TXR0tM/tnTp1UkhIyHeuiY6O1smTJ3X06FHFxMS0uO%2BGhgY1NDR4r9fV1V3Q4wEAAJcGWwKroqLCe77Utm3bfG670LcOq6qq9MADD6iwsNDn0%2BDPx7Isn/s41/2db41lWd85a25urn7/%2B99f8EwAAODS4tfA%2BuyzzxQXF6f169f/4H1VVFSopqZGCQkJ3m3Nzc0qKSlRfn6%2B3n33XTU2Nqq2ttbnKFZNTY0GDBggSXK5XPrwww999ltbW6umpibvUSuXy%2BU9mvWP%2B2jXrp0iIyPPOdvs2bOVlZXlvV5XV6fY2Ngf9oABAEDA8Os5WD179tSRI0e813/1q1/piy%2B%2B%2BF77uv3227V9%2B3ZVVlZ6L4mJiRo3bpz33%2B3bt1dRUZH3Zw4fPqwdO3Z4AyspKUk7duzw%2BXqewsJCORwOb7glJSX57OPMmjP7PxeHw6GIiAifCwAAaDv8egTrzFtrZ6xZs0a5ubnfa1/h4eGKj4/32daxY0dFRkZ6t993332aPn26IiMj1blzZ82YMUN9%2B/b1nhCfnJysPn36KDU1VU899ZT%2B/ve/a8aMGUpPT/dG0aRJk5Sfn6%2BsrCylp6dr48aNeuGFF/Taa699r7kBAMClz7aT3P3hmWeeUbt27TR27FgdP35ct99%2Bu15%2B%2BWUFBwdLkoKDg/X2229r8uTJGjhwoMLCwpSSkqL58%2Bd79xEXF6c1a9Zo2rRpeu655%2BR2u/Xss8/yEQ0AAOBbBVnfPKzUioKDg1VdXa2uXbtKOn0Uatu2bYqLi/PXCLaoq6uT0%2BmUx%2BMx/nZhYvZao/trTeVz77R7BABAG9Kav3/Px%2B9vEaalpcnhcEiSTpw4oUmTJrX4mIY333zTn2MBAAAY5dfAmjBhgs/18ePH%2B/PuAQAA/MKvgWXq09sBAAAuZrZ8VQ4AAMCljMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwjMACAAAwLGADKzc3V/3791d4eLiioqI0ZswY7d6922dNQ0ODpkyZoi5duqhjx44aPXq0Dhw44LNm//79GjVqlDp27KguXbpo6tSpamxs9FlTXFyshIQEhYaGqkePHlq8eHGrPz4AABC4AjawiouLlZGRobKyMhUVFenkyZNKTk7WV1995V2TmZmpVatWacWKFdqwYYOOHTumkSNHqrm5WZLU3NysESNG6KuvvtKGDRu0YsUKvfHGG5o%2Bfbp3H3v37tXw4cN1yy23aOvWrXr44Yc1depUvfHGG35/zAAAIDAEWZZl2T2ECUeOHFFUVJSKi4t16623yuPxqGvXrnrllVf0q1/9SpJ06NAhxcbGas2aNRo2bJjeeecdjRw5UlVVVXK73ZKkFStWKC0tTTU1NYqIiNDMmTO1evVq7dq1y3tfkyZN0kcffaSNGzde0Gx1dXVyOp3yeDyKiIgw%2BrgTs9ca3V9rKp97p90jAADakNb8/Xs%2BAXsE65s8Ho8kqXPnzpKkiooKNTU1KTk52bvG7XYrPj5epaWlkqSNGzcqPj7eG1eSNGzYMDU0NKiiosK75h/3cWZNeXm5mpqazjlLQ0OD6urqfC4AAKDtuCQCy7IsZWVladCgQYqPj5ckVVdXKyQkRJ06dfJZGx0drerqau%2Ba6Ohon9s7deqkkJCQ71wTHR2tkydP6ujRo%2BecJzc3V06n03uJjY018jgBAEBguCQC6/7779e2bdv02muvnXetZVkKCgryXv/Hf1/omjPvqp7rZyVp9uzZ8ng83ktVVdUFPQ4AAHBpCPjAmjJlilavXq0PPvhA3bp18253uVxqbGxUbW2tz/qamhrvESmXy%2BU9UnVGbW2tmpqavnNNTU2N2rVrp8jIyHPO5HA4FBER4XMBAABtR8AGlmVZuv/%2B%2B/Xmm2/q/fffV1xcnM/tCQkJat%2B%2BvYqKirzbDh8%2BrB07dmjAgAGSpKSkJO3YsUOHDx/2riksLJTD4VBCQoJ3zT/u48yaxMREtW/fvrUeHgAACGABG1gZGRlatmyZli9frvDwcFVXV6u6ulrHjx%2BXJDmdTt13332aPn261q1bp61bt2r8%2BPHq27ev7rjjDklScnKy%2BvTpo9TUVG3dulXr1q3TjBkzlJ6e7j3qNGnSJO3bt09ZWVnatWuXXnzxRb3wwguaMWOGbY8dAABc3AI2sBYtWiSPx6MhQ4YoJibGe1m5cqV3zTPPPKMxY8Zo7NixGjhwoDp06KC33npLwcHBkqTg4GC9/fbbCg0N1cCBAzV27FiNGTNG8%2BfP9%2B4jLi5Oa9as0f/%2B7//qhhtu0OOPP65nn31WP//5z/3%2BmAEAQGC4ZD4H62LG52CdxudgAQD8ic/BAgAAuIQQWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIa1s3sAtB2J2WvtHuGfUj73TrtHAAAEKI5gAQAAGEZgXaDnn39ecXFxCg0NVUJCgtavX2/3SAAA4CJFYF2AlStXKjMzU9nZ2dq6datuueUW/fSnP9X%2B/fvtHg0AAFyEgizLsuwe4mJ300036cYbb9SiRYu823r37q0xY8YoNzf3vD9fV1cnp9Mpj8ejiIgIo7MF2nlNaD2cMwYAvlrz9%2B/5cJL7eTQ2NqqiokKzZs3y2Z6cnKzS0tJz/kxDQ4MaGhq81z0ej6TT/6FNa274yvg%2BEZj6zXjD7hEuWPGjQ%2B0eAUAbcOb3rh3Hkgis8zh69Kiam5sVHR3tsz06OlrV1dXn/Jnc3Fz9/ve/b7E9Nja2VWYEAo3zabsnANCW1NfXy%2Bl0%2BvU%2BCawLFBQU5HPdsqwW286YPXu2srKyvNdPnTqlv//974qMjPzWn/k%2B6urqFBsbq6qqKr8f%2BrzY8FycxXNxFs/FWTwXZ/Fc%2BLqUnw/LslRfXy%2B32%2B33%2ByawzqNLly4KDg5ucbSqpqamxVGtMxwOhxwOh8%2B2yy%2B/vNVmjIiIuOT%2BR/F98VycxXNxFs/FWTwXZ/Fc%2BLpUnw9/H7k6g78iPI%2BQkBAlJCSoqKjIZ3tRUZEGDBhg01QAAOBixhGsC5CVlaXU1FQlJiYqKSk/TeCvAAAHa0lEQVRJBQUF2r9/vyZNmmT3aAAA4CIUPGfOnDl2D3Gxi4%2BPV2RkpHJycjR//nwdP35cr7zyiq6//nq7R1NwcLCGDBmidu1oZZ6Ls3guzuK5OIvn4iyeC188H%2BbxOVgAAACGcQ4WAACAYQQWAACAYQQWAACAYQQWAACAYQRWgHr%2B%2BecVFxen0NBQJSQkaP369XaPZIvc3Fz1799f4eHhioqK0pgxY7R79267x7Jdbm6ugoKClJmZafcotjl48KDGjx%2BvyMhIdejQQTfccIMqKirsHsvvTp48qd/%2B9reKi4tTWFiYevTooccee0ynTp2ye7RWV1JSolGjRsntdisoKEh//vOffW63LEtz5syR2%2B1WWFiYhgwZop07d9o0bev6rueiqalJM2fOVN%2B%2BfdWxY0e53W7dc889OnTokI0TBz4CKwCtXLlSmZmZys7O1tatW3XLLbfopz/9qfbv32/3aH5XXFysjIwMlZWVqaioSCdPnlRycrK%2B%2Bqrtfgn25s2bVVBQoOuuu87uUWxTW1urgQMHqn379nrnnXf08ccf6%2Bmnn27Vb1S4WD355JNavHix8vPztWvXLs2bN09PPfWUFi5caPdore6rr77S9ddfr/z8/HPePm/ePOXl5Sk/P1%2BbN2%2BWy%2BXS0KFDVV9f7%2BdJW993PRdff/21tmzZokceeURbtmzRm2%2B%2BqT179mj06NE2THoJsRBw/uVf/sWaNGmSz7ZevXpZs2bNsmmii0dNTY0lySouLrZ7FFvU19dbPXv2tIqKiqzBgwdbDzzwgN0j2WLmzJnWoEGD7B7jojBixAjr3nvv9dl21113WePHj7dpIntIslatWuW9furUKcvlcllPPPGEd9uJEycsp9NpLV682I4R/eabz8W5bNq0yZJk7du3z09TXXo4ghVgGhsbVVFRoeTkZJ/tycnJKi0ttWmqi4fH45Ekde7c2eZJ7JGRkaERI0bojjvusHsUW61evVqJiYn65S9/qaioKPXr109LliyxeyxbDBo0SOvWrdOePXskSR999JE2bNig4cOH2zyZvfbu3avq6mqf11KHw6HBgwfzWqrTr6VBQUFt8qivKXxka4A5evSompubW3zRdHR0dIsvpG5rLMtSVlaWBg0apPj4eLvH8bsVK1aooqJC5eXldo9iu88%2B%2B0yLFi1SVlaWHn74YW3atElTp06Vw%2BHQPffcY/d4fjVz5kx5PB716tVLwcHBam5u1ty5c/XrX//a7tFsdeb18lyvpfv27bNjpIvGiRMnNGvWLKWkpFySX/7sLwRWgAoKCvK5bllWi21tzf33369t27Zpw4YNdo/id1VVVXrggQdUWFio0NBQu8ex3alTp5SYmKicnBxJUr9%2B/bRz504tWrSozQXWypUrtWzZMi1fvlzXXnutKisrlZmZKbfbrQkTJtg9nu14LfXV1NSku%2B%2B%2BW6dOndLzzz9v9zgBjcAKMF26dFFwcHCLo1U1NTUt/p9YWzJlyhStXr1aJSUl6tatm93j%2BF1FRYVqamqUkJDg3dbc3KySkhLl5%2BeroaFBwcHBNk7oXzExMerTp4/Ptt69e%2BuNN96waSL7PPjgg5o1a5buvvtuSVLfvn21b98%2B5ebmtunAcrlckk4fyYqJifFub8uvpU1NTRo7dqz27t2r999/n6NXPxDnYAWYkJAQJSQkqKioyGd7UVGRBgwYYNNU9rEsS/fff7/efPNNvf/%2B%2B4qLi7N7JFvcfvvt2r59uyorK72XxMREjRs3TpWVlW0qriRp4MCBLT6uY8%2BePbryyittmsg%2BX3/9tS67zPelPjg4uE18TMN3iYuLk8vl8nktbWxsVHFxcZt8LT0TV5988onee%2B89RUZG2j1SwOMIVgDKyspSamqqEhMTlZSUpIKCAu3fv1%2BTJk2yezS/y8jI0PLly/WXv/xF4eHh3iN7TqdTYWFhNk/nP%2BHh4S3OO%2BvYsaMiIyPb5Plo06ZN04ABA5STk6OxY8dq06ZNKigoUEFBgd2j%2Bd2oUaM0d%2B5cde/eXddee622bt2qvLw83XvvvXaP1uqOHTumTz/91Ht97969qqysVOfOndW9e3dlZmYqJydHPXv2VM%2BePZWTk6MOHTooJSXFxqlbx3c9F263W7/4xS%2B0ZcsW/c///I%2Bam5u9r6WdO3dWSEiIXWMHNnv/iBHf13PPPWddeeWVVkhIiHXjjTe22Y8lkHTOy0svvWT3aLZryx/TYFmW9dZbb1nx8fGWw%2BGwevXqZRUUFNg9ki3q6uqsBx54wOrevbsVGhpq9ejRw8rOzrYaGhrsHq3VffDBB%2Bd8fZgwYYJlWac/quF3v/ud5XK5LIfDYd16663W9u3b7R26lXzXc7F3795vfS394IMP7B49YAVZlmX5M%2BgAAAAudZyDBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYBiBBQAAYNj/A0h0vpz8meBAAAAAAElFTkSuQmCC"/>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12" id="common-8059198228321611849">
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0</td>
        <td class="number">8458</td>
        <td class="number">88.3%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">1</td>
        <td class="number">832</td>
        <td class="number">8.7%</td>
        <td>
            <div class="bar" style="width:10%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">2</td>
        <td class="number">192</td>
        <td class="number">2.0%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">3</td>
        <td class="number">65</td>
        <td class="number">0.7%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">4</td>
        <td class="number">19</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">5</td>
        <td class="number">6</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">6</td>
        <td class="number">2</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">7</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">13</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">11</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12"  id="extreme-8059198228321611849">
            <p class="h4">Minimum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0</td>
        <td class="number">8458</td>
        <td class="number">88.3%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">1</td>
        <td class="number">832</td>
        <td class="number">8.7%</td>
        <td>
            <div class="bar" style="width:10%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">2</td>
        <td class="number">192</td>
        <td class="number">2.0%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">3</td>
        <td class="number">65</td>
        <td class="number">0.7%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">4</td>
        <td class="number">19</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr>
</table>
            <p class="h4">Maximum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">6</td>
        <td class="number">2</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">7</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:50%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">8</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:50%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">11</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:50%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">13</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:50%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
    </div>
</div>
</div><div class="row variablerow">
    <div class="col-md-3 namecol">
        <p class="h4 pp-anchor" id="pp_var_dti">dti<br/>
            <small>Numeric</small>
        </p>
    </div><div class="col-md-6">
    <div class="row">
        <div class="col-sm-6">
            <table class="stats ">
                <tr>
                    <th>Distinct count</th>
                    <td>2529</td>
                </tr>
                <tr>
                    <th>Unique (%)</th>
                    <td>26.4%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (n)</th>
                    <td>0</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (n)</th>
                    <td>0</td>
                </tr>
            </table>

        </div>
        <div class="col-sm-6">
            <table class="stats ">

                <tr>
                    <th>Mean</th>
                    <td>12.607</td>
                </tr>
                <tr>
                    <th>Minimum</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>Maximum</th>
                    <td>29.96</td>
                </tr>
                <tr class="ignore">
                    <th>Zeros (%)</th>
                    <td>0.9%</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="col-md-3 collapse in" id="minihistogram-4461870699833163556">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABLCAYAAAA1fMjoAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAAdNJREFUeJzt20HO0kAcxuF/v7il7Am9hYfwTq5deh8P4S0gHKCNCxdSF8q3Ud/wmTCl8DxLGjJDMr9MJkO7eZ7naux4PNYwDK2HZeUOh0Pt9/umY75rOtpvm82mqn794L7vl5gCKzKOYw3D8LpuWlokkK7rqqqq7/uHDuT9xy9v/s7XTx9uMJPHcFk3LS0SyFr9z4JvMYaobudl6QnAPRMIBAKBQCAQPO0hvcWBm/Wzg0AgEAgEAsHTnkEeyVvPUy4Wr2cHgUAgEAgEgrs7g7if4J7YQSC4ux2E2/OX%2BuvZQSAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgcA76VzlWd9jt4NAIBAIBAKBQCAQCAQCgUAgELgH4WYe4e7EDgLBIjvIPM9VVTWO4x/Pfnz/1no63JG/rYnLZ5d109IigUzTVFVVwzAsMTx3bPv538%2BmaartdttuMlXVzQtkeT6f63Q61Wazqa7rWg/PyszzXNM01W63q5eXtqeCRQKBtXBIh0AgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCD4CX6rU7Rm8cKIAAAAAElFTkSuQmCC">

</div>
<div class="col-md-12 text-right">
    <a role="button" data-toggle="collapse" data-target="#descriptives-4461870699833163556,#minihistogram-4461870699833163556"
       aria-expanded="false" aria-controls="collapseExample">
        Toggle details
    </a>
</div>
<div class="row collapse col-md-12" id="descriptives-4461870699833163556">
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#quantiles-4461870699833163556"
                                                  aria-controls="quantiles-4461870699833163556" role="tab"
                                                  data-toggle="tab">Statistics</a></li>
        <li role="presentation"><a href="#histogram-4461870699833163556" aria-controls="histogram-4461870699833163556"
                                   role="tab" data-toggle="tab">Histogram</a></li>
        <li role="presentation"><a href="#common-4461870699833163556" aria-controls="common-4461870699833163556"
                                   role="tab" data-toggle="tab">Common Values</a></li>
        <li role="presentation"><a href="#extreme-4461870699833163556" aria-controls="extreme-4461870699833163556"
                                   role="tab" data-toggle="tab">Extreme Values</a></li>

    </ul>

    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active row" id="quantiles-4461870699833163556">
            <div class="col-md-4 col-md-offset-1">
                <p class="h4">Quantile statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Minimum</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>5-th percentile</th>
                        <td>1.27</td>
                    </tr>
                    <tr>
                        <th>Q1</th>
                        <td>7.2125</td>
                    </tr>
                    <tr>
                        <th>Median</th>
                        <td>12.665</td>
                    </tr>
                    <tr>
                        <th>Q3</th>
                        <td>17.95</td>
                    </tr>
                    <tr>
                        <th>95-th percentile</th>
                        <td>23.65</td>
                    </tr>
                    <tr>
                        <th>Maximum</th>
                        <td>29.96</td>
                    </tr>
                    <tr>
                        <th>Range</th>
                        <td>29.96</td>
                    </tr>
                    <tr>
                        <th>Interquartile range</th>
                        <td>10.738</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-4 col-md-offset-2">
                <p class="h4">Descriptive statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Standard deviation</th>
                        <td>6.884</td>
                    </tr>
                    <tr>
                        <th>Coef of variation</th>
                        <td>0.54606</td>
                    </tr>
                    <tr>
                        <th>Kurtosis</th>
                        <td>-0.90036</td>
                    </tr>
                    <tr>
                        <th>Mean</th>
                        <td>12.607</td>
                    </tr>
                    <tr>
                        <th>MAD</th>
                        <td>5.796</td>
                    </tr>
                    <tr class="">
                        <th>Skewness</th>
                        <td>0.023941</td>
                    </tr>
                    <tr>
                        <th>Sum</th>
                        <td>120750</td>
                    </tr>
                    <tr>
                        <th>Variance</th>
                        <td>47.389</td>
                    </tr>
                    <tr>
                        <th>Memory size</th>
                        <td>74.9 KiB</td>
                    </tr>
                </table>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane col-md-8 col-md-offset-2" id="histogram-4461870699833163556">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQCAYAAAByNR6YAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAIABJREFUeJzt3Xt0FGWe//FPm0sTmaS5mTQNEaOLCAQZJAqJF/BCgOXiLGdG3WgGdjTCcpsYEEFWB3VJBDGDkpEBXMXRKDqrsOxRI1FZLgsBEmwFZIFRlAiEoIYOQUhCqN8fHOpnExAdn6TSyft1Tp2Teuqpqm%2BVpf3xqepql2VZlgAAAGDMRU4XAAAA0NwQsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAQsAAMAwAhYAAIBhBCwAAADDCFgAAACGEbAAAAAMI2ABAAAYRsACAAAwjIAFAABgGAELAADAMAIWAACAYQQsAAAAwwhYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAQsAAMAwAhYAAIBhBCwAAADDCFgAAACGEbAAAAAMI2ABAAAYRsACAAAwjIAFAABgGAELAADAsHCnC2gJTp06pQMHDig6Oloul8vpcgAAaBEsy9LRo0fl8/l00UWNO6ZEwGoEBw4cUHx8vNNlAADQIpWWlqpz586Nuk8CViOIjo6WdPofcExMjMPVAADQMlRWVio%2BPt7%2BHG5MBKxGcOa2YExMDAELAIBG5sTjOSH9kPvatWs1YsQI%2BXw%2BuVwurVix4rx9x44dK5fLpfnz5we1V1RUKD09XR6PRx6PR%2Bnp6Tpy5EhQn23btmnAgAGKiopSp06d9Pjjj8uyrAY5JgAAEPpCOmAdO3ZMvXv3Vl5e3g/2W7FihTZt2iSfz1dvWVpamvx%2BvwoKClRQUCC/36/09HR7eWVlpQYNGiSfz6ctW7ZowYIFmjdvnnJzc40fDwAAaB5C%2Bhbh0KFDNXTo0B/ss3//fk2cOFHvvfeehg0bFrRs586dKigoUFFRkfr16ydJWrJkiZKTk7Vr1y5169ZN%2Bfn5OnHihJYuXSq3263ExETt3r1bubm5ysrK4luBAACgnpAewbqQU6dOKT09XQ8%2B%2BKB69uxZb/nGjRvl8XjscCVJ/fv3l8fj0YYNG%2Bw%2BAwYMkNvttvsMHjxYBw4c0BdffHHO/VZXV6uysjJoAgAALUezDlhz5sxReHi4Jk%2BefM7lZWVlio2NrdceGxursrIyu09cXFzQ8jPzZ/qcLScnx36my%2BPx8IoGAABamGYbsEpKSvTMM89o6dKlP3gb71zLLMsKaj%2B7z5kH3M%2B33RkzZigQCNhTaWnp33MIAAAgRDXbgLVu3TqVl5fr0ksvVXh4uMLDw/Xll19qypQpuuyyyyRJXq9Xhw4dqrfu4cOH7VEqr9dbb6SqvLxckuqNbJ3hdrvtVzLwagYAAFqeZhuw0tPT9cknn8jv99uTz%2BfTgw8%2BqPfee0%2BSlJycrEAgoM2bN9vrbdq0SYFAQCkpKXaftWvXqqamxu6zatUq%2BXw%2BO6gBAAB8X0h/i7Cqqkp/%2B9vf7Pm9e/fK7/erXbt2uvTSS9W%2Bffug/hEREfJ6verWrZskqXv37hoyZIgyMjK0aNEiSdL999%2Bv4cOH233S0tL02GOPacyYMXr44Ye1Z88eZWdn69FHH%2BUbhAAA4JxCegSruLhYffr0UZ8%2BfSRJWVlZ6tOnjx599NEfvY38/Hz16tVLqampSk1N1dVXX62XX37ZXu7xeFRYWKivvvpKSUlJGj9%2BvLKyspSVlWX8eAAAQPPgsngleYOrrKyUx%2BNRIBDgeSwAABqJk5%2B/IT2CBQAA0BSF9DNYAEJT0swCp0v4SYpnD3G6BAAhhhEsAAAAwxjBApqJUBsVAoDmjBEsAAAAwwhYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIxvEQLABYTaNzR5bxfgPEawAAAADCNgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAQsAAMAwAhYAAIBhBCwAAADDCFgAAACGEbAAAAAMI2ABAAAYRsACAAAwjIAFAABgGAELAADAMAIWAACAYQQsAAAAwwhYAAAAhoV0wFq7dq1GjBghn88nl8ulFStW2Mtqa2v10EMPqVevXmrdurV8Pp9%2B%2B9vf6sCBA0HbqKioUHp6ujwejzwej9LT03XkyJGgPtu2bdOAAQMUFRWlTp066fHHH5dlWY1yjAAAIPSEdMA6duyYevfurby8vHrLvvvuO23dulWPPPKItm7dqrfeeku7d%2B/WyJEjg/qlpaXJ7/eroKBABQUF8vv9Sk9Pt5dXVlZq0KBB8vl82rJlixYsWKB58%2BYpNze3wY8PAACEpnCnC/g5hg4dqqFDh55zmcfjUWFhYVDbggULdN1112nfvn269NJLtXPnThUUFKioqEj9%2BvWTJC1ZskTJycnatWuXunXrpvz8fJ04cUJLly6V2%2B1WYmKidu/erdzcXGVlZcnlcjX4cQIAgNAS0gHrpwoEAnK5XGrTpo0kaePGjfJ4PHa4kqT%2B/fvL4/Fow4YN6tatmzZu3KgBAwbI7XbbfQYPHqwZM2boiy%2B%2BUEJCQr39VFdXq7q62p6vrKxswKNCQ0maWeB0CQCAEBXStwh/ihMnTmj69OlKS0tTTEyMJKmsrEyxsbH1%2BsbGxqqsrMzuExcXF7T8zPyZPmfLycmxn%2BnyeDyKj483eSgAAKCJaxEBq7a2VnfddZdOnTql5557LmjZuW7xWZYV1H52nzMPuJ/v9uCMGTMUCATsqbS09OceAgAACCHN/hZhbW2t7rjjDu3du1cffvihPXolSV6vV4cOHaq3zuHDh%2B1RKq/XW2%2Bkqry8XJLqjWyd4Xa7g24pAgCAlqVZj2CdCVd79uzR%2B%2B%2B/r/bt2wctT05OViAQ0ObNm%2B22TZs2KRAIKCUlxe6zdu1a1dTU2H1WrVoln8%2Bnyy67rFGOAwAAhJaQDlhVVVXy%2B/3y%2B/2SpL1798rv92vfvn06efKkfv3rX6u4uFj5%2Bfmqq6tTWVmZysrK7LDUvXt3DRkyRBkZGSoqKlJRUZEyMjI0fPhwdevWTdLp1zi43W6NGTNG27dv1/Lly5Wdnc03CAEAwHmF9C3C4uJi3XzzzfZ8VlaWJGn06NGaNWuWVq5cKUn65S9/GbTe6tWrNXDgQElSfn6%2BJk%2BerNTUVEnSyJEjg96rdeZ1DxMmTFBSUpLatm2rrKwse18AAABnc1m8krzBVVZWyuPxKBAIBD0DhqaN1zQgVBXPHuJ0CUCT4OTnb0jfIgQAAGiKCFgAAACGEbAAAAAMI2ABAAAYRsACAAAwjIAFAABgGAELAADAMAIWAACAYQQsAAAAwwhYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwLd7oAAIBZSTMLnC7hRyuePcTpEoAGwQgWAACAYQQsAAAAwwhYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABgW0gFr7dq1GjFihHw%2Bn1wul1asWBG03LIszZo1Sz6fT1FRURo4cKB27NgR1KeiokLp6enyeDzyeDxKT0/XkSNHgvps27ZNAwYMUFRUlDp16qTHH39clmU1%2BPEBAIDQFNIB69ixY%2Brdu7fy8vLOuXzu3LnKzc1VXl6etmzZIq/Xq0GDBuno0aN2n7S0NPn9fhUUFKigoEB%2Bv1/p6en28srKSg0aNEg%2Bn09btmzRggULNG/ePOXm5jb48QEAgNAU7nQBP8fQoUM1dOjQcy6zLEvz58/XzJkzNWrUKEnSSy%2B9pLi4OL366qsaO3asdu7cqYKCAhUVFalfv36SpCVLlig5OVm7du1St27dlJ%2BfrxMnTmjp0qVyu91KTEzU7t27lZubq6ysLLlcrkY7XgAAEBpCegTrh%2Bzdu1dlZWVKTU2129xutwYMGKANGzZIkjZu3CiPx2OHK0nq37%2B/PB5PUJ8BAwbI7XbbfQYPHqwDBw7oiy%2B%2BaJyDAQAAIaXZBqyysjJJUlxcXFB7XFycvaysrEyxsbH11o2NjQ3qc65tfH8fZ6uurlZlZWXQBAAAWo5mG7DOOPsWnmVZQW3nusV3oT5nHnA/3%2B3BnJwc%2B6F5j8ej%2BPj4v7t%2BAAAQepptwPJ6vZLqjzKVl5fbI1Ber1eHDh2qt%2B7hw4eD%2BpxrG1L90bEzZsyYoUAgYE%2BlpaU/72AAAEBIabYBKyEhQV6vV4WFhXZbTU2N1qxZo5SUFElScnKyAoGANm/ebPfZtGmTAoFAUJ%2B1a9eqpqbG7rNq1Sr5fD5ddtll59y32%2B1WTExM0AQAAFqOkA5YVVVV8vv98vv9kk4/2O73%2B7Vv3z65XC5lZmYqOztby5cv1/bt2zVmzBhdfPHFSktLkyR1795dQ4YMUUZGhoqKilRUVKSMjAwNHz5c3bp1k3T6NQ5ut1tjxozR9u3btXz5cmVnZ/MNQgAAcF4h/ZqG4uJi3XzzzfZ8VlaWJGn06NFaunSppk2bpuPHj2v8%2BPGqqKhQv379tGrVKkVHR9vr5Ofna/Lkyfa3DUeOHBn0Xi2Px6PCwkJNmDBBSUlJatu2rbKysux9AQAAnM1l8UryBldZWSmPx6NAINCibxcmzSxwugQATUzx7CFOl4BmzMnP35C%2BRQgAANAUEbAAAAAMI2ABAAAYFtIPuYPnmgAAaIoYwQIAADCMgAUAAGAYAQsAAMAwAhYAAIBhBCwAAADDCFgAAACGEbAAAAAMI2ABAAAYRsACAAAwjIAFAABgGD%2BVAwBwTKj93Ffx7CFOl4AQwQgWAACAYQQsAAAAwwhYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDBHAtYrr7yiEydOOLFrAACABudIwMrKypLX69XYsWO1efNmJ0oAAABoMI4ErAMHDuiFF17QwYMHdcMNN6hnz556%2BumndfjwYSfKAQAAMMqRgBUeHq5Ro0Zp5cqV2rdvn0aPHq0XXnhBnTt31qhRo/T222/LsiwnSgMAAPjZHH/I3ev16tZbb9XAgQPlcrlUXFystLQ0de3aVevWrXO6PAAAgJ/MsYD19ddfa/78%2Berdu7euv/56lZeXa8WKFfryyy%2B1f/9%2BDR8%2BXL/97W%2BdKg8AAODvFu7ETv/pn/5J77zzjhISEnTfffdp9OjRuuSSS%2Bzlv/jFLzRt2jQ9%2B%2ByzTpQHAADwszgSsGJiYvT%2B%2B%2B/rxhtvPG%2Bfjh07as%2BePY1YFQAAgBmOBKyXXnrpgn1cLpeuuOKKRqgGAADALEeewXrggQeUl5dXr/1Pf/qTpkyZ4kBFAAAA5jgSsP7617%2Bqf//%2B9dqTk5P1%2BuuvO1ARAACAOY4ErK%2B//lpt27at1x4TE6Ovv/7a2H5Onjypf/u3f1NCQoKioqJ0%2BeWX6/HHH9epU6fsPpZladasWfL5fIqKitLAgQO1Y8eOoO1UVFQoPT1dHo9HHo9H6enpOnLkiLE6AQBA8%2BJIwLriiiv03nvv1Wt/7733lJCQYGw/c%2BbM0Z///Gfl5eVp586dmjt3rp566iktWLDA7jN37lzl5uYqLy9PW7Zskdfr1aBBg3T06FG7T1pamvx%2BvwoKClRQUCC/36/09HRjdQIAgObFkYfcMzMzlZmZqW%2B%2B%2BUa33HKLJOmDDz7Q3LlzNW/ePGP72bhxo26//XYNGzZMknTZZZfptddeU3FxsaTTo1fz58/XzJkzNWrUKEmnH8CPi4vTq6%2B%2BqrFjx2rnzp0qKChQUVGR%2BvXrJ0lasmSJkpOTtWvXLnXr1s1YvQAAoHlwZAQrIyNDTz75pJ577jndeOONuvHGG/X888/r2Wef1bhx44zt54YbbtAHH3yg3bt3S5I%2B/vhjrV%2B/Xv/4j/8oSdq7d6/KysqUmppqr%2BN2uzVgwABt2LBB0umQ5vF47HAlSf3795fH47H7nK26ulqVlZVBEwAAaDkcGcGSpEmTJmnSpEk6ePCgoqKi1KZNG%2BP7eOihhxQIBHTVVVcpLCxMdXV1mj17tv75n/9ZklRWViZJiouLC1ovLi5OX375pd0nNja23rZjY2Pt9c%2BWk5Ojxx57zOShAACAEOL4bxF27NixQcKVJL3%2B%2But65ZVX9Oqrr2rr1q166aWXNG/evHrv4XK5XEHzlmUFtZ29/Fx9vm/GjBkKBAL2VFpaauBoAABAqHBkBOvw4cOaNm2aPvjgA5WXlwd9q0%2BSampqjOznwQcf1PTp03XXXXdJknr16qUvv/xSOTk5Gj16tLxer6TTo1QdO3a01ysvL7dHtbxerw4dOnTOYzh75OsMt9stt9tt5BgAAEDocSRgjRkzRp999pkefPBBdezY8bwjQT/Xd999p4suCh6kCwsLswNdQkKCvF6vCgsL1adPH0mnw92aNWs0Z84cSaffzRUIBLR582Zdd911kqRNmzYpEAgoJSWlQeoGAAChzZGAtXbtWq1du9YONQ1lxIgRmj17ti699FL17NlTH330kXJzc/W73/1O0ulbf5mZmcrOzlbXrl3VtWtXZWdn6%2BKLL1ZaWpokqXv37hoyZIgyMjK0aNEiSdL999%2Bv4cOH8w1CAABwTo4ErM6dOzfYqNX3LViwQI888ojGjx%2Bv8vJy%2BXw%2BjR07Vo8%2B%2BqjdZ9q0aTp%2B/LjGjx%2BviooK9evXT6tWrVJ0dLTdJz8/X5MnT7a/bThy5Mhz/tQPAACAJLksy7Iae6cFBQV65plntGTJEnXu3Lmxd9/oKisr5fF4FAgEFBMTY3TbSTMLjG4PAHB%2BxbOHOF0CfoKG/Py9EEdGsNLT03X06FF16dJFMTExioiICFpeXl7uRFkAAABGOBKwnnzySSd2CwAA0CgcCVj33nuvE7sFAABoFI69aPSLL77QrFmzlJ6ebt8SXLVqlXbu3OlUSQAAAEY4ErDWrVunnj17as2aNXrjjTdUVVUlSdq6dWvQN/wAAABCkSMB66GHHtKsWbO0evVqRUZG2u233HKLioqKnCgJAADAGEcC1ieffKJf//rX9dpjY2N1%2BPBhByoCAAAwx5GA1aZNG5WVldVr9/v96tSpkwMVAQAAmONIwLrrrrs0ffp0HT582H6j%2B6ZNmzR16lTdc889TpQEAABgjCMBKzs7W16vVx07dlRVVZV69OihlJQUXXvttXrkkUecKAkAAMAYR96DFRkZqddff127d%2B/W1q1bderUKV1zzTW66qqrnCgHAADAKEcC1hlXXnmlrrzySidLAAAAMM6RgHX//ff/4PLFixc3UiUAAADmORKwDh48GDRfW1urHTt26OjRo7rpppucKAkAAMAYRwLWf//3f9drO3nypP71X/9V3bt3d6AiAAAAcxz7LcKzhYeHa%2BrUqXrqqaecLgUAAOBnaTIBS5I%2B//xz1dbWOl0GAADAz%2BLILcJp06YFzVuWpYMHD2rlypW6%2B%2B67nSgJAADAGEcC1saNG4PmL7roIl1yySV68sknlZGR4URJAAAAxjgSsNatW%2BfEbgEAABpFk3oGCwAAoDlwZATr2muvtX/k%2BUI2b97cwNUAAACY5UjAuvnmm7Vo0SJdeeWVSk5OliQVFRVp165dGjt2rNxutxNlAQAAGOFIwDpy5IgmTJig7OzsoPaZM2fq0KFDev75550oCwAAwAhHnsF644039C//8i/12seMGaO//vWvDlQEAABgjiMBy%2B12a8OGDfXaN2zYwO1BAAAQ8hy5RTh58mSNGzdOH330kfr37y/p9DNYS5Ys0cMPP%2BxESQAAAMY4ErBmzpyphIQEPfPMM3rhhRckSd27d9eSJUuUlpbmREkAAADGOBKwJCktLY0wBQAAmiXHXjRaWVmppUuX6tFHH1VFRYUk6eOPP9bBgwedKgkAAMAIR0awtm/frttuu00XX3yxSktLNWbMGLVt21ZvvPGGvvrqK7300ktOlAUAAGCEIyNYDzzwgNLS0vTZZ5%2BpVatWdvuwYcO0du1aJ0oCAAAwxpERrC1btmjhwoX1fi6nU6dO3CIEAAAhz5ERrMjISFVVVdVr37Nnjzp06OBARQAAAOY4ErBGjhypJ554QidPnpQkuVwu7d%2B/X9OnT9eoUaOM7mv//v2655571L59e1188cX65S9/qZKSEnu5ZVmaNWuWfD6foqKiNHDgQO3YsSNoGxUVFUpPT5fH45HH41F6erqOHDlitE4AANB8OBKwnn76aR04cEBer1fHjx/XLbfcossvv1ytWrWq9/uEP0dFRYWuv/56RURE6N1339Wnn36qp59%2BWm3atLH7zJ07V7m5ucrLy9OWLVvk9Xo1aNAgHT161O6TlpYmv9%2BvgoICFRQUyO/3Kz093VidAACgeXFZlmU5sWPLslRYWKitW7fq1KlTuuaaazR48OB6z2X9HNOnT9f//u//at26deetwefzKTMzUw899JAkqbq6WnFxcZozZ47Gjh2rnTt3qkePHioqKlK/fv0knX7rfHJysv7v//5P3bp1u2AdlZWV8ng8CgQCiomJMXZ8kpQ0s8Do9gAA51c8e4jTJeAnaMjP3wtp9BGs2tpaDRo0SH/729%2BUmpqq6dOn6%2BGHH9aQIUOMhitJWrlypZKSkvSb3/xGsbGx6tOnj5YsWWIv37t3r8rKypSammq3ud1uDRgwwP6txI0bN8rj8djhSpL69%2B8vj8dzzt9TlE6HtMrKyqAJAAC0HI0esCIiIvTRRx8ZD1Pn8vnnn2vhwoXq2rWr3nvvPY0bN06TJ0/WX/7yF0lSWVmZJCkuLi5ovbi4OHtZWVmZYmNj6207NjbW7nO2nJwc%2B3ktj8ej%2BPh4k4cFAACaOEeewbrnnnv04osvNvh%2Bztx6zM7OVp8%2BfTR27FhlZGRo4cKFQf3ODnuWZQW1nSsMnt3n%2B2bMmKFAIGBPpaWlBo4GAACECsd%2BizAvL0/vv/%2B%2BkpKS1Lp166Blc%2BfONbKPjh07qkePHkFt3bt315tvvilJ8nq9kk6PUnXs2NHuU15ebo9qeb1eHTp0qN62Dx8%2BXG/k6wy32y23223kGAAAQOhxJGCVlJTo6quvliR98sknQctM3jq8/vrrtWvXrqC23bt3q0uXLpKkhIQEeb1eFRYWqk%2BfPpKkmpoarVmzRnPmzJEkJScnKxAIaPPmzbruuuskSZs2bVIgEFBKSoqxWgEAQPPRqAHr888/V0JCwnm/1WfaAw88oJSUFGVnZ%2BuOO%2B7Q5s2btXjxYi1evFjS6TCXmZmp7Oxsde3aVV27dlV2drYuvvhipaWlSTo94jVkyBBlZGRo0aJFkqT7779fw4cP/1HfIAQAAC1Poz6D1bVrVx0%2BfNiev/POO895%2B82Ua6%2B9VsuXL9drr72mxMREPfHEE5o/f77uvvtuu8%2B0adOUmZmp8ePHKykpSfv379eqVasUHR1t98nPz1evXr2Umpqq1NRUXX311Xr55ZcbrG4AABDaGvU9WBdddFHQt/Kio6P18ccf6/LLL2%2BsEhzBe7AAoHngPVihpUW9BwsAAKC5a9SA5XK56j3E3hjvwwIAAGhMjfqQu2VZGjNmjP0KgxMnTmjcuHH1XtPw1ltvNWZZAAAARjVqwBo9enTQ/D333NOYuwcAAGgUjRqwGuPt7QAAAE7jIXcAAADDCFgAAACGEbAAAAAMI2ABAAAYRsACAAAwjIAFAABgGAELAADAMAIWAACAYQQsAAAAwwhYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAQsAAMAwAhYAAIBhBCwAAADDCFgAAACGEbAAAAAMI2ABAAAY1qICVk5OjlwulzIzM%2B226upqTZo0SR06dFDr1q01cuRIffXVV0Hr7du3TyNGjFDr1q3VoUMHTZ48WTU1NY1dPgAACBEtJmBt2bJFixcv1tVXXx3UnpmZqeXLl2vZsmVav369qqqqNHz4cNXV1UmS6urqNGzYMB07dkzr16/XsmXL9Oabb2rKlClOHAYAAAgBLSJgVVVV6e6779aSJUvUtm1buz0QCOg//uM/9PTTT%2Bu2225Tnz599Morr2jbtm16//33JUmrVq3Sp59%2BqldeeUV9%2BvTRbbfdpqefflpLlixRZWWlU4cEAACasBYRsCZMmKBhw4bptttuC2ovKSlRbW2tUlNT7Tafz6fExERt2LBBkrRx40YlJibK5/PZfQYPHqzq6mqVlJQ0zgEAAICQEu50AQ1t2bJlKikpUXFxcb1lZWVlioyMDBrVkqS4uDiVlZXZfeLi4oKWt23bVpGRkXafs1VXV6u6utqeZ6QLAICWpVmPYJWWlur3v/%2B98vPz1apVqx%2B9nmVZcrlc9vz3/z5fn%2B/LycmRx%2BOxp/j4%2BJ9ePAAACFnNOmCVlJSovLxcffv2VXh4uMLDw7VmzRo9%2B%2ByzCg8PV1xcnGpqalRRURG0Xnl5uT1q5fV6641UVVRUqLa2tt7I1hkzZsxQIBCwp9LS0oY5QAAA0CQ164B16623atu2bfL7/faUlJSku%2B%2B%2B2/47IiJChYWF9joHDx7U9u3blZKSIklKTk7W9u3bdfDgQbvPqlWr5Ha71bdv33Pu1%2B12KyYmJmgCAAAtR7N%2BBis6OlqJiYlBba1bt1b79u3t9nvvvVdTpkxR%2B/bt1a5dO02dOlW9evWyH4hPTU1Vjx49lJ6erqeeekrffvutpk6dqoyMDIITAAA4p2YdsH6MP/7xjwoPD9cdd9yh48eP69Zbb9XSpUsVFhYmSQoLC9Pbb7%2Bt8ePH6/rrr1dUVJTS0tI0b948hysHAABNlcuyLMvpIpq7yspKeTweBQIB46NeSTMLjG4PAHB%2BxbOHOF0CfoKG/Py9kGb9DBYAAIATCFgAAACGEbAAAAAMI2ABAAAYRsACAAAwjIAFAABgGAELAADAMAIWAADjQKQNAAAOqElEQVSAYQQsAAAAwwhYAAAAhhGwAAAADCNgAQAAGBbudAEAAISKpJkFTpfwk/Dj1M5hBAsAAMAwAhYAAIBhBCwAAADDCFgAAACGEbAAAAAMI2ABAAAYRsACAAAwjIAFAABgGAELAADAMAIWAACAYQQsAAAAwwhYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAxr1gErJydH1157raKjoxUbG6tf/epX2rVrV1Cf6upqTZo0SR06dFDr1q01cuRIffXVV0F99u3bpxEjRqh169bq0KGDJk%2BerJqamsY8FAAAEEKadcBas2aNJkyYoKKiIhUWFurkyZNKTU3VsWPH7D6ZmZlavny5li1bpvXr16uqqkrDhw9XXV2dJKmurk7Dhg3TsWPHtH79ei1btkxvvvmmpkyZ4tRhAQCAJs5lWZbldBGN5fDhw4qNjdWaNWt00003KRAI6JJLLtHLL7%2BsO%2B%2B8U5J04MABxcfH65133tHgwYP17rvvavjw4SotLZXP55MkLVu2TGPGjFF5ebliYmIuuN/Kykp5PB4FAoEf1f%2BnSJpZYHR7AIDmo3j2EKdLcFRDfv5eSLMewTpbIBCQJLVr106SVFJSotraWqWmptp9fD6fEhMTtWHDBknSxo0blZiYaIcrSRo8eLCqq6tVUlJyzv1UV1ersrIyaAIAAC1HiwlYlmUpKytLN9xwgxITEyVJZWVlioyMVNu2bYP6xsXFqayszO4TFxcXtLxt27aKjIy0%2B5wtJydHHo/HnuLj4xvgiAAAQFPVYgLWxIkT9cknn%2Bi11167YF/LsuRyuez57/99vj7fN2PGDAUCAXsqLS39%2BwsHAAAhp0UErEmTJmnlypVavXq1OnfubLd7vV7V1NSooqIiqH95ebk9auX1euuNVFVUVKi2trbeyNYZbrdbMTExQRMAAGg5mnXAsixLEydO1FtvvaUPP/xQCQkJQcv79u2riIgIFRYW2m0HDx7U9u3blZKSIklKTk7W9u3bdfDgQbvPqlWr5Ha71bdv38Y5EAAAEFLCnS6gIU2YMEGvvvqq/uu//kvR0dH2SJTH41FUVJQ8Ho/uvfdeTZkyRe3bt1e7du00depU9erVS7fddpskKTU1VT169FB6erqeeuopffvtt5o6daoyMjIYmQIAAOfUrAPWwoULJUkDBw4Man/xxRc1ZswYSdIf//hHhYeH64477tDx48d16623aunSpQoLC5MkhYWF6e2339b48eN1/fXXKyoqSmlpaZo3b15jHgoAAAghLeo9WE7hPVgAACfwHizegwUAANBsELAAAAAMI2ABAAAYRsACAAAwjIAFAABgGAELAADAMAIWAACAYQQsAAAAwwhYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAQsAAMCwcKcLAAAADSNpZoHTJfxoxbOHOF2CUYxgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAetHeu6555SQkKBWrVqpb9%2B%2BWrdundMlAQCAJoqA9SO8/vrryszM1MyZM/XRRx/pxhtv1NChQ7Vv3z6nSwMAAE0QAetHyM3N1b333qv77rtP3bt31/z58xUfH6%2BFCxc6XRoAAGiCwp0uoKmrqalRSUmJpk%2BfHtSempqqDRs2nHOd6upqVVdX2/OBQECSVFlZaby%2BuupjxrcJAEBja4jPyDPbtCzL%2BLYvhIB1AV9//bXq6uoUFxcX1B4XF6eysrJzrpOTk6PHHnusXnt8fHyD1AgAQKjzPN1w2z569Kg8Hk/D7eAcCFg/ksvlCpq3LKte2xkzZsxQVlaWPX/q1Cl9%2B%2B23at%2B%2B/XnX%2BXtUVlYqPj5epaWliomJMbbd5oRz9MM4PxfGObowztGFcY4urCHOkWVZOnr0qHw%2Bn5Ht/RQErAvo0KGDwsLC6o1WlZeX1xvVOsPtdsvtdge1tWnTpsFqjImJ4V/YC%2BAc/TDOz4Vxji6Mc3RhnKMLM32OGnvk6gwecr%2BAyMhI9e3bV4WFhUHthYWFSklJcagqAADQlDGC9SNkZWUpPT1dSUlJSk5O1uLFi7Vv3z6NGzfO6dIAAEATFDZr1qxZThfR1CUmJqp9%2B/bKzs7WvHnzdPz4cb388svq3bu306UpLCxMAwcOVHg4Wfl8OEc/jPNzYZyjC%2BMcXRjn6MKa0zlyWU58dxEAAKAZ4xksAAAAwwhYAAAAhhGwAAAADCNgAQAAGEbAClHPPfecEhIS1KpVK/Xt21fr1q1zuqQmY9asWXK5XEGT1%2Bt1uixHrV27ViNGjJDP55PL5dKKFSuClluWpVmzZsnn8ykqKkoDBw7Ujh07HKrWGRc6R2PGjKl3XfXv39%2BhahtfTk6Orr32WkVHRys2Nla/%2BtWvtGvXrqA%2B1dXVmjRpkjp06KDWrVtr5MiR%2BuqrrxyquPH9mHM0cODAetfRXXfd5VDFjW/hwoW6%2Buqr7ZeJJicn691337WXN6driIAVgl5//XVlZmZq5syZ%2Buijj3TjjTdq6NCh2rdvn9OlNRk9e/bUwYMH7Wnbtm1Ol%2BSoY8eOqXfv3srLyzvn8rlz5yo3N1d5eXnasmWLvF6vBg0apKNHjzZypc650DmSpCFDhgRdV%2B%2B8804jVuisNWvWaMKECSoqKlJhYaFOnjyp1NRUHTv2/39wPjMzU8uXL9eyZcu0fv16VVVVafjw4aqrq3Ow8sbzY86RJGVkZARdR4sWLXKo4sbXuXNnPfnkkyouLlZxcbFuueUW3X777fb/0DWra8hCyLnuuuuscePGBbVdddVV1vTp0x2qqGn5wx/%2BYPXu3dvpMposSdby5cvt%2BVOnTller9d68skn7bYTJ05YHo/H%2BvOf/%2BxEiY47%2BxxZlmWNHj3auv322x2qqOkpLy%2B3JFlr1qyxLMuyjhw5YkVERFjLli2z%2B%2Bzfv9%2B66KKLrIKCAqfKdNTZ58iyLGvAgAHW73//eweranratm1rPf/8883uGmIEK8TU1NSopKREqampQe2pqanasGGDQ1U1PXv27JHP51NCQoLuuusuff75506X1GTt3btXZWVlQdeU2%2B3WgAEDuKbO8j//8z%2BKjY3VlVdeqYyMDJWXlztdkmMCgYAkqV27dpKkkpIS1dbWBl1HPp9PiYmJLfY6OvscnZGfn68OHTqoZ8%2Bemjp1aosaKf6%2Buro6LVu2TMeOHVNycnKzu4ZC/1WpLczXX3%2Bturq6ej80HRcXV%2B8HqVuqfv366S9/%2BYuuvPJKHTp0SP/%2B7/%2BulJQU7dixQ%2B3bt3e6vCbnzHVzrmvqyy%2B/dKKkJmno0KH6zW9%2Boy5dumjv3r165JFHdMstt6ikpKTej7s3d5ZlKSsrSzfccIMSExMlnb6OIiMj1bZt26C%2BLfW/Tec6R5J09913KyEhQV6vV9u3b9eMGTP08ccf1/u92%2BZs27ZtSk5O1okTJ/SLX/xCy5cvV48ePeT3%2B5vVNUTAClEulyto3rKsem0t1dChQ%2B2/e/XqpeTkZF1xxRV66aWXlJWV5WBlTRvX1A%2B788477b8TExOVlJSkLl266O2339aoUaMcrKzxTZw4UZ988onWr19/wb4t9To63znKyMiw/05MTFTXrl2VlJSkrVu36pprrmnsMh3RrVs3%2Bf1%2BHTlyRG%2B%2B%2BaZGjx6tNWvWnLd/qF5D3CIMMR06dFBYWFi9NF9eXl5vBAKntW7dWr169dKePXucLqVJOvMNS66pn6Zjx47q0qVLi7uuJk2apJUrV2r16tXq3Lmz3e71elVTU6OKioqg/i3xOjrfOTqXa665RhERES3qOoqMjNQ//MM/KCkpSTk5Oerdu7eeeeaZZncNEbBCTGRkpPr27VtvOLmwsFApKSkOVdW0VVdXa%2BfOnerYsaPTpTRJZ25XfP%2Baqqmp0Zo1a7imfsA333yj0tLSFnNdWZaliRMn6q233tKHH36ohISEoOV9%2B/ZVRERE0HV08OBBbd%2B%2BvcVcRxc6R%2BeyY8cO1dbWtpjr6Fwsy1J1dXWzu4bCZs2aNcvpIvDTxMTE6JFHHlGnTp3UqlUrZWdna/Xq1XrxxRfVpk0bp8tz3NSpU%2BV2u2VZlnbv3q2JEydq9%2B7dWrRoUYs9P1VVVfr0009VVlamRYsWqV%2B/foqKilJNTY3atGmjuro65eTkqFu3bqqrq9OUKVO0f/9%2BLV68uMU8X/RD5ygsLEwPP/ywoqOjVVdXJ7/fr/vuu0%2B1tbXKy8trEedowoQJys/P13/%2B53/K5/OpqqpKVVVVCgsLU0REhFq1aqUDBw4oLy9PvXv3ViAQ0Lhx4xQdHa05c%2Bboooua///PX%2BgcffbZZ8rLy1Pr1q1VU1OjDRs26L777lN8fLyeeOKJFnGOHn74YUVGRsqyLJWWlurZZ5/VK6%2B8orlz56pHjx7N6xpy6NuL%2BJn%2B9Kc/WV26dLEiIyOta665JuhrwC3dnXfeaXXs2NGKiIiwfD6fNWrUKGvHjh1Ol%2BWo1atXW5LqTaNHj7Ys6/SrGv7whz9YXq/Xcrvd1k033WRt27bN2aIb2Q%2Bdo%2B%2B%2B%2B85KTU21LrnkEisiIsK69NJLrdGjR1v79u1zuuxGc65zI8l68cUX7T7Hjx%2B3Jk6caLVr186Kioqyhg8fzjn63jnat2%2BfddNNN1nt2rWzIiMjrSuuuMKaPHmy9c033zhbeCP63e9%2BZ392XXLJJdatt95qrVq1yl7enK4hl2VZVmMGOgAAgOYuxMbbAAAAmj4CFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAQsAAMAwAhYAAIBhBCwAAADDCFgAAACGEbAAAAAMI2ABAAAYRsACAAAwjIAFAABgGAELAADAMAIWAACAYf8PfSnKHpCup1MAAAAASUVORK5CYII%3D"/>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12" id="common-4461870699833163556">
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0.0</td>
        <td class="number">89</td>
        <td class="number">0.9%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">10.0</td>
        <td class="number">19</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.6</td>
        <td class="number">16</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">13.16</td>
        <td class="number">13</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">19.2</td>
        <td class="number">13</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">15.1</td>
        <td class="number">13</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">12.0</td>
        <td class="number">13</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">6.0</td>
        <td class="number">13</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">13.28</td>
        <td class="number">12</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">10.8</td>
        <td class="number">12</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="other">
        <td class="fillremaining">Other values (2519)</td>
        <td class="number">9365</td>
        <td class="number">97.8%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12"  id="extreme-4461870699833163556">
            <p class="h4">Minimum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0.0</td>
        <td class="number">89</td>
        <td class="number">0.9%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.01</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:2%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.02</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:2%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.03</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:2%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.04</td>
        <td class="number">2</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr>
</table>
            <p class="h4">Maximum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">29.72</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">29.74</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">29.9</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">29.95</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">29.96</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
    </div>
</div>
</div><div class="row variablerow">
    <div class="col-md-3 namecol">
        <p class="h4 pp-anchor" id="pp_var_fico">fico<br/>
            <small>Numeric</small>
        </p>
    </div><div class="col-md-6">
    <div class="row">
        <div class="col-sm-6">
            <table class="stats ">
                <tr>
                    <th>Distinct count</th>
                    <td>44</td>
                </tr>
                <tr>
                    <th>Unique (%)</th>
                    <td>0.5%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (n)</th>
                    <td>0</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (n)</th>
                    <td>0</td>
                </tr>
            </table>

        </div>
        <div class="col-sm-6">
            <table class="stats ">

                <tr>
                    <th>Mean</th>
                    <td>710.85</td>
                </tr>
                <tr>
                    <th>Minimum</th>
                    <td>612</td>
                </tr>
                <tr>
                    <th>Maximum</th>
                    <td>827</td>
                </tr>
                <tr class="ignore">
                    <th>Zeros (%)</th>
                    <td>0.0%</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="col-md-3 collapse in" id="minihistogram7525602982579363811">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABLCAYAAAA1fMjoAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAAdVJREFUeJzt3EGu0lAYhuG/xGnLnNBduAj35Nih%2B3ER7gLCAto4cCB1oNyRfvGaS0vp8wyBcEpy3hxOc6CZpmmqmZ3P5%2Br7fu5hWbnT6VTH43HWMd/NOtpvbdtW1a8P3HXdEpfAigzDUH3fv8ybOS0SSNM0VVXVdd2qAnn/8curXv/104c7Xck23ebNnHazjwgrIhAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCASLnObditee/q1yAvjRWEEgEAgEAoFAIBAIBAKBQLDZ27z/cwt2Dm4NPxYrCASbXUGeib8juh8rCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAocVN8iR%2Bn9nBYFAIBAIBIKn2IM86s9nWb%2BnCIT72%2BrG3lcsCAQCgUAgsAfhbp5h37JIINM0VVXVMAxv8n4/vn97k/dheX%2BaE7fHbvNmTosEMo5jVVX1fb/E8Dyw/ee/PzeOY%2B33%2B/kupqqaaYEsr9drXS6Xatu2mqaZe3hWZpqmGsexDodD7XbzbpsXCQTWwl0sCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBIKfOa1VTX6iNQYAAAAASUVORK5CYII%3D">

</div>
<div class="col-md-12 text-right">
    <a role="button" data-toggle="collapse" data-target="#descriptives7525602982579363811,#minihistogram7525602982579363811"
       aria-expanded="false" aria-controls="collapseExample">
        Toggle details
    </a>
</div>
<div class="row collapse col-md-12" id="descriptives7525602982579363811">
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#quantiles7525602982579363811"
                                                  aria-controls="quantiles7525602982579363811" role="tab"
                                                  data-toggle="tab">Statistics</a></li>
        <li role="presentation"><a href="#histogram7525602982579363811" aria-controls="histogram7525602982579363811"
                                   role="tab" data-toggle="tab">Histogram</a></li>
        <li role="presentation"><a href="#common7525602982579363811" aria-controls="common7525602982579363811"
                                   role="tab" data-toggle="tab">Common Values</a></li>
        <li role="presentation"><a href="#extreme7525602982579363811" aria-controls="extreme7525602982579363811"
                                   role="tab" data-toggle="tab">Extreme Values</a></li>

    </ul>

    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active row" id="quantiles7525602982579363811">
            <div class="col-md-4 col-md-offset-1">
                <p class="h4">Quantile statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Minimum</th>
                        <td>612</td>
                    </tr>
                    <tr>
                        <th>5-th percentile</th>
                        <td>657</td>
                    </tr>
                    <tr>
                        <th>Q1</th>
                        <td>682</td>
                    </tr>
                    <tr>
                        <th>Median</th>
                        <td>707</td>
                    </tr>
                    <tr>
                        <th>Q3</th>
                        <td>737</td>
                    </tr>
                    <tr>
                        <th>95-th percentile</th>
                        <td>782</td>
                    </tr>
                    <tr>
                        <th>Maximum</th>
                        <td>827</td>
                    </tr>
                    <tr>
                        <th>Range</th>
                        <td>215</td>
                    </tr>
                    <tr>
                        <th>Interquartile range</th>
                        <td>55</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-4 col-md-offset-2">
                <p class="h4">Descriptive statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Standard deviation</th>
                        <td>37.971</td>
                    </tr>
                    <tr>
                        <th>Coef of variation</th>
                        <td>0.053416</td>
                    </tr>
                    <tr>
                        <th>Kurtosis</th>
                        <td>-0.42231</td>
                    </tr>
                    <tr>
                        <th>Mean</th>
                        <td>710.85</td>
                    </tr>
                    <tr>
                        <th>MAD</th>
                        <td>31.264</td>
                    </tr>
                    <tr class="">
                        <th>Skewness</th>
                        <td>0.47126</td>
                    </tr>
                    <tr>
                        <th>Sum</th>
                        <td>6808486</td>
                    </tr>
                    <tr>
                        <th>Variance</th>
                        <td>1441.8</td>
                    </tr>
                    <tr>
                        <th>Memory size</th>
                        <td>74.9 KiB</td>
                    </tr>
                </table>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane col-md-8 col-md-offset-2" id="histogram7525602982579363811">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQCAYAAAByNR6YAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAIABJREFUeJzt3XtwFHW%2B///XGMhw2WQEQjIJIEYLEAm6QiwIIBcvIcjluHhURLJE3awcuYgBQeS7u4ByKRfQs3IWlaPiCq5oeSk8eCLBC%2Bgm4RIIEpYDqAhBMgQwTICFJMDn94dF/xwCgvpJOhOej6quYrrf0/3u6Rrz8tM93R5jjBEAAACsucztBgAAAOobAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWNbA7QYuBadPn9a%2BffsUFRUlj8fjdjsAAFwSjDE6cuSIEhISdNlltTumRMCqBfv27VObNm3cbgMAgEtScXGxWrduXavbJGDVgqioKEnfH%2BDo6GiXuwEA4NJQXl6uNm3aOH%2BHaxMBqxacOS0YHR1NwAIAoJa5cXkOF7kDAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAy8I2YM2ePVs33nijoqKiFBsbqzvuuEPbt28Pqenbt688Hk/INGzYsJCasrIypaeny%2BfzyefzKT09XYcPHw6p2bJli/r06aPGjRurVatWmjFjhowxNb6PAAAgPIVtwFq9erVGjx6t/Px85eTk6OTJk0pNTdWxY8dC6jIzM1VSUuJML7zwQsjy4cOHq7CwUNnZ2crOzlZhYaHS09Od5eXl5brtttuUkJCg9evX67nnntPcuXM1f/78WtlPAAAQfsL2RqPZ2dkhr1955RXFxsaqoKBAvXv3duY3adJEfr//nOvYtm2bsrOzlZ%2Bfr27dukmSFi1apJSUFG3fvl0dOnTQ0qVLdeLECS1evFher1dJSUnasWOH5s%2Bfr6ysLJ4tCAAAqgnbEayzBYNBSVLz5s1D5i9dulQxMTHq1KmTJk6cqCNHjjjL8vLy5PP5nHAlSd27d5fP51Nubq5T06dPH3m9Xqemf//%2B2rdvn7755ptz9lJRUaHy8vKQCQAAXDrCdgTrh4wxysrKUq9evZSUlOTMv%2B%2B%2B%2B5SYmCi/36%2BioiJNmTJFmzdvVk5OjiQpEAgoNja22vpiY2MVCAScmiuvvDJkeVxcnLMsMTGx2vtnz56t6dOn29o9AAAQZupFwBozZoy%2B%2BOILff755yHzMzMznX8nJSWpXbt2Sk5O1saNG9WlSxdJ534%2BkTEmZP7ZNWcucD/f6cEpU6YoKyvLeX3mYZMAAODSEPYBa%2BzYsVq%2BfLnWrFmj1q1b/2htly5d1LBhQ%2B3cuVNdunSR3%2B/X/v37q9UdOHDAGaXy%2B/3OaNYZpaWlkv7/kayzeb3ekFOKQG1Inpp94aI6YsPMNLdbAIAaFbbXYBljNGbMGL3zzjv6%2BOOPz3mq7mxbt25VVVWV4uPjJUkpKSkKBoNat26dU7N27VoFg0H16NHDqVmzZo0qKyudmpUrVyohIaHaqUMAAAApjAPW6NGjtWTJEr3%2B%2BuuKiopSIBBQIBDQ8ePHJUlfffWVZsyYoQ0bNuibb77RBx98oLvuuks33HCDevbsKUnq2LGj0tLSlJmZqfz8fOXn5yszM1ODBg1Shw4dJH1/Gwev16uMjAwVFRXp3Xff1axZs/gFIQAAOK%2BwDVgLFy5UMBhU3759FR8f70zLli2TJEVGRuqjjz5S//791aFDB40bN06pqalatWqVIiIinPUsXbpUnTt3VmpqqlJTU3Xdddfptddec5b7fD7l5ORo7969Sk5O1sMPP6ysrKyQa6wAAAB%2ByGO4JXmNKy8vl8/nUzAYVHR0tNvtoJ7iGiwACOXm39%2BwHcECAACoqwhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAloVtwJo9e7ZuvPFGRUVFKTY2VnfccYe2b98eUlNRUaGxY8cqJiZGTZs21ZAhQ7R3796Qmj179mjw4MFq2rSpYmJiNG7cOFVWVobUrF69Wl27dlWjRo101VVX6fnnn6/x/QMAAOErbAPW6tWrNXr0aOXn5ysnJ0cnT55Uamqqjh075tSMHz9e7777rt544w19/vnnOnr0qAYNGqRTp05Jkk6dOqWBAwfq2LFj%2Bvzzz/XGG2/o7bff1oQJE5x17Nq1S7fffrtuuukmbdq0SU888YTGjRunt99%2Bu9b3GQAAhAePMca43YQNBw4cUGxsrFavXq3evXsrGAyqZcuWeu2113TPPfdIkvbt26c2bdrogw8%2BUP/%2B/fW///u/GjRokIqLi5WQkCBJeuONN5SRkaHS0lJFR0dr8uTJWr58ubZt2%2BZsa9SoUdq8ebPy8vIuqrfy8nL5fD4Fg0FFR0fb33lAUvLUbLdbuGgbZqa53QKAS4Cbf3/DdgTrbMFgUJLUvHlzSVJBQYGqqqqUmprq1CQkJCgpKUm5ubmSpLy8PCUlJTnhSpL69%2B%2BviooKFRQUODU/XMeZmg0bNqiqqqpG9wkAAISnBm43YIMxRllZWerVq5eSkpIkSYFAQJGRkWrWrFlIbVxcnAKBgFMTFxcXsrxZs2aKjIz80Zq4uDidPHlSBw8eVHx8fLV%2BKioqVFFR4bwuLy//5TsJAADCRr0YwRozZoy%2B%2BOIL/f3vf79grTFGHo/Hef3Df19szZmzqud6r/T9Bfg%2Bn8%2BZ2rRpc1H7AQAA6oewD1hjx47V8uXL9cknn6h169bOfL/fr8rKSpWVlYXUl5aWOiNSfr/fGak6o6ysTFVVVT9aU1paqgYNGqhFixbn7GnKlCkKBoPOVFxc/Iv3EwAAhI%2BwDVjGGI0ZM0bvvPOOPv74YyUmJoYs79q1qxo2bKicnBxnXklJiYqKitSjRw9JUkpKioqKilRSUuLUrFy5Ul6vV127dnVqfriOMzXJyclq2LDhOXvzer2Kjo4OmQAAwKUjbAPW6NGjtWTJEr3%2B%2BuuKiopSIBBQIBDQ8ePHJUk%2Bn08PPvigJkyYoI8%2B%2BkibNm3SiBEj1LlzZ916662SpNTUVF177bVKT0/Xpk2b9NFHH2nixInKzMx0QtGoUaO0e/duZWVladu2bXr55Zf10ksvaeLEia7tOwAAqNvCNmAtXLhQwWBQffv2VXx8vDMtW7bMqXnmmWd0xx136O6771bPnj3VpEkTvf/%2B%2B4qIiJAkRUREaMWKFWrUqJF69uypu%2B%2B%2BW3fccYfmzp3rrCMxMVEffPCBPv30U/3617/Wk08%2Bqb/85S%2B68847a32fAQBAeKg398Gqy7gPFmoD98ECgFDcBwsAAKAeIWABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABY1sDtBgBcepKnZrvdwk%2ByYWaa2y0ACDOMYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsMyVgLVkyRKdOHHCjU0DAADUOFcCVlZWlvx%2Bvx566CGtW7fOjRYAAABqjCsBa9%2B%2BfXr55ZdVUlKiXr16qVOnTpo3b54OHDjgRjsAAABWuRKwGjRooKFDh2r58uXas2ePRo4cqZdfflmtW7fW0KFDtWLFChlj3GgNAADgF3P9Ine/369bbrlFffv2lcfj0YYNGzR8%2BHC1a9dOn332mdvtAQAA/GSuBayDBw/q2Wef1fXXX6%2BePXuqtLRU7733nnbv3q1vv/1WgwYN0m9/%2B1u32gMAAPjZXAlYv/nNb9SqVSs9//zzSk9PV3Fxsd566y2lpaXJ4/HoV7/6lSZNmqTdu3f/6HrWrFmjwYMHKyEhQR6PR%2B%2B9917I8oyMDHk8npCpe/fuITUVFRUaO3asYmJi1LRpUw0ZMkR79%2B4NqdmzZ48GDx6spk2bKiYmRuPGjVNlZaWdDwMAANQ7DdzYaHR0tFatWqWbbrrpvDXx8fHauXPnj67n2LFjuv7663X//ffrzjvvPGdNWlqaXnnlFed1ZGRkyPLx48fr/fff1xtvvKEWLVpowoQJGjRokAoKChQREaFTp05p4MCBatmypT7//HMdOnRII0eOlDFGzz333E/YawAAcKlwJWC9%2BuqrF6zxeDy6%2Buqrf7RmwIABGjBgwI/WeL1e%2Bf3%2Bcy4LBoN66aWX9Nprr%2BnWW2%2BV9P09utq0aaNVq1apf//%2BWrlypf75z3%2BquLhYCQkJkqR58%2BYpIyNDM2fOVHR09AX3BQAAXFpcOUX46KOPasGCBdXm/9d//ZcmTJhgdVuffvqpYmNj1b59e2VmZqq0tNRZVlBQoKqqKqWmpjrzEhISlJSUpNzcXElSXl6ekpKSnHAlSf3791dFRYUKCgrOuc2KigqVl5eHTAAA4NLhSsB66623ql0LJUkpKSlatmyZte0MGDBAS5cu1ccff6x58%2BZp/fr1uvnmm1VRUSFJCgQCioyMVLNmzULeFxcXp0Ag4NTExcWFLG/WrJkiIyOdmrPNnj1bPp/Pmdq0aWNtnwAAQN3nyinCgwcPVgs10vfXZh08eNDadu655x7n30lJSUpOTlbbtm21YsUKDR069LzvM8bI4/E4r3/47/PV/NCUKVOUlZXlvC4vLydkAQBwCXFlBOvqq6/Whx9%2BWG3%2Bhx9%2BqMTExBrbbnx8vNq2betcPO/3%2B1VZWamysrKQutLSUmfUyu/3VxupKisrU1VVVbWRrTO8Xq%2Bio6NDJgAAcOlwJWCNHz9ejz32mJ588kn94x//0D/%2B8Q/NmDFDkydP1iOPPFJj2z106JCKi4sVHx8vSeratasaNmyonJwcp6akpERFRUXq0aOHpO9PWxYVFamkpMSpWblypbxer7p27VpjvQIAgPDlyinCzMxMnThxQrNmzdKf/vQnSVLr1q31l7/8RQ888MBFr%2Bfo0aP68ssvnde7du1SYWGhmjdvrubNm2vatGm68847FR8fr2%2B%2B%2BUZPPPGEYmJi9Jvf/EaS5PP59OCDD2rChAlq0aKFmjdvrokTJ6pz587OrwpTU1N17bXXKj09XX/%2B85/13XffaeLEicrMzGRkCgAAnJMrAUuSxo4dq7Fjx6qkpESNGzfW5Zdf/pPXsWHDBvXr1895fea6p5EjR2rhwoXasmWL/va3v%2Bnw4cOKj49Xv379tGzZMkVFRTnveeaZZ9SgQQPdfffdOn78uG655RYtXrxYERERkqSIiAitWLFCDz/8sHr27KnGjRtr%2BPDhmjt37i/8BAAAQH3lMTxVucaVl5fL5/MpGAwy6oUakzw12%2B0W6q0NM9PcbgHAz%2BDm319XrsE6cOCA7r//fl1xxRVq1KiRIiMjQyYAAIBw5sopwoyMDH311Vd67LHHFB8ff97bHQAAAIQjVwLWmjVrtGbNGt1www1ubB4AAKBGuXKKsHXr1oxaAQCAesuVgPXMM89oypQp2rt3rxubBwAAqFGunCJMT0/XkSNH1LZtW0VHR6thw4Yhy3/4QGYAAIBw40rAmjNnjhubBYCfJdxugcFtJQD3uRKwHnzwQTc2CwAAUCtcu5P7N998o8WLF%2Burr77SvHnzFBsbq5UrV6pNmzbq2LGjW20BjnAbtQAA1B2uXOT%2B2WefqVOnTlq9erXefPNNHT16VJK0ceNG/fGPf3SjJQAAAGtcCViTJ0/WtGnT9Mknn4Tcuf3mm29Wfn6%2BGy0BAABY40rA%2BuKLL/Tv//7v1ebHxsbqwIEDLnQEAABgjysB6/LLL1cgEKg2v7CwUK1atXKhIwAAAHtcCVjDhg3T448/rgMHDjh3dF%2B7dq0mTpyoESNGuNESAACANa4ErFmzZsnv9ys%2BPl5Hjx7Vtddeqx49eujGG2/UH/7wBzdaAgAAsMaV2zRERkZq2bJl2rFjhzZu3KjTp0%2BrS5cuuuaaa9xoBwAAwCrX7oMlSe3bt1f79u3dbAEAAMA6VwLW73//%2Bx9d/uKLL9ZSJwAAAPa5ErBKSkpCXldVVWnr1q06cuSIevfu7UZLAAAA1rgSsN5///1q806ePKn/%2BI//4DE5AAAg7LnyK8JzadCggSZOnKg///nPbrcCAADwi7h6kfvZvv76a1VVVbndBgCEtXB6UPmGmWlutwDUCFcC1qRJk0JeG2NUUlKi5cuX67777nOjJQAAAGtcCVh5eXkhry%2B77DK1bNlSc%2BbMUWZmphstAQAAWONKwPrss8/c2CwAAECtqDMXuQMAANQXroxg3Xjjjc5Dni9k3bp1NdwNAACAXa4ErH79%2BumFF15Q%2B/btlZKSIknKz8/X9u3b9dBDD8nr9brRFgAAgBWuBKzDhw9r9OjRmjVrVsj8qVOnav/%2B/frv//5vN9oCAACwwpVrsN58803df//91eZnZGTorbfecqEjAAAAe1wJWF6vV7m5udXm5%2BbmcnoQAACEPVdOEY4bN06jRo3Spk2b1L17d0nfX4O1aNEiPfHEE260BAAAYI0rAWvq1KlKTEzUf/7nf%2Brll1%2BWJHXs2FGLFi3S8OHD3WgJAADAGteeRTh8%2BHDCFAAAqJdcu9FoeXm5Fi9erD/%2B8Y8qKyuTJG3evFklJSVutQQAAGCFKyNYRUVFuvXWW9WkSRMVFxcrIyNDzZo105tvvqm9e/fq1VdfdaMtAAAAK1wZwXr00Uc1fPhwffXVV2rUqJEzf%2BDAgVqzZo0bLQEAAFjjygjW%2BvXrtXDhwmqPy2nVqhWnCAEAQNhzZQQrMjJSR48erTZ/586diomJcaEjAAAAe1wJWEOGDNGTTz6pkydPSpI8Ho%2B%2B/fZbPf744xo6dKgbLQEAAFjjSsCaN2%2Be9u3bJ7/fr%2BPHj%2Bvmm2/WVVddpUaNGlV7PiEAAEC4ceUaLJ/Pp9zcXOXk5Gjjxo06ffq0unTpov79%2B1e7LgsAACDc1HrAqqqq0u23366//vWvSk1NVWpqam23AAAAUKNq/RRhw4YNtWnTJkaqAABAveXKNVgjRozQK6%2B84samAQAAapxrzyJcsGCBVq1apeTkZDVt2jRk2dNPP%2B1SVwAAAL%2BcKwGroKBA1113nSTpiy%2B%2BCFnGqUMAABDuajVgff3110pMTNRnn31Wm5sFAACoVbV6DVa7du104MAB5/U999yj/fv312YLAAAANa5WA5YxJuT1Bx98oGPHjtVmCwAAADXOlV8R2rJmzRoNHjxYCQkJ8ng8eu%2B990KWG2M0bdo0JSQkqHHjxurbt6%2B2bt0aUlNWVqb09HT5fD75fD6lp6fr8OHDITVbtmxRnz591LhxY7Vq1UozZsyoFhYBAADOqNWA5fF4ql3E/ksuaj927Jiuv/56LViw4JzLn376ac2fP18LFizQ%2BvXr5ff7ddttt%2BnIkSNOzfDhw1VYWKjs7GxlZ2ersLBQ6enpzvLy8nLddtttSkhI0Pr16/Xcc89p7ty5mj9//s/uGwAA1G%2B1epG7MUYZGRnyer2SpBMnTmjUqFHVbtPwzjvvXNT6BgwYoAEDBpx3W88%2B%2B6ymTp3qPED61VdfVVxcnF5//XU99NBD2rZtm7Kzs5Wfn69u3bpJkhYtWqSUlBRt375dHTp00NKlS3XixAktXrxYXq9XSUlJ2rFjh%2BbPn6%2BsrCx%2B9QgAAKqp1RGskSNHKjY21jkdN2LECCUkJDivz0w27Nq1S4FAIORRPF6vV3369FFubq4kKS8vTz6fzwlXktS9e3fnWYlnavr06eOEQknq37%2B/9u3bp2%2B%2B%2Beac266oqFB5eXnIBAAALh21OoJVm3dvDwQCkqS4uLiQ%2BXFxcdq9e7dTExsbW%2B29sbGxzvsDgYCuvPLKaus4sywxMbHa%2B2fPnq3p06f/4n0AAADhKawvcr8YZ5/CM8aEzDvXKb4L1Zy5wP18pwenTJmiYDDoTMXFxT%2B7fwAAEH5ce1ROTfP7/ZK%2BH2WKj4935peWljojUH6//5z34Tpw4EBIzZnRrB%2BuQ6o%2BOnaG1%2BsNOaUIAAAuLfV2BCsxMVF%2Bv185OTnOvMrKSq1evVo9evSQJKWkpCgYDGrdunVOzdq1axUMBkNq1qxZo8rKSqdm5cqVSkhIqHbqEAAAQArzgHX06FEVFhaqsLBQ0vcXthcWFmrPnj3yeDwaP368Zs2apXfffVdFRUXKyMhQkyZNNHz4cElSx44dlZaWpszMTOXn5ys/P1%2BZmZkaNGiQOnToIOn72zh4vV5lZGSoqKhI7777rmbNmsUvCAEAwHmF9SnCDRs2qF%2B/fs7rrKwsSd//WnHx4sWaNGmSjh8/rocfflhlZWXq1q2bVq5cqaioKOc9S5cu1bhx45xfGw4ZMiTkvlo%2Bn085OTkaPXq0kpOT1axZM2VlZTnbAgAAOJvHcEvyGldeXi6fz6dgMKjo6Gi328FFSp6a7XYLQL23YWaa2y2gHnPz729YnyIEAACoiwhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQ3cbgAAcOlKnprtdgs/yYaZaW63gDDBCBYAAIBl9TpgTZs2TR6PJ2Ty%2B/3OcmOMpk2bpoSEBDVu3Fh9%2B/bV1q1bQ9ZRVlam9PR0%2BXw%2B%2BXw%2Bpaen6/Dhw7W9KwAAIIzU64AlSZ06dVJJSYkzbdmyxVn29NNPa/78%2BVqwYIHWr18vv9%2Bv2267TUeOHHFqhg8frsLCQmVnZys7O1uFhYVKT093Y1cAAECYqPfXYDVo0CBk1OoMY4yeffZZTZ06VUOHDpUkvfrqq4qLi9Prr7%2Buhx56SNu2bVN2drby8/PVrVs3SdKiRYuUkpKi7du3q0OHDrW6LwAAIDzU%2BxGsnTt3KiEhQYmJiRo2bJi%2B/vprSdKuXbsUCASUmprq1Hq9XvXp00e5ubmSpLy8PPl8PidcSVL37t3l8/mcGgAAgLPV6xGsbt266W9/%2B5vat2%2Bv/fv366mnnlKPHj20detWBQIBSVJcXFzIe%2BLi4rR7925JUiAQUGxsbLX1xsbGOu8/l4qKClVUVDivy8vLbewOAAAIE/U6YA0YMMD5d%2BfOnZWSkqKrr75ar776qrp37y5J8ng8Ie8xxoTMO3v5uWrONnv2bE2fPv2Xtg8AAMJUvT9F%2BENNmzZV586dtXPnTue6rLNHokpLS51RLb/fr/3791dbz4EDB6qNfP3QlClTFAwGnam4uNjiXgAAgLrukgpYFRUV2rZtm%2BLj45WYmCi/36%2BcnBxneWVlpVavXq0ePXpIklJSUhQMBrVu3TqnZu3atQoGg07NuXi9XkVHR4dMAADg0lGvTxFOnDhRgwcP1hVXXKHS0lI99dRTKi8v18iRI%2BXxeDR%2B/HjNmjVL7dq1U7t27TRr1iw1adJEw4cPlyR17NhRaWlpyszM1AsvvCBJ%2Bv3vf69BgwbxC0IAAHBe9Tpg7d27V/fee68OHjyoli1bqnv37srPz1fbtm0lSZMmTdLx48f18MMPq6ysTN26ddPKlSsVFRXlrGPp0qUaN26c82vDIUOGaMGCBa7sDwAACA8eY4xxu4n6rry8XD6fT8FgkNOFYSTcnpEGoObxLMLw4ubf30vqGiwAAIDaQMACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwLIGbjeASwcPTwYAXCoYwQIAALCMgAUAAGAZAQsAAMAyAhYAAIBlXOQOAMBFCrcf62yYmeZ2C5csRrAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABY1sDtBgAAQM1InprtdgsXbcPMNLdbsIoRLAAZEEPlAAAKjklEQVQAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAesi/fWvf1ViYqIaNWqkrl276rPPPnO7JQAAUEcRsC7CsmXLNH78eE2dOlWbNm3STTfdpAEDBmjPnj1utwYAAOogAtZFmD9/vh588EH97ne/U8eOHfXss8%2BqTZs2WrhwodutAQCAOog7uV9AZWWlCgoK9Pjjj4fMT01NVW5u7jnfU1FRoYqKCud1MBiUJJWXl1vvr8%2BMHOvrBACgttXE38gz6zTGWF/3hRCwLuDgwYM6deqU4uLiQubHxcUpEAic8z2zZ8/W9OnTq81v06ZNjfQIAEC4882ruXUfOXJEPp%2Bv5jZwDgSsi%2BTxeEJeG2OqzTtjypQpysrKcl6fPn1a3333nVq0aHHe96B2lJeXq02bNiouLlZ0dLTb7UAck7qK41L3cEx%2BOmOMjhw5ooSEhFrfNgHrAmJiYhQREVFttKq0tLTaqNYZXq9XXq83ZN7ll19eYz3ip4uOjuY/UHUMx6Ru4rjUPRyTn6a2R67O4CL3C4iMjFTXrl2VkxN6rVNOTo569OjhUlcAAKAuYwTrImRlZSk9PV3JyclKSUnRiy%2B%2BqD179mjUqFFutwYAAOqgiGnTpk1zu4m6LikpSS1atNCsWbM0d%2B5cHT9%2BXK%2B99pquv/56t1vDzxAREaG%2BffuqQQP%2B/6Ku4JjUTRyXuodjEj48xo3fLgIAANRjXIMFAABgGQELAADAMgIWAACAZQQsAAAAywhYqBe%2B/fZbjRgxQi1atFCTJk3061//WgUFBc7yjIwMeTyekKl79%2B4h66ioqNDYsWMVExOjpk2basiQIdq7d29t70q9cOWVV1b7vD0ej0aPHi3p4j7rPXv2aPDgwWratKliYmI0btw4VVZWurE79caFjkvfvn2rLRs2bFjIOsrKypSeni6fzyefz6f09HQdPnzYjd2pF06ePKn/9//%2BnxITE9W4cWNdddVVmjFjhk6fPu3UGGM0bdo0JSQkqHHjxurbt6%2B2bt0ash6OSx1kgDD33XffmbZt25qMjAyzdu1as2vXLrNq1Srz5ZdfOjUjR440aWlppqSkxJkOHToUsp5Ro0aZVq1amZycHLNx40bTr18/c/3115uTJ0/W9i6FvdLS0pDPOicnx0gyn3zyiTHmwp/1yZMnTVJSkunXr5/ZuHGjycnJMQkJCWbMmDEu7lX4u9Bx6dOnj8nMzAypOXz4cMg60tLSTFJSksnNzTW5ubkmKSnJDBo0yIW9qR%2Beeuop06JFC/M///M/ZteuXeatt94yv/rVr8yzzz7r1MyZM8dERUWZt99%2B22zZssXcc889Jj4%2B3pSXlzs1HJe6h4CFsDd58mTTq1evH60ZOXKk%2Bbd/%2B7fzLj98%2BLBp2LCheeONN5x53377rbnssstMdna2tV4vVY888oi5%2BuqrzenTpy/qs/7ggw/MZZddZr799lun5u9//7vxer0mGAzWev/11Q%2BPizHfB6xHHnnkvPX//Oc/jSSTn5/vzMvLyzOSzP/93//VeL/10cCBA80DDzwQMm/o0KFmxIgRxhhjTp8%2Bbfx%2Bv5kzZ46z/MSJE8bn85nnn3/eGMNxqas4RYiwt3z5ciUnJ%2Buuu%2B5SbGysbrjhBi1atKha3aeffqrY2Fi1b99emZmZKi0tdZYVFBSoqqpKqampzryEhAQlJSUpNze3VvajvqqsrNSSJUv0wAMPyOPxXNRnnZeXp6SkpJAHtPbv318VFRUhp37x8519XM5YunSpYmJi1KlTJ02cOFFHjhxxluXl5cnn86lbt27OvO7du8vn8/E9%2BZl69eqljz76SDt27JAkbd68WZ9//rluv/12SdKuXbsUCARCvi9er1d9%2BvQJ%2Bb5wXOoebgWLsPf1119r4cKFysrK0hNPPKF169Zp3Lhx8nq9%2Bu1vfytJGjBggO666y61bdtWu3bt0h/%2B8AfdfPPNKigokNfrVSAQUGRkpJo1axay7ri4uGoP%2BsZP89577%2Bnw4cPKyMiQpIv6rAOBQLWHqTdr1kyRkZEcD0vOPi6SdN999ykxMVF%2Bv19FRUWaMmWKNm/e7DyLNRAIKDY2ttq6YmNjOS4/0%2BTJkxUMBnXNNdcoIiJCp06d0syZM3XvvfdKkvO5nv19iIuL0%2B7du50ajkvdQ8BC2Dt9%2BrSSk5M1a9YsSdINN9ygrVu3auHChU7Auueee5z6pKQkJScnq23btlqxYoWGDh163nUbY0L%2B7x4/3UsvvaQBAwaEjEady9mf9bk%2Bd46HPec6LpmZmc6/k5KS1K5dOyUnJ2vjxo3q0qWLJI6LbcuWLdOSJUv0%2Buuvq1OnTiosLNT48eOVkJCgkSNHOnVnf758X%2Bo%2BThEi7MXHx%2Bvaa68NmdexY0ft2bPnR9/Ttm1b7dy5U5Lk9/tVWVmpsrKykLrS0tJq/%2BeIi7d7926tWrVKv/vd75x5F/NZ%2B/3%2Bav/nXVZWpqqqKo6HBec6LufSpUsXNWzYMOR7sn///mp1Bw4c4Lj8TI899pgef/xxDRs2TJ07d1Z6eroeffRRzZ49W9L3n7mkat%2BHs78vHJe6h4CFsNezZ09t3749ZN6OHTvUtm3b877n0KFDKi4uVnx8vCSpa9euatiwoXMqRJJKSkpUVFSkHj161Ezjl4BXXnlFsbGxGjhwoDPvYj7rlJQUFRUVqaSkxKlZuXKlvF6vunbtWns7UE%2Bd67icy9atW1VVVeV8T1JSUhQMBrVu3TqnZu3atQoGg3xPfqZ//etfuuyy0D/FERERzm0azpyy/eH3pbKyUqtXrw75vnBc6iA3r7AHbFi3bp1p0KCBmTlzptm5c6dZunSpadKkiVmyZIkxxpgjR46YCRMmmNzcXLNr1y7zySefmJSUFNOqVauQnzmPGjXKtG7d2qxatcps3LjR3Hzzzdym4Rc4deqUueKKK8zkyZOrLbvQZ33mNg233HKL2bhxo1m1apVp3bo1t2mw4HzH5csvvzTTp08369evN7t27TIrVqww11xzjbnhhhtCvgNpaWnmuuuuM3l5eSYvL8907tyZ2wH8AiNHjjStWrVybtPwzjvvmJiYGDNp0iSnZs6cOcbn85l33nnHbNmyxdx7773nvE0Dx6VuIWChXnj//fdNUlKS8Xq95pprrjEvvviis%2Bxf//qXSU1NNS1btjQNGzY0V1xxhRk5cqTZs2dPyDqOHz9uxowZY5o3b24aN25sBg0aVK0GF%2B/DDz80ksz27durLbuYz3r37t1m4MCBpnHjxqZ58%2BZmzJgx5sSJE7XVfr11vuOyZ88e07t3b9O8eXMTGRlprr76ajNu3Lhq94s7dOiQue%2B%2B%2B0xUVJSJiooy9913nykrK6vNXahXysvLzSOPPGKuuOIK06hRI3PVVVeZqVOnmoqKCqfm9OnT5k9/%2BpPx%2B/3G6/Wa3r17my1btoSsh%2BNS93iMMcbtUTQAAID6hGuwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABY9v8Bbnvmu3Nd3l4AAAAASUVORK5CYII%3D"/>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12" id="common7525602982579363811">
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">687</td>
        <td class="number">548</td>
        <td class="number">5.7%</td>
        <td>
            <div class="bar" style="width:12%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">682</td>
        <td class="number">536</td>
        <td class="number">5.6%</td>
        <td>
            <div class="bar" style="width:11%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">692</td>
        <td class="number">498</td>
        <td class="number">5.2%</td>
        <td>
            <div class="bar" style="width:11%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">697</td>
        <td class="number">476</td>
        <td class="number">5.0%</td>
        <td>
            <div class="bar" style="width:10%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">702</td>
        <td class="number">472</td>
        <td class="number">4.9%</td>
        <td>
            <div class="bar" style="width:10%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">707</td>
        <td class="number">444</td>
        <td class="number">4.6%</td>
        <td>
            <div class="bar" style="width:9%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">667</td>
        <td class="number">438</td>
        <td class="number">4.6%</td>
        <td>
            <div class="bar" style="width:9%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">677</td>
        <td class="number">427</td>
        <td class="number">4.5%</td>
        <td>
            <div class="bar" style="width:9%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">717</td>
        <td class="number">424</td>
        <td class="number">4.4%</td>
        <td>
            <div class="bar" style="width:9%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">662</td>
        <td class="number">414</td>
        <td class="number">4.3%</td>
        <td>
            <div class="bar" style="width:9%">&nbsp;</div>
        </td>
</tr><tr class="other">
        <td class="fillremaining">Other values (34)</td>
        <td class="number">4901</td>
        <td class="number">51.2%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12"  id="extreme7525602982579363811">
            <p class="h4">Minimum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">612</td>
        <td class="number">2</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:34%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">617</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:17%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">622</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:17%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">627</td>
        <td class="number">2</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:34%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">632</td>
        <td class="number">6</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
            <p class="h4">Maximum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">807</td>
        <td class="number">45</td>
        <td class="number">0.5%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">812</td>
        <td class="number">33</td>
        <td class="number">0.3%</td>
        <td>
            <div class="bar" style="width:73%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">817</td>
        <td class="number">6</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:14%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">822</td>
        <td class="number">5</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:12%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">827</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
    </div>
</div>
</div><div class="row variablerow">
    <div class="col-md-3 namecol">
        <p class="h4 pp-anchor" id="pp_var_inq.last.6mths">inq.last.6mths<br/>
            <small>Numeric</small>
        </p>
    </div><div class="col-md-6">
    <div class="row">
        <div class="col-sm-6">
            <table class="stats ">
                <tr>
                    <th>Distinct count</th>
                    <td>28</td>
                </tr>
                <tr>
                    <th>Unique (%)</th>
                    <td>0.3%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (n)</th>
                    <td>0</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (n)</th>
                    <td>0</td>
                </tr>
            </table>

        </div>
        <div class="col-sm-6">
            <table class="stats ">

                <tr>
                    <th>Mean</th>
                    <td>1.5775</td>
                </tr>
                <tr>
                    <th>Minimum</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>Maximum</th>
                    <td>33</td>
                </tr>
                <tr class="alert">
                    <th>Zeros (%)</th>
                    <td>38.0%</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="col-md-3 collapse in" id="minihistogram3180673390344241520">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABLCAYAAAA1fMjoAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAAb5JREFUeJzt17Fq21AUx%2BGjkFXybqyHKOQVCnmgboFuGfso3bN2z1vY%2BAEkOnSo1aF1l8AfAvFVnX7faqRzBPeHud2yLEs1djgcahzH1mO5cvv9vna7XdOZt02n/dH3fVX9/uBhGNZYgSsyTVON4/j33LS0SiBd11VV1TAMLwK5e3h69fueH%2B/fZC/%2Bbedz09JN84lwRQQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCG7XXuAt3D08vfqZ58f7C2zCe%2BMfBAKBQCAQCFa5gyzLUlVV0zS9%2BO3nj%2B9Ndvjw6evFZ3z7/PHiM/4H53NyPjctrRLIPM9VVTWO4xrjm9l8WXuD92We59psNk1ndssKWZ5Opzoej9X3fXVd13o8V2ZZlprnubbbbd3ctL0VrBIIXAuXdAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCASCX/U3Q3OE5qBUAAAAAElFTkSuQmCC">

</div>
<div class="col-md-12 text-right">
    <a role="button" data-toggle="collapse" data-target="#descriptives3180673390344241520,#minihistogram3180673390344241520"
       aria-expanded="false" aria-controls="collapseExample">
        Toggle details
    </a>
</div>
<div class="row collapse col-md-12" id="descriptives3180673390344241520">
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#quantiles3180673390344241520"
                                                  aria-controls="quantiles3180673390344241520" role="tab"
                                                  data-toggle="tab">Statistics</a></li>
        <li role="presentation"><a href="#histogram3180673390344241520" aria-controls="histogram3180673390344241520"
                                   role="tab" data-toggle="tab">Histogram</a></li>
        <li role="presentation"><a href="#common3180673390344241520" aria-controls="common3180673390344241520"
                                   role="tab" data-toggle="tab">Common Values</a></li>
        <li role="presentation"><a href="#extreme3180673390344241520" aria-controls="extreme3180673390344241520"
                                   role="tab" data-toggle="tab">Extreme Values</a></li>

    </ul>

    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active row" id="quantiles3180673390344241520">
            <div class="col-md-4 col-md-offset-1">
                <p class="h4">Quantile statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Minimum</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>5-th percentile</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Q1</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Median</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>Q3</th>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th>95-th percentile</th>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th>Maximum</th>
                        <td>33</td>
                    </tr>
                    <tr>
                        <th>Range</th>
                        <td>33</td>
                    </tr>
                    <tr>
                        <th>Interquartile range</th>
                        <td>2</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-4 col-md-offset-2">
                <p class="h4">Descriptive statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Standard deviation</th>
                        <td>2.2002</td>
                    </tr>
                    <tr>
                        <th>Coef of variation</th>
                        <td>1.3948</td>
                    </tr>
                    <tr>
                        <th>Kurtosis</th>
                        <td>26.288</td>
                    </tr>
                    <tr>
                        <th>Mean</th>
                        <td>1.5775</td>
                    </tr>
                    <tr>
                        <th>MAD</th>
                        <td>1.4949</td>
                    </tr>
                    <tr class="">
                        <th>Skewness</th>
                        <td>3.5842</td>
                    </tr>
                    <tr>
                        <th>Sum</th>
                        <td>15109</td>
                    </tr>
                    <tr>
                        <th>Variance</th>
                        <td>4.8411</td>
                    </tr>
                    <tr>
                        <th>Memory size</th>
                        <td>74.9 KiB</td>
                    </tr>
                </table>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane col-md-8 col-md-offset-2" id="histogram3180673390344241520">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQCAYAAAByNR6YAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAIABJREFUeJzt3X9cVvX9//En8eMSnVzhD7i8lBm2Mg1zBU3RTFeJmj9qtmWjmKxiMX8wRFapnzbXJpSZOaN0OUtXGm0fo5v7aAS5hnkDTEhMzI/6mRaYIFp4oU4B8Xz/8MuZV2haHThe%2BLjfbud24zrndb2v1zmdjafvc66Dn2EYhgAAAGCZK%2BxuAAAAoL0hYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMUIWAAAABYjYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMUIWAAAABYjYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMUIWAAAABYjYAEAAFgswO4GLgenT5/WgQMH1LlzZ/n5%2BdndDgAAlwXDMHT06FG53W5dcUXbzikRsNrAgQMHFBERYXcbAABcliorK9WrV682/UwCVhvo3LmzpDP/gUNCQmzuBgCAy0NdXZ0iIiLM38NtiYDVBpovC4aEhBCwAABoY3bcnsNN7gAAABYjYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMX4Y88%2BLmZOrt0tXLSSeaPtbgEAgDbBDBYAAIDFCFgAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWMxnA9apU6f0X//1X4qMjFRwcLD69OmjJ598UqdPnzZrDMPQ3Llz5Xa7FRwcrBEjRmjHjh1e49TW1iohIUFOp1NOp1MJCQk6cuSIV8327ds1fPhwBQcHq2fPnnryySdlGEab7CcAAPA9Phuwnn76aS1dulRZWVnauXOn5s%2Bfr2eeeUbPP/%2B8WTN//nwtXLhQWVlZ2rJli1wul0aOHKmjR4%2BaNfHx8SorK1Nubq5yc3NVVlamhIQEc3tdXZ1Gjhwpt9utLVu26Pnnn9eCBQu0cOHCNt1fAADgO3z2Se5FRUW66667NHbsWEnSVVddpddff10lJSWSzsxeLVq0SHPmzNHEiRMlSStXrlR4eLhWr16tRx55RDt37lRubq6Ki4s1aNAgSdKyZcsUGxurXbt2qW/fvlq1apVOnjypFStWyOFwKCoqSrt379bChQuVlpYmPz8/ew4AAAC4ZPnsDNYtt9yiDRs2aPfu3ZKkbdu2adOmTbrzzjslSfv27VN1dbXi4uLM9zgcDg0fPlyFhYWSzoQ0p9NphitJGjx4sJxOp1fN8OHD5XA4zJpRo0bpwIED%2BuSTT1p7NwEAgA/y2Rmsxx57TB6PR9ddd538/f3V1NSkefPm6ac//akkqbq6WpIUHh7u9b7w8HB9%2BumnZk1YWFiLscPCwsz3V1dX66qrrmoxRvO2yMjIFu%2Bvr69XfX29%2Bbquru4b7iUAAPBFPjuD9cYbb%2Bi1117T6tWr9eGHH2rlypVasGCBVq5c6VX35Ut4hmF4rTvXJb4L1TTf4H6%2By4OZmZnmTfNOp1MRERFfb%2BcAAIBP89mA9etf/1qPP/647rvvPg0YMEAJCQmaMWOGMjMzJUkul0vSf2aymtXU1JgzUC6XSwcPHmwx9qFDh7xqzjWG1HJ2rNmsWbPk8XjMpbKy8lvsKQAA8DU%2BG7D%2B/e9/64orvNv39/c3H9MQGRkpl8ul/Px8c3tDQ4MKCgo0ZMgQSVJsbKw8Ho8%2B%2BOADs2bz5s3yeDxeNRs3blRDQ4NZk5eXJ7fb3eLSYTOHw6GQkBCvBQAAXD58NmCNHz9e8%2BbN07p16/TJJ58oJydHCxcu1I9%2B9CNJZy7fpaamKiMjQzk5OSovL1diYqI6duyo%2BPh4SVK/fv00evRoJSUlqbi4WMXFxUpKStK4cePUt29fSWce4%2BBwOJSYmKjy8nLl5OQoIyODbxACAIDz8tmb3J9//nk98cQTmjJlimpqauR2u/XII4/oN7/5jVnz6KOP6sSJE5oyZYpqa2s1aNAg5eXlqXPnzmbNqlWrlJKSYn7bcMKECcrKyjK3O51O5efna%2BrUqYqJiVFoaKjS0tKUlpbWdjsLAAB8ip/BI8lbXV1dnZxOpzwej%2BWXC2Pm5Fo6XmsqmTfa7hYAAJeR1vz9eyE%2Be4kQAADgUkXAAgAAsBgBCwAAwGIELAAAAIsRsAAAACxGwAIAALAYAQsAAMBiBCwAAACLEbAAAAAsRsACAACwGAELAADAYgQsAAAAixGwAAAALEbAAgAAsBgBCwAAwGIELAAAAIsRsAAAACxGwAIAALAYAQsAAMBiBCwAAACLEbAAAAAsRsACAACwGAELAADAYgQsAAAAixGwAAAALEbAAgAAsJjPBqyrrrpKfn5%2BLZapU6dKkurr6zV9%2BnR169ZNnTp10oQJE7R//36vMSoqKjR%2B/Hh16tRJ3bp1U0pKihoaGrxqCgoKFB0drQ4dOqhPnz5aunRpm%2B0jAADwTT4bsLZs2aKqqipzyc/PlyT95Cc/kSSlpqYqJydH2dnZ2rRpk44dO6Zx48apqalJktTU1KSxY8fq%2BPHj2rRpk7Kzs7VmzRrNnDnT/Ix9%2B/bpzjvv1LBhw7R161bNnj1bKSkpWrNmTdvvMAAA8Bl%2BhmEYdjdhhdTUVP3P//yP9uzZo7q6OnXv3l2vvvqqJk2aJEk6cOCAIiIitH79eo0aNUpvv/22xo0bp8rKSrndbklSdna2EhMTVVNTo5CQED322GNau3atdu7caX5OcnKytm3bpqKioovura6uTk6nUx6PRyEhIZbud8ycXEvHa00l80bb3QIA4DLSmr9/L8RnZ7DO1tDQoNdee00PPvig/Pz8VFpaqsbGRsXFxZk1brdbUVFRKiwslCQVFRUpKirKDFeSNGrUKNXX16u0tNSsOXuM5pqSkhI1Njaet5/6%2BnrV1dV5LQAA4PLRLgLWW2%2B9pSNHjigxMVGSVF1draCgIIWGhnrVhYeHq7q62qwJDw/32h4aGqqgoKCvrAkPD9epU6d0%2BPDh8/aTmZkpp9NpLhEREd92FwEAgA9pFwFr%2BfLlGjNmjNds1LkYhiE/Pz/z9dk/X2xN8xXVc7232axZs%2BTxeMylsrLyovYDAAC0Dz4fsD799FO9%2B%2B67evjhh811LpdLDQ0Nqq2t9aqtqakxZ6RcLpc5U9WstrZWjY2NX1lTU1OjgIAAde3a9bw9ORwOhYSEeC0AAODy4fMB65VXXlFYWJjGjh1rrouOjlZgYKD5zUJJqqqqUnl5uYYMGSJJio2NVXl5uaqqqsyavLw8ORwORUdHmzVnj9FcExMTo8DAwNbcLQAA4MN8OmCdPn1ar7zyiiZPnqyAgABzvdPp1EMPPaSZM2dqw4YN2rp1qx544AENGDBAd9xxhyQpLi5O/fv3V0JCgrZu3aoNGzYoPT1dSUlJ5oxTcnKyPv30U6WlpWnnzp16%2BeWXtXz5cqWnp9uyvwAAwDcEXLjk0vXuu%2B%2BqoqJCDz74YIttzz33nAICAnTvvffqxIkTuv3227VixQr5%2B/tLkvz9/bVu3TpNmTJFQ4cOVXBwsOLj47VgwQJzjMjISK1fv14zZszQCy%2B8ILfbrcWLF%2Buee%2B5ps30EAAC%2Bp908B%2BtSxnOwzuA5WACAtsRzsAAAANoRAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMUIWAAAABYjYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMUIWAAAABYjYAEAAFiMgAUAAGAxnw5Yn332mR544AF17dpVHTt21Pe//32Vlpaa2w3D0Ny5c%2BV2uxUcHKwRI0Zox44dXmPU1tYqISFBTqdTTqdTCQkJOnLkiFfN9u3bNXz4cAUHB6tnz5568sknZRhGm%2BwjAADwPT4bsGprazV06FAFBgbq7bff1scff6xnn31WV155pVkzf/58LVy4UFlZWdqyZYtcLpdGjhypo0ePmjXx8fEqKytTbm6ucnNzVVZWpoSEBHN7XV2dRo4cKbfbrS1btuj555/XggULtHDhwjbdXwAA4DsC7G7gm3r66acVERGhV155xVx31VVXmT8bhqFFixZpzpw5mjhxoiRp5cqVCg8P1%2BrVq/XII49o586dys3NVXFxsQYNGiRJWrZsmWJjY7Vr1y717dtXq1at0smTJ7VixQo5HA5FRUVp9%2B7dWrhwodLS0uTn59em%2Bw0AAC59PjuDtXbtWsXExOgnP/mJwsLCdOONN2rZsmXm9n379qm6ulpxcXHmOofDoeHDh6uwsFCSVFRUJKfTaYYrSRo8eLCcTqdXzfDhw%2BVwOMyaUaNG6cCBA/rkk09aeS8BAIAv8tmAtXfvXi1ZskTXXHON3nnnHSUnJyslJUV/%2BctfJEnV1dWSpPDwcK/3hYeHm9uqq6sVFhbWYuywsDCvmnONcfZnfFl9fb3q6uq8FgAAcPnw2UuEp0%2BfVkxMjDIyMiRJN954o3bs2KElS5boZz/7mVn35Ut4hmF4rTvXJb4L1TTf4H6%2By4OZmZn63e9%2B9zX3CAAAtBc%2BO4PVo0cP9e/f32tdv379VFFRIUlyuVySWs4y1dTUmDNQLpdLBw8ebDH2oUOHvGrONYbUcnas2axZs%2BTxeMylsrLy6%2B4eAADwYT4bsIYOHapdu3Z5rdu9e7d69%2B4tSYqMjJTL5VJ%2Bfr65vaGhQQUFBRoyZIgkKTY2Vh6PRx988IFZs3nzZnk8Hq%2BajRs3qqGhwazJy8uT2%2B32uqn%2BbA6HQyEhIV4LAAC4fPhswJoxY4aKi4uVkZGh//u//9Pq1av10ksvaerUqZLOXL5LTU1VRkaGcnJyVF5ersTERHXs2FHx8fGSzsx4jR49WklJSSouLlZxcbGSkpI0btw49e3bV9KZxzg4HA4lJiaqvLxcOTk5ysjI4BuEAADgvHz2Hqybb75ZOTk5mjVrlp588klFRkZq0aJFuv/%2B%2B82aRx99VCdOnNCUKVNUW1urQYMGKS8vT507dzZrVq1apZSUFPPbhhMmTFBWVpa53el0Kj8/X1OnTlVMTIxCQ0OVlpamtLS0tttZAADgU/wMHkne6urq6uR0OuXxeCy/XBgzJ9fS8VpTybzRdrcAALiMtObv3wvx2UuEAAAAlyoCFgAAgMUIWAAAABYjYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMUIWAAAABYjYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWsyVgvfbaazp58qQdHw0AANDqbAlYaWlpcrlceuSRR/TBBx/Y0QIAAECrsSVgHThwQC%2B//LKqqqp0yy236Prrr9ezzz6rQ4cO2dEOAACApWwJWAEBAZo4caLWrl2riooKTZ48WS%2B//LJ69eqliRMnat26dTIMw47WAAAAvjXbb3J3uVy6/fbbNWLECPn5%2BamkpETx8fG65ppr9P7779vdHgAAwNdmW8A6fPiwFi1apIEDB2ro0KGqqanRW2%2B9pU8//VSfffaZxo0bp5/97Gd2tQcAAPCNBdjxoT/60Y%2B0fv16RUZG6uGHH9bkyZPVvXt3c/t3vvMdPfroo1q8eLEd7QEAAHwrtsxghYSE6N1339X//u//Kj093StcNevRo4f27Nlz3jHmzp0rPz8/r8XlcpnbDcPQ3Llz5Xa7FRwcrBEjRmjHjh1eY9TW1iohIUFOp1NOp1MJCQk6cuSIV8327ds1fPhwBQcHq2fPnnryySe5PwwAAHwlWwLWypUrNWzYsK%2Bs8fPz09VXX/2VNddff72qqqrMZfv27ea2%2BfPna%2BHChcrKytKWLVvkcrk0cuRIHT161KyJj49XWVmZcnNzlZubq7KyMiUkJJjb6%2BrqNHLkSLndbm3ZskXPP/%2B8FixYoIULF37DPQcAAJcDWy4RzpgxQ1dffbWmTZvmtf6FF17Q3r179eyzz17UOAEBAV6zVs0Mw9CiRYs0Z84cTZw4UdKZUBceHq7Vq1frkUce0c6dO5Wbm6vi4mINGjRIkrRs2TLFxsZq165d6tu3r1atWqWTJ09qxYoVcjgcioqK0u7du7Vw4UKlpaXJz8/vWx4JAADQHtkyg/W3v/1NgwcPbrE%2BNjZWb7zxxkWPs2fPHrndbkVGRuq%2B%2B%2B7T3r17JUn79u1TdXW14uLizFqHw6Hhw4ersLBQklRUVCSn02mGK0kaPHiwnE6nV83w4cPlcDjMmlGjRunAgQP65JNPzttXfX296urqvBYAAHD5sCVgHT58WKGhoS3Wh4SE6PDhwxc1xqBBg/SXv/xF77zzjpYtW6bq6moNGTJEn3/%2BuaqrqyVJ4eHhXu8JDw83t1VXVyssLKzFuGFhYV415xqjedv5ZGZmmvd1OZ1ORUREXNQ%2BAQCA9sGWgHX11VfrnXfeabH%2BnXfeUWRk5EWNMWbMGN1zzz0aMGCA7rjjDq1bt07SmUuBzb58Cc8wDK9157rEd6Ga5hvcv%2Bry4KxZs%2BTxeMylsrLyovYJAAC0D7bcg5WamqrU1FR9/vnnuu222yRJGzZs0Pz587VgwYJvNGanTp00YMAA7dmzR3fffbekM7NMPXr0MGtqamrMGSiXy6WDBw%2B2GOfQoUNeNV%2BeqaqpqZHUcnbsbA6Hw%2BuyIgAAuLzYMoOVlJSkp556Si%2B%2B%2BKKGDRumYcOG6c9//rMWL16s5OTkbzRmfX29du7cqR49eigyMlIul0v5%2Bfnm9oaGBhUUFGjIkCGSztzv5fF4vP7Y9ObNm%2BXxeLxqNm7cqIaGBrMmLy9PbrdbV1111TfqEwAAtH%2B2Pcl9%2BvTpqqqq0meffaYvvvhCFRUVevDBBy/6/enp6SooKNC%2Bffu0efNm/fjHP1ZdXZ0mT54sPz8/paamKiMjQzk5OSovL1diYqI6duyo%2BPh4SVK/fv00evRoJSUlqbi4WMXFxUpKStK4cePUt29fSWce4%2BBwOJSYmKjy8nLl5OQoIyODbxACAICvZMslwrOdfQnv69i/f79%2B%2BtOf6vDhw%2BrevbsGDx6s4uJi9e7dW5L06KOP6sSJE5oyZYpqa2s1aNAg5eXlqXPnzuYYq1atUkpKivltwwkTJigrK8vc7nQ6lZ%2Bfr6lTpyomJkahoaFKS0tTWlrat9hjAADQ3vkZNjyW/NChQ3r00Ue1YcMG1dTU6PTp017bz74k1x7U1dXJ6XTK4/EoJCTE0rFj5uRaOl5rKpk32u4WAACXkdb8/XshtsxgJSYm6l//%2Bpd%2B/etfq0ePHlxuAwAA7YotAWvjxo3auHGjbrzxRjs%2BHgAAoFXZcpN7r169mLUCAADtli0B67nnntOsWbO0f/9%2BOz4eAACgVdlyiTAhIUFHjx5V7969FRISosDAQK/tzQ/zBAAA8EW2BKynnnrKjo8FAABoE7YErIceesiOjwUAAGgTtj3J/ZNPPtHcuXOVkJBgXhLMy8vTzp077WoJAADAErYErPfff1/XX3%2B9CgoK9Ne//lXHjh2TJH344Yf6zW9%2BY0dLAAAAlrElYD322GOaO3eu3nvvPQUFBZnrb7vtNhUXF9vREgAAgGVsCVgfffSRfvzjH7dYHxYWpkOHDtnQEQAAgHVsCVhXXnmlqqurW6wvKytTz549begIAADAOrYErPvuu0%2BPP/64Dh06ZD7RffPmzUpPT9cDDzxgR0sAAACWsSVgZWRkyOVyqUePHjp27Jj69%2B%2BvIUOG6Oabb9YTTzxhR0sAAACWseU5WEFBQXrjjTe0e/duffjhhzp9%2BrRuuukmXXfddXa0AwAAYClbAlaza6%2B9Vtdee62dLQAAAFjOloD1i1/84iu3v/TSS23UCQAAgPVsCVhVVVVerxsbG7Vjxw4dPXpUt956qx0tAQAAWMaWgPX3v/%2B9xbpTp07pl7/8pfr162dDRwAAANax7W8RfllAQIDS09P1zDPP2N0KAADAt3LJBCxJ2rt3rxobG%2B1uAwAA4Fux5RLho48%2B6vXaMAxVVVVp7dq1uv/%2B%2B%2B1oCQAAwDK2BKyioiKv11dccYW6d%2B%2Bup556SklJSXa0BAAAYBlbAtb7779vx8cCAAC0iUvqHiwAAID2wJaAdfPNN%2BsHP/jBRS0XKzMzU35%2BfkpNTTXX1dfXa/r06erWrZs6deqkCRMmaP/%2B/V7vq6io0Pjx49WpUyd169ZNKSkpamho8KopKChQdHS0OnTooD59%2Bmjp0qXf7gAAAIB2zZaA9cMf/lC7du2SYRgaPHiwBg8eLEnatWuXRowYoVGjRpnLxdiyZYteeukl3XDDDV7rU1NTlZOTo%2BzsbG3atEnHjh3TuHHj1NTUJElqamrS2LFjdfz4cW3atEnZ2dlas2aNZs6caY6xb98%2B3XnnnRo2bJi2bt2q2bNnKyUlRWvWrLHoaAAAgPbGlnuwjhw5oqlTpyojI8Nr/Zw5c3Tw4EH9%2Bc9/vuixjh07pvvvv1/Lli3TH/7wB3O9x%2BPR8uXL9eqrr%2BqOO%2B6QJL322muKiIjQu%2B%2B%2Bq1GjRikvL08ff/yxKisr5Xa7JUnPPvusEhMTNW/ePIWEhGjp0qX67ne/q0WLFkmS%2BvXrp5KSEi1YsED33HPPtz0UAACgHbJlBuuvf/2rfv7zn7dYn5iYqL/97W9fa6ypU6dq7NixZohqVlpaqsbGRsXFxZnr3G63oqKiVFhYKOnMtxmjoqLMcCVJo0aNUn19vUpLS82as8dorikpKeGZXQAA4JxsmcFyOBwqLCzUNddc47W%2BsLBQDofjosfJzs5WaWmpSkpKWmyrrq5WUFCQQkNDvdaHh4erurrarAkPD/faHhoaqqCgoK%2BsCQ8P16lTp3T48GH16NGjxWfX19ervr7efF1XV3fR%2BwQAAHyfLQErJSVFycnJ2rp1q3n/VXFxsZYtW6bZs2df1BiVlZX61a9%2Bpby8PHXo0OGiP9swDPn5%2BZmvz/75YmsMwzjve6UzN9z/7ne/u%2BieAABA%2B2LLJcI5c%2BZo%2BfLlKioq0i9%2B8Qv94he/UFFRkZYtW6Y5c%2BZc1BilpaWqqalRdHS0AgICFBAQoIKCAi1evFgBAQEKDw9XQ0ODamtrvd5XU1Njzki5XC5zpqpZbW2tGhsbv7KmpqZGAQEB6tq16zl7mzVrljwej7lUVlZe1D4BAID2wZYZLEmKj49XfHz8N37/7bffru3bt3ut%2B/nPf67rrrtOjz32mCIiIhQYGKj8/Hzde%2B%2B9kqSqqiqVl5dr/vz5kqTY2FjNmzdPVVVV5qW%2BvLw8ORwORUdHmzV///vfvT4nLy9PMTExCgwMPGdvDofja13qBAAA7YttAauurk5vvvmm9u7dqxkzZig0NFTbtm1TWFjYOe9r%2BrLOnTsrKirKa12nTp3UtWtXc/1DDz2kmTNnqmvXrurSpYvS09M1YMAA84b4uLg49e/fXwkJCXrmmWf0xRdfKD09XUlJSQoJCZEkJScnKysrS2lpaUpKSlJRUZGWL1%2Bu119/3eIjAgAA2gtbAlZ5ebnuuOMOdezYUZWVlUpMTFRoaKj%2B%2Bte/av/%2B/Vq5cqUln/Pcc88pICBA9957r06cOKHbb79dK1askL%2B/vyTJ399f69at05QpUzR06FAFBwcrPj5eCxYsMMeIjIzU%2BvXrNWPGDL3wwgtyu91avHgxj2gAAADn5Wc037HdhkaOHKkBAwbo2WefVUhIiLZt26Y%2BffqosLBQ999/v/bt29fWLbWquro6OZ1OeTwec2bMKjFzci0drzWVzBttdwsAgMtIa/7%2BvRBbZrC2bNmiJUuWtPgWXs%2BePVVVVWVHSwAAAJax5VuEQUFBOnbsWIv1e/bsUbdu3WzoCAAAwDq2BKwJEybo97//vU6dOiXpzPOkPvvsMz3%2B%2BOOaOHGiHS0BAABYxpaA9eyzz%2BrAgQNyuVw6ceKEbrvtNvXp00cdOnRo8fcJAQAAfI0t92A5nU4VFhYqPz9fH374oU6fPq2bbrpJo0aNOu/T0QEAAHxFmwesxsZG3XnnnXrxxRcVFxfX4g8pAwAA%2BLo2v0QYGBiorVu3MlMFAADaLVvuwXrggQf0yiuv2PHRAAAArc62P5WTlZWld999VzExMerUqZPXtua/FQgAAOCLbAlYpaWluuGGGyRJH330kdc2Lh0CAABf16YBa%2B/evYqMjNT777/flh8LAADQptr0HqxrrrlGhw4dMl9PmjRJBw8ebMsWAAAAWl2bBqwv/13p9evX6/jx423ZAgAAQKuz5VuEAAAA7VmbBiw/P78WN7FzUzsAAGhv2vQmd8MwlJiYKIfDIUk6efKkkpOTWzym4c0332zLtgAAACzVpgFr8uTJXq8feOCBtvx4AACANtGmAYuntwMAgMsBN7kDAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMUIWAAAABbz2YC1ZMkS3XDDDQoJCVFISIhiY2P19ttvm9vr6%2Bs1ffp0devWTZ06ddKECRO0f/9%2BrzEqKio0fvx4derUSd26dVNKSooaGhq8agoKChQdHa0OHTqoT58%2BWrp0aZvsHwAA8F0%2BG7B69eqlp556SiUlJSopKdFtt92mu%2B66Szt27JAkpaamKicnR9nZ2dq0aZOOHTumcePGqampSZLU1NSksWPH6vjx49q0aZOys7O1Zs0azZw50/yMffv26c4779SwYcO0detWzZ49WykpKVqzZo0t%2BwwAAHyDn2EYht1NWKVLly565pln9OMf/1jdu3fXq6%2B%2BqkmTJkmSDhw4oIiICK0yhJ3rAAAWeElEQVRfv16jRo3S22%2B/rXHjxqmyslJut1uSlJ2drcTERNXU1CgkJESPPfaY1q5dq507d5qfkZycrG3btqmoqOii%2B6qrq5PT6ZTH41FISIil%2BxwzJ9fS8VpTybzRdrcAALiMtObv3wvx2RmsszU1NSk7O1vHjx9XbGysSktL1djYqLi4OLPG7XYrKipKhYWFkqSioiJFRUWZ4UqSRo0apfr6epWWlpo1Z4/RXFNSUqLGxsbz9lNfX6%2B6ujqvBQAAXD58OmBt375d3/nOd%2BRwOJScnKycnBz1799f1dXVCgoKUmhoqFd9eHi4qqurJUnV1dUKDw/32h4aGqqgoKCvrAkPD9epU6d0%2BPDh8/aVmZkpp9NpLhEREVbsLgAA8BE%2BHbD69u2rsrIyFRcX65e//KUmT56sjz/%2B%2BLz1hmHIz8/PfH32zxdb03xF9VzvbTZr1ix5PB5zqaysvOh9AgAAvi/A7ga%2BjaCgIH3ve9%2BTJMXExGjLli364x//qEmTJqmhoUG1tbVes1g1NTUaMmSIJMnlcmnz5s1e49XW1qqxsdGctXK5XOZs1tljBAQEqGvXrufty%2BFwyOFwWLKPAADA9/j0DNaXGYah%2Bvp6RUdHKzAwUPn5%2Bea2qqoqlZeXmwErNjZW5eXlqqqqMmvy8vLkcDgUHR1t1pw9RnNNTEyMAgMD22CPAACAL/LZGazZs2drzJgxioiI0NGjR5Wdna1//vOfys3NldPp1EMPPaSZM2eqa9eu6tKli9LT0zVgwADdcccdkqS4uDj1799fCQkJeuaZZ/TFF18oPT1dSUlJ5jcNkpOTlZWVpbS0NCUlJamoqEjLly/X66%2B/bueuAwCAS5zPBqyDBw8qISFBVVVVcjqduuGGG5Sbm6uRI0dKkp577jkFBATo3nvv1YkTJ3T77bdrxYoV8vf3lyT5%2B/tr3bp1mjJlioYOHarg4GDFx8drwYIF5mdERkZq/fr1mjFjhl544QW53W4tXrxY99xzjy37DAAAfEO7eg7WpYrnYJ3Bc7AAAG2J52ABAAC0IwQsAAAAixGwAAAALEbAAgAAsBgBCwAAwGIELAAAAIsRsAAAACxGwAIAALAYAQsAAMBiBCwAAACLEbAAAAAsRsACAACwGAELAADAYgQsAAAAixGwAAAALEbAAgAAsBgBCwAAwGIELAAAAIsRsAAAACxGwAIAALAYAQsAAMBiBCwAAACLEbAAAAAsRsACAACwGAELAADAYj4bsDIzM3XzzTerc%2BfOCgsL0913361du3Z51dTX12v69Onq1q2bOnXqpAkTJmj//v1eNRUVFRo/frw6deqkbt26KSUlRQ0NDV41BQUFio6OVocOHdSnTx8tXbq01fcPAAD4Lp8NWAUFBZo6daqKi4uVn5%2BvU6dOKS4uTsePHzdrUlNTlZOTo%2BzsbG3atEnHjh3TuHHj1NTUJElqamrS2LFjdfz4cW3atEnZ2dlas2aNZs6caY6xb98%2B3XnnnRo2bJi2bt2q2bNnKyUlRWvWrGnzfQYAAL7BzzAMw%2B4mrHDo0CGFhYWpoKBAt956qzwej7p3765XX31VkyZNkiQdOHBAERERWr9%2BvUaNGqW3335b48aNU2VlpdxutyQpOztbiYmJqqmpUUhIiB577DGtXbtWO3fuND8rOTlZ27ZtU1FR0UX1VldXJ6fTKY/Ho5CQEEv3O2ZOrqXjtaaSeaPtbgEAcBlpzd%2B/F%2BKzM1hf5vF4JEldunSRJJWWlqqxsVFxcXFmjdvtVlRUlAoLCyVJRUVFioqKMsOVJI0aNUr19fUqLS01a84eo7mmpKREjY2NrbpPAADANwXY3YAVDMNQWlqabrnlFkVFRUmSqqurFRQUpNDQUK/a8PBwVVdXmzXh4eFe20NDQxUUFPSVNeHh4Tp16pQOHz6sHj16tOinvr5e9fX15uu6urpvv5MAAMBntIsZrGnTpumjjz7S66%2B/fsFawzDk5%2Bdnvj7754utab6qeq73SmduwHc6neYSERFxUfsBAADaB58PWNOnT9fatWv13nvvqVevXuZ6l8ulhoYG1dbWetXX1NSYM1Iul8ucqWpWW1urxsbGr6ypqalRQECAunbtes6eZs2aJY/HYy6VlZXfej8BAIDv8NmAZRiGpk2bpjfffFP/%2BMc/FBkZ6bU9OjpagYGBys/PN9dVVVWpvLxcQ4YMkSTFxsaqvLxcVVVVZk1eXp4cDoeio6PNmrPHaK6JiYlRYGDgOXtzOBwKCQnxWgAAwOXDZwPW1KlT9dprr2n16tXq3LmzqqurVV1drRMnTkiSnE6nHnroIc2cOVMbNmzQ1q1b9cADD2jAgAG64447JElxcXHq37%2B/EhIStHXrVm3YsEHp6elKSkoyQ1FycrI%2B/fRTpaWlaefOnXr55Ze1fPlypaen27bvAADg0uazAWvJkiXyeDwaMWKEevToYS5vvPGGWfPcc8/p7rvv1r333quhQ4eqY8eO%2Bvvf/y5/f39Jkr%2B/v9atW6cOHTpo6NChuvfee3X33XdrwYIF5hiRkZFav369/vnPf%2Br73/%2B%2Bfv/732vx4sW655572nyfAQCAb2g3z8G6lPEcrDN4DhYAoC3xHCwAAIB2hIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMUIWAAAABYjYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMUIWAAAABYjYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgMZ8OWBs3btT48ePldrvl5%2Bent956y2u7YRiaO3eu3G63goODNWLECO3YscOrpra2VgkJCXI6nXI6nUpISNCRI0e8arZv367hw4crODhYPXv21JNPPinDMFp9/wAAgG/y6YB1/PhxDRw4UFlZWefcPn/%2BfC1cuFBZWVnasmWLXC6XRo4cqaNHj5o18fHxKisrU25urnJzc1VWVqaEhARze11dnUaOHCm3260tW7bo%2Beef14IFC7Rw4cJW3z8AAOCbAuxu4NsYM2aMxowZc85thmFo0aJFmjNnjiZOnChJWrlypcLDw7V69Wo98sgj2rlzp3Jzc1VcXKxBgwZJkpYtW6bY2Fjt2rVLffv21apVq3Ty5EmtWLFCDodDUVFR2r17txYuXKi0tDT5%2Bfm12f4CAADf4NMzWF9l3759qq6uVlxcnLnO4XBo%2BPDhKiwslCQVFRXJ6XSa4UqSBg8eLKfT6VUzfPhwORwOs2bUqFE6cOCAPvnkk3N%2Bdn19verq6rwWAABw%2BWi3Aau6ulqSFB4e7rU%2BPDzc3FZdXa2wsLAW7w0LC/OqOdcYZ3/Gl2VmZpr3dDmdTkVERHy7nQEAAD6l3QasZl%2B%2BhGcYhte6c13iu1BN8w3u57s8OGvWLHk8HnOprKz8xv0DAADf49P3YH0Vl8sl6cwsU48ePcz1NTU15gyUy%2BXSwYMHW7z30KFDXjVfnqmqqamR1HJ2rJnD4fC6pAgAAC4v7TZgRUZGyuVyKT8/XzfeeKMkqaGhQQUFBXr66aclSbGxsfJ4PPrggw/0gx/8QJK0efNmeTweDRkyxKyZPXu2GhoaFBQUJEnKy8uT2%2B3WVVdd1fY75sNi5uTa3cLXUjJvtN0tAAB8lE9fIjx27JjKyspUVlYm6cyN7WVlZaqoqJCfn59SU1OVkZGhnJwclZeXKzExUR07dlR8fLwkqV%2B/fho9erSSkpJUXFys4uJiJSUlady4cerbt6%2BkM49xcDgcSkxMVHl5uXJycpSRkcE3CAEAwHn59AxWSUmJfvjDH5qv09LSJEmTJ0/WihUr9Oijj%2BrEiROaMmWKamtrNWjQIOXl5alz587me1atWqWUlBTz24YTJkzweq6W0%2BlUfn6%2Bpk6dqpiYGIWGhiotLc38LAAAgC/zM3gkeaurq6uT0%2BmUx%2BNRSEiIpWP72mU3X8IlQgDwba35%2B/dCfPoSIQAAwKWIgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMUIWAAAABYjYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYLEAuxsALlUxc3LtbuFrKZk32u4WAAD/HzNYAAAAFiNgAQAAWIyABQAAYDEC1kV68cUXFRkZqQ4dOig6Olrvv/%2B%2B3S0BAIBLFAHrIrzxxhtKTU3VnDlztHXrVg0bNkxjxoxRRUWF3a0BAIBLkJ9hGIbdTVzqBg0apJtuuklLliwx1/Xr10933323MjMzL/j%2Buro6OZ1OeTwehYSEWNqbr33TDZD4xiOAttGav38vhMc0XEBDQ4NKS0v1%2BOOPe62Pi4tTYWHhOd9TX1%2Bv%2Bvp687XH45F05j%2B01Zrqj1s%2BJtDabkxfY3cLX0vBb0ba3QKAb6D5964dc0kErAs4fPiwmpqaFB4e7rU%2BPDxc1dXV53xPZmamfve737VYHxER0So9Amhdzmft7gDAt3H06FE5nc42/UwC1kXy8/Pzem0YRot1zWbNmqW0tDTz9enTp/XFF1%2Boa9eu533PN1FXV6eIiAhVVla2%2BdTnpYTjcAbH4QyOwxkchzM4Dv9xOR4LwzB09OhRud3uNv9sAtYFdOvWTf7%2B/i1mq2pqalrMajVzOBxyOBxe66688spW6zEkJOSy%2BR/LV%2BE4nMFxOIPjcAbH4QyOw39cbseirWeumvEtwgsICgpSdHS08vPzvdbn5%2BdryJAhNnUFAAAuZcxgXYS0tDQlJCQoJiZGsbGxeumll1RRUaHk5GS7WwMAAJcg/7lz5861u4lLXVRUlLp27aqMjAwtWLBAJ06c0KuvvqqBAwfa3Zr8/f01YsQIBQRc3lmZ43AGx%2BEMjsMZHIczOA7/wbFoOzwHCwAAwGLcgwUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIDlo1588UVFRkaqQ4cOio6O1vvvv293S21u7ty58vPz81pcLpfdbbW6jRs3avz48XK73fLz89Nbb73ltd0wDM2dO1dut1vBwcEaMWKEduzYYVO3redCxyExMbHF%2BTF48GCbum09mZmZuvnmm9W5c2eFhYXp7rvv1q5du7xq6uvrNX36dHXr1k2dOnXShAkTtH//fps6bh0XcxxGjBjR4py47777bOq4dSxZskQ33HCD%2BTDR2NhYvf322%2Bb2y%2BFcuFQQsHzQG2%2B8odTUVM2ZM0dbt27VsGHDNGbMGFVUVNjdWpu7/vrrVVVVZS7bt2%2B3u6VWd/z4cQ0cOFBZWVnn3D5//nwtXLhQWVlZ2rJli1wul0aOHKmjR4%2B2caet60LHQZJGjx7tdX6sX7%2B%2BDTtsGwUFBZo6daqKi4uVn5%2BvU6dOKS4uTseP/%2BcPwaempionJ0fZ2dnatGmTjh07pnHjxqmpqcnGzq11McdBkpKSkrzOiT/96U82ddw6evXqpaeeekolJSUqKSnRbbfdprvuusv8R9blcC5cMgz4nB/84AdGcnKy17rrrrvOePzxx23qyB6//e1vjYEDB9rdhq0kGTk5Oebr06dPGy6Xy3jqqafMdSdPnjScTqexdOlSO1psE18%2BDoZhGJMnTzbuuusumzqyT01NjSHJKCgoMAzDMI4cOWIEBgYa2dnZZs1nn31mXHHFFUZubq5dbba6Lx8HwzCM4cOHG7/61a9s7MoeoaGhxp///OfL9lywCzNYPqahoUGlpaWKi4vzWh8XF6fCwkKburLPnj175Ha7FRkZqfvuu0979%2B61uyVb7du3T9XV1V7nh8Ph0PDhwy/L8%2BOf//ynwsLCdO211yopKUk1NTV2t9TqPB6PJKlLly6SpNLSUjU2NnqdE263W1FRUe36nPjycWi2atUqdevWTddff73S09Pb3czu2ZqampSdna3jx48rNjb2sj0X7MKjXH3M4cOH1dTU1OIPTYeHh7f4g9Tt3aBBg/SXv/xF1157rQ4ePKg//OEPGjJkiHbs2KGuXbva3Z4tms%2BBc50fn376qR0t2WbMmDH6yU9%2Bot69e2vfvn164okndNttt6m0tLTFH2NvLwzDUFpamm655RZFRUVJOnNOBAUFKTQ01Ku2Pf9/xrmOgyTdf//9ioyMlMvlUnl5uWbNmqVt27a1%2BFuzvm779u2KjY3VyZMn9Z3vfEc5OTnq37%2B/ysrKLrtzwU4ELB/l5%2Bfn9dowjBbr2rsxY8aYPw8YMECxsbG6%2BuqrtXLlSqWlpdnYmf04P6RJkyaZP0dFRSkmJka9e/fWunXrNHHiRBs7az3Tpk3TRx99pE2bNl2wtj2fE%2Bc7DklJSebPUVFRuuaaaxQTE6MPP/xQN910U1u32Wr69u2rsrIyHTlyRGvWrNHkyZNVUFBw3vr2fC7YiUuEPqZbt27y9/dv8a%2BNmpqaFrMWl5tOnTppwIAB2rNnj92t2Kb5W5ScHy316NFDvXv3brfnx/Tp07V27Vq999576tWrl7ne5XKpoaFBtbW1XvXt9Zw433E4l5tuukmBgYHt7pwICgrS9773PcXExCgzM1MDBw7UH//4x8vuXLAbAcvHBAUFKTo6usWUdn5%2BvoYMGWJTV5eG%2Bvp67dy5Uz169LC7Fds0X/44%2B/xoaGhQQUHBZX9%2BfP7556qsrGx354dhGJo2bZrefPNN/eMf/1BkZKTX9ujoaAUGBnqdE1VVVSovL29X58SFjsO57NixQ42Nje3unPgywzBUX19/2ZwLlwr/uXPnzrW7CXw9ISEheuKJJ9SzZ0916NBBGRkZeu%2B99/TKK6/oyiuvtLu9NpOeni6HwyHDMLR7925NmzZNu3fv1p/%2B9Kd2fRyOHTumjz/%2BWNXV1frTn/6kQYMGKTg4WA0NDbryyivV1NSkzMxM9e3bV01NTZo5c6Y%2B%2B%2BwzvfTSS%2B3q3qOvOg7%2B/v6aPXu2OnfurKamJpWVlenhhx9WY2OjsrKy2tVxmDp1qlatWqX//u//ltvt1rFjx3Ts2DH5%2B/srMDBQHTp00IEDB5SVlaWBAwfK4/EoOTlZnTt31tNPP60rrmgf/86%2B0HH417/%2BpaysLHXq1EkNDQ0qLCzUww8/rIiICP3%2B979vN8dh9uzZCgoKkmEYqqys1OLFi/Xaa69p/vz56t%2B//2VxLlwybPr2Ir6lF154wejdu7cRFBRk3HTTTV5fRb5cTJo0yejRo4cRGBhouN1uY%2BLEicaOHTvsbqvVvffee4akFsvkyZMNwzjzqIbf/va3hsvlMhwOh3Hrrbca27dvt7fpVvBVx%2BHf//63ERcXZ3Tv3t0IDAw0vvvd7xqTJ082Kioq7G7bcuc6BpKMV155xaw5ceKEMW3aNKNLly5GcHCwMW7cuHZ3LC50HCoqKoxbb73V6NKlixEUFGRcffXVRkpKivH555/b27jFHnzwQfN3Q/fu3Y3bb7/dyMvLM7dfDufCpcLPMAyjLQMdAABAe8d8IAAAgMUIWAAAABYjYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMUIWAAAABYjYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAW%2B3%2ByrS4FfodbwwAAAABJRU5ErkJggg%3D%3D"/>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12" id="common3180673390344241520">
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0</td>
        <td class="number">3637</td>
        <td class="number">38.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">1</td>
        <td class="number">2462</td>
        <td class="number">25.7%</td>
        <td>
            <div class="bar" style="width:68%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">2</td>
        <td class="number">1384</td>
        <td class="number">14.4%</td>
        <td>
            <div class="bar" style="width:38%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">3</td>
        <td class="number">864</td>
        <td class="number">9.0%</td>
        <td>
            <div class="bar" style="width:24%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">4</td>
        <td class="number">475</td>
        <td class="number">5.0%</td>
        <td>
            <div class="bar" style="width:13%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">5</td>
        <td class="number">278</td>
        <td class="number">2.9%</td>
        <td>
            <div class="bar" style="width:8%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">6</td>
        <td class="number">165</td>
        <td class="number">1.7%</td>
        <td>
            <div class="bar" style="width:5%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">7</td>
        <td class="number">100</td>
        <td class="number">1.0%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">8</td>
        <td class="number">72</td>
        <td class="number">0.8%</td>
        <td>
            <div class="bar" style="width:2%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">9</td>
        <td class="number">47</td>
        <td class="number">0.5%</td>
        <td>
            <div class="bar" style="width:2%">&nbsp;</div>
        </td>
</tr><tr class="other">
        <td class="fillremaining">Other values (18)</td>
        <td class="number">94</td>
        <td class="number">1.0%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12"  id="extreme3180673390344241520">
            <p class="h4">Minimum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0</td>
        <td class="number">3637</td>
        <td class="number">38.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">1</td>
        <td class="number">2462</td>
        <td class="number">25.7%</td>
        <td>
            <div class="bar" style="width:68%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">2</td>
        <td class="number">1384</td>
        <td class="number">14.4%</td>
        <td>
            <div class="bar" style="width:38%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">3</td>
        <td class="number">864</td>
        <td class="number">9.0%</td>
        <td>
            <div class="bar" style="width:24%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">4</td>
        <td class="number">475</td>
        <td class="number">5.0%</td>
        <td>
            <div class="bar" style="width:13%">&nbsp;</div>
        </td>
</tr>
</table>
            <p class="h4">Maximum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">27</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">28</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">31</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">32</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">33</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
    </div>
</div>
</div><div class="row variablerow">
    <div class="col-md-3 namecol">
        <p class="h4 pp-anchor" id="pp_var_installment">installment<br/>
            <small>Numeric</small>
        </p>
    </div><div class="col-md-6">
    <div class="row">
        <div class="col-sm-6">
            <table class="stats ">
                <tr>
                    <th>Distinct count</th>
                    <td>4788</td>
                </tr>
                <tr>
                    <th>Unique (%)</th>
                    <td>50.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (n)</th>
                    <td>0</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (n)</th>
                    <td>0</td>
                </tr>
            </table>

        </div>
        <div class="col-sm-6">
            <table class="stats ">

                <tr>
                    <th>Mean</th>
                    <td>319.09</td>
                </tr>
                <tr>
                    <th>Minimum</th>
                    <td>15.67</td>
                </tr>
                <tr>
                    <th>Maximum</th>
                    <td>940.14</td>
                </tr>
                <tr class="ignore">
                    <th>Zeros (%)</th>
                    <td>0.0%</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="col-md-3 collapse in" id="minihistogram434201699082029304">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABLCAYAAAA1fMjoAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAAddJREFUeJzt20GOEkEYhuG/iVuaPZm%2BhYfwTq5deh8P4S0gHKA7LlxIu1DcqF%2BYUarp4XmWEFJNUm%2BqKgXdPM9zNXY8HmsYhtbDsnKHw6Genp6ajvmm6Wg/bbfbqvrxhfu%2BX%2BIRWJFxHGsYhl/zpqVFAum6rqqq%2Br7/L4G8ff/p2Z/5/OHdP49LW5d509Km%2BYiwIgKBQCAQCAQCgUAgEAgEAoFAIFjkovAeuFzkGlYQCAQCgUAgEAgED3tIf4nnHuwd6tfPCgKBQCAQCAQCgeDuDukvueGGW7GCQCAQCAQCgUAgEAgEAoFAIBAIBIK7uyh8dP4KfF8EckN%2BFbB%2BtlgQCAQCgUAgEAgEAoFAIBAIBAKBwEXhA3Jbfz2BvAJu7G9HIFzlUVcdZxAIBAKBLRY38xq2ZVYQCAQCwSJbrHmeq6pqHMff3vv29Uvrx%2BGO/GlOXF67zJuWFglkmqaqqhqGYYnhuWO7j39/b5qm2u127R6mqrp5gSzP53OdTqfabrfVdV3r4VmZeZ5rmqba7/e12bQ9FSwSCKyFQzoEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCwXc26Fa4KLxGFAAAAABJRU5ErkJggg%3D%3D">

</div>
<div class="col-md-12 text-right">
    <a role="button" data-toggle="collapse" data-target="#descriptives434201699082029304,#minihistogram434201699082029304"
       aria-expanded="false" aria-controls="collapseExample">
        Toggle details
    </a>
</div>
<div class="row collapse col-md-12" id="descriptives434201699082029304">
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#quantiles434201699082029304"
                                                  aria-controls="quantiles434201699082029304" role="tab"
                                                  data-toggle="tab">Statistics</a></li>
        <li role="presentation"><a href="#histogram434201699082029304" aria-controls="histogram434201699082029304"
                                   role="tab" data-toggle="tab">Histogram</a></li>
        <li role="presentation"><a href="#common434201699082029304" aria-controls="common434201699082029304"
                                   role="tab" data-toggle="tab">Common Values</a></li>
        <li role="presentation"><a href="#extreme434201699082029304" aria-controls="extreme434201699082029304"
                                   role="tab" data-toggle="tab">Extreme Values</a></li>

    </ul>

    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active row" id="quantiles434201699082029304">
            <div class="col-md-4 col-md-offset-1">
                <p class="h4">Quantile statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Minimum</th>
                        <td>15.67</td>
                    </tr>
                    <tr>
                        <th>5-th percentile</th>
                        <td>65.559</td>
                    </tr>
                    <tr>
                        <th>Q1</th>
                        <td>163.77</td>
                    </tr>
                    <tr>
                        <th>Median</th>
                        <td>268.95</td>
                    </tr>
                    <tr>
                        <th>Q3</th>
                        <td>432.76</td>
                    </tr>
                    <tr>
                        <th>95-th percentile</th>
                        <td>756.27</td>
                    </tr>
                    <tr>
                        <th>Maximum</th>
                        <td>940.14</td>
                    </tr>
                    <tr>
                        <th>Range</th>
                        <td>924.47</td>
                    </tr>
                    <tr>
                        <th>Interquartile range</th>
                        <td>268.99</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-4 col-md-offset-2">
                <p class="h4">Descriptive statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Standard deviation</th>
                        <td>207.07</td>
                    </tr>
                    <tr>
                        <th>Coef of variation</th>
                        <td>0.64894</td>
                    </tr>
                    <tr>
                        <th>Kurtosis</th>
                        <td>0.13791</td>
                    </tr>
                    <tr>
                        <th>Mean</th>
                        <td>319.09</td>
                    </tr>
                    <tr>
                        <th>MAD</th>
                        <td>165.63</td>
                    </tr>
                    <tr class="">
                        <th>Skewness</th>
                        <td>0.91252</td>
                    </tr>
                    <tr>
                        <th>Sum</th>
                        <td>3056200</td>
                    </tr>
                    <tr>
                        <th>Variance</th>
                        <td>42879</td>
                    </tr>
                    <tr>
                        <th>Memory size</th>
                        <td>74.9 KiB</td>
                    </tr>
                </table>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane col-md-8 col-md-offset-2" id="histogram434201699082029304">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQCAYAAAByNR6YAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAIABJREFUeJzt3X10VNW9//HPkJABYjIGYjIJRBpdoGCQasKFAAr4EEAeFsVbH5BIrEWpPMVAeZDbFlsJXOvT9VJp9fpU0YIuwYVXLiVYDbCSgASiBCnSihAgIaBhAhQmAfbvD3%2Bc5RAUlJ0cJrxfa521mH32nPM9O8vk4z5n9niMMUYAAACwpoXbBQAAADQ3BCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsCzS7QIuBidPntTevXsVExMjj8fjdjkAAFwUjDE6dOiQkpOT1aJF084pEbCawN69e5WSkuJ2GQAAXJQqKirUoUOHJj0nAasJxMTESPr6BxwbG%2BtyNQAAXBxqa2uVkpLi/B1uSgSsJnDqtmBsbCwBCwCAJubG4zk85A4AAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAy/iyZzSZjFkr3C7he9kwZ5DbJQAAwhQzWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZWEbsObOnasePXooJiZGCQkJGjFihLZt2xbSJxgMauLEiYqPj1d0dLSGDx%2Bu3bt3h/TZtWuXhg0bpujoaMXHx2vSpEmqq6sL6VNYWKj09HS1atVKV1xxhf74xz82%2BvUBAIDwFbYBq7CwUOPHj1dJSYkKCgp0/PhxZWVl6ciRI06f3NxcLV26VIsWLdLatWt1%2BPBhDR06VCdOnJAknThxQkOGDNGRI0e0du1aLVq0SG%2B//bamTJniHGPHjh267bbbdMMNN2jTpk165JFHNGnSJL399ttNfs0AACA8eIwxxu0ibNi/f78SEhJUWFioG2%2B8UYFAQJdddplee%2B013XnnnZKkvXv3KiUlRcuXL9fAgQP1f//3fxo6dKgqKiqUnJwsSVq0aJFycnJUXV2t2NhYTZ8%2BXcuWLdPWrVudc40bN04ff/yxiouLz6m22tpa%2BXw%2BBQIBxcbG2r/4MJExa4XbJXwvG%2BYMcrsEAMB5cPPvb9jOYJ0uEAhIktq2bStJKi0tVX19vbKyspw%2BycnJSktLU1FRkSSpuLhYaWlpTriSpIEDByoYDKq0tNTp881jnOqzYcMG1dfXN%2Bo1AQCA8BTpdgE2GGOUl5envn37Ki0tTZJUVVWlqKgoxcXFhfRNTExUVVWV0ycxMTFkf1xcnKKior6zT2Jioo4fP64DBw4oKSmpQT3BYFDBYNB5XVtbe/4XCQAAwkazmMGaMGGCPvnkE/3lL385a19jjDwej/P6m/8%2B1z6n7qqe6b3S1w/g%2B3w%2BZ0tJSTmn6wAAAM1D2AesiRMnatmyZfrggw/UoUMHp93v96uurk41NTUh/aurq50ZKb/f78xUnVJTU6P6%2Bvrv7FNdXa3IyEi1a9fujDXNnDlTgUDA2SoqKs77OgEAQPgI24BljNGECRO0ZMkS/e1vf1NqamrI/vT0dLVs2VIFBQVOW2VlpcrLy9W7d29JUmZmpsrLy1VZWen0Wblypbxer9LT050%2B3zzGqT4ZGRlq2bLlGWvzer2KjY0N2QAAwMUjbAPW%2BPHjtXDhQr3xxhuKiYlRVVWVqqqqdPToUUmSz%2BfT/fffrylTpuj999/Xpk2bNHr0aHXr1k233HKLJCkrK0tdu3ZVdna2Nm3apPfff19Tp07V2LFjnVA0btw47dy5U3l5edq6dateeuklvfjii5o6dapr1w4AAC5sYRuwFixYoEAgoP79%2ByspKcnZFi9e7PR5%2BumnNWLECN1xxx3q06eP2rRpo3fffVcRERGSpIiICL333ntq1aqV%2BvTpozvuuEMjRozQE0884RwjNTVVy5cv14cffqgf//jH%2Bt3vfqdnn31Wt99%2Be5NfMwAACA/NZh2sCxnrYH2NdbAAAE2JdbAAAACaEQIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALIt0uwDgQpUxa4XbJXwvG%2BYMcrsEAMD/xwwWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsCysA9bq1as1bNgwJScny%2BPx6J133gnZn5OTI4/HE7L16tUrpE8wGNTEiRMVHx%2Bv6OhoDR8%2BXLt37w7ps2vXLg0bNkzR0dGKj4/XpEmTVFdX1%2BjXBwAAwlNYB6wjR46oe/fumj9//rf2GTRokCorK51t%2BfLlIftzc3O1dOlSLVq0SGvXrtXhw4c1dOhQnThxQpJ04sQJDRkyREeOHNHatWu1aNEivf3225oyZUqjXhsAAAhfkW4XcD4GDx6swYMHf2cfr9crv99/xn2BQEAvvviiXnvtNd1yyy2SpIULFyolJUWrVq3SwIEDtXLlSn366aeqqKhQcnKyJOnJJ59UTk6O5syZo9jYWLsXBQAAwl5Yz2Cdiw8//FAJCQnq3Lmzxo4dq%2BrqamdfaWmp6uvrlZWV5bQlJycrLS1NRUVFkqTi4mKlpaU54UqSBg4cqGAwqNLS0qa7EAAAEDbCegbrbAYPHqyf/vSn6tixo3bs2KFf/epXuummm1RaWiqv16uqqipFRUUpLi4u5H2JiYmqqqqSJFVVVSkxMTFkf1xcnKKiopw%2BpwsGgwoGg87r2tpay1cGAAAuZM06YN15553Ov9PS0pSRkaGOHTvqvffe08iRI7/1fcYYeTwe5/U3//1tfb5p7ty5evTRR8%2BjcgAAEM6adcA6XVJSkjp27Kjt27dLkvx%2Bv%2Brq6lRTUxMyi1VdXa3evXs7fdatWxdynJqaGtXX1zeY2Tpl5syZysvLc17X1tYqJSXF9uUAITJmrXC7hHO2Yc4gt0sAgEbV7J/B%2BqYvv/xSFRUVSkpKkiSlp6erZcuWKigocPpUVlaqvLzcCViZmZkqLy9XZWWl02flypXyer1KT08/43m8Xq9iY2NDNgAAcPEI6xmsw4cP6x//%2BIfzeseOHSorK1Pbtm3Vtm1bzZ49W7fffruSkpL0xRdf6JFHHlF8fLx%2B8pOfSJJ8Pp/uv/9%2BTZkyRe3atVPbtm01depUdevWzflUYVZWlrp27ars7Gz9/ve/11dffaWpU6dq7NixBCcAAHBGYR2wNmzYoAEDBjivT92WGzNmjBYsWKDNmzfrz3/%2Bsw4ePKikpCQNGDBAixcvVkxMjPOep59%2BWpGRkbrjjjt09OhR3XzzzXrllVcUEREhSYqIiNB7772nhx56SH369FHr1q01atQoPfHEE017sQAAIGx4jDHG7SKau9raWvl8PgUCgYt61iucnhFC4%2BIZLABNwc2/vxfVM1gAAABNgYAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMtcCVgLFy7UsWPH3Dg1AABAo3MlYOXl5cnv9%2BvBBx/U%2BvXr3SgBAACg0bgSsPbu3auXXnpJlZWV6tu3r6655ho9%2BeST2r9/vxvlAAAAWOVKwIqMjNTIkSO1bNky7dq1S2PGjNFLL72kDh06aOTIkXrvvfdkjHGjNAAAgPPm%2BkPufr9fN998s/r37y%2BPx6MNGzZo1KhR6tSpk9asWeN2eQAAAN%2BbawHrwIEDeuaZZ9S9e3f16dNH1dXVeuedd7Rz507t2bNHQ4cO1b333utWeQAAAD9YpBsn/clPfqLly5crNTVVP//5zzVmzBhddtllzv5LLrlE06ZN07PPPutGeQAAAOfFlYAVGxurVatW6YYbbvjWPklJSdq%2BfXsTVgUAAGCHKwHr1VdfPWsfj8ejK6%2B8sgmqAQAAsMuVZ7AefvhhzZ8/v0H7H/7wB02ZMsWFigAAAOxxJWC99dZb6tWrV4P2zMxMLV682IWKAAAA7HElYB04cEBxcXEN2mNjY3XgwAEXKgIAALDHlYB15ZVX6q9//WuD9r/%2B9a9KTU11oSIAAAB7XHnIPTc3V7m5ufryyy910003SZLef/99Pf7443riiSfcKClsZcxa4XYJAADgNK4ErLFjx%2BrYsWPKz8/Xb37zG0lShw4d9Oyzz%2BpnP/uZGyUBAABY40rAkqSJEydq4sSJqqysVOvWrXXppZe6VQoAAIBVrgWsU5KSktwuAQAAwCpXHnLfv3%2B/7rvvPl1%2B%2BeVq1aqVoqKiQjYAAIBw5soMVk5Ojv75z3/ql7/8pZKSkuTxeNwoAwAAoFG4ErBWr16t1atX67rrrnPj9AAAAI3KlVuEHTp0YNYKAAA0W64ErKefflozZ87U7t273Tg9AABAo3LlFmF2drYOHTqkjh07KjY2Vi1btgzZX11d7UZZAAAAVrgSsObNm%2BfGaQEAAJqEKwHr/vvvd%2BO0AAAATcKVZ7Ak6YsvvtDs2bOVnZ3t3BJcuXKltm7d6lZJAAAAVrgSsNasWaNrrrlGhYWFevPNN3X48GFJ0saNG/XrX//ajZIAAACscSVgTZ8%2BXbNnz9YHH3wQsnL7TTfdpJKSEjdKAgAAsMaVgPXJJ5/o3//93xu0JyQkaP/%2B/S5UBAAAYI8rAevSSy9VVVVVg/aysjK1b9/ehYoAAADscSVg3XXXXZoxY4b279/vrOi%2Bbt06TZ06VaNHj3ajJAAAAGtcCVj5%2Bfny%2B/1KSkrS4cOH1bVrV/Xu3Vs9evTQr371KzdKAgAAsMaVdbCioqK0ePFiffbZZ9q4caNOnjyp66%2B/XldffbUb5QAAAFjlSsA6pXPnzurcubObJQAAAFjnSsB64IEHvnP/888/30SVAAAA2OdKwKqsrAx5XV9fry1btujQoUO68cYb3SgJAADAGlcC1rvvvtug7fjx4/rFL36hLl26uFARAACAPa59F%2BHpIiMjNXXqVP3%2B9793uxQAAIDzcsEELEn6/PPPVV9f73YZAAAA58WVW4TTpk0LeW2MUWVlpZYtW6Z77rnHjZIAAACscSVgFRcXh7xu0aKFLrvsMs2bN09jx451oyQAAABrXAlYa9asceO0AAAATeKCegYLAACgOXBlBqtHjx7Olzyfzfr16xu5GgAAALtcCVgDBgzQn/70J3Xu3FmZmZmSpJKSEm3btk0PPvigvF6vG2UBAABY4UrAOnjwoMaPH6/8/PyQ9lmzZmnfvn36n//5HzfKAgAAsMKVZ7DefPNN3XfffQ3ac3Jy9NZbb7lQEQAAgD2uBCyv16uioqIG7UVFRd/r9uDq1as1bNgwJScny%2BPx6J133gnZb4zR7NmzlZycrNatW6t///7asmVLSJ%2BamhplZ2fL5/PJ5/MpOztbBw8eDOmzefNm9evXT61bt1b79u3129/%2BVsaY73HFAADgYuLKLcJJkyZp3Lhx2rRpk3r16iXp62ewXnjhBT3yyCPnfJwjR46oe/fuuu%2B%2B%2B3T77bc32P/444/rqaee0iuvvKLOnTvrscce06233qpt27YpJiZGkjRq1Cjt3r1bK1askCQ98MADys7Odr4vsba2VrfeeqsGDBigjz76SJ999plycnIUHR2tKVOmnO9QAACAZshjXJqKeeONN/Rf//Vf2rp1qySpS5cumjx5skaNGvWDjufxeLR06VKNGDFC0tezV8nJycrNzdX06dMlScFgUImJifrP//xPPfjgg9q6dau6du2qkpIS9ezZU9LXQS8zM1N///vfddVVV2nBggWaOXOm9u3b58yuzZs3T//93/%2Bt3bt3n9OnIWtra%2BXz%2BRQIBBQbG/uDru/bZMxaYfV4QFPYMGeQ2yUAuAg05t/fs3FtHaxRo0Zp3bp1qq2tVW1trdatW/eDw9WZ7NixQ1VVVcrKynLavF6v%2BvXr59yeLC4uls/nc8KVJPXq1Us%2Bny%2BkT79%2B/UJuXQ4cOFB79%2B7VF198Ya1eAADQfLgWsGpra/XKK6/o17/%2BtWpqaiRJH3/8sSorK60cv6qqSpKUmJgY0p6YmOjsq6qqUkJCQoP3JiQkhPQ50zG%2BeY7TBYNBJzie2gAAwMXDlWewysvLdcstt6hNmzaqqKhQTk6O4uLi9Oabb2r37t169dVXrZ3r9Ft4xpiQtjPd4jtbn1N3Vb/t9uDcuXP16KOP/uCaAQBAeHNlBuvhhx/WqFGj9M9//lOtWrVy2ocMGaLVq1dbOYff75fUcJapurramYHy%2B/3at29fg/fu378/pM%2BZjiE1nB07ZebMmQoEAs5WUVFxfhcDAADCiisB66OPPtJDDz3UYAaoffv21m4Rpqamyu/3q6CgwGmrq6tTYWGhevfuLUnKzMxUIBAI%2BTqedevWKRAIhPRZvXq16urqnD4rV65UcnKyfvSjH53x3F6vV7GxsSEbAAC4eLgSsKKionT48OEG7du3b1d8fPw5H%2Bfw4cMqKytTWVmZpK8fbC8rK9OuXbvk8XiUm5ur/Px8LV26VOXl5crJyVGbNm2ch%2Bm7dOmiQYMGaezYsSopKVFJSYnGjh2roUOH6qqrrpL09cP4Xq9XOTk5Ki8v19KlS5Wfn6%2B8vLxz/j5FAABwcXHlGazhw4frd7/7nRYvXizp62eZ9uzZoxkzZmjkyJHnfJwNGzZowIABzuu8vDxJ0pgxY/TKK69o2rRpOnr0qB566CHV1NSoZ8%2BeWrlypbMGliS9/vrrmjRpkvNpw%2BHDh2v%2B/PnOfp/Pp4KCAo0fP14ZGRmKi4tTXl6ecy4AAIDTubIOViAQ0KBBg7R9%2B3YdPHhQKSkp2rt3r3r06KEVK1bokksuaeqSGhXrYAGhWAcLQFNwcx0sV2awTq0zVVBQoI0bN%2BrkyZO6/vrrNXDgQG67AQCAsNfkAau%2Bvl633XabnnvuOWVlZYUsBAoAANAcNPlD7i1bttSmTZuYqQIAAM2WK58iHD16tF5%2B%2BWU3Tg0AANDoXHkGS5Lmz5%2BvVatWKSMjQ9HR0SH7Hn/8cZeqAgAAOH%2BuBKzS0lJde%2B21kqRPPvkkZB%2B3DgEAQLhr0oD1%2BeefKzU1VWvWrGnK0wIAADSpJn0Gq1OnTtq/f7/z%2Bs477zzjdwECAACEsyYNWKevabp8%2BXIdOXKkKUsAAABodK58ihAAAKA5a9KA5fF4GjzEzkPtAACguWnSh9yNMcrJyZHX65UkHTt2TOPGjWuwTMOSJUuasiwAAACrmjRgjRkzJuT16NGjm/L0AAAATaJJAxartwMAgIuBayu5A0C4yJi1wu0SvpcNcwa5XQJw0eNThAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAylmkA0OTCbdkDAPi%2BmMECAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJY164A1e/ZseTyekM3v9zv7jTGaPXu2kpOT1bp1a/Xv319btmwJOUZNTY2ys7Pl8/nk8/mUnZ2tgwcPNvWlAACAMNKsA5YkXXPNNaqsrHS2zZs3O/sef/xxPfXUU5o/f74%2B%2Bugj%2Bf1%2B3XrrrTp06JDTZ9SoUSorK9OKFSu0YsUKlZWVKTs7241LAQAAYSLS7QIaW2RkZMis1SnGGD3zzDOaNWuWRo4cKUl69dVXlZiYqDfeeEMPPvigtm7dqhUrVqikpEQ9e/aUJL3wwgvKzMzUtm3bdNVVVzXptQAAgPDQ7Gewtm/fruTkZKWmpuquu%2B7S559/LknasWOHqqqqlJWV5fT1er3q16%2BfioqKJEnFxcXy%2BXxOuJKkXr16yefzOX0AAABO16xnsHr27Kk///nP6ty5s/bt26fHHntMvXv31pYtW1RVVSVJSkxMDHlPYmKidu7cKUmqqqpSQkJCg%2BMmJCQ47z%2BTYDCoYDDovK6trbVxOQAAIEw064A1ePBg59/dunVTZmamrrzySr366qvq1auXJMnj8YS8xxgT0nb6/jP1Od3cuXP16KOPnm/5AAAgTDX7W4TfFB0drW7dumn79u3Oc1mnz0RVV1c7s1p%2Bv1/79u1rcJz9%2B/c3mPn6ppkzZyoQCDhbRUWFxasAAAAXuosqYAWDQW3dulVJSUlKTU2V3%2B9XQUGBs7%2Burk6FhYXq3bu3JCkzM1OBQEDr1693%2Bqxbt06BQMDpcyZer1exsbEhGwAAuHg061uEU6dO1bBhw3T55Zerurpajz32mGprazVmzBh5PB7l5uYqPz9fnTp1UqdOnZSfn682bdpo1KhRkqQuXbpo0KBBGjt2rP70pz9Jkh544AENHTqUTxACAIBv1awD1u7du3X33XfrwIEDuuyyy9SrVy%2BVlJSoY8eOkqRp06bp6NGjeuihh1RTU6OePXtq5cqViomJcY7x%2Buuva9KkSc6nDYcPH6758%2Be7cj0AACA8eIwxxu0imrva2lr5fD4FAgHrtwszZq2wejwA4W/DnEFulwBcEBrz7%2B/ZXFTPYAEAADQFAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsa9bLNAAALmzh9kloPqGJc8UMFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlrOQOAM1MuK2ODjRHzGABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAy1imAQCAcxRuS2BsmDPI7RIuWsxgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYFul2AQAAoHFkzFrhdgnnbMOcQW6XYBUzWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyAdY6ee%2B45paamqlWrVkpPT9eaNWvcLgkAAFygCFjnYPHixcrNzdWsWbO0adMm3XDDDRo8eLB27drldmkAAOACRMA6B0899ZTuv/9%2B/fznP1eXLl30zDPPKCUlRQsWLHC7NAAAcAGKdLuAC11dXZ1KS0s1Y8aMkPasrCwVFRWd8T3BYFDBYNB5HQgEJEm1tbXW6zsRPGL9mAAANLXG%2BBt56pjGGOvHPhsC1lkcOHBAJ06cUGJiYkh7YmKiqqqqzvieuXPn6tFHH23QnpKS0ig1AgAQ7nxPNt6xDx06JJ/P13gnOAMC1jnyeDwhr40xDdpOmTlzpvLy8pzXJ0%2Be1FdffaV27dp963vOpLa2VikpKaqoqFBsbOwPKxw/CGPvDsbdPYy9Oxj3xmWM0aFDh5ScnNzk5yZgnUV8fLwiIiIazFZVV1c3mNU6xev1yuv1hrRdeumlP7iG2NhY/sNzCWPvDsbdPYy9Oxj3xtPUM1en8JD7WURFRSk9PV0FBQUh7QUFBerdu7dLVQEAgAsZM1jnIC8vT9nZ2crIyFBmZqaef/557dq1S%2BPGjXO7NAAAcAGKmD179my3i7jQpaWlqV27dsrPz9cTTzyho0eP6rXXXlP37t0b/dwRERHq37%2B/IiPJwk2NsXcH4%2B4ext4djHvz5DFufHYRAACgGeMZLAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwLqAPffcc0pNTVWrVq2Unp6uNWvWuF1SWJs7d6569OihmJgYJSQkaMSIEdq2bVtIn2AwqIkTJyo%2BPl7R0dEaPny4du/eHdJn165dGjZsmKKjoxUfH69Jkyaprq6uKS8lrM2dO1cej0e5ublOG%2BPeOPbs2aPRo0erXbt2atOmjX784x%2BrtLTU2W%2BM0ezZs5WcnKzWrVurf//%2B2rJlS8gxampqlJ2dLZ/PJ5/Pp%2BzsbB08eLCpLyWsHD9%2BXP/xH/%2Bh1NRUtW7dWldccYV%2B%2B9vf6uTJk04fxv4iYHBBWrRokWnZsqV54YUXzKeffmomT55soqOjzc6dO90uLWwNHDjQvPzyy6a8vNyUlZWZIUPR9cHZAAAHAElEQVSGmMsvv9wcPnzY6TNu3DjTvn17U1BQYDZu3GgGDBhgunfvbo4fP26MMeb48eMmLS3NDBgwwGzcuNEUFBSY5ORkM2HCBLcuK6ysX7/e/OhHPzLXXnutmTx5stPOuNv31VdfmY4dO5qcnByzbt06s2PHDrNq1Srzj3/8w%2Bkzb948ExMTY95%2B%2B22zefNmc%2Bedd5qkpCRTW1vr9Bk0aJBJS0szRUVFpqioyKSlpZmhQ4e6cUlh47HHHjPt2rUz//u//2t27Nhh3nrrLXPJJZeYZ555xunD2Dd/BKwL1L/927%2BZcePGhbRdffXVZsaMGS5V1PxUV1cbSaawsNAYY8zBgwdNy5YtzaJFi5w%2Be/bsMS1atDArVqwwxhizfPly06JFC7Nnzx6nz1/%2B8hfj9XpNIBBo2gsIM4cOHTKdOnUyBQUFpl%2B/fk7AYtwbx/Tp003fvn2/df/JkyeN3%2B838%2BbNc9qOHTtmfD6f%2BeMf/2iMMebTTz81kkxJSYnTp7i42Egyf//73xuv%2BDA3ZMgQ87Of/SykbeTIkWb06NHGGMb%2BYsEtwgtQXV2dSktLlZWVFdKelZWloqIil6pqfgKBgCSpbdu2kqTS0lLV19eHjHtycrLS0tKccS8uLlZaWlrIF4cOHDhQwWAw5NYLGho/fryGDBmiW265JaSdcW8cy5YtU0ZGhn76058qISFB1113nV544QVn/44dO1RVVRUy7l6vV/369QsZd5/Pp549ezp9evXqJZ/Px%2B%2Bi79C3b1%2B9//77%2BuyzzyRJH3/8sdauXavbbrtNEmN/sWDZ2AvQgQMHdOLEiQZfJp2YmNjgS6fxwxhjlJeXp759%2ByotLU2SVFVVpaioKMXFxYX0/ea4V1VVNfi5xMXFKSoqip/Nd1i0aJFKS0u1YcOGBvsY98bx%2Beefa8GCBcrLy9Mjjzyi9evXa9KkSfJ6vbr33nudcTvT75mdO3dK%2BnrcExISGhw7ISGBcf8O06dPVyAQ0NVXX62IiAidOHFCc%2BbM0d133y1JjP1FgoB1AfN4PCGvjTEN2vDDTJgwQZ988onWrl171r6nj/uZfgb8bL5dRUWFJk%2BerJUrV6pVq1bn/D7G/fycPHlSGRkZys/PlyRdd9112rJlixYsWKB7773X6Xe23zOM%2B/e3ePFiLVy4UG%2B88YauueYalZWVKTc3V8nJyRozZozTj7Fv3rhFeAGKj49XREREg/9Lqa6ubvB/PPj%2BJk6cqGXLlumDDz5Qhw4dnHa/36%2B6ujrV1NSE9P/muPv9/gY/l5qaGtXX1/Oz%2BRalpaWqrq5Wenq6IiMjFRkZqcLCQj377LOKjIxUYmIi494IkpKS1LVr15C2Ll26aNeuXZK%2BHlNJ3/l7xu/3a9%2B%2BfQ2OvX//fsb9O/zyl7/UjBkzdNddd6lbt27Kzs7Www8/rLlz50pi7C8WBKwLUFRUlNLT01VQUBDSXlBQoN69e7tUVfgzxmjChAlasmSJ/va3vyk1NTVkf3p6ulq2bBky7pWVlSovL3fGPTMzU%2BXl5aqsrHT6rFy5Ul6vV%2Bnp6U1zIWHm5ptv1ubNm1VWVuZsGRkZuueee5x/M%2B729enTp8EyJJ999pk6duwoSUpNTZXf7w8Z97q6OhUWFoaMeyAQ0Pr1650%2B69atUyAQ4HfRd/jXv/6lFi1C/7xGREQ4yzQw9hcJlx6ux1mcWqbhxRdfNJ9%2B%2BqnJzc010dHR5osvvnC7tLD1i1/8wvh8PvPhhx%2BayspKZ/vXv/7l9Bk3bpzp0KGDWbVqldm4caO56aabzrhcwM0332w2btxoVq1aZTp06MByAd/TNz9FaAzj3hjWr19vIiMjzZw5c8z27dvN66%2B/btq0aWMWLlzo9Jk3b57x%2BXxmyZIlZvPmzebuu%2B8%2B41IB1157rSkuLjbFxcWmW7duLBVwFmPGjDHt27d3lmlYsmSJiY%2BPN9OmTXP6MPbNHwHrAvaHP/zBdOzY0URFRZnrr7/eWU4AP4ykM24vv/yy0%2Bfo0aNmwoQJpm3btqZ169Zm6NChZteuXSHH2blzpxkyZIhp3bq1adu2rZkwYYI5duxYE19NeDs9YDHujePdd981aWlpxuv1mquvvto8//zzIftPnjxpfvOb3xi/32%2B8Xq%2B58cYbzebNm0P6fPnll%2Baee%2B4xMTExJiYmxtxzzz2mpqamKS8j7NTW1prJkyebyy%2B/3LRq1cpcccUVZtasWSYYDDp9GPvmz2OMMW7OoAEAADQ3PIMFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMCy/wdAXKvLSjm8ewAAAABJRU5ErkJggg%3D%3D"/>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12" id="common434201699082029304">
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">317.72</td>
        <td class="number">41</td>
        <td class="number">0.4%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">316.11</td>
        <td class="number">34</td>
        <td class="number">0.4%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">319.47</td>
        <td class="number">29</td>
        <td class="number">0.3%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">381.26</td>
        <td class="number">27</td>
        <td class="number">0.3%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">662.68</td>
        <td class="number">27</td>
        <td class="number">0.3%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">156.1</td>
        <td class="number">24</td>
        <td class="number">0.3%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">320.95</td>
        <td class="number">24</td>
        <td class="number">0.3%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">669.33</td>
        <td class="number">23</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">334.67</td>
        <td class="number">23</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">188.02</td>
        <td class="number">23</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="other">
        <td class="fillremaining">Other values (4778)</td>
        <td class="number">9303</td>
        <td class="number">97.1%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12"  id="extreme434201699082029304">
            <p class="h4">Minimum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">15.67</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">15.69</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">15.75</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">15.76</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">15.91</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
            <p class="h4">Maximum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">916.95</td>
        <td class="number">2</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">918.02</td>
        <td class="number">2</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">922.42</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:50%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">926.83</td>
        <td class="number">2</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">940.14</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:50%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
    </div>
</div>
</div><div class="row variablerow">
    <div class="col-md-3 namecol">
        <p class="h4 pp-anchor" id="pp_var_int.rate">int.rate<br/>
            <small>Numeric</small>
        </p>
    </div><div class="col-md-6">
    <div class="row">
        <div class="col-sm-6">
            <table class="stats ">
                <tr>
                    <th>Distinct count</th>
                    <td>249</td>
                </tr>
                <tr>
                    <th>Unique (%)</th>
                    <td>2.6%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (n)</th>
                    <td>0</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (n)</th>
                    <td>0</td>
                </tr>
            </table>

        </div>
        <div class="col-sm-6">
            <table class="stats ">

                <tr>
                    <th>Mean</th>
                    <td>0.12264</td>
                </tr>
                <tr>
                    <th>Minimum</th>
                    <td>0.06</td>
                </tr>
                <tr>
                    <th>Maximum</th>
                    <td>0.2164</td>
                </tr>
                <tr class="ignore">
                    <th>Zeros (%)</th>
                    <td>0.0%</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="col-md-3 collapse in" id="minihistogram-828070647458107887">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABLCAYAAAA1fMjoAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAAeZJREFUeJzt3T2qE1EcxuH/BNtM%2BpBZhOAWBBdkd8HO0qXY29q7i4QsYAYLCzMWGpuLL%2BZCZibJ85T54Ezg/DjzSZpxHMea2OFwqK7rph6WG7ff72u320065qtJR/tjvV5X1e8f3LbtHJvADen7vrqu%2BztvpjRLIE3TVFVV27Y3Fcibpy8Xff7bx3dX2pLHdJ43U1pNPiLcEIFAMMsu1qO4dJesym7Z0lhBIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBG41WRi3pyyLFQQCgUAgEAgEAoFAIBAIBAKB4C6ug7h2wLVYQSC4ixXkJV6y6vB4rCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQPOyV9Hvin6%2BuxwoCgUAgEAgEAoFAIBAIBILFneb1INP1eUT5/1lBIBAIBAKBYHHHICzTox63zBLIOI5VVdX3/bP3fv74PvXmcCWv33%2B%2B%2BDtfP7x99tp5npznzZRmCWQYhqqq6rpujuFZsM2nf783DENtNpvpNqaqmnGGLE%2BnUx2Px1qv19U0zdTDc2PGcaxhGGq73dZqNe1h8yyBwK1wFgsCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKB4BerUVVNxnkOhwAAAABJRU5ErkJggg%3D%3D">

</div>
<div class="col-md-12 text-right">
    <a role="button" data-toggle="collapse" data-target="#descriptives-828070647458107887,#minihistogram-828070647458107887"
       aria-expanded="false" aria-controls="collapseExample">
        Toggle details
    </a>
</div>
<div class="row collapse col-md-12" id="descriptives-828070647458107887">
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#quantiles-828070647458107887"
                                                  aria-controls="quantiles-828070647458107887" role="tab"
                                                  data-toggle="tab">Statistics</a></li>
        <li role="presentation"><a href="#histogram-828070647458107887" aria-controls="histogram-828070647458107887"
                                   role="tab" data-toggle="tab">Histogram</a></li>
        <li role="presentation"><a href="#common-828070647458107887" aria-controls="common-828070647458107887"
                                   role="tab" data-toggle="tab">Common Values</a></li>
        <li role="presentation"><a href="#extreme-828070647458107887" aria-controls="extreme-828070647458107887"
                                   role="tab" data-toggle="tab">Extreme Values</a></li>

    </ul>

    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active row" id="quantiles-828070647458107887">
            <div class="col-md-4 col-md-offset-1">
                <p class="h4">Quantile statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Minimum</th>
                        <td>0.06</td>
                    </tr>
                    <tr>
                        <th>5-th percentile</th>
                        <td>0.0774</td>
                    </tr>
                    <tr>
                        <th>Q1</th>
                        <td>0.1039</td>
                    </tr>
                    <tr>
                        <th>Median</th>
                        <td>0.1221</td>
                    </tr>
                    <tr>
                        <th>Q3</th>
                        <td>0.1407</td>
                    </tr>
                    <tr>
                        <th>95-th percentile</th>
                        <td>0.167</td>
                    </tr>
                    <tr>
                        <th>Maximum</th>
                        <td>0.2164</td>
                    </tr>
                    <tr>
                        <th>Range</th>
                        <td>0.1564</td>
                    </tr>
                    <tr>
                        <th>Interquartile range</th>
                        <td>0.0368</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-4 col-md-offset-2">
                <p class="h4">Descriptive statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Standard deviation</th>
                        <td>0.026847</td>
                    </tr>
                    <tr>
                        <th>Coef of variation</th>
                        <td>0.21891</td>
                    </tr>
                    <tr>
                        <th>Kurtosis</th>
                        <td>-0.22432</td>
                    </tr>
                    <tr>
                        <th>Mean</th>
                        <td>0.12264</td>
                    </tr>
                    <tr>
                        <th>MAD</th>
                        <td>0.021441</td>
                    </tr>
                    <tr class="">
                        <th>Skewness</th>
                        <td>0.16442</td>
                    </tr>
                    <tr>
                        <th>Sum</th>
                        <td>1174.6</td>
                    </tr>
                    <tr>
                        <th>Variance</th>
                        <td>0.00072076</td>
                    </tr>
                    <tr>
                        <th>Memory size</th>
                        <td>74.9 KiB</td>
                    </tr>
                </table>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane col-md-8 col-md-offset-2" id="histogram-828070647458107887">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQCAYAAAByNR6YAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAIABJREFUeJzt3Xl0VNWa/vGnbkIS4CYlg0klDDHazCBqQjMqqJiADK3YDcglgldRLpMxIONtRb0EGgFpL4JKO6CgoA2y8EJHgiJDAzJIFJAGlMggiQGFBBBCIPv3hyv1swgiw646qfD9rHXW4pyza9f7rkDlYdepUy5jjBEAAACs%2BYPTBQAAAFQ0BCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsCzU6QKuBSUlJTp06JAiIyPlcrmcLgcAgGuCMUbHjx9XXFyc/vCHwK4pEbAC4NChQ6pTp47TZQAAcE06cOCAateuHdDnJGAFQGRkpKRffsBRUVEOVwMAwLWhsLBQderU8f4eDiQCVgCUvi0YFRVFwAIAIMCcuDyHi9wBAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBlf9gxUEEnjMp0u4ZJtntDJ6RIAwK9YwQIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYFmo0wUAuPYkjct0uoTLsnlCJ6dLABBkWMECAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYFnQBqyJEyeqRYsWioyMVHR0tO677z7t2rXLZ0xRUZGGDh2qmjVrqmrVqurevbsOHjzoM2b//v3q1q2bqlatqpo1a2rYsGE6c%2BaMz5hVq1YpMTFRERERuvHGG/XKK6/4vT8AABC8gjZgrVq1SoMHD9aGDRuUlZWls2fPKjk5WSdPnvSOSUtL04cffqj58%2Bdr7dq1OnHihLp27apz585Jks6dO6cuXbro5MmTWrt2rebPn6%2BFCxdq%2BPDh3jlycnJ077336vbbb9fWrVs1duxYDRs2TAsXLgx4zwAAIDi4jDHG6SJsOHz4sKKjo7Vq1SrdcccdKigo0PXXX6933nlHvXr1kiQdOnRIderU0bJly5SSkqL/%2BZ//UdeuXXXgwAHFxcVJkubPn6/%2B/fsrPz9fUVFRGjVqlJYsWaKdO3d6n2vgwIH68ssvtX79%2BkuqrbCwUG63WwUFBYqKirLfPKDg%2BwLlYMKXPQPBycnfv0G7gnW%2BgoICSVL16tUlSVu2bFFxcbGSk5O9Y%2BLi4tS0aVOtW7dOkrR%2B/Xo1bdrUG64kKSUlRUVFRdqyZYt3zK/nKB2zefNmFRcX%2B7UnAAAQnEKdLsAGY4zS09PVrl07NW3aVJKUl5ensLAwVatWzWdsTEyM8vLyvGNiYmJ8zlerVk1hYWEXHRMTE6OzZ8/qyJEjio2NLVNPUVGRioqKvPuFhYVX3yQAAAgaFWIFa8iQIfrqq6/03nvv/e5YY4xcLpd3/9d/vtQxpe%2BqXuix0i8X4Lvdbu9Wp06dS%2BoDAABUDEEfsIYOHaolS5Zo5cqVql27tve4x%2BPRmTNndPToUZ/x%2Bfn53hUpj8fjXakqdfToURUXF190TH5%2BvkJDQ1WjRo0L1jRmzBgVFBR4twMHDlx1nwAAIHgEbcAyxmjIkCFatGiRPv30UyUkJPicT0xMVKVKlZSVleU9lpubq%2B3bt6tNmzaSpNatW2v79u3Kzc31jlm%2BfLnCw8OVmJjoHfPrOUrHJCUlqVKlShesLTw8XFFRUT4bAAC4dgRtwBo8eLDmzp2rd999V5GRkcrLy1NeXp5OnTolSXK73XrkkUc0fPhwffLJJ9q6dav69u2rZs2aqWPHjpKk5ORkNW7cWKmpqdq6das%2B%2BeQTjRgxQgMGDPCGooEDB2rfvn1KT0/Xzp079cYbb%2Bj111/XiBEjHOsdAACUb0EbsGbNmqWCggJ16NBBsbGx3m3BggXeMS%2B%2B%2BKLuu%2B8%2B9ezZU23btlWVKlX00UcfKSQkRJIUEhKipUuXKiIiQm3btlXPnj113333acqUKd45EhIStGzZMn322We65ZZb9Pzzz%2Bull17SAw88EPCeAQBAcKgw98Eqz7gPFgKB%2B2D5D/fBAoIT98ECAACoQAhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALAt1ugAAKO%2BSxmU6XcJl2Tyhk9MlANc8VrAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAsqAOWKtXr1a3bt0UFxcnl8ulxYsX%2B5zv37%2B/XC6Xz9aqVSufMUVFRRo6dKhq1qypqlWrqnv37jp48KDPmP3796tbt26qWrWqatasqWHDhunMmTN%2B7w8AAASnoA5YJ0%2BeVPPmzTVjxozfHNOpUyfl5uZ6t2XLlvmcT0tL04cffqj58%2Bdr7dq1OnHihLp27apz585Jks6dO6cuXbro5MmTWrt2rebPn6%2BFCxdq%2BPDhfu0NAAAEr6C%2BD1bnzp3VuXPni44JDw%2BXx%2BO54LmCggK9/vrreuedd9SxY0dJ0ty5c1WnTh2tWLFCKSkpWr58ub7%2B%2BmsdOHBAcXFxkqSpU6eqf//%2BmjBhgqKiouw2BQAAgl5Qr2Bdis8%2B%2B0zR0dGqX7%2B%2BBgwYoPz8fO%2B5LVu2qLi4WMnJyd5jcXFxatq0qdatWydJWr9%2BvZo2beoNV5KUkpKioqIibdmy5YLPWVRUpMLCQp8NAABcOyp0wOrcubPmzZunTz/9VFOnTtWmTZt01113qaioSJKUl5ensLAwVatWzedxMTExysvL846JiYnxOV%2BtWjWFhYV5x5xv4sSJcrvd3q1OnTp%2B6A4AAJRXQf0W4e/p1auX989NmzZVUlKS4uPjtXTpUvXo0eM3H2eMkcvl8u7/%2Bs%2B/NebXxowZo/T0dO9%2BYWEhIQsAgGtIhV7BOl9sbKzi4%2BO1Z88eSZLH49GZM2d09OhRn3H5%2BfneVSuPx1Nmpero0aMqLi4us7JVKjw8XFFRUT4bAAC4dlxTAevHH3/UgQMHFBsbK0lKTExUpUqVlJWV5R2Tm5ur7du3q02bNpKk1q1ba/v27crNzfWOWb58ucLDw5WYmBjYBgAAQFAI6rcIT5w4oW%2B%2B%2Bca7n5OTo%2BzsbFWvXl3Vq1fX%2BPHj9cADDyg2Nlbfffedxo4dq5o1a%2Br%2B%2B%2B%2BXJLndbj3yyCMaPny4atSooerVq2vEiBFq1qyZ91OFycnJaty4sVJTU/XCCy/op59%2B0ogRIzRgwABWpgAAwAUFdcDavHmz7rzzTu9%2B6XVP/fr106xZs7Rt2za9/fbbOnbsmGJjY3XnnXdqwYIFioyM9D7mxRdfVGhoqHr27KlTp07p7rvv1ltvvaWQkBBJUkhIiJYuXapBgwapbdu2qly5svr06aMpU6YEtlkAABA0XMYY43QRFV1hYaHcbrcKCgpY9YLfJI3LdLoElBObJ3RyugSgXHDy9%2B81dQ0WAABAIBCwAAAALHMkYM2dO1enT5924qkBAAD8zpGAlZ6eLo/Ho8cff1wbN250ogQAAAC/cSRgHTp0SG%2B88YZyc3PVrl07NWnSRFOnTtXhw4edKAcAAMAqRwJWaGioevTooSVLlmj//v3q16%2Bf3njjDdWuXVs9evTQ0qVLxYcbAQBAsHL8InePx6O7775bHTp0kMvl0ubNm9WnTx/Vq1dPa9ascbo8AACAy%2BZYwDpy5IimT5%2Bu5s2bq23btsrPz9fixYu1b98%2Bff/99%2Brataseeughp8oDAAC4Yo7cyf3%2B%2B%2B/XsmXLlJCQoEcffVT9%2BvXT9ddf7z3/xz/%2BUSNHjtRLL73kRHkAAABXxZGAFRUVpRUrVuj222//zTGxsbHas2dPAKsCAACww5GANWfOnN8d43K5dNNNNwWgGgAAALscuQbrySef1IwZM8ocf/nllzV8%2BHAHKgIAALDHkYD1wQcfqFWrVmWOt27dWgsWLHCgIgAAAHscCVhHjhxRtWrVyhyPiorSkSNHHKgIAADAHkcC1k033aSPP/64zPGPP/5YCQkJDlQEAABgjyMXuaelpSktLU0//vij7rrrLknSJ598osmTJ2vKlClOlAQAAGCNIwFrwIABOn36tDIyMvTMM89IkmrXrq2XXnpJf/7zn50oCQAAwBpHApYkDR06VEOHDlVubq4qV66s6667zqlSAAAArHIsYJWKjY11ugQAAACrHLnI/fDhw3r44YdVt25dRUREKCwszGcDAAAIZo6sYPXv31/ffvutnnrqKcXGxsrlcjlRBgAAgF84ErBWr16t1atX69Zbb3Xi6QEAAPzKkbcIa9euzaoVAACosBwJWC%2B%2B%2BKLGjBmjgwcPOvH0AAAAfuXIW4Spqak6fvy44uPjFRUVpUqVKvmcz8/Pd6IsAAAAKxwJWJMmTXLiaQEAAALCkYD1yCOPOPG0AAAAAeHINViS9N1332n8%2BPFKTU31viW4fPly7dy506mSAAAArHAkYK1Zs0ZNmjTRqlWr9P777%2BvEiROSpC%2B%2B%2BEJPP/20EyUBAABY40jAGjVqlMaPH6%2BVK1f63Ln9rrvu0oYNG5woCQAAwBpHAtZXX32lf/3Xfy1zPDo6WocPH3agIgAAAHscucj9uuuuU15enhISEnyOZ2dnq1atWk6UhABIGpfpdAmXZfOETk6XAAAIUo6sYPXu3VujR4/W4cOHvXd0//zzzzVixAj17dvXiZIAAACscSRgZWRkyOPxKDY2VidOnFDjxo3Vpk0btWjRQv/%2B7//uREkAAADWOPIWYVhYmBYsWKDdu3friy%2B%2BUElJiW677TY1bNjQiXIAAACsciRglapfv77q16/vZAkAAADWORKwHnvssYuef%2B211wJUCQAAgH2OBKzc3Fyf/eLiYu3YsUPHjx/XHXfc4URJAAAA1jgSsD766KMyx86ePau//OUvatSokQMVAQAA2OPYdxGeLzQ0VCNGjNALL7zgdCkAAABXpdwELEnau3eviouLnS4DAADgqjjyFuHIkSN99o0xys3N1ZIlS/SnP/3JiZIAAACscSRgrV%2B/3mf/D3/4g66//npNmjRJAwYMcKIkAAAAaxwJWGvWrHHiaQEAAAKiXF2DBQAAUBE4soLVokUL75c8/56NGzf6uRoAAAC7HAlYd955p1599VXVr19frVu3liRt2LBBu3bt0uOPP67w8HAnygIAALDCkYB17NgxDR48WBkZGT7Hx40bpx9%2B%2BEH/9V//5URZAAAAVjhyDdb777%2Bvhx9%2BuMzx/v3764MPPnCgIgAAAHscWcEKDw/XunXrVK9ePZ/j69at4%2B1BlBtJ4zKdLgEAEKQcCVjDhg3TwIEDtXXrVrVq1UrSL9dgzZ49W2PHjnWiJAAAAGscCVjjxo1TQkKC/vM//1NvvPGGJKlRo0aaPXu2%2BvTp40RJAAAA1jgSsCSpT58%2BhCkAAFAhOXaj0cLCQr311lt6%2BumndfToUUnSl19%2BqdzcXKdKAgAAsMKRFazt27erY8eOqlKlig4cOKD%2B/furWrVqev/993Xw4EHNmTPHibIAAACscGQF68knn1SfPn307bffKiIiwnu8S5cuWr16tRMlAQAAWONIwNq0aZMGDRpU5utyatWqdVlvEa5evVrdunVTXFycXC6XFi9e7HPeGKPx48crLi5OlStXVocOHbRjxw6fMUePHlVqaqrcbrfcbrdSU1N17NgxnzHbtm1T%2B/btVblyZdWqVUvPPfecjDGX2TUAALhWOBKwwsLCdOLEiTLH9%2BzZo5o1a17yPCdPnlTz5s01Y8aMC56fPHmypk2bphkzZmjTpk3yeDy65557dPz4ce%2BYPn36KDs7W5mZmcrMzFR2drZSU1O95wsLC3XPPfcoLi5OmzZt0t///ndNmTJF06ZNu4yOAQDAtcSRa7C6d%2B%2Bu559/XgsWLJAkuVwuff/99xo9erR69OhxyfN07txZnTt3vuA5Y4ymT5%2BucePGeeecM2eOYmJi9O677%2Brxxx/Xzp07lZmZqQ0bNqhly5aSpNmzZ6t169batWuXGjRooHnz5un06dN66623FB4erqZNm2r37t2aNm2a0tPTL/lLqwEAwLXDkRWsqVOn6tChQ/J4PDp16pTuuusu3XjjjYqIiCjz/YRXKicnR3l5eUpOTvYeCw8PV/v27bVu3TpJ0vr16%2BV2u73hSpJatWolt9vtM6Z9%2B/Y%2Bd5hPSUnRoUOH9N1331mpFQAAVCyOrGCVBpisrCx98cUXKikp0W233aaUlBRrK0J5eXmSpJiYGJ/jMTEx2rdvn3dMdHR0mcdGR0d7H5%2BXl6cbbrihzByl5xISEso8vqioSEVFRd79wsLCK28EAAAEnYAHrOLiYt17772aOXOmkpOTfVaY/OH8wGaM8Tl2oUD3e2NKL3D/rTA4ceJEPfvss1dcMwAACG4Bf4uwUqVK2rp1q9%2BvXfJ4PJL%2B/0pWqfz8fO8KlMfj0Q8//FDmsYcPH/YZc6E5pLKrY6XGjBmjgoIC73bgwIGrawYAAAQVR67B6tu3r958802/PkdCQoI8Ho%2BysrK8x86cOaNVq1apTZs2kqTWrVuroKBAGzdu9I75/PPPVVBQ4DNm9erVOnPmjHfM8uXLFRcXV%2Batw1Lh4eGKiory2QAAwLXDse8inDFjhlasWKGkpCRVrVrV59zkyZMvaY4TJ07om2%2B%2B8e7n5OQoOztb1atXV926dZWWlqaMjAzVq1dP9erVU0ZGhqpUqeL9DsRGjRqpU6dOGjBggF599VVJ0mOPPaauXbuqQYMGkn65jcOzzz6r/v37a%2BzYsdqzZ48yMjL09NNP8wlCAABwQY4ErC1btujmm2%2BWJH311Vc%2B5y4ntGzevFl33nmndz89PV2S1K9fP7311lsaOXKkTp06pUGDBuno0aNq2bKlli9frsjISO9j5s2bp2HDhnmvBevevbvPfbXcbreysrI0ePBgJSUlqVq1akpPT/c%2BFwAAwPlcJoC3JN%2B7d68SEhKuuZWfwsJCud1uFRQUXNNvFyaNy3S6BOCasHlCJ6dLAMoFJ3//BvQarHr16unw4cPe/V69el3wInMAAIBgFtCAdf5i2bJly3Ty5MlAlgAAAOB3jnyKEAAAoCILaMByuVxlrr%2B61q7HAgAAFV9AP0VojFH//v293%2Bt3%2BvRpDRw4sMxtGhYtWhTIsgAAAKwKaMDq16%2Bfz37fvn0D%2BfQAAAABEdCA5e%2B7twMAAJQHXOQOAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJaFOl0AAMCupHGZTpdwyTZP6OR0CYBfsIIFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsqdMAaP368XC6Xz%2BbxeLznjTEaP3684uLiVLlyZXXo0EE7duzwmePo0aNKTU2V2%2B2W2%2B1Wamqqjh07FuhWAABAEKnQAUuSmjRpotzcXO%2B2bds277nJkydr2rRpmjFjhjZt2iSPx6N77rlHx48f947p06ePsrOzlZmZqczMTGVnZys1NdWJVgAAQJAIdboAfwsNDfVZtSpljNH06dM1btw49ejRQ5I0Z84cxcTE6N1339Xjjz%2BunTt3KjMzUxs2bFDLli0lSbNnz1br1q21a9cuNWjQIKC9AACA4FDhV7D27NmjuLg4JSQkqHfv3tq7d68kKScnR3l5eUpOTvaODQ8PV/v27bVu3TpJ0vr16%2BV2u73hSpJatWolt9vtHXMhRUVFKiws9NkAAMC1o0IHrJYtW%2Brtt9/Wxx9/rNmzZysvL09t2rTRjz/%2BqLy8PElSTEyMz2NiYmK85/Ly8hQdHV1m3ujoaO%2BYC5k4caL3mi232606depY7AoAAJR3FTpgde7cWQ888ICaNWumjh07aunSpZJ%2BeSuwlMvl8nmMMcbn2PnnLzTmfGPGjFFBQYF3O3DgwNW2AgAAgkiFDljnq1q1qpo1a6Y9e/Z4r8s6fyUqPz/fu6rl8Xj0ww8/lJnn8OHDZVa%2Bfi08PFxRUVE%2BGwAAuHZcUwGrqKhIO3fuVGxsrBISEuTxeJSVleU9f%2BbMGa1atUpt2rSRJLVu3VoFBQXauHGjd8znn3%2BugoIC7xgAAIDzVehPEY4YMULdunVT3bp1lZ%2Bfr7/97W8qLCxUv3795HK5lJaWpoyMDNWrV0/16tVTRkaGqlSpoj59%2BkiSGjVqpE6dOmnAgAF69dVXJUmPPfaYunbtyicIAQDAb6rQAevgwYN68MEHdeTIEV1//fVq1aqVNmzYoPj4eEnSyJEjderUKQ0aNEhHjx5Vy5YttXz5ckVGRnrnmDdvnoYNG%2Bb9tGH37t01Y8YMR/oBAADBwWWMMU4XUdEVFhbK7XaroKDgmr4eK2lcptMlAChnNk/o5HQJqMCc/P17TV2DBQAAEAgELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALAt1ugAAwLUraVym0yVcls0TOjldAoIEK1gAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGZ8iDHLB9gkcAACuBaxgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAslCnCwAAIFgkjct0uoTLsnlCJ6dLuGaxggUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjBuNAgBQQQXTjVEr2k1RWcG6RDNnzlRCQoIiIiKUmJioNWvWOF0SAAAopwhYl2DBggVKS0vTuHHjtHXrVt1%2B%2B%2B3q3Lmz9u/f73RpAACgHCJgXYJp06bpkUce0aOPPqpGjRpp%2BvTpqlOnjmbNmuV0aQAAoBziGqzfcebMGW3ZskWjR4/2OZ6cnKx169Zd8DFFRUUqKiry7hcUFEiSCgsLrdd3ruik9TkBAAg0f/yOLJ3TGGN97t9DwPodR44c0blz5xQTE%2BNzPCYmRnl5eRd8zMSJE/Xss8%2BWOV6nTh2/1AgAQLBzT/Xf3MePH5fb7fbfE1wAAesSuVwun31jTJljpcaMGaP09HTvfklJiX766SfVqFHjNx9zJQoLC1WnTh0dOHBAUVFR1uYtLypyfxW5N4n%2Bgh39Ba%2BK3Jt0%2Bf0ZY3T8%2BHHFxcUFoDpfBKzfUbNmTYWEhJRZrcrPzy%2BzqlUqPDxc4eHhPseuu%2B46v9UYFRVVIf8hlarI/VXk3iT6C3b0F7wqcm/S5fUX6JWrUlzk/jvCwsKUmJiorKwsn%2BNZWVlq06aNQ1UBAIDyjBWsS5Cenq7U1FQlJSWpdevWeu2117R//34NHDjQ6dIAAEA5FDJ%2B/PjxThdR3jVt2lQ1atRQRkaGpkyZolOnTumdd95R8%2BbNnS5NISEh6tChg0JDK2ZWrsj9VeTeJPoLdvQXvCpyb1Lw9OcyTnx2EQAAoALjGiwAAADLCFgAAACWEbAAAAAsI2ABAABYRsAqR2bOnKmEhARFREQoMTFRa9asuej4hQsXqnHjxgoPD1fjxo314Ycflhmzc%2BdOde/eXW63W5GRkWrVqpX279/vrxYuynZ/J06c0JAhQ1S7dm1VrlxZjRo1cvQLuC%2Bnvx07duiBBx7QDTfcIJfLpenTp1/1nP5mu7%2BJEyeqRYsWioyMVHR0tO677z7t2rXLny1clD9%2BfqUmTpwol8ultLQ022VfEn/09v3336tv376qUaOGqlSpoltuuUVbtmzxVwsXZbu/s2fP6q9//asSEhJUuXJl3XjjjXruuedUUlLizzZ%2B0%2BX0N3v2bN1%2B%2B%2B2qVq2aqlWrpo4dO2rjxo0%2BY4wxGj9%2BvOLi4lS5cmV16NCI%2BA/%2BAAAJ4UlEQVRBO3bs8Hcbv8lmf8XFxRo1apSaNWumqlWrKi4uTg899JAOHToUiFZ8GZQL8%2BfPN5UqVTKzZ882X3/9tXniiSdM1apVzb59%2By44ft26dSYkJMRkZGSYnTt3moyMDBMaGmo2bNjgHfPNN9%2BY6tWrm6eeesp88cUX5ttvvzX/%2BMc/zA8//BCotrz80d%2Bjjz5qbrrpJrNy5UqTk5NjXn31VRMSEmIWL14cqLa8Lre/jRs3mhEjRpj33nvPeDwe8%2BKLL171nP7kj/5SUlLMm2%2B%2BabZv326ys7NNly5dTN26dc2JEyf83U4Z/ujv12NvuOEGc/PNN5snnnjCXy38Jn/09tNPP5n4%2BHjTv39/8/nnn5ucnByzYsUK88033/i7nTL80d/f/vY3U6NGDfOPf/zD5OTkmA8%2B%2BMD88Y9/NNOnT/d3O2Vcbn99%2BvQxL7/8stm6davZuXOnefjhh43b7TYHDx70jpk0aZKJjIw0CxcuNNu2bTO9evUysbGxprCwMFBtednu79ixY6Zjx45mwYIF5v/%2B7//M%2BvXrTcuWLU1iYmIg2zLGGEPAKif%2B%2BZ//2QwcONDnWMOGDc3o0aMvOL5nz56mU6dOPsdSUlJM7969vfu9evUyffv2tV/sFfBHf02aNDHPPfecz5jbbrvN/PWvf7VU9aW73P5%2BLT4%2B/oIv8lczp23%2B6O98%2Bfn5RpJZtWrVFdd5pfzV3/Hjx029evVMVlaWad%2B%2BvSMByx%2B9jRo1yrRr185ajVfDH/116dLF/PnPf/Y51qNHD0deT6/2deDs2bMmMjLSzJkzxxhjTElJifF4PGbSpEneMadPnzZut9u88sor9gq/RLb7u5CNGzcaSQH/zylvEZYDZ86c0ZYtW5ScnOxzPDk5WevWrbvgY9avX19mfEpKind8SUmJli5dqvr16yslJUXR0dFq2bKlFi9e7J8mLsIf/UlSu3bttGTJEn3//fcyxmjlypXavXu3UlJS7DdxEVfSnxNzXqlA1VJQUCBJql69urU5L4U/%2Bxs8eLC6dOmijh07XtU8V8pfvS1ZskRJSUn6t3/7N0VHR%2BvWW2/V7Nmzr7bcy%2Bav/tq1a6dPPvlEu3fvliR9%2BeWXWrt2re69996rqvdy2ejv559/VnFxsfffVU5OjvLy8nzmDA8PV/v27YPyteX8/i6koKBALpfLr98JfCEErHLgyJEjOnfuXJkvj46JiSnzJdOl8vLyLjo%2BPz9fJ06c0KRJk9SpUyctX75c999/v3r06KFVq1b5p5Hf4I/%2BJOmll15S48aNVbt2bYWFhalTp06aOXOm2rVrZ7%2BJi7iS/pyY80oFohZjjNLT09WuXTs1bdrUypyXyl/9zZ8/X1u2bNHEiROvtsQr5q/e9u7dq1mzZqlevXr6%2BOOPNXDgQA0bNkxvv/321ZZ8WfzV36hRo/Tggw%2BqYcOGqlSpkm699ValpaXpwQcfvNqSL4uN/kaPHq1atWp5Q37p4yrKa8v5/Z3v9OnTGj16tPr06RPwL78u3/eZv8a4XC6ffWNMmWOXOr70Ysx/%2BZd/0ZNPPilJuuWWW7Ru3Tq98sorat%2B%2Bvc3SL4nN/qRfAtaGDRu0ZMkSxcfHa/Xq1Ro0aJBiY2MdWTG43P6cmrM81jJkyBB99dVXWrt2rZX5roTN/g4cOKAnnnhCy5cvV0REhI3yrortn11JSYmSkpKUkZEhSbr11lu1Y8cOzZo1Sw899NBV1XolbPe3YMECzZ07V%2B%2B%2B%2B66aNGmi7OxspaWlKS4uTv369bvaci/blfY3efJkvffee/rss8/K/D2sCK8tF%2BtP%2BuWC9969e6ukpEQzZ860Vu%2BlImCVAzVr1lRISEiZxJ6fn18m2ZfyeDwXHV%2BzZk2FhoaqcePGPmMaNWoU8F9i/ujv1KlTGjt2rD788EN16dJFknTzzTcrOztbU6ZMCWjAupL%2BnJjzSvm7lqFDh2rJkiVavXq1ateufdXzXS5/9Ldlyxbl5%2BcrMTHRe%2BzcuXNavXq1ZsyYoaKiIoWEhFxV3ZfCXz%2B72NjYC762LFy48IrnvBL%2B6u%2Bpp57S6NGj1bt3b0lSs2bNtG/fPk2cODGgAetq%2BpsyZYoyMjK0YsUK3Xzzzd7jHo9H0i8rWbGxsZc1p23%2B6K9UcXGxevbsqZycHH366acBX72SeIuwXAgLC1NiYqKysrJ8jmdlZalNmzYXfEzr1q3LjF%2B%2BfLl3fFhYmFq0aFHmY%2B%2B7d%2B9WfHy8xep/nz/6Ky4uVnFxsf7wB9%2B/wiEhIQH/KPWV9OfEnFfKX7UYYzRkyBAtWrRIn376qRISEq621Cvij/7uvvtubdu2TdnZ2d4tKSlJf/rTn5SdnR2QcCX572fXtm3boH1tuRQ///xzUL%2B2vPDCC3r%2B%2BeeVmZmppKQkn3MJCQnyeDw%2Bc545c0arVq0KmteWi/Un/f9wtWfPHq1YsUI1atSwXvslCegl9fhNpR9Vff31183XX39t0tLSTNWqVc13331njDEmNTXV51MV//u//2tCQkLMpEmTzM6dO82kSZPK3MZg0aJFplKlSua1114ze/bsMX//%2B99NSEiIWbNmTYXor3379qZJkyZm5cqVZu/evebNN980ERERZubMmeW%2Bv6KiIrN161azdetWExsba0aMGGG2bt1q9uzZc8lzBnt/f/nLX4zb7TafffaZyc3N9W4///xzhejvfE59itAfvW3cuNGEhoaaCRMmmD179ph58%2BaZKlWqmLlz51aI/vr162dq1arlvU3DokWLTM2aNc3IkSPLfX//8R//YcLCwsx///d/%2B/y7On78uHfMpEmTjNvtNosWLTLbtm0zDz74oOO3abDVX3FxsenevbupXbu2yc7O9hlTVFQU0N4IWOXIyy%2B/bOLj401YWJi57bbbfD6u3r59e9OvXz%2Bf8R988IFp0KCBqVSpkmnYsKFZuHBhmTlff/1180//9E8mIiLCNG/e3JF7RJWy3V9ubq7p37%2B/iYuLMxEREaZBgwZm6tSppqSkJBDtlHE5/eXk5BhJZbb27dtf8pyBZru/C52XZN58883ANfUr/vj5/ZpTAcsY//T20UcfmaZNm5rw8HDTsGFD89prrwWom7Js91dYWGieeOIJU7duXRMREWFuvPFGM27cuID/gi51Of3Fx8dfsL9nnnnGO6akpMQ888wzxuPxmPDwcHPHHXeYbdu2BbAjXzb7%2B62frySzcuXKgPblMsYYPyyMAQAAXLO4BgsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGX/DxIIwbZCqhtsAAAAAElFTkSuQmCC"/>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12" id="common-828070647458107887">
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0.1253</td>
        <td class="number">354</td>
        <td class="number">3.7%</td>
        <td>
            <div class="bar" style="width:5%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.0894</td>
        <td class="number">299</td>
        <td class="number">3.1%</td>
        <td>
            <div class="bar" style="width:5%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.1183</td>
        <td class="number">243</td>
        <td class="number">2.5%</td>
        <td>
            <div class="bar" style="width:4%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.1218</td>
        <td class="number">215</td>
        <td class="number">2.2%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.0963</td>
        <td class="number">210</td>
        <td class="number">2.2%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.1114</td>
        <td class="number">206</td>
        <td class="number">2.2%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.08</td>
        <td class="number">198</td>
        <td class="number">2.1%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.1287</td>
        <td class="number">197</td>
        <td class="number">2.1%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.1148</td>
        <td class="number">193</td>
        <td class="number">2.0%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.0932</td>
        <td class="number">187</td>
        <td class="number">2.0%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr><tr class="other">
        <td class="fillremaining">Other values (239)</td>
        <td class="number">7276</td>
        <td class="number">76.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12"  id="extreme-828070647458107887">
            <p class="h4">Minimum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0.06</td>
        <td class="number">8</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:35%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.0639</td>
        <td class="number">4</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:18%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.0676</td>
        <td class="number">9</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:39%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.0705</td>
        <td class="number">23</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.0712</td>
        <td class="number">9</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:39%">&nbsp;</div>
        </td>
</tr>
</table>
            <p class="h4">Maximum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0.2052</td>
        <td class="number">4</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:57%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.2086</td>
        <td class="number">6</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:85%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.209</td>
        <td class="number">2</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:29%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.2121</td>
        <td class="number">7</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.2164</td>
        <td class="number">2</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:29%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
    </div>
</div>
</div><div class="row variablerow">
    <div class="col-md-3 namecol">
        <p class="h4 pp-anchor" id="pp_var_log.annual.inc">log.annual.inc<br/>
            <small>Numeric</small>
        </p>
    </div><div class="col-md-6">
    <div class="row">
        <div class="col-sm-6">
            <table class="stats ">
                <tr>
                    <th>Distinct count</th>
                    <td>1987</td>
                </tr>
                <tr>
                    <th>Unique (%)</th>
                    <td>20.7%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (n)</th>
                    <td>0</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (n)</th>
                    <td>0</td>
                </tr>
            </table>

        </div>
        <div class="col-sm-6">
            <table class="stats ">

                <tr>
                    <th>Mean</th>
                    <td>10.932</td>
                </tr>
                <tr>
                    <th>Minimum</th>
                    <td>7.5475</td>
                </tr>
                <tr>
                    <th>Maximum</th>
                    <td>14.528</td>
                </tr>
                <tr class="ignore">
                    <th>Zeros (%)</th>
                    <td>0.0%</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="col-md-3 collapse in" id="minihistogram8453215226609011761">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABLCAYAAAA1fMjoAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAAc1JREFUeJzt3LGq02AYx%2BE3xTXpXpqLENydBC/ITXAQHL0Ud8HJ3bto6QUke%2BNwrJt/2sM5iel5nj19v8L3I/RLSTNN01QzOx6P1ff93GNZucPhUPv9ftaZr2ad9kfbtlX18IW7rltiCazIMAzV9/3ffTOnRQJpmqaqqrquu%2BtA3nz8fvM1v768f4aV3IfLvpnTZvaJsCICgUAgEAgEAoFAIBAIBAKBQCAQCASLPEnn3zx9/7%2B4g0AgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBwGt/bvCYV/Kwbu4gEAgEAoFAIBAIBAKBU6w7cOvpmpddX88dBAKBQCAQCAQCgUAgeLGnWP5XxTUWCWSapqqqGobhST7v7ecfT/I5L8XrD99uvubnp3fPsJLrXPbJZd/MaZFAxnGsqqq%2B75cYzyNsvy69god9s91uZ53ZTAtkeT6f63Q6Vdu21TTN3ONZmWmaahzH2u12tdnM%2B7N5kUBgLZxiQSAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBD8BknbR9gR0MYEAAAAAElFTkSuQmCC">

</div>
<div class="col-md-12 text-right">
    <a role="button" data-toggle="collapse" data-target="#descriptives8453215226609011761,#minihistogram8453215226609011761"
       aria-expanded="false" aria-controls="collapseExample">
        Toggle details
    </a>
</div>
<div class="row collapse col-md-12" id="descriptives8453215226609011761">
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#quantiles8453215226609011761"
                                                  aria-controls="quantiles8453215226609011761" role="tab"
                                                  data-toggle="tab">Statistics</a></li>
        <li role="presentation"><a href="#histogram8453215226609011761" aria-controls="histogram8453215226609011761"
                                   role="tab" data-toggle="tab">Histogram</a></li>
        <li role="presentation"><a href="#common8453215226609011761" aria-controls="common8453215226609011761"
                                   role="tab" data-toggle="tab">Common Values</a></li>
        <li role="presentation"><a href="#extreme8453215226609011761" aria-controls="extreme8453215226609011761"
                                   role="tab" data-toggle="tab">Extreme Values</a></li>

    </ul>

    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active row" id="quantiles8453215226609011761">
            <div class="col-md-4 col-md-offset-1">
                <p class="h4">Quantile statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Minimum</th>
                        <td>7.5475</td>
                    </tr>
                    <tr>
                        <th>5-th percentile</th>
                        <td>9.9179</td>
                    </tr>
                    <tr>
                        <th>Q1</th>
                        <td>10.558</td>
                    </tr>
                    <tr>
                        <th>Median</th>
                        <td>10.929</td>
                    </tr>
                    <tr>
                        <th>Q3</th>
                        <td>11.291</td>
                    </tr>
                    <tr>
                        <th>95-th percentile</th>
                        <td>11.918</td>
                    </tr>
                    <tr>
                        <th>Maximum</th>
                        <td>14.528</td>
                    </tr>
                    <tr>
                        <th>Range</th>
                        <td>6.9809</td>
                    </tr>
                    <tr>
                        <th>Interquartile range</th>
                        <td>0.73288</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-4 col-md-offset-2">
                <p class="h4">Descriptive statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Standard deviation</th>
                        <td>0.61481</td>
                    </tr>
                    <tr>
                        <th>Coef of variation</th>
                        <td>0.056239</td>
                    </tr>
                    <tr>
                        <th>Kurtosis</th>
                        <td>1.609</td>
                    </tr>
                    <tr>
                        <th>Mean</th>
                        <td>10.932</td>
                    </tr>
                    <tr>
                        <th>MAD</th>
                        <td>0.46903</td>
                    </tr>
                    <tr class="">
                        <th>Skewness</th>
                        <td>0.028668</td>
                    </tr>
                    <tr>
                        <th>Sum</th>
                        <td>104710</td>
                    </tr>
                    <tr>
                        <th>Variance</th>
                        <td>0.37799</td>
                    </tr>
                    <tr>
                        <th>Memory size</th>
                        <td>74.9 KiB</td>
                    </tr>
                </table>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane col-md-8 col-md-offset-2" id="histogram8453215226609011761">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQCAYAAAByNR6YAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAIABJREFUeJzt3X10FPXd///XNiFLSMkWiMlmIWhoMQWCVhIPBFRAIQG5qcUWaTQlrVeUglIMeAO5WqktxAriXSooFxWKCLQXYlVoTGgrN1cSIIEoQQ5QCxJKQkDCLiAkIczvD3%2BZr0u4rZMMmzwf58w5zGc%2BM/P%2BgJ59nc98dtZhGIYhAAAAWOYbdhcAAADQ0hCwAAAALEbAAgAAsBgBCwAAwGIELAAAAIsRsAAAACxGwAIAALAYAQsAAMBiBCwAAACLEbAAAAAsRsACAACwGAELAADAYgQsAAAAixGwAAAALEbAAgAAsBgBCwAAwGIELAAAAIsRsAAAACxGwAIAALAYAQsAAMBiBCwAAACLEbAAAAAsRsACAACwGAELAADAYgQsAAAAixGwAAAALEbAAgAAsBgBCwAAwGIELAAAAIsRsAAAACxGwAIAALAYAQsAAMBiBCwAAACLEbAAAAAsRsACAACwGAELAADAYgQsAAAAixGwAAAALBZsdwGtwblz53To0CG1b99eDofD7nIAAGgVDMPQiRMn5PF49I1vNO%2BcEgGrGRw6dEgxMTF2lwEAQKtUXl6uLl26NOs9CVjNoH379pK%2B/AcODw%2B3uRoAAFoHn8%2BnmJgY83O4ORGwmkHDY8Hw8HACFgAAzcyO5TkscgcAALAYAQsAAMBiBCwAAACLEbAAAAAsRsACAACwGAELAADAYgQsAAAAixGwAAAALEbAAgAAsBgBCwAAwGIELAAAAIsRsAAAACzGjz0DaHaJWbl2l3BVimcNs7sEAAGGGSwAAACLEbAAAAAsRsACAACwGAELAADAYi0mYGVnZ8vhcGjKlClmW01NjR599FFFREQoLCxMo0eP1sGDB/3OO3DggEaNGqWwsDBFRERo8uTJqq2t9euzfv16JSQkqG3bturWrZsWLFjQLGMCAACBqUUErK1bt%2Br111/XTTfd5Nc%2BZcoUrV69WitWrNCmTZt08uRJjRw5UvX19ZKk%2Bvp6jRgxQqdOndKmTZu0YsUKrVq1SlOnTjWvsW/fPt199926/fbbtX37ds2YMUOTJ0/WqlWrmnWMAAAgcAT8axpOnjyp%2B%2B%2B/XwsXLtRvf/tbs93r9WrRokVaunSphgwZIkl68803FRMTo3Xr1iklJUV5eXn65JNPVF5eLo/HI0l6/vnnlZ6erlmzZik8PFwLFixQ165d9eKLL0qSevTooeLiYs2dO1f33ntv8w8YAABc8wJ%2BBmvSpEkaMWKEGaIalJSUqK6uTsnJyWabx%2BNRfHy8CgoKJEmFhYWKj483w5UkpaSkqKamRiUlJWafr16joU9xcbHq6uouWFNNTY18Pp/fBgAAWo%2BADlgrVqxQSUmJsrOzGx2rrKxUSEiIOnTo4NceFRWlyspKs09UVJTf8Q4dOigkJOSSfaKionT27FkdPXr0gnVlZ2fL5XKZW0xMzH88RgAAEHgCNmCVl5frF7/4hZYtW6a2bdte8XmGYcjhcJj7X/3zlfYxDOOi50rS9OnT5fV6za28vPyK6wMAAIEvYANWSUmJqqqqlJCQoODgYAUHB2v9%2BvV6%2BeWXFRwcrKioKNXW1qq6utrvvKqqKnNGyu12mzNVDaqrq1VXV3fJPlVVVQoODlanTp0uWJvT6VR4eLjfBgAAWo%2BADVh33XWXduzYodLSUnNLTEzU/fffb/65TZs2ys/PN8%2BpqKhQWVmZ%2BvfvL0lKSkpSWVmZKioqzD55eXlyOp1KSEgw%2B3z1Gg19Gq4PAABwvoD9FmH79u0VHx/v1xYWFqZOnTqZ7Q8%2B%2BKCmTp2qTp06qWPHjpo2bZp69%2B5tLohPTk5Wz549lZaWpjlz5ujYsWOaNm2aMjIyzFmnCRMmKCcnR5mZmcrIyFBhYaEWLVqk5cuXN%2B%2BAAQBAwAjYgHUlXnjhBQUHB2vs2LE6ffq07rrrLi1evFhBQUGSpKCgIK1Zs0YTJ07UgAEDFBoaqtTUVM2dO9e8RmxsrNauXavHHntMv//97%2BXxePTyyy/zigYAAHBRDqNhxTaajM/nk8vlktfrZT0WICkxK9fuEq5K8axhdpcA4D9g5%2BdvwK7BAgAAuFYRsAAAACxGwAIAALAYAQsAAMBiBCwAAACLEbAAAAAsRsACAACwGAELAADAYgQsAAAAixGwAAAALEbAAgAAsBgBCwAAwGIELAAAAIsRsAAAACxGwAIAALAYAQsAAMBiBCwAAACLEbAAAAAsRsACAACwGAELAADAYgQsAAAAixGwAAAALEbAAgAAsBgBCwAAwGIELAAAAIsRsAAAACwWsAFr/vz5uummmxQeHq7w8HAlJSXpr3/9q3l80KBBcjgcftu4ceP8rlFdXa20tDS5XC65XC6lpaXp%2BPHjfn127NihgQMHKjQ0VJ07d9YzzzwjwzCaZYwAACAwBdtdwH%2BqS5cuevbZZ/Wd73xHkrRkyRJ9//vf1/bt29WrVy9JUkZGhp555hnznNDQUL9rpKam6uDBg8rNzZUkPfTQQ0pLS9N7770nSfL5fBo6dKgGDx6srVu3as%2BePUpPT1dYWJimTp3aHMMEAAABKGAD1qhRo/z2Z82apfnz56uoqMgMWO3atZPb7b7g%2Bbt27VJubq6KiorUt29fSdLChQuVlJSk3bt3Ky4uTsuWLdOZM2e0ePFiOZ1OxcfHa8%2BePZo3b54yMzPlcDiadpAAACAgBewjwq%2Bqr6/XihUrdOrUKSUlJZnty5YtU0REhHr16qVp06bpxIkT5rHCwkK5XC4zXElSv3795HK5VFBQYPYZOHCgnE6n2SclJUWHDh3S/v37L1pPTU2NfD6f3wYAAFqPgJ3Bkr5cH5WUlKQzZ87om9/8plavXq2ePXtKku6//37FxsbK7XarrKxM06dP10cffaT8/HxJUmVlpSIjIxtdMzIyUpWVlWafG264we94VFSUeSw2NvaCdWVnZ%2BvXv/61VcMEAAABJqADVlxcnEpLS3X8%2BHGtWrVK48eP1/r169WzZ09lZGSY/eLj49W9e3clJiZq27Zt6tOnjyRd8BGfYRh%2B7ef3aVjgfqnHg9OnT1dmZqa57/P5FBMT858NEgAABJyADlghISHmIvfExERt3bpVL730kl577bVGffv06aM2bdpo79696tOnj9xutw4fPtyo35EjR8xZKrfbbc5mNaiqqpL0/2ayLsTpdPo9VgQAAK1Li1iD1cAwDNXU1Fzw2M6dO1VXV6fo6GhJUlJSkrxer7Zs2WL22bx5s7xer/r372/22bBhg2pra80%2BeXl58ng8jR4dAgAANAjYgDVjxgxt3LhR%2B/fv144dO5SVlaUPP/xQ999/vz799FM988wzKi4u1v79%2B7V27Vr96Ec/0i233KIBAwZIknr06KFhw4YpIyNDRUVFKioqUkZGhkaOHKm4uDhJX77Gwel0Kj09XWVlZVq9erVmz57NNwgBAMAlBewjwsOHDystLU0VFRVyuVy66aablJubq6FDh6q8vFx/%2B9vf9NJLL%2BnkyZOKiYnRiBEj9PTTTysoKMi8xrJlyzR58mQlJydLkkaPHq2cnBzzuMvlUn5%2BviZNmqTExER16NBBmZmZfuurAAAAzucweC15k/P5fHK5XPJ6vQoPD7e7HMB2iVm5dpdwVYpnDbO7BAD/ATs/fwP2ESEAAMC1ioAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMUIWAAAABYjYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYLNjuAgDgWpeYlWt3CVeleNYwu0sAWj1msAAAACxGwAIAALAYAQsAAMBiBCwAAACLEbAAAAAsRsACAACwGAELAADAYgQsAAAAixGwAAAALEbAAgAAsBgBCwAAwGIELAAAAIsFbMCaP3%2B%2BbrrpJoWHhys8PFxJSUn661//ah6vqanRo48%2BqoiICIWFhWn06NE6ePCg3zUOHDigUaNGKSwsTBEREZo8ebJqa2v9%2Bqxfv14JCQlq27atunXrpgULFjTL%2BAAAQOAK2IDVpUsXPfvssyouLlZxcbHuvPNOff/739fOnTslSVOmTNHq1au1YsUKbdq0SSdPntTIkSNVX18vSaqvr9eIESN06tQpbdq0SStWrNCqVas0depU8x779u3T3Xffrdtvv13bt2/XjBkzNHnyZK1atcqWMQMAgMDgMAzDsLsIq3Ts2FFz5szRD3/4Q1133XVaunSp7rvvPknSoUOHFBMTo7Vr1yolJUV//etfNXLkSJWXl8vj8UiSVqxYofT0dFVVVSk8PFxPPvmk3n33Xe3atcu8x4QJE/TRRx%2BpsLDwiuvy%2BXxyuVzyer0KDw%2B3dtBAAErMyrW7hBateNYwu0sArgl2fv4G7AzWV9XX12vFihU6deqUkpKSVFJSorq6OiUnJ5t9PB6P4uPjVVBQIEkqLCxUfHy8Ga4kKSUlRTU1NSopKTH7fPUaDX2Ki4tVV1d30Xpqamrk8/n8NgAA0HoEdMDasWOHvvnNb8rpdGrChAlavXq1evbsqcrKSoWEhKhDhw5%2B/aOiolRZWSlJqqysVFRUlN/xDh06KCQk5JJ9oqKidPbsWR09evSidWVnZ8vlcplbTEyMFcMFAAABIqADVlxcnEpLS1VUVKSf//znGj9%2BvD755JOL9jcMQw6Hw9z/6p%2BvtE/DE9ULndtg%2BvTp8nq95lZeXn7FYwIAAIEv2O4Cvo6QkBB95zvfkSQlJiZq69ateumll3TfffeptrZW1dXVfrNYVVVV6t%2B/vyTJ7XZr8%2BbNfterrq5WXV2dOWvldrvN2ayvXiM4OFidOnW6aF1Op1NOp9OSMQIAgMAT0DNY5zMMQzU1NUpISFCbNm2Un59vHquoqFBZWZkZsJKSklRWVqaKigqzT15enpxOpxISEsw%2BX71GQ5/ExES1adOmGUYEAAACUcDOYM2YMUPDhw9XTEyMTpw4oRUrVujDDz9Ubm6uXC6XHnzwQU2dOlWdOnVSx44dNW3aNPXu3VtDhgyRJCUnJ6tnz55KS0vTnDlzdOzYMU2bNk0ZGRnmNw0mTJignJwcZWZmKiMjQ4WFhVq0aJGWL19u59ABAMA1LmAD1uHDh5WWlqaKigq5XC7ddNNNys3N1dChQyVJL7zwgoKDgzV27FidPn1ad911lxYvXqygoCBJUlBQkNasWaOJEydqwIABCg0NVWpqqubOnWveIzY2VmvXrtVjjz2m3//%2B9/J4PHr55Zd177332jJmAAAQGFrUe7CuVbwHC/DHe7CaFu/BAr7Ee7AAAABaEAIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMUIWAAAABYjYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMUIWAAAABYjYAEAAFiMgAUAAGAxWwLWm2%2B%2BqTNnzthxawAAgCZnS8DKzMyU2%2B3Www8/rC1btthRAgAAQJOxJWAdOnRIf/jDH1RRUaHbbrtNvXr10vPPP68jR47YUQ4AAIClbAlYwcHBGjNmjN59910dOHBA48eP1x/%2B8Ad16dJFY8aM0Zo1a2QYhh2lAQAAfG22L3J3u9266667NGjQIDkcDhUXFys1NVXdu3fXxo0b7S4PAADgqtkWsI4ePaoXX3xRN998swYMGKCqqiq98847%2Buyzz/Tvf/9bI0eO1E9%2B8pOLnp%2Bdna1bb71V7du3V2RkpO655x7t3r3br09DaPvqNm7cOL8%2B1dXVSktLk8vlksvlUlpamo4fP%2B7XZ8eOHRo4cKBCQ0PVuXNnPfPMM8ywAQCAi7IlYP3gBz9Q586dtWDBAqWlpam8vFx//vOfNWzYMDkcDn3zm9/UE088oc8%2B%2B%2Byi11i/fr0mTZqkoqIi5efn6%2BzZs0pOTtapU6f8%2BmVkZKiiosLcXnvtNb/jqampKi0tVW5urnJzc1VaWqq0tDTzuM/n09ChQ%2BXxeLR161a98sormjt3rubNm2ftXwoAAGgxgu24aXh4uNatW6fbb7/9on2io6O1d%2B/eix7Pzc3123/jjTcUGRmpkpIS3XHHHWZ7u3bt5Ha7L3iNXbt2KTc3V0VFRerbt68kaeHChUpKStLu3bsVFxenZcuW6cyZM1q8eLGcTqfi4%2BO1Z88ezZs3T5mZmXI4HFczdAAA0ArYMoO1ZMmSS4YrSXI4HPr2t799xdf0er2SpI4dO/q1L1u2TBEREerVq5emTZumEydOmMcKCwvlcrnMcCVJ/fr1k8vlUkFBgdln4MCBcjqdZp%2BUlBQdOnRI%2B/fvv2AtNTU18vl8fhsAAGg9bAlYjz32mHJychq1//73v9fUqVOv%2BnqGYSgzM1O33Xab4uPjzfb7779fy5cv14cffqhf/vKXWrVqlcaMGWMer6ysVGRkZKPrRUZGqrKy0uwTFRXld7xhv6HP%2BbKzs801XS6XSzExMVc9JgAAELhsCVh//vOf1a9fv0btSUlJWrly5VVf75FHHtHHH3%2Bs5cuX%2B7VnZGRoyJAhio%2BP17hx4/S///u/WrdunbZt22b2udAjPsMw/NrP79OwwP1ijwenT58ur9drbuXl5Vc9JgAAELhsWYN19OhRdejQoVF7eHi4jh49elXXevTRR/Xuu%2B9qw4YN6tKlyyX79unTR23atNHevXvVp08fud1uHT58uFG/I0eOmLNUbre70UxVVVWVJDWa2WrgdDr9HikCAIDWxZYZrG9/%2B9v64IMPGrV/8MEHio2NvaJrGIahRx55RG%2B//bb%2B/ve/X9F5O3fuVF1dnaKjoyV9OWPm9Xr9fq5n8%2BbN8nq96t%2B/v9lnw4YNqq2tNfvk5eXJ4/HohhtuuKJaAQBA62LLDNaUKVM0ZcoUff7557rzzjslSX/729/03HPPae7cuVd0jUmTJumtt97SX/7yF7Vv396cZXK5XAoNDdWnn36qZcuW6e6771ZERIQ%2B%2BeQTTZ06VbfccosGDBggSerRo4eGDRumjIwM8/UNDz30kEaOHKm4uDhJX77G4de//rXS09M1Y8YM7d27V7Nnz9avfvUrvkEIAAAuyGHY9MbMV155RbNnzzYf0XXp0kUzZ87Uz372sys6/2Lh5o033lB6errKy8v1wAMPqKysTCdPnlRMTIxGjBihp59%2B2u%2BbhseOHdPkyZP17rvvSpJGjx6tnJwcfetb3zL77NixQ5MmTdKWLVvUoUMHTZgw4aoCls/nk8vlktfrVXh4%2BBWdA7RkiVm5l%2B%2BE/1jxrGF2lwBcE%2Bz8/LUtYDWoqKhQaGioX6BpaQhYgD8CVtMiYAFfsvPz15ZHhF/VsB4KAACgpbBlkfuRI0f005/%2BVF27dlXbtm0VEhLitwEAAAQyW2aw0tPT9emnn%2Brxxx9XdHQ0i8UBAECLYkvA2rBhgzZs2KBbbrnFjtsDAAA0KVseEXbp0oVZKwAA0GLZErBeeOEFTZ8%2BXQcPHrTj9gAAAE3KlkeEaWlpOnHihK6//nqFh4erTZs2fscbfooGAAAgENkSsJ599lk7bgsAANAsbAlYDz74oB23BQAAaBa2rMGSpP3792vmzJlKS0szHwnm5eVp165ddpUEAABgCVsC1saNG9WrVy%2BtX79ef/rTn3Ty5ElJ0rZt2/SrX/3KjpIAAAAsY0vAevLJJzVz5kz94x//8Htz%2B5133qmioiI7SgIAALCMLQHr448/1g9/%2BMNG7ZGRkTpy5IgNFQEAAFjHloD1rW99S5WVlY3aS0tL1blzZxsqAgAAsI4tAWvcuHF66qmndOTIEfON7ps3b9a0adP0wAMP2FESAACAZWwJWLNnz5bb7VZ0dLROnjypnj17qn///rr11lv1y1/%2B0o6SAAAALGPLe7BCQkK0cuVK7dmzR9u2bdO5c%2BfUp08fffe737WjHAAAAEvZErAa3HjjjbrxxhvtLAEAAMBytgSshx566JLHX3/99WaqBAAAwHq2BKyKigq//bq6Ou3cuVMnTpzQHXfcYUdJAAAAlrElYL333nuN2s6ePauf//zn6tGjhw0VAQAAWMe23yI8X3BwsKZNm6Y5c%2BbYXQoAAMDXcs0ELEn617/%2Bpbq6OrvLAAAA%2BFpseUT4xBNP%2BO0bhqGKigq9%2B%2B67uv/%2B%2B%2B0oCQAAwDK2BKzCwkK//W984xu67rrr9OyzzyojI8OOkgAAACxjS8DauHGjHbcFAABoFtfUGqyrkZ2drVtvvVXt27dXZGSk7rnnHu3evduvT01NjR599FFFREQoLCxMo0eP1sGDB/36HDhwQKNGjVJYWJgiIiI0efJk1dbW%2BvVZv369EhIS1LZtW3Xr1k0LFixo8vEBAIDAZcsM1q233mr%2ByPPlbNmy5YLt69ev16RJk3Trrbfq7NmzysrKUnJysj755BOFhYVJkqZMmaL33ntPK1asUKdOnTR16lSNHDlSJSUlCgoKUn19vUaMGKHrrrtOmzZt0ueff67x48fLMAy98sorkqR9%2B/bp7rvvVkZGht5880393//9nyZOnKjrrrtO9957rzV/IQAAoEWxJWANHjxYr732mm688UYlJSVJkoqKirR79249/PDDcjqdl71Gbm6u3/4bb7yhyMhIlZSU6I477pDX69WiRYu0dOlSDRkyRJL05ptvKiYmRuvWrVNKSory8vL0ySefqLy8XB6PR5L0/PPPKz09XbNmzVJ4eLgWLFigrl276sUXX5Qk9ejRQ8XFxZo7dy4BCwAAXJAtAev48eOaNGmSZs%2Be7deelZWlw4cP63/%2B53%2Bu%2Bpper1eS1LFjR0lSSUmJ6urqlJycbPbxeDyKj49XQUGBUlJSVFhYqPj4eDNcSVJKSopqampUUlKiwYMHq7Cw0O8aDX0WLVqkuro6tWnTplEtNTU1qqmpMfd9Pt9VjwcAAAQuW9Zg/elPf9JPf/rTRu3p6en685//fNXXMwxDmZmZuu222xQfHy9JqqysVEhIiDp06ODXNyoqSpWVlWafqKgov%2BMdOnRQSEjIJftERUXp7NmzOnr06AXryc7OlsvlMreYmJirHhMAAAhctgQsp9OpgoKCRu0FBQVX9HjwfI888og%2B/vhjLV%2B%2B/LJ9DcPwW/91obVgl%2BtjGMZFz5Wk6dOny%2Bv1mlt5efkVjQMAALQMtjwinDx5siZMmKDt27erX79%2Bkr5cg7Vw4ULNmDHjqq716KOP6t1339WGDRvUpUsXs93tdqu2tlbV1dV%2Bs1hVVVXq37%2B/2Wfz5s1%2B16uurlZdXZ05a%2BV2u83ZrK9eIzg4WJ06dbpgTU6n8z8KigAAoGWwZQYrKytLixYtUmFhoR566CE99NBDKiws1MKFC5WVlXVF1zAMQ4888ojefvtt/f3vf1dsbKzf8YSEBLVp00b5%2BflmW0VFhcrKysyAlZSUpLKyMlVUVJh98vLy5HQ6lZCQYPb56jUa%2BiQmJl5w/RUAAIDDaHjeFWAmTpyot956S3/5y18UFxdntrtcLoWGhkqSfv7zn%2Bv999/X4sWL1bFjR02bNk2ff/6532savve97ykqKkpz5szRsWPHlJ6ernvuucfvNQ3x8fF6%2BOGHlZGRocLCQk2YMEHLly%2B/4m8R%2Bnw%2BuVwueb1ehYeHW/%2BXAQSYxKzcy3fCf6x41jC7SwCuCXZ%2B/tr2olGfz6fFixfrV7/6laqrqyVJH330kd9s0qXMnz9fXq9XgwYNUnR0tLmtXLnS7PPCCy/onnvu0dixYzVgwAC1a9dO7733noKCgiRJQUFBWrNmjdq2basBAwZo7NixuueeezR37lzzGrGxsVq7dq0%2B/PBDfe9739NvfvMbvfzyy7yiAQAAXJQtM1hlZWUaMmSI2rVrp/Lycu3evVvdunVTVlaWDh48qCVLljR3SU2KGSzAHzNYTYsZLOBLrW4G67HHHlNqaqo%2B/fRTtW3b1mwfMWKENmzYYEdJAAAAlrHlW4Rbt27V/PnzG73moHPnzlf8iBAAAOBaZcsMVkhIiE6ePNmofe/evYqIiLChIgAAAOvYErBGjx6t3/zmNzp79qykL1/Y%2Be9//1tPPfWUxowZY0dJAAAAlrElYD3//PM6dOiQ3G63Tp8%2BrTvvvFPdunVT27ZtG/0%2BIQAAQKCxZQ2Wy%2BVSQUGB8vPztW3bNp07d059%2BvRRSkrKRX9%2BBgAAIFA0e8Cqq6vT3XffrVdffVXJyclKTk5u7hIAAACaVLM/ImzTpo22b9/OTBUAAGixbFmD9cADD%2BiNN96w49YAAABNzpY1WJKUk5OjdevWKTExUWFhYX7HnnvuOZuqAgAA%2BPpsCVglJSW66aabJEkff/yx3zEeHQIAgEDXrAHrX//6l2JjY7Vx48bmvC0AAECzatY1WN27d9eRI0fM/fvuu0%2BHDx9uzhIAAACaXLMGLMMw/PbXrl2rU6dONWcJAAAATc6WbxECAAC0ZM0asBwOR6NF7CxqBwAALU2zLnI3DEPp6elyOp2SpDNnzmjChAmNXtPw9ttvN2dZAAAAlmrWgDV%2B/Hi//QceeKA5bw8AANAsmjVg8fZ2AADQGrDIHQAAwGIELAAAAIsRsAAAACxGwAIAALAYAQsAAMBiBCwAAACLEbAAAAAsFtABa8OGDRo1apQ8Ho8cDofeeecdv%2BPp6enmz/M0bP369fPrU1NTo0cffVQREREKCwvT6NGjdfDgQb8%2BBw4c0KhRoxQWFqaIiAhNnjxZtbW1TT4%2BAAAQmAI6YJ06dUo333yzcnJyLtpn2LBhqqioMLe1a9f6HZ8yZYpWr16tFStWaNOmTTp58qRGjhyp%2Bvp6SVJ9fb1GjBihU6dOadOmTVqxYoVWrVqlqVOnNunYAABA4GrWN7lbbfjw4Ro%2BfPgl%2BzidTrnd7gse83q9WrRokZYuXaohQ4ZIkt58803FxMRo3bp1SklJUV5enj755BOVl5fL4/FIkp5//nmlp6dr1qxZCg8Pt3ZQAAAg4AX0DNaV%2BPDDDxWvMmmeAAAUTklEQVQZGakbb7xRGRkZqqqqMo%2BVlJSorq5OycnJZpvH41F8fLwKCgokSYWFhYqPjzfDlSSlpKSopqZGJSUlF7xnTU2NfD6f3wYAAFqPFh2whg8frmXLlunvf/%2B7nn/%2BeW3dulV33nmnampqJEmVlZUKCQlRhw4d/M6LiopSZWWl2ScqKsrveIcOHRQSEmL2OV92drZcLpe5xcTENMHoAADAtSqgHxFezn333Wf%2BOT4%2BXomJibr%2B%2Buu1Zs0ajRkz5qLnGYYhh8Nh7n/1zxfr81XTp09XZmamue/z%2BQhZAAC0Ii16But80dHRuv7667V3715JktvtVm1traqrq/36VVVVmbNWbre70UxVdXW16urqGs1sNXA6nQoPD/fbAABA69GqAtbnn3%2Bu8vJyRUdHS5ISEhLUpk0b5efnm30qKipUVlam/v37S5KSkpJUVlamiooKs09eXp6cTqcSEhKadwAAACAgBPQjwpMnT%2Bqf//ynub9v3z6VlpaqY8eO6tixo2bOnKl7771X0dHR2r9/v2bMmKGIiAj94Ac/kCS5XC49%2BOCDmjp1qjp16qSOHTtq2rRp6t27t/mtwuTkZPXs2VNpaWmaM2eOjh07pmnTpikjI4OZKQAAcEEBHbCKi4s1ePBgc79h3dP48eM1f/587dixQ3/84x91/PhxRUdHa/DgwVq5cqXat29vnvPCCy8oODhYY8eO1enTp3XXXXdp8eLFCgoKkiQFBQVpzZo1mjhxogYMGKDQ0FClpqZq7ty5zTtYAAAQMByGYRh2F9HS%2BXw%2BuVwueb1eZr0ASYlZuXaX0KIVzxpmdwnANcHOz99WtQYLAACgORCwAAAALEbAAgAAsBgBCwAAwGIELAAAAIsRsAAAACxGwAIAALAYAQsAAMBiBCwAAACLEbAAAAAsRsACAACwGAELAADAYgQsAAAAixGwAAAALBZsdwEArJGYlWt3CQCA/x8zWAAAABYjYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYLGADlgbNmzQqFGj5PF45HA49M477/gdNwxDM2fOlMfjUWhoqAYNGqSdO3f69amurlZaWppcLpdcLpfS0tJ0/Phxvz47duzQwIEDFRoaqs6dO%2BuZZ56RYRhNPj4AABCYAjpgnTp1SjfffLNycnIuePy5557TvHnzlJOTo61bt8rtdmvo0KE6ceKE2Sc1NVWlpaXKzc1Vbm6uSktLlZaWZh73%2BXwaOnSoPB6Ptm7dqldeeUVz587VvHnzmnx8AAAgMAXbXcDXMXz4cA0fPvyCxwzD0IsvvqisrCyNGTNGkrRkyRJFRUXprbfe0sMPP6xdu3YpNzdXRUVF6tu3ryRp4cKFSkpK0u7duxUXF6dly5bpzJkzWrx4sZxOp%2BLj47Vnzx7NmzdPmZmZcjgczTZeAAAQGAJ6ButS9u3bp8rKSiUnJ5ttTqdTAwcOVEFBgSSpsLBQLpfLDFeS1K9fP7lcLr8%2BAwcOlNPpNPukpKTo0KFD2r9//wXvXVNTI5/P57cBAIDWo8UGrMrKSklSVFSUX3tUVJR5rLKyUpGRkY3OjYyM9OtzoWt89R7ny87ONtd0uVwuxcTEfL3BAACAgNJiA1aD8x/hGYbh13ahR3yX69OwwP1ijwenT58ur9drbuXl5f9x/QAAIPAE9BqsS3G73ZK%2BnGWKjo4226uqqswZKLfbrcOHDzc698iRI359zp%2BpqqqqktR4dqyB0%2Bn0e6QIAABalxY7gxUbGyu32638/Hyzrba2VuvXr1f//v0lSUlJSfJ6vdqyZYvZZ/PmzfJ6vX59NmzYoNraWrNPXl6ePB6PbrjhhuYZDAAACCgBHbBOnjyp0tJSlZaWSvpyYXtpaakOHDggh8OhKVOmaPbs2Vq9erXKysqUnp6udu3aKTU1VZLUo0cPDRs2TBkZGSoqKlJRUZEyMjI0cuRIxcXFSfryNQ5Op1Pp6ekqKyvT6tWrNXv2bL5BCAAALiqgHxEWFxdr8ODB5n5mZqYkafz48Vq8eLGeeOIJnT59WhMnTlR1dbX69u2rvLw8tW/f3jxn2bJlmjx5svltw9GjR/u9V8vlcik/P1%2BTJk1SYmKiOnTooMzMTPNeAAAA53MYvJK8yfl8PrlcLnm9XoWHh9tdDlqoxKxcu0vANaJ41jC7SwCuCXZ%2B/gb0I0IAAIBrEQELAADAYgQsAAAAixGwAAAALEbAAgAAsBgBCwAAwGIELAAAAIsRsAAAACxGwAIAALAYAQsAAMBiBCwAAACLEbAAAAAsRsACAACwGAELAADAYgQsAAAAixGwAAAALEbAAgAAsFiw3QUAAKyVmJVrdwlXrHjWMLtLAJoEM1gAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMVadMCaOXOmHA6H3%2BZ2u83jhmFo5syZ8ng8Cg0N1aBBg7Rz506/a1RXVystLU0ul0sul0tpaWk6fvx4cw8FAAAEkBYdsCSpV69eqqioMLcdO3aYx5577jnNmzdPOTk52rp1q9xut4YOHaoTJ06YfVJTU1VaWqrc3Fzl5uaqtLRUaWlpdgwFAAAEiBb/UznBwcF%2Bs1YNDMPQiy%2B%2BqKysLI0ZM0aStGTJEkVFRemtt97Sww8/rF27dik3N1dFRUXq27evJGnhwoVKSkrS7t27FRcX16xjAQAAgaHFz2Dt3btXHo9HsbGxGjdunP71r39Jkvbt26fKykolJyebfZ1OpwYOHKiCggJJUmFhoVwulxmuJKlfv35yuVxmnwupqamRz%2Bfz2wAAQOvRogNW37599cc//lEffPCBFi5cqMrKSvXv31%2Bff/65KisrJUlRUVF%2B50RFRZnHKisrFRkZ2ei6kZGRZp8Lyc7ONtdsuVwuxcTEWDgqAABwrWvRAWv48OG699571bt3bw0ZMkRr1qyR9OWjwAYOh8PvHMMw/NrOP36hPuebPn26vF6vuZWXl3/doQAAgADSogPW%2BcLCwtS7d2/t3bvXXJd1/kxUVVWVOavldrt1%2BPDhRtc5cuRIo5mvr3I6nQoPD/fbAABA69GqAlZNTY127dql6OhoxcbGyu12Kz8/3zxeW1ur9evXq3///pKkpKQkeb1ebdmyxeyzefNmeb1esw8AAMD5WvS3CKdNm6ZRo0apa9euqqqq0m9/%2B1v5fD6NHz9eDodDU6ZM0ezZs9W9e3d1795ds2fPVrt27ZSamipJ6tGjh4YNG6aMjAy99tprkqSHHnpII0eO5BuEAADgolp0wDp48KB%2B/OMf6%2BjRo7ruuuvUr18/FRUV6frrr5ckPfHEEzp9%2BrQmTpyo6upq9e3bV3l5eWrfvr15jWXLlmny5Mnmtw1Hjx6tnJwcW8YDAAACg8MwDMPuIlo6n88nl8slr9fLeiw0mcSsXLtLAK5a8axhdpeAFszOz99WtQYLAACgORCwAAAALEbAAgAAsBgBCwAAwGIELAAAAIsRsAAAACxGwAIAALAYAQsAAMBiBCwAAACLEbAAAAAsRsACAACwGAELAADAYgQsAAAAixGwAAAALEbAAgAAsBgBCwAAwGIELAAAAIsF210AcK1KzMq1uwQAQIBiBgsAAMBiBCwAAACLEbAAAAAsRsACAACwGAELAADAYgQsAAAAi/GaBgCAbQLtdSjFs4bZXQICBDNYAAAAFiNgXaFXX31VsbGxatu2rRISErRx40a7SwIAANcoAtYVWLlypaZMmaKsrCxt375dt99%2Bu4YPH64DBw7YXRoAALgGOQzDMOwu4lrXt29f9enTR/PnzzfbevTooXvuuUfZ2dmXPd/n88nlcsnr9So8PLwpS72mBdpaCwA4H2uwAoudn78scr%2BM2tpalZSU6KmnnvJrT05OVkFBwQXPqampUU1Njbnv9XolffkP3ZrV15yyuwQA%2BFpumbbK7hKuyvpfDbW7BFs1fO7aMZdEwLqMo0ePqr6%2BXlFRUX7tUVFRqqysvOA52dnZ%2BvWvf92oPSYmpklqBADgQlzP213BteHEiRNyuVzNek8C1hVyOBx%2B%2B4ZhNGprMH36dGVmZpr7586d07Fjx9SpU6eLnhMIfD6fYmJiVF5e3uoedbbWsbfWcUutd%2BytddxS6x17Sx63YRg6ceKEPB5Ps9%2BbgHUZERERCgoKajRbVVVV1WhWq4HT6ZTT6fRr%2B9a3vtVkNTa38PDwFvc/4ZVqrWNvreOWWu/YW%2Bu4pdY79pY67uaeuWrAtwgvIyQkRAkJCcrPz/drz8/PV//%2B/W2qCgAAXMuYwboCmZmZSktLU2JiopKSkvT666/rwIEDmjBhgt2lAQCAa1DQzJkzZ9pdxLUuPj5enTp10uzZszV37lydPn1aS5cu1c0332x3ac0uKChIgwYNUnBw68vmrXXsrXXcUusde2sdt9R6x95ax92UeA8WAACAxViDBQAAYDECFgAAgMUIWAAAABYjYAEAAFiMgIXLOnv2rP77v/9bsbGxCg0NVbdu3fTMM8/o3LlzdpfW5E6cOKEpU6bo%2BuuvV2hoqPr376%2BtW7faXZblNmzYoFGjRsnj8cjhcOidd97xO24YhmbOnCmPx6PQ0FANGjRIO3futKla61xu3G%2B//bZSUlIUEREhh8Oh0tJSmyq13qXGXldXpyeffFK9e/dWWFiYPB6PfvKTn%2BjQoUM2VmyNy/2bz5w5U9/97ncVFhamDh06aMiQIdq8ebNN1VrrcmP/qocfflgOh0MvvvhiM1bYshCwcFm/%2B93vtGDBAuXk5GjXrl167rnnNGfOHL3yyit2l9bk/uu//kv5%2BflaunSpduzYoeTkZA0ZMkT//ve/7S7NUqdOndLNN9%2BsnJycCx5/7rnnNG/ePOXk5Gjr1q1yu90aOnSoTpw40cyVWuty4z516pQGDBigZ599tpkra3qXGvsXX3yhbdu26Ze//KW2bdumt99%2BW3v27NHo0aNtqNRal/s3v/HGG5WTk6MdO3Zo06ZNuuGGG5ScnKwjR440c6XWu9zYG7zzzjvavHmzLT8v06IYwGWMGDHC%2BNnPfubXNmbMGOOBBx6wqaLm8cUXXxhBQUHG%2B%2B%2B/79d%2B8803G1lZWTZV1fQkGatXrzb3z507Z7jdbuPZZ581286cOWO4XC5jwYIFdpTYJM4f91ft27fPkGRs3769matqHpcae4MtW7YYkozPPvusmapqelcybq/Xa0gy1q1b10xVNY%2BLjf3gwYNG586djbKyMuP66683XnjhBRuqaxmYwcJl3Xbbbfrb3/6mPXv2SJI%2B%2Bugjbdq0SXfffbfNlTWts2fPqr6%2BXm3btvVrDw0N1aZNm2yqqvnt27dPlZWVSk5ONtucTqcGDhyogoICGytDc/J6vXI4HC3qd1Uvp7a2Vq%2B//rpcLlereLH0uXPnlJaWpscff1y9evWyu5yAxytbcVlPPvmkvF6vvvvd7yooKEj19fWaNWuWfvzjH9tdWpNq3769kpKS9Jvf/EY9evRQVFSUli9frs2bN6t79%2B52l9dsGn7o/PwfN4%2BKitJnn31mR0loZmfOnNFTTz2l1NTUFvljwOd7//33NW7cOH3xxReKjo5Wfn6%2BIiIi7C6ryf3ud79TcHCwJk%2BebHcpLQIzWLislStX6s0339Rbb72lbdu2acmSJZo7d66WLFlid2lNbunSpTIMQ507d5bT6dTLL7%2Bs1NRUBQUF2V1as3M4HH77hmE0akPLU1dXp3HjxuncuXN69dVX7S6nWQwePFilpaUqKCjQsGHDNHbsWFVVVdldVpMqKSnRSy%2B9pMWLF/P/tUUIWLisxx9/XE899ZTGjRun3r17Ky0tTY899piys7PtLq3Jffvb39b69et18uRJlZeXa8uWLaqrq1NsbKzdpTUbt9st6f/NZDWoqqpqNKuFlqWurk5jx47Vvn37lJ%2Bf3ypmryQpLCxM3/nOd9SvXz8tWrRIwcHBWrRokd1lNamNGzeqqqpKXbt2VXBwsIKDg/XZZ59p6tSpuuGGG%2BwuLyARsHBZX3zxhb7xDf//VIKCglrFaxoahIWFKTo6WtXV1frggw/0/e9/3%2B6Smk1sbKzcbrfy8/PNttraWq1fv179%2B/e3sTI0pYZwtXfvXq1bt06dOnWyuyTbGIahmpoau8toUmlpafr4449VWlpqbh6PR48//rg%2B%2BOADu8sLSKzBwmWNGjVKs2bNUteuXdWrVy9t375d8%2BbN089%2B9jO7S2tyH3zwgQzDUFxcnP75z3/q8ccfV1xcnH7605/aXZqlTp48qX/%2B85/m/r59%2B1RaWqqOHTuqa9eumjJlimbPnq3u3bure/fumj17ttq1a6fU1FQbq/76LjfuY8eO6cCBA%2Bb7n3bv3i3py1m9hpm9QHWpsXs8Hv3whz/Utm3b9P7776u%2Bvt6cwezYsaNCQkLsKvtru9S4O3XqpFmzZmn06NGKjo7W559/rldffVUHDx7Uj370Ixurtsbl/ns/P0S3adNGbrdbcXFxzV1qy2DvlxgRCHw%2Bn/GLX/zC6Nq1q9G2bVujW7duRlZWllFTU2N3aU1u5cqVRrdu3YyQkBDD7XYbkyZNMo4fP253WZb7xz/%2BYUhqtI0fP94wjC9f1fD0008bbrfbcDqdxh133GHs2LHD3qItcLlxv/HGGxc8/vTTT9tatxUuNfaG11JcaPvHP/5hd%2Blfy6XGffr0aeMHP/iB4fF4jJCQECM6OtoYPXq0sWXLFrvLtsTl/ns/H69p%2BHochmEYTRvhAAAAWhfWYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgMQIWAACAxQhYAAAAFiNgAQAAWIyABQAAYDECFgAAgMUIWAAAABYjYAEAAFiMgAUAAGAxAhYAAIDFCFgAAAAWI2ABAABYjIAFAABgsf8P/nqflrhDu8QAAAAASUVORK5CYII%3D"/>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12" id="common8453215226609011761">
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">11.00209984</td>
        <td class="number">308</td>
        <td class="number">3.2%</td>
        <td>
            <div class="bar" style="width:5%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">10.81977828</td>
        <td class="number">248</td>
        <td class="number">2.6%</td>
        <td>
            <div class="bar" style="width:4%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">10.59663473</td>
        <td class="number">224</td>
        <td class="number">2.3%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">10.30895266</td>
        <td class="number">224</td>
        <td class="number">2.3%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">10.71441777</td>
        <td class="number">221</td>
        <td class="number">2.3%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">11.22524339</td>
        <td class="number">196</td>
        <td class="number">2.0%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">11.15625052</td>
        <td class="number">165</td>
        <td class="number">1.7%</td>
        <td>
            <div class="bar" style="width:3%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">10.77895629</td>
        <td class="number">149</td>
        <td class="number">1.6%</td>
        <td>
            <div class="bar" style="width:2%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">10.91508846</td>
        <td class="number">147</td>
        <td class="number">1.5%</td>
        <td>
            <div class="bar" style="width:2%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">11.08214255</td>
        <td class="number">146</td>
        <td class="number">1.5%</td>
        <td>
            <div class="bar" style="width:2%">&nbsp;</div>
        </td>
</tr><tr class="other">
        <td class="fillremaining">Other values (1977)</td>
        <td class="number">7550</td>
        <td class="number">78.8%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12"  id="extreme8453215226609011761">
            <p class="h4">Minimum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">7.547501682999999</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">7.60090246</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">8.101677747</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">8.160518247</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">8.188689124</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
            <p class="h4">Maximum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">13.71015004</td>
        <td class="number">2</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">13.99783211</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:50%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">14.12446477</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:50%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">14.18015367</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:50%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">14.52835448</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:50%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
    </div>
</div>
</div><div class="row variablerow">
    <div class="col-md-3 namecol">
        <p class="h4 pp-anchor" id="pp_var_not.fully.paid">not.fully.paid<br/>
            <small>Boolean</small>
        </p>
    </div><div class="col-md-6">
    <div class="row">
        <div class="col-sm-6">
            <table class="stats ">
                <tr class="">
                    <th>Distinct count</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>Unique (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (n)</th>
                    <td>0</td>
                </tr>
            </table>
        </div>
        <div class="col-sm-6">
            <table class="stats ">
                <tr>
                    <th>Mean</th>
                    <td>0.16005</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="col-md-3 collapse in" id="minifreqtable-1090247169886427468">
    <table class="mini freq">
        <tr class="">
    <th>0</th>
    <td>
        <div class="bar" style="width:100%" data-toggle="tooltip" data-placement="right" data-html="true"
             data-delay=500 title="Percentage: 84.0%">
            8045
        </div>
        
    </td>
</tr><tr class="">
    <th>1</th>
    <td>
        <div class="bar" style="width:19%" data-toggle="tooltip" data-placement="right" data-html="true"
             data-delay=500 title="Percentage: 16.0%">
            &nbsp;
        </div>
        1533
    </td>
</tr>
    </table>
</div>
<div class="col-md-12 text-right">
    <a role="button" data-toggle="collapse" data-target="#freqtable-1090247169886427468, #minifreqtable-1090247169886427468"
        aria-expanded="true" aria-controls="collapseExample">
        Toggle details
    </a>
</div>
<div class="col-md-12 extrapadding collapse" id="freqtable-1090247169886427468">
    
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0</td>
        <td class="number">8045</td>
        <td class="number">84.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">1</td>
        <td class="number">1533</td>
        <td class="number">16.0%</td>
        <td>
            <div class="bar" style="width:19%">&nbsp;</div>
        </td>
</tr>
</table>
</div>
</div><div class="row variablerow">
    <div class="col-md-3 namecol">
        <p class="h4 pp-anchor" id="pp_var_pub.rec">pub.rec<br/>
            <small>Numeric</small>
        </p>
    </div><div class="col-md-6">
    <div class="row">
        <div class="col-sm-6">
            <table class="stats ">
                <tr>
                    <th>Distinct count</th>
                    <td>6</td>
                </tr>
                <tr>
                    <th>Unique (%)</th>
                    <td>0.1%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (n)</th>
                    <td>0</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (n)</th>
                    <td>0</td>
                </tr>
            </table>

        </div>
        <div class="col-sm-6">
            <table class="stats ">

                <tr>
                    <th>Mean</th>
                    <td>0.062122</td>
                </tr>
                <tr>
                    <th>Minimum</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>Maximum</th>
                    <td>5</td>
                </tr>
                <tr class="alert">
                    <th>Zeros (%)</th>
                    <td>94.2%</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="col-md-3 collapse in" id="minihistogram-7644342946884638789">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABLCAYAAAA1fMjoAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAAahJREFUeJzt18FtnFAUhtHLyFsowIIuXIR78to9uQh3AZoCGGWRRYYsksnG0R%2BNkjyMdM4W8e4DvU%2BIbtu2rRpblqWmaWo9loOb57nGcWw686HptJ/6vq%2BqHw88DMMeW%2BBA1nWtaZp%2BnZuWdgmk67qqqhqG4UMgTy9vd6/3/vr8T/bF53Y7Ny2dmk%2BEAxEIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKB4GHvDezl6eXt7nveX5//w074zHxBINjlC7JtW1VVrev64dq3r1/uXu936/xJqzn8vdt7v52blrpth6nLstQ0Ta3HcnDzPNc4jk1n7hLI9Xqt8/lcfd9X13Wtx3Mw27bV5XKpx8fHOp3a/hXsEggchZ90CAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBILvLVFMW95aFloAAAAASUVORK5CYII%3D">

</div>
<div class="col-md-12 text-right">
    <a role="button" data-toggle="collapse" data-target="#descriptives-7644342946884638789,#minihistogram-7644342946884638789"
       aria-expanded="false" aria-controls="collapseExample">
        Toggle details
    </a>
</div>
<div class="row collapse col-md-12" id="descriptives-7644342946884638789">
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#quantiles-7644342946884638789"
                                                  aria-controls="quantiles-7644342946884638789" role="tab"
                                                  data-toggle="tab">Statistics</a></li>
        <li role="presentation"><a href="#histogram-7644342946884638789" aria-controls="histogram-7644342946884638789"
                                   role="tab" data-toggle="tab">Histogram</a></li>
        <li role="presentation"><a href="#common-7644342946884638789" aria-controls="common-7644342946884638789"
                                   role="tab" data-toggle="tab">Common Values</a></li>
        <li role="presentation"><a href="#extreme-7644342946884638789" aria-controls="extreme-7644342946884638789"
                                   role="tab" data-toggle="tab">Extreme Values</a></li>

    </ul>

    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active row" id="quantiles-7644342946884638789">
            <div class="col-md-4 col-md-offset-1">
                <p class="h4">Quantile statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Minimum</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>5-th percentile</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Q1</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Median</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Q3</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>95-th percentile</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>Maximum</th>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th>Range</th>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th>Interquartile range</th>
                        <td>0</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-4 col-md-offset-2">
                <p class="h4">Descriptive statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Standard deviation</th>
                        <td>0.26213</td>
                    </tr>
                    <tr>
                        <th>Coef of variation</th>
                        <td>4.2196</td>
                    </tr>
                    <tr>
                        <th>Kurtosis</th>
                        <td>38.781</td>
                    </tr>
                    <tr>
                        <th>Mean</th>
                        <td>0.062122</td>
                    </tr>
                    <tr>
                        <th>MAD</th>
                        <td>0.11699</td>
                    </tr>
                    <tr class="">
                        <th>Skewness</th>
                        <td>5.1264</td>
                    </tr>
                    <tr>
                        <th>Sum</th>
                        <td>595</td>
                    </tr>
                    <tr>
                        <th>Variance</th>
                        <td>0.06871</td>
                    </tr>
                    <tr>
                        <th>Memory size</th>
                        <td>74.9 KiB</td>
                    </tr>
                </table>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane col-md-8 col-md-offset-2" id="histogram-7644342946884638789">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQCAYAAAByNR6YAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAIABJREFUeJzt3X1UlHX%2B//HXBDKowWQYIEmFbZmGlYJH0UxLRcubzHa7QVkpY3UlDdFuzK01KyhTM6Ms3UrLDOsYrZ2MoDvUo5SQlJhHu7HEBMGiQV0FxPn90Y/r24Rl5QcuB5%2BPc%2BYc55rPXPOe2bPxPNdcXDg8Ho9HAAAAMOY0uwcAAABoaQgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAwwgsAAAAw/ztHuBUcPToUe3Zs0dBQUFyOBx2jwMAwCnB4/Fo//79ioiI0GmnNe8xJQKrGezZs0eRkZF2jwEAwCmptLRUHTt2bNbXJLCaQVBQkKSf/gcODg62eRoAAE4N1dXVioyMtH4ONycCqxk0fC0YHBxMYAEA0MzsOD2Hk9wBAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAM4489%2B7jYmTl2j/C7FT481O4RAABoFhzBAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMMxnA%2BvIkSP617/%2BpaioKLVu3VqdOnXS7NmzdfToUWuNx%2BPRrFmzFBERodatW2vAgAHaunWr136qqqqUmJgol8sll8ulxMRE/fjjj15rtmzZov79%2B6t169Y6%2B%2ByzNXv2bHk8nmZ5nwAAwPf4bGA9%2BuijeuaZZ5SZmalt27Zpzpw5euyxx/Tkk09aa%2BbMmaP58%2BcrMzNTmzZtUnh4uAYPHqz9%2B/dbaxISElRcXKycnBzl5OSouLhYiYmJ1uPV1dUaPHiwIiIitGnTJj355JOaO3eu5s%2Bf36zvFwAA%2BA5/uwf4szZu3Khrr71Ww4YNkySdd955euWVV1RYWCjpp6NXCxYs0MyZMzV69GhJ0rJlyxQWFqYVK1ZowoQJ2rZtm3JyclRQUKBevXpJkpYsWaK4uDht375dnTt31ssvv6zDhw9r6dKlcjqdio6O1o4dOzR//nylpaXJ4XDY8wEAAICTls8ewbr88sv13nvvaceOHZKkTz/9VOvXr9c111wjSdq5c6fKy8sVHx9vPcfpdKp///7asGGDpJ8izeVyWXElSb1795bL5fJa079/fzmdTmvNkCFDtGfPHn3zzTdN/TYBAIAP8tkjWHfffbfcbrcuuugi%2Bfn5qb6%2BXg8//LBuvvlmSVJ5ebkkKSwszOt5YWFh%2Bvbbb601oaGhjfYdGhpqPb%2B8vFznnXdeo300PBYVFdXo%2BTU1NaqpqbHuV1dX/8l3CQAAfJHPHsFauXKlli9frhUrVuiTTz7RsmXLNHfuXC1btsxr3S%2B/wvN4PF7bjvUV3/HWNJzg/mtfD2ZkZFgnzbtcLkVGRv6xNwcAAHyazwbWnXfeqXvuuUc33XSTunXrpsTERE2dOlUZGRmSpPDwcEn/dySrQUVFhXUEKjw8XHv37m2078rKSq81x9qH1PjoWIMZM2bI7XZbt9LS0hN4pwAAwNf4bGD973//02mneY/v5%2BdnXaYhKipK4eHhysvLsx6vra1Vfn6%2B%2BvTpI0mKi4uT2%2B3Wxx9/bK356KOP5Ha7vdasXbtWtbW11prc3FxFREQ0%2BuqwgdPpVHBwsNcNAACcOnw2sEaMGKGHH35Yb731lr755htlZ2dr/vz5uu666yT99PVdamqq0tPTlZ2drZKSEiUlJalNmzZKSEiQJHXp0kVDhw5VcnKyCgoKVFBQoOTkZA0fPlydO3eW9NNlHJxOp5KSklRSUqLs7Gylp6fzG4QAAOBX%2BexJ7k8%2B%2BaTuu%2B8%2BTZo0SRUVFYqIiNCECRN0//33W2vuuusuHTp0SJMmTVJVVZV69eql3NxcBQUFWWtefvllTZkyxfptw5EjRyozM9N63OVyKS8vTykpKYqNjVW7du2UlpamtLS05nuzAADApzg8XJK8yVVXV8vlcsntdhv/ujB2Zo7R/TWlwoeH2j0CAOAU0pQ/f4/HZ78iBAAAOFkRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIYRWAAAAIb5dGB99913Gjt2rEJCQtSmTRtddtllKioqsh73eDyaNWuWIiIi1Lp1aw0YMEBbt2712kdVVZUSExPlcrnkcrmUmJioH3/80WvNli1b1L9/f7Vu3Vpnn322Zs%2BeLY/H0yzvEQAA%2BB6fDayqqir17dtXrVq10ttvv63PP/9c8%2BbN0xlnnGGtmTNnjubPn6/MzExt2rRJ4eHhGjx4sPbv32%2BtSUhIUHFxsXJycpSTk6Pi4mIlJiZaj1dXV2vw4MGKiIjQpk2b9OSTT2ru3LmaP39%2Bs75fAADgO/ztHuDPevTRRxUZGakXXnjB2nbeeedZ//Z4PFqwYIFmzpyp0aNHS5KWLVumsLAwrVixQhMmTNC2bduUk5OjgoIC9erVS5K0ZMkSxcXFafv27ercubNefvllHT58WEuXLpXT6VR0dLR27Nih%2BfPnKy0tTQ6Ho1nfNwAAOPn57BGs1atXKzY2Vn/7298UGhqq7t27a8mSJdbjO3fuVHl5ueLj461tTqdT/fv314YNGyRJGzdulMvlsuJKknr37i2Xy%2BW1pn///nI6ndaaIUOGaM%2BePfrmm2%2BOOVtNTY2qq6u9bgAA4NThs4H19ddfa9GiRbrgggv0zjvvaOLEiZoyZYpefPFFSVJ5ebkkKSwszOt5YWFh1mPl5eUKDQ1ttO/Q0FCvNcfax89f45cyMjKsc7pcLpciIyNP4J0CAABf47OBdfToUfXo0UPp6enq3r27JkyYoOTkZC1atMhr3S%2B/wvN4PF7bjvUV3/HWNJzg/mtfD86YMUNut9u6lZaW/rE3BwAAfJrPBlaHDh3UtWtXr21dunTRrl27JEnh4eGSGh9lqqiosI5AhYeHa%2B/evY32XVlZ6bXmWPuQGh8da%2BB0OhUcHOx1AwAApw6fDay%2Bfftq%2B/btXtt27Nihc889V5IUFRWl8PBw5eXlWY/X1tYqPz9fffr0kSTFxcXJ7Xbr448/ttZ89NFHcrvdXmvWrl2r2tpaa01ubq4iIiK8TqoHAABo4LOBNXXqVBUUFCg9PV1ffvmlVqxYocWLFyslJUXST1/fpaamKj09XdnZ2SopKVFSUpLatGmjhIQEST8d8Ro6dKiSk5NVUFCggoICJScna/jw4ercubOkny7j4HQ6lZSUpJKSEmVnZys9PZ3fIAQAAL/KZy/T0LNnT2VnZ2vGjBmaPXu2oqKitGDBAo0ZM8Zac9ddd%2BnQoUOaNGmSqqqq1KtXL%2BXm5iooKMha8/LLL2vKlCnWbxuOHDlSmZmZ1uMul0t5eXlKSUlRbGys2rVrp7S0NKWlpTXfmwUAAD7F4eGS5E2uurpaLpdLbrfb%2BPlYsTNzjO6vKRU%2BPNTuEQAAp5Cm/Pl7PD77FSEAAMDJisACAAAwzJbAWr58uQ4fPmzHSwMAADQ5WwIrLS1N4eHhmjBhgtclEgAAAFoCWwJrz549ev7551VWVqbLL79cF198sebNm6fKyko7xgEAADDKlsDy9/fX6NGjtXr1au3atUvjxo3T888/r44dO2r06NF66623xC83AgAAX2X7Se7h4eEaOHCgBgwYIIfDocLCQiUkJOiCCy7QunXr7B4PAADgD7MtsPbt26cFCxbo0ksvVd%2B%2BfVVRUaE33nhD3377rb777jsNHz5cf//73%2B0aDwAA4E%2Bz5Uru1113ndasWaOoqCjddtttGjdunM466yzr8dNPP1133XWXFi5caMd4AAAAJ8SWwAoODta7776rfv36/eqaDh066IsvvmjGqQAAAMywJbCWLVt23DUOh0Pnn39%2BM0wDAABgli3nYE2dOtXrDyo3eOqppzRt2jQbJgIAADDHlsB67bXX1Lt370bb4%2BLitHLlShsmAgAAMMeWwNq3b5/atWvXaHtwcLD27dtnw0QAAADm2BJY559/vt55551G29955x1FRUXZMBEAAIA5tpzknpqaqtTUVH3//fe66qqrJEnvvfee5syZo7lz59oxEgAAgDG2BFZycrIOHz6s9PR0/fvf/5YkdezYUQsXLtStt95qx0gAAADG2BJYkjR58mRNnjxZZWVlat26tc444wy7RgEAADDKtsBq0KFDB7tHAAAAMMqWk9wrKyt1yy236JxzzlFgYKACAgK8bgAAAL7MliNYSUlJ%2Buqrr3TnnXeqQ4cOcjgcdowBAADQJGwJrLVr12rt2rXq3r27HS8PAADQpGz5irBjx44ctQIAAC2WLYH1%2BOOPa8aMGdq9e7cdLw8AANCkbPmKMDExUfv379e5556r4OBgtWrVyuvxiooKO8YCAAAwwpbAeuSRR%2Bx4WQAAgGZhS2CNHz/ejpcFAABoFracgyVJ33zzjWbNmqXExETrK8Hc3Fxt27bNrpEAAACMsCWw1q1bp4svvlj5%2Bfl69dVXdeDAAUnSJ598ovvvv9%2BOkQAAAIyxJbDuvvtuzZo1Sx988IHXlduvuuoqFRQU2DESAACAMbYE1meffaa//vWvjbaHhoaqsrLShokAAADMsSWwzjjjDJWXlzfaXlxcrLPPPtuGiQAAAMyxJbBuuukm3XPPPaqsrLSu6P7RRx9p%2BvTpGjt2rB0jAQAAGGNLYKWnpys8PFwdOnTQgQMH1LVrV/Xp00c9e/bUfffdZ8dIAAAAxthyHayAgACtXLlSO3bs0CeffKKjR4%2BqR48euuiii%2BwYBwAAwChbAqvBhRdeqAsvvNDOEQAAAIyzJbD%2B8Y9//ObjixcvbqZJAAAAzLMlsMrKyrzu19XVaevWrdq/f7%2BuuOIKO0YCAAAwxpbAevPNNxttO3LkiP75z3%2BqS5cuNkwEAABgjm1/i/CX/P39NX36dD322GN2jwIAAHBCTprAkqSvv/5adXV1do8BAABwQmz5ivCuu%2B7yuu/xeFRWVqbVq1drzJgxdowEAABgjC2BtXHjRq/7p512ms466yw98sgjSk5OtmMkAAAAY2wJrHXr1tnxsgAAAM3ipDoHCwAAoCWw5QhWz549rT/yfDwff/xxE08DAABgli2BdeWVV%2BrZZ5/VhRdeqLi4OElSQUGBtm/frgkTJsjpdNoxFgAAgBG2BNaPP/6olJQUpaene22fOXOm9u7dq//85z92jAUAAGCELedgvfrqq7rlllsabU9KStJrr71mw0QAAADm2BJYTqdTGzZsaLR9w4YNfD0IAAB8ni1fEU6ZMkUTJ07U5s2b1bt3b0k/nYO1ZMkS3XvvvXaMBAAAYIwtgTVz5kxFRUXpiSee0PPPPy9J6tKli5YsWaKEhAQ7RgIAADDGlsCSpISEBGIKAAC0SLZdaLS6ulpLly7V/fffr6qqKknSp59%2BqrKyMrtGAgAAMMKWI1glJSUaNGiQ2rRpo9LSUiUlJaldu3Z69dVXtXv3bi1btsyOsQAAAIyw5QjW1KlTlZCQoK%2B%2B%2BkqBgYHW9mHDhmnt2rV2jAQAAGCMLYG1adMmTZo0qdGfyzn77LP/9FeEGRkZcjgcSk1NtbbV1NRo8uTJat%2B%2Bvdq2bauRI0dq9%2B7dXs/btWuXRowYobZt26p9%2B/aaMmWKamtrvdbk5%2BcrJiZGgYGB6tSpk5555pk/NSMAADg12BJYAQEBOnDgQKPtX3zxhdq3b/%2BH97dp0yYtXrxYl1xyidf21NRUZWdnKysrS%2BvXr9eBAwc0fPhw1dfXS5Lq6%2Bs1bNgwHTx4UOvXr1dWVpZWrVqladOmWfvYuXOnrrnmGvXr10%2BbN2/WvffeqylTpmjVqlV/eE4AAHBqsCWwRo4cqQcffFBHjhyRJDkcDn333Xe65557NHr06D%2B0rwMHDmjMmDFasmSJ2rVrZ213u9167rnnNG/ePA0aNEjdu3fX8uXLtWXLFr377ruSpNzcXH3%2B%2Bedavny5unfvrkGDBmnevHlasmSJqqurJUnPPPOMzjnnHC1YsEBdunTRbbfdpltvvVVz58419GkAAICWxpbAmjdvnvbs2aPw8HAdOnRIV111lTp16qTAwMBGf5/weFJSUjRs2DANGjTIa3tRUZHq6uoUHx9vbYuIiFB0dLR1FfmNGzcqOjpaERER1pohQ4aopqZGRUVF1pqf76NhTWFhoerq6v7QrAAA4NRgy28RulwubdiwQXl5efrkk0909OhR9ejRQ0OGDGl0XtZvycrKUlFRkQoLCxs9Vl5eroCAAK%2BjWpIUFham8vJya01YWJjX4%2B3atVNAQMBvrgkLC9ORI0e0b98%2BdejQodFr19TUqKamxrrfcDQMAACcGpo9sOrq6nTNNdfo6aefVnx8fKOjQ79XaWmp7rjjDuXm5nr9JuLxeDwer4g7VtAdb43H4/nV50o/nXD/wAMP/O6ZAABAy9LsXxG2atVKmzdv/kNHqo6lqKhIFRUViomJkb%2B/v/z9/ZWfn6%2BFCxfK399fYWFhqq2ttS5i2qCiosI6IhUeHm4dqWpQVVWlurq631xTUVEhf39/hYSEHHO2GTNmyO12W7fS0tITeq8AAMC32HIO1tixY/XCCy%2Bc0D4GDhyoLVu2qLi42LrFxsZqzJgx1r9btWqlvLw86zllZWUqKSlRnz59JElxcXEqKSnxujREbm6unE6nYmJirDU/30fDmob9H4vT6VRwcLDXDQAAnDps%2B1uEmZmZevfddxUbG6u2bdt6PTZnzpzjPj8oKEjR0dFe29q2bauQkBBr%2B/jx4zVt2jSFhITozDPP1PTp09WtWzfrhPj4%2BHh17dpViYmJeuyxx/TDDz9o%2BvTpSk5OtqJo4sSJyszMVFpampKTk7Vx40Y999xzeuWVV0x8DAAAoAWyJbCKioqsa1Z99tlnXo%2Bd6FeHP/f444/L399fN9xwgw4dOqSBAwdq6dKl8vPzkyT5%2Bfnprbfe0qRJk9S3b1%2B1bt1aCQkJXpdgiIqK0po1azR16lQ99dRTioiI0MKFC3X99dcbmxMAALQsDk/DGdvN4Ouvv1ZUVJTRiPIF1dXVcrlccrvdxr8ujJ2ZY3R/Tanw4aF2jwAAOIU05c/f42nWc7AuuOACVVZWWvdvvPFG7d27tzlHAAAAaHLNGli/PFi2Zs0aHTx4sDlHAAAAaHK2/BYhAABAS9asgeVwOBqdf3WqnY8FAABavmb9LUKPx6OkpCQ5nU5J0uHDhzVx4sRGl2l4/fXXm3MsAAAAo5o1sMaNG%2Bd1f%2BzYsc358gAAAM2iWQPrRK/eDgAA4As4yR0AAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwAgsAAMAwnw2sjIwM9ezZU0FBQQoNDdWoUaO0fft2rzU1NTWaPHmy2rdvr7Zt22rkyJHavXu315pdu3ZpxIgRatu2rdq3b68pU6aotrbWa01%2Bfr5iYmIUGBioTp066Zlnnmny9wcAAHyXzwZWfn6%2BUlJSVFBQoLy8PB05ckTx8fE6ePCgtSY1NVXZ2dnKysrS%2BvXrdeDAAQ0fPlz19fWSpPr6eg0bNkwHDx7U%2BvXrlZWVpVWrVmnatGnWPnbu3KlrrrlG/fr10%2BbNm3XvvfdqypQpWrVqVbO/ZwAA4BscHo/HY/cQJlRWVio0NFT5%2Bfm64oor5Ha7ddZZZ%2Bmll17SjTfeKEnas2ePIiMjtWbNGg0ZMkRvv/22hg8frtLSUkVEREiSsrKylJSUpIqKCgUHB%2Bvuu%2B/W6tWrtW3bNuu1Jk6cqE8//VQbN278XbNVV1fL5XLJ7XYrODjY6PuOnZljdH9NqfDhoXaPAAA4hTTlz9/j8dkjWL/kdrslSWeeeaYkqaioSHV1dYqPj7fWREREKDo6Whs2bJAkbdy4UdHR0VZcSdKQIUNUU1OjoqIia83P99GwprCwUHV1dcecpaamRtXV1V43AABw6mgRgeXxeJSWlqbLL79c0dHRkqTy8nIFBASoXbt2XmvDwsJUXl5urQkLC/N6vF27dgoICPjNNWFhYTpy5Ij27dt3zHkyMjLkcrmsW2RkpJH3CQAAfEOLCKzbb79dn332mV555ZXjrvV4PHI4HNb9n//7965p%2BFb1WM%2BVpBkzZsjtdlu30tLS3/U%2BAABAy%2BDzgTV58mStXr1aH3zwgTp27GhtDw8PV21traqqqrzWV1RUWEekwsPDrSNVDaqqqlRXV/ebayoqKuTv76%2BQkJBjzuR0OhUcHOx1AwAApw6fDSyPx6Pbb79dr7/%2But5//31FRUV5PR4TE6NWrVopLy/P2lZWVqaSkhL16dNHkhQXF6eSkhKVlZVZa3Jzc%2BV0OhUTE2Ot%2Bfk%2BGtbExsaqVatWTfX2AACAD/PZwEpJSdHy5cu1YsUKBQUFqby8XOXl5Tp06JAkyeVyafz48Zo2bZree%2B89bd68WWPHjlW3bt00aNAgSVJ8fLy6du2qxMREbd68We%2B9956mT5%2Bu5ORk66jTxIkT9e233yotLU3btm3T888/r%2Beee07Tp0%2B37b0DAICTm88G1qJFi%2BR2uzVgwAB16NDBuq1cudJa8/jjj2vUqFG64YYb1LdvX7Vp00Zvvvmm/Pz8JEl%2Bfn566623FBgYqL59%2B%2BqGG27QqFGjNHfuXGsfUVFRWrNmjT788ENddtllevDBB7Vw4UJdf/31zf6eAQCAb2gx18E6mXEdrJ9wHSwAQHPiOlgAAAAtCIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgGIEFAABgmL/dAwAnq9iZOXaP8IcUPjzU7hEAAP8fR7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7AAAAAMI7B%2Bp6efflpRUVEKDAxUTEyM1q1bZ/dIAADgJEVg/Q4rV65UamqqZs6cqc2bN6tfv366%2BuqrtWvXLrtHAwAAJyEC63eYP3%2B%2Bxo8fr9tuu01dunTRggULFBkZqUWLFtk9GgAAOAn52z3Aya62tlZFRUW65557vLbHx8drw4YNx3xOTU2NampqrPtut1uSVF1dbXy%2B%2BpqDxvfZVJri/TclX/psJd/6fPvPzrN7hD8k//7Bdo8A4E9o%2BO%2Bix%2BNp9tcmsI5j3759qq%2BvV1hYmNf2sLAwlZeXH/M5GRkZeuCBBxptj4yMbJIZfYVrnt0TtGx8vk2Hzxbwbfv375fL5WrW1ySwfieHw%2BF13%2BPxNNrWYMaMGUpLS7PuHz16VD/88INCQkJ%2B9Tl/RnV1tSIjI1VaWqrg4GBj%2BwWfbVPis21afL5Nh8%2B26TTVZ%2BvxeLR//35FREQY2%2BfvRWAdR/v27eXn59foaFVFRUWjo1oNnE6nnE6n17YzzjijyWYMDg7m/%2BxNhM%2B26fDZNi0%2B36bDZ9t0muKzbe4jVw04yf04AgICFBMTo7w873NG8vLy1KdPH5umAgAAJzOOYP0OaWlpSkxMVGxsrOLi4rR48WLt2rVLEydOtHs0AABwEvKbNWvWLLuHONlFR0crJCRE6enpmjt3rg4dOqSFxVGJAAAFgklEQVSXXnpJl156qd2jyc/PTwMGDJC/P61sGp9t0%2BGzbVp8vk2Hz7bptLTP1uGx43cXAQAAWjDOwQIAADCMwAIAADCMwAIAADCMwAIAADCMwPJRTz/9tKKiohQYGKiYmBitW7fO7pFahLVr12rEiBGKiIiQw%2BHQG2%2B8YfdILUZGRoZ69uypoKAghYaGatSoUdq%2BfbvdY7UIixYt0iWXXGJdpDEuLk5vv/223WO1SBkZGXI4HEpNTbV7lBZh1qxZcjgcXrfw8HC7xzKCwPJBK1euVGpqqmbOnKnNmzerX79%2Buvrqq7Vr1y67R/N5Bw8e1KWXXqrMzEy7R2lx8vPzlZKSooKCAuXl5enIkSOKj4/XwYO%2B9Ue1T0YdO3bUI488osLCQhUWFuqqq67Stddeq61bt9o9WouyadMmLV68WJdccondo7QoF198scrKyqzbli1b7B7JCC7T4IN69eqlHj16aNGiRda2Ll26aNSoUcrIyLBxspbF4XAoOztbo0aNsnuUFqmyslKhoaHKz8/XFVdcYfc4Lc6ZZ56pxx57TOPHj7d7lBbhwIED6tGjh55%2B%2Bmk99NBDuuyyy7RgwQK7x/J5s2bN0htvvKHi4mK7RzGOI1g%2Bpra2VkVFRYqPj/faHh8frw0bNtg0FfDHud1uST%2BFAMypr69XVlaWDh48qLi4OLvHaTFSUlI0bNgwDRo0yO5RWpwvvvhCERERioqK0k033aSvv/7a7pGMaBmXSz2F7Nu3T/X19Y3%2B0HRYWFijP0gNnKw8Ho/S0tJ0%2BeWXKzo62u5xWoQtW7YoLi5Ohw8f1umnn67s7Gx17drV7rFahKysLBUVFamwsNDuUVqcXr166cUXX9SFF16ovXv36qGHHlKfPn20detWhYSE2D3eCSGwfJTD4fC67/F4Gm0DTla33367PvvsM61fv97uUVqMzp07q7i4WD/%2B%2BKNWrVqlcePGKT8/n8g6QaWlpbrjjjuUm5urwMBAu8dpca6%2B%2Bmrr3926dVNcXJzOP/98LVu2TGlpaTZOduIILB/Tvn17%2Bfn5NTpaVVFR0eioFnAymjx5slavXq21a9eqY8eOdo/TYgQEBOgvf/mLJCk2NlabNm3SE088oWeffdbmyXxbUVGRKioqFBMTY22rr6/X2rVrlZmZqZqaGvn5%2Bdk4YcvStm1bdevWTV988YXdo5wwzsHyMQEBAYqJiVFeXp7X9ry8PPXp08emqYDj83g8uv322/X666/r/fffV1RUlN0jtWgej0c1NTV2j%2BHzBg4cqC1btqi4uNi6xcbGasyYMSouLiauDKupqdG2bdvUoUMHu0c5YRzB8kFpaWlKTExUbGys4uLitHjxYu3atUsTJ060ezSfd%2BDAAX355ZfW/Z07d6q4uFhnnnmmzjnnHBsn830pKSlasWKF/vvf/yooKMg6CutyudS6dWubp/Nt9957r66%2B%2BmpFRkZq//79ysrK0ocffqicnBy7R/N5QUFBjc4TbNu2rUJCQjh/0IDp06drxIgROuecc1RRUaGHHnpI1dXVGjdunN2jnTACywfdeOON%2Bv777zV79myVlZUpOjpaa9as0bnnnmv3aD6vsLBQV155pXW/4RyAcePGaenSpTZN1TI0XFZkwIABXttfeOEFJSUlNf9ALcjevXuVmJiosrIyuVwuXXLJJcrJydHgwYPtHg34Tbt379bNN9%2Bsffv26ayzzlLv3r1VUFDQIn6ecR0sAAAAwzgHCwAAwDACCwAAwDACCwAAwDACCwAAwDACCwAAwDACCwAAwDACCwAAwDACCwAAwDACCwAAwDACCwAAwDACCwAAwDACCwAAwDACCwAAwDACCwAAwDACCwAAwDACCwAAwDACCwAAwDACCwAAwLD/B7yxUth8WYKRAAAAAElFTkSuQmCC"/>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12" id="common-7644342946884638789">
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0</td>
        <td class="number">9019</td>
        <td class="number">94.2%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">1</td>
        <td class="number">533</td>
        <td class="number">5.6%</td>
        <td>
            <div class="bar" style="width:6%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">2</td>
        <td class="number">19</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">3</td>
        <td class="number">5</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">5</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">4</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12"  id="extreme-7644342946884638789">
            <p class="h4">Minimum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0</td>
        <td class="number">9019</td>
        <td class="number">94.2%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">1</td>
        <td class="number">533</td>
        <td class="number">5.6%</td>
        <td>
            <div class="bar" style="width:6%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">2</td>
        <td class="number">19</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">3</td>
        <td class="number">5</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">4</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr>
</table>
            <p class="h4">Maximum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">1</td>
        <td class="number">533</td>
        <td class="number">5.6%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">2</td>
        <td class="number">19</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:4%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">3</td>
        <td class="number">5</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">4</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">5</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
    </div>
</div>
</div><div class="row variablerow">
    <div class="col-md-3 namecol">
        <p class="h4 pp-anchor" id="pp_var_purpose">purpose<br/>
            <small>Categorical</small>
        </p>
    </div><div class="col-md-3">
    <table class="stats ">
        <tr class="">
            <th>Distinct count</th>
            <td>7</td>
        </tr>
        <tr>
            <th>Unique (%)</th>
            <td>0.1%</td>
        </tr>
        <tr class="ignore">
            <th>Missing (%)</th>
            <td>0.0%</td>
        </tr>
        <tr class="ignore">
            <th>Missing (n)</th>
            <td>0</td>
        </tr>
    </table>
</div>
<div class="col-md-6 collapse in" id="minifreqtable-8950975274796057574">
    <table class="mini freq">
        <tr class="">
    <th>debt_consolidation</th>
    <td>
        <div class="bar" style="width:100%" data-toggle="tooltip" data-placement="right" data-html="true"
             data-delay=500 title="Percentage: 41.3%">
            3957
        </div>
        
    </td>
</tr><tr class="">
    <th>all_other</th>
    <td>
        <div class="bar" style="width:59%" data-toggle="tooltip" data-placement="right" data-html="true"
             data-delay=500 title="Percentage: 24.3%">
            2331
        </div>
        
    </td>
</tr><tr class="">
    <th>credit_card</th>
    <td>
        <div class="bar" style="width:32%" data-toggle="tooltip" data-placement="right" data-html="true"
             data-delay=500 title="Percentage: 13.2%">
            1262
        </div>
        
    </td>
</tr><tr class="other">
    <th>Other values (4)</th>
    <td>
        <div class="bar" style="width:51%" data-toggle="tooltip" data-placement="right" data-html="true"
             data-delay=500 title="Percentage: 21.2%">
            2028
        </div>
        
    </td>
</tr>
    </table>
</div>
<div class="col-md-12 text-right">
    <a role="button" data-toggle="collapse" data-target="#freqtable-8950975274796057574, #minifreqtable-8950975274796057574"
       aria-expanded="true" aria-controls="collapseExample">
        Toggle details
    </a>
</div>
<div class="col-md-12 extrapadding collapse" id="freqtable-8950975274796057574">
    
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">debt_consolidation</td>
        <td class="number">3957</td>
        <td class="number">41.3%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">all_other</td>
        <td class="number">2331</td>
        <td class="number">24.3%</td>
        <td>
            <div class="bar" style="width:59%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">credit_card</td>
        <td class="number">1262</td>
        <td class="number">13.2%</td>
        <td>
            <div class="bar" style="width:32%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">home_improvement</td>
        <td class="number">629</td>
        <td class="number">6.6%</td>
        <td>
            <div class="bar" style="width:16%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">small_business</td>
        <td class="number">619</td>
        <td class="number">6.5%</td>
        <td>
            <div class="bar" style="width:16%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">major_purchase</td>
        <td class="number">437</td>
        <td class="number">4.6%</td>
        <td>
            <div class="bar" style="width:11%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">educational</td>
        <td class="number">343</td>
        <td class="number">3.6%</td>
        <td>
            <div class="bar" style="width:9%">&nbsp;</div>
        </td>
</tr>
</table>
</div>
</div><div class="row variablerow">
    <div class="col-md-3 namecol">
        <p class="h4 pp-anchor" id="pp_var_revol.bal">revol.bal<br/>
            <small>Numeric</small>
        </p>
    </div><div class="col-md-6">
    <div class="row">
        <div class="col-sm-6">
            <table class="stats ">
                <tr>
                    <th>Distinct count</th>
                    <td>7869</td>
                </tr>
                <tr>
                    <th>Unique (%)</th>
                    <td>82.2%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (n)</th>
                    <td>0</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (n)</th>
                    <td>0</td>
                </tr>
            </table>

        </div>
        <div class="col-sm-6">
            <table class="stats ">

                <tr>
                    <th>Mean</th>
                    <td>16914</td>
                </tr>
                <tr>
                    <th>Minimum</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>Maximum</th>
                    <td>1207359</td>
                </tr>
                <tr class="alert">
                    <th>Zeros (%)</th>
                    <td>3.4%</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="col-md-3 collapse in" id="minihistogram1812733338945892851">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABLCAYAAAA1fMjoAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAAaxJREFUeJzt1zGq1FAYhuE/w22T6YfJIgS3ILgguwt2li7F3tbeXcwwC0iwsHCOhY7NhQ9G5MSB52lD8iVw3iJDa61VZ%2BfzueZ57j3LgzudTnU8HrtuPnVd%2B20cx6r69cHTNG3xCjyQZVlqnuc/56anTQIZhqGqqqZpehHI6%2BfPdz/v64e3/%2BS9%2BL/dzk1Pu%2B6L8EAEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKB4GmL0dZaVVUty/Li2o/v3%2B5%2B3qt3n%2B6%2B58v7N3ffwzZu5%2BR2bnraJJB1Xauqap7nLearqmr/cbNp/tK6rrXf77tuDm2DLK/Xa10ulxrHsYZh6D3Pg2mt1bqudTgcarfr%2B1ewSSDwKPykQyAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBD8BOOVQHEmG5VEAAAAAElFTkSuQmCC">

</div>
<div class="col-md-12 text-right">
    <a role="button" data-toggle="collapse" data-target="#descriptives1812733338945892851,#minihistogram1812733338945892851"
       aria-expanded="false" aria-controls="collapseExample">
        Toggle details
    </a>
</div>
<div class="row collapse col-md-12" id="descriptives1812733338945892851">
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#quantiles1812733338945892851"
                                                  aria-controls="quantiles1812733338945892851" role="tab"
                                                  data-toggle="tab">Statistics</a></li>
        <li role="presentation"><a href="#histogram1812733338945892851" aria-controls="histogram1812733338945892851"
                                   role="tab" data-toggle="tab">Histogram</a></li>
        <li role="presentation"><a href="#common1812733338945892851" aria-controls="common1812733338945892851"
                                   role="tab" data-toggle="tab">Common Values</a></li>
        <li role="presentation"><a href="#extreme1812733338945892851" aria-controls="extreme1812733338945892851"
                                   role="tab" data-toggle="tab">Extreme Values</a></li>

    </ul>

    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active row" id="quantiles1812733338945892851">
            <div class="col-md-4 col-md-offset-1">
                <p class="h4">Quantile statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Minimum</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>5-th percentile</th>
                        <td>127.7</td>
                    </tr>
                    <tr>
                        <th>Q1</th>
                        <td>3187</td>
                    </tr>
                    <tr>
                        <th>Median</th>
                        <td>8596</td>
                    </tr>
                    <tr>
                        <th>Q3</th>
                        <td>18250</td>
                    </tr>
                    <tr>
                        <th>95-th percentile</th>
                        <td>57654</td>
                    </tr>
                    <tr>
                        <th>Maximum</th>
                        <td>1207359</td>
                    </tr>
                    <tr>
                        <th>Range</th>
                        <td>1207359</td>
                    </tr>
                    <tr>
                        <th>Interquartile range</th>
                        <td>15062</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-4 col-md-offset-2">
                <p class="h4">Descriptive statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Standard deviation</th>
                        <td>33756</td>
                    </tr>
                    <tr>
                        <th>Coef of variation</th>
                        <td>1.9958</td>
                    </tr>
                    <tr>
                        <th>Kurtosis</th>
                        <td>259.66</td>
                    </tr>
                    <tr>
                        <th>Mean</th>
                        <td>16914</td>
                    </tr>
                    <tr>
                        <th>MAD</th>
                        <td>15560</td>
                    </tr>
                    <tr class="">
                        <th>Skewness</th>
                        <td>11.161</td>
                    </tr>
                    <tr>
                        <th>Sum</th>
                        <td>162001946</td>
                    </tr>
                    <tr>
                        <th>Variance</th>
                        <td>1139500000</td>
                    </tr>
                    <tr>
                        <th>Memory size</th>
                        <td>74.9 KiB</td>
                    </tr>
                </table>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane col-md-8 col-md-offset-2" id="histogram1812733338945892851">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQCAYAAAByNR6YAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAIABJREFUeJzt3X9UVXW%2B//EX8eOIXDiZBohS4qxKDSuDbv5M%2BwXeNG/j3ClTSZrGK5O/kCw1ZxqnRnDKzFuW3rz9cFLTuuosuzkGNoV5gVTUknS0mfyBCqETHrQUUD7fP/y6bydMsD6wPfp8rHXW4uz9Pp/z3p%2BW8Oqz99knyBhjBAAAAGsucbsBAACACw0BCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsC3G7gYtBXV2dDhw4oMjISAUFBbndDgAAFwVjjI4cOaK4uDhdcknzrikRsJrBgQMHFB8f73YbAABclEpLS9W%2BfftmfU8CVjOIjIyUdOo/cFRUlMvdAABwcaiqqlJ8fLzzd7g5EbCawenTglFRUQQsAACamRuX53CROwAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAs48ueA1zy1NVut9BoG6f3d7sFAACaBStYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWBWzAOnHihH79618rISFB4eHh6tixo5588knV1dU5NcYYTZs2TXFxcQoPD1e/fv302Wef%2BY1TWVmptLQ0eb1eeb1epaWl6fDhw341W7duVd%2B%2BfRUeHq527drpySeflDGmWY4TAAAEnoANWH/4wx80b948zZkzR9u3b9fTTz%2BtZ555Ri%2B88IJT8/TTT2vWrFmaM2eONmzYoNjYWN155506cuSIUzN06FBt2bJFq1ev1urVq7VlyxalpaU5%2B6uqqnTnnXcqLi5OGzZs0AsvvKCZM2dq1qxZzXq8AAAgcIS43cAPVVhYqH/913/VgAEDJEkdOnTQm2%2B%2BqY0bN0o6tXo1e/ZsTZ06VYMHD5YkLViwQDExMVq8eLFGjRql7du3a/Xq1SoqKtLNN98sSZo/f7569OihHTt26JprrtGiRYt0/Phxvf766/J4PEpMTNTOnTs1a9YsZWVlKSgoyJ0JAAAA562AXcHq3bu33n//fe3cuVOS9Mknn2jdunW66667JEm7du1SeXm5UlJSnNd4PB717dtXBQUFkk6FNK/X64QrSerevbu8Xq9fTd%2B%2BfeXxeJya1NRUHThwQLt37z5jb9XV1aqqqvJ7AACAi0fArmBNmjRJPp9PnTp1UnBwsE6ePKnp06fr/vvvlySVl5dLkmJiYvxeFxMToz179jg10dHR9caOjo52Xl9eXq4OHTrUG%2BP0voSEhHqvz8nJ0e9%2B97sfd4AAACBgBewK1tKlS7Vw4UItXrxYmzZt0oIFCzRz5kwtWLDAr%2B67p/CMMX7bznSKr6Ga0xe4f9/pwSlTpsjn8zmP0tLSczs4AAAQ0AJ2BevRRx/V5MmTNWTIEElS165dtWfPHuXk5GjEiBGKjY2VdGqVqW3bts7rKioqnBWo2NhYffnll/XGPnjwoF/N6dWsb48h1V8dO83j8fidUgQAABeXgF3B%2Buabb3TJJf7tBwcHO7dpSEhIUGxsrPLy8pz9NTU1ys/PV8%2BePSVJPXr0kM/n0/r1652ajz/%2BWD6fz69m7dq1qqmpcWpyc3MVFxdX79QhAACAFMAB6%2B6779b06dP17rvvavfu3VqxYoVmzZqln/70p5JOnb7LzMxUdna2VqxYoZKSEqWnp6tly5YaOnSoJKlz587q37%2B/Ro4cqaKiIhUVFWnkyJEaOHCgrrnmGkmnbuPg8XiUnp6ukpISrVixQtnZ2XyCEAAAfK%2BAPUX4wgsv6De/%2BY0efvhhVVRUKC4uTqNGjdITTzzh1Dz22GM6duyYHn74YVVWVurmm29Wbm6uIiMjnZpFixZp3LhxzqcNBw0apDlz5jj7vV6v8vLyNHr0aCUnJ6tVq1bKyspSVlZW8x0sAAAIKEGGW5I3uaqqKnm9Xvl8PkVFRVkdO3nqaqvjNaWN0/u73QIA4CLSlH9/GxKwpwgBAADOVwQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsCygA9b%2B/fs1fPhwtW7dWi1bttQNN9yg4uJiZ78xRtOmTVNcXJzCw8PVr18/ffbZZ35jVFZWKi0tTV6vV16vV2lpaTp8%2BLBfzdatW9W3b1%2BFh4erXbt2evLJJ2WMaZZjBAAAgSdgA1ZlZaV69eql0NBQ/fnPf9a2bdv07LPP6tJLL3Vqnn76ac2aNUtz5szRhg0bFBsbqzvvvFNHjhxxaoYOHaotW7Zo9erVWr16tbZs2aK0tDRnf1VVle68807FxcVpw4YNeuGFFzRz5kzNmjWrWY8XAAAEjhC3G/ih/vCHPyg%2BPl6vvfaas61Dhw7Oz8YYzZ49W1OnTtXgwYMlSQsWLFBMTIwWL16sUaNGafv27Vq9erWKiop08803S5Lmz5%2BvHj16aMeOHbrmmmu0aNEiHT9%2BXK%2B//ro8Ho8SExO1c%2BdOzZo1S1lZWQoKCmrW4wYAAOe/gF3BWrlypZKTk/Xzn/9c0dHR6tatm%2BbPn%2B/s37Vrl8rLy5WSkuJs83g86tu3rwoKCiRJhYWF8nq9TriSpO7du8vr9frV9O3bVx6Px6lJTU3VgQMHtHv37jP2Vl1draqqKr8HAAC4eLgSsBYuXKjjx4//qDG%2B%2BOILzZ07V1dddZXee%2B89ZWRkaNy4cfrjH/8oSSovL5ckxcTE%2BL0uJibG2VdeXq7o6Oh6Y0dHR/vVnGmMb7/Hd%2BXk5DjXdHm9XsXHx/%2BIIwUAAIHGlYCVlZWl2NhYjRo1SuvXr/9BY9TV1enGG29Udna2unXrplGjRmnkyJGaO3euX913T%2BEZY/y2nekUX0M1py9w/77Tg1OmTJHP53MepaWl53ZwAAAgoLkSsA4cOKBXX31VZWVl6t27t6699lo9%2B%2ByzOnjwYKPHaNu2rbp06eK3rXPnztq7d68kKTY2VlL9VaaKigpnBSo2NlZffvllvbEPHjzoV3OmMaT6q2OneTweRUVF%2BT0AAMDFw5WAFRISosGDB2vlypXau3evRowYoVdffVXt27fX4MGD9e677zZ4G4RevXppx44dftt27typK6%2B8UpKUkJCg2NhY5eXlOftramqUn5%2Bvnj17SpJ69Oghn8/nt4r28ccfy%2Bfz%2BdWsXbtWNTU1Tk1ubq7i4uL8LqoHAAA4zfWL3GNjY3X77berX79%2BCgoK0saNGzV06FBdddVV%2Buijj773dRMmTFBRUZGys7P1t7/9TYsXL9bLL7%2Bs0aNHSzp1%2Bi4zM1PZ2dlasWKFSkpKlJ6erpYtW2ro0KGSTq149e/fXyNHjlRRUZGKioo0cuRIDRw4UNdcc42kU7dx8Hg8Sk9PV0lJiVasWKHs7Gw%2BQQgAAL6XawHr0KFDmj17tq6//nr16tVLFRUV%2BtOf/qQ9e/Zo//79GjhwoB544IHvff1NN92kFStW6M0331RiYqKeeuopzZ49W8OGDXNqHnvsMWVmZurhhx9WcnKy9u/fr9zcXEVGRjo1ixYtUteuXZWSkqKUlBRdd911euONN5z9Xq9XeXl52rdvn5KTk/Xwww8rKytLWVlZTTMxAAAg4AUZF25J/tOf/lSrVq1SQkKCfvnLX2rEiBG6/PLL/WoOHDig9u3bq66urrnbs66qqkper1c%2Bn8/69VjJU1dbHa8pbZze3%2B0WAAAXkab8%2B9sQV240GhUVpTVr1qhPnz7fW9O2bVt9/vnnzdgVAACAHa4ErAULFjRYExQUpJ/85CfN0A0AAIBdrlyDNWHCBM2ZM6fe9hdffFGPPPKICx0BAADY40rAevvtt9W9e/d623v06KGlS5e60BEAAIA9rgSsQ4cOqVWrVvW2R0VF6dChQy50BAAAYI8rAesnP/mJ3nvvvXrb33vvPSUkJLjQEQAAgD2uXOSemZmpzMxM/eMf/9Btt90mSXr//ff19NNPa%2BbMmW60BAAAYI0rAWvkyJE6fvy4srOz9dvf/laS1L59ez3//PP6xS9%2B4UZLAAAA1rgSsCRp7NixGjt2rMrKyhQeHq5LL73UrVYAAACsci1gnda2bVu3WwAAALDKlYvcDx48qAcffFBXXHGFWrRoobCwML8HAABAIHNlBSs9PV1///vf9eijj6pt27YKCgpyow0AAIAm4UrAWrt2rdauXatu3bq58fYAAABNypVThO3bt2fVCgAAXLBcCVjPPfecpkyZon379rnx9gAAAE3KlVOEaWlpOnLkiK688kpFRUUpNDTUb39FRYUbbQEAAFjhSsCaMWOGG28LAADQLFwJWA899JAbbwsAANAsXLkGS5J2796tadOmKS0tzTklmJubq%2B3bt7vVEgAAgBWuBKyPPvpI1157rfLz8/XWW2/p6NGjkqRNmzbpiSeecKMlAAAAa1wJWJMmTdK0adP0wQcf%2BN25/bbbblNRUZEbLQEAAFjjSsD69NNP9W//9m/1tkdHR%2BvgwYMudAQAAGCPKwHr0ksvVXl5eb3tW7ZsUbt27VzoCAAAwB5XAtaQIUM0efJkHTx40Lmj%2B8cff6yJEydq%2BPDhbrQEAABgjSsBKzs7W7GxsWrbtq2OHj2qLl26qGfPnrrpppv0m9/8xo2WAAAArHHlPlhhYWFaunSpdu7cqU2bNqmurk433nijOnXq5EY7AAAAVrkSsE67%2BuqrdfXVV7vZAgAAgHWuBKx///d/P%2Bv%2Bl19%2BuZk6AQAAsM%2BVgFVWVub3vLa2Vp999pmOHDmiW265xY2WAAAArHElYL3zzjv1tp04cUK/%2BtWv1LlzZxc6AgAAsMe17yL8rpCQEE2cOFHPPPOM260AAAD8KOdNwJKkL774QrW1tW63AQAA8KO4corwscce83tujFFZWZlWrlypYcOGudESAACANa4ErMLCQr/nl1xyiS6//HLNmDFDI0eOdKMlAAAAa1wJWB999JEbbwsAANAszqtrsAAAAC4Erqxg3XTTTc6XPDdk/fr1TdwNAACAXa4ErFtvvVX/%2BZ//qauvvlo9evSQJBUVFWnHjh0aNWqUPB6PG20BAABY4UrAOnz4sEaPHq3s7Gy/7VOnTtWXX36p//qv/3KjLQAAACtcuQbrrbfe0oMPPlhve3p6ut5%2B%2B20XOgIAALDHlYDl8XhUUFBQb3tBQQGnBwEAQMBz5RThuHHjlJGRoc2bN6t79%2B6STl2DNX/%2BfD3%2B%2BONutAQAAGCNKwFr6tSpSkhI0H/8x3/o1VdflSR17txZ8%2BfP19ChQ91oCQAAwBpXApYkDR06lDAFAAAuSK7daLSqqkqvv/66nnjiCVVWVkqSPvnkE5WVlbnVEgAAgBWurGCVlJTojjvuUMuWLVVaWqr09HS1atVKb731lvbt26cFCxa40RYAAIAVrqxgTZgwQUOHDtXf//53tWjRwtk%2BYMAArV271o2WAAAArHFlBWvDhg2aO3duva/LadeuHacIAQBAwHNlBSssLExHjx6tt/3zzz9XmzZtXOgIAADAHlcC1qBBg/TUU0/pxIkTkqSgoCDt379fkydP1uDBg91oCQAAwBpXAtazzz6rAwcOKDY2VseOHdNtt92mjh07qkWLFvW%2BnxAAACDQuHINltfrVUFBgfLy8rRp0ybV1dXpxhtvVGpqar3rsgAAAAJNswes2tpa3XXXXXrppZeUkpKilJSU5m4BAACgSTX7KcLQ0FBt3rzZ%2BkpVTk6OgoKClJmZ6Wyrrq7W2LFj1aZNG0VERGjQoEHat2%2Bf3%2Bv27t2ru%2B%2B%2BWxEREWrTpo3GjRunmpoav5r8/HwlJSWpRYsW6tixo%2BbNm2e1dwAAcGFx5Rqs4cOH67XXXrM23oYNG/Tyyy/ruuuu89uemZmpFStWaMmSJVq3bp2OHj2qgQMH6uTJk5KkkydPasCAAfr666%2B1bt06LVmyRMuWLdMjjzzijLFr1y7ddddd6tOnjzZv3qzHH39c48aN07Jly6z1DwAALiyufRfhnDlztGbNGiUnJysiIsJv39NPP93ocY4ePaphw4Zp/vz5%2Bv3vf%2B9s9/l8euWVV/TGG2/ojjvukCQtXLhQ8fHxWrNmjVJTU5Wbm6tt27aptLRUcXFxkk5dgJ%2Benq7p06crKipK8%2BbN0xVXXKHZs2dLOvWl1Bs3btTMmTP1s5/97MdOAwAAuAC5soJVXFys6667TmFhYfr0009VWFjoPIqKis5prNGjR2vAgAFOiPr2e9TW1vpd4xUXF6fExEQVFBRIkgoLC5WYmOiEK0lKTU1VdXW1iouLnZrvXieWmpqqjRs3qra29px6BQAAF4dmXcH64osvlJCQoI8%2B%2BsjKeEuWLFFxcbE2btxYb195ebnCwsLUqlUrv%2B0xMTEqLy93amJiYvz2t2rVSmFhYWetiYmJ0YkTJ3To0CG1bdu23ntXV1erurraeV5VVfXDDhAAAASkZl3Buuqqq3Tw4EHn%2BX333acvv/zyB41VWlqq8ePHa9GiRX7fZ9gQY4zfBfZnuti%2BoRpjzPe%2BVjp1wb3X63Ue8fHxje4PAAAEvmYNWKeDyWmrVq3S119//YPGKi4uVkVFhZKSkhQSEqKQkBDl5%2Bfr%2BeefV0hIiGJiYlRTU6PKykq/11VUVDgrUrGxsc5K1WmVlZWqra09a01FRYVCQkLUunXrM/Y2ZcoU%2BXw%2B51FaWvqDjhEAAAQmV67BsuH222/X1q1btWXLFueRnJysYcOGOT%2BHhoYqLy/PeU1ZWZlKSkrUs2dPSVKPHj1UUlLi9wXTubm58ng8SkpKcmq%2BPcbpmtPjn4nH41FUVJTfAwAAXDya9RqsoKCgeqfVfuj9sCIjI5WYmOi3LSIiQq1bt3a2P/TQQ3rkkUfUunVrXXbZZZo4caK6du3qXBCfkpKiLl26KC0tTc8884y%2B%2BuorTZw4USNHjnRCUUZGhubMmaOsrCyNHDlShYWFeuWVV/Tmm2/%2BoL4BAMCFr1kDljFG6enp8ng8kqTjx48rIyOj3m0ali9fbuX9nnvuOYWEhOjee%2B/VsWPHdPvtt%2Bv1119XcHCwJCk4OFjvvvuuHn74YfXq1Uvh4eEaOnSoZs6c6YyRkJCgVatWacKECXrxxRcVFxen559/nls0AACA7xVkvnthVBN68MEHG1Vn8yak54Oqqip5vV75fD7rpwuTp662Ol5T2ji9v9stAAAuIk3597chzbqCdaEFJwAAgDMJ2IvcAQAAzlcELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFgWsAErJydHN910kyIjIxUdHa177rlHO3bs8Kuprq7W2LFj1aZNG0VERGjQoEHat2%2BfX83evXt19913KyIiQm3atNG4ceNUU1PjV5Ofn6%2BkpCS1aNFCHTt21Lx585r8%2BAAAQOAK2ICVn5%2Bv0aNHq6ioSHl5eTpx4oRSUlL09ddfOzWZmZlasWKFlixZonXr1uno0aMaOHCgTp48KUk6efKkBgwYoK%2B//lrr1q3TkiVLtGzZMj3yyCPOGLt27dJdd92lPn36aPPmzXr88cc1btw4LVu2rNmPGQAABIYgY4xxuwkbDh48qOjoaOXn5%2BuWW26Rz%2BfT5ZdfrjfeeEP33XefJOnAgQOKj4/XqlWrlJqaqj//%2Bc8aOHCgSktLFRcXJ0lasmSJ0tPTVVFRoaioKE2aNEkrV67U9u3bnffKyMjQJ598osLCwkb1VlVVJa/XK5/Pp6ioKKvHnTx1tdXxmtLG6f3dbgEAcBFpyr%2B/DQnYFazv8vl8kqTLLrtMklRcXKza2lqlpKQ4NXFxcUpMTFRBQYEkqbCwUImJiU64kqTU1FRVV1eruLjYqfn2GKdrNm7cqNra2jP2Ul1draqqKr8HAAC4eFwQAcsYo6ysLPXu3VuJiYmSpPLycoWFhalVq1Z%2BtTExMSovL3dqYmJi/Pa3atVKYWFhZ62JiYnRiRMndOjQoTP2k5OTI6/X6zzi4%2BOtHCcAAAgMF0TAGjNmjD799FO9%2BeabDdYaYxQUFOQ8//bPja05fVb1TK%2BVpClTpsjn8zmP0tLSRh0HAAC4MAR8wBo7dqxWrlypDz74QO3bt3e2x8bGqqamRpWVlX71FRUVzopUbGyss1J1WmVlpWpra89aU1FRoZCQELVu3fqMPXk8HkVFRfk9AADAxSNgA5YxRmPGjNHy5cv1l7/8RQkJCX77k5KSFBoaqry8PGdbWVmZSkpK1LNnT0lSjx49VFJSorKyMqcmNzdXHo9HSUlJTs23xzhdk5ycrNDQ0KY6PAAAEMACNmCNHj1aCxcu1OLFixUZGany8nKVl5fr2LFjkiSv16uHHnpIjzzyiN5//31t3rxZw4cPV9euXXXHHXdIklJSUtSlSxelpaVp8%2BbNev/99zVx4kSNHDnSWXXKyMjQnj17lJWVpe3bt%2BvVV1/VK6%2B8ookTJ7p27AAA4PwWsAFr7ty58vl86tevn9q2bes8li5d6tQ899xzuueee3TvvfeqV69eatmypd555x0FBwdLkoKDg/Xuu%2B%2BqRYsW6tWrl%2B69917dc889mjlzpjNGQkKCVq1apQ8//FA33HCDnnrqKT3//PP62c9%2B1uzHDAAAAsMFcx%2Bs8xn3wTqF%2B2ABAJoT98ECAAC4gBCwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwDICFgAAgGUELAAAAMsIWAAAAJYRsAAAACwjYAEAAFhGwAIAALCMgAUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwLIQtxsIFC%2B99JKeeeYZlZWV6dprr9Xs2bPVp08ft9sKKMlTV7vdwjnZOL2/2y0AAAIUK1iNsHTpUmVmZmrq1KnavHmz%2BvTpo3/5l3/R3r173W4NAACchwhYjTBr1iw99NBD%2BuUvf6nOnTtr9uzZio%2BP19y5c91uDQAAnIc4RdiAmpoaFRcXa/LkyX7bU1JSVFBQcMbXVFdXq7q62nnu8/kkSVVVVdb7O1n9tfUxcUq3icvcbuGc5D9xp9stAMB55fTfXWNMs783AasBhw4d0smTJxUTE%2BO3PSYmRuXl5Wd8TU5Ojn73u9/V2x4fH98kPQKS5H3W7Q4A4Px05MgReb3eZn1PAlYjBQUF%2BT03xtTbdtqUKVOUlZXlPK%2Brq9NXX32l1q1bf%2B9rfoiqqirFx8ertLRUUVFR1sa9UDA/Z8f8NIw5Ojvm5%2ByYn4Y19RwZY3TkyBHFxcVZH7shBKwGtGnTRsHBwfVWqyoqKuqtap3m8Xjk8Xj8tl166aVN1mNUVBT/eM%2BC%2BTk75qdhzNHZMT9nx/w0rCnnqLlXrk7jIvcGhIWFKSkpSXl5eX7b8/Ly1LNnT5e6AgAA5zNWsBohKytLaWlpSk5OVo8ePfTyyy9r7969ysh1DQkZAAAL7klEQVTIcLs1AABwHgqeNm3aNLebON8lJiaqdevWys7O1syZM3Xs2DG98cYbuv76691uTcHBwerXr59CQsjKZ8L8nB3z0zDm6OyYn7Njfhp2oc5RkHHjs4sAAAAXMK7BAgAAsIyABQAAYBkBCwAAwDICFgAAgGUErAD10ksvKSEhQS1atFBSUpI%2B%2Bugjt1s6Zzk5ObrpppsUGRmp6Oho3XPPPdqxY4dfTXV1tcaOHas2bdooIiJCgwYN0r59%2B/xq9u7dq7vvvlsRERFq06aNxo0bp5qaGr%2Ba/Px8JSUlqUWLFurYsaPmzZtXr5%2BG5rQxvTSlnJwcBQUFKTMz85x6upDnZ//%2B/Ro%2BfLhat26tli1b6oYbblBxcbGz3xijadOmKS4uTuHh4erXr58%2B%2B%2BwzvzEqKyuVlpYmr9crr9ertLQ0HT582K9m69at6tu3r8LDw9WuXTs9%2BeST9b7bbNmyZerSpYs8Ho%2B6dOmiFStW%2BO1vTC%2B2nThxQr/%2B9a%2BVkJCg8PBwdezYUU8%2B%2BaTq6urOqa8LZY7Wrl2ru%2B%2B%2BW3FxcQoKCtKf/vSnc37/82kuGtOLrfmpra3VpEmT1LVrV0VERCguLk4PPPCADhw4cNHMzzkzCDhLliwxoaGhZv78%2BWbbtm1m/PjxJiIiwuzZs8ft1s5Jamqqee2110xJSYnZsmWLGTBggLniiivM0aNHnZqMjAzTrl07k5eXZzZt2mRuvfVWc/3115sTJ04YY4w5ceKESUxMNLfeeqvZtGmTycvLM3FxcWbMmDHOGF988YVp2bKlGT9%2BvNm2bZuZP3%2B%2BCQ0NNf/93//t1DRmThvqpSmtX7/edOjQwVx33XVm/PjxzI8x5quvvjJXXnmlSU9PNx9//LHZtWuXWbNmjfnb3/7m1MyYMcNERkaaZcuWma1bt5r77rvPtG3b1lRVVTk1/fv3N4mJiaagoMAUFBSYxMREM3DgQGe/z%2BczMTExZsiQIWbr1q1m2bJlJjIy0sycOdOpKSgoMMHBwSY7O9ts377dZGdnm5CQEFNUVHROvdj2%2B9//3rRu3dr8z//8j9m1a5d5%2B%2B23zT/90z%2BZ2bNnX5RztGrVKjN16lSzbNkyI8msWLHCb3%2BgzUVDvdicn8OHD5s77rjDLF261Pz1r381hYWF5uabbzZJSUl%2BY1zI83OuCFgB6J//%2BZ9NRkaG37ZOnTqZyZMnu9SRHRUVFUaSyc/PN8ac%2BgcdGhpqlixZ4tTs37/fXHLJJWb16tXGmFO/EC655BKzf/9%2Bp%2BbNN980Ho/H%2BHw%2BY4wxjz32mOnUqZPfe40aNcp0797ded7QnDaml6Zy5MgRc9VVV5m8vDzTt29fJ2Bd7PMzadIk07t37%2B/dX1dXZ2JjY82MGTOcbcePHzder9fMmzfPGGPMtm3bjCS/X9yFhYVGkvnrX/9qjDHmpZdeMl6v1xw/ftypycnJMXFxcaaurs4YY8y9995r%2Bvfv7/f%2BqampZsiQIY3upSkMGDDA/OIXv/DbNnjwYDN8%2BPBG93WhztF3A0SgzUVjevkxzhRAv2v9%2BvVGkvM/WhfT/DQGpwgDTE1NjYqLi5WSkuK3PSUlRQUFBS51ZYfP55MkXXbZZZKk4uJi1dbW%2Bh1rXFycEhMTnWMtLCxUYmKi3xd5pqamqrq62jlVVFhYWG%2B%2BUlNTtXHjRtXW1jZqThvTS1MZPXq0BgwYoDvuuMNv%2B8U%2BPytXrlRycrJ%2B/vOfKzo6Wt26ddP8%2BfOd/bt27VJ5eblfTx6PR3379vWbH6/Xq5tvvtmp6d69u7xer19N3759/b5fNDU1VQcOHNDu3budmjPN4ekxGtNLU%2Bjdu7fef/997dy5U5L0ySefaN26dbrrrrsa3deFPkenBdpcNKaXpubz%2BRQUFOR81y7z44%2BAFWAOHTqkkydP1vui6ZiYmHpfSB1IjDHKyspS7969lZiYKEkqLy9XWFiYWrVq5Vf77WMtLy%2BvNxetWrVSWFjYWWtiYmJ04sQJHTp0qFFz2phemsKSJUtUXFysnJycevsu9vn54osvNHfuXF111VV67733lJGRoXHjxumPf/yj09PpHs7Wd3R0dL2xo6OjG5yfb7/H99V8e39DvTSFSZMm6f7771enTp0UGhqqbt26KTMzU/fff3%2Bj%2B7rQ5%2Bi0QJuLxvTSlI4fP67Jkydr6NChzpc0Mz/%2BLqz70l9EgoKC/J4bY%2BptCyRjxozRp59%2BqnXr1jVY%2B91jPdNxN1Rj/v8FlUFBQX4/n22MxvRiU2lpqcaPH6/c3Fy1aNGi0a%2B7WOanrq5OycnJys7OliR169ZNn332mebOnasHHnjAqWuo7x87P419n8bW2LR06VItXLhQixcv1rXXXqstW7YoMzNTcXFxGjFiRKP7upDn6LsCaS4a00tTqK2t1ZAhQ1RXV6eXXnrJbx/z839YwQowbdq0UXBwcL0EXlFRUS/NB4qxY8dq5cqV%2BuCDD9S%2BfXtne2xsrGpqalRZWelX/%2B1jjY2NrTcXlZWVqq2tPWtNRUWFQkJC1Lp160bNaWN6sa24uFgVFRVKSkpSSEiIQkJClJ%2Bfr%2Beff14hISGKiYm5qOenbdu26tKli9%2B2zp07a%2B/evU5Pkhrs%2B8svv6w39sGDBxucH0kN1nx7f0O9NIVHH31UkydP1pAhQ9S1a1elpaVpwoQJzoooc/R/Am0uGtNLU6itrdW9996rXbt2KS8vz1m9amxPF/r8fBsBK8CEhYUpKSlJeXl5ftvz8vLUs2dPl7r6YYwxGjNmjJYvX66//OUvSkhI8NuflJSk0NBQv2MtKytTSUmJc6w9evRQSUmJysrKnJrc3Fx5PB4lJSU5Nd%2Bdr9zcXCUnJys0NLRRc9qYXmy7/fbbtXXrVm3ZssV5JCcna9iwYc7PF/P89OrVq95tPXbu3Kkrr7xSkpSQkKDY2Fi/nmpqapSfn%2B83Pz6fT%2BvXr3dqPv74Y/l8Pr%2BatWvX%2Bt3aIjc3V3FxcerQoYNTc6Y5PD1GY3ppCt98840uucT/13xwcLBzmwbm6P8E2lw0phfbToerzz//XGvWrFHr1q399l/s81NP015Dj6Zw%2BiPzr7zyitm2bZvJzMw0ERERZvfu3W63dk5%2B9atfGa/Xaz788ENTVlbmPL755hunJiMjw7Rv396sWbPGbNq0ydx2221nvA3B7bffbjZt2mTWrFlj2rdvf8bbEEyYMMFs27bNvPLKK997G4KzzWlDvTSHb3%2BKsDE9Xcjzs379ehMSEmKmT59uPv/8c7No0SLTsmVLs3DhQqdmxowZxuv1muXLl5utW7ea%2B%2B%2B//4wf5b7uuutMYWGhKSwsNF27dvX7KPfhw4dNTEyMuf/%2B%2B83WrVvN8uXLTVRUlN/Hyv/3f//XBAcHmxkzZpjt27ebGTNmnPFj5Q31YtuIESNMu3btnNs0LF%2B%2B3LRp08Y89thjF%2BUcHTlyxGzevNls3rzZSDKzZs0ymzdvdj4FF2hz0VAvNuentrbWDBo0yLRv395s2bLF73d2dXX1RTE/54qAFaBefPFFc%2BWVV5qwsDBz4403Orc2CCSSzvh47bXXnJpjx46ZMWPGmMsuu8yEh4ebgQMHmr179/qNs2fPHjNgwAATHh5uLrvsMjNmzBi/jwAbY8yHH35ounXrZsLCwkyHDh3M3Llz6/XT0Jw2ppem9t2AdbHPzzvvvGMSExONx%2BMxnTp1Mi%2B//LLf/rq6OvPb3/7WxMbGGo/HY2655RazdetWv5p//OMfZtiwYSYyMtJERkaaYcOGmcrKSr%2BaTz/91PTp08d4PB4TGxtrpk2b5nyk/LS3337bXHPNNSY0NNR06tTJLFu27Jx7sa2qqsqMHz/eXHHFFaZFixamY8eOZurUqX5/EC%2BmOfrggw/O%2BDtnxIgRATkXjenF1vzs2rXre39nf/DBBxfF/JyrIGO%2Bc/tUAAAA/ChcgwUAAGAZAQsAAMAyAhYAAIBlBCwAAADLCFgAAACWEbAAAAAsI2ABAABYRsACAACwjIAFAABgGQELAADAMgIWAACAZQQsAAAAywhYAAAAlhGwAAAALCNgAQAAWEbAAgAAsIyABQAAYBkBCwAAwLL/B02KUHEY34vaAAAAAElFTkSuQmCC"/>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12" id="common1812733338945892851">
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0</td>
        <td class="number">321</td>
        <td class="number">3.4%</td>
        <td>
            <div class="bar" style="width:4%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">255</td>
        <td class="number">10</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">298</td>
        <td class="number">10</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">682</td>
        <td class="number">9</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">346</td>
        <td class="number">8</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">182</td>
        <td class="number">6</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">1085</td>
        <td class="number">6</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">2229</td>
        <td class="number">6</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">8035</td>
        <td class="number">5</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">6</td>
        <td class="number">5</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="other">
        <td class="fillremaining">Other values (7859)</td>
        <td class="number">9192</td>
        <td class="number">96.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12"  id="extreme1812733338945892851">
            <p class="h4">Minimum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0</td>
        <td class="number">321</td>
        <td class="number">3.4%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">1</td>
        <td class="number">5</td>
        <td class="number">0.1%</td>
        <td>
            <div class="bar" style="width:2%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">2</td>
        <td class="number">2</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">3</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">4</td>
        <td class="number">2</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr>
</table>
            <p class="h4">Maximum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">407794</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">508961</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">602519</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">952013</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">1207359</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
    </div>
</div>
</div><div class="row variablerow">
    <div class="col-md-3 namecol">
        <p class="h4 pp-anchor" id="pp_var_revol.util">revol.util<br/>
            <small>Numeric</small>
        </p>
    </div><div class="col-md-6">
    <div class="row">
        <div class="col-sm-6">
            <table class="stats ">
                <tr>
                    <th>Distinct count</th>
                    <td>1035</td>
                </tr>
                <tr>
                    <th>Unique (%)</th>
                    <td>10.8%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Missing (n)</th>
                    <td>0</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (%)</th>
                    <td>0.0%</td>
                </tr>
                <tr class="ignore">
                    <th>Infinite (n)</th>
                    <td>0</td>
                </tr>
            </table>

        </div>
        <div class="col-sm-6">
            <table class="stats ">

                <tr>
                    <th>Mean</th>
                    <td>46.799</td>
                </tr>
                <tr>
                    <th>Minimum</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>Maximum</th>
                    <td>119</td>
                </tr>
                <tr class="alert">
                    <th>Zeros (%)</th>
                    <td>3.1%</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="col-md-3 collapse in" id="minihistogram1270815397947225451">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABLCAYAAAA1fMjoAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAAcxJREFUeJzt2z%2BO00AYh%2BHPEa2TPopvwSG4EzUl9%2BEQ3CJRDmCLgoKYAnabRT%2BykB2vN8/TRppxlHk1/hN38zzP1djpdKphGFpPy8odj8c6HA5N53zXdLbf%2Br6vql9feLvdLnEIrMg4jjUMw%2BO6aWmRQLquq6qq7Xb7JJD3H788e7yvnz7c5Lh43R7WTUub5jPCiggEAoFAIBAIBAKBQCAQCASLPAe5F57prN/dBvIvi5f74xQLAoFAIBAI7vYa5LVqcW3kRsD17CAQvIkdxB0pXoodBAKBQPAmTrF4Hk/4r2cHgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCARemOIq9/qSlR0EAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAsMhfTeZ5rqqqcRyffPbj%2B7fWh8ML%2BdPv%2Bz/jPKyblhYJZJqmqqoahmGJ6Wlk9/m2403TVLvd7raD/kU3L5Dl5XKp8/lcfd9X13Wtp2dl5nmuaZpqv9/XZtP2qmCRQGAtXKRDIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEPwEGapPS12a0hcAAAAASUVORK5CYII%3D">

</div>
<div class="col-md-12 text-right">
    <a role="button" data-toggle="collapse" data-target="#descriptives1270815397947225451,#minihistogram1270815397947225451"
       aria-expanded="false" aria-controls="collapseExample">
        Toggle details
    </a>
</div>
<div class="row collapse col-md-12" id="descriptives1270815397947225451">
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#quantiles1270815397947225451"
                                                  aria-controls="quantiles1270815397947225451" role="tab"
                                                  data-toggle="tab">Statistics</a></li>
        <li role="presentation"><a href="#histogram1270815397947225451" aria-controls="histogram1270815397947225451"
                                   role="tab" data-toggle="tab">Histogram</a></li>
        <li role="presentation"><a href="#common1270815397947225451" aria-controls="common1270815397947225451"
                                   role="tab" data-toggle="tab">Common Values</a></li>
        <li role="presentation"><a href="#extreme1270815397947225451" aria-controls="extreme1270815397947225451"
                                   role="tab" data-toggle="tab">Extreme Values</a></li>

    </ul>

    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active row" id="quantiles1270815397947225451">
            <div class="col-md-4 col-md-offset-1">
                <p class="h4">Quantile statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Minimum</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>5-th percentile</th>
                        <td>1.1</td>
                    </tr>
                    <tr>
                        <th>Q1</th>
                        <td>22.6</td>
                    </tr>
                    <tr>
                        <th>Median</th>
                        <td>46.3</td>
                    </tr>
                    <tr>
                        <th>Q3</th>
                        <td>70.9</td>
                    </tr>
                    <tr>
                        <th>95-th percentile</th>
                        <td>94</td>
                    </tr>
                    <tr>
                        <th>Maximum</th>
                        <td>119</td>
                    </tr>
                    <tr>
                        <th>Range</th>
                        <td>119</td>
                    </tr>
                    <tr>
                        <th>Interquartile range</th>
                        <td>48.3</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-4 col-md-offset-2">
                <p class="h4">Descriptive statistics</p>
                <table class="stats indent">
                    <tr>
                        <th>Standard deviation</th>
                        <td>29.014</td>
                    </tr>
                    <tr>
                        <th>Coef of variation</th>
                        <td>0.61998</td>
                    </tr>
                    <tr>
                        <th>Kurtosis</th>
                        <td>-1.1165</td>
                    </tr>
                    <tr>
                        <th>Mean</th>
                        <td>46.799</td>
                    </tr>
                    <tr>
                        <th>MAD</th>
                        <td>24.835</td>
                    </tr>
                    <tr class="">
                        <th>Skewness</th>
                        <td>0.059985</td>
                    </tr>
                    <tr>
                        <th>Sum</th>
                        <td>448240</td>
                    </tr>
                    <tr>
                        <th>Variance</th>
                        <td>841.84</td>
                    </tr>
                    <tr>
                        <th>Memory size</th>
                        <td>74.9 KiB</td>
                    </tr>
                </table>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane col-md-8 col-md-offset-2" id="histogram1270815397947225451">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQCAYAAAByNR6YAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPYQAAD2EBqD%2BnaQAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDMuMC4wLCBodHRwOi8vbWF0cGxvdGxpYi5vcmcvqOYd8AAAIABJREFUeJzt3XtwFGW%2B//HPSGAIHDLcTIYB1LiFiAQRiUIAF1QIIIHjoVxWAwOsLuJyMwbkIquLniJRLpGVKAq7CiVwwK0FD7tqJCgnQJFwCYwCcoCzIvcQXMOEaxJI//6g6J9DUHB9kmaS96uqq9JPP9397ccK%2Bfh0T4/LsixLAAAAMOYmpwsAAACobghYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAQsAAMAwAhYAAIBhBCwAAADDCFgAAACGEbAAAAAMI2ABAAAYRsACAAAwjIAFAABgGAELAADAMAIWAACAYQQsAAAAwwhYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABhGwAIAADCMgAUAAGBYhNMF1ATl5eU6evSoGjRoIJfL5XQ5AADUCJZl6dSpU/L5fLrppqqdUyJgVYGjR4%2BqZcuWTpcBAECNdOjQIbVo0aJKz0nAqgINGjSQdOk/cFRUlMPVAABQMxQXF6tly5b23%2BGqRMCqApdvC0ZFRRGwAACoYk48nsND7gAAAIYRsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAQsAAMAwAhYAAIBhBCwAAADDCFgAAACGEbAAAAAMI2ABAAAYRsACAAAwjC97DnPxU7OcLuG6bZ3ex%2BkSAACoEsxgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAQsAAMCwsA5Y69atU//%2B/eXz%2BeRyufThhx/%2BYN%2BRI0fK5XJpzpw5Ie1FRUXy%2B/3yeDzyeDzy%2B/06efJkSJ8dO3aoe/fuioyMVPPmzfXKK6/IsqxKuSYAABD%2BwjpgnTlzRu3bt1dmZuaP9vvwww%2B1adMm%2BXy%2BCtuSk5MVCASUlZWlrKwsBQIB%2Bf1%2Be3txcbF69eoln8%2BnLVu2aO7cuZo1a5YyMjKMXw8AAKgeIpwu4Ofo27ev%2Bvbt%2B6N9jhw5ojFjxujTTz9Vv379Qrbt3r1bWVlZysvLU6dOnSRJCxYsUEJCgvbs2aPWrVtryZIlOn/%2BvBYuXCi32624uDjt3btXGRkZSk1NlcvlqrTrAwAA4SmsZ7Cupby8XH6/X88//7zatm1bYXtubq48Ho8driSpc%2BfO8ng82rhxo92ne/fucrvddp/evXvr6NGj%2Buabb6563pKSEhUXF4csAACg5qjWAeu1115TRESExo0bd9XtBQUFio6OrtAeHR2tgoICu09MTEzI9svrl/tcKT093X6my%2BPxqGXLlj/nMgAAQJiptgErPz9ff/zjH7Vw4cIfvY13tW2WZYW0X9nn8gPuP3TcKVOmKBgM2suhQ4f%2BlUsAAABhqtoGrPXr16uwsFC33HKLIiIiFBERoQMHDmj8%2BPG67bbbJEler1fHjx%2BvsO%2BJEyfsWSqv11thpqqwsFCSKsxsXeZ2uxUVFRWyAACAmqPaBiy/368vv/xSgUDAXnw%2Bn55//nl9%2BumnkqSEhAQFg0Ft3rzZ3m/Tpk0KBoPq0qWL3WfdunUqLS21%2B6xevVo%2Bn88OagAAAN8X1p8iPH36tP7v//7PXt%2B/f78CgYAaN26sW265RU2aNAnpX7t2bXm9XrVu3VqS1KZNG/Xp00cjRozQO%2B%2B8I0l6%2BumnlZSUZPdJTk7Wyy%2B/rOHDh%2BuFF17Qvn37lJaWppdeeolPEAIAgKsK6xmsrVu3qkOHDurQoYMkKTU1VR06dNBLL7103cdYsmSJ2rVrp8TERCUmJuruu%2B/W%2B%2B%2B/b2/3eDzKzs7W4cOHFR8fr1GjRik1NVWpqanGrwcAAFQPLotXkle64uJieTweBYNB489jxU/NMnq8yrR1eh%2BnSwAA1CCV%2Bff3WsJ6BgsAAOBGRMACAAAwjIAFAABgGAELAADAMAIWAACAYQQsAAAAwwhYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAQsAAMAwAhYAAIBhBCwAAADDCFgAAACGEbAAAAAMI2ABAAAYRsACAAAwjIAFAABgGAELAADAMAIWAACAYRFOFwCg5omfmuV0CT/J1ul9nC4BQJgJ6xmsdevWqX///vL5fHK5XPrwww/tbWVlZZo0aZLatWun%2BvXry%2BfzaejQoTp69GjIMYqKiuT3%2B%2BXxeOTxeOT3%2B3Xy5MmQPjt27FD37t0VGRmp5s2b65VXXpFlWVVyjQAAIPyEdcA6c%2BaM2rdvr8zMzArbzp49q23btunFF1/Utm3btGLFCu3du1cDBgwI6ZecnKxAIKCsrCxlZWUpEAjI7/fb24uLi9WrVy/5fD5t2bJFc%2BfO1axZs5SRkVHp1wcAAMJTWN8i7Nu3r/r27XvVbR6PR9nZ2SFtc%2BfO1f3336%2BDBw/qlltu0e7du5WVlaW8vDx16tRJkrRgwQIlJCRoz549at26tZYsWaLz589r4cKFcrvdiouL0969e5WRkaHU1FS5XK5Kv04AABBewjpg/VTBYFAul0sNGzaUJOXm5srj8djhSpI6d%2B4sj8ejjRs3qnXr1srNzVX37t3ldrvtPr1799aUKVP0zTffKDY2tsJ5SkpKVFJSYq8XFxdX4lUBl4Tbc00AUJ2F9S3Cn%2BL8%2BfOaPHmykpOTFRUVJUkqKChQdHR0hb7R0dEqKCiw%2B8TExIRsv7x%2Buc%2BV0tPT7We6PB6PWrZsafJSAADADa5GzGCVlZXp8ccfV3l5ud56662QbVe7xWdZVkj7lX0uP%2BD%2BQ7cHp0yZotTUVHu9uLiYkBWGmBECAPyrqn3AKisr06BBg7R//359/vnn9uyVJHm9Xh0/frzCPidOnLBnqbxeb4WZqsLCQkmqMLN1mdvtDrmlCAAAapZqfYvwcrjat2%2Bf1qxZoyZNmoRsT0hIUDAY1ObNm%2B22TZs2KRgMqkuXLnafdevWqbS01O6zevVq%2BXw%2B3XbbbVVyHQAAILyEdcA6ffq0AoGAAoGAJGn//v0KBAI6ePCgLly4oMcee0xbt27VkiVLdPHiRRUUFKigoMAOS23atFGfPn00YsQI5eXlKS8vTyNGjFBSUpJat24t6dJrHNxut4YPH66dO3dq5cqVSktL4xOEAADgB4X1LcKtW7fqwQcftNcvP/c0bNgwTZs2TatWrZIk3XPPPSH7rV27Vj169JAkLVmyROPGjVNiYqIkacCAASHv1br8uofRo0crPj5ejRo1UmpqasgzVgAAAN8X1gGrR48eP/pG9et523rjxo21ePHiH%2B3Trl07rVu37ifXBwAAaqawvkUIAABwIyJgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAQsAAMAwAhYAAIBhBCwAAADDCFgAAACGRThdAADc6OKnZjldwk%2BydXofp0sAajxmsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYD7kDQDUTTg/l80A%2BqitmsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAQsAAMAwAhYAAIBhBCwAAADDCFgAAACGhfWLRtetW6eZM2cqPz9fx44d08qVK/Xoo4/a2y3L0ssvv6z58%2BerqKhInTp10ptvvqm2bdvafYqKijRu3DitWrVKkjRgwADNnTtXDRs2tPvs2LFDY8aM0ebNm9W4cWONHDlSL774olwuV9VdbDUQTi8/BADg5wjrGawzZ86offv2yszMvOr2GTNmKCMjQ5mZmdqyZYu8Xq969eqlU6dO2X2Sk5MVCASUlZWlrKwsBQIB%2Bf1%2Be3txcbF69eoln8%2BnLVu2aO7cuZo1a5YyMjIq/foAAEB4CusZrL59%2B6pv375X3WZZlubMmaOpU6dq4MCBkqRFixYpJiZGS5cu1ciRI7V7925lZWUpLy9PnTp1kiQtWLBACQkJ2rNnj1q3bq0lS5bo/PnzWrhwodxut%2BLi4rR3715lZGQoNTWVWSwAAFBBWM9g/Zj9%2B/eroKBAiYmJdpvb7Vb37t21ceNGSVJubq48Ho8driSpc%2BfO8ng8IX26d%2B8ut9tt9%2Bndu7eOHj2qb7755qrnLikpUXFxccgCAABqjmobsAoKCiRJMTExIe0xMTH2toKCAkVHR1fYNzo6OqTP1Y7x/XNcKT09XR6Px15atmz58y4GAACElWobsC678haeZVkhbVe7xXetPpZl/eC%2BkjRlyhQFg0F7OXTo0L9cPwAACD9h/QzWj/F6vZIuzTI1a9bMbi8sLLRnoLxer44fP15h3xMnToT0uXKmqrCwUFLF2bHL3G53yC1FAABQs1TbGazY2Fh5vV5lZ2fbbaWlpcrJyVGXLl0kSQkJCQoGg9q8ebPdZ9OmTQoGgyF91q1bp9LSUrvP6tWr5fP5dNttt1XNxQAAgLAS1gHr9OnTCgQCCgQCki492B4IBHTw4EG5XC6lpKQoLS1NK1eu1M6dOzV8%2BHDVq1dPycnJkqQ2bdqoT58%2BGjFihPLy8pSXl6cRI0YoKSlJrVu3lnTpNQ5ut1vDhw/Xzp07tXLlSqWlpfEJQgAA8IPC%2Bhbh1q1b9eCDD9rrqampkqRhw4Zp4cKFmjhxos6dO6dRo0bZLxpdvXq1GjRoYO%2BzZMkSjRs3zv604YABA0Leq%2BXxeJSdna3Ro0crPj5ejRo1Umpqqn0uAACAK7msy09so9IUFxfL4/EoGAwqKirK6LF5OzqAcLZ1eh%2BnS0A1Vpl/f68lrG8RAgAA3IgIWAAAAIYRsAAAAAwjYAEAABhGwAIAADDMkYC1ePFinT9/3olTAwAAVDpHAlZqaqq8Xq9GjhwZ8hZ1AACA6sCRgHX06FG9%2B%2B67OnbsmLp166a2bdtq9uzZOnHihBPlAAAAGOVIwIqIiNDAgQO1atUqHTx4UMOGDdO7776rFi1aaODAgfroo4/E%2B08BAEC4cvwhd6/Xq4cfflg9evSQy%2BXS1q1blZycrFatWmn9%2BvVOlwcAAPCTORawvv32W82ZM0ft27dX165dVVhYqA8//FAHDhzQkSNHlJSUpKFDhzpVHgAAwL/MkS97/o//%2BA99/PHHio2N1W9/%2B1sNGzZMN998s7393/7t3zRx4kS98cYbTpQHAADwszgSsKKiorRmzRo98MADP9inWbNm2rdvXxVWBQCoauH2hfV8OTWulyMBa9GiRdfs43K59Itf/KIKqgEAADDLkWewnnvuOWVmZlZof/PNNzV%2B/HgHKgIAADDHkYD1l7/8RZ07d67QnpCQoOXLlztQEQAAgDmOBKxvv/1WjRo1qtAeFRWlb7/91oGKAAAAzHEkYP3iF7/Qp59%2BWqH9008/VWxsrAMVAQAAmOPIQ%2B4pKSlKSUnRP//5Tz300EOSpM8%2B%2B0wzZszQrFmznCgJAADAGEcC1ogRI3T%2B/HmlpaXpD3/4gySpRYsWeuONN/Tkk086URIAAIAxjgQsSRo7dqzGjh2rY8eOKTIyUg0bNnSqFAAAAKMcC1iXNWvWzOkSAAAAjHLkIfcTJ07oN7/5jW655RbVrVtXderUCVkAAADCmSMzWMOHD9c//vEPPf/882rWrJlcLpcTZQAAAFQKRwLWunXrtG7dOnXo0MGJ0wMAAFQqR24RtmjRglkrAABQbTkSsF5//XVNmTJFhw8fduL0AAAAlcqRW4R%2Bv1%2BnTp3SrbfeqqioKNWuXTtke2FhoRNlAQAAGOFIwHr11VedOC0AAECVcCRgPfXUU06cFgAAoEo48gyWJH3zzTeaNm2a/H6/fUtw9erV2r17t7FzXLhwQb///e8VGxuryMhI3X777XrllVdUXl5u97EsS9OmTZPP51NkZKR69OihXbt2hRynqKhIfr9fHo9HHo9Hfr9fJ0%2BeNFYnAACoXhwJWOvXr1fbtm2Vk5OjDz74QKdPn5Ykbdu2TS%2B99JKx87z22mt6%2B%2B23lZmZqd27d2vGjBmaOXOm5s6da/eZMWOGMjIylJmZqS1btsjr9apXr146deqU3Sc5OVmBQEBZWVnKyspSIBCQ3%2B83VicAAKheHAlYkyZN0rRp07R27dqQN7c/9NBDysvLM3ae3Nxc/fu//7v69eun2267TY899pgSExO1detWSZdmr%2BbMmaOpU6dq4MCBiouL06JFi3T27FktXbpUkrR7925lZWXpT3/6kxISEpSQkKAFCxbo73//u/bs2WOsVgAAUH04ErC%2B/PJLPfbYYxXao6OjdeLECWPn6datmz777DPt3btXkvTFF19ow4YNeuSRRyRJ%2B/fvV0FBgRITE%2B193G63unfvro0bN0q6FNI8Ho86depk9%2BncubM8Ho/d50olJSUqLi4OWQAAQM3hyEPuDRs2VEFBgWJjY0PaA4GAmjdvbuw8kyZNUjAY1J133qlatWrp4sWLmj59up544glJUkFBgSQpJiYmZL%2BYmBgdOHDA7hMdHV3h2NHR0fb%2BV0pPT9fLL79s7DoAAEB4cWQG6/HHH9fkyZN14sQJ%2B43umzZt0oQJEzRkyBBj51m%2BfLkWL16spUuXatu2bVq0aJFmzZqlRYsWhfS78q3ylmWFtF3trfNX9vm%2BKVOmKBgM2suhQ4cMXA0AAAgXjsxgpaWlye/3q1mzZiovL9ddd92lsrIyDRo0SC%2B%2B%2BKKx8zz//POaPHmyHn/8cUlSu3btdODAAaWnp2vYsGHyer2SLs1SNWvWzN6vsLDQntXyer06fvx4hWOfOHGiwszXZW63W26329h1AACA8OJIwKpTp46WL1%2BuvXv3atu2bSovL9e9996rO%2B%2B80%2Bh5zp49q5tuCp2kq1Wrlv2ahtjYWHm9XmVnZ9tfPF1aWqqcnBy99tprkqSEhAQFg0Ft3rxZ999/v6RLs23BYFBdunQxWi8AAKgeHAlYl91xxx264447Ku34/fv31/Tp03XLLbeobdu22r59uzIyMvTkk09KunTrLyUlRWlpaWrVqpVatWqltLQ01atXT8nJyZKkNm3aqE%2BfPhoxYoTeeecdSdLTTz%2BtpKQktW7dutJqBwAA4cuRgPX000//6Pb58%2BcbOc/cuXP14osvatSoUSosLJTP59PIkSND3rU1ceJEnTt3TqNGjVJRUZE6deqk1atXq0GDBnafJUuWaNy4cfanDQcMGKDMzEwjNQIAgOrHZVmWVdUn7d%2B/f8h6WVmZdu3apVOnTumXv/ylVq1aVdUlVari4mJ5PB4Fg0FFRUUZPXb81CyjxwMA/LCt0/s4XQJ%2Bgsr8%2B3stjsxg/e1vf6vQduHCBf3ud79TmzZtHKgIAADAHMe%2Bi/BKERERmjBhgmbOnOl0KQAAAD/LDROwJOnrr79WWVmZ02UAAAD8LI7cIpw4cWLIumVZOnbsmFatWqXBgwc7URIAAIAxjgSs3NzckPWbbrpJN998s1599VWNGDHCiZIAAACMcSRgrV%2B/3onTAgAAVIkb6hksAACA6sCRGaz77rvvB78o%2BUqbN2%2Bu5GoAAADMciRgPfjgg3rnnXd0xx13KCEhQZKUl5enPXv2aOTIkXxRMgAACGuOBKyTJ09q9OjRSktLC2mfOnWqjh8/rj/96U9OlAUAAGCEI89gffDBB/rNb35ToX348OH6y1/%2B4kBFAAAA5jgSsNxutzZu3FihfePGjdweBAAAYc%2BRW4Tjxo3TM888o%2B3bt6tz586SLj2DtWDBAr3wwgtOlAQAAGCMIwFr6tSpio2N1R//%2BEe9%2B%2B67kqQ2bdpowYIFSk5OdqIkAAAAYxwJWJKUnJxMmAIAANWSYy8aLS4u1sKFC/XSSy%2BpqKhIkvTFF1/o2LFjTpUEAABghCMzWDt37lTPnj1Vr149HTp0SMOHD1ejRo30wQcf6PDhw1q0aJETZQEAABjhyAzWc889p%2BTkZP3jH/9Q3bp17fZ%2B/fpp3bp1TpQEAABgjCMzWFu2bNG8efMqfF1O8%2BbNuUUIAADCniMzWHXq1NHp06crtO/bt09NmzZ1oCIAAABzHAlYAwYM0H/%2B53/qwoULkiSXy6UjR45o8uTJGjhwoBMlAQAAGONIwJo9e7aOHj0qr9erc%2BfO6aGHHtLtt9%2BuunXrVvh%2BQgAAgHDjyDNYHo9HGzduVHZ2trZt26by8nLde%2B%2B96t27d4XnsgAAAMJNlQessrIyPfLII3rrrbeUmJioxMTEqi4BAACgUlX5LcLatWtr%2B/btzFQBAIBqy5FnsIYMGaL33nvPiVMDAABUOse%2BizAzM1Nr1qxRfHy86tevH7JtxowZDlUFAADw8zkSsPLz83X33XdLkr788suQbdw6BAAA4a5KA9bXX3%2Bt2NhYrV%2B/vipPCwAAUKWq9BmsVq1a6cSJE/b6r3/9ax0/frwqSwAAAKh0VRqwLMsKWf/444915syZSj3nkSNHNGTIEDVp0kT16tXTPffco/z8/JCapk2bJp/Pp8jISPXo0UO7du0KOUZRUZH8fr88Ho88Ho/8fr9OnjxZqXUDAIDw5cinCKtKUVGRunbtqtq1a%2BuTTz7RV199pdmzZ6thw4Z2nxkzZigjI0OZmZnasmWLvF6vevXqpVOnTtl9kpOTFQgElJWVpaysLAUCAfn9ficuCQAAhIEqfQbL5XJVeIi9Mh9qf%2B2119SyZcuQV0Lcdttt9s%2BWZWnOnDmaOnWq/R2IixYtUkxMjJYuXaqRI0dq9%2B7dysrKUl5enjp16iRJWrBggRISErRnzx61bt260uoHAADhqUoDlmVZGj58uNxutyTp/PnzeuaZZyq8pmHFihVGzrdq1Sr17t1bv/rVr5STk6PmzZtr1KhRGjFihCRp//79KigoCHmbvNvtVvfu3bVx40aNHDlSubm58ng8driSpM6dO9tf90PAAgAAV6rSgDVs2LCQ9SFDhlTq%2Bb7%2B%2BmvNmzdPqampeuGFF7R582aNGzdObrdbQ4cOVUFBgSQpJiYmZL%2BYmBgdOHBAklRQUKDo6OgKx46Ojrb3v1JJSYlKSkrs9eLiYlOXBAAAwkCVBqyqfnt7eXm54uPjlZaWJknq0KGDdu3apXnz5mno0KF2vytvU1qWFdJ2tduYV/b5vvT0dL388ssmLgEAAIShav2Qe7NmzXTXXXeFtLVp00YHDx6UJHm9XkmqMBNVWFhoz2p5vd6rvkrixIkTFWa%2BLpsyZYqCwaC9HDp06GdfCwAACB/VOmB17dpVe/bsCWnbu3evbr31VklSbGysvF6vsrOz7e2lpaXKyclRly5dJEkJCQkKBoPavHmz3WfTpk0KBoN2nyu53W5FRUWFLAAAoOZw7LsIq8Jzzz2nLl26KC0tTYMGDdLmzZs1f/58zZ8/X9KlW38pKSlKS0tTq1at1KpVK6WlpalevXpKTk6WdGnGq0%2BfPhoxYoTeeecdSdLTTz%2BtpKQkHnAHAABXVa0D1n333aeVK1dqypQpeuWVVxQbG6s5c%2BZo8ODBdp%2BJEyfq3LlzGjVqlIqKitSpUyetXr1aDRo0sPssWbJE48aNsz9tOGDAAGVmZlb59QAAgPDgsq58vTqMKy4ulsfjUTAYNH67MH5qltHjAQB%2B2NbpfZwuAT9BZf79vZZq/QwWAACAEwhYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAQsAAMAwAhYAAIBhBCwAAADDCFgAAACGEbAAAAAMI2ABAAAYRsACAAAwjIAFAABgGAELAADAMAIWAACAYQQsAAAAwwhYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIyABQAAYFiNCljp6elyuVxKSUmx20pKSjR27Fg1bdpU9evX14ABA3T48OGQ/Q4ePKj%2B/furfv36atq0qcaNG6fS0tKqLh8AAISJGhOwtmzZovnz5%2Bvuu%2B8OaU9JSdHKlSu1bNkybdiwQadPn1ZSUpIuXrwoSbp48aL69eunM2fOaMOGDVq2bJn%2B%2Bte/avz48U5cBgAACAM1ImCdPn1agwcP1oIFC9SoUSO7PRgM6s9//rNmz56tnj17qkOHDlq8eLF27NihNWvWSJJWr16tr776SosXL1aHDh3Us2dPzZ49WwsWLFBxcbFTlwQAAG5gNSJgjR49Wv369VPPnj1D2vPz81VWVqbExES7zefzKS4uThs3bpQk5ebmKi4uTj6fz%2B7Tu3dvlZSUKD8/v2ouAAAAhJUIpwuobMuWLVN%2Bfr62bt1aYVtBQYHq1KkTMqslSTExMSooKLD7xMTEhGxv1KiR6tSpY/e5UklJiUpKSux1ZroAAKhZqvUM1qFDh/Tss89qyZIlqlu37nXvZ1mWXC6Xvf79n3%2Boz/elp6fL4/HYS8uWLX968QAAIGxV64CVn5%2BvwsJCdezYUREREYqIiFBOTo7eeOMNRUREKCYmRqWlpSoqKgrZr7Cw0J618nq9FWaqioqKVFZWVmFm67IpU6YoGAzay6FDhyrnAgEAwA2pWgeshx9%2BWDt27FAgELCX%2BPh4DR482P65du3ays7Otvc5duyYdu7cqS5dukiSEhIStHPnTh07dszus3r1arndbnXs2PGq53W73YqKigpZAABAzVGtn8Fq0KCB4uLiQtrq16%2BvJk2a2O1PPfWUxo8fryZNmqhx48aaMGGC2rVrZz8Qn5iYqLvuukt%2Bv18zZ87Ud999pwkTJmjEiBEEJwAAcFXVOmBdj9dff10REREaNGiQzp07p4cfflgLFy5UrVq1JEm1atXSRx99pFGjRqlr166KjIxUcnKyZs2a5XDlAICqFj81y%2BkSfpKt0/s4XUKN5bIsy3Ksbr8IAAAPrElEQVS6iOquuLhYHo9HwWDQ%2BKxXuP2yAwCqTk0PWJX59/daqvUzWAAAAE4gYAEAABhGwAIAADCMgAUAAGAYAQsAAMAwAhYAAIBhBCwAAADDCFgAAACGEbAAAAAMI2ABAAAYRsACAAAwjIAFAABgGAELAADAMAIWAACAYQQsAAAAwwhYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAQsAAMAwAhYAAIBh1Tpgpaen67777lODBg0UHR2tRx99VHv27AnpU1JSorFjx6pp06aqX7%2B%2BBgwYoMOHD4f0OXjwoPr376/69euradOmGjdunEpLS6vyUgAAQBip1gErJydHo0ePVl5enrKzs3XhwgUlJibqzJkzdp%2BUlBStXLlSy5Yt04YNG3T69GklJSXp4sWLkqSLFy%2BqX79%2BOnPmjDZs2KBly5bpr3/9q8aPH%2B/UZQEAgBucy7Isy%2BkiqsqJEycUHR2tnJwc/fKXv1QwGNTNN9%2Bs999/X7/%2B9a8lSUePHlXLli318ccfq3fv3vrkk0%2BUlJSkQ4cOyefzSZKWLVum4cOHq7CwUFFRUdc8b3FxsTwej4LB4HX1/ynip2YZPR4AoPrYOr2P0yU4qjL//l5LtZ7BulIwGJQkNW7cWJKUn5%2BvsrIyJSYm2n18Pp/i4uK0ceNGSVJubq7i4uLscCVJvXv3VklJifLz86uwegAAEC4inC6gqliWpdTUVHXr1k1xcXGSpIKCAtWpU0eNGjUK6RsTE6OCggK7T0xMTMj2Ro0aqU6dOnafK5WUlKikpMReLy4uNnkpAADgBldjZrDGjBmjL7/8Uv/1X/91zb6WZcnlctnr3//5h/p8X3p6ujwej720bNnyXy8cAACEnRoRsMaOHatVq1Zp7dq1atGihd3u9XpVWlqqoqKikP6FhYX2rJXX660wU1VUVKSysrIKM1uXTZkyRcFg0F4OHTpk%2BIoAAMCNrFoHLMuyNGbMGK1YsUKff/65YmNjQ7Z37NhRtWvXVnZ2tt127Ngx7dy5U126dJEkJSQkaOfOnTp27JjdZ/Xq1XK73erYseNVz%2Bt2uxUVFRWyAACAmqNaP4M1evRoLV26VP/93/%2BtBg0a2DNRHo9HkZGR8ng8euqppzR%2B/Hg1adJEjRs31oQJE9SuXTv17NlTkpSYmKi77rpLfr9fM2fO1HfffacJEyZoxIgRBCcAAHBV1TpgzZs3T5LUo0ePkPb33ntPw4cPlyS9/vrrioiI0KBBg3Tu3Dk9/PDDWrhwoWrVqiVJqlWrlj766CONGjVKXbt2VWRkpJKTkzVr1qyqvBQAABBGatR7sJzCe7AAAE7gPVi8BwsAAKDaIGABAAAYRsACAAAwjIAFAABgGAELAADAMAIWAACAYQQsAAAAwwhYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABhGwAIAADCMgAUAAGAYAQsAAMAwAhYAAIBhBCwAAADDCFgAAACGEbAAAAAMI2ABAAAYRsACAAAwjIAFAABgGAELAADAMAIWAACAYQQsAAAAwwhY1%2Bmtt95SbGys6tatq44dO2r9%2BvVOlwQAAG5QBKzrsHz5cqWkpGjq1Knavn27HnjgAfXt21cHDx50ujQAAHADImBdh4yMDD311FP67W9/qzZt2mjOnDlq2bKl5s2b53RpAADgBhThdAE3utLSUuXn52vy5Mkh7YmJidq4ceNV9ykpKVFJSYm9HgwGJUnFxcXG67tYcsb4MQEA1UNl/N0JJ5ev37KsKj83Aesavv32W128eFExMTEh7TExMSooKLjqPunp6Xr55ZcrtLds2bJSagQA4Go8s52u4MZw6tQpeTyeKj0nAes6uVyukHXLsiq0XTZlyhSlpqba6%2BXl5fruu%2B/UpEmTH9znX1FcXKyWLVvq0KFDioqKMnbc6oQxujbG6PowTtfGGF0fxunaTI2RZVk6deqUfD6fwequDwHrGpo2bapatWpVmK0qLCysMKt1mdvtltvtDmlr2LBhpdUYFRXFL%2Bk1MEbXxhhdH8bp2hij68M4XZuJMarqmavLeMj9GurUqaOOHTsqOzs7pD07O1tdunRxqCoAAHAjYwbrOqSmpsrv9ys%2BPl4JCQmaP3%2B%2BDh48qGeeecbp0gAAwA2o1rRp06Y5XcSNLi4uTk2aNFFaWppmzZqlc%2BfO6f3331f79u2dLk21atVSjx49FBFBVv4hjNG1MUbXh3G6Nsbo%2BjBO1xbuY%2BSynPjsIgAAQDXGM1gAAACGEbAAAAAMI2ABAAAYRsACAAAwjIAVpt566y3Fxsaqbt266tixo9avX%2B90SY5JT0/XfffdpwYNGig6OlqPPvqo9uzZE9KnpKREY8eOVdOmTVW/fn0NGDBAhw8fdqhi56Wnp8vlciklJcVuY4wuOXLkiIYMGaImTZqoXr16uueee5Sfn29vtyxL06ZNk8/nU2RkpHr06KFdu3Y5WHHVunDhgn7/%2B98rNjZWkZGRuv322/XKK6%2BovLzc7lMTx2jdunXq37%2B/fD6fXC6XPvzww5Dt1zMmRUVF8vv98ng88ng88vv9OnnyZFVeRqX6sTEqKyvTpEmT1K5dO9WvX18%2Bn09Dhw7V0aNHQ44RTmNEwApDy5cvV0pKiqZOnart27frgQceUN%2B%2BfXXw4EGnS3NETk6ORo8erby8PGVnZ%2BvChQtKTEzUmTP//4uwU1JStHLlSi1btkwbNmzQ6dOnlZSUpIsXLzpYuTO2bNmi%2BfPn6%2B677w5pZ4wu/ePdtWtX1a5dW5988om%2B%2BuorzZ49O%2BSbGGbMmKGMjAxlZmZqy5Yt8nq96tWrl06dOuVg5VXntdde09tvv63MzEzt3r1bM2bM0MyZMzV37ly7T00cozNnzqh9%2B/bKzMy86vbrGZPk5GQFAgFlZWUpKytLgUBAfr%2B/qi6h0v3YGJ09e1bbtm3Tiy%2B%2BqG3btmnFihXau3evBgwYENIvrMbIQti5//77rWeeeSak7c4777QmT57sUEU3lsLCQkuSlZOTY1mWZZ08edKqXbu2tWzZMrvPkSNHrJtuusnKyspyqkxHnDp1ymrVqpWVnZ1tde/e3Xr22Wcty2KMLps0aZLVrVu3H9xeXl5ueb1e69VXX7Xbzp8/b3k8Huvtt9%2BuihId169fP%2BvJJ58MaRs4cKA1ZMgQy7IYI8uyLEnWypUr7fXrGZOvvvrKkmTl5eXZfXJzcy1J1v/%2B7/9WXfFV5MoxuprNmzdbkqwDBw5YlhV%2BY8QMVpgpLS1Vfn6%2BEhMTQ9oTExO1ceNGh6q6sQSDQUlS48aNJUn5%2BfkqKysLGTOfz6e4uLgaN2ajR49Wv3791LNnz5B2xuiSVatWKT4%2BXr/61a8UHR2tDh06aMGCBfb2/fv3q6CgIGSc3G63unfvXmPGqVu3bvrss8%2B0d%2B9eSdIXX3yhDRs26JFHHpHEGF3N9YxJbm6uPB6POnXqZPfp3LmzPB5PjR23YDAol8tlzyCH2xiF5%2BtRa7Bvv/1WFy9erPBF0zExMRW%2BkLomsixLqamp6tatm%2BLi4iRJBQUFqlOnjho1ahTSt6aN2bJly5Sfn6%2BtW7dW2MYYXfL1119r3rx5Sk1N1QsvvKDNmzdr3LhxcrvdGjp0qD0WV/v9O3DggBMlV7lJkyYpGAzqzjvvVK1atXTx4kVNnz5dTzzxhCQxRldxPWNSUFCg6OjoCvtGR0fXqN/By86fP6/JkycrOTnZ/rLncBsjAlaYcrlcIeuWZVVoq4nGjBmjL7/8Uhs2bLhm35o0ZocOHdKzzz6r1atXq27dute9X00aI0kqLy9XfHy80tLSJEkdOnTQrl27NG/ePA0dOtTuV5N//5YvX67Fixdr6dKlatu2rQKBgFJSUuTz%2BTRs2DC7X00eox9yrTG52vjUxHErKyvT448/rvLycr311lsh28JpjLhFGGaaNm2qWrVqVUjrhYWFFf7vqKYZO3asVq1apbVr16pFixZ2u9frVWlpqYqKikL616Qxy8/PV2FhoTp27KiIiAhFREQoJydHb7zxhiIiIhQTE1Pjx0iSmjVrprvuuiukrU2bNvYHSLxeryTV6N%2B/559/XpMnT9bjjz%2Budu3aye/367nnnlN6erokxuhqrmdMvF6vjh8/XmHfEydO1KhxKysr06BBg7R//35lZ2fbs1dS%2BI0RASvM1KlTRx07dlR2dnZIe3Z2trp06eJQVc6yLEtjxozRihUr9Pnnnys2NjZke8eOHVW7du2QMTt27Jh27txZY8bs4Ycf1o4dOxQIBOwlPj5egwcPtn%2Bu6WMkSV27dq3wio%2B9e/fq1ltvlSTFxsbK6/WGjFNpaalycnJqzDidPXtWN90U%2BqejVq1a9msaGKOKrmdMEhISFAwGtXnzZrvPpk2bFAwGa8y4XQ5X%2B/bt05o1a9SkSZOQ7WE3Rk49XY9/3bJly6zatWtbf/7zn62vvvrKSklJserXr2998803TpfmiN/97neWx%2BOx/ud//sc6duyYvZw9e9bu88wzz1gtWrSw1qxZY23bts166KGHrPbt21sXLlxwsHJnff9ThJbFGFnWpU8tRUREWNOnT7f27dtnLVmyxKpXr561ePFiu8%2Brr75qeTwea8WKFdaOHTusJ554wmrWrJlVXFzsYOVVZ9iwYVbz5s2tv//979b%2B/futFStWWE2bNrUmTpxo96mJY3Tq1Clr%2B/bt1vbt2y1JVkZGhrV9%2B3b7E3DXMyZ9%2BvSx7r77bis3N9fKzc212rVrZyUlJTl1Scb92BiVlZVZAwYMsFq0aGEFAoGQf8tLSkrsY4TTGBGwwtSbb75p3XrrrVadOnWse%2B%2B9134lQU0k6arLe%2B%2B9Z/c5d%2B6cNWbMGKtx48ZWZGSklZSUZB08eNC5om8AVwYsxuiSv/3tb1ZcXJzldrutO%2B%2B805o/f37I9vLycusPf/iD5fV6Lbfbbf3yl7%2B0duzY4VC1Va%2B4uNh69tlnrVtuucWqW7eudfvtt1tTp04N%2BSNYE8do7dq1V/13aNiwYZZlXd%2BY/POf/7QGDx5sNWjQwGrQoIE1ePBgq6ioyIGrqRw/Nkb79%2B//wX/L165dax8jnMbIZVmWVXXzZQAAANUfz2ABAAAYRsACAAAwjIAFAABgGAELAADAMAIWAACAYQQsAAAAwwhYAAAAhhGwAAAADCNgAQAAGEbAAgAAMIyABQAAYBgBCwAAwDACFgAAgGEELAAAAMMIWAAAAIYRsAAAAAwjYAEAABhGwAIAADDs/wHVeIRsNzMVzwAAAABJRU5ErkJggg%3D%3D"/>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12" id="common1270815397947225451">
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0.0</td>
        <td class="number">297</td>
        <td class="number">3.1%</td>
        <td>
            <div class="bar" style="width:4%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.5</td>
        <td class="number">26</td>
        <td class="number">0.3%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.3</td>
        <td class="number">22</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">73.7</td>
        <td class="number">22</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">47.8</td>
        <td class="number">22</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">3.3</td>
        <td class="number">21</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.1</td>
        <td class="number">21</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.2</td>
        <td class="number">20</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.7</td>
        <td class="number">20</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">1.0</td>
        <td class="number">20</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="other">
        <td class="fillremaining">Other values (1025)</td>
        <td class="number">9087</td>
        <td class="number">94.9%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
        <div role="tabpanel" class="tab-pane col-md-12"  id="extreme1270815397947225451">
            <p class="h4">Minimum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">0.0</td>
        <td class="number">297</td>
        <td class="number">3.1%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.04</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:1%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.1</td>
        <td class="number">21</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:8%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.2</td>
        <td class="number">20</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:7%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">0.3</td>
        <td class="number">22</td>
        <td class="number">0.2%</td>
        <td>
            <div class="bar" style="width:8%">&nbsp;</div>
        </td>
</tr>
</table>
            <p class="h4">Maximum 5 values</p>
            
<table class="freq table table-hover">
    <thead>
    <tr>
        <td class="fillremaining">Value</td>
        <td class="number">Count</td>
        <td class="number">Frequency (%)</td>
        <td style="min-width:200px">&nbsp;</td>
    </tr>
    </thead>
    <tr class="">
        <td class="fillremaining">106.2</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">106.4</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">106.5</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">108.8</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr><tr class="">
        <td class="fillremaining">119.0</td>
        <td class="number">1</td>
        <td class="number">0.0%</td>
        <td>
            <div class="bar" style="width:100%">&nbsp;</div>
        </td>
</tr>
</table>
        </div>
    </div>
</div>
</div>
    <div class="row headerrow highlight">
        <h1>Correlations</h1>
    </div>
    
    <div class="row headerrow highlight">
        <h1>Sample</h1>
    </div>
    <div class="row variablerow">
    <div class="col-md-12" style="overflow:scroll; width: 100%%; overflow-y: hidden;">
        <table border="1" class="dataframe sample">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>credit.policy</th>
      <th>purpose</th>
      <th>int.rate</th>
      <th>installment</th>
      <th>log.annual.inc</th>
      <th>dti</th>
      <th>fico</th>
      <th>days.with.cr.line</th>
      <th>revol.bal</th>
      <th>revol.util</th>
      <th>inq.last.6mths</th>
      <th>delinq.2yrs</th>
      <th>pub.rec</th>
      <th>not.fully.paid</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>debt_consolidation</td>
      <td>0.1189</td>
      <td>829.10</td>
      <td>11.350407</td>
      <td>19.48</td>
      <td>737</td>
      <td>5639.958333</td>
      <td>28854</td>
      <td>52.1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>credit_card</td>
      <td>0.1071</td>
      <td>228.22</td>
      <td>11.082143</td>
      <td>14.29</td>
      <td>707</td>
      <td>2760.000000</td>
      <td>33623</td>
      <td>76.7</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1</td>
      <td>debt_consolidation</td>
      <td>0.1357</td>
      <td>366.86</td>
      <td>10.373491</td>
      <td>11.63</td>
      <td>682</td>
      <td>4710.000000</td>
      <td>3511</td>
      <td>25.6</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1</td>
      <td>debt_consolidation</td>
      <td>0.1008</td>
      <td>162.34</td>
      <td>11.350407</td>
      <td>8.10</td>
      <td>712</td>
      <td>2699.958333</td>
      <td>33667</td>
      <td>73.2</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>1</td>
      <td>credit_card</td>
      <td>0.1426</td>
      <td>102.92</td>
      <td>11.299732</td>
      <td>14.97</td>
      <td>667</td>
      <td>4066.000000</td>
      <td>4740</td>
      <td>39.5</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
    </div>
</div>
</div>


