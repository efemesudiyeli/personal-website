import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - WakePoint",
    description: "WakePoint mobile app privacy policy.",
};

export default function PrivacyPolicy() {
    return (
        <main className="container flex flex-col gap-y-10 py-10">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <p>
                WakePoint respects your privacy and is committed to protecting it through this Privacy Policy. This document explains what information we collect when you use our app, how we use it, and how we keep it secure.
            </p>

            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <ol className="list-disc pl-6 space-y-4">
                <li>
                    <h3 className="font-bold">Personal Information</h3>
                    <p>We do not collect any personal information (such as your name, email address, or contact details) while you use WakePoint.</p>
                </li>
                <li>
                    <h3 className="font-bold">Location Information</h3>
                    <p>WakePoint uses your location to function as a location-based alarm. However, your location data is only stored and processed locally on your device. We do not store, transmit, or access this data remotely.</p>
                </li>
                <li>
                    <h3 className="font-bold">Usage Information</h3>
                    <p>We may collect anonymous usage statistics such as app open times, alarm usage frequency, and error logs. This data is used solely for improving app performance and user experience.</p>
                </li>
                <li>
                    <h3 className="font-bold">Device Information</h3>
                    <p>We may collect non-personal technical information about your device such as device model, operating system version, and system language to ensure compatibility and stability.</p>
                </li>
            </ol>

            <h2 className="text-2xl font-semibold">2. Use of Information</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>To improve app performance and user experience.</li>
                <li>To diagnose and fix technical issues.</li>
                <li>To enhance existing features and develop new ones.</li>
            </ul>

            <h2 className="text-2xl font-semibold">3. Sharing of Information</h2>
            <p>We do not share your personal or location information with third parties. However, we may share anonymous, non-identifiable information in the following cases:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li>To comply with legal obligations.</li>
                <li>With trusted service providers to help maintain or improve the app.</li>
            </ul>

            <h2 className="text-2xl font-semibold">4. Ads</h2>
            <p>WakePoint uses Google AdMob to display banner advertisements within the app. These ads are served based on anonymous identifiers and may be tailored to your general interests. We do not collect or share any personal or location data for advertising purposes.

                For more details on how Google uses data in its advertising services, please refer to Google’s Privacy & Terms.</p>

            <h2 className="text-2xl font-semibold">5. Data Security</h2>
            <p>We implement appropriate technical and administrative safeguards to protect your information. However, please be aware that no method of data transmission over the internet or electronic storage is completely secure.</p>

            <h2 className="text-2xl font-semibold">6. Children’s Privacy</h2>
            <p>WakePoint is not designed specifically for children but can be safely used by individuals aged 4 and above, as indicated by its App Store rating. We do not knowingly collect personal information from users, including children. Since the app does not require sign-up or collect any personal data, it can be safely used by all age groups under parental guidance where appropriate.</p>

            <h2 className="text-2xl font-semibold">7. Changes</h2>
            <p>We may update this Privacy Policy from time to time. All changes will be posted on this page with the updated date. We recommend reviewing this page periodically to stay informed.</p>

            <h2 className="text-2xl font-semibold">8. Contact</h2>
            <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at <a href="mailto:efemesudiyeli@icloud.com" className="text-blue-600 underline">efemesudiyeli@icloud.com</a>.</p>
        </main>
    );
}
