# WECEHacks 2027 Website

Informational website for WECEHacks 2027, the Women in Electrical & Computer Engineering hackathon at UIUC.
It carries over the treasure-hunt theme and layout of the [2026 site](https://github.com/Wece-Hacks/wece-hacks.github.io).

Plain HTML/CSS/JS — no build step. Open `index.html` in a browser, or serve the folder:

```sh
python -m http.server 8000   # then visit http://localhost:8000
```

## Structure

```
index.html, index.css      Home (hero, countdown, about, sponsors)
pages/prizes.html          Prizes
pages/schedule.html        Schedule
pages/faq.html             FAQ
pages/ourteam.html         Our Team
css/common.css             Header, fonts, colors shared by every page
js/main.js                 Header scroll effect, active nav link, countdown
images/                    Backgrounds, page title art, team & prize photos
```

## Before launch

Search for `TODO` to find everything that still needs 2027 info:

- Event date: `EVENT_START` in `js/main.js` (turns on the countdown) and the date heading in `index.html`
- Registration link in `index.html`
- Sponsor logos in `index.html`
- 2027 prizes and schedule (pages currently show 2026's with a notice)
- 2027 team roster and photos
- Room number and contact info in the FAQ
