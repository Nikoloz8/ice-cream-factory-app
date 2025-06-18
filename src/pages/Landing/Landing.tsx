import IceCreamCard from "../../components/Landing/IceCreamCard"
import MissionCard from "../../components/Landing/MissionCard"
import tailwind from "../../styles/tailwind"
import Header from "../../components/Landing/Header"
import AdvertismentSection from "../../components/Landing/AdvertismentSection"

export default function Landing() {

    const addresses = ["თბილისი, პეკინის გამზირი 20", "თბილისი, ვაჟა-ფშაველას გამზირი 45", "ბათუმი, ჭავჭავაძის ქუჩა 12", "ქუთაისი, რუსთაველის ქუჩა 87"]

    const { F4 } = tailwind()

    return (
        <div className="w-[100%] h-[100%] flex flex-col items-center min-h-[100vh] bg-[rgba(248,231,243,1)] relative">
            <Header />
            <main>
                <div className="w-[1200px] flex flex-col items-center">

                    <AdvertismentSection />

                    <section className="p-[100px_90px] mt-[68px] bg-[rgba(0,21,25,1)] rounded-[18px] flex gap-[60px]">

                        <MissionCard imgSrc="/images/landingIcons/Rectangle 84.svg" value="ნატურალური ინგრედიენტები, მრავალფეროვანი გემოები და გამორჩეული ტექსტურა — ნაყინი, რომელიც სიამოვნებას მოგანიჭებთ." title="ჩვენი პროდუქცია" />

                        <MissionCard imgSrc="/images/landingIcons/Rectangle 84 (1).svg" value="ვქმნით ნაყინს, რომელიც აერთიანებს ადამიანებს და ყოველდღიურობას ტკბილ მომენტებად აქცევს." title="ჩვენი მისია" />

                    </section>
                    <section id="პროდუქცია" className="mt-[120px] flex flex-col gap-[52px]">
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col gap-[26px] items-center">
                                <h3 className="font-[700] text-[4rem] text-[rgba(209,0,157,1)] leading-[100%]">კატალოგი</h3>
                                <div className="flex gap-[28px]">
                                    <IceCreamCard imgSrc="/images/landingIcons/Rectangle 85.svg" title="Vanilla Dream" value="ნაზი ვანილის ნაყინი ნატურალური ვანილისგან, კლასიკური და დამამშვიდებელი გემო." price="7.50₾" />
                                    <IceCreamCard imgSrc="/images/landingIcons/Rectangle 85.svg" title="Vanilla Dream" value="ნაზი ვანილის ნაყინი ნატურალური ვანილისგან, კლასიკური და დამამშვიდებელი გემო." price="7.50₾" />
                                    <IceCreamCard imgSrc="/images/landingIcons/Rectangle 85.svg" title="Vanilla Dream" value="ნაზი ვანილის ნაყინი ნატურალური ვანილისგან, კლასიკური და დამამშვიდებელი გემო." price="7.50₾" />
                                    <IceCreamCard imgSrc="/images/landingIcons/Rectangle 85.svg" title="Vanilla Dream" value="ნაზი ვანილის ნაყინი ნატურალური ვანილისგან, კლასიკური და დამამშვიდებელი გემო." price="7.50₾" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-[26px] mt-[50px] items-center">
                                <h3 className="font-[700] text-[4rem] text-[rgba(209,0,157,1)] leading-[100%]">პოპულარული</h3>
                                <div className="flex gap-[28px]">
                                    <IceCreamCard imgSrc="/images/landingIcons/Rectangle 85.svg" title="Vanilla Dream" value="ნაზი ვანილის ნაყინი ნატურალური ვანილისგან, კლასიკური და დამამშვიდებელი გემო." price="7.50₾" />
                                    <IceCreamCard imgSrc="/images/landingIcons/Rectangle 85.svg" title="Vanilla Dream" value="ნაზი ვანილის ნაყინი ნატურალური ვანილისგან, კლასიკური და დამამშვიდებელი გემო." price="7.50₾" />
                                    <IceCreamCard imgSrc="/images/landingIcons/Rectangle 85.svg" title="Vanilla Dream" value="ნაზი ვანილის ნაყინი ნატურალური ვანილისგან, კლასიკური და დამამშვიდებელი გემო." price="7.50₾" />
                                    <IceCreamCard imgSrc="/images/landingIcons/Rectangle 85.svg" title="Vanilla Dream" value="ნაზი ვანილის ნაყინი ნატურალური ვანილისგან, კლასიკური და დამამშვიდებელი გემო." price="7.50₾" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="ისტორია" className="p-[60px] flex gap-[72px] mt-[120px] items-center bg-[rgba(0,21,25,1)] rounded-[18px]">
                        <div className="flex flex-col gap-[40px] max-w-[500px]">
                            <h2 className="font-[900] leading-[100%] text-[rgba(248,231,243,1)] text-[3.2rem]">
                                <span className="text-[rgba(209,0,157,1)]">სიყვარულით </span>
                                შექმნილი ნაყინი — ჩვენი
                                <span className="text-[rgba(4,174,210,1)]"> ისტორია</span>
                            </h2>
                            <p className="text-[rgba(198,196,208,1)] font-[400] text-[1.8rem] leading-[100%]">
                                ჩვენი ისტორია დაიწყო პატარა საოჯახო სამზარეულოში, სადაც ნამდვილი გემოს ძიებამ პირველი რეცეპტი შექმნა. წლების განმავლობაში ჩვენ ვცდილობდით გაგვეხალისებინა ტკბილი მომენტები ყველასთვის — ბავშვებისთვისაც და დიდებისთვისაც. <br></br> დღეს უკვე ჩვენი ნაყინი მზადდება საუკეთესო ინგრედიენტებით და ინოვაციური მეთოდებით, თუმცა არ ვკარგავთ მთავარი იდეის: ნატურალურობა, სიახლე და დაუვიწყარი გემო.
                                ჩვენთვის ნაყინი არ არის უბრალოდ დესერტი — ეს არის გამოცდილება, რომელიც გაერთიანებს მეგობრებსა და ოჯახს.
                            </p>
                        </div>
                        <img src="/images/landingIcons/Rectangle 84 (2).svg" alt="" />
                    </section>
                    <section id="გაყიდვების წერტილები" className="p-[0_60px] flex gap-[72px] mt-[120px] items-center">
                        <div className="flex flex-col gap-[32px] max-w-[500px]">
                            <h2 className="text-[3.2rem] font-[900] leading-[100%] text-[rgba(4,174,210,1)]">გაყიდვების წერტილები</h2>
                            <p className="font-[400] text-[1.8rem] leading-[100%] text-[rgba(0,21,25,0.8)]">გემრიელი სიახლეები შენს ახლოს! იპოვე ჩვენი გაყიდვის წერტილები რუკაზე ან მისამართების სიაში და დატკბი შენი საყვარელი ნაყინით ნებისმიერ დროს.</p>
                            <div className="flex flex-col gap-[5px]">
                                {addresses.map((e, i) => {
                                    return <h4 className="flex items-center gap-[5px] leading-[150%] text-[rgba(0,21,25,0.8)] text-[1.8rem] font-[400]" key={i}>
                                        <img src="/images/landingIcons/Vector (4).svg" alt="" />
                                        {e}
                                    </h4>
                                })}
                            </div>
                        </div>
                        <div className="relative">
                            <img src="/images/landingIcons/Rectangle 85 (1).svg" alt="" />
                            <img src="/images/landingIcons/Vector (5).svg" className="absolute top-[51px] left-[160px]" alt="" />
                            <img src="/images/landingIcons/Vector (5).svg" className="absolute top-[202px] left-[323px]" alt="" />
                        </div>
                    </section>
                </div>
            </main>
            <footer id="კონტაქტი" className="bg-[rgba(0,21,25,1)] p-[30px_80px] w-[100%] mt-[129px] flex items-center justify-center">
                <div className="w-[1200px] flex flex-col">
                    <div className="flex justify-between pb-[32px] border-b-[1px] border-solid border-[rgba(255,255,255,1)]">
                        <div className="flex flex-col gap-[20px] items-start max-w-[416px]">
                            <img src="/images/landingIcons/OBJETCS.svg" alt="" />
                            <p className="text-[1.4rem] font-[400] leading-[26px] text-[rgba(199,199,199,1)] ">ჩვენ ვქმნით ნაყინის უნიკალურ გამოცდილებას — ყოველ ქილაში ახალი გემო და სიხარულია. იყავით პირველები, ვინც გაიგებს ჩვენს სიახლეებს და სპეციალურ შეთავაზებებს.</p>
                        </div>
                        <div className="flex gap-[100px]">
                            <div className="flex flex-col gap-[16px]">
                                <h5 className="text-[1.8rem] font-[400] leading-[100%] text-[rgba(255,255,255,1)]">გამოგვყევით</h5>
                                <div className="flex flex-col gap-[8px]">
                                    <a href="" className={`${F4}`}>Facebook</a>
                                    <a href="" className={`${F4}`}>Instagram</a>
                                    <a href="" className={`${F4}`}>LinkedIn</a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[16px]">
                                <h5 className="text-[1.8rem] font-[400] leading-[100%] text-[rgba(255,255,255,1)]">დაგვიკავშირდით</h5>
                                <div className="flex flex-col gap-[8px]">
                                    <a href="" className={`${F4} flex items-center gap-[24px]`}>
                                        <img src="/images/landingIcons/Vector (6).svg" alt="" />
                                        +995 599 123 456
                                    </a>
                                    <a href="" className={`${F4} flex items-center gap-[24px]`}>
                                        <img src="/images/landingIcons/Vector (7).svg" alt="" />
                                        icecream@gmail.com
                                    </a>
                                    <a href="" className={`${F4} flex items-center gap-[24px]`}>
                                        <img src="/images/landingIcons/Vector (8).svg" alt="" />
                                        Address : Tbilisi
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-[38px] p-[30px_0_0_0]">
                        <a href="" className={`${F4} text-[1.2rem] leading-[100%]`}>მხარდაჭერა</a>
                        <a href="" className={`${F4} text-[1.2rem] leading-[100%]`}>სერვისები</a>
                        <a href="" className={`${F4} text-[1.2rem] leading-[100%]`}>წესები და პირობები</a>
                    </div>
                </div>
            </footer>
        </div >
    )
}
