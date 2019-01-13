---
title: "Organization"
permalink: /docs/pandoc-df-thesis/organization/
excerpt: "How the template is organized."
group: Getting Started
date_created: 2018-12-11 07:36:13.1544510173 +0100
toc: true
collapse: true
---

{%-include _links.md -%}

Obviously, layouts, and data files are all placed in their default locations. Bibliographies, media and stylesheets in `assets`, and a few development related files in the project's root directory.

If you have just downloaded or cloned the template without any modification, you should get the following structure:
{%capture code%}
```bash
pandoc-df-thesis-template /
├ assets/
|  ├ bib/
|  | ├─ string.bib            # bibliography files
|  | ├─ thesis-biblio.bib     # string abbreviations for bib-files
|  | └─ Thesis-ieee-style.csl # Citation Style Language (CSL) for formatting of citations and bibliographies. 
|  ├ fig/                     # {empty}
|  ├ fonts/                   # fonts folders
|  ├ media/                   # media assets for the outputs
|  └ scss/
|     ├─ _<files>.scss         #  SCSS partials 
|     └─ pandoc_thesis_*.scss  # stylesheets, loads SCSS partials from '_<files>.scss'
|
├ _data/                      # data files for customizing the template
|  ├─ glossaries.pp           # pp-macros for glossaries
|  ├─ html.pp                 # pp-macros for HTML outputs
|  ├─ latex.pp                # pp-macros for TeX/PDF outputs
|  ├─ macros.pp               # main pp-macros 
|  ├─ metatada.yml            # pandoc metadata 
|  ├─ variables.yml           # pandoc/template variables 
|  └─ xml.pp                  # pp-macros for docbook 
|
├ _layouts/
|  ├ jekyll/                  # Jekyll template
|  | ├ assets/
|  | └── ...
|  | ├ _layouts/
|  | └── ...
|  | ├ _plugins/
|  | └── ...
|  | └─ _config.yml
|  ├ odt/                     # for opendocument template
|  | └── ...
|  ├ xsl/                     # for docbook template
|  | └── ...
|  ├─ pandoc-df-thesis*.sty   # LaTeX package for TeX/PDF output
|  └─ template.<target>       # The different [Pandoc] templates
|
├ _md/
|  ├─ 0X_<files>.md           # frontmatter sources files
|  ├─ 1X_<files>.md           # mainmatter sources files
|  └─ 9X_<files>.md           # backmatter sources files
|
├─ Makefile                   # The makefile that manage the build process
└─ package.json               # Node.js/npm build scripts
```
{%endcapture code%}
{%include collapse.html content=code id='organization' label="Toggle code" expanded=true %}

Once you have executed the command `make` from the template folder, the `build/` folder should appear.
It will be the place where all generated stuff should placed.

In some case a `node_modules/` directory may appear. This folder is managed by [NPM] for package [Node.js].

