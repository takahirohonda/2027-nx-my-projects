# Creating a static blog site with next.js

https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation


To make it static, we can just add `output = "export"`

https://nextjs.org/docs/app/api-reference/config/next-config-js/output

## To check static site

Do one of these. We need to serve the out folder as the web root. Then we can check to see if the static site is working or not.

```bash
npx serve apps/ani-son/out
npx http-server apps/ani-son/out
python3 -m http.server 8080 --directory apps/ani-son/out
```
