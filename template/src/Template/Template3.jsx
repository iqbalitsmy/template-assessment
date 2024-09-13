import icon from "../assets/template3/logo.svg"
import image from "../assets/template3/image.png"
import phoneIcon from "../assets/template3/phone-icon.svg"

const Template3 = () => {
    return (
        <section className='w-[400px] h-fit bg-white'>
            <div className='relative mb-10'>
                <div className='grid grid-cols-2 justify-between'>
                    {/* brand logo */}
                    <div>
                        <div className="px-9 pt-6 flex items-center gap-1 text-[8px] leading-none">
                            <img className='h-[21px] w-[26px]' src={icon} alt="" />
                            <p>SocialBoost <br /> Creation</p>
                        </div>
                    </div>
                    {/* worker image */}
                    <div
                        className='ml-auto'
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0% 40%)' }}
                    >
                        <img className="" src={image} alt="" />
                        <div
                            className='bg-t3-secondary-color h-4 w-[73%] items-end ml-auto'
                            style={{
                                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 5% 100%)',
                                margin: ""
                            }}
                        >
                        </div>
                    </div>
                </div>
                {/* black box */}
                <div
                    className='p-7 pb-9 w-[266px] bg-t3-secondary-color absolute top-20 leading-none'
                    style={{ clipPath: 'polygon(0 0, 80% 0%, 100% 100%, 0% 100%)' }}
                >
                    <h3 className='w-[189px] text-t3-primary-color text-[22px] font-semibold uppercase mb-4'>Boost Your Business with Targeted Social Media Posts Today!!</h3>
                    <p className='w-[182px] text-white text-[12px]'>Engage your audience and amplify your brand’s message with strategic, high-impact social media posts</p>
                </div>
            </div>
            <div className='mt-auto flex justify-between h-[117px] relative'>
                {/* information */}
                <div className="pl-6 leading-none flex items-center gap-2 z-10">
                    <img className='h-7 w-7' src={phoneIcon} alt="" />
                    <div>
                        <p className="text-[10px]">More Information :</p>
                        <a className="text-xs font-semibold" href="tel:+123-456-789-00">+123-456-789-00</a>
                    </div>
                </div>
                {/* yellow box */}
                <div
                    className='bg-t3-primary-color h-full w-[231px] grid place-content-center'
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 16% 100%)' }}
                >
                    <div
                        className='p-3 px-5 bg-t3-secondary-color text-white text-[10px]'
                        style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)' }}
                    >
                        <p>Start posting today!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Template3;