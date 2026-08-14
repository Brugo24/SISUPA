import { fetchEventByID } from "@/app/lib/data";
import BannerModalButton from "@/app/ui/BannerModalButton";

export default async function EventPage(props: {params: Promise<{id : string}>}){
    const id = (await props.params).id;
    const event = await fetchEventByID(id);
    const bannerImg = [event?.banner || '/placeholder/placeholder_banner.jpg'];

    return(
        <div>
            <BannerModalButton image={event?.banner || '/placeholder/placeholder_banner.jpg'}/>
        </div>
    )
}