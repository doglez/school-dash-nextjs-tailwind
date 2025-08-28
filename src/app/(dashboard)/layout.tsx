export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="h-screen flex">
            {/* LEFT */}
            <div className="w-1/6">L</div>
            {/* RIGHT */}
            <div className="w-5/6">R</div>
        </section>
    );
}
