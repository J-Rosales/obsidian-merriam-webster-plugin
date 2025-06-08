declare module 'obsidian' {
  interface MenuItem {
    setSubmenu(sub: Menu): this;
  }
}
export {};
