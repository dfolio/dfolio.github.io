---
subcollection: pandoc-df-thesis-template
title: "Pandoc df thesis template"
permalink: /docs/pandoc-df-thesis-template/
excerpt: "D. Folio (df) template for writing a thesis dissertation using [Pandoc]"
date_created: 2018-12-02 22:09:07.1543784947 +0100
date_lastmod: 2018-12-02 22:17:02.1543785422 +0100
toc: false
---
{%-include _links.md -%}
The D. Folio (df) template for writing a thesis dissertation using [Pandoc], <http://pandoc.org>. Based on a “modified” markdown sources, this thesis template can deal with many outputs dialect basically supported by [Pandoc]:

- `pdf`: (**preferred**) output generated from (lua/pdf)[LaTeX];
- `html`: single (based solely on [Pandoc]) and multi (based on [Jekyll])  [HTML] file, e.g. for web-publications;
- `epub`: [EPUB] v3 ebook;
- `docbook5`: XML/[DocBook] (v5) and HTML chunked files;
- `odt`: [LibreOffice/OpenOffice OpenDocument][odt];
- `docx`: [Microsoft Word][docx];

> ## pandoc-df-thesis-template is not...
> This template is not intended to be a standalone direct use template. Some basic behaviors that you may not want have been defined and hard-coded in the `Makefile`. To *disable* some unwanted rules, it is necessary to know how to modify the `Makefile` properly.
{: class="note warning" }

## Contribute

Feel free (under the CC-By-4.0 terms) to modify/adapt this template for your own purpose (I will appreciate some feedbacks:+1:).
