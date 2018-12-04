---
title: "Installation"
permalink: /docs/pandoc-df-thesis-template/installation/
excerpt: "How to install pandoc-df-thesis-template."
date_created: 2018-12-04 08:17:17.1543907837 +0100
toc: true
---
{%-include _links.md -%}

> At this time, this template is designed for mainly linux distributions. 
> Thus, it use many commands that are basically available on most linux distributions (e.g. `make`, `sed`, `tput`...).
> Basically, with some few efforts this template can be used on another operating system (e.g. Windows and MacOS)... this is planed in future prospects (when I've got time!). 
{: class="note warning" }

## Mandatory prerequires

- A [LaTeX] distribution (e.g. [TeXLive](http://www.tug.org/texlive/), [MacTeX](https://tug.org/mactex/)…)
  - Also recommended: [LuaLateX](http://www.luatex.org/), [BibLatex](https://github.com/plk/biblatex/) (with biber), [glossaries](http://www.ctan.org/pkg/glossaries/) packages

- [Pandoc] for converting the [Markdown] to the output format of your choice.
  - Also recommended: [Pandoc-citeproc](https://github.com/jgm/pandoc-citeproc), [Pandoc-crossref](http://lierdakil.github.io/pandoc-crossref/), .

- [PP] -- A generic Preprocessor (with [Pandoc] in mind).
  - [PP] allows to preprocess the [Markdown] sources, enabling **macros** (or commands) in the “modified” markdown sources.
  - Installation:
     1. Download and extract [pp.tgz](https://cdsoft.fr/pp/pp.tgz).
     2. Run `make` (or `make install`) in the `pp/` folder.
   

