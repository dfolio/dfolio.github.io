---
title: "df-Extended Markdown"
permalink: /docs/pandoc-df-thesis-template/df-markdown/
excerpt: "The pandoc-df-thesis extended Markdown"
group: Getting Started
date_created: 2018-12-04 09:56:15.1543913775 +0100
date_lastmod: 2018-12-05 13:43:56.1544013836 +0100
toc: true
math: true
---
{%-include _links.md -%}

Although [Markdown] is a very interesting text markup, due to its inherent simplicity it's remains some drawbacks.
The considered issues should be envisioned with respect to the writing backgrounds.
For me, I've worked during a couple of decades with [LaTeX] with some satisfaction. Especially when I've to write some _short_ articles, and, similarly, long manuscript [LaTeX] remains powerful. But in all cases, the generated document can be shared only in PDF (I leave out close formats like DVI or Ghostscript).
Quickly, it appears to me that to produce a document in various output formats, [LaTeX] is not suitable.
Thus, I've started migrating from [LateX] to [Markdown] with [Pandoc].

## User defined macros

However, for me, one most important missing features in writing a document in [Markdown], is the lack of definition of "_macros / commmand / functions_". With [LaTeX], I usually define many macros to define parameters, and then to make the whole text consistent.
For instance, a force symbol '$${f}$$' can be simply typeset as `$\mathbf{f}$`, but it can be conveniently defined with macros:

``` latex
\newcommand{\Vector}[1]{\ensuremath{\mathbf{#1}}}
\newcommand{\Force}{\ensuremath{\Vector{f}}}
```

This helps me to use the same convention over the entire document, and a simple change in the macros is propagated to the whole manuscript (this also help to not have to remember how a force symbol have to be typesetted).
Such simple feature is not available in [Markdown].
With [Pandoc] if only [LaTeX] output is used the above macros' definition can be used, but with lost of the other format outputs...

Hence, I've heard of [PP]: a generic Preprocessor (with [Pandoc] in mind).
The idea is then simple: use [PP] to pre-process a “df)-extended” [Markdown] markup with macros, and then use [Pandoc] to build in the desired dialect.
To do so, we first have to define a set of [PP] macros, such as:

``` tex
\define{Vector}{\mathbf{\1}}
\define{Force}{\Vector{f}}
```

Then one can use the macros in its (extended)-[Markdown] document and process it with [PP]+[Pandoc] :

``` console
$ pp --import=marcros.pp docs.md | pandoc -t <dialect> -o output_doc
```

Some specials define can help the definitions of the macros for the output dialect (e.g. add something like`-DLATEX=1` or `-DHTML=1`).

> **Note:** In 'pandoc-df-thesis-template', the different base [PP]-macros are in the `_data/` folder, with the `.pp` extensions. You should have:
>  - `_data/macros.pp`: the main macros that call the other according to the enabled flag (e.g. `-DLATEX=1` or `-DHTML=1`);
>  - `_data/html.pp`: macros for [HTML] outputs (e.g. `-DHTML=1`);
>  - `_data/latex.pp`: macros for [LaTeX] outputs (e.g. `-DLATEX=1`). Usually should be mostly empty. I encourage to directly define the [LaTeX] macros within a package or in an included tex-file to get the full capability of [LaTeX] command definition.
{: class="note"}

> ### Get involved with [PP]
> For further details on how to define [PP]-macros and to discover [PP] capabilities, please refer to the [PP] documentation.
{: class="note info"}

## Glossaries features

One interesting feature of [LaTeX] for long dissertation relies on its capability to manage Glossaries/Nomenclatures/Index.
But such features are lacking in common [Markdown] markup.
To overcome this issue, once again I've taken advantage of [PP], currently to deal solely with the glossaries.
This is achieved within the `_data/glossaries.pp` file, which provide two commands:

1. `\AcroEntry{<label>}{<definition}{<lang>}`: to define a new acronym `<label>` with the `<definition>`. The optional `<lang>` allows specifying the definition language (e.g. in [HTML] this corresponds to set the `lang` attribute).

    > A basic example of defining a new acronym can be:
    >`\AcroEntry{DNA}{deoxyribonucleic acid}`
    {: .example :}

    Then you can use `\<label>` (e.g. `\DNA`) to refer to the acronym. In the same time the macros `\<label>short`, `\<label>long` and `\<label>full` are also provided.


2. `\GlossEntry{<label>}{<name>}{<description>}`:  to define a new glossary entry `<label>` with the `<name>` and `<description>`.

    > A basic example of defining a new glossary entry is as follows with the
    > [PP] markup
    > ```
    \GlossEntry{cell}{cell}
~~~~~~~~~~~~~~
The cell is the basic structural, functional, and biological unit of all known living organisms.
A cell is the smallest unit of life. Cells are often called the "building blocks of life".
~~~~~~~~~~~~~~
    > ```
    {: .example :}

    Here again you can simply use `\<label>` (e.g. `\cell`) to refer to the glossary entry.


Obviously, you can define your own entries, directly in the `_data/glossaries.pp` file, or in a separate file to be included properly.

## [Pandoc] features

Basically, the input df-extended [Markdown] markup is parsed with [Pandoc] and the following extensions enabled `+raw_html+raw_tex+abbreviations+yaml_metadata_block+header_attributes+definition_lists`
(see `PANDOC_MDEXT` in the `Makefile`).
Seconldy, bibliography & citations and label & reference are also a big issue when writing long documents. Here, this is supported by using well-known [Pandoc] filters: [pandoc-citeproc] and [pandoc-crossref].
For these features, the writer should refer to their corresponding documentation for further details.

> ### [HTML] output with [Jekyll]
> For [HTML] output with `BUILD_OUTPUT_MODE = multi`, [Jekyll] is used.
> Hence, [Liquid] with [Jekyll](https://jekyllrb.com/docs/liquid/) markup can be considered for only this case.
{: class="note info" }

## Sample text

I don't recall here the various capabalities of [Pandoc]+[Markdown], just briefly provide some few descriptions of the df-extended-markdown.

### Using Macros

When migrating from [LaTeX] to [Markdown], it could be quite frustating to not retrieve some basic command and to have to _learn_ a new text markup rule.
Basically, `\ref`, `\cite`, etc. are properly processed from [LaTeX] -> [Markdown], but they don't [Markdown] -> X.
If you like to use some _useful_ [LaTeX] package same apply.
For me, one interesting package is `siunitx`[^1] to print out properly units and numbers.

Let consider the following [PP] macros (here for [HTML] outputs)

```
!comment( *** references pp-macros set *************************************** )
\define{cite}{Latex cite}{ [@\1]}
\define{ref}{Latex ref}{[@\1]}
\define{cref}{Latex clever ref}{[@\1]}
\define{label}{Latex label}{#\1}

!comment( *** unit pp-macros set ******************************************** )
\define{num}{Latex siunitx}{<span class="number">\1</span>}
\define{si}{Latex siunitx}{<span class="unit">\1</span>}
\define{SI}{Latex siunitx}{<span class="number">\1</span><span class="unit">\2</span>}
\define{cubic}{\1^3^}
\define{per}{/}
\define{kilo}{k}
\define{micro}{µ}
\define{gram}{g}
\define{metre}{m}
```

As you can see you can mix [Markdown] markup with [HTML] markup!

Now, let's have a look of the following sample text:

```markdown
The Navier–Stokes momentum equation can be derived as a
particular form of the Cauchy momentum equation, whose general
convective form is \cite{constantin1988navier}:

$${\displaystyle {\frac {D\mathbf {u} }{Dt}}={\frac {1}{\rho }}\nabla \cdot {\boldsymbol {\sigma }}+\mathbf {g} } {\frac  {D{\mathbf  {u}}}{Dt}}={\frac  1\rho }\nabla \cdot {\boldsymbol  {\sigma }}+{\mathbf  {g}}$$ {#eq:NS}

-   $\rho$ is the density (\si{\kilo\gram\per\cubic{\metre}}),
```

The above df-extended-markdown will be pre-processed with [PP] for an [HTML] output format as:

```markdown
The Navier--Stokes momentum equation can be derived as a
particular form of the Cauchy momentum equation, whose general
convective form is [@constantin1988navier]:

$${\displaystyle {\frac {D\mathbf {u} }{Dt}}={\frac {1}{\rho }}\nabla \cdot {\boldsymbol {\sigma }}+\mathbf {g} } {\frac  {D{\mathbf  {u}}}{Dt}}={\frac  1\rho }\nabla \cdot {\boldsymbol  {\sigma }}+{\mathbf  {g}}$$ {\#eq:NS}

-   $\rho$ is the density ([kg/m^3^]{.unit}),
```

For [LaTeX] output format the command will be leaved as it is and processed at the compilation time.

> #### Beware of other output formats
> For other [Pandoc] output formats (e.g. [EPUB], [docx] and [odt])
> the [HTML] pre-processing is used.
{: class="note important" }


### Using acronym

Let assume that you have in your `_data/glossaries.pp` the following definition: `\AcroEntry{DNA}{deoxyribonucleic acid}`, and the following text:

```markdown
Deoxyribonucleic acid (\DNA) is a molecule composed of two chains
that coil around each other to form a double helix carrying the
genetic instructions used in the growth, development, functioning
and reproduction of all known living organisms and many viruses.

- short version  '\DNAshort'
- long version  '\DNAlong'
- full version '\DNAfull'
```

(sample text from <cite>[Wikipedia](https://en.wikipedia.org/wiki/DNA)</cite>.)

The above df-extended-markdown will be pre-processed with [PP] for an [HTML] output format as:

```markdown
Deoxyribonucleic acid ([<abbrev title='deoxyribonucleic acid'>DNA</abbrev>](#acro:DNA)) is a molecule composed of two chains
that coil around each other to form a double helix carrying the
genetic instructions used in the growth, development, functioning
and reproduction of all known living organisms and many viruses.

-   short version '[<abbrev title='deoxyribonucleic acid'>DNA</abbrev>](#acro:DNA)'
-   long version '[DNA]{.acroterm}'
-   full version '[deoxyribonucleic acid]{.acroterm} (<abbrev title='deoxyribonucleic acid'>DNA</abbrev>)'
```

For [LaTeX] output format the acronym command will be leaved as it is and processed at the compilation time.



[^1]: A comprehensive (SI) units package, <https://ctan.org/pkg/siunitx>
