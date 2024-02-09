import Link from "next/link"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav>
                <ul>
                    <li>
                        <Link href="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/admin/address">address</Link>
                    </li>
                    <li>
                        <Link href="/admin/user">Users</Link>
                    </li>
                    <li>
                        <Link href="/admin/product">product</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </section>
    )
}