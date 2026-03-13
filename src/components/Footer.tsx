import { Activity } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-muted bg-background py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-primary p-2 rounded-xl text-primary-foreground">
                                <Activity className="h-5 w-5" strokeWidth={2.5} />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-primary-dark">fills health</span>
                        </Link>
                        <p className="text-muted-foreground max-w-xs mb-6">
                            Modern, serious, and elegant home health software designed to free nurses from charting so they can focus on care.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} fills health. All rights reserved.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Platform</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">OASIS-E1 Forms</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">EVV Compliance</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Smart Scheduling</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Clinical Notes</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
