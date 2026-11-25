# Talitha

Talitha makes research papers on African language technology readable in French and Swahili. This
repository holds the published site, https://talithapapers.com/, served by GitHub Pages.

- `en/`, `fr/`, `sw/`: paper pages per language, with "How to cite" (APA, BibTeX, RIS).
- `translations/<licence>/<paper>/`: plain-text translations with a LICENSE file per paper.
- `papers/<id>.json`, `graph.json`, `graph.csv`, `llms.txt`: machine-readable metadata and the citation graph.

Translations are made with open models and checked against the original by automated review; they
have not been reviewed by a human. The original paper is always the reference version.

Licences: each translation carries the licence of its original paper (see `LICENSE.md` and the
per-paper LICENSE files). The citation graph comes from OpenAlex (CC0). The site's design and code
are all rights reserved.

Corrections and removal requests: info@arktosailab.com. A project of Arktos AI Lab.
