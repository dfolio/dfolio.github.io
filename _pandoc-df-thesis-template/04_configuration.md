---
title: "Configuration"
permalink: /docs/pandoc-df-thesis-template/configurations/
excerpt: "Configuring the pandoc-df-thesis"
date_created: 2018-12-04 09:56:15.1543913775 +0100
date_lastmod: 2018-12-04 09:56:15.1543913775 +0100
toc: true
collapse: true
---

{%-include _links.md -%}


There are different things and ways to configure and customize this template to fit you own.
You may start by first adapt the `Makefile`.

## The Makefile {#Makefile}

All the build process are managed through [Make] build automation tool.

 
### Simple configurations

Basically, the simple configurations elements are placed in the begining of the `Makefile`.
Only relevant configuration parameters are reported here. 
For further informations, and advanced configuration you may refer directly to the `Makefile` contents.

{: class="note info" }
> A simple way to change any configurable values is to create a `Makefile.ini` in the root template folder. 
> The provided `Makefile.ini` will be loaded, and overwrite the default values of the `Makefile`.
> 
> For testing or some basic situation, you can overwrite the default value from the commandline, such as:
>  ```console
>  $ make MAINDOC=myThesis VERBOSE=1
>  ```


> In the code snipset below, the uncommented lines show the default values, which commonly correspond to the recommanded setting.
> {: class="note info" }


#### `BUILD_OUTPUT_MODE`
One may start by selecting the build process that is more relevant for its use case.
You can select the output mode for [HTML] and [LaTeX] outputs:
{%capture code%}
```make
#Select the output mode for HTML and TeX
#BUILD_OUTPUT_MODE    ?= multi
BUILD_OUTPUT_MODE   ?= simple
```
{%endcapture code%}
{%include collapse.html content=code id='BUILD_OUTPUT_MODE' label="Toggle code" %}
This choice of `BUILD_OUTPUT_MODE` simply enables single/multi:
- `single` means a simple standalone file is generated. This should be the basic choice for quick builds without (or at least very few) posterior modifications/corrections of the generated documents.
For both [HTML] and [LaTeX]  the single file make it easy to share the dissertations. 
  > For [HTML], the figures should be also added before sharing!
  > {: class="note disclaimer" }
  
- `multi` is for more adavanced usage, and differ slightly for [HTML] and [LaTeX] outputs:
  - in [HTML], [Jekyll] is used to split the [HTML] output in several pages. This is mainly convenient for web-based publications.
  - with [LaTeX], multiple `.tex`-files are produced to facilitate the modifications/corrections of the PDF output (e.g. to set out the final dissertation).


#### `BUILD_TEX_STRATEGY` and `TEX_BIB_STRATEGY`

For the PDF output, you can specify your prefered [LaTeX] build system:
{%capture code%}
```make
#Select the prefered build strategy
#BUILD_TEX_STRATEGY  ?= pdflatex
BUILD_TEX_STRATEGY  ?= lualatex
#BUILD_TEX_STRATEGY  ?= xelatex
```
{%endcapture code%}
{%include collapse.html content=code id='BUILD_TEX_STRATEGY' label="Toggle code" %}

You can also define the bibliography tool:
{%capture code%}
```make
# Select the citation TEX_BIB_STRATEGY for LateX:
TEX_BIB_STRATEGY  ?= biblatex
#TEX_BIB_STRATEGY  ?= natbib
```
{%endcapture code%}
{%include collapse.html content=code id='TEX_BIB_STRATEGY' label="Toggle code" %}

- `biblatex`: intended for use in producing a [LaTeX] file that can be processed with `bibtex` or `biber`. See also the `BUILD_BIB_STRATEGY`.
  > by default in `VARSDATA`, the `biber` backend are defined. 
  > {: class="note disclaimer" }
- `natbib`: intended for use in producing a [LaTeX] file that can be processed with `bibtex`.

#### `BUILD_DEFAULT_TARGETS`

You can specify the default target (e.g. when `make` is called without any arguments).
{%capture code%}
  ```make
# Select the default targets
BUILD_DEFAULT_TARGETS       ?= html pdf
  ```
{%endcapture code%}
{%include collapse.html content=code id='BUILD_DEFAULT_TARGETS' label="Toggle code" %}

Defined targets can be basically any of: `pdf`, `html`, `epub`, `odt`, `docx`, `xml`.

#### `MAIN_DOC_BASENAME`, `MDDIR` and `OUTDIR`

For any targets the main output document basename is defined as:
{%capture code%}
```make
# Specify the main output document basename 
MAIN_DOC_BASENAME ?=my_thesis
```
{%endcapture code%}
{%include collapse.html content=code id='MAIN_DOC_BASENAME' label="Toggle code" %}

Directory where the original (df-extended [Markdown]) sources files are looked for, is defined by:
{%capture code%}
```make
# By default Markdown (MD) sources are assumed defined by MDDIR
MDDIR       ?=_md
INDIR       ?=$(MDDIR)
```
{%endcapture code%}
{%include collapse.html content=code id='MDDIR' label="Toggle code" %}

Directory into which we place build targets is defined by:
{%capture code%}
```make
# Directory into which we place build targets 
OUTDIR      ?= build
```
{%endcapture code%}
{%include collapse.html content=code id='OUTDIR' label="Toggle code" %}




### Check programs
If you have just downloaded or cloned the template without any modification, if you run in the template folder the command `make`, and if no error reported, you can start using the template :+1:.
On the contrary, you should check the origin of the error, by first looking if some important applications for the template are present or not on your system.
You can check your installation 
```console 
$ make _check_programs
```
 and you will get an output like:


{%capture code%}
```console
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
{%endcapture code%}
{%include collapse.html content=code id='check_programs' label="Toggle outputs" %}



This also allows you to check if the proper applications is used

## The VARSDATA (default: `_data/variables.yml`)

## The METADATA (default: `_data/metadata.yml`)
