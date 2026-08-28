# editor-view

Оболочечно-независимый **редактор** Markdown. View id: **`editor`**.

Открытие / сохранение через `@fest-lib/lure/markdown-assets` (`pickMarkdownFile`, `saveMarkdownBlob`). Handoff между SKU — `stashSkuHandoff` / `takeSkuHandoff`.

Это не viewer: рендер и печать живут в [`markdown-view`](../markdown-view/).

## Запуск

```bash
cd modules/views/editor-view
npm run dev
npm run build
```

```ts
import { EditorView } from "editor-view/src";
```
