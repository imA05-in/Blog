import logo from "../../assets/hero.png";

export default function () {
  const footerCompanyItems = [
    { title: "Features" },
    { title: "Pricing" },
    { title: "Affiliate Programs" },
    { title: "Press Kit" },
  ];

  const footerSupportItems = [
    { title: "Account" },
    { title: "Help" },
    { title: "Contact Us" },
    { title: "Customer Support" },
  ];
  const footerLegalsItems = [
    { title: "Terms & Conditions" },
    { title: "Privacy Policy" },
    { title: "Licensing" },
  ];

  return (
    <div className="border-t flex justify-between px-2 py-2 items-center">
      

      <div className="md:flex hidden justify-between px-2 py-2 gap-40 ">
        <div className="md:pl-10 sm:pl-10">
        <img className="max-w-20" src={logo} alt="" />
      </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-400 font-medium text-xl pb-2">Company</p>
          {footerCompanyItems.map((item) => {
            return (
              <div key={item.title} className="text-gray-400/90">
                {item.title}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-gray-400 font-medium text-xl pb-2">Support</p>
          {footerSupportItems.map((item) => {
            return (
              <div key={item.title} className="text-gray-400/90">
                {item.title}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-gray-400 font-medium text-xl pb-2">Legals</p>
          {footerLegalsItems.map((item) => {
            return (
              <div key={item.title} className="text-gray-400/90">
                {item.title}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-10 justify-center items-center w-full md:hidden">

<div className="md:pl-10 sm:pl-10">
        <img className="max-w-20" src={logo} alt="" />
      </div>

        <div className="flex flex-col gap-3">
          <p className="text-gray-400 font-medium text-xl pb-2">Company</p>
          {footerCompanyItems.map((item) => {
            return (
              <div key={item.title} className="text-gray-400/90">
                {item.title}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-gray-400 font-medium text-xl pb-2">Support</p>
          {footerSupportItems.map((item) => {
            return (
              <div key={item.title} className="text-gray-400/90">
                {item.title}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 ">
          <p className="text-gray-400 font-medium text-xl pb-2">Legals</p>
          {footerLegalsItems.map((item) => {
            return (
              <div key={item.title} className="text-gray-400/90">
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
