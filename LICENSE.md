# Licences

This repository holds two kinds of material. No single licence covers the whole repository: check which
part you are using.

| Part | Where | Licence |
|---|---|---|
| Translations of research papers (and the original text shown on the paper pages) | `translations/<licence>/<paper>/`, and the text shown on the paper pages | the licence of each original paper (see 1) |
| The site | everything else: `static/` (style, scripts, icon), page design and templates, interface text (`site_design/i18n`), about pages, the name Talitha | © 2026 Ernst van Gassen, all rights reserved (see 2) |

## 1. Translations

Every translation is a derivative of one published paper. It is released under the **same licence as
that paper, never a more restrictive one**. The licence is shown on every paper page and in a LICENSE
file next to each paper's translations in `translations/`. The original text, which the page in the
paper's original language reproduces, stays under the licence its authors chose.

| Original paper | Translation | What you may do | Papers |
|---|---|---|---|
| CC BY 4.0 | CC BY 4.0 | Reuse allowed, including commercial, with attribution. | 14 |
| CC BY-NC 4.0 | CC BY-NC 4.0 | Reuse allowed with attribution, non-commercial only. | 26 |
| CC BY-SA 4.0 | CC BY-SA 4.0 | Reuse allowed with attribution; share adaptations alike. | 24 |

**Authorship.** Copyright in each original paper stays with its authors. The translations are by
Ernst van Gassen (Arktos AI Lab), 2026. To the extent a translation carries rights of its own, those rights
are held by Ernst van Gassen and licensed under the same terms as the original paper.

**What to reuse.** Take the plain-text files in `translations/<licence>/<paper>/`. They contain only the
translation and the source text; the site's design is not part of them and is not licensed.

**How to credit a translation.** Name both the original and the translation, link the licence, and say
if you changed anything. Every paper page has a ready-made citation (plain text, BibTeX and RIS) under
"How to cite", for the original and for the translation. For example:

> Derwin Ngomane, Rooweither Mabuya, Jade Abbott, Vukosi Marivate. 2023. "Unsupervised Cross-lingual
> Word Embedding Representation for English-isiZulu." RAIL 2023. French translation by Ernst van Gassen (Arktos AI Lab),
> Talitha, 2026. CC BY 4.0.

**Non-commercial papers (CC BY-NC 4.0, CC BY-NC-SA 4.0).** Their translations may not be used commercially and may not
be merged into a dataset or product released under a more permissive licence.

**Share-alike papers (CC BY-SA 4.0, CC BY-NC-SA 4.0).** Anything you build from their translations
must be shared under the same licence.

**Public-domain papers (CC0 1.0).** Their translations are also dedicated to the public domain under
CC0 1.0; credit is appreciated but not required.

**What was changed.** The text was extracted from each PDF, split into sentences and translated
with open models (MADLAD-400, OPUS-MT, Mistral Small, Qwen, DeepSeek); one candidate per sentence was
chosen by automatic quality estimation and checks. An automated review compared the translations with the
original, and sentences with errors were replaced by another open-model translation. The translations have
not been reviewed by a human. Figures,
tables and layout are not reproduced exactly. The original paper is the reference version. The original
authors have not reviewed or endorsed these translations.

**Removal.** Authors who would rather not have their paper translated can write to info@arktosailab.com and
it will be taken down.

## 2. The site: all rights reserved

Copyright (c) 2026 Ernst van Gassen. All rights reserved.

The site's design and code (`static/style.css`, `static/app.js`, the page templates and markup), its
interface and about-page text, the name "Talitha" and the icon are proprietary. They are not covered by
any open-source or Creative Commons licence and may not be copied, adapted, redistributed or reused
without written permission. Quoting a short passage with credit, as the law allows, is fine.

The translation pipeline that produced the translations is a separate work under the MIT licence and
is not part of this repository.
