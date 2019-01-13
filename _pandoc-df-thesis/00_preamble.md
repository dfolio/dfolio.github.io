---
title: "Preamble"
permalink: /docs/pandoc-df-thesis/preamble/
excerpt: "The motivation behind pandoc-df-thesis-template."
group: Getting Started
date_created: 2018-12-02 17:17:49 +0100
date_lastmod: 2018-12-11 13:54:35.395434002 +0100
toc: true
comments: 
  gh_comment_id: 3
---

{%-include _links.md -%}

The pandoc-df-thesis template relies on some basic concept that may be understanding prior to use it efficiently. First, the main input markup consider the well-known and widely use [Markdown]. [Markdown] sources are used as inputs to [Pandoc] to convert the dissertation to different formats (eg. PDF, [HTML], [EPUB], [docx], [odt]…). To do so, pandoc-df-thesis use a **Makefile** and a `make` build workflow.  The proposed workflow allows to:
- improve the basic [Markdown] markup to address the add of macros/command/functions with a particular attention to support acronyms/glossaries (managed with [PP])
- manage the figures/images with the proper format for the various output target,
- discover/manage the bibliography files,
- try to build/generate only necessaries files thanks to the dependencies management from the `make` build process, etc.

Not convinced?? See below some (few) motivations on [why migrating](#markdown) to [Markdown] and using  [Makefile](#makefile)

{: .note .info }
> The motivations shown hereafter highlight my own point of view.
> I don't intend here to perform a deep review of [Markdown] or the Make build process, just to outline some pros./cons. of them.


## Migration to Markdown {#markdown}

Commonly, scientific papers, thesis and long dissertations are mainly written with [LaTeX]. Writing a manuscript in [LaTeX] basically produces high-quality documents, beautiful equations, and have a powerful bibliography management...
However, it’s not very user-friendly. Actually, some good knowledge of [LaTeX] is usually mandatory to overcome some compilations issues, or to find the proper way to incorporate what the writer has in mind.
Recently I’ve started considering another text markup: **[Markdown]**.
Indeed, I find it more readable and intuitive, and it comes to be widespread.
Furthermore, [Markdown] still has [LaTeX] equation support, and some gateways exist between the two. From my point of view, [Markdown] is a good compromise between simple text and advanced markup. So how about writing an entire dissertation in [Markdown]?


### Why write a thesis/dissertation in Markdown?

{: class="blockquote" cite="https://daringfireball.net/projects/markdown/"}
> Markdown is a text-to-HTML conversion tool for web writers. Markdown allows 
> you to write using an easy-to-read, easy-to-write plain text format, then 
> convert it to structurally valid XHTML (or HTML).
> <footer class="blockquote-footer"> By <cite>[John Gruber][Markdown]</cite>, 
> author of [Markdown] <[daringfireball.net/projects/markdown/][Markdown]>.

[Markdown] is a friendly lightweight markup language with plain text format that can be easily converted to [HTML], but also to a bunch of other formats like [LaTeX], PDF, [MS Word][docx], [OpenDocument][odt], [EPUB] (see [Pandoc] documentation for the numerous output dialects).
You'll enjoy working in [Markdown] because:
- it is a clean, plain-text format, editable with a simple text editor...
- ...but you can use [LaTeX] and/or [HTML] markup when you need it (for example, in laying out mathematical formula, for creating complex table...).
- it doesn't suffer from the freezes and crashes that some of us experience when working with large, image-heavy [MS Word][docx], [OpenDocument][odt] manuscripts.
- it automatically handles the table of contents, bibliography etc. with [Pandoc].
- comments, drafts of text, etc. can be added to the document by wrapping them in &lt;!--  --&gt;
- it works well with Git, so keeping backups is straightforward. Just commit the changes and then push them to your repository.
- there is no lock-in. If you decide that [Markdown] isn't for you, then just output to Word, or whatever, and continue working in the new format.
- you may take some times to fix some formatting issues (e.g. to place the figure exactly where you want and not on the fµ@$ing page!)


### ... any drawbacks with Markdown?

There are some minor annoyances:
- if you haven't worked with [Markdown] before then you'll find yourself referring to the style-guide fairly often at first (as for any new language).
- there are some issues to try to do exactly what you are used to doing with [LaTeX]. For instance, its remains some issues with the short caption and the list-of-(tables/figures);
- the style documents in this framework could be improved. The PDF, [HTML] and [EPUB] outputs are acceptable with a proper style/template; but [MS Word][docx] and [OpenDocument][odt] needs work if you plan to output to these formats.
- Glossaries/Nomenclatures/Index are not natively supported.
- Command/Macros/Functions definitions are not natively supported
- ... and may be other to fit your will ...

These latter drawback are the main motivation for me to try to "extend" the basic [Markdown] text formatting to fit my will...

## Why I still use Makefile?  {#makefile}

**Make** is a build automation tool created in 1976, designed to solve dependency problems of the build process. It was originally used to get compiled files from source code, for instance for C language.
**Make** reads a descriptive file the `Makefile`, to build a target, executing some commands, and depending on some prerequisites.
The `Makefile` declares the **rules** for producing files and dependencies between files. 

{: class="blockquote" cite="https://en.wikipedia.org/wiki/Make_(software)"}
> In software development, Make is a build automation tool that automatically 
> builds executable programs and libraries from source code by reading files 
> called Makefiles which specify how to derive the target program.
> Though integrated development environments and language-specific compiler
> features can also be used to manage a build process, Make remains widely used,
> especially in Unix and Unix-like operating systems.
> 
> Besides building programs, Make can be used to manage any project where some
> files must be updated automatically from others whenever the others change.
> <footer class="blockquote-footer"> From  <cite><i class="fab fa-wikipedia-w"></i> 
> [Wikipedia](https://en.wikipedia.org/wiki/Make_(software))</cite>.

Make is a widely used tool for automating software builds. 
It is the de facto standard build tool on *nix. 
It is less popular among Windows developers, but even there it has spawned imitators such as Microsoft’s `nmake`.
Despite its popularity, Make is a deeply flawed tool. 

### What’s wrong with make!?

Make‘s reliability is poor, especially for larger or incremental builds.
Sometimes a build fails with a strange error and you need to resort to `make clean`, to fix things.
Sometimes it appears to succeed, but something wasn’t rebuilt and you’ll get mysterious crashes, etc. 
Such strange issues commonly rely to the difficulty to fully handle the dependencies when complex rules are defined.
Parallely, you must tell make all of the dependencies of each target. If you don’t tell it about a dependency, it won’t rebuild the target when that dependency changes.
For instance, some change/modification of a used media (let say an image) may also change the document’s output. It’s challenging to list all these dependencies and keep them up to date.

Make determines whether a target is out of date by comparing its last-modified timestamp against those of its dependencies. It does not examine the contents of the files (aka does not perform a `diff`), only their **timestamps**.
But, usually file system timestamps are not especially reliable, particularly in a networked environment. 

### Make remains useful!

But...
-  How to handle efficiently dependencies? 
-  How to perform advanced build rules workflow?
-  How to simply build/generate/install the necessaries stuff?
-  How to automate the build process?

Since the last decade many programming langage (Ruby, Haskell, lua, etc.) with sometimes their own build 

- A comparison of build tools (Make, Rake, Ant, Gradle): <http://hyperpolyglot.org/build>

