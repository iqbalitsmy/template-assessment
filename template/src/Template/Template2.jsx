import rectangle from "../assets/template2/image/Rectangle.png"
import icon from "../assets/template2/PlanPost AI Logo 1.svg"
import phoneIcon from "../assets/template2/white phone.svg"

const Template2 = () => {
    return (
        <section className='w-[400px] h-fit'>
            <div
                className="h-[210px]"
                style={{
                    backgroundImage: `url(${rectangle})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "center",
                }}
            >
                <div className="pt-6 bg-[#004AAD] w-full h-full bg-opacity-5 relative uppercase">
                    {/* logo */}
                    <div className="px-9 flex gap-1 text-[8px]">
                        <img src={icon} alt="" />
                        <p>SocialBoost Creation</p>
                    </div>
                    {/* boost your business */}
                    <div
                        className="px-9 py-4 flex w-[307px] text-white text-xl font-semibold absolute -bottom-16 bg-t2-primary-color"
                        style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0 100%)' }}
                    >
                        <h2 className="w-56">Boost Your Business with Targeted Social Media Posts Today!!</h2>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className="bg-[#023172] pt-[60px]">
                <div className="px-9 py-5 text-[15px] bg-t2-secondary-color text-white">
                    <p>Engage your audience and amplify your brand’s message with strategic, high-impact social media posts</p>
                </div>
                <div className="h-fit grid grid-cols-2 justify-between items-center bg-t2-primary-color">
                    <div
                        className="h-full grid place-content-center w-40 text-[10px] text-t2-secondary-color bg-white"
                        style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0% 100%)' }}
                    >
                        <p>Start posting today!</p>
                    </div>
                    <div className="py-4 text-white flex items-center gap-1 text-[13px] font-semibold">
                        <div className="">
                            <img className="h-5 w-5" src={phoneIcon} alt="" />
                        </div>
                        <a href="tel:+12345678900">+123-456-789-00</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Template2;