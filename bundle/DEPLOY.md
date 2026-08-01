# Deploying this site

Everything is static — no build step, no dependencies beyond Google Fonts.

## Files

    index.html                     the whole site (HTML + CSS + JS inline)
    images/portrait.png            hero portrait
    images/logo-freiheit.png       work entries
    images/logo-ist.png            work + education entries
    images/logo-ntnu.png           education entry
    assets/curriculum-vitae.pdf    linked from the header and contact section

## Publishing to SimaoGato.github.io

From a clean checkout of the repo:

    # 1. remove the old multi-page site
    git rm -r css js icons resume.html portfolio.html musings.html contact.html

    # 2. drop in the new files (keep your existing assets/ and images/ folders)
    cp -r /path/to/bundle/. .

    # 3. commit
    git add -A
    git commit -m "Rebuild personal site"
    git push

GitHub Pages will redeploy in about a minute.

## Notes

- The old nav linked to `resume.html`, `portfolio.html`, `musings.html` and
  `contact.html`. Everything worth keeping from those pages is now on the single
  page, except the "Musings" section, which only contained placeholder text.
- `assets/curriculum-vitae.pdf` here is your August 2026 CV. If you keep the old
  filename, the links in `index.html` need no changes.
- Theme choice persists in `localStorage` under the key `theme`, and defaults to
  the visitor's system preference on first visit.
