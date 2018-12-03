---
title: "Getting Started"
permalink: /docs/pandoc-df-thesis-template/getting-started/
excerpt: "How to quickly install and setup pandoc-df-thesis-template."
date_lastmod: 2018-11-25T22:21:33-05:00
toc: true
---


1. Install or check if the following prerequires are available:
   - A [LaTeX] distribution (e.g. [TeXLive](http://www.tug.org/texlive/), [MacTeX](https://tug.org/mactex/)…)
     - Also recommended: [LuaLateX](http://www.luatex.org/), [BibLatex](https://github.com/plk/biblatex/) (with biber), [glossaries](http://www.ctan.org/pkg/glossaries/) packages
   - [Pandoc] for converting the Markdown to the output format of your choice.
     - Also recommended: [Pandoc-citeproc](https://github.com/jgm/pandoc-citeproc), [Pandoc-crossref](http://lierdakil.github.io/pandoc-crossref/), .
   - [PP](**mandatory**) : A generic Preprocessor (with [Pandoc] in mind).
     - [PP] allows to preprocess the markdown sources, enabling **macros** (or commands) in the “modified” markdown sources.
     - Installation:
       1. Download and extract [pp.tgz](https://cdsoft.fr/pp/pp.tgz).
       2. Run `make` (or `make install`) in the `pp/` folder.
2. Optionally look for the following packages:
   
   - [Jekyll] that is used to generate `BUILD_HTML_FORMAT=htmlmulti` (e.g. for web-publishing)
   - [DocBook] toolchains: to build document from [DocBook] this templace use [DocBook XSL](http://www.sagehill.net/book-description.html) and thus requires a [XSLT](https://www.w3.org/TR/xslt/) (v1) processing tools, such as [xsltproc](http://xmlsoft.org/XSLT/xsltproc.html).
   - [SVGO](https://github.com/svg/svgo): SVG optimizer for images web-publications.
     - Basic installation: `npm install svgo`
   - [SASS]: to facilate the writting of [CSS](https://www.w3schools.com/css/) for web-publications.
     - Required if you want to compile CSS for `html`, `epub` and `docbook` target.
     - Basic Installation: `gem install sass`
   - [Bootstrap](https://getbootstrap.com): Build responsive, mobile-first projects on the web
     - Basic Installation: `npm install bootstrap`
3. Clone the [repository](https://github.com/dfolio/pandoc-df-thesis-template) on [Github](https://github.com/) in the proper place on your machine, e.g.:

   ```sh
   $ git clone https://github.com/dfolio/pandoc-df-thesis-template.git
   ```
   
4. Edit the `Makefile` (optional), and the `_data/variables.yml` (advised).

    >  **Note**: the basis metadata (title, authors,...) are defined in `_data/variables.yml`!
    {: class="note info" }

5. Once you have written some elements in the sources directory:  `_md/`, with your preferred markdown editor (e.g. [Atom](https://atom.io) (recommended), [Sublime](https://www.sublimetext.com/)…), from the root repository just try running:

   ```sh
   $ make <target>
   ```

   where `<target>` is one of the above output dialect (i.e. `pdf`, `html`, `epub`…)

   ```sh
   $ make help
   ```
   
   provides some _help_ on the other targets. 

## Running the Makefile

Basically, most packages are automatically installed in the local folder with the appropriate package manager.
Namelly, 
`npm` (or `yarn`)for the JavaScript [Node.js] packages; and
`bundle` for the [Ruby] packages (e.g. for [Jekyll] [HTML5]-multi build).

However, the main dependancies should be installed manually.
Specifically: the [LaTeX] distribution, [Pandoc], [PP]


[Pandoc]: http://pandoc.org
[LaTeX]: http://www.latex-project.org/
[HTML5]: http://www.w3.org/TR/html5/
[EPUB]: http://idpf.org/epub
[DocBook]: http://docbook.org/
[odt]: http://en.wikipedia.org/wiki/OpenDocument
[docx]: https://en.wikipedia.org/wiki/Office_Open_XML
[pp]: https://cdsoft.fr/pp/
[Jekyll]: https://jekyllrb.com/
[SASS]: https://github.com/sass/ruby-sass
[Ruby]: https:/www.ruby-lang.org
[Node.js]: https://nodejs.org
