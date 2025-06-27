import { BuilderComponent, builder } from '@builder.io/react';

// Replace with your Public API Key.
builder.init(import.meta.env.VITE_PUBLIC_BUILDER_KEY!);

export default function Page() {
  return <BuilderComponent model="symbol" />
}