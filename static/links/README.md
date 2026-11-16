# /links/ — Digital Planners & Printables link-in-bio page

Live: https://alyammahiaysha96-dev.github.io/links/

Files: `static/links/index.html` (the whole page) and `static/links/img/` (images).
Images are stored as base64 text (`*.jpg.b64`) because they are committed through the
GitHub connector; the workflow step "Decode binary assets" turns them back into real
files at build time. Plain .jpg/.png files committed normally also work.

## Add a product
1. Add an image: `static/links/img/<slug>.jpg.b64` (base64 of a ~640px wide JPG, under ~120 KB).
2. In `static/links/index.html`, copy one `{ ... }` block in the `PRODUCTS` array and edit
   name, sub, price, link (Stripe payment link), img ("img/<slug>.jpg"), badge ("NEW" or "").
   Order in the array = order on the page. Also add a line to the `<noscript>` list.
3. Commit to `main`; the Hugo workflow redeploys in ~1 minute.
