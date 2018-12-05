---
title: "Configuration"
permalink: /docs/pandoc-df-thesis-template/configurations/
excerpt: "Configuring the pandoc-df-thesis"
date_created: 2018-12-04 09:56:15.1543913775 +0100
date_lastmod: 2018-12-04 09:56:15.1543913775 +0100
toc: true
---

{%-include _links.md -%}

There are different things and ways to configure and customize this template to fit you own.
You may start by first adapt the `Makefile`.

## The Makefile

### Simple configurations

- Select the output mode for HTML and TeX:

  ``` Makefile
  #Select the output mode for HTML and TeX
  #BUILD_OUTPUT_MODE    ?= multi
  BUILD_OUTPUT_MODE   ?= simple
  #Select the prefered build strategy
  #BUILD_TEX_STRATEGY  ?= pdflatex
  BUILD_TEX_STRATEGY  ?= lualatex
  #BUILD_TEX_STRATEGY  ?= xelatex
  ```

### Check programs
If you have just downloaded or cloned the template without any modification, if you run in the template folder: `make`, and if no error reported, you can start using the template :+1:.
On the contrary, you should check the origin of the error, by first looking if some important applications for the template are present or not on your system.
You can check your installation `make _check_programs`, and you will get an output like:

``` sh
=_ESSENTIAL_PROGRAMS

==_Basic_Shell_Utilities
cat:                Found: /bin/cat
cp:                 Found: /bin/cp
diff:               Found: /usr/bin/diff
date:               Found: /bin/date
echo:               Found: /bin/echo
egrep:              Found: /bin/egrep
find:               Found: /usr/bin/find
grep:               Found: /bin/grep
mkdir:              Found: /bin/mkdir
mktemp:             Found: /usr/bin/mktemp
mv:                 Found: /bin/mv
sed:                Found: /bin/sed
sort:               Found: /usr/bin/sort
touch:              Found: /usr/bin/touch
uniq:               Found: /usr/bin/uniq
which:              Found: /usr/bin/which

==_Pandoc_Utilities
pandoc:             Found: /usr/bin/pandoc
pp:                 Found: /usr/local/bin/pp

==_LaTeX_(tetex-provided)
bibtex:             Found: /usr/bin/bibtex
biber:              Found: /usr/bin/biber
latex:              Found: /usr/bin/latex
pdflatex:           Found: /usr/bin/pdflatex
lualatex:           Found: /usr/bin/lualatex
xelatex:            Found: /usr/bin/xelatex
makeindex:          Found: /usr/bin/makeindex
xindy:              Found: /usr/bin/xindy
kpsewhich:          Found: /usr/bin/kpsewhich

==_Makefile_Color_Output
tput:               Found: /usr/bin/tput

==_Figures_Generation
convert:            Found: /usr/bin/convert
inkscape:           Found: /usr/bin/inkscape
svgo:               Found: /usr/bin/svgo
scour:              Found: /usr/bin/scour

==_Usefull_external_program_
tar:                Found: /bin/tar
zip:                Found: /usr/bin/zip
npm:                Found: /usr/bin/npm
ruby:               Found: /usr/bin/ruby
gem:                Found: /usr/bin/gem
bundle:             Found: /usr/local/bin/bundle
jekyll:             Found: /usr/local/bin/jekyll
sass:               Found ./node_modules/.bin/sass
rsync:              Found: /usr/bin/rsync
xsltproc:           Found: /usr/bin/xsltproc

```
This also allows you to check if the proper applications is used

## The VARSDATA (default: `_data/variables.yml`)

## The METADATA (default: `_data/metadata.yml`)
