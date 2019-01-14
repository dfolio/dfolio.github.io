---
title: "Quick-Start Guide"
permalink: /docs/pandoc-df-thesis/getting-started/
excerpt: "How to quickly install and setup pandoc-df-thesis-template."
group: Getting Started
date_created: 2018-12-02 18:33:18 +0100
toc: true
---

{%-include _links.md -%}

{: .note .info}
For detailled instruction for [the installation process]({% link _pandoc-df-thesis/03_installation.md %} "Installation steps") and for [the build process]({% link _pandoc-df-thesis/03_installation.md %} "build steps") go to their corresponding pages.


1. Install or check if the following pre-requires are available:
   - [Pandoc] for converting the [Markdown] to the output format of your choice.
     - Also recommended: [Pandoc-citeproc](https://github.com/jgm/pandoc-citeproc), [Pandoc-crossref](http://lierdakil.github.io/pandoc-crossref/), .
   - [PP] (**mandatory**) : A generic Preprocessor (with [Pandoc] in mind).
    [PP] allows to pre-process the [Markdown] sources, enabling **macros** (or commands) in the “modified” markdown sources.
   - A [LaTeX] distribution (e.g. [TeXLive](http://www.tug.org/texlive/), [MacTeX](https://tug.org/mactex/)…) to produce the PDF output.
     - Also recommended: [LuaLateX](http://www.luatex.org/), [BibLatex](https://github.com/plk/biblatex/) (with `biber`), [glossaries](http://www.ctan.org/pkg/glossaries/) packages

2. Optionally look for the following packages:
   - [Jekyll] that is used to generate `BUILD_HTML_FORMAT=htmlmulti` (e.g. for web-publishing)
   - [DocBook] toolchains: to build document from [DocBook] this template use [DocBook XSL](http://www.sagehill.net/book-description.html) and thus requires a [XSLT](https://www.w3.org/TR/xslt/) (v1) processing tools, such as [xsltproc](http://xmlsoft.org/XSLT/xsltproc.html).
   - [SASS] : to facilitate the writing of [CSS](https://www.w3schools.com/css/) for web-publications.
   Required if you want to compile CSS for `html`, `epub` and `docbook` target.
   - [SVGO](https://github.com/svg/svgo): SVG optimizer for images web-publications.
   - [Bootstrap](https://getbootstrap.com): Build responsive, mobile-first projects on the web.

3. Clone the [repository](https://github.com/dfolio/pandoc-df-thesis-template) on [Github](https://github.com/) in the proper place on your machine, e.g.:
   
   ```console
   $ git clone https://github.com/dfolio/pandoc-df-thesis-template.git
   ```
   Or alternatively you can download the compressed 
   [ZIP archive](https://github.com/dfolio/pandoc-df-thesis-template/zipball/master) 
   or [TAR archive](https://github.com/dfolio/pandoc-df-thesis-template/tarball/master) 
   of the repository, and extract it on the proper place.
   
   
4. Edit the `Makefile` (optional), and the `_data/variables.yml` (advised).

    >  **Note**: the basis metadata (title, authors, etc.) are defined in `_data/variables.yml`!
    {: class="note info" }

5. Once you have written some elements in the source files directory:  `_md/`, with your preferred markdown editor (e.g. [Atom](https://atom.io) (recommended), [Sublime](https://www.sublimetext.com/)…), from the root repository just try running:

   ```console
   $ make <target>
   ```

   where `<target>` is one of the above output dialect (i.e. `pdf`, `html`, `epub`…)

   ```console
   $ make help
   ```

   This command simply provides some _help_ on the other targets.

## Running the Makefile

Basically, most packages are automatically installed in the local folder with the appropriate package manager.
Namely,
`npm` (or `yarn`)for the JavaScript [Node.js] packages; and
`bundle` for the [Ruby] packages (e.g. for [HTML]-multi build with [Jekyll]).

However, the main dependencies should be installed manually.
Specifically: the [LaTeX] distribution, [Pandoc], [PP]

You can check your installation by running: `make _check_programs`, and check if there are any “**Not Found**” message.

> For any  troubleshooting read, and eventually [create an issue](https://github.com/dfolio/pandoc-df-thesis-template/issues) on [pandoc-df-thesis-template](https://github.com/dfolio/pandoc-df-thesis-template/) [GitHub] repository.
{: class="note important" }
