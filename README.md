# Ze Zhu — Personal Academic Website

Personal academic website (PI lab style), live target: https://zeevzhu.github.io

## Files

- `index.html` — the whole site in one self-contained file (all images inlined).
  This is the file GitHub Pages serves.

## Deploy (first time)

Site repo is `zeevzhu/zeevzhu.github.io`, under the GitHub account `zeevzhu`.
The user created the `zeevzhu` account new on 2026-11-12 (his `zezhuwur`
account stays separate).

1. On GitHub (logged in as `zeevzhu`), create a new **public** repository
   named exactly `zeevzhu.github.io`.
2. From this folder:
   ```bash
   git remote add origin git@github.com:zeevzhu/zeevzhu.github.io.git
   git push -u origin main
   ```
3. GitHub Pages serves a `<username>.github.io` repo automatically from the
   default branch — no extra Pages setting needed. The site is live at
   https://zeevzhu.github.io within a few minutes of the first push.

## Update later

Edit `index.html` (or rebuild the preview and re-export), commit, and push.
Changes go live a minute or two after each push.

## Notes

- The page footer contains a collapsed deployment guide for the site owner;
  remove that block before publishing if it should not be visible to visitors.
- Site title is currently "Zhu Research Group" — change in `index.html` if
  another lab/group name is preferred.
- Content is all in English; colors follow Purdue University branding
  (Old Gold + black); core theme 'Towards sustainable and smart aquaculture
  and its integrated systems'; Blue is Green is one participating project,
  not flagship.
