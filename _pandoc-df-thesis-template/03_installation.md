---
title: "Installation"
permalink: /docs/pandoc-df-thesis-template/installation/
excerpt: "How to install pandoc-df-thesis-template."
group: Getting Started
date_created: 2018-12-04 08:17:17.1543907837 +0100
date_lastmod: 2018-12-10 17:58:54.414701442 +0100
toc: true
---
{%-include _links.md -%}

> At this time, this template is designed for mainly Linux distributions.
> Thus, it uses many commands that are basically available on most Linux distributions (e.g. `make`, `sed`, `tput`...).
> Basically, with some few efforts this template can be used on another operating system (e.g. Windows and MacOS)... this is planed in future prospects (when I've got time!).
{: class="note warning" }

## Mandatory pre-requires

Prior to use the pandoc-df-thesis-template the following applications must be available on your system:

- [Pandoc] for converting the [Markdown] to the output format of your choice.
  - Installation instruction: [Installing Pandoc](https://pandoc.org/installing.html)
  - Also recommended [Pandoc] filters: [Pandoc-citeproc](https://github.com/jgm/pandoc-citeproc), [Pandoc-crossref](http://lierdakil.github.io/pandoc-crossref/), .

- [PP] -- A generic Pre-processor (with [Pandoc] in mind).
  - [PP] allows to pre-process the [Markdown] sources, enabling **macros** (or commands) in the “modified” markdown sources.
  - Installation:
     1. Download and extract [pp.tgz](https://cdsoft.fr/pp/pp.tgz).
     2. Run `make` (or `make install`) in the `pp/` folder.

- A [LaTeX] distribution (e.g. [TeXLive](http://www.tug.org/texlive/), [MiKTeX](https://miktex.org/), [MacTeX](https://tug.org/mactex/)…)
   - Also recommended: [LuaLateX](http://www.luatex.org/), [BibLatex](https://github.com/plk/biblatex/) (with `biber`), [glossaries](http://www.ctan.org/pkg/glossaries/) packages
   
## Useful pre-requires
