import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Anasayfa - efemesudiyeli.dev ",
    description: "Efe Mesudiyeli kişisel portfolyo websitesi.",
};

export default function Home() {
    return (
        <main className="container flex flex-col gap-y-10 ">

            <h1>Privacy Policy </h1>



            Spyquest App respects your privacy and is committed to protecting it through this Privacy Policy. This policy explains what information we collect when you use our app, how we use that information, and how we protect it.


            <h3>1. Information We Collect</h3>


            Personal Information

            •	We do not collect any personal information (such as name, email address, etc.) from you while you use our app.

            Usage Information

            •	We may collect anonymous information about how the app is used. This includes data on in-app interactions and the frequency of feature usage.

            Device Information

            •	We may collect information about the device you use to access our app. This includes device type, operating system, unique device identifiers, and network information.

            <h3>2. Use of Information</h3>


            The information we collect may be used for the following purposes:

            •	To improve the performance and user experience of the app.
            •	To identify and fix issues.
            •	To develop and enhance app features.

            <h3>3. Sharing of Information</h3>


            We do not share your personal information with third parties. However, we may share anonymous information in the following situations:

            •	To comply with legal requirements.
            •	With our service providers to help maintain and improve the app.

            <h3>4. Ads</h3>


            We use Google Mobile Ads SDK to display ads in our app. Google may use anonymous information to serve ads that are relevant to users’ interests. For more information about Google’s privacy policy, please visit here.

            <h3>5. Data Security</h3>


            We take all necessary technical and administrative measures to protect your information. However, we cannot guarantee complete security of data transmitted over the internet.

            <h5>6. Children’s Privacy</h5>


            Our app is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information from our records.

            <h5>7. Changes</h5>


            This privacy policy may be updated from time to time. Any changes will be posted on this page. We recommend that you review this policy periodically to stay informed about how we are protecting your information.

            <h5>8. Contact</h5>


            If you have any questions about this privacy policy, please contact us at efemesudiyeli@icloud.com.

            This privacy policy is a general example and may need to be customized based on the specific features and data collection practices of your app. It is also recommended to consult with a legal professional before implementing this policy.

        </main >
    );
}
