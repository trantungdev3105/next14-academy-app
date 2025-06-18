# Next/Link

- Dùng để chuyển trang trong NextJS mà không bị reload.
- Thuộc tính `href` có thể nhận chuỗi hoặc object:
  ```js
  { pathname: '', query: {} }
  ```

---

# Router

## Catch-all Segments

- Cho phép bắt tất cả các route con bằng cách sử dụng `[...slug]`
- Ví dụ: `app/blog/[...slug]/page.tsx` sẽ match với:
  - `/blog/2023/01/01`
  - `/blog/categories/nextjs`
  - `/blog/a/b/c/d`
- Có thể truy cập các segment thông qua `params.slug` (sẽ là một mảng)

```tsx
// app/blog/[...slug]/page.tsx
export default function BlogPage({ params }: { params: { slug: string[] } }) {
  return <div>Blog segments: {params.slug.join('/')}</div>
}
```

## Optional Catch-all Segments

- Tương tự như Catch-all nhưng cho phép route gốc cũng match được
- Sử dụng cú pháp `[[...slug]]` (hai cặp dấu ngoặc vuông)
- Ví dụ: `app/shop/[[...slug]]/page.tsx` sẽ match với:
  - `/shop` (route gốc)
  - `/shop/categories`
  - `/shop/categories/electronics`
- `params.slug` sẽ là `undefined` khi truy cập route gốc

```tsx
// app/shop/[[...slug]]/page.tsx
export default function ShopPage({ params }: { params: { slug?: string[] } }) {
  if (!params.slug) {
    return <div>Shop Homepage</div>
  }
  return <div>Shop segments: {params.slug.join('/')}</div>
}
```

---
