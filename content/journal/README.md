# Journal entries

The Journal (`/journal`) mixes three kinds of entries, sorted newest first:

| Type | Where it lives |
| --- | --- |
| Original articles | `content/posts/*.mdx` (unchanged) |
| External articles | `content/journal/*.mdx` with `type: 'article'` |
| Social posts | `content/journal/*.mdx` with `type: 'social'` |

The file name becomes the entry's id. Anything written below the frontmatter is
an optional personal comment (MDX), shown under the entry.

## External article

```mdx
---
type: 'article'
title: 'Article title'
author: 'Author Name'
source: 'example.com'               # optional, publication name
url: 'https://example.com/post'
publishDate: '2026-10-28'
excerpt: 'One or two sentences.'    # optional, clamped to 2 lines
image: '/journal/author.jpg'        # optional avatar or thumbnail (put files in public/journal/)
---

Why I found this interesting.
```

## Social post

```mdx
---
type: 'social'
source: 'x'                         # x, bluesky, mastodon (labels live in content/index.ts)
author: 'Author Name'
handle: 'handle'                    # optional, without the @
url: 'https://x.com/handle/status/123'
publishDate: '2026-11-01'
text: 'The post text. Long posts are clamped to 3 lines.'
image: '/journal/author.jpg'        # optional avatar
---
```

To add another social network, add its key and label to
`content.page.journal.socialSources` in `content/index.ts`.

## RSS / Atom feeds

To show the latest posts from developers you follow, add their feed to
`content.page.journal.feeds` in `content/index.ts`. Feeds are fetched at build
time and refreshed at most once a day. A feed that fails to load is skipped, and
a curated entry with the same URL takes priority over the feed version.
