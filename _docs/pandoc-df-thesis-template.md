---
subcollection: pandoc-df-thesis-template
title: "Pandoc df thesis template"
permalink: /docs/pandoc-df-thesis-template/
excerpt: "D. Folio (df) template for writing a thesis dissertation using Pandoc"
date_created: 2018-12-02 22:09:07.1543784947 +0100
date_lastmod: 2018-12-02 22:17:02.1543785422 +0100
toc: false
share: true
---
{%-include _links.md -%}
The D. Folio (df) template for writing a thesis dissertation using [Pandoc], <http://pandoc.org>. Based on a “modified” markdown sources, this thesis template can deal with many outputs dialect basically supported by [Pandoc]:

- `pdf`: (**preferred**) output generated from (lua/pdf)[LaTeX];
- `html`: single (based solely on [Pandoc]) and multi (based on [Jekyll]) [HTML] file, e.g. for web-publications;
- `epub`: [EPUB] v3 ebook;
- `docbook5`: XML/[DocBook](v5) and HTML chunked files;
- `odt`: [LibreOffice/OpenOffice OpenDocument][odt];
- `docx`: [Microsoft Word][docx];

> This template is not intended to be a standalone direct use template. Some basic behaviors that you may not want have been defined and hard-coded in the `Makefile`. To _disable_ some unwanted rules, it is necessary to know how to modify the `Makefile` properly.
> {: class="note warning" }

> At this time, this template is designed for mainly linux distribution.
> Basically, with some few efforts this template can be used on another operating system (e.g. Windows and MacOS)... this is planed in future prospects (when I've got time!).
> {: class="note warning" }

> For any troubleshooting read, and (eventually) [create an issue](https://github.com/dfolio/pandoc-df-thesis-template/issues) on [pandoc-df-thesis-template](https://github.com/dfolio/pandoc-df-thesis-template/) [GitHub] repository.
> {: class="note important" }

## Contribute

Feel free (under the [CC-By-4.0 terms](https://github.com/dfolio/pandoc-df-thesis-template/blob/master/LICENSE)) to modify/adapt this template for your own purpose (I will appreciate some feedback :+1:).
