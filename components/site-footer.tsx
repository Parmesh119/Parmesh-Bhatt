export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>&copy; {new Date().getFullYear()} Parmesh Bhatt.</p>
        <p className="text-center sm:text-right">Built with ❤️ by Parmesh Bhatt.</p>
      </div>
    </footer>
  )
}
