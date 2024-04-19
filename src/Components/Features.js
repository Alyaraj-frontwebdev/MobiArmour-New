import WebScan from '../Assets/Frame 4 Login.png'
import OtpSecurity from '../Assets/Frame 120.png'
import OnlineAcc from '../Assets/OnlineAccounts.jpeg'
import QrScan from '../Assets/QrScanning.png'
import LeakedPassword from '../Assets/LeakPassword.png'
import AppAnalysis from '../Assets/AppAnalysis.png'
import Wifi from '../Assets/WifiSecurity.png'
import WhatsApp from '../Assets/WhatsApp.png'
import Gmail from '../Assets/Gmail.png'
import Facebook from '../Assets/facebook.png'
import Insta from '../Assets/pngtree-instagram-icon-png-image_6315974.png'

function Features() {
    return (
        <div className="featuresContainer">
            <div id="featuresHeading">
                <h1>Features</h1>
            </div>
            <div id="WebsiteScanning">
                <div className="content">
                    <div>
                        <p>
                            <h3><strong>Website Scanning</strong></h3>
                            Enhance your online safety with MobiArmour's Website Scanning feature. Simply enter a website link and instantly receive a comprehensive security assessment. Know the safety status of any website, empowering you to browse with confidence. Safeguard your digital presence effortlessly with MobiArmour's advanced scanning technology.
                        </p>
                        <img src={WebScan} className="webScanImg"></img>
                    </div>
                </div>
            </div>
            <div id="QrScanning">
                <div className="content">
                    <div>
                        <p>
                            <h3><strong>QR Scanning</strong></h3>
                            MobiArmour's QR Scanning feature empowers users to assess the security of QR codes swiftly and effectively. Simply scan any QR code with our app to receive instant insights into its security level. Safeguard your digital interactions with confidence, knowing MobiArmour is at your fingertips
                        </p>
                        <img src={QrScan} className="QrScanImg"></img>
                    </div>
                </div>
            </div>
            <div id="OtpSecurity">
                <div className="content">
                    <div>
                        <p>
                            <h3><strong>OTP Security</strong></h3>
                            Enhance your digital security with MobiArmour's OTP Security feature. Seamlessly integrate your SIM provider to disable call forwarding settings, ensuring unparalleled protection for your one-time passwords. Safeguard your sensitive information with ease, as MobiArmour fortifies your digital presence against potential threats, empowering you with peace of mind.
                        </p>
                        <img src={OtpSecurity} className="OtpSecurityImg"></img>
                    </div>
                </div>
            </div>
            <div id="WifiSecurity">
                <div className="content">
                    <div>
                        <p>
                            <h3><strong>WiFi Security</strong></h3>
                            Enhance your digital security with MobiArmour's innovative 'WiFi Security' feature. Simply connect to your WiFi network and let our app assess its security status. Receive instant feedback on potential vulnerabilities, empowering you to safeguard your digital environment with confidence and ease.
                        </p>
                        <img src={Wifi} className="WifiSecurityImg"></img>
                    </div>
                </div>
            </div>
            <div id="ExpSecurity">
                <div className="content">
                    <div>
                        <p>
                            <h3><strong>Expert Security</strong></h3>
                            Experience digital security guidance with MobiArmour's 'Expert Security' feature. Receive personalized advice on staying secure online, including tips for safe social media usage. Our experts provide simplified insights to safeguard your digital presence. Protect your online identity with confidence, powered by MobiArmour's expertise.
                        </p>
                        <div>
                            <img src={Facebook} className="expSecImg"></img>
                            <img src={Insta} className="expSecImg"></img>
                            <img src={WhatsApp} className="expSecImg"></img>
                            <img src={Gmail} className="expSecImg"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div id="AppAnalysis">
                <div className="content">
                    <div>
                        <p>
                            <h3><strong>App Analysis</strong></h3>
                            MobiArmour's "App Analysis" feature empowers users to assess the security status of their installed applications effortlessly. With a simple scan, it categorizes apps into three levels: Danger, Medium, and Safe, providing clear insights into potential security risks. Enhance your digital safety with MobiArmour's comprehensive app security evaluation tool.
                        </p>
                        <img src={AppAnalysis} className="AppAnalysisImg"></img>
                    </div>
                </div>
            </div>
            <div id="LeakedPasswords">
                <div className="content">
                    <div>
                        <p>
                            <h3><strong>Leaked Passwords</strong></h3>
                            Discover if your email has been compromised with MobiArmour's 'Leaked Password' feature. Safeguard your digital identity by receiving alerts if your credentials are exposed in data breaches. Stay proactive in protecting your online security effortlessly.
                        </p>
                        <img src={LeakedPassword} className="LeakPassImg"></img>
                    </div>
                </div>
            </div>
            <div id="OnlineAccounts">
                <div className="content">
                    <div>
                        <p>
                            <h3><strong>Online Accounts</strong></h3>
                            Introducing MobiArmour's cutting-edge 'Online Accounts' feature! Safeguard your digital identity with ease. Effortlessly track your email's online presence across 120+ websites, empowering you to manage and secure your accounts effectively. Take control by deleting unnecessary accounts and fortify security with two-factor authentication options. Unlock peace of mind today.
                        </p>
                        <img src={OnlineAcc} className="OnlineAccImg"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features;