import { Activity, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-muted bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-xl">
                        <Activity className="h-6 w-6 text-primary" strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-primary-dark">fills health</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link>
                    <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Agencies</Link>
                    <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
                        Log in
                    </Link>
                    <Link
                        href="/demo"
                        className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
                    >
                        Request Demo
                    </Link>
                </div>

                <button className="md:hidden p-2 text-muted-foreground">
                    <Menu className="h-6 w-6" />
                </button>
            </div>
        </header>
    );
}
