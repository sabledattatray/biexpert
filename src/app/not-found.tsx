import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background px-4 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-400 to-violet-500 tracking-tighter">
          404
        </h1>
      </div>
      
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
        Data Not Found
      </h2>
      
      <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
        It looks like the insight you're searching for has been moved or doesn't exist. Let's get you back to the dashboard.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Link href="/">
          <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
          </Button>
        </Link>
        <Link href="/services">
          <Button size="lg" variant="outline" className="h-12 px-8 font-bold border-border bg-muted/50 hover:bg-muted">
            <Search className="w-4 h-4 mr-2" /> Browse Services
          </Button>
        </Link>
      </div>
    </div>
  );
}
