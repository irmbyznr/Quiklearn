import {info,image} from "../constants/index"
import { ClientSlider } from "./clients-slider";
//https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/themes/quiklearn/assets/element/red-star.svg
export const ClientsSection = () => {
    const {clientTitle1,clientTitle2,clientDesc} = info;
    const {underline}=image;
  return (
    <div className="bg-cream pt-24">
        <div className="mx-auto container flex flex-col items-center justify-between p-6">
            <div className="flex flex-col items-center justify-center">
                <p className="text-grey text-sm p-1">{clientTitle1}</p>
                <div className="text-purple text-4xl font-semibold relative pb-6">
                    <h2>{clientTitle2}</h2>
                    <img src={underline} alt="" className="absolute right-7" />
                </div>
                <p className="text-grey text-base">{clientDesc}</p>
            </div>
        </div>
        <ClientSlider/>
    </div>
  )
}
