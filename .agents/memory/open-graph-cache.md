---
name: Open Graph image cache behavior
description: Cloudflare may serve a cached partial response before origin rules can act on an Open Graph image.
---

For Open Graph image delivery, an origin `.htaccess` rule that removes `Range` cannot change a `206` response already served from Cloudflare edge cache. Publish the origin fix first, then purge the exact image URL before validating crawler behavior.

**Why:** The development server and a cached CDN can independently return `206`, so local HTTP results do not prove Apache behavior.

**How to apply:** Test the built file and metadata locally, upload the cPanel package, purge the exact image cache, then retest the public URL with and without `Range`.