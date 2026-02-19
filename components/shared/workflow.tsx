'use client';

export function Workflow() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight">
            It's all about my <em className="text-primary">design process</em>
          </h1>
        </div>
      </section>

      {/* Process Cards Section */}
      <section className="py-12 md:py-16 px-8 md:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Learn Card */}
            <div className="border border-border/50 p-6 md:p-8 hover:border-primary/50 transition-colors">
              <div className="mb-6">
                <span className="text-primary text-sm">A.</span>
                <h2 className="text-4xl md:text-5xl mt-2">Learn</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl mb-3">Briefing</h3>
                  <ul className="space-y-1.5 text-sm text-foreground/80">
                    <li>• Research</li>
                    <li>• Project Goals</li>
                    <li>• Target Audience</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg md:text-xl mb-3">Market</h3>
                  <ul className="space-y-1.5 text-sm text-foreground/80">
                    <li>• Problem</li>
                    <li>• User Needs</li>
                    <li>• Product Objectives</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Think Card */}
            <div className="border border-border/50 p-6 md:p-8 hover:border-primary/50 transition-colors">
              <div className="mb-6">
                <span className="text-primary text-sm">B.</span>
                <h2 className="text-4xl md:text-5xl mt-2">Think</h2>
              </div>
              
              <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                My ultimate goal with every project is to come up with a solution-based design approach 
                to help my clients solve real cases and achieve business needs.
              </p>
            </div>

            {/* Create Card */}
            <div className="border border-border/50 p-6 md:p-8 hover:border-primary/50 transition-colors md:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <span className="text-primary text-sm">C.</span>
                <h2 className="text-4xl md:text-5xl mt-2">Create</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl mb-3">Visual strategy</h3>
                  <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                    Every digital product must be aesthetically appealing, functional, robust, distinctive and memorable.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg md:text-xl mb-3">Stages</h3>
                  <div className="flex flex-wrap gap-2">
                    {['UX architecture', 'Visual concepts', 'Interactions', 'Development', 'Testing'].map((item) => (
                      <span key={item} className="px-3 py-1 border border-border/50 rounded-none text-xs text-foreground/80">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-24 md:py-32 px-8 md:px-16 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl mb-8">
            Long-lasting Collaboration
          </h2>
          
          <p className="text-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
            I truly believe in the power of a strong business relationship and years-long collaboration. 
            Success is not a 1-day phenomenon it takes a lot of time and joint effort.
          </p>
        </div>
      </section>
    </div>
  );
}
