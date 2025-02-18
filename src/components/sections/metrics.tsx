export function MetricsSection() {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-4 md:grid-cols-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold">100k+</h3>
            <p className="text-sm text-muted-foreground">Developers</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">50M+</h3>
            <p className="text-sm text-muted-foreground">API Requests</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">99.9%</h3>
            <p className="text-sm text-muted-foreground">Uptime</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-sm text-muted-foreground">Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
