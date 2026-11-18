# Installation issue

**18/11/2026 - Cannot install "@nx/node": "24.0.6"**

I couldn't install neither `@nx/node` nor `@nx/next` because the Aikido security policy blocks cacheable download.

These are blocked:

```bash
@cacheable/memory 2.2.0
@cacheable/utils 2.5.0
@cacheable/utils 2.5.0
@cacheable/memory 2.2.0
```

These packages are blocked by Aikido policy, following the August 2026 keyv and cacheable supply chain attack (https://cycode.com/blog/keyv-cacheable-npm-worm-ai-coding-agents/).


According to the websites, these are the safe rollback target (https://cycode.com/blog/keyv-cacheable-npm-worm-ai-coding-agents/). So maybe policy isn't accurate. 


