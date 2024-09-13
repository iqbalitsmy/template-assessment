import shape1 from "../assets/template1/Clip path group.svg"
import shape2 from "../assets/template1/Clip path group 2.svg"
import shape3 from "../assets/template1/Clip path group 3.svg"
import shape4 from "../assets/template1/Clip path group 4.svg"
import logo from "../assets/template1/PlanPost AI Logo 1.svg"
import phoneIcon from "../assets/template1/phone icon.svg"

const Template1 = () => {
  return (
    <section className='w-fit bg-t1-primary-color'>
      <div>
        <div>
          <img src={shape1} alt="" />
        </div>
        <div
          className="px-6 mb-6 h-full"
          style={{
            backgroundImage: `url(${shape2})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "center"
          }}
        >
          <div className="pt-8 text-white text-right flex justify-end items-center gap-2">
            <h1 className="leading-none text-[7px] font-bold uppercase">Social Boost <br className="" />Creation</h1>
            <img className="h-[25px] w-auto" src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="mx-6 mb-4 flex justify-between gap-8">
        {/* empty box */}
        <div>
          <div className="h-full w-[140px] border-solid border-8 border-t1-secondary-color bg-white">
          </div>
        </div>
        <div className="text-right w-[180px]">
          <div className="mb-8 grid gap-4">
            <h2 className="text-[21px] font-semibold text-t1-secondary-color leading-none uppercase">Boost Your Business with Targeted Social Media Posts Today!!</h2>
            <p className="text-[11px] text-white">Engage your audience and amplify your brand’s message with strategic, high-impact social media posts</p>
          </div>
          <div className="grid justify-end text-xs">
            <div className="bg-t1-secondary-color px-3 py-2 rounded-full">
              <p>Start posting today!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="px-6 h-[60px] grid justify-end"
          style={{
            backgroundImage: `url(${shape3})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "center"
          }}
        >
          <div>
            <div className="flex gap-2 items-center">
              <div className="text-white text-right leading-none">
                <p className="text-[8px]">More Information :</p>
                <a className="text-[10px] font-semibold" href="tel:+123-456-789-00">+123-456-789-00</a>
              </div>
              <div className="bg-t1-secondary-color py-2 px-2 rounded-full">
                <img className="h-[13.3px] w-3" src={phoneIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={shape4} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Template1;