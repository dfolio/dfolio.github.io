---
subcollection: pandoc-df-thesis
title: "Pandoc df thesis template"
permalink: /docs/pandoc-df-thesis/
excerpt: "D. Folio (df) template for writing a thesis dissertation using Pandoc"
version: 1.4.1
date_created: 2018-12-02T22:09:07 +0100
last_modified_at: 2018-12-05T09:17:34 +0100
toc: false
share: true
collection_details: true
github: "https://github.com/dfolio/pandoc-df-thesis-template"
travis: https://travis-ci.com/dfolio/dfolio.github.io.svg?branch=master
comments: 
  gh_comment_id: 2

popover: false
---

{%-include _links.md -%}


The D. Folio (df) template for writing a thesis dissertation using [Pandoc], <http://pandoc.org>. 

Based on the “_(df)modified_” [Markdown] sources, this dissertation template can deal with many outputs dialect basically supported by [Pandoc]:

- `pdf`: (**preferred**) output generated from (lua/pdf)[LaTeX];
- `html`: single (based solely on [Pandoc]) and multi (based on [Jekyll]) [HTML] file, e.g. for web-publications;
- `epub`: [EPUB] v3 ebook;
- `docbook5`: XML/[DocBook] (v5) and HTML chunked files (**limited support**);
- `odt`: [LibreOffice/OpenOffice OpenDocument][odt];
- `docx`: [Microsoft Word][docx];

With the use of a full featured `Makefile` all the build process is performed automatically, obviously once it is [configured properly]({% link _pandoc-df-thesis/04_configuration.md %}#Makefile "How to configure the Makefile")!


{: class="note disclaimer" }
> This template is not intended to be a _standalone direct use_ template:
> - Some packages (e.g. [Pandoc], [PP], [LaTeX]...) must be [installed]({% link _pandoc-df-thesis/03_installation.md %} "Installation steps") prior to take advantage of this template.
> - Some basic behaviors that you may not want have been defined and hard-coded in the `Makefile`. To _disable_ some unwanted rules, it is necessary to know how to modify the `Makefile` properly.
> - From now, it is difficult to consider using this template without the `Makefile`!!!

At this time, this template is designed for mainly Linux distribution.
Basically, with some few efforts this template can be used on another operating system (e.g. Windows and MacOS)... this is planed in future prospects (when I've got time!).
{: class="note warning" }

For any troubleshooting read, and (eventually) [create an issue](https://github.com/dfolio/pandoc-df-thesis/issues) on [pandoc-df-thesis](https://github.com/dfolio/pandoc-df-thesis/) [GitHub] repository.
{: class="note disclaimer" }

## Contribute

Feel free (under the [CC-By-4.0 terms](https://github.com/dfolio/pandoc-df-thesis-template/blob/master/LICENSE)) to modify/adapt this template for your own purpose (I will appreciate some feedback :+1:).

