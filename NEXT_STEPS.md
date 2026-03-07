# Steps to Deploy Your Portfolio — shad.me

## 1. Buy the Domain

Purchase `shad.me` from a domain registrar (Namecheap, Cloudflare, Google Domains, etc.)

## 2. Create the GitHub Repository

- Go to https://github.com/new
- Name the repo: `whomydee.github.io`
- Set it to **Public**
- Do NOT initialize with README (we already have files)

## 3. Initialize Git and Push

```bash
cd ~/Desktop/personal/projects/personal-portfolio
git init
git add -A
git commit -m "Initial portfolio site"
git remote add origin git@github.com:whomydee/whomydee.github.io.git
git push -u origin main
```

## 4. Enable GitHub Pages

- Go to your repo on GitHub: Settings > Pages
- Under "Build and deployment", set Source to **GitHub Actions**
- The al-folio theme includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will build and deploy automatically on push

## 5. Configure Custom Domain DNS

At your domain registrar, add these DNS records for `shad.me`:

| Type  | Name  | Value                  |
|-------|-------|------------------------|
| A     | @     | 185.199.108.153        |
| A     | @     | 185.199.109.153        |
| A     | @     | 185.199.110.153        |
| A     | @     | 185.199.111.153        |
| CNAME | www   | whomydee.github.io     |

## 6. Set Custom Domain on GitHub

- Go to your repo: Settings > Pages
- Under "Custom domain", enter `shad.me`
- Check "Enforce HTTPS" (may take a few minutes to provision SSL)
- A `CNAME` file already exists in the repo with `shad.me`

## 7. Wait for DNS Propagation

DNS changes can take up to 24-48 hours, but usually work within 30 minutes. You can check status at https://dnschecker.org

## 8. Verify

- Visit https://shad.me — your portfolio should be live
- Test all pages: About, Projects, Blog, CV
- Test dark/light mode toggle
- Test on mobile

---

## Running Locally (for future edits)

```bash
export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/4.0.0/bin:$PATH"
bundle exec jekyll serve --livereload
```

Site will be at http://127.0.0.1:4000

## Optional Enhancements (Later)

- Add project images specific to your work (architecture diagrams, screenshots)
- Write blog posts directly in `_posts/` (your Medium posts already sync via RSS)
- Add Google Analytics ID in `_config.yml` for tracking visitors
- Set up Giscus for blog post comments (requires GitHub Discussions)
- Add a favicon image in `assets/img/`
