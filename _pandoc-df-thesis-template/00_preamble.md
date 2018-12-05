---
title: "Preamble"
permalink: /docs/pandoc-df-thesis-template/preamble/
excerpt: "The motivation behind pandoc-df-thesis-template."
date_lastmod: 2018-11-25T22:21:33-05:00
toc: true
date_created: 2018-12-02 09:32:34 +0100
date_lastmod: 2018-12-05 13:42:21.1544013741 +0100
toc: true
---

{%-include _links.md -%}

Commonly, scientific papers, thesis and long dissertations are mainly written with [LaTeX]. Writing a manuscript in [LaTeX] basically produces high-quality documents, beautiful equations, and have a powerful bibliography management...
However, it’s not very user-friendly. Actually, some good knowledge of [LaTeX] is usually mandatory to overcome some compilations issues, or to find the proper way to incorporate what the writer has in mind.
Recently I’ve started considering another text markup: **[Markdown]**.
Indeed, I find it more readable and intuitive, and it comes to be widespread.
Furthermore, [Markdown] still has [LaTeX] equation support, and some gateways exist between the two. From my point of view, [Markdown] is a good compromise between simple text and advanced markup. So how about writing an entire dissertation in [Markdown]?


## Why write a thesis/dissertation in Markdown?

> Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).
> <footer class="blockquote-footer"> By <cite>[John Gruber][Markdown]</cite>, author of [Markdown] <[daringfireball.net/projects/markdown/][Markdown]>.
{: class="blockquote" cite="https://daringfireball.net/projects/markdown/"}

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


## ... any drawbacks with Markdown?

There are some minor annoyances:
- if you haven't worked with [Markdown] before then you'll find yourself referring to the style-guide fairly often at first (as for any new language).
- there are some issues to try to do exactly what you are used to doing with [LaTeX]. For instance, its remains some issues with the short caption and the list-of-(tables/figures);
- the style documents in this framework could be improved. The PDF, [HTML] and [EPUB] outputs are acceptable with a proper style/template; but [MS Word][docx] and [OpenDocument][odt] needs work if you plan to output to these formats.
- Glossaries/Nomenclatures/Index are not natively supported.
- Command/Macros/Functions definitions are not natively supported
- ... and may be other to fit your will ...

These latter drawback are the main motivation for me to try to "extend" the basic [Markdown] text formatting to fit my will...
